/**
 * GAP-4 — bounded post-Evidence Nora/provider analysis.
 * Uses shared runNoraCognitiveCompletion (mode=post_execution). Never instantiates OpenAI here.
 * Result is a Recommendation, never a HumanDecision / GO / new contract.
 *
 * W3-D / US-P1-14: when a resolved product-native CKC prompt section is supplied,
 * it is injected into the same cognitive marker seam used by F2/W2 — no parallel
 * resolver / orchestrator. Absence of CKC is handled by the caller (fail-closed).
 *
 * IMPORTANT: do not import `@/features/project-assistant/f2/ckcCognitiveContext`
 * here — that module loads Node filesystem doctrine I/O and must stay off the
 * client presentation graph (presentationLabels → postEvidenceNoraAnalysis).
 */

import { buildPostEvidenceNarrativePolicyDisclosure } from "@/lib/nora-cognitive-runtime/postEvidenceNarrativePolicy";
import { runNoraCognitiveCompletion } from "@/lib/nora-cognitive-runtime/noraCognitiveCompletion";
import {
  POST_EVIDENCE_NORA_SENTINEL,
  POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL,
  W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL,
} from "./postEvidenceNoraSentinels";

export {
  POST_EVIDENCE_NORA_SENTINEL,
  POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL,
  W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL,
} from "./postEvidenceNoraSentinels";

/** Same marker string as f2/ckcCognitiveContext — keep in sync (string only). */
const CKC_COGNITIVE_REASONING_SYSTEM_MARKER =
  "SFIA Studio CKC COGNITIVE REASONING" as const;

export type PostEvidenceAnalysisFacts = {
  projectId: string;
  executionContractId: string;
  executionContractStatus: string;
  executionContractAction: string;
  /** Contract objective / WHAT when available (server-owned). */
  contractObjective?: string;
  attemptId: string;
  attemptStatus: string;
  selectedAgentRef: string;
  adapterRef: string;
  executionMode: string;
  realProcessInvoked: boolean;
  evidenceId: string;
  reviewBundleId: string;
  technicalResultRef: string | null;
  reservations: readonly string[];
  processRef?: string;
  exitCode?: number | null;
  timedOut?: boolean;
  durationMs?: number;
  stdout?: string;
  stderr?: string;
  /** Product outcome when post-Evidence analyzes an evidence gap. */
  productOutcome?: string;
  claimEvaluationId?: string;
  claimEvaluationStatus?: string;
  contractResultVerdict?: string;
  businessReason?: string;
  expectedOutputAssessmentSummary?: string;
  evidenceRequirementAssessmentSummary?: string;
  /** Sealed acceptance criteria statements (contract-first). */
  acceptanceCriteriaSummary?: string;
  expectedOutputsSummary?: string;
  validationPlanSummary?: string;
  workPerformedSummary?: string;
  stopReason?: string;
  blockersSummary?: string;
  outcomeKind?: string;
  /**
   * Durable artifact body for Nora review (server-owned).
   * Never claim FULL when truncated — completeness must be honest.
   */
  artifactReviewMaterial?: string;
  artifactReviewCompleteness?: "FULL" | "PARTIAL";
  /** Compact CursorExecutionReport claim summary (NOT Evidence). */
  cursorReportSummary?: string;
};

export type PostEvidenceAnalysisResult =
  | {
      ok: true;
      text: string;
      providerId: string;
    }
  | {
      ok: false;
      code: "POST_EVIDENCE_ANALYSIS_UNAVAILABLE";
      message: string;
      providerId: string | null;
    };

const ANALYSIS_SYSTEM = `Tu es Nora, analyste post-exécution SFIA Studio.
Ordre cognitif imposé (contract-first):
1) CONTRAT (objectif, expected outputs, critères d'acceptation, validations)
2) RÉSULTAT OBSERVÉ (travail réel, effets, stop/blocker — via CursorExecutionReport claim + vérifs Studio)
3) ARTIFACT REVIEWABLE (contenu durable FULL/PARTIAL fourni — ne jamais inventer ni demander au Pilote)
4) PREUVE (Evidence / ReviewBundle / ClaimEvaluation)
5) CONFORMITÉ (PASS / FAIL / NOT_PROVEN — jamais inventé)
6) IMPACT PROJET
7) RECOMMANDATION (jamais une HumanDecision, jamais une relance automatique)

Tu produis UNIQUEMENT une recommandation non autoritaire à partir des faits durables fournis.
Interdit:
- créer une HumanDecision;
- transformer la recommandation en GO Morris;
- lancer un ExecutionContract / Attempt;
- demander des secrets;
- inventer une preuve REAL;
- convertir not_proven / UNCLAIMED en succès produit;
- commenter le rapport Cursor sans d'abord confronter le contrat;
- affirmer avoir lu l'artifact si artifactReviewMaterial est absent;
- affirmer lecture FULL si artifactReviewCompleteness=PARTIAL.
Si productOutcome=UNCLAIMED et claimEvaluationStatus=not_proven :
l'exécution technique a pu réussir et un Artifact peut exister, mais le résultat
contractuel n'est pas prouvé faute d'Evidence suffisante sur les expectedOutputs.
Si stopReason / blockers sont présents: expliquer l'action tentée, la condition
bloquante, les effets non réalisés, l'impact, et le déblocage proposé.
Réponds en français, court, factuel.

${buildPostEvidenceNarrativePolicyDisclosure()}`;

function boundedFactsJson(facts: PostEvidenceAnalysisFacts): string {
  return JSON.stringify({
    projectId: facts.projectId,
    executionContractId: facts.executionContractId,
    executionContractStatus: facts.executionContractStatus,
    executionContractAction: facts.executionContractAction,
    contractObjective: facts.contractObjective,
    attemptId: facts.attemptId,
    attemptStatus: facts.attemptStatus,
    selectedAgentRef: facts.selectedAgentRef,
    adapterRef: facts.adapterRef,
    executionMode: facts.executionMode,
    realProcessInvoked: facts.realProcessInvoked,
    evidenceId: facts.evidenceId,
    reviewBundleId: facts.reviewBundleId,
    technicalResultRef: facts.technicalResultRef,
    reservations: [...facts.reservations],
    processRef: facts.processRef,
    exitCode: facts.exitCode,
    timedOut: facts.timedOut,
    durationMs: facts.durationMs,
    stdout: facts.stdout,
    stderr: facts.stderr,
    productOutcome: facts.productOutcome,
    claimEvaluationId: facts.claimEvaluationId,
    claimEvaluationStatus: facts.claimEvaluationStatus,
    contractResultVerdict: facts.contractResultVerdict,
    businessReason: facts.businessReason,
    expectedOutputAssessmentSummary: facts.expectedOutputAssessmentSummary,
    evidenceRequirementAssessmentSummary:
      facts.evidenceRequirementAssessmentSummary,
    acceptanceCriteriaSummary: facts.acceptanceCriteriaSummary,
    expectedOutputsSummary: facts.expectedOutputsSummary,
    validationPlanSummary: facts.validationPlanSummary,
    workPerformedSummary: facts.workPerformedSummary,
    stopReason: facts.stopReason,
    blockersSummary: facts.blockersSummary,
    outcomeKind: facts.outcomeKind,
    artifactReviewMaterial: facts.artifactReviewMaterial,
    artifactReviewCompleteness: facts.artifactReviewCompleteness,
    cursorReportSummary: facts.cursorReportSummary,
  });
}

export type AnalyzePostEvidenceOptions = {
  /**
   * Product-native CKC prompt section already built via
   * `buildCkcCognitivePromptSection` — never raw package paths for Pilote.
   */
  readonly ckcPromptSection?: string | null;
};

function buildPostEvidenceSystemPrompt(
  ckcPromptSection: string | null | undefined,
): string {
  const trimmed = ckcPromptSection?.trim();
  if (!trimmed) {
    return ANALYSIS_SYSTEM;
  }
  return `${ANALYSIS_SYSTEM}

${CKC_COGNITIVE_REASONING_SYSTEM_MARKER}
Contexte CKC résolu (guidance seulement — pas d'autorité, pas de décision humaine):
${trimmed}`;
}

export async function analyzePostEvidenceWithProvider(
  facts: PostEvidenceAnalysisFacts,
  options?: AnalyzePostEvidenceOptions,
): Promise<PostEvidenceAnalysisResult> {
  // Shared Nora cognitive CORE (Agents Runner) — mode=post_execution.
  // Same seam as conversation (runNoraCognitiveTurn → runNoraCognitiveCore).
  // No Memory B / MW5 / hosted search / tools — applied by core mode defaults.
  // This module must NOT be imported by client presentation (use postEvidenceNoraSentinels).
  const completion = await runNoraCognitiveCompletion({
    mode: "post_execution",
    system: buildPostEvidenceSystemPrompt(options?.ckcPromptSection),
    user: `Faits durables post-Evidence (bornés):\n${boundedFactsJson(facts)}`,
    maxChars: 4000,
    projectId: facts.projectId,
    correlationId: `cor:w3c-post-evidence:${facts.attemptId}`,
  });
  if (!completion.ok) {
    return {
      ok: false,
      code: "POST_EVIDENCE_ANALYSIS_UNAVAILABLE",
      message: completion.message,
      providerId: completion.providerId,
    };
  }
  return {
    ok: true,
    text: completion.text,
    providerId: completion.providerId ?? "unknown",
  };
}

/** Evidence-scoped LPS marker — binds Nora text to a specific W3-B evidenceId. */
export function w3cEvidenceLpsMarker(evidenceId: string): string {
  return `[[W3C_EVIDENCE:${evidenceId}]]`;
}

export function formatPostEvidenceAnalysisForLps(input: {
  analysisText?: string | null;
  unavailableReason?: string | null;
  /** When set, scopes the LPS sentinel block to this evidenceId (W3-C). */
  evidenceId?: string | null;
}): string | undefined {
  const evidenceLine =
    input.evidenceId && input.evidenceId.trim()
      ? `${w3cEvidenceLpsMarker(input.evidenceId.trim())}\n`
      : "";
  if (input.analysisText && input.analysisText.trim()) {
    return `${POST_EVIDENCE_NORA_SENTINEL}\n${evidenceLine}${input.analysisText.trim()}`;
  }
  if (input.unavailableReason) {
    return `${POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL}\n${evidenceLine}${input.unavailableReason}`;
  }
  return undefined;
}

/**
 * Last matching post-Evidence Nora block for a specific evidenceId.
 * Never returns another evidence's analysis (STALE binding guard at call site).
 */
export function extractW3cPostEvidenceAnalysisForEvidence(
  context: string | undefined,
  evidenceId: string,
): {
  analysisText: string | null;
  analysisUnavailableReason: string | null;
  matchedEvidenceId: string | null;
} {
  if (!context || !evidenceId) {
    return {
      analysisText: null,
      analysisUnavailableReason: null,
      matchedEvidenceId: null,
    };
  }
  const marker = w3cEvidenceLpsMarker(evidenceId);
  const availableNeedle = `${POST_EVIDENCE_NORA_SENTINEL}\n${marker}`;
  const unavailableNeedle = `${POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL}\n${marker}`;
  const availableIdx = context.lastIndexOf(availableNeedle);
  const unavailableIdx = context.lastIndexOf(unavailableNeedle);

  const sliceAfter = (idx: number, needle: string): string => {
    const start = idx + needle.length;
    const rest = context.slice(start);
    // Truncate at next sibling sentinel if present.
    const nextAvail = rest.indexOf(`\n${POST_EVIDENCE_NORA_SENTINEL}`);
    const nextUnavail = rest.indexOf(
      `\n${POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL}`,
    );
    const nextReco = rest.indexOf(
      `\n${W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL}`,
    );
    let end = rest.length;
    if (nextAvail >= 0) end = Math.min(end, nextAvail);
    if (nextUnavail >= 0) end = Math.min(end, nextUnavail);
    if (nextReco >= 0) end = Math.min(end, nextReco);
    return rest.slice(0, end).trim();
  };

  if (availableIdx >= 0 && availableIdx > unavailableIdx) {
    const text = sliceAfter(availableIdx, availableNeedle);
    return {
      analysisText: text.length > 0 ? text : null,
      analysisUnavailableReason: null,
      matchedEvidenceId: evidenceId,
    };
  }
  if (unavailableIdx >= 0) {
    const text = sliceAfter(unavailableIdx, unavailableNeedle);
    return {
      analysisText: null,
      analysisUnavailableReason: text.length > 0 ? text : "unavailable",
      matchedEvidenceId: evidenceId,
    };
  }
  return {
    analysisText: null,
    analysisUnavailableReason: null,
    matchedEvidenceId: null,
  };
}

/** Last Nora block in LPS context (any evidence) — legacy / unscoped. */
export function extractPostEvidenceAnalysisFromLpsContext(
  context: string | undefined,
): {
  analysisText: string | null;
  analysisUnavailableReason: string | null;
} {
  if (!context) {
    return { analysisText: null, analysisUnavailableReason: null };
  }
  const unavailableIdx = context.lastIndexOf(
    POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL,
  );
  const availableIdx = context.lastIndexOf(POST_EVIDENCE_NORA_SENTINEL);
  if (availableIdx >= 0 && availableIdx > unavailableIdx) {
    const text = context
      .slice(availableIdx + POST_EVIDENCE_NORA_SENTINEL.length)
      .trim();
    // Strip leading evidence marker if present.
    const cleaned = text.replace(/^\[\[W3C_EVIDENCE:[^\]]+\]\]\s*/u, "").trim();
    return {
      analysisText: cleaned.length > 0 ? cleaned : null,
      analysisUnavailableReason: null,
    };
  }
  if (unavailableIdx >= 0) {
    const text = context
      .slice(unavailableIdx + POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL.length)
      .trim();
    const cleaned = text.replace(/^\[\[W3C_EVIDENCE:[^\]]+\]\]\s*/u, "").trim();
    return {
      analysisText: null,
      analysisUnavailableReason: cleaned.length > 0 ? cleaned : "unavailable",
    };
  }
  return { analysisText: null, analysisUnavailableReason: null };
}

/** Detect which evidenceId owns the last LPS Nora block (if marked). */
export function lastW3cEvidenceIdInLpsContext(
  context: string | undefined,
): string | null {
  if (!context) return null;
  const re = /\[\[W3C_EVIDENCE:([^\]]+)\]\]/g;
  let last: string | null = null;
  let m: RegExpExecArray | null;
  while ((m = re.exec(context)) !== null) {
    last = m[1] ?? null;
  }
  return last;
}

/**
 * Durable exact Recommendation JSON in existing LPS context (no new table).
 * Bound to evidenceId so restart cannot reuse another terminal's semantics.
 */
export function formatW3cRecommendationPayloadForLps(input: {
  evidenceId: string;
  payloadJson: string;
}): string {
  const evidenceId = input.evidenceId.trim();
  const json = input.payloadJson.trim();
  return `${W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL}\n${w3cEvidenceLpsMarker(evidenceId)}\n${json}`;
}

/**
 * Extract exact Recommendation payload JSON for a specific evidenceId from LPS.
 * Returns null when absent (legacy LPS without V1 block).
 */
export function extractW3cRecommendationPayloadJsonForEvidence(
  context: string | undefined,
  evidenceId: string,
): string | null {
  if (!context || !evidenceId) return null;
  const marker = w3cEvidenceLpsMarker(evidenceId);
  const needle = `${W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL}\n${marker}\n`;
  const idx = context.lastIndexOf(needle);
  if (idx < 0) return null;
  const rest = context.slice(idx + needle.length);
  const nextSentinelCandidates = [
    rest.indexOf(`\n${POST_EVIDENCE_NORA_SENTINEL}`),
    rest.indexOf(`\n${POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL}`),
    rest.indexOf(`\n${W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL}`),
  ].filter((i) => i >= 0);
  const end = nextSentinelCandidates.length
    ? Math.min(...nextSentinelCandidates)
    : rest.length;
  const json = rest.slice(0, end).trim();
  return json.length > 0 ? json : null;
}
