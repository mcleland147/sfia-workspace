import { and, desc, eq, inArray, ne, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
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

export async function selectRelevantKnowledgeContext(
  pilotId: string,
  preparationId: string,
  userText: string,
  opts?: { limit?: number },
) {
  const { subjects, acquis, openPoints } = await listKnowledge(pilotId, preparationId);
  const limit = opts?.limit ?? 8;
  const q = userText.toLowerCase();
  const tokens = q
    .split(/[^a-zàâäéèêëïîôùûüç0-9]+/i)
    .filter((t) => t.length > 3)
    .slice(0, 12);

  function score(text: string): number {
    const lower = text.toLowerCase();
    let s = 0;
    for (const t of tokens) if (lower.includes(t)) s += 2;
    return s;
  }

  const rankedAcquis = acquis
    .filter((a) => a.status === "CURRENT")
    .map((a) => ({ a, s: score(a.statement) }))
    .sort((x, y) => y.s - x.s || (y.a.createdAt?.getTime?.() ?? 0) - (x.a.createdAt?.getTime?.() ?? 0));

  const rankedOpen = openPoints
    .filter((o) => o.status === "OPEN")
    .map((o) => ({ o, s: score(o.statement) + 1 }))
    .sort((x, y) => y.s - x.s);

  const pickedAcquis = rankedAcquis.slice(0, Math.min(limit, 5));
  const pickedOpen = rankedOpen.slice(0, Math.min(4, limit));
  const pickedSubjects = subjects.filter((s) => s.status === "ACTIVE").slice(0, 5);

  const snippets: string[] = [];
  for (const { a } of pickedAcquis) {
    snippets.push(
      `ACQUIS[${a.kind}/${a.id}] subject=${a.subjectId ?? "∅"}: ${a.statement.slice(0, 280)} | provenance=${a.provenanceJson.slice(0, 160)}`,
    );
  }
  for (const { o } of pickedOpen) {
    snippets.push(
      `POINT_OUVERT[${o.id}] subject=${o.subjectId ?? "∅"}: ${o.statement.slice(0, 240)} | provenance=${o.provenanceJson.slice(0, 120)}`,
    );
  }
  for (const s of pickedSubjects) {
    snippets.push(`SUJET[${s.id}/${s.status}]: ${s.title}`);
  }

  return {
    snippets,
    counts: {
      subjects: subjects.length,
      acquisCurrent: acquis.filter((a) => a.status === "CURRENT").length,
      openPoints: openPoints.filter((o) => o.status === "OPEN").length,
    },
    selectedAcquisIds: pickedAcquis.map((x) => x.a.id),
    selectedOpenPointIds: pickedOpen.map((x) => x.o.id),
    selectionMethod: "lexical-heuristic" as const,
    selectionLimit:
      "Sélection lexicale bornée — n'établit pas de vérité épistémique; D3 doit qualifier pertinence et limites.",
  };
}

/**
 * Heuristic capitalisation — auxiliary only, not epistemic authority.
 * Defaults to HYPOTHESIS; FACT only if explicitly established.
 */
export async function maybeCapitalizeFromExchange(
  pilotId: string,
  preparationId: string,
  input: {
    userText: string;
    assistantText: string;
    generationId: string;
    userMessageId: string;
    /** Propagated into every D4 capitalisation write TX. */
    turnFence?: TurnOwnershipFence;
  },
) {
  const results: Array<{
    kind: string;
    id?: string;
    status: string;
    epistemicNote?: string;
    reason?: string;
  }> = [];
  const lower = `${input.userText}\n${input.assistantText}`.toLowerCase();
  const selectionLimit =
    "Capitalisation heuristique (regex/lexical) — pas une autorité épistémique; LIVE COG requis pour qualification.";
  const fence = input.turnFence;

  let subjectId: string | null = null;
  const topicMatch = input.userText.match(
    /(?:sujet|thème|theme|à propos de|concernant)\s*[:«"]?\s*([^\n.«"]{4,80})/i,
  );
  if (topicMatch?.[1]) {
    const s = await ensureSubject(
      pilotId,
      preparationId,
      topicMatch[1].trim(),
      undefined,
      fence,
    );
    if (s.status === "AVAILABLE" && s.subjectId) {
      subjectId = s.subjectId;
    } else if (s.status === "FAILED" && "reason" in s && s.reason === "TURN_OWNERSHIP_LOST") {
      results.push({
        kind: "subject",
        status: "FAILED",
        reason: "TURN_OWNERSHIP_LOST",
        epistemicNote: selectionLimit,
      });
      return {
        capitalisations: results,
        selectionMethod: "lexical-heuristic" as const,
        selectionLimit: "OWNERSHIP_LOST",
        humanDecisionCreated: false as const,
        ownershipLost: true as const,
      };
    }
  }

  // Stronger gate than keyword alone: require comparative structure or explicit durable ask
  const looksComparative =
    /compar(e|er|aison).{0,80}(option|compromis|avantage|inconvénient|critère)/i.test(lower) ||
    (/option[s]?\s*[abc]/i.test(lower) && /compromis|avantage|inconvénient/i.test(lower));
  const looksOpen =
    /\b(point ouvert|question ouverte|à clarifier|dépendance non résolue)\b/i.test(lower);
  const looksDurableAsk =
    /\b(retenir comme acquis|capitalise|mémorise|enregistre (cet|cette) acquis)\b/i.test(
      input.userText,
    );
  const looksRecommendation = /\brecommandation conditionnelle\b/i.test(lower);

  if (looksDurableAsk || looksComparative) {
    const statement = extractSalientLine(input.assistantText) ?? input.userText.slice(0, 200);
    const kind: KnowledgeKind = looksRecommendation
      ? "RECOMMENDATION"
      : looksComparative
        ? "HYPOTHESIS"
        : "HYPOTHESIS";
    const cap = await capitalizeAcquis(pilotId, preparationId, {
      statement,
      kind,
      subjectId,
      turnFence: fence,
      provenance: {
        sourceKind: "message",
        sourceId: input.userMessageId,
        generationId: input.generationId,
        note: "heuristic capitalisation — not epistemic authority",
        epistemic: kind === "RECOMMENDATION" ? "recommended" : "hypothesized",
      },
    });
    if (cap.status === "FAILED" && "reason" in cap && cap.reason === "TURN_OWNERSHIP_LOST") {
      results.push({
        kind: "acquis",
        status: "FAILED",
        reason: "TURN_OWNERSHIP_LOST",
        epistemicNote: selectionLimit,
      });
      return {
        capitalisations: results,
        selectionMethod: "lexical-heuristic" as const,
        selectionLimit: "OWNERSHIP_LOST",
        humanDecisionCreated: false as const,
        ownershipLost: true as const,
      };
    }
    results.push({
      kind: "acquis",
      id: "acquisId" in cap ? cap.acquisId : undefined,
      status: cap.status,
      epistemicNote: selectionLimit,
    });
  }

  if (looksOpen) {
    const statement =
      extractOpenLine(input.assistantText) ??
      `Point ouvert issu de l'échange: ${input.userText.slice(0, 160)}`;
    const op = await openPoint(pilotId, preparationId, {
      statement,
      subjectId,
      turnFence: fence,
      provenance: {
        sourceKind: "message",
        sourceId: input.userMessageId,
        generationId: input.generationId,
        epistemic: "limited",
      },
    });
    if (op.status === "FAILED" && "reason" in op && op.reason === "TURN_OWNERSHIP_LOST") {
      results.push({
        kind: "open_point",
        status: "FAILED",
        reason: "TURN_OWNERSHIP_LOST",
        epistemicNote: selectionLimit,
      });
      return {
        capitalisations: results,
        selectionMethod: "lexical-heuristic" as const,
        selectionLimit: "OWNERSHIP_LOST",
        humanDecisionCreated: false as const,
        ownershipLost: true as const,
      };
    }
    results.push({
      kind: "open_point",
      id: "openPointId" in op ? op.openPointId : undefined,
      status: op.status,
      epistemicNote: selectionLimit,
    });
  }

  return {
    capitalisations: results,
    selectionMethod: "lexical-heuristic" as const,
    selectionLimit,
    humanDecisionCreated: false as const,
    ownershipLost: false as const,
  };
}
function extractSalientLine(text: string): string | null {
  const lines = text
    .split(/\n+/)
    .map((l) => l.replace(/^#+\s*/, "").replace(/^[-*]\s*/, "").trim())
    .filter((l) => l.length > 40 && l.length < 400);
  return lines[0] ?? null;
}

function extractOpenLine(text: string): string | null {
  const m = text.match(/(?:point[s]? ouvert[s]?|à clarifier|reste à)[^\n]{8,200}/i);
  return m?.[0]?.trim() ?? null;
}
