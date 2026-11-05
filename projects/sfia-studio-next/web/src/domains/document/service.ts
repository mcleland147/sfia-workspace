import { and, asc, desc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, documents } from "@/db/schema";
import { newId } from "@/lib/ids";
import { getPreparationContext } from "@/domains/preparation/service";
import { createHash } from "node:crypto";

const MAX_DOC_CHARS = 100_000;
/** Max LCS cells (n+1)*(m+1). Beyond this, comparison degrades explicitly. */
export const MAX_DIFF_CELLS = 2_000_000;
const IN_FLIGHT_POLL_MS = 25;
const IN_FLIGHT_POLL_ATTEMPTS = 8;

function contentFingerprint(title: string, contentMarkdown: string): string {
  return createHash("sha256")
    .update(title || "")
    .update("\0")
    .update(contentMarkdown)
    .digest("hex");
}

function readStoredFingerprint(
  provenanceJson: string,
  title: string,
  contentMarkdown: string,
): string {
  try {
    const parsed = JSON.parse(provenanceJson) as { contentFingerprint?: string };
    if (typeof parsed.contentFingerprint === "string" && parsed.contentFingerprint.length > 0) {
      return parsed.contentFingerprint;
    }
  } catch {
    // fall through — derive from stored body
  }
  return contentFingerprint(title, contentMarkdown);
}

type ReconcileOk = {
  status: "AVAILABLE" | "SAVING" | "UNKNOWN";
  documentId: string;
  revisionId: string;
  revisionNumber: number;
  idempotentReplay: true;
};

type ReconcileFailedPrior = {
  status: "FAILED";
  reason: "PRIOR_REVISION_FAILED";
  documentId: string;
  revisionId: string;
  revisionNumber: number;
  idempotentReplay: true;
};

type ReconcileConflict = {
  status: "CONFLICT";
  reason: "CORRELATION_PAYLOAD_MISMATCH";
  documentId: string;
  revisionId: string;
  revisionNumber: number;
};

/** Same fingerprint rule for every reconcile path (nominal, race, catch, TX). */
function reconcilePriorRevision(args: {
  prior: { id: string; revisionNumber: number; status: string; contentMarkdown: string; provenanceJson: string };
  documentId: string;
  documentTitle: string;
  expectedFp: string;
}): ReconcileOk | ReconcileFailedPrior | ReconcileConflict {
  const storedFp = readStoredFingerprint(
    args.prior.provenanceJson,
    args.documentTitle,
    args.prior.contentMarkdown,
  );
  if (storedFp !== args.expectedFp) {
    return {
      status: "CONFLICT",
      reason: "CORRELATION_PAYLOAD_MISMATCH",
      documentId: args.documentId,
      revisionId: args.prior.id,
      revisionNumber: args.prior.revisionNumber,
    };
  }
  if (args.prior.status === "FAILED") {
    return {
      status: "FAILED",
      reason: "PRIOR_REVISION_FAILED",
      documentId: args.documentId,
      revisionId: args.prior.id,
      revisionNumber: args.prior.revisionNumber,
      idempotentReplay: true,
    };
  }
  const status =
    args.prior.status === "SAVING" || args.prior.status === "UNKNOWN"
      ? args.prior.status
      : "AVAILABLE";
  return {
    status,
    documentId: args.documentId,
    revisionId: args.prior.id,
    revisionNumber: args.prior.revisionNumber,
    idempotentReplay: true,
  };
}

async function findByCreationCorrelation(
  pilotId: string,
  preparationId: string,
  correlationKey: string,
) {
  return (
    await db
      .select()
      .from(documents)
      .where(
        and(
          eq(documents.preparationId, preparationId),
          eq(documents.ownerPilotId, pilotId),
          eq(documents.creationCorrelationKey, correlationKey),
        ),
      )
      .limit(1)
  )[0];
}

async function findRevisionByCorrelation(documentId: string, correlationKey: string) {
  return (
    await db
      .select()
      .from(documentRevisions)
      .where(
        and(
          eq(documentRevisions.documentId, documentId),
          eq(documentRevisions.correlationKey, correlationKey),
        ),
      )
      .limit(1)
  )[0];
}

async function waitForRevisionByCorrelation(documentId: string, correlationKey: string) {
  for (let i = 0; i < IN_FLIGHT_POLL_ATTEMPTS; i++) {
    const rev = await findRevisionByCorrelation(documentId, correlationKey);
    if (rev) return rev;
    await new Promise((r) => setTimeout(r, IN_FLIGHT_POLL_MS));
  }
  return null;
}

async function latestRevisionFor(documentId: string) {
  return (
    await db
      .select()
      .from(documentRevisions)
      .where(eq(documentRevisions.documentId, documentId))
      .orderBy(desc(documentRevisions.revisionNumber))
      .limit(1)
  )[0];
}

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

  const titleFinal = title || "Document du sas";
  const fp = contentFingerprint(titleFinal, contentMarkdown);

  // --- Creation idempotence: resolve durable command identity BEFORE allocating a new doc id ---
  if (!documentId && opts?.correlationKey) {
    const existingDoc = await findByCreationCorrelation(
      pilotId,
      preparationId,
      opts.correlationKey,
    );
    if (existingDoc) {
      const priorRev =
        (await findRevisionByCorrelation(existingDoc.id, opts.correlationKey)) ??
        (await waitForRevisionByCorrelation(existingDoc.id, opts.correlationKey));
      if (priorRev) {
        return reconcilePriorRevision({
          prior: priorRev,
          documentId: existingDoc.id,
          documentTitle: existingDoc.title,
          expectedFp: fp,
        });
      }
      // Document row exists but revision still absent after bounded wait
      return {
        status: "UNKNOWN" as const,
        reason: "CREATION_IN_FLIGHT",
        documentId: existingDoc.id,
      };
    }
  }

  let docId = documentId;
  let ownedTitle = titleFinal;
  if (!docId) {
    docId = newId("doc");
    try {
      await db.insert(documents).values({
        id: docId,
        preparationId,
        projectId: ctx.project?.id ?? null,
        ownerPilotId: pilotId,
        title: titleFinal,
        creationCorrelationKey: opts?.correlationKey ?? null,
      });
    } catch (e) {
      // Concurrent create with same correlation key — reconcile WITH fingerprint
      if (opts?.correlationKey) {
        const raced = await findByCreationCorrelation(
          pilotId,
          preparationId,
          opts.correlationKey,
        );
        if (raced) {
          const priorRev =
            (await findRevisionByCorrelation(raced.id, opts.correlationKey)) ??
            (await waitForRevisionByCorrelation(raced.id, opts.correlationKey));
          if (priorRev) {
            return reconcilePriorRevision({
              prior: priorRev,
              documentId: raced.id,
              documentTitle: raced.title,
              expectedFp: fp,
            });
          }
          return {
            status: "UNKNOWN" as const,
            reason: "CREATION_IN_FLIGHT",
            documentId: raced.id,
          };
        }
        return {
          status: "FAILED" as const,
          reason: e instanceof Error ? e.message : "document create failed",
        };
      }
      return {
        status: "FAILED" as const,
        reason: e instanceof Error ? e.message : "document create failed",
      };
    }
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
    ownedTitle = owned.title;
  }

  // Revision-level idempotence for known document
  if (opts?.correlationKey) {
    const prior = await findRevisionByCorrelation(docId, opts.correlationKey);
    if (prior) {
      return reconcilePriorRevision({
        prior,
        documentId: docId,
        documentTitle: ownedTitle,
        expectedFp: fp,
      });
    }
  }

  try {
    return await db.transaction(async (tx) => {
      await tx.execute(
        sql`select id from documents where id = ${docId} and owner_pilot_id = ${pilotId} for update`,
      );

      if (opts?.correlationKey) {
        const prior = (
          await tx
            .select()
            .from(documentRevisions)
            .where(
              and(
                eq(documentRevisions.documentId, docId!),
                eq(documentRevisions.correlationKey, opts.correlationKey),
              ),
            )
            .limit(1)
        )[0];
        if (prior) {
          return reconcilePriorRevision({
            prior,
            documentId: docId!,
            documentTitle: ownedTitle,
            expectedFp: fp,
          });
        }
      }

      const last = (
        await tx
          .select()
          .from(documentRevisions)
          .where(eq(documentRevisions.documentId, docId!))
          .orderBy(desc(documentRevisions.revisionNumber))
          .limit(1)
      )[0];
      const revisionNumber = (last?.revisionNumber ?? 0) + 1;
      const revisionId = newId("drev");

      await tx.insert(documentRevisions).values({
        id: revisionId,
        documentId: docId!,
        revisionNumber,
        contentMarkdown,
        status: "SAVING",
        baseRevisionId: opts?.baseRevisionId ?? last?.id ?? null,
        correlationKey: opts?.correlationKey ?? null,
        provenanceJson: JSON.stringify({
          ...(opts?.provenance ?? {}),
          contentFingerprint: fp,
        }),
        scope: opts?.scope ?? "document",
      });

      if (opts?.injectPersistFailure) {
        await tx
          .update(documentRevisions)
          .set({ status: "FAILED" })
          .where(eq(documentRevisions.id, revisionId));
        return {
          status: "FAILED" as const,
          reason: "injected persist failure",
          documentId: docId!,
          revisionId,
          revisionNumber,
        };
      }

      await tx
        .update(documentRevisions)
        .set({ status: "AVAILABLE" })
        .where(eq(documentRevisions.id, revisionId));

      return {
        status: "AVAILABLE" as const,
        documentId: docId!,
        revisionId,
        revisionNumber,
      };
    });
  } catch (e) {
    // Unique violation on correlation → reconcile WITH fingerprint (same rule as race path)
    if (opts?.correlationKey) {
      const prior =
        (await findRevisionByCorrelation(docId, opts.correlationKey)) ??
        (await waitForRevisionByCorrelation(docId, opts.correlationKey));
      if (prior) {
        return reconcilePriorRevision({
          prior,
          documentId: docId,
          documentTitle: ownedTitle,
          expectedFp: fp,
        });
      }
      return {
        status: "UNKNOWN" as const,
        reason: "CREATION_IN_FLIGHT",
        documentId: docId,
      };
    }
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "persist failed",
      documentId: docId,
    };
  }
}

/**
 * Targeted non-destructive revision with atomic base-revision control.
 * Document row FOR UPDATE serializes concurrent successors of the same base.
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
    injectFailureAfterLock?: boolean;
  },
) {
  if (input.contentMarkdown.length > MAX_DOC_CHARS) {
    return { status: "FAILED" as const, reason: "content too large" };
  }

  try {
    return await db.transaction(async (tx) => {
      await tx.execute(
        sql`select id from documents where id = ${input.documentId} and owner_pilot_id = ${pilotId} and preparation_id = ${preparationId} for update`,
      );

      const owned = (
        await tx
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

      // Idempotent correlation inside the lock
      const prior = (
        await tx
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
        await tx
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
        await tx
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

      if (input.injectFailureAfterLock) {
        throw new Error("injected failure after lock");
      }

      const revisionNumber = latest.revisionNumber + 1;
      const revisionId = newId("drev");
      await tx.insert(documentRevisions).values({
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
      await tx
        .update(documentRevisions)
        .set({ status: "AVAILABLE" })
        .where(eq(documentRevisions.id, revisionId));

      return {
        status: "AVAILABLE" as const,
        documentId: input.documentId,
        revisionId,
        revisionNumber,
        baseRevisionId: input.baseRevisionId,
      };
    });
  } catch (e) {
    // Unique (documentId, revisionNumber) race → treat as conflict if base became stale
    const msg = e instanceof Error ? e.message : "persist failed";
    if (/unique|duplicate/i.test(msg)) {
      const latest = await latestRevisionFor(input.documentId);
      return {
        status: "CONFLICT" as const,
        reason: "BASE_STALE",
        documentId: input.documentId,
        expectedBaseRevisionId: input.baseRevisionId,
        actualLatestRevisionId: latest?.id ?? null,
        actualLatestRevisionNumber: latest?.revisionNumber ?? null,
      };
    }
    return {
      status: "FAILED" as const,
      reason: msg,
      documentId: input.documentId,
      rolledBack: true as const,
    };
  }
}

export async function listDocuments(pilotId: string, preparationId: string) {
  const docs = await db
    .select()
    .from(documents)
    .where(and(eq(documents.preparationId, preparationId), eq(documents.ownerPilotId, pilotId)));
  const out = [];
  for (const d of docs) {
    const rev = await latestRevisionFor(d.id);
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

export type DiffResult = {
  added: string[];
  removed: string[];
  unchangedCount: number;
  ops: Array<{ op: "equal" | "add" | "remove"; line: string }>;
  degraded?: boolean;
  reason?: string;
  lineCounts?: { left: number; right: number; cells: number; budget: number };
};

/**
 * Ordered LCS line diff — preserves duplicates and order.
 * Budget: refuses exhaustive matrix when (n+1)*(m+1) > MAX_DIFF_CELLS.
 * Degraded result is explicit — never presented as a successful detailed diff.
 */
export function diffMarkdown(a: string, b: string): DiffResult {
  const la = a.split("\n");
  const lb = b.split("\n");
  const n = la.length;
  const m = lb.length;
  const cells = (n + 1) * (m + 1);
  if (cells > MAX_DIFF_CELLS) {
    return {
      added: [],
      removed: [],
      unchangedCount: 0,
      ops: [],
      degraded: true,
      reason: "DIFF_BUDGET_EXCEEDED",
      lineCounts: { left: n, right: m, cells, budget: MAX_DIFF_CELLS },
    };
  }
  // LCS lengths — allocated only under budget
  const dp: number[][] = Array.from({ length: n + 1 }, () => Array(m + 1).fill(0));
  for (let i = n - 1; i >= 0; i--) {
    for (let j = m - 1; j >= 0; j--) {
      dp[i][j] =
        la[i] === lb[j] ? dp[i + 1][j + 1] + 1 : Math.max(dp[i + 1][j], dp[i][j + 1]);
    }
  }
  const ops: Array<{ op: "equal" | "add" | "remove"; line: string }> = [];
  const added: string[] = [];
  const removed: string[] = [];
  let unchangedCount = 0;
  let i = 0;
  let j = 0;
  while (i < n && j < m) {
    if (la[i] === lb[j]) {
      ops.push({ op: "equal", line: la[i] });
      unchangedCount++;
      i++;
      j++;
    } else if (dp[i + 1][j] >= dp[i][j + 1]) {
      ops.push({ op: "remove", line: la[i] });
      removed.push(la[i]);
      i++;
    } else {
      ops.push({ op: "add", line: lb[j] });
      added.push(lb[j]);
      j++;
    }
  }
  while (i < n) {
    ops.push({ op: "remove", line: la[i] });
    removed.push(la[i]);
    i++;
  }
  while (j < m) {
    ops.push({ op: "add", line: lb[j] });
    added.push(lb[j]);
    j++;
  }
  return {
    added,
    removed,
    unchangedCount,
    ops,
    degraded: false,
    lineCounts: { left: n, right: m, cells, budget: MAX_DIFF_CELLS },
  };
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
  if (diff.degraded) {
    return {
      status: "DEGRADED" as const,
      reason: diff.reason ?? "DIFF_BUDGET_EXCEEDED",
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
      note: "Comparaison détaillée impossible sous la limite de calcul — pas un diff exhaustif.",
    };
  }
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
