import { and, desc, eq } from "drizzle-orm";
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
  opts?: { injectPersistFailure?: boolean },
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
    // Authorization: owner AND durable preparation context (not owner-only).
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

  // Honest lifecycle: insert SAVING first; promote to AVAILABLE only after durable confirm.
  try {
    await db.insert(documentRevisions).values({
      id: revisionId,
      documentId: docId,
      revisionNumber,
      contentMarkdown,
      status: "SAVING",
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
      // best-effort status mark
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
