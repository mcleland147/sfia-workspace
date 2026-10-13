/**
 * MW4-S03 / CORR-MW4-01A — Multi-document read coverage with honest partiality.
 *
 * Derives coverage from the REAL ToolRouter/EventSink contract:
 * - toolName, status, summary, source.pathOrRef
 * - git_local_read_file summary (current):
 *   `read <path> L<reqStart>-<reqEnd>/<total> returned L<retStart>-<retEnd> (N chars) [truncated] [documentHasMore] [hasMore]`
 * - legacy summary still accepted: `read <path> L<start>-<end>/<total> (...) [hasMore]`
 * - pathOrRef may be `<path>#L<start>-<end>` (prefer returned range when present)
 *
 * Search ≠ read. Only git_local_read_file establishes document read coverage.
 *
 * hasMore ≠ truncated:
 * - truncated = requested range content was cut by size caps
 * - documentHasMore = lines exist after the requested endLine
 */

export type ReadCoverageKind =
  | "full"
  | "partial"
  | "failed"
  | "denied"
  | "absent";

export type ReadCoverageFact = {
  pathOrRef: string;
  /** Bare path without #L range suffix when known. */
  documentPath?: string;
  coverage: ReadCoverageKind;
  /** Requested range start (when known). */
  startLine?: number;
  /** Requested range end (when known). */
  endLine?: number;
  /** Returned range start (honest payload bounds). */
  returnedStartLine?: number;
  /** Returned range end (honest payload bounds). */
  returnedEndLine?: number;
  completeLineCount?: number;
  partialLineNumber?: number | null;
  lineExceedsCap?: boolean;
  totalLines?: number;
  hasMore?: boolean;
  truncated?: boolean;
  documentHasMore?: boolean;
  nextStartLineHint?: number | null;
  /** Optional signals observed in summary/pathOrRef. */
  signals?: string[];
  /** current_turn vs remembered prior-turn continuity. */
  origin?: "current_turn" | "remembered_prior";
};

export type ReadCoverageAggregate = {
  facts: ReadCoverageFact[];
  overall: ReadCoverageKind | "none" | "mixed_partial";
};

/** Sole primitive that establishes document read coverage for MW4-S03. */
export const MW4_DOCUMENT_READ_TOOL = "git_local_read_file" as const;

/** Current summary with returned range + explicit flags. */
const READ_SUMMARY_RETURNED_RE =
  /^read\s+(\S+)\s+L(\d+)-(\d+)\/(\d+)\s+returned\s+L(\d+)-(\d+)\s*\(([^)]*)\)\s*(.*)$/i;

/** Current summary when zero complete lines were credited. */
const READ_SUMMARY_RETURNED_NONE_RE =
  /^read\s+(\S+)\s+L(\d+)-(\d+)\/(\d+)\s+returned\s+none\s*\(([^)]*)\)\s*(.*)$/i;

/** Legacy summary without returned range. */
const READ_SUMMARY_LEGACY_RE =
  /^read\s+(\S+)\s+L(\d+)-(\d+)\/(\d+)\s*(?:\(([^)]*)\))?\s*(.*)$/i;

const PATH_RANGE_RE = /^(.*)#L(\d+)-(\d+)$/;

export type ParsedReadRange = {
  documentPath: string;
  /** Requested start. */
  startLine: number;
  /** Requested end. */
  endLine: number;
  returnedStartLine: number;
  returnedEndLine: number;
  completeLineCount?: number;
  partialLineNumber?: number | null;
  lineExceedsCap?: boolean;
  totalLines?: number;
  hasMore: boolean;
  truncated: boolean;
  documentHasMore: boolean;
  nextStartLineHint?: number | null;
};

/**
 * Parse structural range from git_local_read_file summary and/or pathOrRef.
 */
export function parseGitLocalReadCoverageSignals(input: {
  summary?: string | null;
  pathOrRef?: string | null;
}): ParsedReadRange | null {
  const summary = (input.summary ?? "").trim();
  const pathOrRef = (input.pathOrRef ?? "").trim();

  const fromReturnedNone = READ_SUMMARY_RETURNED_NONE_RE.exec(summary);
  if (fromReturnedNone) {
    const documentPath = fromReturnedNone[1]!;
    const startLine = Number(fromReturnedNone[2]);
    const endLine = Number(fromReturnedNone[3]);
    const totalLines = Number(fromReturnedNone[4]);
    const paren = (fromReturnedNone[5] ?? "").toLowerCase();
    const flags = (fromReturnedNone[6] ?? "").toLowerCase();
    const truncated =
      /\btruncated\b/.test(flags) ||
      /\btruncat/.test(paren) ||
      /\bcapped\b/.test(paren) ||
      true;
    const documentHasMore =
      /\bdocumenthasmore\b/.test(flags) || endLine < totalLines;
    const lineExceedsCap = /\blineexceedscap\b/.test(flags);
    const partialMatch = /partialline:(\d+)/i.exec(flags);
    const partialLineNumber = partialMatch
      ? Number(partialMatch[1])
      : startLine;
    const nextStartLineHint = lineExceedsCap
      ? startLine < totalLines
        ? startLine + 1
        : null
      : partialLineNumber;
    return {
      documentPath,
      startLine,
      endLine,
      returnedStartLine: startLine,
      returnedEndLine: startLine - 1,
      completeLineCount: 0,
      partialLineNumber,
      lineExceedsCap,
      totalLines,
      hasMore: true,
      truncated,
      documentHasMore,
      nextStartLineHint,
    };
  }

  const fromReturned = READ_SUMMARY_RETURNED_RE.exec(summary);
  if (fromReturned) {
    const documentPath = fromReturned[1]!;
    const startLine = Number(fromReturned[2]);
    const endLine = Number(fromReturned[3]);
    const totalLines = Number(fromReturned[4]);
    const returnedStartLine = Number(fromReturned[5]);
    const returnedEndLine = Number(fromReturned[6]);
    const paren = (fromReturned[7] ?? "").toLowerCase();
    const flags = (fromReturned[8] ?? "").toLowerCase();
    const truncated =
      /\btruncated\b/.test(flags) ||
      /\btruncat/.test(paren) ||
      /\bcapped\b/.test(paren);
    const documentHasMore =
      /\bdocumenthasmore\b/.test(flags) ||
      (!truncated && endLine < totalLines);
    const hasMoreToken = /\bhasmore\b/.test(flags);
    const hasMore =
      hasMoreToken || truncated || documentHasMore || returnedEndLine < totalLines;
    const lineExceedsCap = /\blineexceedscap\b/.test(flags);
    const partialMatch = /partialline:(\d+)/i.exec(flags);
    const partialLineNumber = partialMatch ? Number(partialMatch[1]) : null;
    const completeLineCount =
      returnedEndLine >= returnedStartLine
        ? returnedEndLine - returnedStartLine + 1
        : 0;
    const nextStartLineHint =
      partialLineNumber != null
        ? partialLineNumber
        : returnedEndLine < totalLines
          ? returnedEndLine + 1
          : null;
    return {
      documentPath,
      startLine,
      endLine,
      returnedStartLine,
      returnedEndLine,
      completeLineCount,
      partialLineNumber,
      lineExceedsCap,
      totalLines,
      hasMore,
      truncated,
      documentHasMore,
      nextStartLineHint,
    };
  }

  const fromLegacy = READ_SUMMARY_LEGACY_RE.exec(summary);
  if (fromLegacy) {
    const documentPath = fromLegacy[1]!;
    const startLine = Number(fromLegacy[2]);
    const endLine = Number(fromLegacy[3]);
    const totalLines = Number(fromLegacy[4]);
    const paren = (fromLegacy[5] ?? "").toLowerCase();
    const flags = (fromLegacy[6] ?? "").toLowerCase();
    const hasMoreToken = /\bhasmore\b/.test(flags);
    // Explicit truncation only — do NOT treat bare hasMore as truncated.
    const truncated =
      /\btruncated\b/.test(flags) ||
      /\btruncat/.test(paren) ||
      /\bcapped\b/.test(paren) ||
      // Legacy L1-total + hasMore implies content cut (range claimed full).
      (hasMoreToken && endLine >= totalLines && startLine === 1);
    const documentHasMore =
      /\bdocumenthasmore\b/.test(flags) ||
      (!truncated && endLine < totalLines) ||
      (hasMoreToken && endLine < totalLines && !truncated);
    const hasMore =
      hasMoreToken || truncated || documentHasMore || endLine < totalLines;
    return {
      documentPath,
      startLine,
      endLine,
      // Legacy: cannot prove returned ≠ requested — treat requested as upper bound.
      returnedStartLine: startLine,
      returnedEndLine: endLine,
      totalLines,
      hasMore,
      truncated,
      documentHasMore,
      nextStartLineHint: endLine < totalLines ? endLine + 1 : null,
    };
  }

  const fromPath = PATH_RANGE_RE.exec(pathOrRef);
  if (fromPath) {
    const startLine = Number(fromPath[2]);
    const endLine = Number(fromPath[3]);
    return {
      documentPath: fromPath[1]!,
      startLine,
      endLine,
      returnedStartLine: startLine,
      returnedEndLine: endLine,
      hasMore: false,
      truncated: false,
      documentHasMore: false,
    };
  }

  if (pathOrRef && !pathOrRef.includes(":")) {
    // Bare path without structural range — cannot prove completeness.
    return {
      documentPath: pathOrRef,
      startLine: 1,
      endLine: 1,
      returnedStartLine: 1,
      returnedEndLine: 1,
      hasMore: true,
      truncated: false,
      documentHasMore: true,
    };
  }

  return null;
}

export function classifyGitLocalReadCompleteness(
  parsed: ParsedReadRange,
): "full" | "partial" {
  const {
    returnedStartLine,
    returnedEndLine,
    totalLines,
    hasMore,
    truncated,
    documentHasMore,
  } = parsed;
  if (truncated || documentHasMore || hasMore) return "partial";
  if (typeof totalLines !== "number" || !Number.isFinite(totalLines)) {
    // pathOrRef-only range without total → cannot prove full document.
    return "partial";
  }
  // CORR-01A hard rule: FULL only when returned L1-total and no truncation/more.
  if (returnedStartLine === 1 && returnedEndLine === totalLines) return "full";
  return "partial";
}

/**
 * Honest union of *returned* line spans per document (not requested ranges).
 * Never invents completeness percentages.
 */
export function unionReturnedLineSpans(facts: ReadCoverageFact[]): Array<{
  documentPath: string;
  spans: Array<{ start: number; end: number }>;
  totalLines?: number;
  provenFull: boolean;
}> {
  const byDoc = new Map<
    string,
    { spans: Array<{ start: number; end: number }>; totalLines?: number }
  >();
  for (const fact of facts) {
    if (fact.coverage !== "full" && fact.coverage !== "partial") continue;
    const doc = (fact.documentPath ?? fact.pathOrRef).trim();
    if (!doc) continue;
    const start = fact.returnedStartLine ?? fact.startLine;
    const end = fact.returnedEndLine ?? fact.endLine;
    if (
      typeof start !== "number" ||
      typeof end !== "number" ||
      !Number.isFinite(start) ||
      !Number.isFinite(end) ||
      end < start ||
      (typeof fact.completeLineCount === "number" && fact.completeLineCount <= 0)
    ) {
      // Empty / non-proven span (e.g. mid-line cut with 0 complete lines).
      continue;
    }
    // Truncated facts still contribute the returned span only.
    const entry = byDoc.get(doc) ?? { spans: [], totalLines: fact.totalLines };
    if (typeof fact.totalLines === "number") entry.totalLines = fact.totalLines;
    entry.spans.push({ start, end });
    byDoc.set(doc, entry);
  }

  const out: Array<{
    documentPath: string;
    spans: Array<{ start: number; end: number }>;
    totalLines?: number;
    provenFull: boolean;
  }> = [];

  for (const [documentPath, entry] of byDoc) {
    const sorted = [...entry.spans].sort((a, b) => a.start - b.start);
    const merged: Array<{ start: number; end: number }> = [];
    for (const span of sorted) {
      const last = merged[merged.length - 1];
      if (!last || span.start > last.end + 1) {
        merged.push({ ...span });
      } else {
        last.end = Math.max(last.end, span.end);
      }
    }
    const totalLines = entry.totalLines;
    const docFacts = facts.filter(
      (f) => (f.documentPath ?? f.pathOrRef).trim() === documentPath,
    );
    const anyTruncated = docFacts.some((f) => f.truncated === true);
    const provenFull =
      typeof totalLines === "number" &&
      !anyTruncated &&
      merged.length === 1 &&
      merged[0]!.start === 1 &&
      merged[0]!.end === totalLines;
    out.push({ documentPath, spans: merged, totalLines, provenFull });
  }
  return out;
}

/**
 * Infer coverage for a single tool event row against the real EventSink shape.
 */
export function deriveReadCoverageFromToolEvent(input: {
  toolName: string;
  status: string;
  pathOrRef: string | null;
  summary?: string | null;
  detailText?: string | null;
}): ReadCoverageFact | null {
  const toolName = input.toolName.trim();

  // Search / status / diff / metadata MUST NOT establish document read coverage.
  if (toolName !== MW4_DOCUMENT_READ_TOOL) {
    return null;
  }

  const pathOrRef = (input.pathOrRef ?? "").trim();
  const summary = input.summary ?? "";

  if (input.status === "denied") {
    return {
      pathOrRef: pathOrRef || `(unnamed:${toolName})`,
      documentPath: pathOrRef || undefined,
      coverage: "denied",
      signals: ["tool_denied"],
      origin: "current_turn",
    };
  }
  if (input.status === "failed") {
    return {
      pathOrRef: pathOrRef || `(unnamed:${toolName})`,
      documentPath: pathOrRef || undefined,
      coverage: "failed",
      signals: ["tool_failed"],
      origin: "current_turn",
    };
  }
  if (input.status !== "succeeded") {
    return {
      pathOrRef: pathOrRef || `(unnamed:${toolName})`,
      documentPath: pathOrRef || undefined,
      coverage: "absent",
      signals: [`status:${input.status}`],
      origin: "current_turn",
    };
  }

  if (!pathOrRef && !summary.trim()) {
    return {
      pathOrRef: `(unnamed:${toolName})`,
      coverage: "absent",
      signals: ["missing_pathOrRef"],
      origin: "current_turn",
    };
  }

  const parsed = parseGitLocalReadCoverageSignals({
    summary,
    pathOrRef: pathOrRef || null,
  });
  if (!parsed) {
    return {
      pathOrRef: pathOrRef || `(unnamed:${toolName})`,
      coverage: "absent",
      signals: ["unparseable_read_shape"],
      origin: "current_turn",
    };
  }

  const coverage = classifyGitLocalReadCompleteness(parsed);
  const signals: string[] = [
    `L${parsed.startLine}-${parsed.endLine}${
      typeof parsed.totalLines === "number" ? `/${parsed.totalLines}` : ""
    }`,
    `returned L${parsed.returnedStartLine}-${parsed.returnedEndLine}`,
  ];
  if (parsed.hasMore) signals.push("hasMore");
  if (parsed.truncated) signals.push("truncated");
  if (parsed.documentHasMore) signals.push("documentHasMore");
  if (
    coverage === "partial" &&
    parsed.returnedEndLine === parsed.totalLines &&
    parsed.returnedStartLine > 1
  ) {
    signals.push("suffix_range_not_full");
  }

  return {
    pathOrRef: pathOrRef || parsed.documentPath,
    documentPath: parsed.documentPath,
    coverage,
    startLine: parsed.startLine,
    endLine: parsed.endLine,
    returnedStartLine: parsed.returnedStartLine,
    returnedEndLine: parsed.returnedEndLine,
    completeLineCount: parsed.completeLineCount,
    partialLineNumber: parsed.partialLineNumber,
    lineExceedsCap: parsed.lineExceedsCap,
    totalLines: parsed.totalLines,
    hasMore: parsed.hasMore,
    truncated: parsed.truncated,
    documentHasMore: parsed.documentHasMore,
    nextStartLineHint: parsed.nextStartLineHint,
    signals,
    origin: "current_turn",
  };
}

export function aggregateReadCoverage(
  facts: ReadCoverageFact[],
): ReadCoverageAggregate {
  if (facts.length === 0) {
    return { facts: [], overall: "none" };
  }
  const kinds = new Set(facts.map((f) => f.coverage));
  if (kinds.size === 1) {
    return { facts, overall: facts[0]!.coverage };
  }
  if (kinds.has("partial") || kinds.size > 1) {
    return { facts, overall: "mixed_partial" };
  }
  return { facts, overall: "partial" };
}

export function buildReadCoverageDisclosure(
  aggregate: ReadCoverageAggregate,
  opts?: { title?: string; rememberedPrior?: boolean },
): string {
  if (aggregate.overall === "none" || aggregate.facts.length === 0) {
    return "";
  }

  const title =
    opts?.title ??
    (opts?.rememberedPrior
      ? "=== REMEMBERED PRIOR-TURN READ COVERAGE (MW4-S03 / CORR-01B) ==="
      : "=== CURRENT TURN READ COVERAGE / PARTIALITY (MW4-S03) ===");

  const lines = [
    title,
    "Do not claim full corpus completeness unless every referenced path was fully read.",
    opts?.rememberedPrior
      ? "Prior coverage is non-authoritative continuity — NOT a current revalidation of source completeness."
      : "Coverage below is derived from this turn's ToolRouter/EventSink facts.",
    `Overall coverage: ${aggregate.overall === "mixed_partial" ? "partial (mixed)" : aggregate.overall}`,
  ];

  for (const fact of aggregate.facts) {
    const signal =
      fact.signals && fact.signals.length > 0
        ? ` [${fact.signals.join(", ")}]`
        : "";
    const origin =
      fact.origin === "remembered_prior" ? " (remembered_prior)" : "";
    lines.push(`- ${fact.pathOrRef}: ${fact.coverage}${origin}${signal}`);
  }

  if (
    aggregate.overall === "partial" ||
    aggregate.overall === "mixed_partial" ||
    aggregate.facts.some((f) => f.coverage !== "full")
  ) {
    lines.push(
      "Partial / failed / denied / absent reads must be stated explicitly — refuse false completeness.",
    );
  }

  if (opts?.rememberedPrior) {
    lines.push(
      "A prior full read does NOT mean the source is currently revalidated as complete unless a current-turn full reread is established.",
    );
  }

  return lines.join("\n");
}

export function appendReadCoverageDisclosure(
  systemInstructions: string,
  disclosure: string,
): string {
  const block = disclosure.trim();
  if (!block) return systemInstructions;
  return `${systemInstructions.trim()}\n\n${block}`;
}

/** Map aggregate overall to grounding session coverage kind. */
export function overallToGroundingCoverageKind(
  overall: ReadCoverageAggregate["overall"],
): "full" | "partial" | "failed" | "denied" | "absent" | "none" {
  if (overall === "none") return "none";
  if (overall === "mixed_partial") return "partial";
  return overall;
}

/**
 * Combine current-turn facts with remembered prior coverage.
 * Current-turn facts for a document path supersede remembered entries.
 */
export function mergeCurrentAndRememberedCoverage(input: {
  current: ReadCoverageFact[];
  remembered: ReadCoverageFact[];
}): {
  currentAggregate: ReadCoverageAggregate;
  rememberedAggregate: ReadCoverageAggregate;
  combinedDisclosure: string;
} {
  const currentAggregate = aggregateReadCoverage(input.current);
  const currentDocs = new Set(
    input.current
      .map((f) => (f.documentPath ?? f.pathOrRef).trim())
      .filter(Boolean),
  );
  const rememberedRemaining = input.remembered
    .filter((f) => {
      const key = (f.documentPath ?? f.pathOrRef).trim();
      return key.length > 0 && !currentDocs.has(key);
    })
    .map((f) => ({ ...f, origin: "remembered_prior" as const }));
  const rememberedAggregate = aggregateReadCoverage(rememberedRemaining);

  const parts = [
    buildReadCoverageDisclosure(currentAggregate),
    buildReadCoverageDisclosure(rememberedAggregate, {
      rememberedPrior: true,
    }),
  ].filter((s) => s.trim().length > 0);

  return {
    currentAggregate,
    rememberedAggregate,
    combinedDisclosure: parts.join("\n\n"),
  };
}
