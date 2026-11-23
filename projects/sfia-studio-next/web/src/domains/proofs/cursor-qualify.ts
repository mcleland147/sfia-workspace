/**
 * D8 — qualification of a Cursor realization attempt.
 * Nine rubrics remain consultable. Never merges with D6 reception or Nora opinion.
 */

export type D8RubricKey =
  | "resume"
  | "prevu"
  | "realise"
  | "evaluation"
  | "ecarts"
  | "impact"
  | "verdict"
  | "recommandations"
  | "sources";

export type D8Rubric = {
  key: D8RubricKey;
  title: string;
  content: string;
  coverage: "COMPLETE" | "PARTIAL" | "MISSING" | "UNKNOWN";
};

export type CursorQualificationInput = {
  contractFingerprint: string;
  handoffStatus: string | null;
  reportMarkdown: string | null;
  manifest: {
    filesCreated?: string[];
    filesModified?: string[];
    filesDeleted?: string[];
    testsDeclared?: string[];
    testsExecuted?: string[];
    testsCaptured?: string[];
    sourcesConsulted?: string[];
    gaps?: string[];
  } | null;
  gitFacts?: Array<{ path: string; sha?: string | null }>;
  terminalStatus?: string | null;
};

export type CursorQualificationResult = {
  rubrics: D8Rubric[];
  verdict: "CONFORMING" | "PARTIAL" | "NON_CONFORMING" | "INDETERMINATE";
  limits: string[];
  testsPass: false;
  conformityProven: false;
  morrisAcceptance: false;
  adopted: false;
};

const RUBRIC_TITLES: Record<D8RubricKey, string> = {
  resume: "Résumé",
  prevu: "Prévu",
  realise: "Réalisé",
  evaluation: "Évaluation",
  ecarts: "Écarts",
  impact: "Impact",
  verdict: "Verdict",
  recommandations: "Recommandations",
  sources: "Sources",
};

export function qualifyCursorRealization(
  input: CursorQualificationInput,
): CursorQualificationResult {
  const limits = [
    "Déclaration Cursor ≠ observation Studio",
    "Observation ≠ conformité D8",
    "Verdict D8 ≠ avis Nora",
    "Avis Nora ≠ réception D6 / acceptation Morris",
    "Aucun ADOPTED depuis une tentative seule",
  ];

  const report = input.reportMarkdown?.trim() || "";
  const hasReport = report.length > 0;
  const handoffOk = input.handoffStatus === "RECEIVED";
  const manifest = input.manifest ?? {};
  const inventory =
    (manifest.filesCreated?.length ?? 0) +
    (manifest.filesModified?.length ?? 0) +
    (manifest.filesDeleted?.length ?? 0);
  const testsDeclared = manifest.testsDeclared?.length ?? 0;
  const testsExecuted = manifest.testsExecuted?.length ?? 0;
  const testsCaptured = manifest.testsCaptured?.length ?? 0;

  if (!hasReport || !handoffOk) {
    limits.push("Rapport absent ou handoff non RECEIVED — bilan PARTIAL/UNKNOWN");
  }
  if (testsDeclared > testsCaptured) {
    limits.push("Tests déclarés sans preuve capturée — PASS refusé");
  }
  if (inventory === 0 && hasReport) {
    limits.push("Inventaire fichiers vide — synthèse seule insuffisante");
  }

  const rubrics: D8Rubric[] = [
    {
      key: "resume",
      title: RUBRIC_TITLES.resume,
      content: hasReport ? report.slice(0, 800) : "Rapport manquant",
      coverage: hasReport ? "PARTIAL" : "MISSING",
    },
    {
      key: "prevu",
      title: RUBRIC_TITLES.prevu,
      content: `Contrat fingerprint ${input.contractFingerprint}`,
      coverage: input.contractFingerprint ? "COMPLETE" : "MISSING",
    },
    {
      key: "realise",
      title: RUBRIC_TITLES.realise,
      content: `Inventaire: +${manifest.filesCreated?.length ?? 0} ~${manifest.filesModified?.length ?? 0} -${manifest.filesDeleted?.length ?? 0}`,
      coverage: inventory > 0 ? "PARTIAL" : hasReport ? "PARTIAL" : "MISSING",
    },
    {
      key: "evaluation",
      title: RUBRIC_TITLES.evaluation,
      content: `Tests déclarés=${testsDeclared} exécutés=${testsExecuted} capturés=${testsCaptured}`,
      coverage: testsCaptured > 0 ? "PARTIAL" : "MISSING",
    },
    {
      key: "ecarts",
      title: RUBRIC_TITLES.ecarts,
      content: (manifest.gaps ?? []).join("; ") || "Écarts non inventoriés",
      coverage: (manifest.gaps?.length ?? 0) > 0 ? "PARTIAL" : "UNKNOWN",
    },
    {
      key: "impact",
      title: RUBRIC_TITLES.impact,
      content: `Terminal SDK: ${input.terminalStatus ?? "unknown"}`,
      coverage: input.terminalStatus ? "PARTIAL" : "UNKNOWN",
    },
    {
      key: "verdict",
      title: RUBRIC_TITLES.verdict,
      content: "Voir verdict agrégé — jamais ADOPTED",
      coverage: "PARTIAL",
    },
    {
      key: "recommandations",
      title: RUBRIC_TITLES.recommandations,
      content: "Suite éventuelle = nouveau contrat + acte D6",
      coverage: "COMPLETE",
    },
    {
      key: "sources",
      title: RUBRIC_TITLES.sources,
      content: (manifest.sourcesConsulted ?? []).join(", ") || "Sources non listées",
      coverage: (manifest.sourcesConsulted?.length ?? 0) > 0 ? "PARTIAL" : "MISSING",
    },
  ];

  let verdict: CursorQualificationResult["verdict"] = "INDETERMINATE";
  if (!hasReport || !handoffOk) verdict = "INDETERMINATE";
  else if (testsDeclared > testsCaptured || (manifest.gaps?.length ?? 0) > 0) {
    verdict = "PARTIAL";
  } else if (inventory > 0 && testsCaptured >= testsDeclared) {
    // Still not CONFORMING without independent proof — stay PARTIAL.
    verdict = "PARTIAL";
    limits.push("Conformité forte non prouvée sans preuves indépendantes D9/tests");
  }

  return {
    rubrics,
    verdict,
    limits,
    testsPass: false,
    conformityProven: false,
    morrisAcceptance: false,
    adopted: false,
  };
}

/**
 * Deterministic technical brief for the dossier — NOT Nora's cognitive analysis.
 * Distinct from D8 qualification, Nora opinion, and D6 decision.
 */
export function buildNoraFinalAnalysisBrief(q: CursorQualificationResult): string {
  const lines = [
    "[BRIEF TECHNIQUE DÉTERMINISTE — pas un avis Nora cognitif]",
    "Dossier de tentative (après fin ou interruption réconciliée).",
    `Verdict D8: ${q.verdict}`,
    "Rubriques:",
    ...q.rubrics.map((r) => `- ${r.title} [${r.coverage}]: ${r.content.slice(0, 200)}`),
    "Limites:",
    ...q.limits.map((l) => `- ${l}`),
    "Distinctions: brief technique ≠ qualification D8 ≠ avis Nora ≠ décision D6.",
    "Ceci n'est pas une HumanDecision ni une acceptation Morris.",
    "Un avis Nora cognitif requiert un run Nora sur ce dossier (sources attachées).",
  ];
  return lines.join("\n");
}

export type NoraAnalysisKind = "TECHNICAL_BRIEF" | "NORA_COGNITIVE" | "UNAVAILABLE";

export function classifyAttachedNoraPayload(markdown: string | null | undefined): NoraAnalysisKind {
  if (!markdown?.trim()) return "UNAVAILABLE";
  if (markdown.includes("BRIEF TECHNIQUE DÉTERMINISTE")) return "TECHNICAL_BRIEF";
  return "NORA_COGNITIVE";
}
