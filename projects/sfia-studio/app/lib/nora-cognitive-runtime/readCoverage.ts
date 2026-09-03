/**
 * MW4-S03 / CORR-MW4-01A — Multi-document read coverage with honest partiality.
 *
 * Derives coverage from the REAL ToolRouter/EventSink contract:
 * - toolName, status, summary, source.pathOrRef
 * - git_local_read_file summary: `read <path> L<start>-<end>/<total> (...) [hasMore]`
 * - pathOrRef may be `<path>#L<start>-<end>`
 *
 * Search ≠ read. Only git_local_read_file establishes document read coverage.
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
  startLine?: number;
  endLine?: number;
  totalLines?: number;
  hasMore?: boolean;
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

const READ_SUMMARY_RE =
  /^read\s+(\S+)\s+L(\d+)-(\d+)\/(\d+)\s*(?:\(([^)]*)\))?\s*(hasMore)?/i;

const PATH_RANGE_RE = /^(.*)#L(\d+)-(\d+)$/;

export type ParsedReadRange = {
  documentPath: string;
  startLine: number;
  endLine: number;
  totalLines?: number;
  hasMore: boolean;
  truncated: boolean;
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

  const fromSummary = READ_SUMMARY_RE.exec(summary);
  if (fromSummary) {
    const documentPath = fromSummary[1]!;
    const startLine = Number(fromSummary[2]);
    const endLine = Number(fromSummary[3]);
    const totalLines = Number(fromSummary[4]);
    const paren = (fromSummary[5] ?? "").toLowerCase();
    const hasMoreToken = Boolean(fromSummary[6]);
    const truncated =
      /\btruncat/.test(paren) || /\bcapped\b/.test(paren) || hasMoreToken;
    return {
      documentPath,
      startLine,
      endLine,
      totalLines,
      hasMore: hasMoreToken || truncated || endLine < totalLines,
      truncated,
    };
  }

  const fromPath = PATH_RANGE_RE.exec(pathOrRef);
  if (fromPath) {
    return {
      documentPath: fromPath[1]!,
      startLine: Number(fromPath[2]),
      endLine: Number(fromPath[3]),
      hasMore: false,
      truncated: false,
    };
  }

  if (pathOrRef && !pathOrRef.includes(":")) {
    // Bare path without structural range — cannot prove completeness.
    return {
      documentPath: pathOrRef,
      startLine: 1,
      endLine: 1,
      hasMore: true,
      truncated: false,
    };
  }

  return null;
}

export function classifyGitLocalReadCompleteness(
  parsed: ParsedReadRange,
): "full" | "partial" {
  const { startLine, endLine, totalLines, hasMore, truncated } = parsed;
  if (truncated || hasMore) return "partial";
  if (typeof totalLines !== "number" || !Number.isFinite(totalLines)) {
    // pathOrRef-only range without total → cannot prove full document.
    return "partial";
  }
  // CORR-01A hard rule: FULL only when L1-total and no hasMore/truncation.
  // L100-N/N is PARTIAL even when endLine === totalLines.
  if (startLine === 1 && endLine === totalLines) return "full";
  return "partial";
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
  ];
  if (parsed.hasMore) signals.push("hasMore");
  if (parsed.truncated) signals.push("truncated");
  if (coverage === "partial" && parsed.endLine === parsed.totalLines && parsed.startLine > 1) {
    signals.push("suffix_range_not_full");
  }

  return {
    pathOrRef: pathOrRef || parsed.documentPath,
    documentPath: parsed.documentPath,
    coverage,
    startLine: parsed.startLine,
    endLine: parsed.endLine,
    totalLines: parsed.totalLines,
    hasMore: parsed.hasMore,
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
