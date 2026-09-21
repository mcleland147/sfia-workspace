/**
 * PJ-REPROOF-04 Bridge 3 — ExecutionContract → Cursor-consumable prompt.
 *
 * ONE semantic contract, TWO representations:
 * - durable structured ExecutionContract (SoT)
 * - text projection for Cursor (transport)
 *
 * Harvests the proven §5 axes of the external v2.6 template shape.
 * Does NOT promote the template as Studio runtime doctrine.
 * Does NOT encode a mandatory step-by-step HOW — Cursor decides HOW
 * inside the authorized perimeter.
 */

import { createHash } from "node:crypto";
import type { ExecutionContract } from "../domain/types";
import {
  projectExecutionContractInspectionDisclosure,
  type ExecutionContractInspectionDisclosure,
} from "./inspectionDisclosure";

/** Reference path only — not loaded as runtime doctrine. */
export const CURSOR_PROMPT_SHAPE_REFERENCE =
  "prompts/templates/sfia-cycle-execution-template.md" as const;

export type CursorMissionPromptProjection = {
  readonly promptText: string;
  /** Deterministic digest of execution-significant prompt body. */
  readonly promptDigest: string;
  readonly executionContractId: string;
  readonly contractVersion: number;
  readonly semanticFingerprint: string | null;
  readonly attemptId: string | null;
  readonly reportIdHint: string | null;
  readonly shapeReference: typeof CURSOR_PROMPT_SHAPE_REFERENCE;
  readonly disclosure: ExecutionContractInspectionDisclosure;
};

function asString(value: unknown): string | null {
  if (typeof value !== "string") return null;
  const t = value.trim();
  return t.length > 0 ? t : null;
}

function asStringList(value: unknown): string[] {
  if (!Array.isArray(value)) return [];
  return value
    .filter((v): v is string => typeof v === "string")
    .map((v) => v.trim())
    .filter((v) => v.length > 0);
}

function bullet(items: readonly string[], empty = "(aucun)"): string {
  if (items.length === 0) return empty;
  return items.map((i) => `- ${i}`).join("\n");
}

/**
 * Project authorized ExecutionContract into a Cursor mission prompt.
 * Semantic parity with Pilot inspection disclosure is required.
 */
export function projectExecutionContractToCursorPrompt(input: {
  readonly contract: ExecutionContract;
  readonly attemptId?: string | null;
  readonly reportIdHint?: string | null;
  readonly projectTitle?: string | null;
  readonly repositoryRef?: string | null;
  readonly baseSha?: string | null;
  readonly branch?: string | null;
}): CursorMissionPromptProjection {
  const projected = projectExecutionContractInspectionDisclosure(input.contract);
  const d = projected.disclosure;
  const inputs = input.contract.inputs ?? {};

  const objective =
    d.objective ??
    asString(inputs.objective) ??
    `Exécuter le contrat ${input.contract.executionContractId}`;

  const contextLines = [
    input.projectTitle ? `Projet: ${input.projectTitle}` : null,
    `projectId: ${input.contract.projectId}`,
    input.contract.cycleInstanceId
      ? `cycleInstanceId: ${input.contract.cycleInstanceId}`
      : null,
    ...(input.contract.decisionRefs ?? []).map((r) => `decisionRef: ${r}`),
    asString(inputs.selectedOptionLabel)
      ? `décision trajectoire (provenance, pas action): ${asString(inputs.selectedOptionLabel)}`
      : null,
    asString(inputs.productOutcome)
      ? `productOutcome antérieur: ${asString(inputs.productOutcome)}`
      : null,
    asString(inputs.recoveryAttemptId)
      ? `attempt antérieur: ${asString(inputs.recoveryAttemptId)}`
      : null,
    asString(inputs.recoveryEvidenceId)
      ? `evidence antérieure: ${asString(inputs.recoveryEvidenceId)}`
      : null,
  ].filter((x): x is string => Boolean(x));

  const sources = [
    ...asStringList(inputs.sourcesToRead),
    ...asStringList(inputs.diagnosticScopeIn),
    ...(d.scopeIn ?? []),
  ];
  const uniqueSources = [...new Set(sources)];

  const scopeIn = [
    ...(d.scopeIn ?? []),
    ...asStringList(inputs.diagnosticScopeIn),
    d.targetPath ? `path:${d.targetPath}` : null,
  ].filter((x): x is string => Boolean(x));

  const scopeOut = [
    ...(d.scopeOut ?? []),
    ...asStringList(inputs.diagnosticScopeOut),
    "élargir le périmètre sans nouveau contrat",
    "acquérir de l'autorité seule",
    "merge / doctrine / baseline promotion hors contrat",
  ];

  const forbidden = [
    ...d.constraints.filter(
      (c) =>
        c.startsWith("SCOPE_OUT:") ||
        c.startsWith("PROTECTED:") ||
        c.startsWith("OUT_OF_SCOPE:") ||
        c.includes("NO_") ||
        c.startsWith("MISSION_SCOPE_OUT:"),
    ),
    "git push projet / main hors gate",
    "force push",
    "merge hors contrat autorisé",
  ];

  const expectedOutputs = d.expectedOutputs ?? [
    ...asStringList(input.contract.expectedOutputs),
  ];
  const validations = d.validationExpectations ?? [];
  const evidence = d.evidenceRequirements;
  const stops = d.stopConditions;

  const filesCreate = asStringList(inputs.filesToCreate);
  const filesModify = asStringList(inputs.filesToModify);
  const filesForbidden = asStringList(inputs.filesForbidden);

  // Significant body — excludes volatile reportIdHint for digest stability
  // when hint is only a suggestion. attemptId included when bound.
  const significantBody = [
    `executionContractId: ${d.executionContractId}`,
    `contractVersion: ${d.contractVersion}`,
    `semanticFingerprint: ${d.semanticFingerprint ?? ""}`,
    input.attemptId ? `attemptId: ${input.attemptId}` : null,
    `Objectif :`,
    objective,
    `Contexte :`,
    ...contextLines,
    `Sources à lire :`,
    ...uniqueSources,
    `Périmètre autorisé :`,
    ...scopeIn,
    `Hors périmètre :`,
    ...scopeOut,
    `Fichiers à créer :`,
    ...filesCreate,
    `Fichiers à modifier :`,
    ...filesModify,
    `Fichiers interdits :`,
    ...filesForbidden,
    `Stop conditions :`,
    ...stops,
    `Validations attendues :`,
    ...validations,
    `Evidence / report requirements :`,
    ...evidence,
    `Expected outputs :`,
    ...expectedOutputs,
    `requiredAuthority: ${d.requiredAuthority}`,
    `requiredCapabilities: ${d.requiredCapabilities.join(",")}`,
    `reversibility: ${d.reversibility}`,
  ]
    .filter((x): x is string => x != null)
    .join("\n");

  const promptDigest = createHash("sha256")
    .update(significantBody, "utf8")
    .digest("hex")
    .slice(0, 32);

  const promptText = [
    `# Mission Cursor — projection du ExecutionContract Studio`,
    ``,
    `shapeReference: ${CURSOR_PROMPT_SHAPE_REFERENCE}`,
    `executionContractId: ${d.executionContractId}`,
    `contractVersion: ${d.contractVersion}`,
    `semanticFingerprint: ${d.semanticFingerprint ?? "(none)"}`,
    `promptDigest: ${promptDigest}`,
    input.attemptId ? `attemptId: ${input.attemptId}` : `attemptId: (bound at launch)`,
    input.reportIdHint
      ? `reportIdHint: ${input.reportIdHint}`
      : `reportId: (minted at report ingestion)`,
    input.repositoryRef ? `repositoryRef: ${input.repositoryRef}` : null,
    input.baseSha ? `baseSha: ${input.baseSha}` : null,
    input.branch ? `branch: ${input.branch}` : null,
    ``,
    `## Objectif`,
    objective,
    ``,
    `## Contexte`,
    bullet(contextLines, "(contexte minimal — contract ids ci-dessus)"),
    ``,
    `## Sources à lire`,
    bullet(uniqueSources, "(découvrir localement dans le périmètre)"),
    ``,
    `## Périmètre autorisé (scope IN)`,
    bullet([...new Set(scopeIn)], "(périmètre contractuel — ne pas élargir)"),
    ``,
    `## Hors périmètre (scope OUT)`,
    bullet([...new Set(scopeOut)]),
    ``,
    `## Fichiers`,
    `À créer:`,
    bullet(filesCreate, "aucun imposé — Cursor décide si nécessaire dans le périmètre"),
    `À modifier:`,
    bullet(filesModify, "aucun imposé — Cursor décide si nécessaire dans le périmètre"),
    `Interdits:`,
    bullet(filesForbidden.length > 0 ? filesForbidden : ["chemins protégés hors contrat"]),
    ``,
    `## Effets / garde-fous`,
    bullet([...new Set(forbidden)]),
    `- Ne pas élargir le périmètre ni l'autorité.`,
    `- Si un effet hors contrat est nécessaire: STOP et rapporter le besoin d'escalade.`,
    `- Technical SUCCESS ≠ Product SUCCESS.`,
    ``,
    `## Stop conditions`,
    bullet(stops),
    ``,
    `## Validations attendues`,
    bullet(validations, "(selon mission — tests/lints/diff si pertinents)"),
    ``,
    `## Evidence / rapport attendus`,
    bullet(evidence),
    `Expected outputs:`,
    bullet(expectedOutputs),
    ``,
    `## HOW`,
    `Cursor détermine le HOW à l'intérieur de ce contrat.`,
    `Aucune séquence obligatoire read→write→commit n'est imposée.`,
    `Aucun choix Pilote d'opération technique (read/simulate/docs_write/commit/push/PR/merge).`,
    ``,
    `## Rapport final attendu`,
    `- reportId (identité propre du rapport)`,
    `- executionContractId: ${d.executionContractId} (exact)`,
    input.attemptId
      ? `- attemptId: ${input.attemptId} (exact)`
      : `- attemptId: (celui de l'Attempt lancé)`,
    `- status: succeeded | failed | stopped | timeout`,
    `- effets fichiers / validations / git le cas échéant`,
    `- stops/blockers`,
    `- verdict/status — claim seulement, pas Evidence produit`,
    ``,
    `## Secondaire technique (audit)`,
    `- action: ${d.action}`,
    `- technicalTarget: ${d.technicalTarget}`,
    `- scope: ${d.scope}`,
    `- requiredAuthority: ${d.requiredAuthority}`,
    `- requiredCapabilities: ${d.requiredCapabilities.join(", ") || "(none)"}`,
    `- reversibility: ${d.reversibility}`,
  ]
    .filter((x): x is string => x != null)
    .join("\n");

  return {
    promptText,
    promptDigest,
    executionContractId: d.executionContractId,
    contractVersion: d.contractVersion,
    semanticFingerprint: d.semanticFingerprint,
    attemptId: input.attemptId ?? null,
    reportIdHint: input.reportIdHint ?? null,
    shapeReference: CURSOR_PROMPT_SHAPE_REFERENCE,
    disclosure: d,
  };
}

/**
 * Assert prompt projection preserves Pilot-inspection semantics (no silent widen).
 */
export function assertCursorPromptParityWithInspection(input: {
  readonly projection: CursorMissionPromptProjection;
}):
  | { readonly ok: true }
  | { readonly ok: false; readonly code: string; readonly message: string } {
  const { projection } = input;
  const d = projection.disclosure;
  const text = projection.promptText;

  if (!text.includes(d.executionContractId)) {
    return {
      ok: false,
      code: "PROMPT_CONTRACT_ID_MISSING",
      message: "Prompt must cite executionContractId.",
    };
  }
  if (d.semanticFingerprint && !text.includes(d.semanticFingerprint)) {
    return {
      ok: false,
      code: "PROMPT_FINGERPRINT_MISSING",
      message: "Prompt must cite semanticFingerprint.",
    };
  }
  if (d.objective && !text.includes(d.objective)) {
    return {
      ok: false,
      code: "PROMPT_OBJECTIVE_DRIFT",
      message: "Prompt objective diverges from inspection disclosure.",
    };
  }
  for (const stop of d.stopConditions) {
    if (!text.includes(stop)) {
      return {
        ok: false,
        code: "PROMPT_STOP_MISSING",
        message: `Stop condition absent from prompt: ${stop}`,
      };
    }
  }
  // Must not inject mandatory HOW sequence markers
  if (
    /Étapes d'exécution\s*:\s*\n\s*1\.\s*Local Git Truth Check/i.test(text) ||
    /first read, then write, then (test|commit)/i.test(text)
  ) {
    return {
      ok: false,
      code: "PROMPT_ENCODES_HOW",
      message: "Prompt must not encode a mandatory step-by-step HOW.",
    };
  }
  return { ok: true };
}
