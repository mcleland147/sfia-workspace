/**
 * Increment E — MorrisFinalDecision + CycleSummary builders.
 * Live GPT observation stops at AWAITING_MORRIS_FINAL_DECISION until Morris decides.
 * CycleSummary final state must not echo pre-decision awaiting-Morris gaps as current truth.
 */

import { randomUUID } from "node:crypto";
import type { GptVerdictCandidate } from "../types/gptVerdictCandidate.js";
import type { EvidenceAnalysisPack } from "../types/evidenceAnalysisPack.js";
import type {
  CycleSummary,
  CycleSummaryCandidateSnapshot,
  MorrisFinalAction,
  MorrisFinalDecision,
} from "../types/morrisFinalDecision.js";

export interface RecordMorrisDecisionInput {
  verdict: GptVerdictCandidate;
  pack: EvidenceAnalysisPack;
  action: MorrisFinalAction;
  rationale?: string;
  acceptedReservations?: string[];
  unresolvedReservations?: string[];
  consequences?: string[];
  requiresNewGo?: boolean;
  decidedAt?: string;
  decisionId?: string;
  /** If a decision was already recorded for this verdictId, block a second concurrent decision. */
  priorDecisionIdForVerdict?: string | null;
  qualificationCalls?: number;
  /** Technical regeneration: reuse summaryId / link previous. */
  summaryId?: string;
  previousSummaryId?: string;
  summarizedAt?: string;
}

export interface RecordMorrisDecisionResult {
  ok: boolean;
  code?: string;
  message: string;
  decision?: MorrisFinalDecision;
  summary?: CycleSummary;
  uiStatus?: string;
}

const DEFAULT_CLOSE_CONSEQUENCES = [
  "Autoriser la génération du CycleSummary",
  "Passer le vertical slice à CLOSED_WITH_RESERVATIONS",
  "Fermer le cycle fonctionnel A–E",
  "Conserver staging/commit/push/PR/merge sous gates séparés",
  "Aucune action Git",
  "Aucun claim MVP ou production",
];

const RESOLVED_BY_CLOSE_SLICE = [
  "Morris final decision enregistrée",
  "Clôture fonctionnelle autorisée",
  "CycleSummary autorisé",
  "Vertical slice passé à CLOSED_WITH_RESERVATIONS",
  "Attente de décision Morris levée",
  "Aucune transformation en claim MVP ou production",
];

/** Items that were awaiting Morris / Increment E completion — not current after CLOSE_SLICE. */
const RESOLVED_NOT_PROVEN = [
  /increment e completion/i,
  /morris final decision/i,
  /cl[oô]ture (du )?slice/i,
  /attente de d[eé]cision morris/i,
];

const RESOLVED_GAPS = [
  /no morris decision recorded/i,
  /morris decision (is )?still required/i,
  /closure (is )?not authorized/i,
  /closureAuthorized\s*=\s*false/i,
  /awaiting.?morris/i,
];

const RESOLVED_RISKS = [
  /closureAuthorized\s*=\s*false/i,
  /completion\/closure cannot be inferred/i,
  /candidate proof only;\s*a higher-level decision is still required/i,
  /higher-level decision is still required/i,
  /morris decision (is )?still required/i,
];

const RESOLVED_RESERVATION = [
  /candidate proof only\s*[—-]\s*morris decision required/i,
  /morris decision required/i,
  /awaiting.?morris/i,
];

function matchesAny(text: string, patterns: RegExp[]): boolean {
  return patterns.some((p) => p.test(text));
}

function filterOpen(items: string[], patterns: RegExp[]): string[] {
  return items.filter((item) => !matchesAny(item, patterns));
}

export function recordMorrisFinalDecision(input: RecordMorrisDecisionInput): RecordMorrisDecisionResult {
  const { verdict, pack, action } = input;

  if (input.priorDecisionIdForVerdict) {
    return {
      ok: false,
      code: "DECISION_ALREADY_RECORDED",
      message: `verdict ${verdict.verdictId} already has decision ${input.priorDecisionIdForVerdict}`,
    };
  }

  if (!verdict.candidateOnly || verdict.closureAuthorized !== false) {
    return { ok: false, code: "AUTHORITY_BREACH", message: "invalid candidate for decision" };
  }
  if (!verdict.morrisDecisionRequired) {
    return { ok: false, code: "AUTHORITY_BREACH", message: "candidate does not require Morris decision" };
  }

  if (action === "CLOSE_SLICE") {
    if (pack.reportCompleteness !== "complete" || pack.reviewPackCompleteness !== "complete") {
      return { ok: false, code: "PACK_INCOMPLETE", message: "CLOSE_SLICE requires complete pack" };
    }
    if (verdict.status === "ANALYSIS_INVALID" || verdict.status === "BLOCKED_BY_INCOMPLETE_EVIDENCE") {
      return { ok: false, code: "INVALID_RESPONSE", message: "cannot CLOSE_SLICE on blocked verdict" };
    }
  }

  const requiresNewGo = input.requiresNewGo ?? action === "RELAUNCH_WITH_NEW_GO";
  const closureAuthorized = action === "CLOSE_SLICE";
  const consequences: string[] =
    input.consequences ??
    (action === "CLOSE_SLICE"
      ? DEFAULT_CLOSE_CONSEQUENCES
      : action === "CORRECT"
        ? ["No automatic relaunch", "Evidence/verdict review required", "No Git action"]
        : action === "RELAUNCH_WITH_NEW_GO"
          ? ["New Morris GO required", "Prior Increment D GO not reusable", "No Git action"]
          : ["No positive closure", "No success claim", "No Git action"]);

  const acceptedReservations = input.acceptedReservations ?? [];
  const unresolvedReservations =
    input.unresolvedReservations ??
    verdict.reservations.filter((r) => !acceptedReservations.includes(r));

  const decision: MorrisFinalDecision = {
    schemaVersion: "morris-final-decision-1.0.0",
    decisionId: input.decisionId ?? `dec-inc-e-${randomUUID()}`,
    verdictId: verdict.verdictId,
    requestId: verdict.requestId,
    correlationId: verdict.correlationId,
    decidedBy: "Morris",
    decidedAt: input.decidedAt ?? new Date().toISOString(),
    action,
    rationale: input.rationale,
    acceptedReservations,
    unresolvedReservations,
    consequences,
    requiresNewGo,
    closureAuthorized,
    candidateClaimsAccepted: false,
    mvpClaim: false,
    productionReadyClaim: false,
  };

  if (action === "CLOSE_SLICE") {
    const summary = buildCycleSummary({
      decision,
      verdict,
      pack,
      analysisCalls: verdict.finOps.callNumber,
      qualificationCalls: input.qualificationCalls ?? 0,
      summaryId: input.summaryId,
      previousSummaryId: input.previousSummaryId,
      summarizedAt: input.summarizedAt,
    });
    return {
      ok: true,
      message: "CLOSE_SLICE recorded",
      decision,
      summary,
      uiStatus: "CLOSED_WITH_RESERVATIONS",
    };
  }

  if (action === "ABANDON") {
    return {
      ok: true,
      message: "ABANDON recorded — no positive success",
      decision,
      uiStatus: "ABANDONED",
    };
  }

  return {
    ok: true,
    message: `${action} recorded`,
    decision,
    uiStatus: action === "CORRECT" ? "AWAITING_CORRECTION" : "AWAITING_NEW_GO",
  };
}

/**
 * Technical regeneration of CycleSummary after CLOSE_SLICE without a new Morris decision.
 * Preserves decisionId / decidedAt; may mint a new summaryId linked via previousSummaryId.
 */
export function regenerateCycleSummary(input: {
  decision: MorrisFinalDecision;
  verdict: GptVerdictCandidate;
  pack: EvidenceAnalysisPack;
  analysisCalls: number;
  qualificationCalls?: number;
  previousSummaryId?: string;
  summaryId?: string;
}): { ok: true; summary: CycleSummary; message: string } | { ok: false; code: string; message: string } {
  if (input.decision.action !== "CLOSE_SLICE" || !input.decision.closureAuthorized) {
    return { ok: false, code: "INVALID_RESPONSE", message: "regeneration requires CLOSE_SLICE decision" };
  }
  if (input.decision.verdictId !== input.verdict.verdictId) {
    return { ok: false, code: "INVALID_RESPONSE", message: "verdictId mismatch" };
  }
  if (!input.verdict.candidateOnly || input.verdict.closureAuthorized !== false) {
    return { ok: false, code: "AUTHORITY_BREACH", message: "candidate snapshot invariants breached" };
  }
  const summary = buildCycleSummary({
    decision: input.decision,
    verdict: input.verdict,
    pack: input.pack,
    analysisCalls: input.analysisCalls,
    qualificationCalls: input.qualificationCalls ?? 0,
    summaryId: input.summaryId,
    previousSummaryId: input.previousSummaryId,
  });
  return { ok: true, summary, message: "CycleSummary regenerated (technical)" };
}

export function buildCycleSummary(input: {
  decision: MorrisFinalDecision;
  verdict: GptVerdictCandidate;
  pack: EvidenceAnalysisPack;
  analysisCalls: number;
  qualificationCalls?: number;
  summaryId?: string;
  previousSummaryId?: string;
  summarizedAt?: string;
}): CycleSummary {
  if (!input.decision.closureAuthorized || input.decision.action !== "CLOSE_SLICE") {
    throw new Error("CycleSummary only after CLOSE_SLICE");
  }

  const candidateSnapshot: CycleSummaryCandidateSnapshot = {
    status: input.verdict.status,
    candidateOnly: true,
    closureAuthorized: false,
    morrisDecisionRequired: true,
    notProven: [...input.verdict.notProven],
    gaps: [...input.verdict.gaps],
    risks: [...input.verdict.risks],
    reservations: [...input.verdict.reservations],
  };

  const historicalAnalysisContext = [
    "Le verdict GPT était candidat uniquement (candidateOnly=true)",
    "Au moment de l’analyse, MorrisFinalDecision n’existait pas",
    "closureAuthorized était false dans le candidat",
    "morrisDecisionRequired était true dans le candidat",
    `Statut candidat historique: ${input.verdict.status}`,
  ];

  const trajectoryProven = [
    "Parcours A→E cohérent",
    "Quatre routes P0 conservées",
    "Studio reste un cockpit dérivé",
    "Harness reste l’autorité technique",
    "GPT produit uniquement des candidats",
    "Morris reste l’autorité de décision",
    "Qualification GPT réelle bornée",
    "Cursor réel exécuté après GO revalidé",
    "Analyse GPT réelle bornée",
    "Contrôles fail-closed fonctionnels",
    "Aucun retry automatique",
    "FinOps séparé",
    "Preuves et IDs corrélés",
    "Décision finale humaine",
    "Clôture slice-only",
    "Increment E completion (clôture fonctionnelle CLOSE_SLICE)",
    "Morris final decision enregistrée",
    ...input.verdict.proven,
  ];

  const baseNotProven = [
    "Environnement production",
    "Sandbox OS/réseau forte",
    "Fonctionnement multi-projet",
    "Orchestration industrielle",
    "Disponibilité et résilience de service",
    "Sécurité homologuée",
    "Scalabilité",
    "CI/CD complète",
    "MVP produit",
    "production readiness",
    "industrialisation",
    "Studio complete status",
    ...input.verdict.notProven,
  ];

  const notProven = [...new Set(filterOpen(baseNotProven, RESOLVED_NOT_PROVEN))];
  const gaps = filterOpen([...input.verdict.gaps], RESOLVED_GAPS);
  const risks = filterOpen([...input.verdict.risks], RESOLVED_RISKS);

  const unresolvedReservations = [...input.decision.unresolvedReservations];
  const acceptedReservations = [...input.decision.acceptedReservations];
  // Final open reservations = unresolved only (do not re-echo pre-decision candidate awaits)
  const reservations = unresolvedReservations.filter((r) => !matchesAny(r, RESOLVED_RESERVATION));

  return {
    schemaVersion: "cycle-summary-1.0.0",
    summaryId: input.summaryId ?? `sum-inc-e-${randomUUID()}`,
    previousSummaryId: input.previousSummaryId,
    requestId: input.verdict.requestId,
    correlationId: input.verdict.correlationId,
    verdictId: input.verdict.verdictId,
    decisionId: input.decision.decisionId,
    finalStatus: "CLOSED_WITH_RESERVATIONS",
    morrisDecisionRecorded: true,
    closureAuthorized: true,
    markdownArtifact: input.pack.filesCreated[0] ?? "projects/sfia-studio/.sandbox/increment-d/output.md",
    executionEvidence: input.pack.executionId,
    proven: trajectoryProven,
    notProven,
    gaps,
    risks,
    reservations,
    unresolvedReservations,
    acceptedReservations,
    resolvedByMorrisDecision: [...RESOLVED_BY_CLOSE_SLICE],
    candidateSnapshot,
    historicalAnalysisContext,
    finalState: {
      finalStatus: "CLOSED_WITH_RESERVATIONS",
      morrisDecisionRecorded: true,
      closureAuthorized: true,
      action: "CLOSE_SLICE",
      awaitingMorrisDecision: false,
    },
    qualificationFinOps: {
      calls: input.qualificationCalls ?? 0,
      note: "qualification counter separate from analysis — unchanged by CLOSE_SLICE",
    },
    analysisFinOps: {
      calls: input.analysisCalls,
      note: "analysis phase only — no new GPT call on CLOSE_SLICE",
    },
    timestamps: {
      decidedAt: input.decision.decidedAt,
      summarizedAt: input.summarizedAt ?? new Date().toISOString(),
    },
    traceability: {
      analysisRequestId: input.pack.analysisRequestId,
      executionId: input.pack.executionId,
      contractId: input.pack.contractId,
      packHash: input.pack.packHash,
      increments: ["A", "B", "C", "D", "E"],
      trajectory: {
        A: "Cockpit statique et mapping des dix états sur quatre vues",
        B: "Liaison Studio ↔ harness en mode fixture, contrats, gates, journal et preuves",
        C: "Qualification GPT réelle bornée, fail-closed et FinOps visible",
        D: "Exécution Cursor réelle contrôlée dans une sandbox mono-fichier, STOP, timeout et rapport",
        E: "Analyse GPT réelle du paquet de preuves, verdict candidat, décision finale Morris et clôture slice-only",
      },
    },
    scope: "current-vertical-slice-only",
    mvpClaim: false,
    productionReadyClaim: false,
  };
}
