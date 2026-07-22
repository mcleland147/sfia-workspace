/**
 * Cursor prompt instantiator — loads real Git template, never reinvents structure.
 */
import type { ActionCandidate } from "../types";
import { loadCursorTemplateSource } from "./sourceLoader";
import type {
  SfiaCanonicalContext,
  SfiaCompilationResult,
  SfiaCursorPromptInstantiation,
} from "./types";

export function instantiateCursorPrompt(input: {
  workspaceRoot: string;
  context: SfiaCanonicalContext;
  compilation: SfiaCompilationResult;
  candidate: ActionCandidate;
  morrisDecision?: string;
}): SfiaCursorPromptInstantiation {
  const template = loadCursorTemplateSource(input.workspaceRoot);
  const file = input.compilation.files?.[0];
  const content = input.compilation.exactContent ?? "";

  // Instantiate applicable sections WITHOUT rewriting the template structure:
  // produce a bound contract that cites template sections and fills required fields.
  const promptText = [
    `# Prompt Cursor instancié depuis le template canonique Git`,
    ``,
    `templatePath: ${template.path}`,
    `templateDigest: ${template.digest}`,
    `templateBlobSha: ${template.blobSha ?? "WORKING_TREE_ONLY"}`,
    `contextId: ${input.context.contextId}`,
    `actionId: ${input.candidate.actionCandidateId}`,
    `headSha: ${input.context.headSha}`,
    `branch: ${input.context.branch}`,
    `methodBaseline: ${input.context.methodBaseline}`,
    ``,
    `## Qualification (dérivée du contexte SFIA — sources ${input.context.sourceDocuments.map((s) => s.path).join(", ")})`,
    `Cycle: ${input.context.candidateCycle}`,
    `Profil: ${input.context.profile}`,
    `Justification: ${input.context.profileJustification}`,
    `Blocs: ${input.context.activeBlocks.join(", ")}`,
    ``,
    `## Périmètre d'exécution (contrat)`,
    `Objectif: ${input.candidate.objective}`,
    `Fichier: ${file?.path ?? "(n/a)"}`,
    `Opération: ${file?.operation ?? "(n/a)"}`,
    `Créer EXACTEMENT ce contenu Markdown (octet pour octet):`,
    `-----BEGIN CONTENT-----`,
    content,
    `-----END CONTENT-----`,
    ``,
    `## Garde-fous (template § + contexte)`,
    `- Aucun autre fichier`,
    `- Aucun commit / push / PR / merge / remote`,
    `- Aucun shell hors contrat`,
    `- Chemins protégés: ${input.context.protectedPaths.join(", ")}`,
    `- Gates fermés: ${input.context.closedGates.join(", ")}`,
    `- Décision Morris: ${input.morrisDecision ?? "GO action requis avant exécution — non consommé ici"}`,
    ``,
    `## Review`,
    `Review pack: ${input.context.reviewPackRequirement}`,
    `Review handoff: ${input.context.reviewHandoffRequirement}`,
    ``,
    `## Extraits de structure du template (référence, non substitution)`,
    template.content.slice(0, 1200).replace(/\n/g, "\n"),
    `\n…[template truncated for instantiation envelope — full template remains at ${template.path}]`,
  ].join("\n");

  return {
    templatePath: template.path,
    templateDigest: template.digest,
    templateBlobSha: template.blobSha,
    contextId: input.context.contextId,
    actionId: input.candidate.actionCandidateId,
    promptText,
    instantiatedAt: new Date().toISOString(),
  };
}
