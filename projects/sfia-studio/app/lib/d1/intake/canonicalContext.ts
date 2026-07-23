/**
 * Load D1-bounded canonical method sources (core allowlist only — no CT project docs).
 */
import type { EventSink } from "@/lib/platform/observability/eventSink";
import { loadCanonicalCoreSources } from "@/lib/platform/sfia-context/sourceLoader";
import { SFIA_METHOD_BASELINE } from "@/lib/platform/sfia-context/canonicalPaths";
import type { D1SourceTelemetry } from "./d1EventSink";

const PLATFORM_APPENDIX = `
## Shared platform (D1 unified — read-only)
- Un contexte SFIA canonique (méthode) est injecté ci-dessous.
- Des outils Git/GitHub READ-ONLY peuvent être disponibles.
- Utilise les tools uniquement pour des faits techniques (HEAD, status, repo) — jamais pour inventer un Project existant.
- proposedProjectId et proposedCycleId restent TOUJOURS null (matching = C3).
- Aucune mutation Project/Cycle. Pas de claim LIVE VALIDATED / D1 COMPLETE / PROJECT LINKED / CYCLE OPENED / V3-ADOPTED.
`.trim();

export function loadD1CanonicalContext(input: {
  workspaceRoot: string;
  correlationId: string;
  sink: EventSink;
}): {
  sources: D1SourceTelemetry[];
  systemAppendix: string;
} {
  const docs = loadCanonicalCoreSources(input.workspaceRoot);
  const sources: D1SourceTelemetry[] = [];

  for (const doc of docs) {
    const digestPrefix = doc.digest.slice(0, 16);
    input.sink.emit({
      type: "SOURCE_LOADED",
      correlationId: input.correlationId,
      detail: {
        path: doc.path,
        digestPrefix,
        role: doc.role,
      },
    });
    sources.push({
      path: doc.path,
      digestPrefix,
      role: doc.role,
    });
  }

  const compact = {
    methodBaseline: SFIA_METHOD_BASELINE,
    sourceDocuments: sources,
    note: "Excerpts omitted — digests only. Doctrine remains in Git.",
  };

  const systemAppendix = [
    PLATFORM_APPENDIX,
    "",
    "### Canonical sources (digests)",
    "```json",
    JSON.stringify(compact, null, 2),
    "```",
  ].join("\n");

  return { sources, systemAppendix };
}
