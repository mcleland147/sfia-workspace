/**
 * Presentation-only grouping of cumulative toolEvents for Pilote.
 * Never invents FULL coverage; never mutates Product telemetry.
 * Document identity reuses parseGitLocalReadCoverageSignals (no parallel parser).
 */

import type { AssistantToolEventDto } from "@/features/project-assistant/types";
import {
  deriveReadCoverageFromToolEvent,
  parseGitLocalReadCoverageSignals,
} from "@/lib/nora-cognitive-runtime/readCoverage";

export type PresentedSourceGroup = {
  readonly key: string;
  /** Human-readable source title. */
  readonly title: string;
  /** Honest qualification — never "FULL" without proven full read. */
  readonly qualification: string;
  readonly statusTone:
    | "ok"
    | "partial"
    | "denied"
    | "failed"
    | "pending"
    | "other";
  readonly eventCount: number;
  readonly detailEvents: readonly AssistantToolEventDto[];
};

const DOC_TITLES: ReadonlyArray<{
  readonly re: RegExp;
  readonly title: string;
}> = [
  {
    re: /01-chat-first-product-simplification-cadrage/i,
    title: "P1 — Cadrage",
  },
  {
    re: /02-chat-first-product-simplification-functional-operating-model/i,
    title: "P2 — Fonctionnement",
  },
  {
    re: /03-chat-first-product-simplification-workspace-interaction-architecture/i,
    title: "P3 — Workspace Interaction Architecture",
  },
  {
    re: /04-chat-first-product-simplification-semantic-projection-cognitive-architecture/i,
    title: "P4 — Semantic & Cognitive Architecture",
  },
];

function basename(path: string): string {
  const parts = path.split("/").filter(Boolean);
  const last = parts.length > 0 ? parts[parts.length - 1]! : path;
  return last.replace(/#L\d+-\d+$/i, "");
}

function isDocumentReadTool(toolName: string): boolean {
  return (
    toolName === "git_local_read_file" || /read_file_at_ref/i.test(toolName)
  );
}

function isSearchTool(toolName: string): boolean {
  return /search_content|search_files/i.test(toolName);
}

/**
 * Stable documentary identity for grouping.
 * Prefer readCoverage parser documentPath; strip #Lx-y fragments.
 * Do not merge search with documentary reads. Do not invent versions.
 */
export function documentaryGroupKey(event: AssistantToolEventDto): string {
  const tool = event.toolName.trim();

  if (isSearchTool(tool)) {
    const path = (event.pathOrRef ?? "").trim();
    return path.length > 0 ? `search:${path}` : `search:${tool}`;
  }

  if (isDocumentReadTool(tool)) {
    const parsed = parseGitLocalReadCoverageSignals({
      summary: event.summary,
      pathOrRef: event.pathOrRef,
    });
    const doc =
      (parsed?.documentPath ?? "").trim() ||
      (event.pathOrRef ?? "").trim().replace(/#L\d+-\d+$/i, "");
    if (doc.length > 0) {
      return `doc:${doc}`;
    }
    return `doc-tool:${tool}`;
  }

  const path = (event.pathOrRef ?? "").trim();
  if (path.length > 0) {
    // Non-read tools with a path: keep exact path (no silent documentary merge).
    return `tool-path:${tool}:${path}`;
  }
  return `tool:${tool}`;
}

function presentTitle(event: AssistantToolEventDto, groupKey: string): string {
  if (groupKey.startsWith("doc:")) {
    const docPath = groupKey.slice("doc:".length);
    for (const row of DOC_TITLES) {
      if (row.re.test(docPath)) return row.title;
    }
    return basename(docPath);
  }
  const path = (event.pathOrRef ?? "").trim();
  if (path.length > 0) {
    for (const row of DOC_TITLES) {
      if (row.re.test(path)) return row.title;
    }
    return basename(path);
  }
  return event.toolName;
}

function qualifyGroup(events: readonly AssistantToolEventDto[]): {
  qualification: string;
  statusTone: PresentedSourceGroup["statusTone"];
} {
  const denied = events.filter((e) => e.status === "denied");
  const failed = events.filter((e) => e.status === "failed");
  const pending = events.filter(
    (e) => e.status === "started" || e.status === "requested",
  );
  const succeeded = events.filter((e) => e.status === "succeeded");

  if (succeeded.length === 0) {
    if (denied.length > 0 && failed.length === 0 && pending.length === 0) {
      return { qualification: "Lecture refusée", statusTone: "denied" };
    }
    if (failed.length > 0 && denied.length === 0 && pending.length === 0) {
      return { qualification: "Échec de consultation", statusTone: "failed" };
    }
    if (pending.length === events.length) {
      return { qualification: "Consultation en cours", statusTone: "pending" };
    }
    if (denied.length > 0 || failed.length > 0) {
      return {
        qualification: "Consultation non aboutie — incident(s)",
        statusTone: denied.length > 0 ? "denied" : "failed",
      };
    }
    return { qualification: "Consultation demandée", statusTone: "pending" };
  }

  // Succeeded present — never let deny/fail alone dominate the summary.
  const incidentSuffix =
    denied.length > 0 || failed.length > 0
      ? " — avec incident(s)"
      : "";

  const readEvents = events.filter((e) => isDocumentReadTool(e.toolName));
  if (readEvents.length === 0) {
    if (events.every((e) => isSearchTool(e.toolName))) {
      return {
        qualification: `Recherche de fichiers (pas une lecture documentaire)${incidentSuffix}`,
        statusTone: incidentSuffix ? "partial" : "other",
      };
    }
    return {
      qualification: `Consultation technique${incidentSuffix}`,
      statusTone: incidentSuffix ? "partial" : "other",
    };
  }

  let anyFull = false;
  let anyPartialSignal = false;
  let anySucceededRead = false;

  for (const event of readEvents) {
    if (event.status !== "succeeded") continue;
    anySucceededRead = true;
    const fact = deriveReadCoverageFromToolEvent({
      toolName: event.toolName,
      status: event.status,
      pathOrRef: event.pathOrRef,
      summary: event.summary,
    });
    if (fact?.coverage === "full") {
      anyFull = true;
    } else {
      anyPartialSignal = true;
    }
  }

  if (!anySucceededRead) {
    return {
      qualification: `Consultation demandée${incidentSuffix}`,
      statusTone: "pending",
    };
  }

  // documentHasMore / partial / unparseable / multi-span → never bare FULL.
  if (
    anyFull &&
    !anyPartialSignal &&
    readEvents.filter((e) => e.status === "succeeded").length === 1 &&
    !incidentSuffix
  ) {
    return {
      qualification: "Document lu en entier (preuve de couverture)",
      statusTone: "ok",
    };
  }
  if (
    readEvents.filter((e) => e.status === "succeeded").length > 1 ||
    anyPartialSignal
  ) {
    return {
      qualification: `Plusieurs passages consultés${incidentSuffix}`,
      statusTone: "partial",
    };
  }
  return {
    qualification: `Extraits consultés${incidentSuffix}`,
    statusTone: "partial",
  };
}

/**
 * Group cumulative conversation toolEvents for Pilote synthesis.
 * Detail rows preserve raw telemetry order (including original #Lx-y paths).
 */
export function presentConversationSources(
  events: readonly AssistantToolEventDto[],
): PresentedSourceGroup[] {
  const order: string[] = [];
  const buckets = new Map<string, AssistantToolEventDto[]>();

  for (const event of events) {
    const key = documentaryGroupKey(event);
    if (!buckets.has(key)) {
      order.push(key);
      buckets.set(key, []);
    }
    buckets.get(key)!.push(event);
  }

  return order.map((key) => {
    const detailEvents = buckets.get(key)!;
    const title = presentTitle(detailEvents[0]!, key);
    const { qualification, statusTone } = qualifyGroup(detailEvents);
    return {
      key,
      title,
      qualification,
      statusTone,
      eventCount: detailEvents.length,
      detailEvents,
    };
  });
}

export const CONVERSATION_SOURCES_SCOPE_DISCLAIMER =
  "Sources consultées dans cette conversation (cumul des tours) — pas uniquement le dernier message.";
