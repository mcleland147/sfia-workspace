/**
 * F1/F2 — sealed document proposal candidates and historical-source authorizations.
 * Stored additively on conversation_turn_commands.result_json (no migration).
 * Client may select by id+hash; never supply authoritative markdown.
 */
import { and, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands, conversations } from "@/db/schema";
import { newId } from "@/lib/ids";
import { contentSha256 } from "@/domains/conversation/document-command";
import { turnClock } from "@/domains/conversation/turn-command";
import {
  SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";

export type PendingDocumentCandidate = {
  id: string;
  turnCommandId: string;
  preparationId: string;
  pilotId: string;
  documentId: string;
  sourceRevisionId: string;
  observedHeadRevisionId: string;
  title: string;
  contentMarkdown: string;
  contentSha256: string;
  historicalAuthorizationId?: string | null;
  status: "PENDING" | "CONSUMED" | "SUPERSEDED";
  createdAt: string;
};

export type HistoricalSourceAuthorization = {
  id: string;
  turnCommandId: string;
  preparationId: string;
  pilotId: string;
  documentId: string;
  sourceRevisionId: string;
  observedHeadRevisionId: string;
  choice: "USE_SOURCE" | "USE_HEAD";
  createdAt: string;
};

/** Exact transmit texts for F2/F4 historical base choices (never lexical freeform). */
export const DOC_CONFIRM_HISTORICAL_SOURCE = "DOC_CONFIRM_HISTORICAL_SOURCE";
export const DOC_USE_CURRENT_HEAD = "DOC_USE_CURRENT_HEAD";
export const DOC_CONSERVE_PROPOSAL =
  "Conserver comme nouvelle version la proposition documentaire préparée.";

export function isHistoricalSourceChoiceTransmit(text: string): "USE_SOURCE" | "USE_HEAD" | null {
  const t = text.replace(/\s+/g, " ").trim();
  if (t === DOC_CONFIRM_HISTORICAL_SOURCE) return "USE_SOURCE";
  if (t === DOC_USE_CURRENT_HEAD) return "USE_HEAD";
  return null;
}

export function isConserveProposalTransmit(text: string): boolean {
  return text.replace(/\s+/g, " ").trim() === DOC_CONSERVE_PROPOSAL;
}

/**
 * D — conserve-only qualification: REVISE intent for the focused document
 * without a new provider investigation. Body authority remains the sealed pdoc.
 */
export function buildConserveOnlyQualification(input: {
  documentId: string;
  documentTitle?: string | null;
}): NoraTurnQualification {
  return {
    schemaVersion: SEMANTIC_QUALIFICATION_SCHEMA_VERSION,
    status: "QUALIFIED",
    goal: "Conserver la proposition documentaire déjà inspectée",
    projectIntention: "",
    desiredOutcome: "Nouvelle révision documentaire persistée",
    initialScope: "",
    proposedProjectName: "",
    intents: [
      {
        id: "conserve-revise-1",
        mode: "REQUEST_EFFECT",
        capabilityId: "d4.revise_document",
        summary: "Conserver la proposition documentaire préparée",
        dependsOn: [],
        constraints: [],
        sourceEvidence: [],
        parameters: {
          documentHint: input.documentTitle?.trim() || input.documentId,
        },
      },
    ],
    clarifications: [],
    replyDraft:
      "Je conserve la proposition documentaire que vous avez examinée, sans la régénérer.",
  };
}

/**
 * P0-B — bind historical authorization to the sealed candidate.
 * Source-courante proposals pass with null hauth on both sides.
 */
export function assertHistoricalAuthBoundToCandidate(input: {
  sourceIsHistorical: boolean;
  candidate: Pick<
    PendingDocumentCandidate,
    | "historicalAuthorizationId"
    | "documentId"
    | "sourceRevisionId"
    | "observedHeadRevisionId"
  >;
  authorization: HistoricalSourceAuthorization | null;
  actualHeadRevisionId: string;
}): { ok: true } | { ok: false; reason: string } {
  if (!input.sourceIsHistorical) {
    return { ok: true };
  }
  const c = input.candidate;
  const auth = input.authorization;
  if (!c.historicalAuthorizationId) {
    return { ok: false, reason: "CANDIDATE_HISTORICAL_AUTH_REQUIRED" };
  }
  if (!auth) {
    return { ok: false, reason: "HISTORICAL_CONFIRMATION_SERVER_REQUIRED" };
  }
  if (auth.id !== c.historicalAuthorizationId) {
    return { ok: false, reason: "HISTORICAL_AUTH_CANDIDATE_MISMATCH" };
  }
  if (
    auth.documentId !== c.documentId ||
    auth.sourceRevisionId !== c.sourceRevisionId ||
    auth.observedHeadRevisionId !== c.observedHeadRevisionId ||
    auth.choice !== "USE_SOURCE"
  ) {
    return { ok: false, reason: "HISTORICAL_AUTH_CONTEXT_MISMATCH" };
  }
  if (auth.observedHeadRevisionId !== input.actualHeadRevisionId) {
    return { ok: false, reason: "HISTORICAL_HEAD_MOVED" };
  }
  return { ok: true };
}

async function mergeTurnResultJson(args: {
  commandId: string;
  ownerToken: string;
  patch: (prev: Record<string, unknown>) => Record<string, unknown> | null;
}): Promise<{ applied: boolean }> {
  return db.transaction(async (tx) => {
    await tx.execute(
      sql`select id from conversation_turn_commands
          where id = ${args.commandId}
            and owner_token = ${args.ownerToken}
            and status in ('RUNNING', 'ACCEPTED')
          for update`,
    );
    const owned = (
      await tx
        .select({
          id: conversationTurnCommands.id,
          resultJson: conversationTurnCommands.resultJson,
        })
        .from(conversationTurnCommands)
        .where(
          and(
            eq(conversationTurnCommands.id, args.commandId),
            eq(conversationTurnCommands.ownerToken, args.ownerToken),
            sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
          ),
        )
        .limit(1)
    )[0];
    if (!owned) return { applied: false };
    let prev: Record<string, unknown> = {};
    if (owned.resultJson) {
      try {
        prev = JSON.parse(owned.resultJson) as Record<string, unknown>;
      } catch {
        return { applied: false };
      }
    }
    const next = args.patch(prev);
    if (!next) return { applied: false };
    const updated = await tx
      .update(conversationTurnCommands)
      .set({
        resultJson: JSON.stringify(next),
        updatedAt: new Date(turnClock.nowMs()),
      })
      .where(
        and(
          eq(conversationTurnCommands.id, args.commandId),
          eq(conversationTurnCommands.ownerToken, args.ownerToken),
          sql`${conversationTurnCommands.status} IN ('RUNNING', 'ACCEPTED')`,
        ),
      )
      .returning({ id: conversationTurnCommands.id });
    return { applied: Boolean(updated[0]) };
  });
}

export async function stashPendingDocumentCandidate(input: {
  commandId: string;
  ownerToken: string;
  preparationId: string;
  pilotId: string;
  documentId: string;
  sourceRevisionId: string;
  observedHeadRevisionId: string;
  title: string;
  contentMarkdown: string;
  historicalAuthorizationId?: string | null;
}): Promise<{ ok: true; candidate: PendingDocumentCandidate } | { ok: false; reason: string }> {
  const digest = contentSha256(input.title, input.contentMarkdown);
  const candidate: PendingDocumentCandidate = {
    id: newId("pdoc"),
    turnCommandId: input.commandId,
    preparationId: input.preparationId,
    pilotId: input.pilotId,
    documentId: input.documentId,
    sourceRevisionId: input.sourceRevisionId,
    observedHeadRevisionId: input.observedHeadRevisionId,
    title: input.title,
    contentMarkdown: input.contentMarkdown,
    contentSha256: digest,
    historicalAuthorizationId: input.historicalAuthorizationId ?? null,
    status: "PENDING",
    createdAt: new Date(turnClock.nowMs()).toISOString(),
  };
  const stashed = await mergeTurnResultJson({
    commandId: input.commandId,
    ownerToken: input.ownerToken,
    patch: (prev) => {
      const existing = Array.isArray(prev.pendingDocumentCandidates)
        ? (prev.pendingDocumentCandidates as PendingDocumentCandidate[])
        : [];
      // Supersede prior pending candidates for the same document on this turn.
      const nextExisting = existing.map((c) =>
        c.documentId === candidate.documentId && c.status === "PENDING"
          ? { ...c, status: "SUPERSEDED" as const }
          : c,
      );
      return {
        ...prev,
        pendingDocumentCandidates: [...nextExisting, candidate],
      };
    },
  });
  if (!stashed.applied) {
    return { ok: false, reason: "CANDIDATE_STASH_FAILED" };
  }
  // F1 — a new proposal invalidates prior pending candidates for the same document.
  await supersedeOtherPendingCandidates({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    documentId: input.documentId,
    keepCandidateId: candidate.id,
  });
  return { ok: true, candidate };
}

async function patchCandidateStatusOnOwningTurn(input: {
  pilotId: string;
  preparationId: string;
  candidateId: string;
  nextStatus: "CONSUMED" | "SUPERSEDED";
  onlyIfPending?: boolean;
}): Promise<{ applied: boolean }> {
  const rows = await db
    .select({
      id: conversationTurnCommands.id,
      resultJson: conversationTurnCommands.resultJson,
    })
    .from(conversationTurnCommands)
    .innerJoin(conversations, eq(conversations.id, conversationTurnCommands.conversationId))
    .where(
      and(
        eq(conversations.preparationId, input.preparationId),
        eq(conversations.ownerPilotId, input.pilotId),
      ),
    )
    .orderBy(sql`${conversationTurnCommands.createdAt} desc`)
    .limit(40);

  for (const row of rows) {
    if (!row.resultJson) continue;
    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(row.resultJson) as Record<string, unknown>;
    } catch {
      continue;
    }
    const list = Array.isArray(parsed.pendingDocumentCandidates)
      ? (parsed.pendingDocumentCandidates as PendingDocumentCandidate[])
      : [];
    const idx = list.findIndex((c) => c.id === input.candidateId);
    if (idx < 0) continue;
    const current = parseCandidate(list[idx]);
    if (!current) return { applied: false };
    if (input.onlyIfPending && current.status !== "PENDING") {
      return { applied: false };
    }
    const nextList = list.map((c) =>
      c.id === input.candidateId ? { ...c, status: input.nextStatus } : c,
    );
    const updated = await db
      .update(conversationTurnCommands)
      .set({
        resultJson: JSON.stringify({ ...parsed, pendingDocumentCandidates: nextList }),
        updatedAt: new Date(turnClock.nowMs()),
      })
      .where(eq(conversationTurnCommands.id, row.id))
      .returning({ id: conversationTurnCommands.id });
    return { applied: Boolean(updated[0]) };
  }
  return { applied: false };
}

/** Mark every other PENDING candidate for the document as SUPERSEDED (cross-turn). */
export async function supersedeOtherPendingCandidates(input: {
  pilotId: string;
  preparationId: string;
  documentId: string;
  keepCandidateId: string;
}): Promise<void> {
  const rows = await db
    .select({
      id: conversationTurnCommands.id,
      resultJson: conversationTurnCommands.resultJson,
    })
    .from(conversationTurnCommands)
    .innerJoin(conversations, eq(conversations.id, conversationTurnCommands.conversationId))
    .where(
      and(
        eq(conversations.preparationId, input.preparationId),
        eq(conversations.ownerPilotId, input.pilotId),
      ),
    )
    .orderBy(sql`${conversationTurnCommands.createdAt} desc`)
    .limit(40);

  for (const row of rows) {
    if (!row.resultJson) continue;
    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(row.resultJson) as Record<string, unknown>;
    } catch {
      continue;
    }
    const list = Array.isArray(parsed.pendingDocumentCandidates)
      ? (parsed.pendingDocumentCandidates as PendingDocumentCandidate[])
      : [];
    let changed = false;
    const nextList = list.map((c) => {
      if (
        c.documentId === input.documentId &&
        c.status === "PENDING" &&
        c.id !== input.keepCandidateId
      ) {
        changed = true;
        return { ...c, status: "SUPERSEDED" as const };
      }
      return c;
    });
    if (!changed) continue;
    await db
      .update(conversationTurnCommands)
      .set({
        resultJson: JSON.stringify({ ...parsed, pendingDocumentCandidates: nextList }),
        updatedAt: new Date(turnClock.nowMs()),
      })
      .where(eq(conversationTurnCommands.id, row.id));
  }
}

export async function stashHistoricalSourceAuthorization(input: {
  commandId: string;
  ownerToken: string;
  preparationId: string;
  pilotId: string;
  documentId: string;
  sourceRevisionId: string;
  observedHeadRevisionId: string;
  choice: "USE_SOURCE" | "USE_HEAD";
}): Promise<
  { ok: true; authorization: HistoricalSourceAuthorization } | { ok: false; reason: string }
> {
  const authorization: HistoricalSourceAuthorization = {
    id: newId("hauth"),
    turnCommandId: input.commandId,
    preparationId: input.preparationId,
    pilotId: input.pilotId,
    documentId: input.documentId,
    sourceRevisionId: input.sourceRevisionId,
    observedHeadRevisionId: input.observedHeadRevisionId,
    choice: input.choice,
    createdAt: new Date(turnClock.nowMs()).toISOString(),
  };
  const stashed = await mergeTurnResultJson({
    commandId: input.commandId,
    ownerToken: input.ownerToken,
    patch: (prev) => {
      const existing = Array.isArray(prev.historicalSourceAuthorizations)
        ? (prev.historicalSourceAuthorizations as HistoricalSourceAuthorization[])
        : [];
      return {
        ...prev,
        historicalSourceAuthorizations: [...existing, authorization],
      };
    },
  });
  if (!stashed.applied) {
    return { ok: false, reason: "HISTORICAL_AUTH_STASH_FAILED" };
  }
  return { ok: true, authorization };
}

function parseCandidate(raw: unknown): PendingDocumentCandidate | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  if (
    typeof o.id !== "string" ||
    typeof o.turnCommandId !== "string" ||
    typeof o.preparationId !== "string" ||
    typeof o.pilotId !== "string" ||
    typeof o.documentId !== "string" ||
    typeof o.sourceRevisionId !== "string" ||
    typeof o.observedHeadRevisionId !== "string" ||
    typeof o.title !== "string" ||
    typeof o.contentMarkdown !== "string" ||
    typeof o.contentSha256 !== "string" ||
    (o.status !== "PENDING" && o.status !== "CONSUMED" && o.status !== "SUPERSEDED")
  ) {
    return null;
  }
  return o as unknown as PendingDocumentCandidate;
}

function parseAuth(raw: unknown): HistoricalSourceAuthorization | null {
  if (!raw || typeof raw !== "object") return null;
  const o = raw as Record<string, unknown>;
  if (
    typeof o.id !== "string" ||
    typeof o.turnCommandId !== "string" ||
    typeof o.preparationId !== "string" ||
    typeof o.pilotId !== "string" ||
    typeof o.documentId !== "string" ||
    typeof o.sourceRevisionId !== "string" ||
    typeof o.observedHeadRevisionId !== "string" ||
    (o.choice !== "USE_SOURCE" && o.choice !== "USE_HEAD")
  ) {
    return null;
  }
  return o as unknown as HistoricalSourceAuthorization;
}

/**
 * Load a pending candidate by id — rights scoped to pilot + preparation.
 * Searches recent turn commands for the preparation conversation.
 */
export async function loadPendingDocumentCandidate(input: {
  pilotId: string;
  preparationId: string;
  candidateId: string;
  expectedContentSha256?: string;
}): Promise<
  | { ok: true; candidate: PendingDocumentCandidate }
  | { ok: false; reason: string }
> {
  const rows = await db
    .select({
      id: conversationTurnCommands.id,
      resultJson: conversationTurnCommands.resultJson,
      ownerPilotId: conversations.ownerPilotId,
      preparationId: conversations.preparationId,
    })
    .from(conversationTurnCommands)
    .innerJoin(conversations, eq(conversations.id, conversationTurnCommands.conversationId))
    .where(
      and(
        eq(conversations.preparationId, input.preparationId),
        eq(conversations.ownerPilotId, input.pilotId),
      ),
    )
    .orderBy(sql`${conversationTurnCommands.createdAt} desc`)
    .limit(40);

  for (const row of rows) {
    if (!row.resultJson) continue;
    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(row.resultJson) as Record<string, unknown>;
    } catch {
      continue;
    }
    const list = Array.isArray(parsed.pendingDocumentCandidates)
      ? parsed.pendingDocumentCandidates
      : [];
    for (const raw of list) {
      const c = parseCandidate(raw);
      if (!c || c.id !== input.candidateId) continue;
      if (c.pilotId !== input.pilotId || c.preparationId !== input.preparationId) {
        return { ok: false, reason: "CANDIDATE_DENIED" };
      }
      if (c.status !== "PENDING") {
        return { ok: false, reason: `CANDIDATE_${c.status}` };
      }
      const digest = contentSha256(c.title, c.contentMarkdown);
      if (digest !== c.contentSha256) {
        return { ok: false, reason: "CANDIDATE_HASH_MISMATCH" };
      }
      if (
        input.expectedContentSha256 &&
        input.expectedContentSha256 !== c.contentSha256
      ) {
        return { ok: false, reason: "CANDIDATE_CLIENT_HASH_MISMATCH" };
      }
      return { ok: true, candidate: c };
    }
  }
  return { ok: false, reason: "CANDIDATE_NOT_FOUND" };
}

export async function loadHistoricalSourceAuthorization(input: {
  pilotId: string;
  preparationId: string;
  authorizationId: string;
}): Promise<
  | { ok: true; authorization: HistoricalSourceAuthorization }
  | { ok: false; reason: string }
> {
  const rows = await db
    .select({
      resultJson: conversationTurnCommands.resultJson,
      ownerPilotId: conversations.ownerPilotId,
      preparationId: conversations.preparationId,
    })
    .from(conversationTurnCommands)
    .innerJoin(conversations, eq(conversations.id, conversationTurnCommands.conversationId))
    .where(
      and(
        eq(conversations.preparationId, input.preparationId),
        eq(conversations.ownerPilotId, input.pilotId),
      ),
    )
    .orderBy(sql`${conversationTurnCommands.createdAt} desc`)
    .limit(40);

  for (const row of rows) {
    if (!row.resultJson) continue;
    let parsed: Record<string, unknown>;
    try {
      parsed = JSON.parse(row.resultJson) as Record<string, unknown>;
    } catch {
      continue;
    }
    const list = Array.isArray(parsed.historicalSourceAuthorizations)
      ? parsed.historicalSourceAuthorizations
      : [];
    for (const raw of list) {
      const a = parseAuth(raw);
      if (!a || a.id !== input.authorizationId) continue;
      if (a.pilotId !== input.pilotId || a.preparationId !== input.preparationId) {
        return { ok: false, reason: "HISTORICAL_AUTH_DENIED" };
      }
      return { ok: true, authorization: a };
    }
  }
  return { ok: false, reason: "HISTORICAL_AUTH_NOT_FOUND" };
}

/** Mark candidate CONSUMED on the turn that owns it (cross-turn, post-AVAILABLE). */
export async function markPendingCandidateConsumed(input: {
  pilotId: string;
  preparationId: string;
  candidateId: string;
}): Promise<{ applied: boolean }> {
  return patchCandidateStatusOnOwningTurn({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    candidateId: input.candidateId,
    nextStatus: "CONSUMED",
    onlyIfPending: true,
  });
}

/** Pilot-facing summary — never exposes raw markdown in status strings. */
export function pendingCandidateSummary(c: PendingDocumentCandidate): {
  candidateId: string;
  contentSha256: string;
  documentId: string;
  sourceRevisionId: string;
  observedHeadRevisionId: string;
  title: string;
} {
  return {
    candidateId: c.id,
    contentSha256: c.contentSha256,
    documentId: c.documentId,
    sourceRevisionId: c.sourceRevisionId,
    observedHeadRevisionId: c.observedHeadRevisionId,
    title: c.title,
  };
}
