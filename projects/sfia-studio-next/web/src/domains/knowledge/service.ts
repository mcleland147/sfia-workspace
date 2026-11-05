import { and, desc, eq, inArray, ne } from "drizzle-orm";
import { db } from "@/db/client";
import {
  knowledgeAcquis,
  knowledgeOpenPoints,
  knowledgeSubjectEvents,
  knowledgeSubjects,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { getPreparationContext } from "@/domains/preparation/service";

export type Provenance = {
  sourceKind: "message" | "document" | "revision" | "pilot" | "nora";
  sourceId?: string;
  generationId?: string;
  notedAt?: string;
  note?: string;
};

function provenanceString(p: Provenance): string {
  return JSON.stringify({ ...p, notedAt: p.notedAt ?? new Date().toISOString() });
}

async function assertPrep(pilotId: string, preparationId: string) {
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.preparation) throw Object.assign(new Error("NOT_FOUND"), { code: "NOT_FOUND" });
  return ctx;
}

/** Selective capitalisation — never invents D6 decisions. */
export async function capitalizeAcquis(
  pilotId: string,
  preparationId: string,
  input: {
    statement: string;
    kind?: "FACT" | "HYPOTHESIS" | "RECOMMENDATION" | "LIMIT";
    subjectId?: string | null;
    provenance: Provenance;
    supersedesAcquisId?: string;
  },
) {
  const ctx = await assertPrep(pilotId, preparationId);
  const statement = input.statement.trim();
  if (!statement || statement.length < 12) {
    return { status: "SKIPPED" as const, reason: "statement too thin for capitalisation" };
  }
  // Do not capitalise recommendations as decisions — keep kind explicit.
  const kind = input.kind ?? "FACT";
  if (kind === "RECOMMENDATION") {
    // Still allowed as acquis of type recommendation; never promotes to HumanDecision.
  }

  const id = newId("acq");
  await db.insert(knowledgeAcquis).values({
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
    await db
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
  return { status: "AVAILABLE" as const, acquisId: id, kind };
}

export async function openPoint(
  pilotId: string,
  preparationId: string,
  input: { statement: string; subjectId?: string | null; provenance: Provenance },
) {
  const ctx = await assertPrep(pilotId, preparationId);
  const statement = input.statement.trim();
  if (!statement) return { status: "FAILED" as const, reason: "empty" };
  const id = newId("opn");
  await db.insert(knowledgeOpenPoints).values({
    id,
    preparationId,
    projectId: ctx.project?.id ?? null,
    ownerPilotId: pilotId,
    subjectId: input.subjectId ?? null,
    statement,
    status: "OPEN",
    provenanceJson: provenanceString(input.provenance),
  });
  return { status: "AVAILABLE" as const, openPointId: id };
}

export async function ensureSubject(
  pilotId: string,
  preparationId: string,
  title: string,
  parentSubjectId?: string | null,
) {
  const ctx = await assertPrep(pilotId, preparationId);
  const cleaned = title.trim().slice(0, 200);
  if (!cleaned) return { status: "FAILED" as const, reason: "empty title" };
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
  await db.insert(knowledgeSubjects).values({
    id,
    preparationId,
    projectId: ctx.project?.id ?? null,
    ownerPilotId: pilotId,
    parentSubjectId: parentSubjectId ?? null,
    title: cleaned,
    status: "ACTIVE",
  });
  return { status: "AVAILABLE" as const, subjectId: id, created: true };
}

export async function renameSubject(
  pilotId: string,
  preparationId: string,
  subjectId: string,
  newTitle: string,
) {
  await assertPrep(pilotId, preparationId);
  const row = (
    await db
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
  if (!row) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  const title = newTitle.trim().slice(0, 200);
  await db
    .update(knowledgeSubjects)
    .set({ title, updatedAt: new Date() })
    .where(eq(knowledgeSubjects.id, subjectId));
  await db.insert(knowledgeSubjectEvents).values({
    id: newId("sev"),
    preparationId,
    ownerPilotId: pilotId,
    subjectId,
    eventType: "RENAMED",
    payloadJson: JSON.stringify({ from: row.title, to: title }),
  });
  return { status: "AVAILABLE" as const, subjectId, title };
}

/** Merge B into A — A remains ACTIVE; B marked MERGED with filiation. */
export async function mergeSubjects(
  pilotId: string,
  preparationId: string,
  targetSubjectId: string,
  sourceSubjectId: string,
) {
  await assertPrep(pilotId, preparationId);
  if (targetSubjectId === sourceSubjectId) {
    return { status: "FAILED" as const, reason: "same subject" };
  }
  const rows = await db
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

  await db
    .update(knowledgeAcquis)
    .set({ subjectId: targetSubjectId, updatedAt: new Date() })
    .where(
      and(
        eq(knowledgeAcquis.subjectId, sourceSubjectId),
        eq(knowledgeAcquis.ownerPilotId, pilotId),
      ),
    );
  await db
    .update(knowledgeOpenPoints)
    .set({ subjectId: targetSubjectId, updatedAt: new Date() })
    .where(
      and(
        eq(knowledgeOpenPoints.subjectId, sourceSubjectId),
        eq(knowledgeOpenPoints.ownerPilotId, pilotId),
      ),
    );
  await db
    .update(knowledgeSubjects)
    .set({
      status: "MERGED",
      originatedFromSubjectId: targetSubjectId,
      updatedAt: new Date(),
    })
    .where(eq(knowledgeSubjects.id, sourceSubjectId));
  await db.insert(knowledgeSubjectEvents).values({
    id: newId("sev"),
    preparationId,
    ownerPilotId: pilotId,
    subjectId: targetSubjectId,
    eventType: "MERGED",
    payloadJson: JSON.stringify({ absorbed: sourceSubjectId }),
  });
  return { status: "AVAILABLE" as const, targetSubjectId, absorbedSubjectId: sourceSubjectId };
}

/**
 * Split: move selected acquis/open points to a new subject with filiation preserved.
 * Minimal composition — no new Figma screen; composes on existing Sujets surface.
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
) {
  await assertPrep(pilotId, preparationId);
  const source = (
    await db
      .select()
      .from(knowledgeSubjects)
      .where(
        and(
          eq(knowledgeSubjects.id, sourceSubjectId),
          eq(knowledgeSubjects.ownerPilotId, pilotId),
          eq(knowledgeSubjects.preparationId, preparationId),
        ),
      )
      .limit(1)
  )[0];
  if (!source) return { status: "FAILED" as const, reason: "NOT_FOUND" };
  if (input.acquisIds.length === 0 && input.openPointIds.length === 0) {
    return { status: "FAILED" as const, reason: "nothing to move" };
  }

  const created = await ensureSubject(pilotId, preparationId, input.newTitle);
  if (created.status !== "AVAILABLE" || !created.subjectId) {
    return { status: "FAILED" as const, reason: "could not create target subject" };
  }
  const newSubjectId = created.subjectId;
  await db
    .update(knowledgeSubjects)
    .set({
      originatedFromSubjectId: sourceSubjectId,
      updatedAt: new Date(),
    })
    .where(eq(knowledgeSubjects.id, newSubjectId));

  if (input.acquisIds.length) {
    await db
      .update(knowledgeAcquis)
      .set({ subjectId: newSubjectId, updatedAt: new Date() })
      .where(
        and(
          eq(knowledgeAcquis.ownerPilotId, pilotId),
          eq(knowledgeAcquis.preparationId, preparationId),
          inArray(knowledgeAcquis.id, input.acquisIds),
        ),
      );
  }
  if (input.openPointIds.length) {
    await db
      .update(knowledgeOpenPoints)
      .set({ subjectId: newSubjectId, updatedAt: new Date() })
      .where(
        and(
          eq(knowledgeOpenPoints.ownerPilotId, pilotId),
          eq(knowledgeOpenPoints.preparationId, preparationId),
          inArray(knowledgeOpenPoints.id, input.openPointIds),
        ),
      );
  }
  await db.insert(knowledgeSubjectEvents).values({
    id: newId("sev"),
    preparationId,
    ownerPilotId: pilotId,
    subjectId: sourceSubjectId,
    eventType: "SPLIT",
    payloadJson: JSON.stringify({
      newSubjectId,
      acquisIds: input.acquisIds,
      openPointIds: input.openPointIds,
    }),
  });
  return {
    status: "AVAILABLE" as const,
    sourceSubjectId,
    newSubjectId,
    filiationPreserved: true,
  };
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
 * D4 availability → D3 selection context. Bounded, provenance-bearing, no full transcript.
 * Does NOT create authority; reconstructible summaries only.
 */
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
    .map((a) => ({ a, s: score(a.statement) + (a.kind === "FACT" ? 1 : 0) }))
    .sort((x, y) => y.s - x.s || (y.a.createdAt?.getTime?.() ?? 0) - (x.a.createdAt?.getTime?.() ?? 0));

  const rankedOpen = openPoints
    .filter((o) => o.status === "OPEN")
    .map((o) => ({ o, s: score(o.statement) + 1 }))
    .sort((x, y) => y.s - x.s);

  // Always include recent CURRENT acquis / OPEN points even with weak lexical match
  // so reprise after many exchanges recovers D4 beyond the 6-message window.
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
  };
}

/**
 * Heuristic selective capitalisation after a Nora exchange.
 * Caps creations; never treats recommendation as HumanDecision.
 */
export async function maybeCapitalizeFromExchange(
  pilotId: string,
  preparationId: string,
  input: {
    userText: string;
    assistantText: string;
    generationId: string;
    userMessageId: string;
  },
) {
  const results: Array<{ kind: string; id?: string; status: string }> = [];
  const lower = `${input.userText}\n${input.assistantText}`.toLowerCase();

  // Subject from explicit topical cues
  let subjectId: string | null = null;
  const topicMatch = input.userText.match(
    /(?:sujet|thème|theme|à propos de|concernant)\s*[:«"]?\s*([^\n.«"]{4,80})/i,
  );
  if (topicMatch?.[1]) {
    const s = await ensureSubject(pilotId, preparationId, topicMatch[1].trim());
    if (s.status === "AVAILABLE" && s.subjectId) subjectId = s.subjectId;
  }

  const looksComparative =
    /compar(e|er|aison)|option[s]? [abc]|compromis|avantage|inconvénient/i.test(lower);
  const looksOpen =
    /\b(point ouvert|à clarifier|reste à|inconnu|hypothèse|question ouverte|dépendance)\b/i.test(
      lower,
    );
  const looksDurable =
    looksComparative ||
    /conclusion|reten(?:ir|u)|acquis|décider|synthèse|hypothèse privilégiée/i.test(lower);

  if (looksDurable) {
    const statement = extractSalientLine(input.assistantText) ?? input.userText.slice(0, 200);
    const cap = await capitalizeAcquis(pilotId, preparationId, {
      statement,
      kind: looksComparative ? "HYPOTHESIS" : "FACT",
      subjectId,
      provenance: {
        sourceKind: "message",
        sourceId: input.userMessageId,
        generationId: input.generationId,
        note: "selective capitalisation post-exchange",
      },
    });
    results.push({ kind: "acquis", id: "acquisId" in cap ? cap.acquisId : undefined, status: cap.status });
  }

  if (looksOpen) {
    const statement =
      extractOpenLine(input.assistantText) ??
      `Point ouvert issu de l'échange: ${input.userText.slice(0, 160)}`;
    const op = await openPoint(pilotId, preparationId, {
      statement,
      subjectId,
      provenance: {
        sourceKind: "message",
        sourceId: input.userMessageId,
        generationId: input.generationId,
      },
    });
    results.push({
      kind: "open_point",
      id: "openPointId" in op ? op.openPointId : undefined,
      status: op.status,
    });
  }

  // Explicit document request does not auto-capitalise every sentence — skip chatter.
  return { capitalisations: results };
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
