import { and, asc, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, documents } from "@/db/schema";
import { newId } from "@/lib/ids";
import { getPreparationContext } from "@/domains/preparation/service";

const MAX_DOC_CHARS = 100_000;

export async function savePreparationDocument(
  pilotId: string,
  preparationId: string,
  title: string,
  contentMarkdown: string,
  documentId?: string,
  opts?: {
    injectPersistFailure?: boolean;
    correlationKey?: string;
    provenance?: Record<string, unknown>;
    scope?: string;
    baseRevisionId?: string | null;
  },
) {
  if (contentMarkdown.length > MAX_DOC_CHARS) {
    return { status: "FAILED" as const, reason: "content too large" };
  }
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.preparation) throw Object.assign(new Error("NOT_FOUND"), { code: "NOT_FOUND" });

  let docId = documentId;
  if (!docId) {
    docId = newId("doc");
    await db.insert(documents).values({
      id: docId,
      preparationId,
      projectId: ctx.project?.id ?? null,
      ownerPilotId: pilotId,
      title: title || "Document du sas",
    });
  } else {
    const owned = (
      await db
        .select()
        .from(documents)
        .where(
          and(
            eq(documents.id, docId),
            eq(documents.ownerPilotId, pilotId),
            eq(documents.preparationId, preparationId),
          ),
        )
        .limit(1)
    )[0];
    if (!owned) return { status: "FAILED" as const, reason: "FORBIDDEN" };
  }

  // Idempotent replay on correlation key
  if (opts?.correlationKey) {
    const prior = (
      await db
        .select()
        .from(documentRevisions)
        .where(
          and(
            eq(documentRevisions.documentId, docId),
            eq(documentRevisions.correlationKey, opts.correlationKey),
          ),
        )
        .limit(1)
    )[0];
    if (prior) {
      return {
        status: prior.status as "AVAILABLE" | "FAILED" | "SAVING" | "UNKNOWN",
        documentId: docId,
        revisionId: prior.id,
        revisionNumber: prior.revisionNumber,
        idempotentReplay: true,
      };
    }
  }

  const last = (
    await db
      .select()
      .from(documentRevisions)
      .where(eq(documentRevisions.documentId, docId))
      .orderBy(desc(documentRevisions.revisionNumber))
      .limit(1)
  )[0];
  const revisionNumber = (last?.revisionNumber ?? 0) + 1;
  const revisionId = newId("drev");

  try {
    await db.insert(documentRevisions).values({
      id: revisionId,
      documentId: docId,
      revisionNumber,
      contentMarkdown,
      status: "SAVING",
      baseRevisionId: opts?.baseRevisionId ?? last?.id ?? null,
      correlationKey: opts?.correlationKey ?? null,
      provenanceJson: JSON.stringify(opts?.provenance ?? {}),
      scope: opts?.scope ?? "document",
    });

    if (opts?.injectPersistFailure) {
      await db
        .update(documentRevisions)
        .set({ status: "FAILED" })
        .where(eq(documentRevisions.id, revisionId));
      return {
        status: "FAILED" as const,
        reason: "injected persist failure",
        documentId: docId,
        revisionId,
        revisionNumber,
      };
    }

    await db
      .update(documentRevisions)
      .set({ status: "AVAILABLE" })
      .where(eq(documentRevisions.id, revisionId));
  } catch (e) {
    try {
      await db
        .update(documentRevisions)
        .set({ status: "FAILED" })
        .where(eq(documentRevisions.id, revisionId));
    } catch {
      // best-effort
    }
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "persist failed",
      documentId: docId,
      revisionId,
      revisionNumber,
    };
  }

  return {
    status: "AVAILABLE" as const,
    documentId: docId,
    revisionId,
    revisionNumber,
  };
}

/**
 * Targeted non-destructive revision with explicit base revision control.
 * CONFLICT when baseRevisionId is not the latest AVAILABLE revision.
 */
export async function reviseDocument(
  pilotId: string,
  preparationId: string,
  input: {
    documentId: string;
    baseRevisionId: string;
    contentMarkdown: string;
    correlationKey: string;
    scope?: string;
    sectionHint?: string;
    provenance?: Record<string, unknown>;
  },
) {
  if (input.contentMarkdown.length > MAX_DOC_CHARS) {
    return { status: "FAILED" as const, reason: "content too large" };
  }
  const owned = (
    await db
      .select()
      .from(documents)
      .where(
        and(
          eq(documents.id, input.documentId),
          eq(documents.ownerPilotId, pilotId),
          eq(documents.preparationId, preparationId),
        ),
      )
      .limit(1)
  )[0];
  if (!owned) return { status: "FAILED" as const, reason: "FORBIDDEN" };

  // Idempotent correlation
  const prior = (
    await db
      .select()
      .from(documentRevisions)
      .where(
        and(
          eq(documentRevisions.documentId, input.documentId),
          eq(documentRevisions.correlationKey, input.correlationKey),
        ),
      )
      .limit(1)
  )[0];
  if (prior) {
    return {
      status: prior.status as "AVAILABLE" | "FAILED" | "SAVING" | "UNKNOWN",
      documentId: input.documentId,
      revisionId: prior.id,
      revisionNumber: prior.revisionNumber,
      idempotentReplay: true as const,
    };
  }

  const base = (
    await db
      .select()
      .from(documentRevisions)
      .where(
        and(
          eq(documentRevisions.id, input.baseRevisionId),
          eq(documentRevisions.documentId, input.documentId),
        ),
      )
      .limit(1)
  )[0];
  if (!base) return { status: "FAILED" as const, reason: "BASE_NOT_FOUND" };
  if (base.status !== "AVAILABLE") {
    return { status: "FAILED" as const, reason: "BASE_NOT_AVAILABLE", baseStatus: base.status };
  }

  const latest = (
    await db
      .select()
      .from(documentRevisions)
      .where(
        and(
          eq(documentRevisions.documentId, input.documentId),
          eq(documentRevisions.status, "AVAILABLE"),
        ),
      )
      .orderBy(desc(documentRevisions.revisionNumber))
      .limit(1)
  )[0];

  if (!latest || latest.id !== input.baseRevisionId) {
    return {
      status: "CONFLICT" as const,
      reason: "BASE_STALE",
      documentId: input.documentId,
      expectedBaseRevisionId: input.baseRevisionId,
      actualLatestRevisionId: latest?.id ?? null,
      actualLatestRevisionNumber: latest?.revisionNumber ?? null,
    };
  }

  const revisionNumber = latest.revisionNumber + 1;
  const revisionId = newId("drev");
  try {
    await db.insert(documentRevisions).values({
      id: revisionId,
      documentId: input.documentId,
      revisionNumber,
      contentMarkdown: input.contentMarkdown,
      status: "SAVING",
      baseRevisionId: input.baseRevisionId,
      correlationKey: input.correlationKey,
      provenanceJson: JSON.stringify({
        ...(input.provenance ?? {}),
        sectionHint: input.sectionHint ?? null,
      }),
      scope: input.scope ?? "section",
    });
    await db
      .update(documentRevisions)
      .set({ status: "AVAILABLE" })
      .where(eq(documentRevisions.id, revisionId));
  } catch (e) {
    try {
      await db
        .update(documentRevisions)
        .set({ status: "FAILED" })
        .where(eq(documentRevisions.id, revisionId));
    } catch {
      // best-effort
    }
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "persist failed",
      documentId: input.documentId,
      revisionId,
      revisionNumber,
    };
  }

  return {
    status: "AVAILABLE" as const,
    documentId: input.documentId,
    revisionId,
    revisionNumber,
    baseRevisionId: input.baseRevisionId,
  };
}

export async function listDocuments(pilotId: string, preparationId: string) {
  const docs = await db
    .select()
    .from(documents)
    .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)));
  const out = [];
  for (const d of docs) {
    const rev = (
      await db
        .select()
        .from(documentRevisions)
        .where(eq(documentRevisions.documentId, d.id))
        .orderBy(desc(documentRevisions.revisionNumber))
        .limit(1)
    )[0];
    out.push({ document: d, latestRevision: rev ?? null });
  }
  return out;
}

export async function listDocumentRevisions(
  pilotId: string,
  preparationId: string,
  documentId: string,
) {
  const owned = (
    await db
      .select()
      .from(documents)
      .where(
        and(
          eq(documents.id, documentId),
          eq(documents.ownerPilotId, pilotId),
          eq(documents.preparationId, preparationId),
        ),
      )
      .limit(1)
  )[0];
  if (!owned) return { status: "FORBIDDEN" as const, revisions: [] };
  const revisions = await db
    .select()
    .from(documentRevisions)
    .where(eq(documentRevisions.documentId, documentId))
    .orderBy(asc(documentRevisions.revisionNumber));
  return { status: "AVAILABLE" as const, document: owned, revisions };
}

export async function getDocumentRevision(
  pilotId: string,
  preparationId: string,
  documentId: string,
  revisionId: string,
) {
  const list = await listDocumentRevisions(pilotId, preparationId, documentId);
  if (list.status !== "AVAILABLE") return { status: "FORBIDDEN" as const };
  const rev = list.revisions.find((r) => r.id === revisionId);
  if (!rev) return { status: "NOT_FOUND" as const };
  return { status: "AVAILABLE" as const, document: list.document, revision: rev };
}

/** Line-oriented diff for inspection — not an AI summary. */
export function diffMarkdown(a: string, b: string): {
  added: string[];
  removed: string[];
  unchangedCount: number;
} {
  const la = a.split("\n");
  const lb = b.split("\n");
  const setA = new Set(la);
  const setB = new Set(lb);
  const added = lb.filter((l) => !setA.has(l));
  const removed = la.filter((l) => !setB.has(l));
  const unchangedCount = la.filter((l) => setB.has(l)).length;
  return { added, removed, unchangedCount };
}

export async function compareDocumentRevisions(
  pilotId: string,
  preparationId: string,
  documentId: string,
  leftRevisionId: string,
  rightRevisionId: string,
) {
  const left = await getDocumentRevision(pilotId, preparationId, documentId, leftRevisionId);
  const right = await getDocumentRevision(pilotId, preparationId, documentId, rightRevisionId);
  if (left.status !== "AVAILABLE" || right.status !== "AVAILABLE") {
    return { status: "FAILED" as const, reason: "revision not available" };
  }
  const diff = diffMarkdown(left.revision.contentMarkdown, right.revision.contentMarkdown);
  return {
    status: "AVAILABLE" as const,
    documentId,
    left: {
      id: left.revision.id,
      revisionNumber: left.revision.revisionNumber,
      status: left.revision.status,
    },
    right: {
      id: right.revision.id,
      revisionNumber: right.revision.revisionNumber,
      status: right.revision.status,
    },
    diff,
  };
}
