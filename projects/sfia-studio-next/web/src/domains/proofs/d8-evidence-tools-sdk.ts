/**
 * Agents SDK wrappers — D8 evidence read tools for post-attempt Nora analysis.
 */
import {
  listRealizationEvidence,
  readAttemptWorkspaceFile,
  readEvidenceCaptureMeta,
  readRealizationHandoffReport,
  type D8EvidenceScope,
} from "./d8-evidence-read";

export type D8ToolBuildScope = {
  pilotId: string;
  projectId: string;
  attemptId: string;
  budget: { remainingCalls: number; remainingChars: number };
  /** C13 — shared tool-source journal for per-piece provenance. */
  sourceJournal?: D8EvidenceScope["sourceJournal"];
};

export async function buildNoraD8EvidenceTools(scope: D8ToolBuildScope) {
  const { tool } = await import("@openai/agents");
  const { z } = await import("zod");
  const d8: D8EvidenceScope = {
    pilotId: scope.pilotId,
    projectId: scope.projectId,
    attemptId: scope.attemptId,
    budget: scope.budget,
    sourceJournal: scope.sourceJournal,
  };

  return [
    tool({
      name: "list_realization_evidence",
      description:
        "Liste les pièces D8 autorisées de la tentative (handoff, captures, workspace). Métadonnées seulement — ne pas inventer de chemins.",
      parameters: z.object({}),
      execute: async () => listRealizationEvidence(d8),
    }),
    tool({
      name: "read_realization_handoff_report",
      description:
        "Lit le rapport de handoff original de la tentative courante (contenu markdown). Distingue CONSULTED vs PARTIAL vs NOT_FOUND.",
      parameters: z.object({}),
      execute: async () => readRealizationHandoffReport(d8),
    }),
    tool({
      name: "read_attempt_workspace_file",
      description:
        "Lit un fichier texte relatif au workspace Cursor de la tentative (cwd serveur). Chemin relatif uniquement. Preuve originale ≠ déclaration Cursor.",
      parameters: z.object({
        relativePath: z.string().min(1).max(400),
      }),
      execute: async (args) => readAttemptWorkspaceFile(d8, args.relativePath),
    }),
    tool({
      name: "read_evidence_capture_meta",
      description:
        "Ouvre les métadonnées d'une capture ecap_* liée à la tentative (SHA, mime). Pas d'inline binaire.",
      parameters: z.object({
        captureId: z.string().min(1).max(80),
      }),
      execute: async (args) => readEvidenceCaptureMeta(d8, args.captureId),
    }),
  ];
}
