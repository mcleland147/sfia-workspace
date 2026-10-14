/**
 * Presentation-only live activity timeline for Pilote.
 * Does not alter NDJSON / NoraLiveActivityEvent protocol.
 */

import type { NoraLiveActivityEvent } from "@/features/project-assistant/liveActivityEvents";

export type PresentedActivityLine = {
  readonly key: string;
  readonly label: string;
};

/** Known product-simplification document short names (display only). */
const DOC_SHORT: ReadonlyArray<{ readonly re: RegExp; readonly short: string }> =
  [
    {
      re: /01-chat-first-product-simplification-cadrage/i,
      short: "P1",
    },
    {
      re: /02-chat-first-product-simplification-functional-operating-model/i,
      short: "P2",
    },
    {
      re: /03-chat-first-product-simplification-workspace-interaction-architecture/i,
      short: "P3",
    },
    {
      re: /04-chat-first-product-simplification-semantic-projection-cognitive-architecture/i,
      short: "P4",
    },
  ];

function documentShortName(path: string | undefined): string | undefined {
  if (!path) return undefined;
  for (const row of DOC_SHORT) {
    if (row.re.test(path)) return row.short;
  }
  return undefined;
}

function basename(path: string | undefined): string | undefined {
  if (!path) return undefined;
  const stripped = path.replace(/#L\d+-\d+$/i, "");
  const parts = stripped.split("/").filter(Boolean);
  return parts.length > 0 ? parts[parts.length - 1] : stripped;
}

function isDocumentaryReadTool(toolName: string | undefined): boolean {
  if (!toolName) return false;
  return (
    toolName === "git_local_read_file" || /read_file_at_ref/i.test(toolName)
  );
}

/**
 * Prefer a precise Pilote label when source is identifiable; never invent paths.
 * tool_completed ≠ full-document read.
 */
export function presentActivityEventLabel(event: NoraLiveActivityEvent): string {
  const short = documentShortName(event.sourcePath);
  const file = basename(event.sourcePath);
  const docRead = isDocumentaryReadTool(event.toolName);

  if (event.kind === "tool_started") {
    if (docRead || short || file) {
      if (short) return `Nora consulte ${short}.`;
      if (file) return `Nora consulte « ${file} ».`;
    }
  }
  if (event.kind === "tool_completed") {
    if (docRead) {
      if (short) return `Nora a consulté un passage de ${short}.`;
      if (file) return `Nora a consulté un passage de « ${file} ».`;
      return "Nora a terminé une consultation documentaire.";
    }
    // Non-documentary tool completion must not claim a document read.
    const fallback = event.label.trim();
    if (fallback.length > 0 && !/lecture|lu intégralement|document lu/i.test(fallback)) {
      return fallback;
    }
    return "Nora a terminé une consultation.";
  }
  if (event.kind === "tool_failed") {
    if (short) return `Impossible de consulter ${short}.`;
    if (file) return `Impossible de consulter « ${file} ».`;
    return "Impossible de consulter une source.";
  }

  const label = event.label.trim();
  return label.length > 0 ? label : "Nora travaille…";
}

/**
 * Chronological Pilote lines: labels only, no kind / numbering noise.
 * Collapses consecutive identical visible messages.
 */
export function presentLiveActivityTimeline(
  events: readonly NoraLiveActivityEvent[],
): PresentedActivityLine[] {
  const out: PresentedActivityLine[] = [];
  for (const event of events) {
    const label = presentActivityEventLabel(event);
    const prev = out[out.length - 1];
    if (prev && prev.label === label) continue;
    out.push({
      key: `${event.seq}-${event.kind}-${event.at}`,
      label,
    });
  }
  return out;
}
