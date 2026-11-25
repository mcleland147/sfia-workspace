/**
 * RB-15/23 — métier Git activity notes for the LIVE tool-source journal.
 * Keeps producer instrumentation out of git-read-tools execute bodies' noise.
 */

import type { ToolCoverage } from "./d4-read-tools";
import { recordToolSource, type ToolSourceJournal } from "./tool-source-journal";

export type GitActivityScope = {
  sourceJournal?: ToolSourceJournal | null;
};

function basenamePath(path: string): string {
  const clean = path.replace(/\\/g, "/").replace(/\/+$/, "");
  const parts = clean.split("/").filter(Boolean);
  return parts[parts.length - 1] || clean || "fichier";
}

/** Human title without raw SHAs / internal ids. */
export function gitMetierTitle(input: {
  path?: string | null;
  prNumber?: number | null;
  sha?: string | null;
  repoLabel?: string | null;
  operation: string;
}): string {
  if (input.path?.trim()) {
    const base = basenamePath(input.path.trim());
    return base.length > 80 ? `${base.slice(0, 77)}…` : base;
  }
  if (input.prNumber != null && Number.isFinite(input.prNumber)) {
    return `PR #${input.prNumber}`;
  }
  if (input.sha?.trim()) {
    return `Commit ${input.sha.trim().slice(0, 7)}`;
  }
  if (input.repoLabel?.trim()) {
    return input.repoLabel.trim().slice(0, 80);
  }
  return input.operation;
}

export function noteGitToolSource(
  scope: GitActivityScope | null | undefined,
  input: {
    operation: string;
    ref: string;
    coverage: ToolCoverage | "DISCOVERED" | "CONSULTED" | "PARTIAL" | "DENIED" | "STALE";
    path?: string | null;
    prNumber?: number | null;
    sha?: string | null;
    repoLabel?: string | null;
    notes?: string;
  },
): void {
  if (!scope?.sourceJournal || !input.ref.trim()) return;
  const title = gitMetierTitle({
    path: input.path,
    prNumber: input.prNumber,
    sha: input.sha,
    repoLabel: input.repoLabel,
    operation: input.operation,
  });
  recordToolSource(scope.sourceJournal, {
    kind: "GIT",
    ref: input.ref.trim().slice(0, 240),
    title,
    coverage: input.coverage,
    versionOrSha: input.sha ?? null,
    notes: [input.operation, input.notes].filter(Boolean).join(" — ").slice(0, 220),
  });
}
