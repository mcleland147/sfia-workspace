/**
 * ML5 continuity (B.8) — deterministic activity counters for Travail/Projet.
 * One row per document identity; révisions do not inflate the library count.
 */

import { editorialDisplayBullet } from "@/domains/knowledge/journal-editorial";

export type DecisionProjectionRow = {
  id: string;
  state: string;
  statement: string;
  supersedesDecisionId?: string | null;
  kind?: string;
};

/**
 * A decision is superseded only when an APPLICABLE successor carries supersedesDecisionId.
 * Non-APPLICABLE rows (REVISED / FAILED lineage) must not zero activity counters (MaintiPlan).
 */
export function buildSupersededDecisionIds<T extends DecisionProjectionRow>(rows: T[]): Set<string> {
  const out = new Set<string>();
  for (const d of rows) {
    if (d.state === "APPLICABLE" && d.supersedesDecisionId) {
      out.add(d.supersedesDecisionId);
    }
  }
  return out;
}

export function filterApplicableHumanDecisions<T extends DecisionProjectionRow>(
  rows: T[],
  opts?: { kinds?: string[] },
): T[] {
  const superseded = buildSupersededDecisionIds(rows);
  return rows.filter((d) => {
    if (d.state !== "APPLICABLE") return false;
    if (superseded.has(d.id)) return false;
    if (opts?.kinds?.length && d.kind && !opts.kinds.includes(d.kind)) return false;
    return true;
  });
}

/**
 * E3-facing compact label — prefer Nora-qualified canonicalTitle from provenance
 * (E1-REL-04). Fallback editorial truncation for historical rows without title.
 * No LLM call; no schema migration.
 */
export function openPointShortTitle(
  statement: string,
  maxLen = 72,
  opts?: { canonicalTitle?: string | null; provenanceJson?: string | null },
): string {
  const fromOpt = opts?.canonicalTitle?.trim();
  if (fromOpt) return editorialDisplayBullet(fromOpt, maxLen);
  if (opts?.provenanceJson?.trim()) {
    try {
      const parsed = JSON.parse(opts.provenanceJson) as { canonicalTitle?: unknown };
      if (typeof parsed.canonicalTitle === "string" && parsed.canonicalTitle.trim()) {
        return editorialDisplayBullet(parsed.canonicalTitle.trim(), maxLen);
      }
    } catch {
      /* ignore malformed provenance */
    }
  }
  return editorialDisplayBullet(statement, maxLen);
}

export type DocumentListRow = {
  document?: { id: string; title?: string } | null;
};

export function countProjectLibraryDocuments(documents: DocumentListRow[]): number {
  const seen = new Set<string>();
  for (const d of documents) {
    const id = d.document?.id;
    if (id) seen.add(id);
  }
  return seen.size;
}

export function projectLibraryDocumentExamples(
  documents: DocumentListRow[],
  limit = 2,
): Array<{ id: string; title: string }> {
  const seen = new Set<string>();
  const out: Array<{ id: string; title: string }> = [];
  for (const d of documents) {
    const id = d.document?.id;
    if (!id || seen.has(id)) continue;
    seen.add(id);
    out.push({ id, title: d.document!.title ?? "Sans titre" });
    if (out.length >= limit) break;
  }
  return out;
}

export function openKnowledgePoints<T extends { status: string }>(points: T[]): T[] {
  return points.filter((p) => p.status === "OPEN");
}

export function countOpenKnowledgePoints<T extends { status: string }>(points: T[]): number {
  return openKnowledgePoints(points).length;
}

/** Travail aside — at most five compact titles, same OPEN population as Journal. */
export function travailAsideOpenPoints<T extends { id: string; statement: string; status: string }>(
  points: T[],
  max = 5,
): T[] {
  return openKnowledgePoints(points).slice(0, max);
}