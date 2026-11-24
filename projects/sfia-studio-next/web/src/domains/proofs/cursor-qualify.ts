/**
 * D8 — qualification of a Cursor realization attempt.
 * Nine rubrics remain consultable. Never merges with D6 reception or Nora opinion.
 *
 * C21 — criterion-level evaluation: declared ≠ observed ≠ accessible ≠ verified ≠
 * evaluated ≠ satisfied. testsPass / conformityProven may become true only when
 * independent captured proofs justify it — never from Cursor declaration alone.
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

export type CriterionEvaluationStatus =
  | "declared"
  | "observed"
  | "accessible"
  | "verified"
  | "evaluated"
  | "satisfied"
  | "not_satisfied"
  | "partial"
  | "unknown";

export type CriterionEvaluation = {
  criterion: string;
  status: CriterionEvaluationStatus;
  evidenceRefs: string[];
  note: string;
};

export type CursorQualificationInput = {
  contractFingerprint: string;
  /** Acceptance criteria from the technical contract (server-side). */
  acceptanceCriteria?: string[];
  expectedProofs?: string[];
  handoffStatus: string | null;
  reportMarkdown: string | null;
  manifest: {
    filesCreated?: string[];
    filesModified?: string[];
    filesDeleted?: string[];
    filesMoved?: Array<{ from: string; to: string }>;
    filesObserved?: string[];
    filesConsulted?: Array<{ path: string; sha256?: string }>;
    testsDeclared?: string[];
    testsExecuted?: string[];
    testsCaptured?: string[];
    sourcesConsulted?: string[];
    gaps?: string[];
    git?: { branch?: string | null; baseSha?: string | null; tipSha?: string | null };
  } | null;
  gitFacts?: Array<{ path: string; sha?: string | null }>;
  /** Independent Git facts from D9 when available — null = not checked. */
  gitFactsVerified?: boolean | null;
  terminalStatus?: string | null;
  /**
   * Optional per-criterion evidence map: criterion text → paths/captures verified
   * by D8 tools (not Cursor declarations).
   */
  criterionEvidence?: Record<string, { refs: string[]; verified: boolean }>;
  /**
   * C24 reprise — when true, gitFactsVerified must be === true for conformity.
   * When false/undefined, gitFactsVerified null means N/A (not required).
   */
  gitRequired?: boolean;
};

export type CursorQualificationResult = {
  rubrics: D8Rubric[];
  verdict: "CONFORMING" | "PARTIAL" | "NON_CONFORMING" | "INDETERMINATE";
  limits: string[];
  criteria: CriterionEvaluation[];
  /** True only when every declared test has a captured proof and none contradict. */
  testsPass: boolean;
  /** True only when criteria are satisfied with verified evidence (not lexical). */
  conformityProven: boolean;
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

function evaluateCriteria(input: CursorQualificationInput): CriterionEvaluation[] {
  const criteria = input.acceptanceCriteria ?? [];
  const report = input.reportMarkdown?.trim() || "";
  const manifest = input.manifest ?? {};
  const inventory =
    (manifest.filesCreated?.length ?? 0) +
    (manifest.filesModified?.length ?? 0) +
    (manifest.filesDeleted?.length ?? 0) +
    (manifest.filesMoved?.length ?? 0) +
    (manifest.filesObserved?.length ?? 0);
  const testsCaptured = manifest.testsCaptured?.length ?? 0;
  const testsDeclared = manifest.testsDeclared?.length ?? 0;

  return criteria.map((criterion) => {
    const evidence = input.criterionEvidence?.[criterion];
    if (evidence?.verified && evidence.refs.length > 0) {
      return {
        criterion,
        status: "satisfied" as const,
        evidenceRefs: evidence.refs,
        note: "Preuve indépendante vérifiée (accessible + évaluée)",
      };
    }
    if (evidence && !evidence.verified) {
      return {
        criterion,
        status: "accessible" as const,
        evidenceRefs: evidence.refs,
        note: "Réf. accessible mais non vérifiée comme satisfaction",
      };
    }
    // Lexical presence in report = declared only — NEVER satisfied.
    if (report && report.toLowerCase().includes(criterion.toLowerCase().slice(0, 40))) {
      return {
        criterion,
        status: "declared" as const,
        evidenceRefs: [],
        note: "Présence textuelle dans le rapport ≠ satisfaction (CA-07)",
      };
    }
    if (inventory > 0 && testsCaptured > 0 && testsCaptured >= testsDeclared) {
      return {
        criterion,
        status: "observed" as const,
        evidenceRefs: (manifest.filesObserved ?? []).slice(0, 3),
        note: "Inventaire/tests capturés observés — critère non lié explicitement",
      };
    }
    if (!report) {
      return {
        criterion,
        status: "unknown" as const,
        evidenceRefs: [],
        note: "Rapport absent — critère non évaluable",
      };
    }
    return {
      criterion,
      status: "unknown" as const,
      evidenceRefs: [],
      note: "Aucune preuve indépendante rattachée au critère",
    };
  });
}

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

  const criteria = input.acceptanceCriteria ?? [];
  const expectedProofs = input.expectedProofs ?? [];
  const moved = manifest.filesMoved?.length ?? 0;
  const inventoryAll = inventory + moved + (manifest.filesObserved?.length ?? 0);
  const criterionEvals = evaluateCriteria(input);

  if (!hasReport || !handoffOk) {
    limits.push("Rapport absent ou handoff non RECEIVED — bilan PARTIAL/UNKNOWN");
  }
  if (testsDeclared > testsCaptured) {
    limits.push("Tests déclarés sans preuve capturée — PASS refusé (T-07 / PF-PRV)");
  }
  if (testsExecuted > testsCaptured) {
    limits.push("Tests exécutés déclarés sans sortie capturée — non certifiables");
  }
  if (inventoryAll === 0 && hasReport) {
    limits.push("Inventaire fichiers vide — synthèse seule insuffisante");
  }
  if (criteria.length > 0) {
    limits.push(
      `Critères d'acceptation à confronter: ${criteria.length} — présence textuelle ≠ satisfaction`,
    );
    if (!hasReport) {
      limits.push("Rapport absent — critères non évaluables");
    }
    for (const c of criterionEvals) {
      limits.push(`CRITÈRE[${c.status}]: ${c.criterion.slice(0, 80)} — ${c.note}`);
    }
  }
  if (expectedProofs.length > 0 && (manifest.sourcesConsulted?.length ?? 0) === 0) {
    limits.push("Preuves attendues du contrat sans sources consultées listées");
  }
  const gitRequired = Boolean(input.gitRequired);
  if (gitRequired && input.gitFactsVerified == null) {
    limits.push(
      "Git D9 REQUIS mais indéterminé — conformité complète non prouvée (N/A ≠ vérifié)",
    );
  }
  if (input.gitFactsVerified === false) {
    limits.push(
      gitRequired
        ? "Faits Git D9 contradictoires ou non vérifiés — D8 refuse conformité (Git requis)"
        : "Faits Git D9 contradictoires — signalés (Git non requis pour conformité)",
    );
  }
  if (!gitRequired && input.gitFactsVerified == null) {
    limits.push("Git D9 N/A — non requis par le contrat");
  }
  if (manifest.git?.tipSha && input.gitFacts?.length) {
    const tip = manifest.git.tipSha;
    const match = input.gitFacts.some((f) => f.sha && f.sha === tip);
    if (!match) {
      limits.push("tipSha manifeste ≠ faits Git D9 — contradiction (T-08)");
    }
  }

  // C24 — no tests declared ⇒ testsPass N/A (true). Declared tests require captures.
  const testsPass =
    testsDeclared === 0
      ? true
      : testsCaptured >= testsDeclared &&
        testsExecuted <= testsCaptured &&
        !(manifest.gaps ?? []).some((g) => /test|échec|fail/i.test(g));

  const allCriteriaSatisfied =
    criteria.length > 0 &&
    criterionEvals.every((c) => c.status === "satisfied");
  const noCriterionFailed = criterionEvals.every(
    (c) => c.status !== "not_satisfied",
  );
  // C24 reprise — Git non requis: null OK; Git requis: must be true (not merely !== false).
  const gitOkForConformity = gitRequired
    ? input.gitFactsVerified === true
    : input.gitFactsVerified !== false;
  const conformityProven =
    handoffOk &&
    hasReport &&
    testsPass &&
    allCriteriaSatisfied &&
    gitOkForConformity &&
    !(manifest.gaps ?? []).length;

  const rubrics: D8Rubric[] = [
    {
      key: "resume",
      title: RUBRIC_TITLES.resume,
      content: hasReport ? report.slice(0, 800) : "Rapport manquant",
      coverage: hasReport ? (conformityProven ? "COMPLETE" : "PARTIAL") : "MISSING",
    },
    {
      key: "prevu",
      title: RUBRIC_TITLES.prevu,
      content: [
        `Contrat fingerprint ${input.contractFingerprint}`,
        criteria.length ? `Critères: ${criteria.join(" · ")}` : "Critères absents",
        expectedProofs.length
          ? `Preuves attendues: ${expectedProofs.join(" · ")}`
          : "Preuves attendues non listées",
      ].join("\n"),
      coverage: input.contractFingerprint && criteria.length > 0 ? "COMPLETE" : "PARTIAL",
    },
    {
      key: "realise",
      title: RUBRIC_TITLES.realise,
      content: `Inventaire: +${manifest.filesCreated?.length ?? 0} ~${manifest.filesModified?.length ?? 0} -${manifest.filesDeleted?.length ?? 0} ↔${moved} observés=${manifest.filesObserved?.length ?? 0}`,
      coverage: inventoryAll > 0 ? "PARTIAL" : hasReport ? "PARTIAL" : "MISSING",
    },
    {
      key: "evaluation",
      title: RUBRIC_TITLES.evaluation,
      content: [
        `Tests déclarés=${testsDeclared} exécutés=${testsExecuted} capturés=${testsCaptured}`,
        `testsPass=${testsPass}`,
        ...criterionEvals.map(
          (c) => `${c.status}: ${c.criterion.slice(0, 60)}`,
        ),
      ].join("\n"),
      coverage: testsPass && allCriteriaSatisfied ? "COMPLETE" : testsCaptured > 0 ? "PARTIAL" : "MISSING",
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
      content: [
        `Terminal SDK: ${input.terminalStatus ?? "unknown"}`,
        manifest.git?.tipSha ? `Git tip déclaré: ${manifest.git.tipSha}` : "Git tip absent",
        input.gitFactsVerified == null
          ? "D9 non consulté"
          : input.gitFactsVerified
            ? "D9 aligné"
            : "D9 divergent",
      ].join("\n"),
      coverage: input.terminalStatus ? "PARTIAL" : "UNKNOWN",
    },
    {
      key: "verdict",
      title: RUBRIC_TITLES.verdict,
      content: `conformityProven=${conformityProven} — jamais ADOPTED ni réception D6`,
      coverage: conformityProven ? "COMPLETE" : "PARTIAL",
    },
    {
      key: "recommandations",
      title: RUBRIC_TITLES.recommandations,
      content: conformityProven
        ? "Bilan technique positif — réception humaine D6 distincte requise"
        : "Suite éventuelle = nouveau contrat + acte D6 (pas de relance aveugle)",
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
  if (!hasReport || !handoffOk) {
    verdict = "INDETERMINATE";
  } else if (
    criterionEvals.some((c) => c.status === "not_satisfied") ||
    input.gitFactsVerified === false
  ) {
    verdict = "NON_CONFORMING";
  } else if (conformityProven && noCriterionFailed) {
    verdict = "CONFORMING";
    limits.push("CONFORMITY_PROVEN — critères satisfaits avec preuves vérifiées");
  } else if (
    testsDeclared > testsCaptured ||
    (manifest.gaps?.length ?? 0) > 0
  ) {
    verdict = "PARTIAL";
  } else if (inventoryAll > 0 && testsCaptured >= testsDeclared) {
    verdict = "PARTIAL";
    limits.push("Conformité forte non prouvée sans preuves indépendantes critère/D9");
  } else {
    verdict = "PARTIAL";
  }

  return {
    rubrics,
    verdict,
    limits,
    criteria: criterionEvals,
    testsPass,
    conformityProven,
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

export type NoraAnalysisKind =
  | "TECHNICAL_BRIEF"
  | "DETERMINISTIC_SYNTHESIS"
  | "NORA_COGNITIVE"
  | "UNAVAILABLE";

export function classifyAttachedNoraPayload(markdown: string | null | undefined): NoraAnalysisKind {
  if (!markdown?.trim()) return "UNAVAILABLE";
  if (markdown.includes("BRIEF TECHNIQUE DÉTERMINISTE")) return "TECHNICAL_BRIEF";
  if (markdown.includes("SYNTHÈSE DÉTERMINISTE CONSULTATIVE")) return "DETERMINISTIC_SYNTHESIS";
  if (markdown.includes("ANALYSE COGNITIVE NORA (D3)")) return "NORA_COGNITIVE";
  // Legacy mislabel from cycle 3 — treat as deterministic synthesis, not Nora cognitive.
  if (markdown.includes("ANALYSE COGNITIVE NORA — consultative")) {
    return "DETERMINISTIC_SYNTHESIS";
  }
  return "UNAVAILABLE";
}

/**
 * Deterministic consultative synthesis of the D8 dossier — NOT a Nora D3 cognitive run.
 * Kept for handoff packaging; classify as DETERMINISTIC_SYNTHESIS.
 */
export function buildDeterministicDossierSynthesis(input: {
  qualification: CursorQualificationResult;
  contractTitle?: string | null;
  attemptId: string;
  sourcesAccessible?: string[];
  dossierIncomplete?: boolean;
}): string {
  const q = input.qualification;
  const sources =
    input.sourcesAccessible?.length
      ? input.sourcesAccessible
      : q.rubrics.find((r) => r.key === "sources")?.content
        ? [q.rubrics.find((r) => r.key === "sources")!.content]
        : [];
  const incomplete =
    input.dossierIncomplete ||
    q.verdict === "INDETERMINATE" ||
    q.limits.some((l) => /absent|manqu|incomplet|contradict/i.test(l));

  const lines = [
    "[SYNTHÈSE DÉTERMINISTE CONSULTATIVE — pas un run cognitif Nora D3]",
    `Tentative: ${input.attemptId}`,
    input.contractTitle ? `Contrat: ${input.contractTitle}` : null,
    `Verdict D8 déjà établi: ${q.verdict} (cette synthèse ne le remplace pas).`,
    "",
    "## Lecture du dossier accessible",
    ...q.rubrics
      .filter((r) => r.coverage !== "MISSING")
      .map((r) => `- ${r.title} [${r.coverage}]: ${r.content.slice(0, 240)}`),
    "",
    "## Critères",
    ...(q.criteria?.length
      ? q.criteria.map((c) => `- [${c.status}] ${c.criterion.slice(0, 100)} — ${c.note}`)
      : ["- Aucun critère listé"]),
    "",
    "## Sources prises en compte",
    ...(sources.length ? sources.map((s) => `- ${s}`) : ["- Aucune source listée dans le dossier"]),
    "",
    "## Réserves",
    ...q.limits.map((l) => `- ${l}`),
    incomplete
      ? "- Dossier incomplet ou contradictoire — aucune conformité fabriquée."
      : q.conformityProven
        ? "- Conformité technique D8 établie — réception D6 distincte."
        : "- Dossier partiellement lisible — conformité forte non affirmée.",
    "",
    "## Note",
    "Un avis cognitif Nora requiert un run D3 sur ce dossier (attachNoraCognitive + generateNoraReply).",
    "Distinctions: synthèse déterministe ≠ brief technique ≠ qualification D8 ≠ avis Nora ≠ HumanDecision D6.",
  ];
  return lines.filter((l) => l != null).join("\n");
}

/** @deprecated Use buildDeterministicDossierSynthesis — name was misleading in cycle 3. */
export function buildNoraCognitiveAnalysis(
  input: Parameters<typeof buildDeterministicDossierSynthesis>[0],
): string {
  return buildDeterministicDossierSynthesis(input);
}

/**
 * Prompt envelope for a real D3 Nora cognitive analysis (CA-08).
 * Caller must invoke generateNoraReply; do not treat this string as NORA_COGNITIVE alone.
 */
export function buildNoraCognitiveAnalysisPrompt(input: {
  qualification: CursorQualificationResult;
  contractTitle?: string | null;
  attemptId: string;
  sourcesAccessible?: string[];
}): string {
  const syn = buildDeterministicDossierSynthesis({
    ...input,
    dossierIncomplete: input.qualification.verdict === "INDETERMINATE",
  });
  return [
    "Analyse cognitive finale unique pour la tentative suivante.",
    "Lis le dossier D8 ci-dessous. Produis un avis sourcé, consultatif, sans HumanDecision.",
    "Si le dossier est incomplet, dis-le explicitement. Ne fabrique pas de conformité.",
    "Préfixe ta réponse par: [ANALYSE COGNITIVE NORA (D3)]",
    "",
    syn,
  ].join("\n");
}
