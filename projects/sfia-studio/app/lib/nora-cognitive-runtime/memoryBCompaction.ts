/**
 * MW1-S02 — Governed Memory B compaction with provenance and loss signaling.
 * Product-owned compaction on existing session_items (no new schema/table).
 * Memory B ≠ Truth C. Compacted summary ≠ authority / HumanDecision / Evidence.
 *
 * MW1-S02-CORR-01:
 * - single partition (no second keepRecent inside record builder)
 * - multi-generation recompaction lineage inside one compaction record
 * - conservative / monotonic loss honesty
 * - stale disclosures aligned with recent raw Memory B replay
 */

import { createHash } from "node:crypto";
import type { AgentInputItem, Session } from "@openai/agents";
import {
  ProductSqliteSession,
  userTextItem,
} from "./productSqliteSession";

export type TruthCRevision = {
  lpsId: string;
  lpsVersion: number;
};

export type MemoryBCompactionState =
  | "none"
  | "compacted_no_loss"
  | "compacted_with_loss"
  | "stale_invalidated";

export type CompactionProvenanceKind = "raw" | "inherited";

export type CompactionProvenanceEntry = {
  /** Stable reference within this record generation. */
  seq: number;
  role: string;
  contentHash: string;
  excerpt: string;
  generation: number;
  kind: CompactionProvenanceKind;
  /** Original Memory B seq for kind=raw (at compaction time). */
  sourceSeq?: number;
};

export type MemoryBCompactionLoss = {
  occurred: boolean;
  droppedItemCount: number;
  omittedExtent: string;
  governingContextRetained: boolean;
  governingContextExplicitLoss: boolean;
};

/**
 * Non-cognitive audit of a Truth-C-invalidated prior compaction.
 * MUST NOT contain prior summary/excerpts/governing text.
 * MUST NOT be replayed to the model as semantic Memory B.
 */
export type InvalidatedPriorCompactionMeta = {
  generation: number;
  truthCRevision: TruthCRevision;
  summaryHash: string;
  lossOccurred: boolean;
  hadGoverningContext: boolean;
  invalidatedBecause: "truth_c_revision_changed";
};

/** Stored in session_items.item_json — filtered from Runner replay. */
export type MemoryBCompactionRecord = {
  type: "sfia_memory_b_compaction";
  /** 2 = CORR-01 lineage-aware; CORR-02 adds optional invalidatedPriorCompaction. */
  version: 2;
  generation: number;
  summaryText: string;
  provenance: CompactionProvenanceEntry[];
  loss: MemoryBCompactionLoss;
  truthCRevision: TruthCRevision;
  sourceSeqRange: { from: number; to: number };
  nonAuthoritative: true;
  createdAtIso: string;
  inheritedFromGeneration?: number;
  /** Non-cognitive only — never copied into summaryText / Runner replay. */
  invalidatedPriorCompaction?: InvalidatedPriorCompactionMeta;
};

export type MemoryBCompactionDetails = {
  state: MemoryBCompactionState;
  record: MemoryBCompactionRecord | null;
  replayItemCount: number;
  rawItemCount: number;
  compactionAppliedThisTurn: boolean;
  /** Prior compacted summary invalidated by Truth C change (may co-occur with fresh R2 compaction). */
  stalePriorInvalidated: boolean;
};

export type CompactionPolicy = {
  /** Conversation items (excl. compaction marker) above which compaction runs. */
  itemThreshold: number;
  /** Recent turns kept verbatim after compaction. */
  keepRecentCount: number;
  maxSummaryChars: number;
};

export const DEFAULT_COMPACTION_POLICY: CompactionPolicy = {
  itemThreshold: 8,
  keepRecentCount: 2,
  maxSummaryChars: 1200,
};

const GOVERNING_MARKERS =
  /\b(STOP|HumanDecision|GO MORRIS|governing premise|decision requise|autorisation|DÉCISION REQUISE)\b/i;

const EXCERPT_LIMIT = 120;
const GOVERNING_SUMMARY_LIMIT = 200;
const RETAINED_SUMMARY_LIMIT = 160;

export const COMPACTION_COGNITIVE_DISCLOSURE: Record<
  MemoryBCompactionState,
  string
> = {
  none: "",
  compacted_no_loss: [
    "=== MEMORY B COMPACTION (MW1-S02) ===",
    "Conversational Memory B has been compacted to reduce replay footprint.",
    "Compacted context is non-authoritative; durable Project/LPS/HumanDecision remain Truth C only.",
    "This is not an exhaustive transcript.",
  ].join("\n"),
  compacted_with_loss: [
    "=== MEMORY B COMPACTION (MW1-S02) ===",
    "Conversational Memory B has been compacted; some prior conversational detail was omitted.",
    "Compacted context is non-authoritative; Truth C overrides Memory B.",
    "Do not treat the compacted summary as complete history, HumanDecision, authorization or Evidence.",
    "Use Truth C for governing state when Memory B loss is signaled.",
  ].join("\n"),
  stale_invalidated: [
    "=== MEMORY B COMPACTION STALE (MW1-S02) ===",
    "A prior compacted Memory B summary was invalidated because Truth C changed.",
    "The invalidated compacted summary is not replayed.",
    "Recent conversational Memory B items may still be available and are non-authoritative.",
    "Current Truth C overrides Memory B.",
    "Do not reconstruct missing transcript or governing decisions from Memory B.",
  ].join("\n"),
};

export const COMPACTION_PILOTE_NOTICE: Record<
  Exclude<MemoryBCompactionState, "none">,
  string
> = {
  compacted_no_loss:
    "Contexte conversationnel compacté — continuité non autoritaire ; état durable du projet via Truth C.",
  compacted_with_loss:
    "Contexte conversationnel compacté — une partie du contexte conversationnel n'est plus disponible. Truth C reste autoritaire.",
  stale_invalidated:
    "Le résumé conversationnel compacté précédent a été invalidé après évolution de l'état durable du projet. Des éléments conversationnels récents peuvent rester disponibles ; Truth C courant prévaut.",
};

/** Appended when a stale prior was excluded during a fresh current-revision compaction. */
export const STALE_PRIOR_INVALIDATED_COGNITIVE_ADDENDUM = [
  "=== MEMORY B STALE PRIOR EXCLUDED (MW1-S02-CORR-02) ===",
  "A prior compacted Memory B summary was invalidated because Truth C changed and was NOT carried into this compaction.",
  "Current compacted context derives only from currently supported raw Memory B under the current Truth C revision.",
  "Do not reconstruct invalidated prior Memory B premises, STOP, or decisions.",
].join("\n");

export const STALE_PRIOR_INVALIDATED_PILOTE_ADDENDUM =
  "Un résumé conversationnel antérieur a été invalidé après évolution de l'état durable du projet et n'a pas été reconduit. Truth C courant prévaut.";

export function buildInvalidatedPriorMeta(
  prior: MemoryBCompactionRecord,
): InvalidatedPriorCompactionMeta {
  return {
    generation: prior.generation,
    truthCRevision: prior.truthCRevision,
    summaryHash: contentHash(prior.summaryText),
    lossOccurred: prior.loss.occurred,
    hadGoverningContext:
      prior.loss.governingContextRetained ||
      prior.loss.governingContextExplicitLoss,
    invalidatedBecause: "truth_c_revision_changed",
  };
}

export function isCompactionRecord(
  item: AgentInputItem | MemoryBCompactionRecord,
): item is MemoryBCompactionRecord {
  return (
    typeof item === "object" &&
    item !== null &&
    (item as MemoryBCompactionRecord).type === "sfia_memory_b_compaction"
  );
}

export function truthCRevisionKey(rev: TruthCRevision): string {
  return `${rev.lpsId}:v${rev.lpsVersion}`;
}

export function truthCRevisionsMatch(
  a: TruthCRevision,
  b: TruthCRevision,
): boolean {
  return a.lpsId === b.lpsId && a.lpsVersion === b.lpsVersion;
}

export function extractItemText(item: AgentInputItem): string {
  if (!item || typeof item !== "object") return "";
  const anyItem = item as {
    type?: string;
    role?: string;
    content?: unknown;
  };
  if (anyItem.type !== "message") return "";
  const content = anyItem.content;
  if (typeof content === "string") return content;
  if (!Array.isArray(content)) return "";
  return content
    .map((part) => {
      if (typeof part === "string") return part;
      if (part && typeof part === "object" && "text" in part) {
        return String((part as { text?: string }).text ?? "");
      }
      return "";
    })
    .join("\n");
}

export function contentHash(text: string): string {
  return createHash("sha256").update(text).digest("hex").slice(0, 16);
}

export function containsGoverningMarker(text: string): boolean {
  return GOVERNING_MARKERS.test(text);
}

export function shouldCompactItemCount(
  conversationItemCount: number,
  policy: CompactionPolicy = DEFAULT_COMPACTION_POLICY,
): boolean {
  return conversationItemCount > policy.itemThreshold;
}

/**
 * Single source of partition truth for Memory B compaction.
 * C ∩ R = ∅ and C ∪ R = S.
 */
export function partitionMemoryBForCompaction(
  conversation: Array<{ seq: number; item: AgentInputItem }>,
  keepRecentCount: number,
): {
  toCompact: Array<{ seq: number; item: AgentInputItem }>;
  recent: Array<{ seq: number; item: AgentInputItem }>;
} {
  const keepRecent = Math.min(Math.max(0, keepRecentCount), conversation.length);
  return {
    toCompact: conversation.slice(0, conversation.length - keepRecent),
    recent: conversation.slice(conversation.length - keepRecent),
  };
}

export type ProvenanceCoverageFacts = {
  removedSourceCount: number;
  provenanceCoveredSourceCount: number;
  orphanedRemovedSourceCount: number;
  duplicateCoverageCount: number;
  coveredSourceSeqs: number[];
};

/** Exact raw-source coverage for a compaction partition (kind=raw entries). */
export function computeRawProvenanceCoverage(input: {
  removedSourceSeqs: number[];
  provenance: CompactionProvenanceEntry[];
}): ProvenanceCoverageFacts {
  const removed = [...input.removedSourceSeqs];
  const rawEntries = input.provenance.filter((p) => p.kind === "raw");
  const covered = rawEntries.map((p) => p.sourceSeq ?? p.seq);
  const coveredSet = new Set(covered);
  const removedSet = new Set(removed);
  const orphaned = removed.filter((s) => !coveredSet.has(s));
  const duplicates = covered.filter(
    (s, i) => covered.indexOf(s) !== i && removedSet.has(s),
  );
  return {
    removedSourceCount: removed.length,
    provenanceCoveredSourceCount: coveredSet.size,
    orphanedRemovedSourceCount: orphaned.length,
    duplicateCoverageCount: duplicates.length,
    coveredSourceSeqs: [...coveredSet].sort((a, b) => a - b),
  };
}

export function staleDisclosureMatchesReplaySemantics(input: {
  cognitiveText: string;
  piloteText: string;
  recentRawReplayed: boolean;
}): boolean {
  const cog = input.cognitiveText;
  const pil = input.piloteText;
  const claimsTruthCOnly =
    /Use only current message \+ current Truth C/i.test(cog) ||
    /s'appuie sur Truth C actuel uniquement/i.test(pil);
  if (input.recentRawReplayed && claimsTruthCOnly) return false;
  if (input.recentRawReplayed) {
    const cogOk =
      /Recent conversational Memory B items may still be available/i.test(cog) &&
      /invalidated compacted summary is not replayed/i.test(cog) &&
      /Current Truth C overrides Memory B/i.test(cog);
    const pilOk =
      /éléments conversationnels récents peuvent rester disponibles/i.test(pil) &&
      /Truth C courant prévaut/i.test(pil);
    return cogOk && pilOk;
  }
  return !claimsTruthCOnly || /may still be available/i.test(cog);
}

function itemRole(item: AgentInputItem): string {
  return typeof item === "object" && item !== null && "role" in item
    ? String((item as { role?: string }).role ?? "unknown")
    : "unknown";
}

function normalizePriorRecord(
  prior: MemoryBCompactionRecord | null | undefined,
): MemoryBCompactionRecord | null {
  if (!prior) return null;
  // Accept pre-CORR records (version 1) as lineage sources.
  return prior;
}

/**
 * Build compaction record from exact set C (items being replaced).
 * MUST NOT apply keepRecentCount again — partition already happened.
 *
 * CORR-02: pass priorRecord ONLY for same Truth C revision semantic inheritance.
 * Pass invalidatedPrior for cross-revision non-cognitive metadata (no semantic inherit).
 */
export function buildCompactionRecord(input: {
  /** Exact set C — already partitioned; do not re-slice keepRecent. */
  itemsToCompact: Array<{ seq: number; item: AgentInputItem }>;
  truthCRevision: TruthCRevision;
  policy?: CompactionPolicy;
  nowIso?: string;
  /** Same-revision semantic lineage inheritance (CORR-01). */
  priorRecord?: MemoryBCompactionRecord | null;
  /**
   * Cross-revision stale prior (CORR-02).
   * Never semantically inherited into summary/provenance/governing.
   */
  invalidatedPrior?: MemoryBCompactionRecord | null;
  /** @deprecated use itemsToCompact — kept for call-site migration safety */
  items?: Array<{ seq: number; item: AgentInputItem }>;
}): MemoryBCompactionRecord {
  const policy = input.policy ?? DEFAULT_COMPACTION_POLICY;
  const toCompact = input.itemsToCompact ?? input.items ?? [];
  const prior = normalizePriorRecord(input.priorRecord);
  const stalePrior = normalizePriorRecord(input.invalidatedPrior);
  if (prior && stalePrior) {
    throw new Error(
      "MW1-S02 CORR-02: priorRecord and invalidatedPrior are mutually exclusive",
    );
  }

  const lineageSource = prior ?? stalePrior;
  const generation = (lineageSource?.generation ?? 0) + 1;
  const inheritSemantic = Boolean(prior);

  const inheritedProvenance: CompactionProvenanceEntry[] = inheritSemantic
    ? (prior!.provenance ?? []).map((p, i) => ({
        ...p,
        seq: i,
        kind: "inherited" as const,
        generation: p.generation,
      }))
    : [];

  const newProvenance: CompactionProvenanceEntry[] = toCompact.map(
    ({ seq, item }, i) => {
      const text = extractItemText(item);
      return {
        seq: inheritedProvenance.length + i,
        role: itemRole(item),
        contentHash: contentHash(text),
        excerpt: text.slice(0, EXCERPT_LIMIT),
        generation,
        kind: "raw" as const,
        sourceSeq: seq,
      };
    },
  );

  const provenance = [...inheritedProvenance, ...newProvenance];

  const governingInDropped = toCompact.some(({ item }) =>
    containsGoverningMarker(extractItemText(item)),
  );
  const retainedLines: string[] = [];
  let itemTruncationOccurred = false;
  for (const { item } of toCompact) {
    const text = extractItemText(item).trim();
    if (!text) continue;
    if (containsGoverningMarker(text)) {
      const slice = text.slice(0, GOVERNING_SUMMARY_LIMIT);
      if (slice.length < text.length) itemTruncationOccurred = true;
      retainedLines.push(`[governing-context] ${slice}`);
    } else if (text.length > 20) {
      const slice = text.slice(0, RETAINED_SUMMARY_LIMIT);
      if (slice.length < text.length) itemTruncationOccurred = true;
      retainedLines.push(slice);
    } else {
      itemTruncationOccurred = true;
    }
  }

  const droppedCount = toCompact.length;
  const currentIntroducedLoss =
    droppedCount > 0 ||
    itemTruncationOccurred ||
    inheritSemantic ||
    Boolean(stalePrior);

  const summaryParts: string[] = [
    "[MW1-S02 COMPACTED MEMORY B — NON-AUTHORITATIVE — NOT EXHAUSTIVE]",
    `compaction-generation=${generation}`,
  ];
  if (inheritSemantic && prior) {
    summaryParts.push(
      `[inherited-compaction-g${prior.generation}]\n${prior.summaryText.slice(0, 400)}`,
    );
  }
  if (stalePrior) {
    summaryParts.push(
      "[stale-prior-excluded] Prior compacted Memory B invalidated by Truth C revision change — not carried forward.",
    );
  }
  summaryParts.push(
    retainedLines.length
      ? `Retained premises:\n${retainedLines.join("\n")}`
      : "Retained premises: (none extracted from newly compacted turns)",
  );
  summaryParts.push(
    `Omitted/replaced: ${droppedCount} raw conversational item(s) this generation; transcript not exhaustive.`,
  );
  summaryParts.push(
    "Truth C / LPS / HumanDecision remain authoritative — not this summary.",
  );

  let summaryText = summaryParts.join("\n");
  let summaryTruncated = false;
  if (summaryText.length > policy.maxSummaryChars) {
    summaryText = `${summaryText.slice(0, policy.maxSummaryChars)}… [truncated]`;
    summaryTruncated = true;
  }

  const lossOccurred =
    Boolean(stalePrior) ||
    (inheritSemantic && Boolean(prior?.loss.occurred)) ||
    currentIntroducedLoss ||
    summaryTruncated ||
    itemTruncationOccurred;

  const governingRetainedThisGen = governingInDropped
    ? retainedLines.some((l) => l.startsWith("[governing-context]"))
    : true;
  const governingExplicitLossThisGen =
    governingInDropped && !governingRetainedThisGen;

  // Cross-revision: NEVER inherit prior governing retention as current.
  const governingContextRetained = inheritSemantic
    ? Boolean(prior?.loss.governingContextRetained) || governingRetainedThisGen
    : governingRetainedThisGen;

  const governingContextExplicitLoss = inheritSemantic
    ? Boolean(prior?.loss.governingContextExplicitLoss) ||
      governingExplicitLossThisGen
    : governingExplicitLossThisGen ||
      Boolean(
        stalePrior &&
          (stalePrior.loss.governingContextRetained ||
            stalePrior.loss.governingContextExplicitLoss),
      );

  const droppedItemCount = inheritSemantic
    ? (prior?.loss.droppedItemCount ?? 0) + droppedCount
    : droppedCount;

  return {
    type: "sfia_memory_b_compaction",
    version: 2,
    generation,
    summaryText,
    provenance,
    loss: {
      occurred: lossOccurred,
      droppedItemCount,
      omittedExtent: stalePrior
        ? `${droppedCount} raw item(s) replaced under current Truth C; stale prior compaction excluded (Truth C revision changed); not exhaustive`
        : lossOccurred
          ? `${droppedCount} raw item(s) replaced this generation; prior loss=${Boolean(prior?.loss.occurred)}; not exhaustive`
          : "no loss signaled",
      governingContextRetained,
      governingContextExplicitLoss,
    },
    truthCRevision: input.truthCRevision,
    sourceSeqRange: {
      from: toCompact[0]?.seq ?? 0,
      to: toCompact[toCompact.length - 1]?.seq ?? 0,
    },
    nonAuthoritative: true,
    createdAtIso: input.nowIso ?? new Date(0).toISOString(),
    inheritedFromGeneration: inheritSemantic ? prior?.generation : undefined,
    invalidatedPriorCompaction: stalePrior
      ? buildInvalidatedPriorMeta(stalePrior)
      : undefined,
  };
}

export function compactionRecordToStoredItem(
  record: MemoryBCompactionRecord,
): AgentInputItem {
  return record as unknown as AgentInputItem;
}

export function parseStoredCompactionRecord(
  item: AgentInputItem,
): MemoryBCompactionRecord | null {
  if (isCompactionRecord(item as unknown as MemoryBCompactionRecord)) {
    const raw = item as unknown as MemoryBCompactionRecord & { version?: number };
    // Normalize pre-CORR version-1 records for lineage.
    if (!raw.version || raw.version < 2) {
      return {
        ...raw,
        version: 2,
        generation: raw.generation ?? 1,
        provenance: (raw.provenance ?? []).map((p, i) => ({
          seq: p.seq ?? i,
          role: p.role,
          contentHash: p.contentHash,
          excerpt: p.excerpt,
          generation: (p as CompactionProvenanceEntry).generation ?? 1,
          kind: (p as CompactionProvenanceEntry).kind ?? "raw",
          sourceSeq: (p as CompactionProvenanceEntry).sourceSeq ?? p.seq,
        })),
      };
    }
    return raw;
  }
  return null;
}

export type LoadedSessionRows = {
  compaction: MemoryBCompactionRecord | null;
  /** MW4 — non-replay grounding marker (may be null). */
  grounding: unknown | null;
  conversation: Array<{ seq: number; item: AgentInputItem }>;
};

const GROUNDING_REFS_TYPE = "sfia_grounding_refs_v1";

function isGroundingMarker(item: unknown): boolean {
  return (
    typeof item === "object" &&
    item !== null &&
    (item as { type?: string }).type === GROUNDING_REFS_TYPE
  );
}

export async function loadSessionRows(
  session: ProductSqliteSession,
): Promise<LoadedSessionRows> {
  const rows = session.listItemRows();
  let compaction: MemoryBCompactionRecord | null = null;
  let grounding: unknown | null = null;
  const conversation: Array<{ seq: number; item: AgentInputItem }> = [];
  for (const row of rows) {
    const parsed = JSON.parse(row.item_json) as AgentInputItem;
    const record = parseStoredCompactionRecord(parsed);
    if (record) {
      compaction = record;
      continue;
    }
    if (isGroundingMarker(parsed)) {
      grounding = parsed;
      continue;
    }
    conversation.push({ seq: row.seq, item: parsed });
  }
  return { compaction, grounding, conversation };
}

export function resolveReplayItems(input: {
  loaded: LoadedSessionRows;
  currentTruthCRevision: TruthCRevision;
}): { items: AgentInputItem[]; state: MemoryBCompactionState } {
  const { loaded, currentTruthCRevision } = input;
  const recent = loaded.conversation.map((r) => r.item);

  if (!loaded.compaction) {
    return { items: recent, state: "none" };
  }

  if (
    !truthCRevisionsMatch(loaded.compaction.truthCRevision, currentTruthCRevision)
  ) {
    // Stale summary invalidated; recent raw Memory B may still be replayed
    // (non-authoritative). Disclosures must match this behavior.
    return { items: recent, state: "stale_invalidated" };
  }

  const summaryMessage = userTextItem(loaded.compaction.summaryText);
  // Heuristic compaction is lossy; compacted_no_loss only if mechanically earned.
  const state: MemoryBCompactionState = loaded.compaction.loss.occurred
    ? "compacted_with_loss"
    : "compacted_no_loss";
  return { items: [summaryMessage, ...recent], state };
}

export async function applyCompactionIfNeeded(input: {
  session: ProductSqliteSession;
  truthCRevision: TruthCRevision;
  policy?: CompactionPolicy;
  nowIso?: string;
}): Promise<{
  applied: boolean;
  record: MemoryBCompactionRecord | null;
  stalePriorInvalidated: boolean;
}> {
  const policy = input.policy ?? DEFAULT_COMPACTION_POLICY;
  const loaded = await loadSessionRows(input.session);
  const count = loaded.conversation.length;
  if (!shouldCompactItemCount(count, policy)) {
    const stalePriorInvalidated = Boolean(
      loaded.compaction &&
        !truthCRevisionsMatch(
          loaded.compaction.truthCRevision,
          input.truthCRevision,
        ),
    );
    return {
      applied: false,
      record: loaded.compaction,
      stalePriorInvalidated,
    };
  }

  // Single partition — buildCompactionRecord must not re-apply keepRecent.
  const { toCompact, recent } = partitionMemoryBForCompaction(
    loaded.conversation,
    policy.keepRecentCount,
  );

  const prior = loaded.compaction;
  const priorCurrent = Boolean(
    prior &&
      truthCRevisionsMatch(prior.truthCRevision, input.truthCRevision),
  );
  const stalePriorInvalidated = Boolean(prior && !priorCurrent);

  const record = buildCompactionRecord({
    itemsToCompact: toCompact,
    truthCRevision: input.truthCRevision,
    policy,
    nowIso: input.nowIso,
    priorRecord: priorCurrent ? prior : null,
    invalidatedPrior: stalePriorInvalidated ? prior : null,
  });

  await input.session.replaceItemsAtomically([
    compactionRecordToStoredItem(record),
    // MW4 — preserve non-authoritative grounding refs across compaction.
    ...(loaded.grounding
      ? [loaded.grounding as AgentInputItem]
      : []),
    ...recent.map((r) => r.item),
  ]);

  return { applied: true, record, stalePriorInvalidated };
}

export async function prepareMemoryBForTurn(input: {
  session: ProductSqliteSession;
  truthCRevision: TruthCRevision;
  policy?: CompactionPolicy;
  nowIso?: string;
}): Promise<MemoryBCompactionDetails> {
  const loadedBefore = await loadSessionRows(input.session);
  const rawBefore =
    loadedBefore.conversation.length + (loadedBefore.compaction ? 1 : 0);

  const compactResult = await applyCompactionIfNeeded(input);
  const loaded = await loadSessionRows(input.session);
  const replay = resolveReplayItems({
    loaded,
    currentTruthCRevision: input.truthCRevision,
  });

  const stalePriorInvalidated =
    compactResult.stalePriorInvalidated ||
    replay.state === "stale_invalidated" ||
    Boolean(loaded.compaction?.invalidatedPriorCompaction);

  return {
    state: replay.state,
    record: compactResult.record ?? loaded.compaction,
    replayItemCount: replay.items.length,
    rawItemCount: rawBefore,
    compactionAppliedThisTurn: compactResult.applied,
    stalePriorInvalidated,
  };
}

export function appendMemoryBCompactionDisclosure(
  systemInstructions: string,
  state: MemoryBCompactionState,
  opts?: { stalePriorInvalidated?: boolean },
): string {
  let block = COMPACTION_COGNITIVE_DISCLOSURE[state];
  if (
    opts?.stalePriorInvalidated &&
    state !== "stale_invalidated" &&
    state !== "none"
  ) {
    block = block
      ? `${block}\n\n${STALE_PRIOR_INVALIDATED_COGNITIVE_ADDENDUM}`
      : STALE_PRIOR_INVALIDATED_COGNITIVE_ADDENDUM;
  }
  if (!block) return systemInstructions;
  return `${systemInstructions.trim()}\n\n${block}`;
}

export function memoryBCompactionPiloteNotice(
  state: MemoryBCompactionState,
  opts?: { stalePriorInvalidated?: boolean },
): string | null {
  if (state === "none" && !opts?.stalePriorInvalidated) return null;
  const base =
    state === "none" ? null : COMPACTION_PILOTE_NOTICE[state];
  if (
    opts?.stalePriorInvalidated &&
    state !== "stale_invalidated"
  ) {
    return base
      ? `${base} ${STALE_PRIOR_INVALIDATED_PILOTE_ADDENDUM}`
      : STALE_PRIOR_INVALIDATED_PILOTE_ADDENDUM;
  }
  return base;
}

/**
 * Session view with pre-resolved replay items (compaction / stale applied).
 * Same Agents SDK Session contract — no second Runner.
 */
export class MemoryBSessionView implements Session {
  constructor(
    private readonly inner: ProductSqliteSession,
    private readonly replayItems: AgentInputItem[],
  ) {}

  async getSessionId(): Promise<string> {
    return this.inner.getSessionId();
  }

  async getItems(limit?: number): Promise<AgentInputItem[]> {
    let items = this.replayItems;
    if (limit !== undefined) {
      if (limit <= 0) return [];
      items = items.slice(-limit);
    }
    return items.map((i) => structuredClone(i));
  }

  async addItems(items: AgentInputItem[]): Promise<void> {
    return this.inner.addItems(items);
  }

  async popItem(): Promise<AgentInputItem | undefined> {
    return this.inner.popItem();
  }

  async clearSession(): Promise<void> {
    return this.inner.clearSession();
  }

  /** Underlying store for inspection/tests. */
  getInnerSession(): ProductSqliteSession {
    return this.inner;
  }
}

export async function createMemoryBSessionView(input: {
  session: ProductSqliteSession;
  truthCRevision: TruthCRevision;
  policy?: CompactionPolicy;
  nowIso?: string;
}): Promise<{
  view: MemoryBSessionView;
  details: MemoryBCompactionDetails;
  replayItems: AgentInputItem[];
}> {
  const details = await prepareMemoryBForTurn(input);
  const loaded = await loadSessionRows(input.session);
  const replay = resolveReplayItems({
    loaded,
    currentTruthCRevision: input.truthCRevision,
  });
  return {
    view: new MemoryBSessionView(input.session, replay.items),
    details,
    replayItems: replay.items,
  };
}
