import { and, desc, eq, inArray, ne, sql } from "drizzle-orm";
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
};

export type KnowledgeKind = "FACT" | "HYPOTHESIS" | "RECOMMENDATION" | "LIMIT";

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
  const statement = input.statement.trim();
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
  },
) {
  const ctx = await assertPrep(pilotId, preparationId);
  const statement = input.statement.trim();
  if (!statement) return { status: "FAILED" as const, reason: "empty" };
  if (input.subjectId) {
    const check = await assertSubjectRef(pilotId, preparationId, input.subjectId);
    if (check && "error" in check) return { status: "FAILED" as const, reason: check.error };
    if (check?.subject && check.subject.status !== "ACTIVE") {
      return { status: "FAILED" as const, reason: "SUBJECT_NOT_ACTIVE" };
    }
  }
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
      provenanceJson: provenanceString(input.provenance),
    });
    return { status: "OK" as const };
  });
  if (write.status === "OWNERSHIP_LOST") {
    return { status: "FAILED" as const, reason: "TURN_OWNERSHIP_LOST" };
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
) {
  await assertPrep(pilotId, preparationId);
  const title = newTitle.trim().slice(0, 200);
  if (!title) return { status: "FAILED" as const, reason: "empty title" };

  try {
    return await db.transaction(async (tx) => {
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

/** Merge B into A — atomic; A remains ACTIVE; B marked MERGED with filiation. */
export async function mergeSubjects(
  pilotId: string,
  preparationId: string,
  targetSubjectId: string,
  sourceSubjectId: string,
  opts?: { injectFailureAfter?: "lock" | "move" },
) {
  await assertPrep(pilotId, preparationId);
  if (targetSubjectId === sourceSubjectId) {
    return { status: "FAILED" as const, reason: "same subject" };
  }

  try {
    return await db.transaction(async (tx) => {
      // Deterministic lock order to avoid deadlocks
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
        payloadJson: JSON.stringify({ absorbed: sourceSubjectId }),
      });
      return { status: "AVAILABLE" as const, targetSubjectId, absorbedSubjectId: sourceSubjectId };
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
  opts?: { injectFailureAfter?: "validate" | "create" | "move" },
) {
  const ctx = await assertPrep(pilotId, preparationId);
  const newTitle = input.newTitle.trim().slice(0, 200);
  if (!newTitle) return { status: "FAILED" as const, reason: "empty title" };
  if (input.acquisIds.length === 0 && input.openPointIds.length === 0) {
    return { status: "FAILED" as const, reason: "nothing to move" };
  }

  try {
    return await db.transaction(async (tx) => {
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
  _userText: string,
  opts?: {
    limit?: number;
    preferredAcquisIds?: string[];
    preferredOpenPointIds?: string[];
    preferredSubjectIds?: string[];
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
  for (const a of pickedAcquis) {
    const mark = prefA.has(a.id) ? "PREFERRED" : "AVAILABLE";
    snippets.push(
      `ACQUIS[${a.kind}/${a.id}/${mark}] subject=${a.subjectId ?? "∅"}: ${a.statement.slice(0, 280)} | provenance=${a.provenanceJson.slice(0, 160)}`,
    );
  }
  for (const o of pickedOpen) {
    const mark = prefO.has(o.id) ? "PREFERRED" : "AVAILABLE";
    snippets.push(
      `POINT_OUVERT[${o.id}/${mark}] subject=${o.subjectId ?? "∅"}: ${o.statement.slice(0, 240)} | provenance=${o.provenanceJson.slice(0, 120)}`,
    );
  }
  for (const s of pickedSubjects) {
    const mark = prefS.has(s.id) ? "PREFERRED" : "AVAILABLE";
    snippets.push(`SUJET[${s.id}/${s.status}/${mark}]: ${s.title}`);
  }

  return {
    snippets,
    counts: {
      subjects: subjects.length,
      acquisCurrent: acquis.filter((a) => a.status === "CURRENT").length,
      openPoints: openPoints.filter((o) => o.status === "OPEN").length,
    },
    selectedAcquisIds: pickedAcquis.map((a) => a.id),
    selectedOpenPointIds: pickedOpen.map((o) => o.id),
    selectionMethod:
      prefA.size || prefO.size || prefS.size
        ? ("semantic-preferred-then-bounded" as const)
        : ("bounded-resource-listing" as const),
    selectionLimit:
      "RG-KNOW-011: ids préférés Nora d'abord, sinon listing borné droits/état — pas de scoring lexical métier.",
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
    turnFence?: TurnOwnershipFence;
    /** Typed proposals from durable qualification — required for any write. */
    proposals?: Array<{
      intentId: string;
      kind: "ACQUIS" | "OPEN_POINT" | "SUBJECT";
      statement: string;
      epistemic: "hypothesized" | "recommended" | "established" | "limited";
      subjectTitle?: string;
      subjectId?: string;
      continuityReason?: string;
    }>;
  },
) {
  const results: Array<{
    kind: string;
    id?: string;
    status: string;
    epistemicNote?: string;
    reason?: string;
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

  for (const p of proposals) {
    if (p.kind === "SUBJECT" || p.subjectTitle) {
      const title = (p.subjectTitle ?? p.statement).trim().slice(0, 120);
      if (title.length >= 3) {
        const s = await ensureSubject(pilotId, preparationId, title, undefined, fence);
        if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
          results.push({
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
            kind: "subject",
            id: s.subjectId,
            status: s.status,
            epistemicNote: p.continuityReason,
          });
        }
      }
      if (p.kind === "SUBJECT") continue;
    }

    if (p.subjectId) subjectId = p.subjectId;

    if (p.kind === "OPEN_POINT") {
      const op = await openPoint(pilotId, preparationId, {
        statement: p.statement,
        subjectId,
        turnFence: fence,
        provenance: {
          sourceKind: "message",
          sourceId: input.userMessageId,
          generationId: input.generationId,
          epistemic: p.epistemic === "established" ? "limited" : p.epistemic,
          note: p.continuityReason ?? "semantic qualification d4.record_knowledge",
        },
      });
      if (op.status === "FAILED" && "reason" in op && op.reason === "TURN_OWNERSHIP_LOST") {
        results.push({
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
        kind: "open_point",
        id: "openPointId" in op ? op.openPointId : undefined,
        status: op.status,
        epistemicNote: p.continuityReason,
      });
      continue;
    }

    if (p.kind === "ACQUIS") {
      // F4: Nora's epistemic="established" is NOT independent proof.
      // Never promote to FACT from the model envelope alone — store as HYPOTHESIS /
      // RECOMMENDATION until D4 has a verified independent source contract.
      const kind: KnowledgeKind =
        p.epistemic === "recommended" ? "RECOMMENDATION" : "HYPOTHESIS";
      const epistemicNote =
        p.epistemic === "established"
          ? `${p.continuityReason ?? "semantic"} — Nora marked established but D4 refused FACT without independent verified source`
          : p.continuityReason;
      const cap = await capitalizeAcquis(pilotId, preparationId, {
        statement: p.statement,
        kind,
        subjectId,
        turnFence: fence,
        provenance: {
          sourceKind: "message",
          sourceId: input.userMessageId,
          generationId: input.generationId,
          note: epistemicNote ?? "semantic qualification d4.record_knowledge",
          epistemic: "hypothesized",
        },
      });
      if (cap.status === "FAILED" && "reason" in cap && cap.reason === "TURN_OWNERSHIP_LOST") {
        results.push({
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
        kind: "acquis",
        id: "acquisId" in cap ? cap.acquisId : undefined,
        status: cap.status,
        epistemicNote: epistemicNote,
        reason:
          p.epistemic === "established"
            ? "FACT_PROMOTION_REFUSED_NO_INDEPENDENT_SOURCE"
            : undefined,
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
