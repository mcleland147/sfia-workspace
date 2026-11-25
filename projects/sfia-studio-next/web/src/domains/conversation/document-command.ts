/**
 * O-04 — document command admission / binding / D4 orchestration.
 * No autonomous writes: mutations stay in document/service.ts.
 */
import { createHash } from "node:crypto";
import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands, conversations, messages } from "@/db/schema";
import {
  extractContractualDocumentProposal,
  LEGACY_UNTITLED_DOCUMENT_TITLE,
} from "@/domains/conversation/document-act";
import {
  stashDocumentCommandBinding,
  type TurnOwnershipFence,
} from "@/domains/conversation/turn-command";
import {
  buildSealedProvenance,
  lookupDocumentCorrelationTruth,
  reviseDocument,
  savePreparationDocument,
  type SealedEffectIdentity,
} from "@/domains/document/service";

export const DOCUMENT_COMMAND_BINDING_SCHEMA_VERSION = "ml4c-doc-cmd-v1" as const;

export type DocumentCommandSource =
  | { kind: "ASSISTANT_MESSAGE"; assistantMessageId: string }
  | { kind: "SAME_TURN_SNAPSHOT"; commandId: string };

export type DocumentProposalExact = {
  title: string;
  contentMarkdown: string;
  contentSha256: string;
};

export type DocumentCommandBinding = {
  schemaVersion: typeof DOCUMENT_COMMAND_BINDING_SCHEMA_VERSION;
  commandId: string;
  operationId: string;
  userMessageId: string;
  qualifiedIntentId: string;
  action: "CREATE" | "REVISE";
  source: DocumentCommandSource;
  preparationId: string;
  documentId: string | null;
  /** Drafting source (legacy field; equals sourceRevisionId when historical protocol used). */
  baseRevisionId: string | null;
  sourceRevisionId?: string | null;
  observedHeadRevisionId?: string | null;
  confirmedHistoricalSource?: boolean;
  title: string;
  contentMarkdown: string;
  contentSha256: string;
  payloadSha256: string;
  correlationKey: string;
  sectionHint?: string | null;
};

export type DocumentCommandAdmission =
  | { ok: true; binding: DocumentCommandBinding }
  | { ok: false; verdict: "NOT_EXECUTED" | "CONFLICT" | "FAILED"; reason: string };

/**
 * Pair digest for a D4 candidate: SHA-256(title || "" + "\0" + contentMarkdown).
 * This is the canonical contentSha256 stored on sealed candidates.
 * Do NOT compare against a body-only hash of contentMarkdown alone (C1).
 */
export function contentSha256(title: string, contentMarkdown: string): string {
  return createHash("sha256")
    .update(title || "")
    .update("\0")
    .update(contentMarkdown)
    .digest("hex");
}

/** Body-only digest — for forensic comparison; not the sealed candidate identity. */
export function contentBodySha256(contentMarkdown: string): string {
  return createHash("sha256").update(contentMarkdown).digest("hex");
}

export function payloadSha256(parts: {
  action: "CREATE" | "REVISE";
  source: DocumentCommandSource;
  preparationId: string;
  documentId: string | null;
  baseRevisionId: string | null;
  sourceRevisionId?: string | null;
  observedHeadRevisionId?: string | null;
  confirmedHistoricalSource?: boolean;
  sectionHint?: string | null;
  title: string;
  contentSha256: string;
}): string {
  const historical =
    parts.sourceRevisionId != null ||
    parts.observedHeadRevisionId != null ||
    parts.confirmedHistoricalSource === true;
  const canonical = JSON.stringify({
    schemaVersion: DOCUMENT_COMMAND_BINDING_SCHEMA_VERSION,
    action: parts.action,
    source: parts.source,
    preparationId: parts.preparationId,
    documentId: parts.documentId,
    baseRevisionId: parts.baseRevisionId,
    ...(historical
      ? {
          sourceRevisionId: parts.sourceRevisionId ?? parts.baseRevisionId,
          observedHeadRevisionId: parts.observedHeadRevisionId ?? null,
          confirmedHistoricalSource: parts.confirmedHistoricalSource === true,
        }
      : {}),
    sectionHint: parts.sectionHint ?? null,
    title: parts.title,
    contentSha256: parts.contentSha256,
  });
  return createHash("sha256").update(canonical).digest("hex");
}

export function deriveDocumentCorrelationKey(parts: {
  commandId: string;
  qualifiedIntentId: string;
  action: "CREATE" | "REVISE";
  preparationId: string;
  documentId: string | null;
}): string {
  return createHash("sha256")
    .update(
      [
        parts.commandId,
        parts.qualifiedIntentId,
        parts.action,
        parts.preparationId,
        parts.documentId ?? "",
      ].join("|"),
    )
    .digest("hex")
    .slice(0, 48);
}

/**
 * C-02 — canonical proposal: title + exact contentMarkdown (full document).
 * Validates optional leading H1 coherence; never rewrites content bytes.
 */
export function canonicalizeDocumentProposal(input: {
  title: string;
  contentMarkdown: string;
}):
  | { ok: true; proposal: DocumentProposalExact }
  | { ok: false; reason: string } {
  const title = input.title.trim();
  const contentMarkdown = input.contentMarkdown;
  if (!title) return { ok: false, reason: "EMPTY_TITLE" };
  if (!contentMarkdown.trim()) return { ok: false, reason: "EMPTY_PROPOSAL" };
  if (contentMarkdown.length > 100_000) return { ok: false, reason: "CONTENT_TOO_LARGE" };
  const h1 = /^#\s+(.+?)(?:\r?\n|$)/.exec(contentMarkdown);
  if (h1) {
    const heading = h1[1]!.trim();
    if (heading !== title) {
      return { ok: false, reason: "TITLE_H1_MISMATCH" };
    }
  }
  return {
    ok: true,
    proposal: {
      title,
      contentMarkdown,
      contentSha256: contentSha256(title, contentMarkdown),
    },
  };
}

export function encodeTitleB64(title: string): string {
  return Buffer.from(title, "utf8").toString("base64url");
}

const FENCE_META_KEYS = new Set(["title-b64", "chars", "pair-sha256"]);
const CHARS_RE = /^(0|[1-9][0-9]*)$/;
const SHA256_HEX_RE = /^[0-9a-f]{64}$/;
const BASE64URL_RE = /^[A-Za-z0-9_-]+$/;
const MAX_PROPOSAL_CHARS = 100_000;

export type ParsedFenceMetadata =
  | { kind: "LEGACY" }
  | {
      kind: "STRUCTURED";
      titleB64: string;
      chars: number;
      pairSha256: string;
    }
  | {
      kind: "INVALID";
      reason: "DOCUMENT_PROPOSAL_METADATA_INVALID";
    };

/**
 * P0-A — three-state fence metadata parser.
 * Partial structured tokens are INVALID, never silently treated as LEGACY.
 */
export function parseFenceMeta(info: string): ParsedFenceMetadata {
  const raw = info.trim();
  if (!raw) return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  const parts = raw.split(/\s+/);
  // P1: tag recognition is case-insensitive (align with document-act scanner).
  // Emission remains canonical lowercase `sfia-document`.
  const tag = (parts[0] ?? "").toLowerCase();
  if (tag !== "sfia-document") {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  const tokens = parts.slice(1);
  if (tokens.length === 0) return { kind: "LEGACY" };

  const seen = new Set<string>();
  let titleB64: string | undefined;
  let charsRaw: string | undefined;
  let pairSha256: string | undefined;

  for (const tok of tokens) {
    const eq = tok.indexOf("=");
    if (eq <= 0 || tok.indexOf("=", eq + 1) !== -1) {
      return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
    }
    const key = tok.slice(0, eq);
    const val = tok.slice(eq + 1);
    if (!FENCE_META_KEYS.has(key)) {
      return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
    }
    if (seen.has(key)) {
      return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
    }
    seen.add(key);
    if (val === "") {
      return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
    }
    if (key === "title-b64") titleB64 = val;
    else if (key === "chars") charsRaw = val;
    else if (key === "pair-sha256") pairSha256 = val;
  }

  // Any structured token present requires the full triad — never LEGACY fallback.
  if (seen.size !== 3 || titleB64 == null || charsRaw == null || pairSha256 == null) {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  if (!CHARS_RE.test(charsRaw)) {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  const chars = Number(charsRaw);
  if (!Number.isSafeInteger(chars) || chars < 0 || chars > MAX_PROPOSAL_CHARS) {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  if (!SHA256_HEX_RE.test(pairSha256)) {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  if (!BASE64URL_RE.test(titleB64)) {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  let decodedTitle: string;
  try {
    decodedTitle = Buffer.from(titleB64, "base64url").toString("utf8");
  } catch {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  // Reject replacement-char artefacts from invalid UTF-8 and require round-trip.
  if (decodedTitle.includes("\uFFFD")) {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  if (encodeTitleB64(decodedTitle) !== titleB64) {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  if (!decodedTitle.trim()) {
    return { kind: "INVALID", reason: "DOCUMENT_PROPOSAL_METADATA_INVALID" };
  }
  return { kind: "STRUCTURED", titleB64, chars, pairSha256 };
}

function fenceOpenerLength(contentMarkdown: string): number {
  let need = 3;
  const re = /`{3,}/g;
  let m: RegExpExecArray | null;
  while ((m = re.exec(contentMarkdown)) !== null) {
    need = Math.max(need, m[0]!.length + 1);
  }
  return need;
}

/** Serialize exact Markdown into a contractual fence — metadata + byte-stable body. */
export function serializeProposalFence(proposal: DocumentProposalExact): string {
  const canonical = canonicalizeDocumentProposal({
    title: proposal.title,
    contentMarkdown: proposal.contentMarkdown,
  });
  if (!canonical.ok) {
    throw new Error(`PROPOSAL_NOT_CANONICAL:${canonical.reason}`);
  }
  const { title, contentMarkdown, contentSha256: digest } = canonical.proposal;
  const tickLen = fenceOpenerLength(contentMarkdown);
  const ticks = "`".repeat(tickLen);
  const info = `sfia-document title-b64=${encodeTitleB64(title)} chars=${contentMarkdown.length} pair-sha256=${digest}`;
  const needsStructuralNl = !contentMarkdown.endsWith("\n");
  const body = needsStructuralNl ? `${contentMarkdown}\n` : contentMarkdown;
  return `${ticks}${info}\n${body}${ticks}\n`;
}

/**
 * Document-level `# H1` (single hash + space). `## Section` does not qualify.
 */
export function hasDocumentLevelH1(content: string): boolean {
  return /^#\s+.+$/m.test(content);
}

/**
 * LEGACY fence that never claimed a document title — only the untitled sentinel.
 * Requires parser provenance `LEGACY_UNTITLED`: a STRUCTURED fence whose title
 * text equals the sentinel is an explicit title claim and must not qualify.
 * Missing provenance fails closed (no exception).
 */
export function isLegacyUntitledSectionFence(extracted: {
  title: string;
  content: string;
  titleProvenance?: "STRUCTURED" | "LEGACY_H1" | "LEGACY_UNTITLED";
}): boolean {
  if (extracted.titleProvenance !== "LEGACY_UNTITLED") return false;
  return (
    extracted.title === LEGACY_UNTITLED_DOCUMENT_TITLE &&
    !hasDocumentLevelH1(extracted.content)
  );
}

/**
 * P1 — structural fence separator only (serializer contract).
 * True iff extracted body equals canonical body + exactly one trailing LF,
 * titles match (unless requireTitleMatch=false for section-scoped LEGACY),
 * canonical does not already end with LF, and
 * serialize→extract round-trip restores the canonical title/body/digest.
 * Never trims or rewrites content; never accepts any other difference.
 */
export function isStructuralFenceSeparatorOnly(input: {
  authority: DocumentProposalExact;
  extractedTitle: string;
  extractedContent: string;
  /** Default true. False only for section-scoped LEGACY untitled fences. */
  requireTitleMatch?: boolean;
}): boolean {
  const { authority, extractedTitle, extractedContent } = input;
  const requireTitleMatch = input.requireTitleMatch !== false;
  if (requireTitleMatch && extractedTitle !== authority.title) return false;
  if (authority.contentMarkdown.endsWith("\n")) return false;
  if (extractedContent !== `${authority.contentMarkdown}\n`) return false;
  if (contentSha256(extractedTitle, extractedContent) === authority.contentSha256) {
    // Exact digest match means no separator-only case (bodies already equal).
    return false;
  }
  try {
    const fence = serializeProposalFence(authority);
    const again = extractContractualDocumentProposal(fence);
    if (!again.ok) return false;
    return (
      again.title === authority.title &&
      again.content === authority.contentMarkdown &&
      contentSha256(again.title, again.content) === authority.contentSha256
    );
  } catch {
    return false;
  }
}

export type ConfrontProposalFenceOptions = {
  /**
   * REVISE with a sectionHint: authority title is the durable document title;
   * LEGACY fence body may be section-scoped without a document H1, so the
   * sentinel title is not a contractual identity claim.
   */
  sectionScoped?: boolean;
};

/**
 * P1 — confront authoritative proposal with a concurrent contractual fence.
 * Fence MISSING → materialize; INVALID → refuse; exact match → accept;
 * sole structural LF separator (serializer contract) → accept for canonical rewrite.
 * Section-scoped: LEGACY untitled fence may match on content (+ structural LF) only.
 */
export function confrontProposalWithFence(
  authority: DocumentProposalExact,
  extracted: {
    ok: false;
    reason: string;
  } | {
    ok: true;
    title: string;
    content: string;
    /** Present when extracted via parseur ; absent → no sectionScoped untitled exception. */
    titleProvenance?: "STRUCTURED" | "LEGACY_H1" | "LEGACY_UNTITLED";
  },
  options?: ConfrontProposalFenceOptions,
):
  | { ok: true; materialize: boolean }
  | { ok: false; reason: string } {
  if (!extracted.ok) {
    if (extracted.reason === "DOCUMENT_PROPOSAL_MISSING") {
      return { ok: true, materialize: true };
    }
    return { ok: false, reason: extracted.reason };
  }
  if (
    extracted.title === authority.title &&
    extracted.content === authority.contentMarkdown &&
    contentSha256(extracted.title, extracted.content) === authority.contentSha256
  ) {
    return { ok: true, materialize: false };
  }
  if (
    isStructuralFenceSeparatorOnly({
      authority,
      extractedTitle: extracted.title,
      extractedContent: extracted.content,
    })
  ) {
    // Accept: caller keeps canonical authority; later rewrite uses serializeProposalFence.
    return { ok: true, materialize: false };
  }
  // LIVE-03 / section REVISE: LEGACY fence without `# H1` synthesizes the
  // untitled sentinel. Content identity (exact or structural LF) still required.
  if (options?.sectionScoped && isLegacyUntitledSectionFence(extracted)) {
    if (extracted.content === authority.contentMarkdown) {
      return { ok: true, materialize: false };
    }
    if (
      isStructuralFenceSeparatorOnly({
        authority,
        extractedTitle: extracted.title,
        extractedContent: extracted.content,
        requireTitleMatch: false,
      })
    ) {
      return { ok: true, materialize: false };
    }
  }
  return { ok: false, reason: "PROPOSAL_SOURCE_CONFLICT" };
}

export function sealedIdentityFromBinding(binding: DocumentCommandBinding): SealedEffectIdentity {
  return {
    commandId: binding.commandId,
    operationId: binding.operationId,
    userMessageId: binding.userMessageId,
    qualifiedIntentId: binding.qualifiedIntentId,
    action: binding.action,
    source: binding.source,
    preparationId: binding.preparationId,
    documentId: binding.documentId,
    baseRevisionId: binding.baseRevisionId,
    sectionHint: binding.sectionHint ?? null,
    correlationKey: binding.correlationKey,
    contentSha256: binding.contentSha256,
    payloadSha256: binding.payloadSha256,
    title: binding.title,
  };
}

export function proposalFromStructured(input: {
  title: string;
  contentMarkdown: string;
}): DocumentProposalExact | null {
  const canonical = canonicalizeDocumentProposal(input);
  return canonical.ok ? canonical.proposal : null;
}

/**
 * Resolve an exact historical assistant proposal (O-03).
 * Rights: message must belong to a conversation owned by the pilot and preparation scope.
 */
export async function resolveAssistantProposal(input: {
  pilotId: string;
  preparationId: string;
  assistantMessageId: string;
}): Promise<
  | { ok: true; proposal: DocumentProposalExact; assistantMessageId: string; generationId: string | null }
  | { ok: false; reason: string }
> {
  const row = (
    await db
      .select({
        id: messages.id,
        content: messages.content,
        status: messages.status,
        role: messages.role,
        generationId: messages.generationId,
        preparationId: conversations.preparationId,
        ownerPilotId: conversations.ownerPilotId,
      })
      .from(messages)
      .innerJoin(conversations, eq(conversations.id, messages.conversationId))
      .where(and(eq(messages.id, input.assistantMessageId)))
      .limit(1)
  )[0];
  if (!row || row.ownerPilotId !== input.pilotId) {
    return { ok: false, reason: "SOURCE_DENIED" };
  }
  if (row.preparationId !== input.preparationId) {
    // Inter-prep write not admitted by current D4 owner controls.
    return { ok: false, reason: "SOURCE_PREPARATION_MISMATCH" };
  }
  if (row.role !== "assistant") {
    return { ok: false, reason: "SOURCE_NOT_ASSISTANT" };
  }
  if (row.status !== "COMPLETE") {
    return { ok: false, reason: "SOURCE_NOT_TERMINAL" };
  }
  const extracted = extractContractualDocumentProposal(row.content);
  if (!extracted.ok) {
    return { ok: false, reason: extracted.reason };
  }
  return {
    ok: true,
    proposal: {
      title: extracted.title,
      contentMarkdown: extracted.content,
      contentSha256: contentSha256(extracted.title, extracted.content),
    },
    assistantMessageId: row.id,
    generationId: row.generationId,
  };
}

export function admitDocumentCommand(input: {
  commandId: string;
  operationId: string;
  userMessageId: string;
  qualifiedIntentId: string;
  action: "CREATE" | "REVISE";
  preparationId: string;
  documentId?: string | null;
  baseRevisionId?: string | null;
  sourceRevisionId?: string | null;
  observedHeadRevisionId?: string | null;
  confirmedHistoricalSource?: boolean;
  sectionHint?: string | null;
  source: DocumentCommandSource;
  title: string;
  contentMarkdown: string;
  /** Optional client turn key folded into correlation at admit time only (never mutated later). */
  clientCorrelationSalt?: string | null;
}): DocumentCommandAdmission {
  const canonical = canonicalizeDocumentProposal({
    title: input.title,
    contentMarkdown: input.contentMarkdown,
  });
  if (!canonical.ok) {
    return { ok: false, verdict: "NOT_EXECUTED", reason: canonical.reason };
  }
  if (!input.userMessageId || !input.qualifiedIntentId) {
    return { ok: false, verdict: "NOT_EXECUTED", reason: "MISSING_IDENTITIES" };
  }
  const sourceRevisionId = input.sourceRevisionId ?? input.baseRevisionId ?? null;
  if (input.action === "REVISE" && (!input.documentId || !sourceRevisionId)) {
    return { ok: false, verdict: "NOT_EXECUTED", reason: "REVISE_TARGET_INCOMPLETE" };
  }
  const { title, contentMarkdown, contentSha256: cSha } = canonical.proposal;
  const useHistorical =
    input.sourceRevisionId != null ||
    input.observedHeadRevisionId != null ||
    input.confirmedHistoricalSource === true;
  const pSha = payloadSha256({
    action: input.action,
    source: input.source,
    preparationId: input.preparationId,
    documentId: input.documentId ?? null,
    baseRevisionId: sourceRevisionId,
    ...(useHistorical
      ? {
          sourceRevisionId,
          observedHeadRevisionId: input.observedHeadRevisionId ?? null,
          confirmedHistoricalSource: input.confirmedHistoricalSource === true,
        }
      : {}),
    sectionHint: input.sectionHint,
    title,
    contentSha256: cSha,
  });
  const baseKey = deriveDocumentCorrelationKey({
    commandId: input.commandId,
    qualifiedIntentId: input.qualifiedIntentId,
    action: input.action,
    preparationId: input.preparationId,
    documentId: input.documentId ?? null,
  });
  const salt = input.clientCorrelationSalt?.trim();
  const correlationKey = salt
    ? createHash("sha256").update(`${baseKey}|${salt}`).digest("hex").slice(0, 48)
    : baseKey;
  return {
    ok: true,
    binding: {
      schemaVersion: DOCUMENT_COMMAND_BINDING_SCHEMA_VERSION,
      commandId: input.commandId,
      operationId: input.operationId,
      userMessageId: input.userMessageId,
      qualifiedIntentId: input.qualifiedIntentId,
      action: input.action,
      source: input.source,
      preparationId: input.preparationId,
      documentId: input.documentId ?? null,
      baseRevisionId: sourceRevisionId,
      ...(useHistorical
        ? {
            sourceRevisionId,
            observedHeadRevisionId: input.observedHeadRevisionId ?? null,
            confirmedHistoricalSource: input.confirmedHistoricalSource === true,
          }
        : {}),
      title,
      contentMarkdown,
      contentSha256: cSha,
      payloadSha256: pSha,
      correlationKey,
      sectionHint: input.sectionHint ?? null,
    },
  };
}

export async function sealAndApplyDocumentCommand(input: {
  pilotId: string;
  fence: TurnOwnershipFence;
  binding: DocumentCommandBinding;
}): Promise<{
  sealApplied: boolean;
  effect:
    | Awaited<ReturnType<typeof savePreparationDocument>>
    | Awaited<ReturnType<typeof reviseDocument>>
    | { status: "NOT_EXECUTED"; reason: string };
}> {
  const sealed = await stashDocumentCommandBinding({
    commandId: input.fence.commandId,
    ownerToken: input.fence.ownerToken,
    binding: input.binding,
  });
  if (!sealed.applied) {
    return {
      sealApplied: false,
      effect: { status: "NOT_EXECUTED", reason: "BINDING_SEAL_FAILED" },
    };
  }

  if (input.binding.action === "CREATE") {
    const effect = await savePreparationDocument(
      input.pilotId,
      input.binding.preparationId,
      input.binding.title,
      input.binding.contentMarkdown,
      undefined,
      {
        correlationKey: input.binding.correlationKey,
        turnFence: input.fence,
        provenance: buildSealedProvenance(sealedIdentityFromBinding(input.binding)),
      },
    );
    return { sealApplied: true, effect };
  }

  const sourceRevisionId =
    input.binding.sourceRevisionId ?? input.binding.baseRevisionId!;
  const observedHeadRevisionId = input.binding.observedHeadRevisionId ?? undefined;
  const historical =
    Boolean(observedHeadRevisionId) &&
    observedHeadRevisionId !== sourceRevisionId;
  const effect = await reviseDocument(input.pilotId, input.binding.preparationId, {
    documentId: input.binding.documentId!,
    baseRevisionId: sourceRevisionId,
    sourceRevisionId,
    observedHeadRevisionId,
    confirmedHistoricalSource:
      input.binding.confirmedHistoricalSource === true || undefined,
    contentMarkdown: input.binding.contentMarkdown,
    correlationKey: input.binding.correlationKey,
    scope: input.binding.sectionHint ? "section" : "document",
    sectionHint: input.binding.sectionHint ?? undefined,
    turnFence: input.fence,
    expectedTitle: input.binding.title,
    expectedContentSha256: input.binding.contentSha256,
    provenance: {
      ...buildSealedProvenance(sealedIdentityFromBinding(input.binding)),
      ...(historical
        ? {
            sourceRevisionId,
            observedHeadRevisionId,
            confirmedHistoricalSource: input.binding.confirmedHistoricalSource === true,
          }
        : {}),
    },
  });
  return { sealApplied: true, effect };
}

/** C-01 — read-only reconciliation via D4 correlation truth (never CREATE/REVISE). */
export async function reconcileDocumentCommandFromBinding(input: {
  pilotId: string;
  preparationId: string;
  binding: DocumentCommandBinding;
}): Promise<{
  verdict: "AVAILABLE" | "UNKNOWN" | "CONFLICT" | "NOT_EXECUTED";
  documentId?: string;
  revisionId?: string;
  revisionNumber?: number;
  reason?: string;
  contentSha256?: string;
}> {
  const expectedIdentity = sealedIdentityFromBinding(input.binding);
  const truth = await lookupDocumentCorrelationTruth({
    pilotId: input.pilotId,
    preparationId: input.preparationId,
    action: input.binding.action,
    correlationKey: input.binding.correlationKey,
    title: input.binding.title,
    contentMarkdown: input.binding.contentMarkdown,
    contentSha256: input.binding.contentSha256,
    payloadSha256: input.binding.payloadSha256,
    documentId: input.binding.documentId,
    baseRevisionId: input.binding.baseRevisionId,
    expectedIdentity,
  });
  return {
    verdict: truth.verdict,
    documentId: truth.documentId,
    revisionId: truth.revisionId,
    revisionNumber: truth.revisionNumber,
    reason: truth.reason,
    contentSha256: truth.contentSha256,
  };
}

/** Load a sealed binding from a turn command owned by the pilot (read-only). */
export async function loadSealedDocumentBinding(input: {
  pilotId: string;
  preparationId: string;
  commandId: string;
  correlationKey?: string | null;
}): Promise<
  | { ok: true; binding: DocumentCommandBinding; commandId: string }
  | { ok: false; reason: string }
> {
  const row = (
    await db
      .select({
        id: conversationTurnCommands.id,
        ownerPilotId: conversationTurnCommands.ownerPilotId,
        resultJson: conversationTurnCommands.resultJson,
        preparationId: conversations.preparationId,
      })
      .from(conversationTurnCommands)
      .innerJoin(
        conversations,
        eq(conversations.id, conversationTurnCommands.conversationId),
      )
      .where(eq(conversationTurnCommands.id, input.commandId))
      .limit(1)
  )[0];
  if (!row || row.ownerPilotId !== input.pilotId) {
    return { ok: false, reason: "COMMAND_DENIED" };
  }
  if (row.preparationId !== input.preparationId) {
    return { ok: false, reason: "COMMAND_PREPARATION_MISMATCH" };
  }
  if (!row.resultJson) {
    return { ok: false, reason: "BINDING_ABSENT" };
  }
  let parsed: Record<string, unknown>;
  try {
    parsed = JSON.parse(row.resultJson) as Record<string, unknown>;
  } catch {
    return { ok: false, reason: "BINDING_JSON_INVALID" };
  }
  const rawList = Array.isArray(parsed.documentCommandBindings)
    ? parsed.documentCommandBindings
    : [];
  const list = rawList.filter((b): b is DocumentCommandBinding => {
    if (!b || typeof b !== "object") return false;
    const x = b as DocumentCommandBinding;
    return (
      x.schemaVersion === DOCUMENT_COMMAND_BINDING_SCHEMA_VERSION &&
      x.commandId === input.commandId &&
      typeof x.correlationKey === "string" &&
      x.correlationKey.length > 0
    );
  });
  if (list.length === 0) {
    return { ok: false, reason: rawList.length === 0 ? "BINDING_ABSENT" : "BINDING_NOT_FOUND" };
  }
  const correlationKey = input.correlationKey?.trim() || null;
  let binding: DocumentCommandBinding | undefined;
  if (correlationKey) {
    binding = list.find((b) => b.correlationKey === correlationKey);
    if (!binding) {
      return { ok: false, reason: "BINDING_NOT_FOUND" };
    }
  } else if (list.length === 1) {
    binding = list[0];
  } else {
    return { ok: false, reason: "BINDING_SELECTOR_REQUIRED" };
  }
  return { ok: true, binding, commandId: row.id };
}
