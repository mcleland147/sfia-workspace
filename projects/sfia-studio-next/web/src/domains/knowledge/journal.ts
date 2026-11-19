import { createHash } from "crypto";
import { and, desc, eq, inArray, isNull, ne, or, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversations,
  documentRevisions,
  documents,
  governanceRestrictions,
  humanDecisions,
  knowledgeAcquis,
  knowledgeDecisionExplanationRevisions,
  knowledgeOpenPointEvents,
  knowledgeOpenPoints,
  knowledgeSubjectEvents,
  knowledgeSubjectSummaryRevisions,
  knowledgeSubjects,
  messages,
  preparationProjectLinks,
  preparations,
  projects,
} from "@/db/schema";
import type { Provenance } from "@/domains/knowledge/service";
import {
  assertHonestSynthesisInput,
  detectAcquisContradictions,
  qualifyProvenanceSource,
  type ExtendedProvenance,
} from "@/domains/knowledge/journal-cognition";
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
    /** Optional qualified sources already evaluated by D3/D4 (J-C06). */
    qualifiedSources?: Awaited<ReturnType<typeof qualifyProvenanceSource>>[];
    /** When true (default), refuse overclaiming established facts over unresolved contradictions. */
    enforceHonesty?: boolean;
  },
) {
  const markdown = input.summaryMarkdown.trim();
  if (!markdown || markdown.length < 12) {
    return { status: "SKIPPED" as const, reason: "summary too thin for durable revision" };
  }

  const subject = await loadOwnedSubjectForProject(pilotId, projectId, subjectId);
  if (!subject) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  if (subject.status !== "ACTIVE") return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };

  if (input.enforceHonesty !== false) {
    const acquisRows = await db
      .select({
        id: knowledgeAcquis.id,
        subjectId: knowledgeAcquis.subjectId,
        statement: knowledgeAcquis.statement,
        status: knowledgeAcquis.status,
        kind: knowledgeAcquis.kind,
      })
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.ownerPilotId, pilotId),
          eq(knowledgeAcquis.subjectId, subjectId),
          eq(knowledgeAcquis.status, "CURRENT"),
        ),
      );
    const contradictions = detectAcquisContradictions(acquisRows);
    const sources =
      input.qualifiedSources ??
      (await Promise.all([
        qualifyProvenanceSource(pilotId, input.provenance as ExtendedProvenance),
      ]));
    const honesty = assertHonestSynthesisInput({
      summaryMarkdown: markdown,
      contradictions,
      sources,
    });
    if (!honesty.ok) {
      return { status: "SKIPPED" as const, reason: honesty.reason };
    }
  }

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

/** E06-05 — open point must belong to a preparation linked to the requested project. */
export async function loadOwnedOpenPoint(
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

/**
 * E06-06 — factual resolve requires a revalidated source, not an invented id string.
 * Document/revision/message must exist in the project scope for the Pilote.
 */
async function provenanceFactuallyVerified(
  pilotId: string,
  projectId: string,
  p: Provenance,
): Promise<{ ok: true } | { ok: false; reason: string }> {
  if (!provenanceSufficient(p)) {
    return { ok: false, reason: "INSUFFICIENT_PROVENANCE" };
  }
  if (p.sourceKind === "pilot" || p.sourceKind === "nora") {
    return { ok: false, reason: "ACTOR_DECLARATION_NOT_FACTUAL_SOURCE" };
  }
  const prepIds = await linkedPreparationIds(pilotId, projectId);
  if (prepIds.length === 0) return { ok: false, reason: "NO_PROJECT_SCOPE" };

  if (p.sourceKind === "message" && p.sourceId) {
    const msg = (
      await db
        .select({ id: messages.id })
        .from(messages)
        .innerJoin(conversations, eq(conversations.id, messages.conversationId))
        .where(
          and(
            eq(messages.id, p.sourceId),
            eq(conversations.ownerPilotId, pilotId),
            inArray(conversations.preparationId, prepIds),
          ),
        )
        .limit(1)
    )[0];
    if (!msg) return { ok: false, reason: "MESSAGE_SOURCE_INACCESSIBLE" };
    return { ok: true };
  }

  if (p.sourceKind === "document" || p.sourceKind === "revision") {
    const sourceId = p.sourceId;
    if (!sourceId) return { ok: false, reason: "INSUFFICIENT_PROVENANCE" };
    const rev = (
      await db
        .select({
          id: documentRevisions.id,
          status: documentRevisions.status,
        })
        .from(documentRevisions)
        .innerJoin(documents, eq(documents.id, documentRevisions.documentId))
        .where(
          and(
            eq(documentRevisions.id, sourceId),
            eq(documents.ownerPilotId, pilotId),
            inArray(documents.preparationId, prepIds),
          ),
        )
        .limit(1)
    )[0];
    if (rev) {
      if (rev.status !== "AVAILABLE") {
        return { ok: false, reason: "DOCUMENT_REVISION_NOT_AVAILABLE" };
      }
      return { ok: true };
    }
    const doc = (
      await db
        .select({ id: documents.id })
        .from(documents)
        .where(
          and(
            eq(documents.id, sourceId),
            eq(documents.ownerPilotId, pilotId),
            inArray(documents.preparationId, prepIds),
          ),
        )
        .limit(1)
    )[0];
    if (!doc) return { ok: false, reason: "DOCUMENT_SOURCE_INACCESSIBLE" };
    return { ok: true };
  }

  return { ok: false, reason: "UNSUPPORTED_PROVENANCE_KIND" };
}

export async function resolveOpenPointFactually(
  pilotId: string,
  projectId: string,
  openPointId: string,
  input: { reason: string; provenance: Provenance; operationId?: string; actorKind?: string },
) {
  const verified = await provenanceFactuallyVerified(pilotId, projectId, input.provenance);
  if (!verified.ok) {
    return { status: "FAILED" as const, reason: verified.reason };
  }
  const point = await loadOwnedOpenPoint(pilotId, projectId, openPointId);
  if (!point) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  if (point.status === "RESOLVED") {
    return { status: "AVAILABLE" as const, openPointId, alreadyResolved: true as const };
  }

  // J-C05 — factual D4 resolve never mutates D6 restrictions. Snapshot ACTIVE count for callers/tests.
  const activeRestrictionsBefore = await db
    .select({ id: governanceRestrictions.id })
    .from(governanceRestrictions)
    .where(
      and(
        eq(governanceRestrictions.projectId, projectId),
        eq(governanceRestrictions.status, "ACTIVE"),
      ),
    );

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
      const activeRestrictionsAfter = await tx
        .select({ id: governanceRestrictions.id })
        .from(governanceRestrictions)
        .where(
          and(
            eq(governanceRestrictions.projectId, projectId),
            eq(governanceRestrictions.status, "ACTIVE"),
          ),
        );
      if (activeRestrictionsAfter.length !== activeRestrictionsBefore.length) {
        throw new Error("D6_RESTRICTION_MUTATION_FORBIDDEN");
      }
      return {
        status: "AVAILABLE" as const,
        openPointId,
        eventId,
        activeRestrictionIds: activeRestrictionsAfter.map((r) => r.id),
      };
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
      supersedesDecisionId: humanDecisions.supersedesDecisionId,
      effectiveAt: humanDecisions.effectiveAt,
      createdAt: humanDecisions.createdAt,
    })
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId))
    .orderBy(desc(humanDecisions.createdAt));

  const supersededBy = new Map<string, string>();
  for (const d of decisionRows) {
    if (d.supersedesDecisionId) {
      supersededBy.set(d.supersedesDecisionId, d.id);
    }
  }

  const decisions = [];
  for (const d of decisionRows) {
    const expl = await getCurrentDecisionExplanation(pilotId, projectId, d.id);
    const applicable = d.state === "APPLICABLE" && !supersededBy.has(d.id);
    decisions.push({
      ...d,
      applicable,
      supersededByDecisionId: supersededBy.get(d.id) ?? null,
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
    .where(eq(governanceRestrictions.projectId, projectId));

  const contradictions = detectAcquisContradictions(
    knowledge.acquis.map((a) => ({
      id: a.id,
      subjectId: a.subjectId,
      statement: a.statement,
      status: a.status,
      kind: a.kind,
    })),
  );

  const sourceLinks: Array<{
    ownerKind: "acquis" | "open_point" | "summary";
    ownerId: string;
    subjectId: string | null;
    sourceKind: string;
    sourceId?: string;
    documentId?: string;
    revisionId?: string;
    currentness: string;
    detail: string;
  }> = [];

  for (const a of knowledge.acquis) {
    if (a.status !== "CURRENT") continue;
    try {
      const prov = JSON.parse(a.provenanceJson) as ExtendedProvenance;
      const q = await qualifyProvenanceSource(pilotId, prov);
      sourceLinks.push({
        ownerKind: "acquis",
        ownerId: a.id,
        subjectId: a.subjectId,
        sourceKind: q.sourceKind,
        sourceId: q.sourceId,
        documentId: q.documentId,
        revisionId: q.revisionId,
        currentness: q.currentness,
        detail: q.detail,
      });
    } catch {
      /* provenance JSON corrupt — omit rather than invent */
    }
  }
  for (const o of knowledge.openPoints) {
    try {
      const prov = JSON.parse(o.provenanceJson) as ExtendedProvenance;
      const q = await qualifyProvenanceSource(pilotId, prov);
      sourceLinks.push({
        ownerKind: "open_point",
        ownerId: o.id,
        subjectId: o.subjectId,
        sourceKind: q.sourceKind,
        sourceId: q.sourceId,
        documentId: q.documentId,
        revisionId: q.revisionId,
        currentness: q.currentness,
        detail: q.detail,
      });
    } catch {
      /* omit */
    }
  }

  return {
    knowledge: {
      ...knowledge,
      acquis: knowledge.acquis.map((a) => ({
        ...a,
        provenanceJson: a.provenanceJson,
      })),
      openPoints: knowledge.openPoints.map((o) => ({
        ...o,
        provenanceJson: o.provenanceJson,
      })),
    },
    decisions,
    restrictions,
    contradictions,
    sourceLinks,
  };
}