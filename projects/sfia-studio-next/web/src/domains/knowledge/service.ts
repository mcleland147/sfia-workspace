import { and, desc, eq, inArray, isNull, ne, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  documentRevisions,
  documents,
  knowledgeAcquis,
  knowledgeOpenPoints,
  knowledgeSubjectEvents,
  knowledgeSubjects,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { getPreparationContext } from "@/domains/preparation/service";
import {
  assertTurnFenceInTx,
  type TurnOwnershipFence,
} from "@/domains/conversation/turn-command";
export type Provenance = {
  sourceKind: "message" | "document" | "revision" | "pilot" | "nora";
  sourceId?: string;
  generationId?: string;
  notedAt?: string;
  note?: string;
  /** Epistemic confidence of the recorder — never upgrades authority. */
  epistemic?: "observed" | "hypothesized" | "recommended" | "limited" | "established";
  /** Extra constitutive message ids (Pilot/Nora) — never invent ids. */
  relatedMessageIds?: string[];
  contributionKind?: "pilot_fact" | "nora_analysis" | "pilot_confirmation" | "mixed";
  /**
   * E1-REL-04 — short canonical open-point title from Nora qualification.
   * Display prefers this over editorial truncation of the statement.
   */
  canonicalTitle?: string;
};

export type KnowledgeKind = "FACT" | "HYPOTHESIS" | "RECOMMENDATION" | "LIMIT";

export {
  KNOWLEDGE_STATEMENT_STORAGE_MAX,
  KNOWLEDGE_STATEMENT_SOFT_MAX,
  KNOWLEDGE_BULLET_DISPLAY_MAX,
  SUBJECT_SUMMARY_TARGET_MIN,
  SUBJECT_SUMMARY_TARGET_MAX,
  JOURNAL_ACQUIS_DISPLAY_LIMIT,
  JOURNAL_OPEN_POINT_DISPLAY_LIMIT,
  editorialStripPreamble,
  editorialCompactKnowledgeStatement,
  editorialDisplayBullet,
  prioritizeAcquisForJournalDisplay,
  prioritizeOpenPointsForJournalDisplay,
  composeSubjectSummaryFromCurrentKnowledge,
} from "./journal-editorial";

import {
  editorialCompactKnowledgeStatement,
  composeSubjectSummaryFromCurrentKnowledge,
} from "./journal-editorial";
import {
  orderSubjectCreatesByDependency,
  resolveBatchParentRef,
  type SubjectCreateProposal,
} from "./subject-proposal-batch";

function provenanceString(p: Provenance): string {
  return JSON.stringify({ ...p, notedAt: p.notedAt ?? new Date().toISOString() });
}

async function assertPrep(pilotId: string, preparationId: string) {
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.preparation) throw Object.assign(new Error("NOT_FOUND"), { code: "NOT_FOUND" });
  return ctx;
}

type Tx = {
  select: typeof db.select;
  insert: typeof db.insert;
  update: typeof db.update;
  execute: typeof db.execute;
};

async function loadOwnedSubject(
  pilotId: string,
  preparationId: string,
  subjectId: string,
  tx: Tx = db,
) {
  return (
    await tx
      .select()
      .from(knowledgeSubjects)
      .where(
        and(
          eq(knowledgeSubjects.id, subjectId),
          eq(knowledgeSubjects.ownerPilotId, pilotId),
          eq(knowledgeSubjects.preparationId, preparationId),
        ),
      )
      .limit(1)
  )[0];
}

async function assertSubjectRef(
  pilotId: string,
  preparationId: string,
  subjectId: string | null | undefined,
) {
  if (!subjectId) return null;
  const row = await loadOwnedSubject(pilotId, preparationId, subjectId);
  if (!row) return { error: "SUBJECT_FOREIGN_OR_UNKNOWN" as const };
  return { subject: row };
}

/** Resolve an ACTIVE subject by exact title within the preparation (owner-scoped). */
async function findActiveSubjectByTitle(
  pilotId: string,
  preparationId: string,
  title: string,
): Promise<{ id: string } | null> {
  const cleaned = title.trim().slice(0, 200);
  if (!cleaned) return null;
  const rows = await db
    .select({ id: knowledgeSubjects.id })
    .from(knowledgeSubjects)
    .where(
      and(
        eq(knowledgeSubjects.preparationId, preparationId),
        eq(knowledgeSubjects.ownerPilotId, pilotId),
        eq(knowledgeSubjects.title, cleaned),
        eq(knowledgeSubjects.status, "ACTIVE"),
      ),
    )
    .limit(2);
  if (rows.length !== 1) return null;
  return rows[0] ?? null;
}

async function precreateBatchSubjects(
  pilotId: string,
  preparationId: string,
  proposals: Array<{
    intentId: string;
    kind: "ACQUIS" | "OPEN_POINT" | "SUBJECT";
    statement: string;
    subjectTitle?: string;
    subjectId?: string;
    parentSubjectId?: string;
    subjectOrganization?: "MERGE" | "SPLIT" | "DETACH";
  }>,
  fence: TurnOwnershipFence | undefined,
): Promise<{
  createdByIntentId: Map<string, string>;
  failedByIntentId: Map<string, string>;
  ownershipLost: boolean;
}> {
  const createdByIntentId = new Map<string, string>();
  const failedByIntentId = new Map<string, string>();
  const specs: SubjectCreateProposal[] = [];

  for (const p of proposals) {
    if (p.kind !== "SUBJECT") continue;
    if (p.subjectId?.trim()) {
      const check = await assertSubjectRef(pilotId, preparationId, p.subjectId);
      if (check?.subject) continue;
      // E1-REL-02 — explicit unknown/foreign subjectId must not silently create another subject.
      failedByIntentId.set(
        p.intentId,
        check && "error" in check ? check.error : "SUBJECT_FOREIGN_OR_UNKNOWN",
      );
      continue;
    }
    // Organization ops (MERGE/SPLIT/DETACH) require an existing subjectId — never precreate.
    if (p.subjectOrganization) {
      failedByIntentId.set(p.intentId, "SUBJECT_ORG_REQUIRES_SUBJECT_ID");
      continue;
    }
    const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
    if (title.length < 3) continue;
    const parentRef =
      p.parentSubjectId && p.parentSubjectId !== p.subjectId
        ? p.parentSubjectId.trim()
        : undefined;
    specs.push({ intentId: p.intentId, title, parentRef });
  }

  if (specs.length === 0) {
    return { createdByIntentId, failedByIntentId, ownershipLost: false };
  }

  const ordering = orderSubjectCreatesByDependency(specs);
  if (!("ordered" in ordering)) {
    if (ordering.reason === "SUBJECT_BATCH_CYCLE") {
      for (const s of specs) {
        failedByIntentId.set(s.intentId, ordering.reason);
      }
    } else {
      failedByIntentId.set(ordering.error, ordering.reason);
    }
    return { createdByIntentId, failedByIntentId, ownershipLost: false };
  }

  for (const spec of ordering.ordered) {
    const parentResolved = spec.parentRef
      ? resolveBatchParentRef(spec.parentRef, {
          self: spec,
          batch: ordering.ordered,
          createdByIntentId,
        })
      : ({ kind: "root" } as const);

    let parentSubjectId: string | null = null;
    if (parentResolved.kind === "error") {
      failedByIntentId.set(spec.intentId, parentResolved.reason);
      continue;
    }
    if (parentResolved.kind === "pending_batch") {
      failedByIntentId.set(spec.intentId, "SUBJECT_BATCH_ORDER");
      continue;
    }
    if (parentResolved.kind === "resolved") {
      parentSubjectId = parentResolved.parentSubjectId;
      if (parentSubjectId.startsWith("subj_")) {
        const check = await assertSubjectRef(pilotId, preparationId, parentSubjectId);
        if (check && "error" in check) {
          failedByIntentId.set(spec.intentId, check.error ?? "SUBJECT_FOREIGN_OR_UNKNOWN");
          continue;
        }
      }
    }
    if (parentResolved.kind === "lookup_title") {
      const found = await findActiveSubjectByTitle(
        pilotId,
        preparationId,
        parentResolved.title,
      );
      if (!found) {
        failedByIntentId.set(spec.intentId, "PARENT_NOT_FOUND");
        continue;
      }
      parentSubjectId = found.id;
    }

    const s = await ensureSubject(
      pilotId,
      preparationId,
      spec.title,
      parentSubjectId,
      fence,
    );
    if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
      return { createdByIntentId, failedByIntentId, ownershipLost: true };
    }
    if (s.status === "AVAILABLE" && s.subjectId) {
      createdByIntentId.set(spec.intentId, s.subjectId);
    } else if (s.status === "FAILED" && "reason" in s) {
      failedByIntentId.set(spec.intentId, String(s.reason));
    }
  }

  return { createdByIntentId, failedByIntentId, ownershipLost: false };
}

/** Selective capitalisation — never invents D6 decisions. */
export async function capitalizeAcquis(
  pilotId: string,
  preparationId: string,
  input: {
    statement: string;
    kind?: KnowledgeKind;
    subjectId?: string | null;
    provenance: Provenance;
    supersedesAcquisId?: string;
    /** Required when write is imputed to a Nora turn — verified inside the write TX. */
    turnFence?: TurnOwnershipFence;
  },
) {
  const ctx = await assertPrep(pilotId, preparationId);
  const statement = editorialCompactKnowledgeStatement(input.statement);
  if (!statement || statement.length < 12) {
    return { status: "SKIPPED" as const, reason: "statement too thin for capitalisation" };
  }

  // Default: never auto-promote to FACT without explicit justification in provenance.
  const kind: KnowledgeKind = input.kind ?? "HYPOTHESIS";
  if (kind === "FACT" && input.provenance.epistemic !== "established") {
    return {
      status: "SKIPPED" as const,
      reason: "FACT requires provenance.epistemic=established",
    };
  }

  if (input.subjectId) {
    const check = await assertSubjectRef(pilotId, preparationId, input.subjectId);
    if ("error" in (check ?? {}) && check && "error" in check) {
      return { status: "FAILED" as const, reason: check.error };
    }
    if (check?.subject && check.subject.status !== "ACTIVE") {
      return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };
    }
  }

  if (input.supersedesAcquisId) {
    const prior = (
      await db
        .select()
        .from(knowledgeAcquis)
        .where(
          and(
            eq(knowledgeAcquis.id, input.supersedesAcquisId),
            eq(knowledgeAcquis.ownerPilotId, pilotId),
            eq(knowledgeAcquis.preparationId, preparationId),
          ),
        )
        .limit(1)
    )[0];
    if (!prior) return { status: "FAILED" as const, reason: "SUPERSEDES_FOREIGN_OR_UNKNOWN" };
  }

  // Trivial duplicate guard: same CURRENT statement under same subject
  const dup = (
    await db
      .select()
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.preparationId, preparationId),
          eq(knowledgeAcquis.ownerPilotId, pilotId),
          eq(knowledgeAcquis.status, "CURRENT"),
          eq(knowledgeAcquis.statement, statement),
        ),
      )
      .limit(1)
  )[0];
  if (dup) {
    return {
      status: "AVAILABLE" as const,
      acquisId: dup.id,
      kind: dup.kind as KnowledgeKind,
      deduplicated: true as const,
    };
  }

  const id = newId("acq");
  const write = await db.transaction(async (tx) => {
    if (input.turnFence) {
      const owned = await assertTurnFenceInTx(tx as Tx, input.turnFence);
      if (!owned) {
        return { status: "OWNERSHIP_LOST" as const };
      }
    }
    await tx.insert(knowledgeAcquis).values({
      id,
      preparationId,
      projectId: ctx.project?.id ?? null,
      ownerPilotId: pilotId,
      subjectId: input.subjectId ?? null,
      kind,
      statement,
      provenanceJson: provenanceString(input.provenance),
      status: "CURRENT",
      supersedesAcquisId: input.supersedesAcquisId ?? null,
    });
    if (input.supersedesAcquisId) {
      await tx
        .update(knowledgeAcquis)
        .set({ status: "SUPERSEDED", updatedAt: new Date() })
        .where(
          and(
            eq(knowledgeAcquis.id, input.supersedesAcquisId),
            eq(knowledgeAcquis.ownerPilotId, pilotId),
            eq(knowledgeAcquis.preparationId, preparationId),
          ),
        );
    }
    return { status: "OK" as const };
  });
  if (write.status === "OWNERSHIP_LOST") {
    return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
  }
  // ML2 derived-index lifecycle (best-effort; flag OFF → no-op).
  try {
    const {
      revokeDerivedSource,
      upsertDerivedAdmissibleSource,
      derivedEmbeddingSearchEnabled,
    } = await import("@/domains/knowledge/derived-embedding-service");
    if (derivedEmbeddingSearchEnabled() && ctx.project?.id) {
      if (input.supersedesAcquisId) {
        await revokeDerivedSource(ctx.project.id, input.supersedesAcquisId);
      }
      await upsertDerivedAdmissibleSource({
        pilotId,
        projectId: ctx.project.id,
        preparationId,
        sourceId: id,
        sourceKind: "acquis",
        text: `${kind}: ${statement}`,
        versionLabel: "CURRENT",
      });
    }
  } catch {
    /* index lifecycle never blocks capitalisation */
  }
  return { status: "AVAILABLE" as const, acquisId: id, kind };
}

export async function openPoint(
  pilotId: string,
  preparationId: string,
  input: {
    statement: string;
    subjectId?: string | null;
    provenance: Provenance;
    turnFence?: TurnOwnershipFence;
    /** Short canonical title (E1-REL-04) — stored in provenance, no schema migration. */
    canonicalTitle?: string;
  },
) {
  const ctx = await assertPrep(pilotId, preparationId);
  const statement = editorialCompactKnowledgeStatement(input.statement, 280);
  if (!statement || statement.length < 12) {
    return { status: "FAILED" as const, reason: "empty" };
  }
  if (input.subjectId) {
    const check = await assertSubjectRef(pilotId, preparationId, input.subjectId);
    if (check && "error" in check) return { status: "FAILED" as const, reason: check.error };
    if (check?.subject && check.subject.status !== "ACTIVE") {
      return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };
    }
  }
  const canonicalTitle = input.canonicalTitle?.trim().slice(0, 120) || undefined;
  const id = newId("opn");
  const write = await db.transaction(async (tx) => {
    if (input.turnFence) {
      const owned = await assertTurnFenceInTx(tx as Tx, input.turnFence);
      if (!owned) {
        return { status: "OWNERSHIP_LOST" as const };
      }
    }
    await tx.insert(knowledgeOpenPoints).values({
      id,
      preparationId,
      projectId: ctx.project?.id ?? null,
      ownerPilotId: pilotId,
      subjectId: input.subjectId ?? null,
      statement,
      status: "OPEN",
      provenanceJson: provenanceString({
        ...input.provenance,
        ...(canonicalTitle ? { canonicalTitle } : {}),
      }),
    });
    return { status: "OK" as const };
  });
  if (write.status === "OWNERSHIP_LOST") {
    return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
  }
  // ML2 derived-index lifecycle (best-effort; flag OFF → no-op).
  try {
    const {
      upsertDerivedAdmissibleSource,
      derivedEmbeddingSearchEnabled,
    } = await import("@/domains/knowledge/derived-embedding-service");
    if (derivedEmbeddingSearchEnabled() && ctx.project?.id) {
      await upsertDerivedAdmissibleSource({
        pilotId,
        projectId: ctx.project.id,
        preparationId,
        sourceId: id,
        sourceKind: "open_point",
        // Fingerprint text must match collectAdmissibleKnowledgeSources (statement only).
        text: statement,
        versionLabel: "OPEN",
      });
    }
  } catch {
    /* index lifecycle never blocks open-point write */
  }
  return { status: "AVAILABLE" as const, openPointId: id };
}

/**
 * Soft topic resolution for capitalisation only — may reuse ACTIVE title match.
 * MUST NOT be used by split/merge identity creation.
 */
export async function ensureSubject(
  pilotId: string,
  preparationId: string,
  title: string,
  parentSubjectId?: string | null,
  turnFence?: TurnOwnershipFence,
) {
  const ctx = await assertPrep(pilotId, preparationId);
  const cleaned = title.trim().slice(0, 200);
  if (!cleaned) return { status: "FAILED" as const, reason: "empty title" };
  if (parentSubjectId) {
    const parent = await assertSubjectRef(pilotId, preparationId, parentSubjectId);
    if (parent && "error" in parent) return { status: "FAILED" as const, reason: parent.error };
  }
  const parentId = parentSubjectId ?? null;
  const existing = (
    await db
      .select()
      .from(knowledgeSubjects)
      .where(
        and(
          eq(knowledgeSubjects.preparationId, preparationId),
          eq(knowledgeSubjects.ownerPilotId, pilotId),
          eq(knowledgeSubjects.title, cleaned),
          eq(knowledgeSubjects.status, "ACTIVE"),
          parentId === null
            ? isNull(knowledgeSubjects.parentSubjectId)
            : eq(knowledgeSubjects.parentSubjectId, parentId),
        ),
      )
      .limit(1)
  )[0];
  if (existing) return { status: "AVAILABLE" as const, subjectId: existing.id, created: false };
  const id = newId("subj");
  const write = await db.transaction(async (tx) => {
    if (turnFence) {
      const owned = await assertTurnFenceInTx(tx as Tx, turnFence);
      if (!owned) {
        return { status: "OWNERSHIP_LOST" as const };
      }
    }
    await tx.insert(knowledgeSubjects).values({
      id,
      preparationId,
      projectId: ctx.project?.id ?? null,
      ownerPilotId: pilotId,
      parentSubjectId: parentSubjectId ?? null,
      title: cleaned,
      status: "ACTIVE",
    });
    return { status: "OK" as const };
  });
  if (write.status === "OWNERSHIP_LOST") {
    return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
  }
  return { status: "AVAILABLE" as const, subjectId: id, created: true };
}
/** Always creates a new subject identity (used by split). Title collision does not reuse. */
async function createSubjectIdentity(
  tx: Tx,
  pilotId: string,
  preparationId: string,
  projectId: string | null,
  title: string,
  opts?: { parentSubjectId?: string | null; originatedFromSubjectId?: string | null },
) {
  const id = newId("subj");
  await tx.insert(knowledgeSubjects).values({
    id,
    preparationId,
    projectId,
    ownerPilotId: pilotId,
    parentSubjectId: opts?.parentSubjectId ?? null,
    title: title.trim().slice(0, 200),
    status: "ACTIVE",
    originatedFromSubjectId: opts?.originatedFromSubjectId ?? null,
  });
  return id;
}

export async function renameSubject(
  pilotId: string,
  preparationId: string,
  subjectId: string,
  newTitle: string,
  turnFence?: TurnOwnershipFence,
) {
  await assertPrep(pilotId, preparationId);
  const title = newTitle.trim().slice(0, 200);
  if (!title) return { status: "FAILED" as const, reason: "empty title" };

  try {
    return await db.transaction(async (tx) => {
      if (turnFence) {
        const owned = await assertTurnFenceInTx(tx as Tx, turnFence);
        if (!owned) return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
      }
      await tx.execute(
        sql`select id from knowledge_subjects where id = ${subjectId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
      );
      const row = await loadOwnedSubject(pilotId, preparationId, subjectId, tx as Tx);
      if (!row) return { status: "FAILED" as const, reason: "NOT_FOUND" };
      if (row.status !== "ACTIVE") return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };

      await tx
        .update(knowledgeSubjects)
        .set({ title, updatedAt: new Date() })
        .where(eq(knowledgeSubjects.id, subjectId));
      await tx.insert(knowledgeSubjectEvents).values({
        id: newId("sev"),
        preparationId,
        ownerPilotId: pilotId,
        subjectId,
        eventType: "RENAMED",
        payloadJson: JSON.stringify({ from: row.title, to: title }),
      });
      return { status: "AVAILABLE" as const, subjectId, title };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "rename failed",
    };
  }
}

/**
 * True when `maybeDescendantId` is the same as or under `ancestorId` in the
 * ACTIVE parent chain (owner/prep scoped). Used to refuse ancestor→descendant merges.
 */
async function isSubjectUnderAncestor(
  pilotId: string,
  preparationId: string,
  ancestorId: string,
  maybeDescendantId: string,
  tx: Tx,
): Promise<boolean> {
  if (ancestorId === maybeDescendantId) return true;
  let current: string | null = maybeDescendantId;
  const visited = new Set<string>();
  while (current) {
    if (current === ancestorId) return true;
    if (visited.has(current)) return true;
    visited.add(current);
    const row = await loadOwnedSubject(pilotId, preparationId, current, tx);
    if (!row) return true;
    current = row.parentSubjectId;
  }
  return false;
}

/** Merge B into A — atomic; A remains ACTIVE; B marked MERGED with filiation. */
export async function mergeSubjects(
  pilotId: string,
  preparationId: string,
  targetSubjectId: string,
  sourceSubjectId: string,
  opts?: { injectFailureAfter?: "lock" | "move"; turnFence?: TurnOwnershipFence },
) {
  await assertPrep(pilotId, preparationId);
  if (targetSubjectId === sourceSubjectId) {
    return { status: "FAILED" as const, reason: "same subject" };
  }

  try {
    return await db.transaction(async (tx) => {
      if (opts?.turnFence) {
        const owned = await assertTurnFenceInTx(tx as Tx, opts.turnFence);
        if (!owned) return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
      }
      // Deterministic lock order to avoid deadlocks — lock source+target first, then children.
      const ids = [targetSubjectId, sourceSubjectId].sort();
      for (const id of ids) {
        await tx.execute(
          sql`select id from knowledge_subjects where id = ${id} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
        );
      }
      if (opts?.injectFailureAfter === "lock") {
        throw new Error("injected failure after lock");
      }

      const rows = await tx
        .select()
        .from(knowledgeSubjects)
        .where(
          and(
            eq(knowledgeSubjects.ownerPilotId, pilotId),
            eq(knowledgeSubjects.preparationId, preparationId),
            inArray(knowledgeSubjects.id, [targetSubjectId, sourceSubjectId]),
          ),
        );
      if (rows.length !== 2) return { status: "FAILED" as const, reason: "NOT_FOUND" };
      const target = rows.find((r) => r.id === targetSubjectId)!;
      const source = rows.find((r) => r.id === sourceSubjectId)!;
      if (target.status !== "ACTIVE" || source.status !== "ACTIVE") {
        return { status: "CONFLICT" as const, reason: "SUBJECT_NOT_ACTIVE" };
      }

      // Refuse merging an ancestor into its descendant (cycle if children reparent to target).
      if (
        await isSubjectUnderAncestor(
          pilotId,
          preparationId,
          sourceSubjectId,
          targetSubjectId,
          tx as Tx,
        )
      ) {
        return { status: "FAILED" as const, reason: "CYCLE_OR_INVALID_TREE" };
      }

      // E1 final — reparent ACTIVE children of absorbed source onto target so they
      // do not remain under a MERGED parent (invisible / orphaned in the living tree).
      const children = await tx
        .select({ id: knowledgeSubjects.id })
        .from(knowledgeSubjects)
        .where(
          and(
            eq(knowledgeSubjects.ownerPilotId, pilotId),
            eq(knowledgeSubjects.preparationId, preparationId),
            eq(knowledgeSubjects.parentSubjectId, sourceSubjectId),
            eq(knowledgeSubjects.status, "ACTIVE"),
          ),
        );
      const childIds = children.map((c) => c.id).sort();
      for (const childId of childIds) {
        await tx.execute(
          sql`select id from knowledge_subjects where id = ${childId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
        );
      }
      if (childIds.length > 0) {
        await tx
          .update(knowledgeSubjects)
          .set({ parentSubjectId: targetSubjectId, updatedAt: new Date() })
          .where(
            and(
              eq(knowledgeSubjects.ownerPilotId, pilotId),
              eq(knowledgeSubjects.preparationId, preparationId),
              eq(knowledgeSubjects.parentSubjectId, sourceSubjectId),
              eq(knowledgeSubjects.status, "ACTIVE"),
            ),
          );
      }

      await tx
        .update(knowledgeAcquis)
        .set({ subjectId: targetSubjectId, updatedAt: new Date() })
        .where(
          and(
            eq(knowledgeAcquis.subjectId, sourceSubjectId),
            eq(knowledgeAcquis.ownerPilotId, pilotId),
            eq(knowledgeAcquis.preparationId, preparationId),
          ),
        );
      await tx
        .update(knowledgeOpenPoints)
        .set({ subjectId: targetSubjectId, updatedAt: new Date() })
        .where(
          and(
            eq(knowledgeOpenPoints.subjectId, sourceSubjectId),
            eq(knowledgeOpenPoints.ownerPilotId, pilotId),
            eq(knowledgeOpenPoints.preparationId, preparationId),
          ),
        );
      if (opts?.injectFailureAfter === "move") {
        throw new Error("injected failure after move");
      }
      await tx
        .update(knowledgeSubjects)
        .set({
          status: "MERGED",
          originatedFromSubjectId: targetSubjectId,
          updatedAt: new Date(),
        })
        .where(eq(knowledgeSubjects.id, sourceSubjectId));
      await tx.insert(knowledgeSubjectEvents).values({
        id: newId("sev"),
        preparationId,
        ownerPilotId: pilotId,
        subjectId: targetSubjectId,
        eventType: "MERGED",
        payloadJson: JSON.stringify({
          absorbed: sourceSubjectId,
          reparentedChildIds: childIds,
        }),
      });
      return {
        status: "AVAILABLE" as const,
        targetSubjectId,
        absorbedSubjectId: sourceSubjectId,
        reparentedChildIds: childIds,
      };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "merge failed",
      rolledBack: true as const,
    };
  }
}

/**
 * Split: move selected acquis/open points to a NEW subject identity.
 * Never reuses an existing subject via title equality.
 */
export async function splitSubject(
  pilotId: string,
  preparationId: string,
  sourceSubjectId: string,
  input: {
    newTitle: string;
    acquisIds: string[];
    openPointIds: string[];
  },
  opts?: {
    injectFailureAfter?: "validate" | "create" | "move";
    turnFence?: TurnOwnershipFence;
  },
) {
  const ctx = await assertPrep(pilotId, preparationId);
  const newTitle = input.newTitle.trim().slice(0, 200);
  if (!newTitle) return { status: "FAILED" as const, reason: "empty title" };
  if (input.acquisIds.length === 0 && input.openPointIds.length === 0) {
    return { status: "FAILED" as const, reason: "nothing to move" };
  }

  try {
    return await db.transaction(async (tx) => {
      if (opts?.turnFence) {
        const owned = await assertTurnFenceInTx(tx as Tx, opts.turnFence);
        if (!owned) return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
      }
      await tx.execute(
        sql`select id from knowledge_subjects where id = ${sourceSubjectId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
      );
      const source = await loadOwnedSubject(pilotId, preparationId, sourceSubjectId, tx as Tx);
      if (!source) return { status: "FAILED" as const, reason: "NOT_FOUND" };
      if (source.status !== "ACTIVE") {
        return { status: "CONFLICT" as const, reason: "SUBJECT_NOT_ACTIVE" };
      }

      // Validate every acquis belongs to source subject + prep + owner
      if (input.acquisIds.length) {
        const rows = await tx
          .select()
          .from(knowledgeAcquis)
          .where(
            and(
              eq(knowledgeAcquis.ownerPilotId, pilotId),
              eq(knowledgeAcquis.preparationId, preparationId),
              inArray(knowledgeAcquis.id, input.acquisIds),
            ),
          );
        if (rows.length !== input.acquisIds.length) {
          return { status: "FAILED" as const, reason: "ACQUIS_FOREIGN_OR_UNKNOWN" };
        }
        const foreign = rows.filter((r) => r.subjectId !== sourceSubjectId);
        if (foreign.length) {
          return {
            status: "FAILED" as const,
            reason: "ACQUIS_NOT_IN_SOURCE_SUBJECT",
            foreignIds: foreign.map((f) => f.id),
          };
        }
      }
      if (input.openPointIds.length) {
        const rows = await tx
          .select()
          .from(knowledgeOpenPoints)
          .where(
            and(
              eq(knowledgeOpenPoints.ownerPilotId, pilotId),
              eq(knowledgeOpenPoints.preparationId, preparationId),
              inArray(knowledgeOpenPoints.id, input.openPointIds),
            ),
          );
        if (rows.length !== input.openPointIds.length) {
          return { status: "FAILED" as const, reason: "OPEN_POINT_FOREIGN_OR_UNKNOWN" };
        }
        const foreign = rows.filter((r) => r.subjectId !== sourceSubjectId);
        if (foreign.length) {
          return {
            status: "FAILED" as const,
            reason: "OPEN_POINT_NOT_IN_SOURCE_SUBJECT",
            foreignIds: foreign.map((f) => f.id),
          };
        }
      }
      if (opts?.injectFailureAfter === "validate") {
        throw new Error("injected failure after validate");
      }

      // Always new identity — title equality must not reuse
      const newSubjectId = await createSubjectIdentity(
        tx as Tx,
        pilotId,
        preparationId,
        ctx.project?.id ?? null,
        newTitle,
        { originatedFromSubjectId: sourceSubjectId },
      );
      if (opts?.injectFailureAfter === "create") {
        throw new Error("injected failure after create");
      }

      if (input.acquisIds.length) {
        const moved = await tx
          .update(knowledgeAcquis)
          .set({ subjectId: newSubjectId, updatedAt: new Date() })
          .where(
            and(
              eq(knowledgeAcquis.ownerPilotId, pilotId),
              eq(knowledgeAcquis.preparationId, preparationId),
              eq(knowledgeAcquis.subjectId, sourceSubjectId),
              inArray(knowledgeAcquis.id, input.acquisIds),
            ),
          )
          .returning({ id: knowledgeAcquis.id });
        if (moved.length !== input.acquisIds.length) {
          throw new Error("acquis move count mismatch — abort");
        }
      }
      if (input.openPointIds.length) {
        const moved = await tx
          .update(knowledgeOpenPoints)
          .set({ subjectId: newSubjectId, updatedAt: new Date() })
          .where(
            and(
              eq(knowledgeOpenPoints.ownerPilotId, pilotId),
              eq(knowledgeOpenPoints.preparationId, preparationId),
              eq(knowledgeOpenPoints.subjectId, sourceSubjectId),
              inArray(knowledgeOpenPoints.id, input.openPointIds),
            ),
          )
          .returning({ id: knowledgeOpenPoints.id });
        if (moved.length !== input.openPointIds.length) {
          throw new Error("open point move count mismatch — abort");
        }
      }
      if (opts?.injectFailureAfter === "move") {
        throw new Error("injected failure after move");
      }

      await tx.insert(knowledgeSubjectEvents).values({
        id: newId("sev"),
        preparationId,
        ownerPilotId: pilotId,
        subjectId: sourceSubjectId,
        eventType: "SPLIT",
        payloadJson: JSON.stringify({
          newSubjectId,
          acquisIds: input.acquisIds,
          openPointIds: input.openPointIds,
          filiation: sourceSubjectId,
        }),
      });

      return {
        status: "AVAILABLE" as const,
        sourceSubjectId,
        newSubjectId,
        filiationPreserved: true as const,
        createdNewIdentity: true as const,
      };
    });
  } catch (e) {
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "split failed",
      rolledBack: true as const,
    };
  }
}

export async function listKnowledge(pilotId: string, preparationId: string) {
  await assertPrep(pilotId, preparationId);
  const subjects = await db
    .select()
    .from(knowledgeSubjects)
    .where(
      and(
        eq(knowledgeSubjects.preparationId, preparationId),
        eq(knowledgeSubjects.ownerPilotId, pilotId),
        ne(knowledgeSubjects.status, "ARCHIVED"),
      ),
    )
    .orderBy(desc(knowledgeSubjects.updatedAt));
  const acquis = await db
    .select()
    .from(knowledgeAcquis)
    .where(
      and(
        eq(knowledgeAcquis.preparationId, preparationId),
        eq(knowledgeAcquis.ownerPilotId, pilotId),
      ),
    )
    .orderBy(desc(knowledgeAcquis.createdAt));
  const openPoints = await db
    .select()
    .from(knowledgeOpenPoints)
    .where(
      and(
        eq(knowledgeOpenPoints.preparationId, preparationId),
        eq(knowledgeOpenPoints.ownerPilotId, pilotId),
      ),
    )
    .orderBy(desc(knowledgeOpenPoints.createdAt));
  return { subjects, acquis, openPoints };
}

/**
 * Bounded D4 listing by rights/state. When Nora supplies preferred ids
 * (qualification hints), those are prioritized — not recency-as-authority.
 */
export async function selectRelevantKnowledgeContext(
  pilotId: string,
  preparationId: string,
  userText: string,
  opts?: {
    limit?: number;
    preferredAcquisIds?: string[];
    preferredOpenPointIds?: string[];
    preferredSubjectIds?: string[];
    /** When set, also scan project-scoped OPEN points for J-C04 reactivation. */
    projectId?: string | null;
  },
) {
  const { subjects, acquis, openPoints } = await listKnowledge(pilotId, preparationId);
  const limit = opts?.limit ?? 8;
  const prefA = new Set((opts?.preferredAcquisIds ?? []).filter(Boolean));
  const prefO = new Set((opts?.preferredOpenPointIds ?? []).filter(Boolean));
  const prefS = new Set((opts?.preferredSubjectIds ?? []).filter(Boolean));

  const currentAcquis = acquis.filter((a) => a.status === "CURRENT");
  const openOps = openPoints.filter((o) => o.status === "OPEN");
  const activeSubjects = subjects.filter((s) => s.status === "ACTIVE");

  const preferThenRest = <T extends { id: string }>(rows: T[], pref: Set<string>, n: number) => {
    const preferred = rows.filter((r) => pref.has(r.id));
    const rest = rows.filter((r) => !pref.has(r.id));
    return [...preferred, ...rest].slice(0, n);
  };

  const pickedAcquis = preferThenRest(currentAcquis, prefA, Math.min(limit, 5));
  const pickedOpen = preferThenRest(openOps, prefO, Math.min(4, limit));
  const pickedSubjects = preferThenRest(activeSubjects, prefS, 5);

  const snippets: string[] = [];
  const reactivatedOpenPointIds: string[] = [];

  if (opts?.projectId) {
    const { selectOpenPointsForReactivation } = await import(
      "@/domains/knowledge/journal-cognition"
    );
    const reactivation = await selectOpenPointsForReactivation(
      pilotId,
      opts.projectId,
      userText,
      { limit: 2 },
    );
    for (const c of reactivation.candidates) {
      reactivatedOpenPointIds.push(c.openPointId);
      snippets.push(
        `POINT_OUVERT_REACTIVATE[${c.openPointId}/${c.score.toFixed(2)}] subject=${c.subjectId ?? "∅"}: ${c.statement.slice(0, 240)} | reason=${c.reason}`,
      );
    }
  }

  for (const a of pickedAcquis) {
    const mark = prefA.has(a.id) ? "PREFERRED" : "AVAILABLE";
    snippets.push(
      `ACQUIS[${a.kind}/${a.id}/${mark}] subject=${a.subjectId ?? "∅"}: ${a.statement.slice(0, 280)} | provenance=${a.provenanceJson.slice(0, 160)}`,
    );
  }
  for (const o of pickedOpen) {
    if (reactivatedOpenPointIds.includes(o.id)) continue;
    const mark = prefO.has(o.id) ? "PREFERRED" : "AVAILABLE";
    snippets.push(
      `POINT_OUVERT[${o.id}/${mark}] subject=${o.subjectId ?? "∅"}: ${o.statement.slice(0, 240)} | provenance=${o.provenanceJson.slice(0, 120)}`,
    );
  }
  for (const s of pickedSubjects) {
    const mark = prefS.has(s.id) ? "PREFERRED" : "AVAILABLE";
    snippets.push(`SUJET[${s.id}/${s.status}/${mark}]: ${s.title}`);
  }

  // ML2 hybrid supplement for Nora context (flag OFF by default).
  // Does not replace rights-bounded listing; adds candidate refs to verify.
  if (opts?.projectId && userText.trim()) {
    try {
      const {
        derivedEmbeddingSearchEnabled,
        hybridSearchProjectKnowledge,
      } = await import("@/domains/knowledge/derived-embedding-service");
      if (derivedEmbeddingSearchEnabled()) {
        const hybrid = await hybridSearchProjectKnowledge({
          pilotId,
          projectId: opts.projectId,
          query: userText.slice(0, 500),
          lexical: [],
          limit: 4,
        });
        for (const h of hybrid.hits.slice(0, 4)) {
          snippets.push(
            `DERIVED_HIT[${h.sourceId}/${h.channel}] ${h.snippet.slice(0, 200)} | indexRef=${h.indexRef ?? "∅"} — verify before authority`,
          );
        }
      }
    } catch {
      /* hybrid context never blocks capitalisation listing */
    }
  }

  return {
    snippets,
    counts: {
      subjects: subjects.length,
      acquisCurrent: acquis.filter((a) => a.status === "CURRENT").length,
      openPoints: openPoints.filter((o) => o.status === "OPEN").length,
      reactivatedOpenPoints: reactivatedOpenPointIds.length,
    },
    selectedAcquisIds: pickedAcquis.map((a) => a.id),
    selectedOpenPointIds: [
      ...reactivatedOpenPointIds,
      ...pickedOpen.map((a) => a.id).filter((id) => !reactivatedOpenPointIds.includes(id)),
    ],
    reactivatedOpenPointIds,
    selectionMethod:
      reactivatedOpenPointIds.length > 0
        ? ("reactivation-then-preferred-bounded" as const)
        : prefA.size || prefO.size || prefS.size
          ? ("semantic-preferred-then-bounded" as const)
          : ("bounded-resource-listing" as const),
    selectionLimit:
      "RG-KNOW-011 + J-C04: réactivation contextuelle des points ouverts projet, puis ids préférés / listing borné — pas de clôture par silence.",
  };
}

export type ConfirmedD4Effect = {
  kind: "acquis" | "open_point" | "document";
  id: string;
  status: string;
  confirmation: "DB_CONFIRMED";
  documentId?: string;
  revisionNumber?: number;
};

/**
 * Reload durable D4 effects for a turn from DB (rights-scoped).
 * Used when the turn ends UNKNOWN after ownership loss but effects already committed.
 * Never invents refs — only CURRENT/OPEN/AVAILABLE rows matching provenance keys.
 */
export async function reconstituteConfirmedD4Effects(
  pilotId: string,
  preparationId: string,
  refs: { generationId?: string | null; userMessageId?: string | null },
): Promise<{
  capitalisation: ConfirmedD4Effect[];
  documentSave: {
    status: string;
    documentId: string;
    revisionNumber?: number;
    confirmation: "DB_CONFIRMED";
  } | null;
  capitalisationLimit: string;
}> {
  try {
    try {
      await assertPrep(pilotId, preparationId);
    } catch (e) {
      const code = (e as { code?: string } | null)?.code;
      if (code === "NOT_FOUND") {
        return {
          capitalisation: [],
          documentSave: null,
          capitalisationLimit: "PREP_NOT_VISIBLE — no D4 reconstitution across privilege boundary",
        };
      }
      return {
        capitalisation: [],
        documentSave: null,
        capitalisationLimit:
          "DB_OR_LOOKUP_UNAVAILABLE — reconstitution failed; not an access denial",
      };
    }
    const gen = refs.generationId?.trim() || null;
    const src = refs.userMessageId?.trim() || null;
    if (!gen && !src) {
      return {
        capitalisation: [],
        documentSave: null,
        capitalisationLimit: "NO_PROVENANCE_KEYS — cannot reconstitute D4 effects",
      };
    }

    // Prefer generationId when present. sourceId is a fallback only when the effect has
    // no generationId in provenance — never attribute another generation via shared sourceId.
    const acquisProv = gen
      ? sql`(
          ${knowledgeAcquis.provenanceJson}::jsonb->>'generationId' = ${gen}
          or (
            coalesce(${knowledgeAcquis.provenanceJson}::jsonb->>'generationId', '') = ''
            and ${src}::text is not null
            and ${knowledgeAcquis.provenanceJson}::jsonb->>'sourceId' = ${src}
          )
        )`
      : sql`${knowledgeAcquis.provenanceJson}::jsonb->>'sourceId' = ${src}`;
    const openProv = gen
      ? sql`(
          ${knowledgeOpenPoints.provenanceJson}::jsonb->>'generationId' = ${gen}
          or (
            coalesce(${knowledgeOpenPoints.provenanceJson}::jsonb->>'generationId', '') = ''
            and ${src}::text is not null
            and ${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceId' = ${src}
          )
        )`
      : sql`${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceId' = ${src}`;
    const revWhere = gen
      ? sql`(
          ${documentRevisions.provenanceJson}::jsonb->>'generationId' = ${gen}
          or ${documentRevisions.correlationKey} = ${"doc:" + gen}
          or (
            coalesce(${documentRevisions.provenanceJson}::jsonb->>'generationId', '') = ''
            and ${src}::text is not null
            and ${documentRevisions.provenanceJson}::jsonb->>'userMessageId' = ${src}
          )
        )`
      : sql`${documentRevisions.provenanceJson}::jsonb->>'userMessageId' = ${src}`;

    const effects: ConfirmedD4Effect[] = [];

    const acquisRows = await db
      .select({
        id: knowledgeAcquis.id,
        status: knowledgeAcquis.status,
        provenanceJson: knowledgeAcquis.provenanceJson,
      })
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.preparationId, preparationId),
          eq(knowledgeAcquis.ownerPilotId, pilotId),
          eq(knowledgeAcquis.status, "CURRENT"),
          acquisProv,
        ),
      );

    for (const row of acquisRows) {
      effects.push({
        kind: "acquis",
        id: row.id,
        status: row.status,
        confirmation: "DB_CONFIRMED",
      });
    }

    const openRows = await db
      .select({
        id: knowledgeOpenPoints.id,
        status: knowledgeOpenPoints.status,
      })
      .from(knowledgeOpenPoints)
      .where(
        and(
          eq(knowledgeOpenPoints.preparationId, preparationId),
          eq(knowledgeOpenPoints.ownerPilotId, pilotId),
          eq(knowledgeOpenPoints.status, "OPEN"),
          openProv,
        ),
      );

    for (const row of openRows) {
      effects.push({
        kind: "open_point",
        id: row.id,
        status: row.status,
        confirmation: "DB_CONFIRMED",
      });
    }

    let documentSave: {
      status: string;
      documentId: string;
      revisionNumber?: number;
      confirmation: "DB_CONFIRMED";
    } | null = null;

    const revRows = await db
      .select({
        id: documentRevisions.id,
        documentId: documentRevisions.documentId,
        revisionNumber: documentRevisions.revisionNumber,
        status: documentRevisions.status,
      })
      .from(documentRevisions)
      .innerJoin(documents, eq(documents.id, documentRevisions.documentId))
      .where(
        and(
          eq(documents.preparationId, preparationId),
          eq(documents.ownerPilotId, pilotId),
          eq(documentRevisions.status, "AVAILABLE"),
          revWhere,
        ),
      )
      .orderBy(desc(documentRevisions.revisionNumber))
      .limit(1);

    if (revRows[0]) {
      const r = revRows[0];
      effects.push({
        kind: "document",
        id: r.id,
        status: r.status,
        confirmation: "DB_CONFIRMED",
        documentId: r.documentId,
        revisionNumber: r.revisionNumber,
      });
      documentSave = {
        status: "AVAILABLE",
        documentId: r.documentId,
        revisionNumber: r.revisionNumber,
        confirmation: "DB_CONFIRMED",
      };
    }

    return {
      capitalisation: effects,
      documentSave,
      capitalisationLimit:
        effects.length > 0
          ? "DB_RECONSTITUTED — effects confirmed under pilot/prep rights; turn remains UNKNOWN"
          : "NO_CONFIRMED_D4_EFFECTS_FOR_TURN",
    };
  } catch {
    return {
      capitalisation: [],
      documentSave: null,
      capitalisationLimit:
        "DB_OR_LOOKUP_UNAVAILABLE — reconstitution failed; not an access denial",
    };
  }
}

/**
 * Select a CURRENT acquis on the same subject that this statement likely corrects.
 * Prefer explicit supersedesAcquisId from Nora; this heuristic is a bounded fallback
 * for numeric/entity corrections without inventing new authority.
 */
export async function findSupersedeCandidate(
  pilotId: string,
  preparationId: string,
  subjectId: string | null | undefined,
  statement: string,
): Promise<string | undefined> {
  if (!subjectId) return undefined;
  const compact = editorialCompactKnowledgeStatement(statement);
  const nums = (compact.match(/\d+/g) ?? []).map(Number);
  if (nums.length === 0) return undefined;
  const { tokenizeIntent } = await import("@/domains/knowledge/journal-cognition");
  const tokens = new Set(tokenizeIntent(compact));
  if (tokens.size < 2) return undefined;
  const rows = await db
    .select({
      id: knowledgeAcquis.id,
      statement: knowledgeAcquis.statement,
    })
    .from(knowledgeAcquis)
    .where(
      and(
        eq(knowledgeAcquis.ownerPilotId, pilotId),
        eq(knowledgeAcquis.preparationId, preparationId),
        eq(knowledgeAcquis.subjectId, subjectId),
        eq(knowledgeAcquis.status, "CURRENT"),
      ),
    );
  let best: { id: string; score: number } | null = null;
  for (const row of rows) {
    if (row.statement === compact) continue;
    const priorNums = (row.statement.match(/\d+/g) ?? []).map(Number);
    if (priorNums.length === 0) continue;
    const numsDiffer =
      nums.some((n) => !priorNums.includes(n)) || priorNums.some((n) => !nums.includes(n));
    if (!numsDiffer) continue;
    const priorTokens = tokenizeIntent(row.statement);
    const overlap = priorTokens.filter((t) => tokens.has(t)).length;
    if (overlap < 2) continue;
    const score = overlap;
    if (!best || score > best.score) best = { id: row.id, score };
  }
  return best && best.score >= 2 ? best.id : undefined;
}

function buildExchangeProvenance(input: {
  userMessageId: string;
  assistantMessageId?: string | null;
  generationId: string;
  epistemic: Provenance["epistemic"];
  note?: string;
  contributionKind: NonNullable<Provenance["contributionKind"]>;
  primary: "user" | "assistant";
}): Provenance {
  const primaryId =
    input.primary === "assistant" && input.assistantMessageId
      ? input.assistantMessageId
      : input.userMessageId;
  const related: string[] = [];
  if (input.userMessageId && input.userMessageId !== primaryId) related.push(input.userMessageId);
  if (input.assistantMessageId && input.assistantMessageId !== primaryId) {
    related.push(input.assistantMessageId);
  }
  return {
    sourceKind: "message",
    sourceId: primaryId,
    generationId: input.generationId,
    note: input.note,
    epistemic: input.epistemic,
    relatedMessageIds: related.length > 0 ? related : undefined,
    contributionKind: input.contributionKind,
  };
}

/**
 * Selective D4 capitalisation from typed Nora proposals (RG-KNOW-001).
 * No lexical detection. Never creates HumanDecision. Owner validates each write.
 */
export async function maybeCapitalizeFromExchange(
  pilotId: string,
  preparationId: string,
  input: {
    userText: string;
    assistantText: string;
    generationId: string;
    userMessageId: string;
    /** Nora assistant message for this turn — constitutive provenance when analysis is retained. */
    assistantMessageId?: string | null;
    turnFence?: TurnOwnershipFence;
    /** Typed proposals from durable qualification — required for any write. */
    proposals?: Array<{
      intentId: string;
      kind: "ACQUIS" | "OPEN_POINT" | "SUBJECT";
      statement: string;
      epistemic: "hypothesized" | "recommended" | "established" | "limited";
      subjectTitle?: string;
      subjectId?: string;
      /** Existing parent subject for hierarchical SUBJECT creation. */
      parentSubjectId?: string;
      continuityReason?: string;
      supersedesAcquisId?: string;
      resolvesOpenPointId?: string;
      relevantAcquisIds?: string[];
      relevantOpenPointIds?: string[];
      openPointTitle?: string;
      subjectOrganization?: "MERGE" | "SPLIT" | "DETACH";
      mergeSourceSubjectId?: string;
    }>;
  },
) {
  const results: Array<{
    kind: string;
    id?: string;
    status: string;
    epistemicNote?: string;
    reason?: string;
    /** Semantic intent id when known — enables D4→D5 same-turn precondition checks. */
    intentId?: string;
  }> = [];
  const proposals = input.proposals ?? [];
  if (proposals.length === 0) {
    return {
      capitalisations: results,
      selectionMethod: "semantic-proposals" as const,
      selectionLimit: "Aucune proposition d4.record_knowledge — zéro écriture D4",
      humanDecisionCreated: false as const,
      ownershipLost: false as const,
    };
  }

  const fence = input.turnFence;
  let subjectId: string | null = null;
  const ctx = await assertPrep(pilotId, preparationId);
  const projectId = ctx.project?.id ?? null;
  const batchSubjects = await precreateBatchSubjects(
    pilotId,
    preparationId,
    proposals,
    fence,
  );
  if (batchSubjects.ownershipLost) {
    return {
      capitalisations: results,
      selectionMethod: "semantic-proposals" as const,
      selectionLimit: "OWNERSHIP_LOST",
      humanDecisionCreated: false as const,
      ownershipLost: true as const,
    };
  }
  /** Subjects that already received an explicit SUBJECT summary this turn. */
  const subjectsWithExplicitSummary = new Set<string>();
  /** Subjects that gained significant CURRENT acquis this turn (may need synthesis). */
  const subjectsTouchedByAcquis = new Set<string>();

  async function writeSubjectSummary(
    targetSubjectId: string,
    summaryMarkdown: string,
    titleNorm: string,
    p: {
      intentId?: string;
      continuityReason?: string;
      epistemic: "hypothesized" | "recommended" | "established" | "limited";
    },
  ) {
    if (!projectId) return;
    if (summaryMarkdown.length < 12) return;
    if (summaryMarkdown.toLowerCase() === titleNorm.toLowerCase()) return;
    const { appendSubjectSummaryRevision } = await import("@/domains/knowledge/journal");
    const syn = await appendSubjectSummaryRevision(pilotId, projectId, targetSubjectId, {
      summaryMarkdown: summaryMarkdown.slice(0, 5000),
      provenance: buildExchangeProvenance({
        userMessageId: input.userMessageId,
        assistantMessageId: input.assistantMessageId,
        generationId: input.generationId,
        epistemic:
          p.epistemic === "established"
            ? "observed"
            : p.epistemic === "recommended"
              ? "recommended"
              : "hypothesized",
        note: p.continuityReason ?? "semantic qualification d4.record_knowledge",
        contributionKind: "mixed",
        primary: "assistant",
      }),
      operationId: `${input.generationId}:${targetSubjectId}`,
      idempotencyKey: `subj-summary:${targetSubjectId}:${input.generationId}`,
    });
    results.push({
      intentId: p.intentId,
      kind: "subject_summary",
      id: "revisionId" in syn ? syn.revisionId : undefined,
      status: syn.status,
      epistemicNote: p.continuityReason,
      reason: "reason" in syn ? String(syn.reason) : undefined,
    });
  }

  /** Map subjectTitle (normalized) → id for subjects created in this batch. */
  const batchTitleToId = new Map<string, string>();
  for (const p of proposals) {
    if (p.kind !== "SUBJECT") continue;
    const created = batchSubjects.createdByIntentId.get(p.intentId);
    if (!created) continue;
    const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
    if (title.length >= 3) {
      batchTitleToId.set(title.trim().replace(/\s+/g, " ").toLowerCase(), created);
    }
  }

  for (const p of proposals) {
    if (p.kind === "SUBJECT") {
      const batchFailed = batchSubjects.failedByIntentId.get(p.intentId);
      if (batchFailed) {
        results.push({
          intentId: p.intentId,
          kind: "subject",
          status: "FAILED",
          reason: batchFailed,
          epistemicNote: p.continuityReason,
        });
        continue;
      }
      const batchCreated = batchSubjects.createdByIntentId.get(p.intentId);
      if (batchCreated) {
        subjectId = batchCreated;
        results.push({
          intentId: p.intentId,
          kind: "subject",
          id: batchCreated,
          status: "AVAILABLE",
          epistemicNote: p.continuityReason,
        });
        const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
        await writeSubjectSummary(batchCreated, p.statement.trim(), title.trim(), p);
        subjectsWithExplicitSummary.add(batchCreated);
        continue;
      }
      // Prefer explicit subjectId for synthesis revision / reparent / org on an existing subject.
      if (p.subjectId) {
        const check = await assertSubjectRef(pilotId, preparationId, p.subjectId);
        if (check && "error" in check) {
          results.push({
            kind: "subject",
            status: "FAILED",
            reason: check.error,
            epistemicNote: p.continuityReason,
          });
          continue;
        }
        if (check?.subject) {
          subjectId = check.subject.id;
          // E1-REL-01 — organization via existing D4 owners (no second engine).
          if (p.subjectOrganization === "MERGE") {
            const sourceId = p.mergeSourceSubjectId?.trim();
            if (!sourceId) {
              results.push({
                kind: "subject_merge",
                id: subjectId,
                status: "FAILED",
                reason: "MERGE_SOURCE_REQUIRED",
                epistemicNote: p.continuityReason,
                intentId: p.intentId,
              });
              continue;
            }
            const merged = await mergeSubjects(
              pilotId,
              preparationId,
              subjectId,
              sourceId,
              { turnFence: fence },
            );
            results.push({
              kind: "subject_merge",
              id: subjectId,
              status: merged.status,
              reason: "reason" in merged ? String(merged.reason) : undefined,
              epistemicNote: p.continuityReason,
              intentId: p.intentId,
            });
            if (merged.status !== "AVAILABLE") continue;
            await writeSubjectSummary(
              subjectId,
              p.statement.trim(),
              (p.subjectTitle ?? check.subject.title).trim(),
              p,
            );
            subjectsWithExplicitSummary.add(subjectId);
            continue;
          }
          if (p.subjectOrganization === "SPLIT") {
            const newTitle = (p.subjectTitle ?? "").trim();
            if (newTitle.length < 3) {
              results.push({
                kind: "subject_split",
                id: subjectId,
                status: "FAILED",
                reason: "SPLIT_TITLE_REQUIRED",
                epistemicNote: p.continuityReason,
                intentId: p.intentId,
              });
              continue;
            }
            const split = await splitSubject(
              pilotId,
              preparationId,
              subjectId,
              {
                newTitle,
                acquisIds: p.relevantAcquisIds ?? [],
                openPointIds: p.relevantOpenPointIds ?? [],
              },
              { turnFence: fence },
            );
            results.push({
              kind: "subject_split",
              id: "newSubjectId" in split ? split.newSubjectId : subjectId,
              status: split.status,
              reason: "reason" in split ? String(split.reason) : undefined,
              epistemicNote: p.continuityReason,
              intentId: p.intentId,
            });
            if (split.status === "AVAILABLE" && "newSubjectId" in split && split.newSubjectId) {
              subjectId = split.newSubjectId;
              await writeSubjectSummary(split.newSubjectId, p.statement.trim(), newTitle, p);
              subjectsWithExplicitSummary.add(split.newSubjectId);
            }
            continue;
          }
          if (p.subjectOrganization === "DETACH" && projectId) {
            const { reparentSubject } = await import("@/domains/knowledge/journal");
            const det = await reparentSubject(pilotId, projectId, subjectId, null, fence);
            results.push({
              kind: "subject_detach",
              id: subjectId,
              status: det.status,
              reason: "reason" in det ? String(det.reason) : undefined,
              epistemicNote: p.continuityReason,
              intentId: p.intentId,
            });
            if (det.status !== "AVAILABLE") continue;
          }
          // B.2 — reparent when Nora cites an existing subject + new parent.
          if (
            projectId &&
            p.subjectOrganization !== "DETACH" &&
            p.parentSubjectId &&
            p.parentSubjectId !== check.subject.id
          ) {
            let newParentId: string | null = p.parentSubjectId;
            if (!p.parentSubjectId.startsWith("subj_")) {
              const fromBatch = batchSubjects.createdByIntentId.get(p.parentSubjectId);
              const byTitle =
                fromBatch ??
                batchTitleToId.get(
                  p.parentSubjectId.trim().replace(/\s+/g, " ").toLowerCase(),
                ) ??
                (await findActiveSubjectByTitle(pilotId, preparationId, p.parentSubjectId))
                  ?.id;
              newParentId = byTitle ?? null;
              if (!newParentId) {
                results.push({
                  kind: "subject",
                  id: subjectId,
                  status: "FAILED",
                  reason: "PARENT_NOT_FOUND",
                  epistemicNote: p.continuityReason,
                });
                continue;
              }
            } else {
              const parentCheck = await assertSubjectRef(
                pilotId,
                preparationId,
                p.parentSubjectId,
              );
              if (parentCheck && "error" in parentCheck) {
                results.push({
                  kind: "subject",
                  id: subjectId,
                  status: "FAILED",
                  reason: parentCheck.error,
                  epistemicNote: p.continuityReason,
                });
                continue;
              }
            }
            if (newParentId && newParentId !== check.subject.parentSubjectId) {
              const { reparentSubject } = await import("@/domains/knowledge/journal");
              const rep = await reparentSubject(
                pilotId,
                projectId,
                subjectId,
                newParentId,
                fence,
              );
              results.push({
                kind: "subject_reparent",
                id: subjectId,
                status: rep.status,
                reason: "reason" in rep ? String(rep.reason) : undefined,
                epistemicNote: p.continuityReason,
                intentId: p.intentId,
              });
              if (rep.status !== "AVAILABLE") continue;
            }
          }
          // Optional rename when subjectTitle differs from current title.
          if (p.subjectTitle && p.subjectTitle.trim() !== check.subject.title.trim()) {
            const renamed = await renameSubject(
              pilotId,
              preparationId,
              subjectId,
              p.subjectTitle,
              fence,
            );
            results.push({
              kind: "subject_rename",
              id: subjectId,
              status: renamed.status,
              reason: "reason" in renamed ? String(renamed.reason) : undefined,
              epistemicNote: p.continuityReason,
              intentId: p.intentId,
            });
            // E1-REL-02 — do not mask a failed rename with a subsequent AVAILABLE subject result.
            if (renamed.status !== "AVAILABLE") continue;
          }
          results.push({
            kind: "subject",
            id: subjectId,
            status: "AVAILABLE",
            epistemicNote: p.continuityReason,
            intentId: p.intentId,
          });
          await writeSubjectSummary(
            subjectId,
            p.statement.trim(),
            (p.subjectTitle ?? check.subject.title).trim(),
            p,
          );
          subjectsWithExplicitSummary.add(subjectId);
          continue;
        }
      }
      const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
      if (title.length < 3) continue;
      const parentForCreate =
        p.parentSubjectId && p.parentSubjectId !== p.subjectId
          ? p.parentSubjectId
          : undefined;
      const s = await ensureSubject(
        pilotId,
        preparationId,
        title,
        parentForCreate?.startsWith("subj_") ? parentForCreate : undefined,
        fence,
      );
      if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
        results.push({
          intentId: p.intentId,
          kind: "subject",
          status: "FAILED",
          reason: "TURN_OWNERSHIP_LOST",
          epistemicNote: p.continuityReason,
        });
        return {
          capitalisations: results,
          selectionMethod: "semantic-proposals" as const,
          selectionLimit: "OWNERSHIP_LOST",
          humanDecisionCreated: false as const,
          ownershipLost: true as const,
        };
      }
      if (s.status === "AVAILABLE" && s.subjectId) {
        subjectId = s.subjectId;
        results.push({
          intentId: p.intentId,
          kind: "subject",
          id: s.subjectId,
          status: s.status,
          epistemicNote: p.continuityReason,
        });
        await writeSubjectSummary(s.subjectId, p.statement.trim(), title.trim(), p);
        subjectsWithExplicitSummary.add(s.subjectId);
      }
      continue;
    }

    // Resolve subject for ACQUIS/OPEN_POINT: prefer batch ids, then subjectId, then title.
    // E1-REL-02 — never silently inherit a prior loop subjectId when an explicit ref fails.
    let recordSubjectId: string | null = null;
    let subjectRefFailed = false;
    if (p.subjectId) {
      const check = await assertSubjectRef(pilotId, preparationId, p.subjectId);
      if (check && "error" in check) {
        results.push({
          intentId: p.intentId,
          kind: p.kind === "OPEN_POINT" ? "open_point" : "acquis",
          status: "FAILED",
          reason: check.error,
          epistemicNote: p.continuityReason,
        });
        subjectRefFailed = true;
      } else if (check?.subject) {
        recordSubjectId = check.subject.id;
        // Conflict: explicit subjectId + subjectTitle that does not match owned title.
        if (
          p.subjectTitle &&
          p.subjectTitle.trim().toLowerCase() !== check.subject.title.trim().toLowerCase()
        ) {
          results.push({
            intentId: p.intentId,
            kind: p.kind === "OPEN_POINT" ? "open_point" : "acquis",
            status: "FAILED",
            reason: "SUBJECT_ID_TITLE_CONFLICT",
            epistemicNote: p.continuityReason,
          });
          subjectRefFailed = true;
        }
      }
    }
    if (subjectRefFailed) continue;
    if (!recordSubjectId && p.subjectTitle) {
      const title = p.subjectTitle.trim().slice(0, 120);
      const norm = title.replace(/\s+/g, " ").toLowerCase();
      const fromBatch = batchTitleToId.get(norm);
      if (fromBatch) {
        recordSubjectId = fromBatch;
      } else if (title.length >= 3) {
        // Title-only: require unique ACTIVE match — never invent a target under ambiguous homonyms.
        const unique = await findActiveSubjectByTitle(pilotId, preparationId, title);
        if (unique) {
          recordSubjectId = unique.id;
        } else {
          const existingHomonyms = (
            await db
              .select({ id: knowledgeSubjects.id })
              .from(knowledgeSubjects)
              .where(
                and(
                  eq(knowledgeSubjects.preparationId, preparationId),
                  eq(knowledgeSubjects.ownerPilotId, pilotId),
                  eq(knowledgeSubjects.title, title.trim().slice(0, 200)),
                  eq(knowledgeSubjects.status, "ACTIVE"),
                ),
              )
              .limit(2)
          ).length;
          if (existingHomonyms > 1) {
            results.push({
              intentId: p.intentId,
              kind: p.kind === "OPEN_POINT" ? "open_point" : "acquis",
              status: "FAILED",
              reason: "SUBJECT_TITLE_AMBIGUOUS",
              epistemicNote: p.continuityReason,
            });
            continue;
          }
          const s = await ensureSubject(pilotId, preparationId, title, undefined, fence);
          if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
            results.push({
              intentId: p.intentId,
              kind: "subject",
              status: "FAILED",
              reason: "TURN_OWNERSHIP_LOST",
              epistemicNote: p.continuityReason,
            });
            return {
              capitalisations: results,
              selectionMethod: "semantic-proposals" as const,
              selectionLimit: "OWNERSHIP_LOST",
              humanDecisionCreated: false as const,
              ownershipLost: true as const,
            };
          }
          if (s.status === "AVAILABLE" && s.subjectId) {
            recordSubjectId = s.subjectId;
            // Side-effect subject for ACQUIS/OPEN_POINT — correlate to intent; primary
            // effect row below remains the authoritative outcome for the proposal kind.
            results.push({
              intentId: p.intentId,
              kind: "subject",
              id: s.subjectId,
              status: s.status,
              epistemicNote: p.continuityReason,
            });
          }
        }
      }
    }
    if (!recordSubjectId && !p.subjectId && !p.subjectTitle) {
      // Same-turn continuity: attach to last successfully resolved subject only when no explicit ref.
      recordSubjectId = subjectId;
    }
    if (recordSubjectId) subjectId = recordSubjectId;

    if (p.kind === "OPEN_POINT") {
      const op = await openPoint(pilotId, preparationId, {
        statement: p.statement,
        subjectId: recordSubjectId,
        turnFence: fence,
        canonicalTitle: p.openPointTitle,
        provenance: buildExchangeProvenance({
          userMessageId: input.userMessageId,
          assistantMessageId: input.assistantMessageId,
          generationId: input.generationId,
          epistemic: p.epistemic === "established" ? "limited" : p.epistemic,
          note: p.continuityReason ?? "semantic qualification d4.record_knowledge",
          contributionKind: "mixed",
          primary: "user",
        }),
      });
      if (op.status === "FAILED" && "reason" in op && op.reason === "TURN_OWNERSHIP_LOST") {
        results.push({
          intentId: p.intentId,
          kind: "open_point",
          status: "FAILED",
          reason: "TURN_OWNERSHIP_LOST",
          epistemicNote: p.continuityReason,
        });
        return {
          capitalisations: results,
          selectionMethod: "semantic-proposals" as const,
          selectionLimit: "OWNERSHIP_LOST",
          humanDecisionCreated: false as const,
          ownershipLost: true as const,
        };
      }
      results.push({
        intentId: p.intentId,
        kind: "open_point",
        id: "openPointId" in op ? op.openPointId : undefined,
        status: op.status,
        epistemicNote: p.continuityReason,
      });
      continue;
    }

    if (p.kind === "ACQUIS") {
      // F4: Nora's epistemic="established" is NOT independent proof.
      const kind: KnowledgeKind =
        p.epistemic === "recommended" ? "RECOMMENDATION" : "HYPOTHESIS";
      const epistemicNote =
        p.epistemic === "established"
          ? `${p.continuityReason ?? "semantic"} — Nora marked established but D4 refused FACT without independent verified source`
          : p.continuityReason;
      const noraAnalysisPrimary = p.epistemic === "recommended";
      let supersedesAcquisId = p.supersedesAcquisId;
      if (!supersedesAcquisId) {
        supersedesAcquisId = await findSupersedeCandidate(
          pilotId,
          preparationId,
          subjectId,
          p.statement,
        );
      }
      const cap = await capitalizeAcquis(pilotId, preparationId, {
        statement: p.statement,
        kind,
        subjectId: recordSubjectId,
        supersedesAcquisId,
        turnFence: fence,
        provenance: buildExchangeProvenance({
          userMessageId: input.userMessageId,
          assistantMessageId: input.assistantMessageId,
          generationId: input.generationId,
          note: epistemicNote ?? "semantic qualification d4.record_knowledge",
          epistemic: noraAnalysisPrimary ? "recommended" : "hypothesized",
          contributionKind: noraAnalysisPrimary ? "nora_analysis" : "pilot_fact",
          primary: noraAnalysisPrimary ? "assistant" : "user",
        }),
      });
      if (cap.status === "FAILED" && "reason" in cap && cap.reason === "TURN_OWNERSHIP_LOST") {
        results.push({
          intentId: p.intentId,
          kind: "acquis",
          status: "FAILED",
          reason: "TURN_OWNERSHIP_LOST",
          epistemicNote: p.continuityReason,
        });
        return {
          capitalisations: results,
          selectionMethod: "semantic-proposals" as const,
          selectionLimit: "OWNERSHIP_LOST",
          humanDecisionCreated: false as const,
          ownershipLost: true as const,
        };
      }
      results.push({
        intentId: p.intentId,
        kind: "acquis",
        id: "acquisId" in cap ? cap.acquisId : undefined,
        status: cap.status,
        epistemicNote: epistemicNote,
        reason:
          p.epistemic === "established"
            ? "FACT_PROMOTION_REFUSED_NO_INDEPENDENT_SOURCE"
            : supersedesAcquisId
              ? `SUPERSEDES:${supersedesAcquisId}`
              : undefined,
      });
      if (cap.status === "AVAILABLE" && recordSubjectId) {
        subjectsTouchedByAcquis.add(recordSubjectId);
      }

      if (p.resolvesOpenPointId && projectId && cap.status === "AVAILABLE") {
        const { resolveOpenPointFactually } = await import("@/domains/knowledge/journal");
        const resolved = await resolveOpenPointFactually(
          pilotId,
          projectId,
          p.resolvesOpenPointId,
          {
            reason: p.continuityReason ?? "résolution factuelle depuis capitalisation",
            provenance: buildExchangeProvenance({
              userMessageId: input.userMessageId,
              assistantMessageId: input.assistantMessageId,
              generationId: input.generationId,
              epistemic: "observed",
              note: "factual resolve via d4.record_knowledge",
              contributionKind: "pilot_fact",
              primary: "user",
            }),
            operationId: `${input.generationId}:resolve:${p.resolvesOpenPointId}`,
            actorKind: "nora",
          },
        );
        results.push({
          intentId: p.intentId,
          kind: "open_point_resolve",
          id: p.resolvesOpenPointId,
          status: resolved.status,
          reason: "reason" in resolved ? String(resolved.reason) : undefined,
          epistemicNote: p.continuityReason,
        });
        if (recordSubjectId) subjectsTouchedByAcquis.add(recordSubjectId);
      }
      continue;
    }

    // Unreachable for normalized proposals — keep explicit so unknown kinds never
    // look like silent success via a side-effect subject row alone.
    results.push({
      intentId: p.intentId,
      kind: "acquis",
      status: "FAILED",
      reason: "UNKNOWN_KNOWLEDGE_PROPOSAL_KIND",
      epistemicNote: p.continuityReason,
    });
  }

  // Existing-subject enrichment often arrives as ACQUIS-only. Still re-evaluate synthesis
  // when durable CURRENT knowledge changed and Nora did not emit an explicit SUBJECT revision.
  if (projectId) {
    for (const touchedId of subjectsTouchedByAcquis) {
      if (subjectsWithExplicitSummary.has(touchedId)) continue;
      const owned = await loadOwnedSubject(pilotId, preparationId, touchedId);
      if (!owned || owned.status !== "ACTIVE") continue;
      const acquisRows = await db
        .select({
          statement: knowledgeAcquis.statement,
        })
        .from(knowledgeAcquis)
        .where(
          and(
            eq(knowledgeAcquis.ownerPilotId, pilotId),
            eq(knowledgeAcquis.subjectId, touchedId),
            eq(knowledgeAcquis.status, "CURRENT"),
          ),
        );
      if (acquisRows.length === 0) continue;
      const openRows = await db
        .select({ statement: knowledgeOpenPoints.statement })
        .from(knowledgeOpenPoints)
        .where(
          and(
            eq(knowledgeOpenPoints.ownerPilotId, pilotId),
            eq(knowledgeOpenPoints.subjectId, touchedId),
            eq(knowledgeOpenPoints.status, "OPEN"),
          ),
        );
      const composed = composeSubjectSummaryFromCurrentKnowledge({
        subjectTitle: owned.title,
        acquisStatements: acquisRows.map((r) => r.statement),
        openPointStatements: openRows.map((r) => r.statement),
      });
      await writeSubjectSummary(touchedId, composed, owned.title, {
        epistemic: "recommended",
        continuityReason:
          "réévaluation de synthèse après capitalisation d'acquis sur sujet existant",
      });
    }
  }

  return {
    capitalisations: results,
    selectionMethod: "semantic-proposals" as const,
    selectionLimit:
      "RG-KNOW-001: capitalisation sélective depuis propositions Nora typées — pas d'autorité D6",
    humanDecisionCreated: false as const,
    ownershipLost: false as const,
  };
}
