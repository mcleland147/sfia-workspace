/**
 * Journal of sources actually returned by D3 tools this turn.
 * A tool-call count alone never proves CONSULTED — only concrete refs + coverage.
 */

import type { InvestigationSourceRef, SourceCoverage } from "./investigation-state";
import type { ToolCoverage } from "./d4-read-tools";

export type ToolSourceJournal = {
  entries: InvestigationSourceRef[];
  /** Fired when a concrete source is recorded — use for mid-turn OBSERVED activity. */
  onRecord?: (entry: InvestigationSourceRef) => void;
};

export function createToolSourceJournal(
  opts?: { onRecord?: (entry: InvestigationSourceRef) => void },
): ToolSourceJournal {
  return { entries: [], onRecord: opts?.onRecord };
}

export function mapToolCoverageToSource(coverage: ToolCoverage | string): SourceCoverage {
  switch (coverage) {
    case "COMPLETE":
      return "CONSULTED";
    case "PARTIAL":
      return "PARTIAL";
    case "STALE":
      return "STALE";
    case "DENIED":
      return "DENIED";
    case "NOT_FOUND":
    case "EMPTY":
      return "DISCOVERED";
    default:
      return "UNKNOWN";
  }
}

export function recordToolSource(
  journal: ToolSourceJournal | null | undefined,
  entry: {
    kind: InvestigationSourceRef["kind"];
    ref: string;
    coverage: ToolCoverage | SourceCoverage | string;
    title?: string;
    versionOrSha?: string | null;
    notes?: string;
  },
): void {
  if (!journal || !entry.ref) return;
  const coverage =
    entry.coverage === "CONSULTED" ||
    entry.coverage === "VERIFIED" ||
    entry.coverage === "DISCOVERED" ||
    entry.coverage === "PARTIAL" ||
    entry.coverage === "STALE" ||
    entry.coverage === "DENIED" ||
    entry.coverage === "CONTRADICTORY" ||
    entry.coverage === "UNKNOWN"
      ? (entry.coverage as SourceCoverage)
      : mapToolCoverageToSource(entry.coverage);
  // Never upgrade UNKNOWN from empty counters.
  if (!entry.ref.trim()) return;
  const existing = journal.entries.find((e) => e.kind === entry.kind && e.ref === entry.ref);
  if (existing) {
    // C15: coverage is current observation, not a monotonic upgrade-only lattice.
    // A previously CONSULTED source may become STALE / DENIED / CONTRADICTORY / PARTIAL.
    const prev = existing.coverage;
    existing.coverage = coverage;
    if (entry.title) existing.title = entry.title;
    if (entry.versionOrSha !== undefined) existing.versionOrSha = entry.versionOrSha;
    if (entry.notes || prev !== coverage) {
      existing.notes = [
        entry.notes,
        prev !== coverage ? `coverage:${prev}->${coverage}` : null,
      ]
        .filter(Boolean)
        .join("; ");
    }
    try {
      journal.onRecord?.(existing);
    } catch {
      /* observational */
    }
    return;
  }
  const recorded: InvestigationSourceRef = {
    kind: entry.kind,
    ref: entry.ref,
    title: entry.title,
    versionOrSha: entry.versionOrSha ?? null,
    coverage,
    notes: entry.notes,
  };
  journal.entries.push(recorded);
  try {
    journal.onRecord?.(recorded);
  } catch {
    /* observational sink must never break tool execution */
  }
}
