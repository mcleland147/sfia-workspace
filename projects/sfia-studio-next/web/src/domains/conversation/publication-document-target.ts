/**
 * Resolve an existing Studio document/revision for a publication mission.
 *
 * Precedence (POST-UAT convergence):
 *   1. Explicit Pilote / durable qual reference (documentHint, objectRef, revision)
 *   2. Same-turn D4 AVAILABLE — only if compatible with explicit ref
 *   3. UI documentFocus — only if compatible with explicit ref
 *   4. Sole available document (no explicit ref)
 *
 * Never invents ids. Never silently keeps focus A when Pilote asked for B.
 */
import { resolveReviseTarget, type DocumentListItem } from "./document-act";
import { getDocumentRevision, listDocumentRevisions } from "@/domains/document/service";

export type PublicationDocumentTarget =
  | {
      ok: true;
      documentId: string;
      revisionId: string | null;
      revisionNumber: number | null;
      requestedRevisionNumber: number | null;
      title: string;
      source:
        | "explicit"
        | "same_turn_d4"
        | "document_focus"
        | "hint"
        | "sole_document";
      /** True when an explicit ref overrode focus or same-turn. */
      overriddenImplicit: boolean;
    }
  | {
      ok: false;
      reason:
        | "NO_DOCUMENT"
        | "AMBIGUOUS"
        | "NOT_FOUND"
        | "NO_AVAILABLE_REVISION"
        | "EXPLICIT_FOCUS_CONFLICT"
        | "REVISION_MISMATCH"
        | "REVISION_NOT_FOUND"
        | "FORBIDDEN";
      candidates?: string[];
      detail?: string;
    };

export type SameTurnDocumentEffect = {
  status: string;
  documentId?: string | null;
  revisionId?: string | null;
  revisionNumber?: number | null;
  title?: string | null;
} | null;

export type PublicationDocumentFocus = {
  documentId: string;
  sourceRevisionId: string;
  sourceRevisionNumber?: number;
  observedHeadRevisionId?: string;
} | null;

function parseDocumentId(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const m = raw.match(/\b(doc_[a-z0-9-]+)\b/i);
  return m?.[1] ?? null;
}

function parseRevisionId(raw: string | null | undefined): string | null {
  if (!raw) return null;
  const m = raw.match(/\b(drev_[a-z0-9-]+)\b/i);
  return m?.[1] ?? null;
}

/** Parse « v2 », « révision 2 », « revision: 2 » from durable hint text. */
export function parseRevisionNumberHint(raw: string | null | undefined): number | null {
  if (!raw) return null;
  const m =
    raw.match(/\b(?:révision|revision)\s*[:=]?\s*(\d+)\b/i) ||
    raw.match(/\bv(?:ersion)?\s*[:=]?\s*(\d+)\b/i) ||
    raw.match(/\bv(\d+)\b/i);
  if (!m?.[1]) return null;
  const n = Number(m[1]);
  return Number.isFinite(n) && n > 0 ? Math.trunc(n) : null;
}

function titleNeedle(hint: string): string {
  return hint
    .replace(/\b(?:révision|revision)\s*[:=]?\s*\d+\b/gi, " ")
    .replace(/\bv(?:ersion)?\s*[:=]?\s*\d+\b/gi, " ")
    .replace(/\bv\d+\b/gi, " ")
    .replace(/\b(doc|drev)_[a-z0-9-]+\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
}

function findByTitle(
  docs: DocumentListItem[],
  hint: string,
): { ok: true; doc: DocumentListItem } | { ok: false; reason: "AMBIGUOUS" | "NOT_FOUND"; candidates?: string[] } {
  const available = docs.filter((d) => d.latestRevision?.status === "AVAILABLE");
  const needle = titleNeedle(hint).toLowerCase();
  if (!needle) return { ok: false, reason: "NOT_FOUND" };
  const matches = available.filter((d) => {
    const t = d.document.title.toLowerCase();
    return t === needle || t.includes(needle) || needle.includes(t);
  });
  if (matches.length === 1) return { ok: true, doc: matches[0]! };
  if (matches.length > 1) {
    return { ok: false, reason: "AMBIGUOUS", candidates: matches.map((d) => d.document.id) };
  }
  return { ok: false, reason: "NOT_FOUND" };
}

function hasExplicitDocumentSignal(input: {
  documentHint: string | null;
  objectRef: string | null;
}): boolean {
  if (parseDocumentId(input.objectRef) || parseDocumentId(input.documentHint)) return true;
  if (input.objectRef?.trim()) return true;
  const hint = input.documentHint?.trim();
  if (!hint) return false;
  // Pure revision token is not a document signal.
  if (/^(?:v|révision|revision)\s*[:=]?\s*\d+$/i.test(hint)) return false;
  return titleNeedle(hint).length > 0;
}

/**
 * Resolve one independent explicit field (objectRef or documentHint) to a document.
 * Does not fall back across fields — callers reconcile conflicts.
 */
function resolveOneExplicitField(
  field: string | null | undefined,
  docs: DocumentListItem[],
  available: DocumentListItem[],
  detailTag: string,
):
  | { kind: "none" }
  | { kind: "doc"; doc: DocumentListItem }
  | { kind: "fail"; target: PublicationDocumentTarget } {
  const raw = field?.trim() || "";
  if (!raw) return { kind: "none" };

  const docId = parseDocumentId(raw);
  if (docId) {
    const hit = available.find((d) => d.document.id === docId);
    if (!hit) {
      return {
        kind: "fail",
        target: { ok: false, reason: "NOT_FOUND", detail: `${detailTag}_DOCUMENT_ID` },
      };
    }
    return { kind: "doc", doc: hit };
  }

  // Revision-only field does not select a document by itself.
  if (parseRevisionId(raw) && !hasExplicitDocumentSignal({ documentHint: raw, objectRef: null })) {
    return { kind: "none" };
  }

  if (!hasExplicitDocumentSignal({ documentHint: raw, objectRef: null })) {
    return { kind: "none" };
  }

  const byTitle = findByTitle(docs, raw);
  if (!byTitle.ok) {
    return {
      kind: "fail",
      target: {
        ok: false,
        reason: byTitle.reason,
        candidates: "candidates" in byTitle ? byTitle.candidates : undefined,
        detail: `${detailTag}_TITLE`,
      },
    };
  }
  return { kind: "doc", doc: byTitle.doc };
}

/**
 * Synchronous identity resolution from list payload + hints.
 * Independent explicit refs (objectRef vs documentHint) are reconciled —
 * no arbitrary `||` between contradictory fields.
 * Revision by number may leave revisionId null until D4 confirm.
 */
export function resolvePublicationDocumentTarget(input: {
  sameTurnEffect: SameTurnDocumentEffect;
  docs: DocumentListItem[];
  documentHint: string | null;
  objectRef: string | null;
  focus: PublicationDocumentFocus;
  revisionNumberHint?: number | null;
}): PublicationDocumentTarget {
  const available = input.docs.filter((d) => d.latestRevision?.status === "AVAILABLE");

  const objectDocId = parseDocumentId(input.objectRef);
  const hintDocId = parseDocumentId(input.documentHint);
  if (objectDocId && hintDocId && objectDocId !== hintDocId) {
    return {
      ok: false,
      reason: "AMBIGUOUS",
      detail: "EXPLICIT_REF_CONFLICT_DOCUMENT_ID",
    };
  }

  const objectRevId = parseRevisionId(input.objectRef);
  const hintRevId = parseRevisionId(input.documentHint);
  if (objectRevId && hintRevId && objectRevId !== hintRevId) {
    return {
      ok: false,
      reason: "REVISION_MISMATCH",
      detail: "EXPLICIT_REF_CONFLICT_REVISION_ID",
    };
  }

  const objectRevNum = parseRevisionNumberHint(input.objectRef);
  const hintRevNum = parseRevisionNumberHint(input.documentHint);
  if (
    objectRevNum != null &&
    hintRevNum != null &&
    objectRevNum !== hintRevNum
  ) {
    return {
      ok: false,
      reason: "REVISION_MISMATCH",
      detail: "EXPLICIT_REF_CONFLICT_REVISION_NUMBER",
    };
  }

  const requestedRevisionNumber =
    input.revisionNumberHint ?? hintRevNum ?? objectRevNum;
  const explicitRevId = objectRevId || hintRevId;

  const fromObject = resolveOneExplicitField(
    input.objectRef,
    input.docs,
    available,
    "OBJECT_REF",
  );
  if (fromObject.kind === "fail") return fromObject.target;

  const fromHint = resolveOneExplicitField(
    input.documentHint,
    input.docs,
    available,
    "DOCUMENT_HINT",
  );
  if (fromHint.kind === "fail") return fromHint.target;

  if (
    fromObject.kind === "doc" &&
    fromHint.kind === "doc" &&
    fromObject.doc.document.id !== fromHint.doc.document.id
  ) {
    return {
      ok: false,
      reason: "AMBIGUOUS",
      detail: "EXPLICIT_REF_CONFLICT",
      candidates: [
        fromObject.doc.document.title,
        fromHint.doc.document.title,
      ],
    };
  }

  const explicitDoc =
    fromObject.kind === "doc"
      ? fromObject.doc
      : fromHint.kind === "doc"
        ? fromHint.doc
        : null;

  if (explicitDoc) {
    const focusConflict =
      input.focus?.documentId && input.focus.documentId !== explicitDoc.document.id;
    const sameTurnConflict =
      input.sameTurnEffect?.status === "AVAILABLE" &&
      input.sameTurnEffect.documentId &&
      input.sameTurnEffect.documentId !== explicitDoc.document.id;

    // Focus / same-turn never win against an explicit incompatible document.
    void focusConflict;
    void sameTurnConflict;

    let revisionId: string | null = explicitRevId;
    let revisionNumber: number | null = requestedRevisionNumber;

    if (
      !revisionId &&
      !requestedRevisionNumber &&
      input.focus?.documentId === explicitDoc.document.id &&
      input.focus.sourceRevisionId
    ) {
      revisionId = input.focus.sourceRevisionId;
      revisionNumber = input.focus.sourceRevisionNumber ?? null;
    }

    if (
      !revisionId &&
      !requestedRevisionNumber &&
      input.sameTurnEffect?.status === "AVAILABLE" &&
      input.sameTurnEffect.documentId === explicitDoc.document.id &&
      input.sameTurnEffect.revisionId
    ) {
      revisionId = input.sameTurnEffect.revisionId;
      revisionNumber = input.sameTurnEffect.revisionNumber ?? null;
    }

    if (!revisionId && !requestedRevisionNumber && explicitDoc.latestRevision) {
      revisionId = explicitDoc.latestRevision.id;
      revisionNumber = explicitDoc.latestRevision.revisionNumber;
    }

    return {
      ok: true,
      documentId: explicitDoc.document.id,
      revisionId,
      revisionNumber,
      requestedRevisionNumber,
      title: explicitDoc.document.title,
      source: "explicit",
      overriddenImplicit: Boolean(focusConflict || sameTurnConflict),
    };
  }

  // No explicit document — same-turn D4 CREATE/REVISE.
  const effect = input.sameTurnEffect;
  if (effect?.status === "AVAILABLE" && effect.documentId && effect.revisionId) {
    if (
      requestedRevisionNumber != null &&
      effect.revisionNumber != null &&
      effect.revisionNumber !== requestedRevisionNumber
    ) {
      // Same document identity unknown without list — try list match.
      const d = available.find((x) => x.document.id === effect.documentId);
      if (d) {
        return {
          ok: true,
          documentId: d.document.id,
          revisionId: null,
          revisionNumber: requestedRevisionNumber,
          requestedRevisionNumber,
          title: d.document.title,
          source: "explicit",
          overriddenImplicit: true,
        };
      }
      return {
        ok: false,
        reason: "REVISION_MISMATCH",
        detail: "SAME_TURN_VS_REQUESTED_REVISION",
      };
    }
    return {
      ok: true,
      documentId: effect.documentId,
      revisionId: effect.revisionId,
      revisionNumber: effect.revisionNumber ?? null,
      requestedRevisionNumber,
      title: effect.title?.trim() || effect.documentId,
      source: "same_turn_d4",
      overriddenImplicit: false,
    };
  }

  // Focus — only without conflicting explicit document (already handled).
  if (input.focus?.documentId && input.focus.sourceRevisionId) {
    const d = available.find((x) => x.document.id === input.focus!.documentId);
    if (!d) {
      return { ok: false, reason: "NOT_FOUND", detail: "FOCUS_DOCUMENT" };
    }
    if (requestedRevisionNumber != null) {
      const focusNum = input.focus.sourceRevisionNumber;
      if (focusNum != null && focusNum !== requestedRevisionNumber) {
        return {
          ok: true,
          documentId: d.document.id,
          revisionId: null,
          revisionNumber: requestedRevisionNumber,
          requestedRevisionNumber,
          title: d.document.title,
          source: "explicit",
          overriddenImplicit: true,
        };
      }
    }
    return {
      ok: true,
      documentId: d.document.id,
      revisionId: input.focus.sourceRevisionId,
      revisionNumber:
        input.focus.sourceRevisionNumber ?? d.latestRevision?.revisionNumber ?? null,
      requestedRevisionNumber,
      title: d.document.title,
      source: "document_focus",
      overriddenImplicit: false,
    };
  }

  // Soft hint without "explicit signal" already handled — use resolveReviseTarget for sole/hint.
  const hint = input.documentHint?.trim() || null;
  const resolved = resolveReviseTarget(input.docs, hint, null);
  if (!resolved.ok) {
    const reason =
      resolved.reason === "AMBIGUOUS" ||
      resolved.reason === "NO_AVAILABLE_REVISION" ||
      resolved.reason === "NOT_FOUND"
        ? resolved.reason
        : "NOT_FOUND";
    return {
      ok: false,
      reason,
      candidates: "candidates" in resolved ? resolved.candidates : undefined,
    };
  }

  if (requestedRevisionNumber != null && resolved.baseRevisionNumber !== requestedRevisionNumber) {
    return {
      ok: true,
      documentId: resolved.documentId,
      revisionId: null,
      revisionNumber: requestedRevisionNumber,
      requestedRevisionNumber,
      title: resolved.title,
      source: hint ? "hint" : "sole_document",
      overriddenImplicit: true,
    };
  }

  return {
    ok: true,
    documentId: resolved.documentId,
    revisionId: resolved.baseRevisionId,
    revisionNumber: resolved.baseRevisionNumber,
    requestedRevisionNumber,
    title: resolved.title,
    source: hint ? "hint" : "sole_document",
    overriddenImplicit: false,
  };
}

/**
 * D4 owner confirmation before D7 prepare.
 * Verifies pilot/project ownership, revision membership, AVAILABLE status.
 */
export async function confirmPublicationDocumentWithD4(input: {
  pilotId: string;
  preparationId: string;
  target: Extract<PublicationDocumentTarget, { ok: true }>;
}): Promise<PublicationDocumentTarget> {
  const { pilotId, preparationId, target } = input;

  if (target.revisionId) {
    const loaded = await getDocumentRevision(
      pilotId,
      preparationId,
      target.documentId,
      target.revisionId,
    );
    if (loaded.status === "FORBIDDEN") {
      return { ok: false, reason: "FORBIDDEN", detail: "DOCUMENT_OR_REVISION" };
    }
    if (loaded.status === "NOT_FOUND") {
      return { ok: false, reason: "REVISION_NOT_FOUND", detail: "REVISION_ID" };
    }
    if (loaded.status !== "AVAILABLE" || !("revision" in loaded) || !loaded.revision) {
      return {
        ok: false,
        reason: "NO_AVAILABLE_REVISION",
        detail: String(loaded.status),
      };
    }
    if (loaded.revision.documentId && loaded.revision.documentId !== target.documentId) {
      return { ok: false, reason: "REVISION_MISMATCH", detail: "REVISION_BELONGS_OTHER_DOC" };
    }
    // getDocumentRevision already scopes revisionId+documentId.
    if (
      target.requestedRevisionNumber != null &&
      loaded.revision.revisionNumber !== target.requestedRevisionNumber
    ) {
      return {
        ok: false,
        reason: "REVISION_MISMATCH",
        detail: `REQUESTED_V${target.requestedRevisionNumber}_GOT_V${loaded.revision.revisionNumber}`,
      };
    }
    return {
      ...target,
      revisionId: loaded.revision.id,
      revisionNumber: loaded.revision.revisionNumber,
      title: loaded.document?.title ?? target.title,
    };
  }

  if (target.requestedRevisionNumber != null || target.revisionNumber != null) {
    const want = target.requestedRevisionNumber ?? target.revisionNumber!;
    const listed = await listDocumentRevisions(pilotId, preparationId, target.documentId);
    if (listed.status === "FORBIDDEN") {
      return { ok: false, reason: "FORBIDDEN", detail: "DOCUMENT" };
    }
    const match = listed.revisions.find(
      (r) => r.revisionNumber === want && r.status === "AVAILABLE",
    );
    if (!match) {
      return {
        ok: false,
        reason: "REVISION_NOT_FOUND",
        detail: `V${want}`,
      };
    }
    return {
      ...target,
      revisionId: match.id,
      revisionNumber: match.revisionNumber,
      title: listed.document?.title ?? target.title,
    };
  }

  return {
    ok: false,
    reason: "NO_AVAILABLE_REVISION",
    detail: "MISSING_REVISION_IDENTITY",
  };
}
