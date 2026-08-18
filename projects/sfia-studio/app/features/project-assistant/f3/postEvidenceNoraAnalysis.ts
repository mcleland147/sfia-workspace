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

export function formatPostEvidenceAnalysisForLps(input: {
  analysisText?: string | null;
  unavailableReason?: string | null;
}): string | undefined {
  if (input.analysisText && input.analysisText.trim()) {
    return `${POST_EVIDENCE_NORA_SENTINEL}\n${input.analysisText.trim()}`;
  }
  if (input.unavailableReason) {
    return `${POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL}\n${input.unavailableReason}`;
  }
  return undefined;
}

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
    return {
      analysisText: text.length > 0 ? text : null,
      analysisUnavailableReason: null,
    };
  }
  if (unavailableIdx >= 0) {
    const text = context
      .slice(unavailableIdx + POST_EVIDENCE_NORA_UNAVAILABLE_SENTINEL.length)
      .trim();
    return {
      analysisText: null,
      analysisUnavailableReason: text.length > 0 ? text : "unavailable",
    };
  }
  return { analysisText: null, analysisUnavailableReason: null };
}
