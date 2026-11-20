import { and, asc, desc, eq, inArray, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { documentRevisions, documents } from "@/db/schema";
import { newId } from "@/lib/ids";
import { getPreparationContext } from "@/domains/preparation/service";
import {
  assertTurnFenceInTx,
  type TurnOwnershipFence,
} from "@/domains/conversation/turn-command";
import { createHash } from "node:crypto";

export type { TurnOwnershipFence };

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

/**
 * F-01 — sealed command identity carried in revision provenanceJson.
 * Legacy revisions without documentCommandBinding remain readable but not ML4C-command proofs.
 */
export type SealedEffectIdentity = {
  commandId: string;
  operationId: string;
  userMessageId: string;
  qualifiedIntentId: string;
  action: "CREATE" | "REVISE";
  source: unknown;
  preparationId: string;
  documentId: string | null;
  baseRevisionId: string | null;
  sectionHint: string | null;
  correlationKey: string;
  contentSha256: string;
  payloadSha256: string;
  title: string;
};

function stableJson(value: unknown): string {
  return JSON.stringify(value ?? null);
}

/**
 * P0-B — sealed-command identity: always recompute SHA from DB title+body bytes.
 * Provenance fingerprints are cross-checked; they never alone prove AVAILABLE.
 */
export function compareSealedEffectIdentity(
  storedProvenanceJson: string,
  storedContentMarkdown: string,
  storedDocumentTitle: string,
  expected: SealedEffectIdentity,
): { ok: true; storedContentSha256: string } | { ok: false; reason: string } {
  let prov: Record<string, unknown>;
  try {
    prov = JSON.parse(storedProvenanceJson) as Record<string, unknown>;
  } catch {
    return { ok: false, reason: "COMMAND_PROVENANCE_UNVERIFIABLE" };
  }
  if (prov.documentCommandBinding !== true) {
    return { ok: false, reason: "COMMAND_PROVENANCE_UNVERIFIABLE" };
  }

  // C = SHA of bytes actually read from PostgreSQL (title + body).
  const recalculated = contentFingerprint(storedDocumentTitle, storedContentMarkdown);
  // C must equal binding contentSha256 (F).
  if (recalculated !== expected.contentSha256) {
    return { ok: false, reason: "CORRELATION_PAYLOAD_MISMATCH" };
  }
  // C must equal provenance contentSha256 (E) when present.
  if (typeof prov.contentSha256 === "string" && prov.contentSha256 !== recalculated) {
    return { ok: false, reason: "CORRELATION_PAYLOAD_MISMATCH" };
  }
  if (typeof prov.contentSha256 !== "string" || !prov.contentSha256) {
    return { ok: false, reason: "COMMAND_PROVENANCE_UNVERIFIABLE" };
  }
  // If D (contentFingerprint) present, D must equal C.
  if (
    typeof prov.contentFingerprint === "string" &&
    prov.contentFingerprint.length > 0 &&
    prov.contentFingerprint !== recalculated
  ) {
    return { ok: false, reason: "CORRELATION_PAYLOAD_MISMATCH" };
  }
  // Title in DB must match expected sealed title.
  if (storedDocumentTitle !== expected.title) {
    return { ok: false, reason: "CORRELATION_PAYLOAD_MISMATCH" };
  }

  const storedPayload =
    typeof prov.payloadSha256 === "string" ? prov.payloadSha256 : null;
  if (!storedPayload || storedPayload !== expected.payloadSha256) {
    return { ok: false, reason: "CORRELATION_PAYLOAD_MISMATCH" };
  }
  // Title in provenance is mandatory for sealed commands — DB title does not substitute.
  if (typeof prov.title !== "string" || !prov.title) {
    return { ok: false, reason: "COMMAND_PROVENANCE_UNVERIFIABLE" };
  }
  // P0-B: nullable sealed fields must be explicitly present (absent ≠ null).
  for (const key of ["documentId", "baseRevisionId", "sectionHint"] as const) {
    if (!Object.prototype.hasOwnProperty.call(prov, key)) {
      return { ok: false, reason: "COMMAND_PROVENANCE_UNVERIFIABLE" };
    }
  }
  const checks: Array<[string, unknown, unknown]> = [
    ["commandId", prov.commandId, expected.commandId],
    ["operationId", prov.operationId, expected.operationId],
    ["userMessageId", prov.userMessageId, expected.userMessageId],
    ["qualifiedIntentId", prov.qualifiedIntentId, expected.qualifiedIntentId],
    ["action", prov.action, expected.action],
    ["preparationId", prov.preparationId, expected.preparationId],
    ["documentId", prov.documentId, expected.documentId],
    ["baseRevisionId", prov.baseRevisionId, expected.baseRevisionId],
    ["sectionHint", prov.sectionHint, expected.sectionHint],
    ["correlationKey", prov.correlationKey, expected.correlationKey],
    ["contentSha256", prov.contentSha256, expected.contentSha256],
    ["title", prov.title, expected.title],
  ];
  for (const [, got, want] of checks) {
    if (stableJson(got) !== stableJson(want)) {
      return { ok: false, reason: "CORRELATION_PAYLOAD_MISMATCH" };
    }
  }
  if (stableJson(prov.source) !== stableJson(expected.source)) {
    return { ok: false, reason: "CORRELATION_PAYLOAD_MISMATCH" };
  }
  return { ok: true, storedContentSha256: recalculated };
}

export function buildSealedProvenance(
  identity: SealedEffectIdentity,
  extra?: Record<string, unknown>,
): Record<string, unknown> {
  return {
    documentCommandBinding: true,
    commandId: identity.commandId,
    operationId: identity.operationId,
    userMessageId: identity.userMessageId,
    qualifiedIntentId: identity.qualifiedIntentId,
    action: identity.action,
    source: identity.source,
    preparationId: identity.preparationId,
    documentId: identity.documentId,
    baseRevisionId: identity.baseRevisionId,
    sectionHint: identity.sectionHint,
    correlationKey: identity.correlationKey,
    contentSha256: identity.contentSha256,
    payloadSha256: identity.payloadSha256,
    title: identity.title,
    ...(extra ?? {}),
  };
}

const SHA256_HEX_RE = /^[0-9a-f]{64}$/;

/** Sealed-command required keys — presence mandatory; null only where the contract allows. */
const SEALED_REQUIRED_KEYS = [
  "documentCommandBinding",
  "commandId",
  "operationId",
  "userMessageId",
  "qualifiedIntentId",
  "action",
  "source",
  "preparationId",
  "documentId",
  "baseRevisionId",
  "sectionHint",
  "correlationKey",
  "title",
  "contentSha256",
  "payloadSha256",
] as const;

export type ProvenanceIdentityResolution =
  | { kind: "HISTORICAL" }
  | { kind: "SEALED_VALID"; identity: SealedEffectIdentity }
  | { kind: "SEALED_INVALID"; reason: "COMMAND_PROVENANCE_UNVERIFIABLE" };

function nonEmptyString(value: unknown): value is string {
  return typeof value === "string" && value.length > 0;
}

function hasOwn(obj: object, key: string): boolean {
  return Object.prototype.hasOwnProperty.call(obj, key);
}

function isValidSealedSource(source: unknown): boolean {
  if (!source || typeof source !== "object") return false;
  const s = source as Record<string, unknown>;
  if (s.kind === "ASSISTANT_MESSAGE") return nonEmptyString(s.assistantMessageId);
  if (s.kind === "SAME_TURN_SNAPSHOT") return nonEmptyString(s.commandId);
  return false;
}

/**
 * Distinctive sealed markers — not correlationKey/sectionHint alone
 * (those exist on historical documents).
 */
function hasDistinctiveSealedMarkers(provenance: Record<string, unknown>): boolean {
  if (provenance.documentCommandBinding === true) return true;
  if (provenance.documentCommandBinding === false) {
    // Explicit false + leftover sealed identity fields → not a clean historical.
    return (
      hasOwn(provenance, "qualifiedIntentId") ||
      hasOwn(provenance, "payloadSha256") ||
      hasOwn(provenance, "commandId")
    );
  }
  // Marker absent: sealed remnants must not silently become HISTORICAL.
  return hasOwn(provenance, "qualifiedIntentId") || hasOwn(provenance, "payloadSha256");
}

function parseProvenanceJson(raw: string): Record<string, unknown> | null {
  try {
    const parsed = JSON.parse(raw) as unknown;
    if (!parsed || typeof parsed !== "object" || Array.isArray(parsed)) return null;
    return parsed as Record<string, unknown>;
  } catch {
    return null;
  }
}

/**
 * Classify request/stored provenance.
 * SEALED_INVALID never falls through to historical fingerprint reconcile.
 * Absent/false seal marker + distinctive sealed fields → SEALED_INVALID (no HISTORICAL downgrade).
 */
export function resolveProvenanceIdentity(
  provenance: Record<string, unknown> | undefined | null,
): ProvenanceIdentityResolution {
  const invalid = (): ProvenanceIdentityResolution => ({
    kind: "SEALED_INVALID",
    reason: "COMMAND_PROVENANCE_UNVERIFIABLE",
  });

  if (!provenance) return { kind: "HISTORICAL" };

  const looksSealed = hasDistinctiveSealedMarkers(provenance);
  if (!looksSealed) return { kind: "HISTORICAL" };

  // Marker must be exactly true for VALID; otherwise remnants are INVALID.
  if (provenance.documentCommandBinding !== true) return invalid();

  for (const key of SEALED_REQUIRED_KEYS) {
    if (!hasOwn(provenance, key)) return invalid();
  }

  if (
    !nonEmptyString(provenance.commandId) ||
    !nonEmptyString(provenance.operationId) ||
    !nonEmptyString(provenance.userMessageId) ||
    !nonEmptyString(provenance.qualifiedIntentId) ||
    (provenance.action !== "CREATE" && provenance.action !== "REVISE") ||
    !nonEmptyString(provenance.preparationId) ||
    !nonEmptyString(provenance.correlationKey) ||
    !nonEmptyString(provenance.title) ||
    typeof provenance.contentSha256 !== "string" ||
    !SHA256_HEX_RE.test(provenance.contentSha256) ||
    typeof provenance.payloadSha256 !== "string" ||
    !SHA256_HEX_RE.test(provenance.payloadSha256) ||
    !isValidSealedSource(provenance.source)
  ) {
    return invalid();
  }

  // P0-B: nullable fields must be present; CREATE uses explicit null.
  if (provenance.action === "CREATE") {
    if (provenance.documentId !== null || provenance.baseRevisionId !== null) return invalid();
  } else {
    if (!nonEmptyString(provenance.documentId) || !nonEmptyString(provenance.baseRevisionId)) {
      return invalid();
    }
  }
  if (
    provenance.sectionHint !== null &&
    !nonEmptyString(provenance.sectionHint)
  ) {
    return invalid();
  }

  return {
    kind: "SEALED_VALID",
    identity: {
      commandId: provenance.commandId,
      operationId: provenance.operationId,
      userMessageId: provenance.userMessageId,
      qualifiedIntentId: provenance.qualifiedIntentId,
      action: provenance.action,
      source: provenance.source,
      preparationId: provenance.preparationId,
      documentId: provenance.documentId as string | null,
      baseRevisionId: provenance.baseRevisionId as string | null,
      sectionHint: provenance.sectionHint as string | null,
      correlationKey: provenance.correlationKey,
      contentSha256: provenance.contentSha256,
      payloadSha256: provenance.payloadSha256,
      title: provenance.title,
    },
  };
}

/**
 * Reconcile using BOTH request provenance and stored revision provenance.
 * Never downgrade a sealed stored revision to historical fingerprint compare.
 */
function reconcileWithProvenanceResolution(args: {
  prior: {
    id: string;
    revisionNumber: number;
    status: string;
    contentMarkdown: string;
    provenanceJson: string;
  };
  documentId: string;
  documentTitle: string;
  expectedFp: string;
  provenance?: Record<string, unknown> | null;
}): ReturnType<typeof reconcilePriorRevision> {
  const unverifiable = {
    status: "UNKNOWN" as const,
    reason: "COMMAND_PROVENANCE_UNVERIFIABLE" as const,
    documentId: args.documentId,
    revisionId: args.prior.id,
    revisionNumber: args.prior.revisionNumber,
  };

  const requestRes = resolveProvenanceIdentity(args.provenance ?? null);
  // Stored provenance must be a valid JSON object before any HISTORICAL/SEALED path.
  // parseProvenanceJson(null) → HISTORICAL would falsely authorize fingerprint reconcile.
  const storedParsed = parseProvenanceJson(args.prior.provenanceJson);
  if (storedParsed === null) {
    return unverifiable;
  }
  const storedRes = resolveProvenanceIdentity(storedParsed);

  if (requestRes.kind === "SEALED_INVALID" || storedRes.kind === "SEALED_INVALID") {
    return unverifiable;
  }
  // HISTORICAL request against sealed stored revision → refuse downgrade.
  if (requestRes.kind === "HISTORICAL" && storedRes.kind !== "HISTORICAL") {
    return unverifiable;
  }
  // Sealed request against historical stored → sealed compare would fail; refuse.
  if (requestRes.kind === "SEALED_VALID" && storedRes.kind === "HISTORICAL") {
    return unverifiable;
  }

  if (requestRes.kind === "SEALED_VALID" && storedRes.kind === "SEALED_VALID") {
    return reconcilePriorRevision({
      prior: args.prior,
      documentId: args.documentId,
      documentTitle: args.documentTitle,
      expectedFp: args.expectedFp,
      expectedIdentity: requestRes.identity,
    });
  }

  // Both HISTORICAL — legacy fingerprint path.
  return reconcilePriorRevision({
    prior: args.prior,
    documentId: args.documentId,
    documentTitle: args.documentTitle,
    expectedFp: args.expectedFp,
    expectedIdentity: null,
  });
}

/** Same fingerprint/identity rule for every reconcile path (nominal, race, catch, TX). */
function reconcilePriorRevision(args: {
  prior: { id: string; revisionNumber: number; status: string; contentMarkdown: string; provenanceJson: string };
  documentId: string;
  documentTitle: string;
  expectedFp: string;
  expectedIdentity?: SealedEffectIdentity | null;
}): ReconcileOk | ReconcileFailedPrior | ReconcileConflict | {
  status: "UNKNOWN";
  reason: string;
  documentId: string;
  revisionId: string;
  revisionNumber: number;
} {
  if (args.expectedIdentity) {
    const cmp = compareSealedEffectIdentity(
      args.prior.provenanceJson,
      args.prior.contentMarkdown,
      args.documentTitle,
      args.expectedIdentity,
    );
    if (!cmp.ok) {
      if (cmp.reason === "COMMAND_PROVENANCE_UNVERIFIABLE") {
        return {
          status: "UNKNOWN",
          reason: cmp.reason,
          documentId: args.documentId,
          revisionId: args.prior.id,
          revisionNumber: args.prior.revisionNumber,
        };
      }
      return {
        status: "CONFLICT",
        reason: "CORRELATION_PAYLOAD_MISMATCH",
        documentId: args.documentId,
        revisionId: args.prior.id,
        revisionNumber: args.prior.revisionNumber,
      };
    }
  } else {
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
    /** When set, document write aborts unless turn still owned (RUNNING + token). */
    turnFence?: TurnOwnershipFence;
  },
) {
  if (contentMarkdown.length > MAX_DOC_CHARS) {
    return { status: "FAILED" as const, reason: "content too large" };
  }
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.preparation) throw Object.assign(new Error("NOT_FOUND"), { code: "NOT_FOUND" });

  const titleFinal = title || "Document du sas";
  const fp = contentFingerprint(titleFinal, contentMarkdown);

  // P0: sealed-invalid input refuses before any D4 mutation (no historical fallback).
  if (opts?.provenance) {
    const early = resolveProvenanceIdentity(opts.provenance);
    if (early.kind === "SEALED_INVALID") {
      return { status: "FAILED" as const, reason: early.reason };
    }
  }

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
        return reconcileWithProvenanceResolution({
          prior: priorRev,
          documentId: existingDoc.id,
          documentTitle: existingDoc.title,
          expectedFp: fp,
          provenance: opts?.provenance,
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

  // Existing-document path: ownership check before TX.
  if (docId) {
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
    if (opts?.correlationKey) {
      const prior = await findRevisionByCorrelation(docId, opts.correlationKey);
      if (prior) {
        return reconcileWithProvenanceResolution({
          prior,
          documentId: docId,
          documentTitle: ownedTitle,
          expectedFp: fp,
          provenance: opts?.provenance,
        });
      }
    }
  }

  try {
    return await db.transaction(async (tx) => {
      // O-05: ownership fence BEFORE any document/revision mutation.
      if (opts?.turnFence) {
        const fenceOwned = await assertTurnFenceInTx(tx, opts.turnFence);
        if (!fenceOwned) {
          return {
            status: "FAILED" as const,
            reason: "TURN_OWNERSHIP_LOST",
            rolledBack: true as const,
          };
        }
      }

      // CREATE: insert documents + first revision in the SAME transaction (no orphan row).
      if (!docId) {
        docId = newId("doc");
        try {
          await tx.insert(documents).values({
            id: docId,
            preparationId,
            projectId: ctx.project?.id ?? null,
            ownerPilotId: pilotId,
            title: titleFinal,
            creationCorrelationKey: opts?.correlationKey ?? null,
          });
        } catch (e) {
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
                return reconcileWithProvenanceResolution({
                  prior: priorRev,
                  documentId: raced.id,
                  documentTitle: raced.title,
                  expectedFp: fp,
                  provenance: opts?.provenance,
                });
              }
              return {
                status: "UNKNOWN" as const,
                reason: "CREATION_IN_FLIGHT",
                documentId: raced.id,
              };
            }
          }
          return {
            status: "FAILED" as const,
            reason: e instanceof Error ? e.message : "document create failed",
          };
        }
        ownedTitle = titleFinal;
      } else {
        await tx.execute(
          sql`select id from documents where id = ${docId} and owner_pilot_id = ${pilotId} for update`,
        );
      }

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
          return reconcileWithProvenanceResolution({
            prior,
            documentId: docId!,
            documentTitle: ownedTitle,
            expectedFp: fp,
            provenance: opts?.provenance,
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
      const racedDoc =
        (docId
          ? { id: docId, title: ownedTitle }
          : await findByCreationCorrelation(pilotId, preparationId, opts.correlationKey)) ?? null;
      if (racedDoc) {
        const prior =
          (await findRevisionByCorrelation(racedDoc.id, opts.correlationKey)) ??
          (await waitForRevisionByCorrelation(racedDoc.id, opts.correlationKey));
        if (prior) {
          return reconcileWithProvenanceResolution({
            prior,
            documentId: racedDoc.id,
            documentTitle: "title" in racedDoc ? racedDoc.title : ownedTitle,
            expectedFp: fp,
            provenance: opts?.provenance,
          });
        }
        return {
          status: "UNKNOWN" as const,
          reason: "CREATION_IN_FLIGHT",
          documentId: racedDoc.id,
        };
      }
    }
    return {
      status: "FAILED" as const,
      reason: e instanceof Error ? e.message : "persist failed",
      documentId: docId,
    };
  }
}

/**
 * Targeted non-destructive revision with atomic concurrency control.
 * Document row FOR UPDATE serializes successors.
 *
 * Protocol:
 * - Legacy (baseRevisionId only): source must equal current AVAILABLE head (BASE_STALE otherwise).
 * - Historical-capable: sourceRevisionId (content lineage) + observedHeadRevisionId (concurrency)
 *   + confirmedHistoricalSource when source ≠ head. New revision number is always monotone
 *   above the max assigned AVAILABLE head — never renumbered from the source.
 */
export async function reviseDocument(
  pilotId: string,
  preparationId: string,
  input: {
    documentId: string;
    /** Legacy alias: when alone, means both source and observed head. */
    baseRevisionId?: string;
    /** Exact revision chosen as drafting source (may be historical). */
    sourceRevisionId?: string;
    /** Head AVAILABLE revision observed at confirmation time. */
    observedHeadRevisionId?: string;
    /** Required when sourceRevisionId ≠ actual head at commit. */
    confirmedHistoricalSource?: boolean;
    contentMarkdown: string;
    correlationKey: string;
    scope?: string;
    sectionHint?: string;
    provenance?: Record<string, unknown>;
    injectFailureAfterLock?: boolean;
    /** Symmetric with CREATE — abort unless turn still owned. */
    turnFence?: TurnOwnershipFence;
    /** Title used for fingerprint reconcile on replay (defaults to owned document title). */
    expectedTitle?: string;
    expectedContentSha256?: string;
  },
) {
  if (input.contentMarkdown.length > MAX_DOC_CHARS) {
    return { status: "FAILED" as const, reason: "content too large" };
  }

  const sourceRevisionId = input.sourceRevisionId ?? input.baseRevisionId;
  if (!sourceRevisionId) {
    return { status: "FAILED" as const, reason: "SOURCE_REVISION_REQUIRED" };
  }

  const historicalProtocol =
    Boolean(input.sourceRevisionId) ||
    Boolean(input.observedHeadRevisionId) ||
    input.confirmedHistoricalSource === true;

  const observedHeadRevisionId = historicalProtocol
    ? input.observedHeadRevisionId ?? null
    : sourceRevisionId;

  if (historicalProtocol && !observedHeadRevisionId) {
    return { status: "FAILED" as const, reason: "OBSERVED_HEAD_REQUIRED" };
  }

  // P0: sealed-invalid REVISE provenance refuses before mutation.
  if (input.provenance) {
    const early = resolveProvenanceIdentity(input.provenance);
    if (early.kind === "SEALED_INVALID") {
      return { status: "FAILED" as const, reason: early.reason };
    }
  }

  try {
    return await db.transaction(async (tx) => {
      // Lock order: turn command / ownership → document → mutation.
      if (input.turnFence) {
        const fenceOwned = await assertTurnFenceInTx(tx, input.turnFence);
        if (!fenceOwned) {
          return {
            status: "FAILED" as const,
            reason: "TURN_OWNERSHIP_LOST",
            rolledBack: true as const,
          };
        }
      }

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

      const expectedFp =
        input.expectedContentSha256 ??
        contentFingerprint(input.expectedTitle ?? owned.title, input.contentMarkdown);

      // Idempotent correlation inside the lock — fingerprint must match.
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
        return reconcileWithProvenanceResolution({
          prior,
          documentId: input.documentId,
          documentTitle: input.expectedTitle ?? owned.title,
          expectedFp,
          provenance: input.provenance,
        });
      }

      const source = (
        await tx
          .select()
          .from(documentRevisions)
          .where(
            and(
              eq(documentRevisions.id, sourceRevisionId),
              eq(documentRevisions.documentId, input.documentId),
            ),
          )
          .limit(1)
      )[0];
      if (!source) return { status: "FAILED" as const, reason: "BASE_NOT_FOUND" };
      if (source.status !== "AVAILABLE") {
        return {
          status: "FAILED" as const,
          reason: "BASE_NOT_AVAILABLE",
          baseStatus: source.status,
        };
      }

      // Refuse silent commit while a non-terminal revision exists.
      const nonTerminal = (
        await tx
          .select()
          .from(documentRevisions)
          .where(
            and(
              eq(documentRevisions.documentId, input.documentId),
              inArray(documentRevisions.status, ["SAVING", "UNKNOWN"]),
            ),
          )
          .limit(1)
      )[0];
      if (nonTerminal) {
        return {
          status: "FAILED" as const,
          reason: "HEAD_UNCERTAIN",
          documentId: input.documentId,
          actualLatestRevisionId: nonTerminal.id,
          actualLatestRevisionNumber: nonTerminal.revisionNumber,
          baseStatus: nonTerminal.status,
        };
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

      if (!latest) {
        return {
          status: "CONFLICT" as const,
          reason: "BASE_STALE",
          documentId: input.documentId,
          expectedBaseRevisionId: observedHeadRevisionId ?? sourceRevisionId,
          actualLatestRevisionId: null,
          actualLatestRevisionNumber: null,
        };
      }

      const expectedHeadId = observedHeadRevisionId ?? sourceRevisionId;
      if (latest.id !== expectedHeadId) {
        return {
          status: "CONFLICT" as const,
          reason: "BASE_STALE",
          documentId: input.documentId,
          expectedBaseRevisionId: expectedHeadId,
          actualLatestRevisionId: latest.id,
          actualLatestRevisionNumber: latest.revisionNumber,
        };
      }

      const sourceIsHistorical = source.id !== latest.id;
      if (sourceIsHistorical && input.confirmedHistoricalSource !== true) {
        return {
          status: "FAILED" as const,
          reason: "HISTORICAL_CONFIRMATION_REQUIRED",
          documentId: input.documentId,
          expectedBaseRevisionId: source.id,
          actualLatestRevisionId: latest.id,
          actualLatestRevisionNumber: latest.revisionNumber,
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
        baseRevisionId: source.id,
        correlationKey: input.correlationKey,
        provenanceJson: JSON.stringify({
          ...(input.provenance ?? {}),
          sectionHint: input.sectionHint ?? null,
          contentFingerprint: expectedFp,
          sourceRevisionId: source.id,
          observedHeadRevisionId: latest.id,
          confirmedHistoricalSource: sourceIsHistorical
            ? true
            : input.confirmedHistoricalSource === true,
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
        baseRevisionId: source.id,
        sourceRevisionId: source.id,
        observedHeadRevisionId: latest.id,
        confirmedHistoricalSource: sourceIsHistorical,
      };
    });
  } catch (e) {
    // Unique (documentId, revisionNumber) race → treat as conflict if head moved
    const msg = e instanceof Error ? e.message : "persist failed";
    if (/unique|duplicate/i.test(msg)) {
      const latest = await latestRevisionFor(input.documentId);
      return {
        status: "CONFLICT" as const,
        reason: "BASE_STALE",
        documentId: input.documentId,
        expectedBaseRevisionId: observedHeadRevisionId ?? sourceRevisionId,
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
  // Targeted lookup — do not load every revision for the document.
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
  if (!owned) return { status: "FORBIDDEN" as const };
  const rev = (
    await db
      .select()
      .from(documentRevisions)
      .where(
        and(eq(documentRevisions.id, revisionId), eq(documentRevisions.documentId, documentId)),
      )
      .limit(1)
  )[0];
  if (!rev) return { status: "NOT_FOUND" as const };
  // Content authority follows revision.status — never redefine SAVING/UNKNOWN as AVAILABLE.
  if (rev.status !== "AVAILABLE") {
    return {
      status: rev.status as "FAILED" | "SAVING" | "UNKNOWN",
      document: owned,
      revision: {
        ...rev,
        // Refuse content body for non-AVAILABLE — callers must not treat as source.
        contentMarkdown: "",
      },
      reason: "REVISION_NOT_AVAILABLE",
    };
  }
  return { status: "AVAILABLE" as const, document: owned, revision: rev };
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

/**
 * C-01 / F-01 — pure D4 truth lookup by sealed correlation. Never inserts/updates/deletes.
 * No latest-revision fallback; full sealed identity comparison required for AVAILABLE.
 */
export type DocumentCorrelationTruth = {
  verdict: "AVAILABLE" | "UNKNOWN" | "CONFLICT" | "NOT_EXECUTED";
  documentId?: string;
  revisionId?: string;
  revisionNumber?: number;
  reason?: string;
  contentSha256?: string;
};

export async function lookupDocumentCorrelationTruth(input: {
  pilotId: string;
  preparationId: string;
  action: "CREATE" | "REVISE";
  correlationKey: string;
  title: string;
  contentMarkdown: string;
  contentSha256: string;
  payloadSha256?: string | null;
  documentId?: string | null;
  baseRevisionId?: string | null;
  /** Full sealed identity — required for AVAILABLE proof of an ML4C document command. */
  expectedIdentity?: SealedEffectIdentity | null;
}): Promise<DocumentCorrelationTruth> {
  // F-01: AVAILABLE only with a complete sealed identity from the binding.
  // Partial payloadSha256 alone never proves command identity.
  const fullIdentity =
    input.expectedIdentity &&
    input.expectedIdentity.commandId &&
    input.expectedIdentity.payloadSha256
      ? input.expectedIdentity
      : null;

  if (input.action === "CREATE") {
    const doc = await findByCreationCorrelation(
      input.pilotId,
      input.preparationId,
      input.correlationKey,
    );
    if (!doc) {
      return { verdict: "UNKNOWN", reason: "CREATE_CORRELATION_ABSENT" };
    }
    if (doc.ownerPilotId !== input.pilotId || doc.preparationId !== input.preparationId) {
      return { verdict: "NOT_EXECUTED", reason: "SOURCE_DENIED" };
    }
    // F-01: never use latestRevisionFor as CREATE correlation proof.
    const rev = await findRevisionByCorrelation(doc.id, input.correlationKey);
    if (!rev) {
      return {
        verdict: "UNKNOWN",
        reason: "CREATE_REVISION_ABSENT",
        documentId: doc.id,
      };
    }
    if (!fullIdentity) {
      return {
        verdict: "UNKNOWN",
        reason: "COMMAND_PROVENANCE_UNVERIFIABLE",
        documentId: doc.id,
        revisionId: rev.id,
        revisionNumber: rev.revisionNumber,
      };
    }
    const cmp = compareSealedEffectIdentity(
      rev.provenanceJson,
      rev.contentMarkdown,
      doc.title,
      fullIdentity,
    );
    if (!cmp.ok) {
      return {
        verdict: cmp.reason === "COMMAND_PROVENANCE_UNVERIFIABLE" ? "UNKNOWN" : "CONFLICT",
        reason: cmp.reason,
        documentId: doc.id,
        revisionId: rev.id,
        revisionNumber: rev.revisionNumber,
      };
    }
    if (rev.status === "AVAILABLE") {
      return {
        verdict: "AVAILABLE",
        documentId: doc.id,
        revisionId: rev.id,
        revisionNumber: rev.revisionNumber,
        contentSha256: cmp.storedContentSha256,
      };
    }
    return {
      verdict: "UNKNOWN",
      reason: `CREATE_REVISION_${rev.status}`,
      documentId: doc.id,
      revisionId: rev.id,
      revisionNumber: rev.revisionNumber,
      contentSha256: cmp.storedContentSha256,
    };
  }

  if (!input.documentId) {
    return { verdict: "NOT_EXECUTED", reason: "REVISE_TARGET_INCOMPLETE" };
  }
  const owned = (
    await db
      .select()
      .from(documents)
      .where(
        and(
          eq(documents.id, input.documentId),
          eq(documents.ownerPilotId, input.pilotId),
          eq(documents.preparationId, input.preparationId),
        ),
      )
      .limit(1)
  )[0];
  if (!owned) {
    return { verdict: "NOT_EXECUTED", reason: "SOURCE_DENIED" };
  }
  const rev = await findRevisionByCorrelation(input.documentId, input.correlationKey);
  if (!rev) {
    return {
      verdict: "UNKNOWN",
      reason: "REVISE_CORRELATION_ABSENT",
      documentId: input.documentId,
    };
  }
  if (!fullIdentity) {
    return {
      verdict: "UNKNOWN",
      reason: "COMMAND_PROVENANCE_UNVERIFIABLE",
      documentId: input.documentId,
      revisionId: rev.id,
      revisionNumber: rev.revisionNumber,
    };
  }
  const cmp = compareSealedEffectIdentity(
    rev.provenanceJson,
    rev.contentMarkdown,
    owned.title,
    fullIdentity,
  );
  if (!cmp.ok) {
    return {
      verdict: cmp.reason === "COMMAND_PROVENANCE_UNVERIFIABLE" ? "UNKNOWN" : "CONFLICT",
      reason: cmp.reason,
      documentId: input.documentId,
      revisionId: rev.id,
      revisionNumber: rev.revisionNumber,
    };
  }
  if (rev.status === "AVAILABLE") {
    return {
      verdict: "AVAILABLE",
      documentId: input.documentId,
      revisionId: rev.id,
      revisionNumber: rev.revisionNumber,
      contentSha256: cmp.storedContentSha256,
    };
  }
  return {
    verdict: "UNKNOWN",
    reason: `REVISE_REVISION_${rev.status}`,
    documentId: input.documentId,
    revisionId: rev.id,
    revisionNumber: rev.revisionNumber,
    contentSha256: cmp.storedContentSha256,
  };
}
