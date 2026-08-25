/**
 * GAP-4 — bounded post-Evidence Nora/provider analysis.
 * Uses resolveConversationProvider() only. Never instantiates OpenAI here.
 * Result is a Recommendation, never a HumanDecision / GO / new contract.
 */

import { resolveConversationProvider } from "@/lib/platform/ai";

export const POST_EVIDENCE_NORA_SENTINEL =
  "[[SFIA_POST_EVIDENCE_NORA_ANALYSIS]]" as const;
export const POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL =
  "[[SFIA_POST_EVIDENCE_NORA_UNAVAILABLE]]" as const;
/** Exact post-Evidence Recommendation payload — durable in existing LPS context. */
export const W3C_POST_EVIDENCE_RECOMMENDATION_SENTINEL =
  "[[W3C_POST_EVIDENCE_RECOMMENDATION_V1]]" as const;

export type PostEvidenceAnalysisFacts = {
  projectId: string;
  executionContractId: string;
  executionContractStatus: string;
  executionContractAction: string;
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
Tu produis UNIQUEMENT une recommandation non autoritaire à partir des faits durables fournis.
Interdit:
- créer une HumanDecision;
- transformer la recommandation en GO Morris;
- lancer un ExecutionContract / Attempt;
- demander des secrets;
- inventer une preuve REAL.
Réponds en français, court, factuel.`;

function boundedFactsJson(facts: PostEvidenceAnalysisFacts): string {
  return JSON.stringify({
    projectId: facts.projectId,
    executionContractId: facts.executionContractId,
    executionContractStatus: facts.executionContractStatus,
    executionContractAction: facts.executionContractAction,
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
  });
}

export async function analyzePostEvidenceWithProvider(
  facts: PostEvidenceAnalysisFacts,
): Promise<PostEvidenceAnalysisResult> {
  let providerId: string | null = null;
  try {
    const provider = resolveConversationProvider();
    providerId = provider.providerId;
    const completion = await provider.complete([
      { role: "system", content: ANALYSIS_SYSTEM },
      {
        role: "user",
        content: `Faits durables post-Evidence (bornés):\n${boundedFactsJson(facts)}`,
      },
    ]);
    const text = completion.text.trim();
    if (!text) {
      return {
        ok: false,
        code: "POST_EVIDENCE_ANALYSIS_UNAVAILABLE",
        message: "Provider post-Evidence a renvoyé un texte vide.",
        providerId,
      };
    }
    return { ok: true, text: text.slice(0, 4000), providerId };
  } catch (err) {
    const message =
      err instanceof Error ? err.message : "provider_post_evidence_failed";
    return {
      ok: false,
      code: "POST_EVIDENCE_ANALYSIS_UNAVAILABLE",
      message,
      providerId,
    };
  }
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
