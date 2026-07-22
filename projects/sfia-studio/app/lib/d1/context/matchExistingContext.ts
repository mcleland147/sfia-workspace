import { randomUUID } from "node:crypto";
import { buildExistingContextSnapshot } from "./buildSnapshot";
import { bandForScore, scoreProjectAgainstProposal } from "./scoring";
import {
  CONTEXT_MATCH_LIMITS,
  CONTEXT_MATCH_SCHEMA_VERSION,
  CONTEXT_MATCH_THRESHOLDS,
  type ContextEntityMatch,
  type ContextMatchResult,
  type ContextRecommendedAction,
  type ExistingContextSnapshot,
  type MatchExistingContextInput,
} from "./types";
import { logIntakeEvent } from "../intakeObservability";

function evidenceFromBreakdown(
  label: string,
  breakdown: ReturnType<typeof scoreProjectAgainstProposal>,
): string[] {
  const items: string[] = [];
  if (breakdown.exactName >= 1) {
    items.push(`Référence explicite au nom « ${label} »`);
  }
  if (breakdown.nameSimilarity >= 0.4) {
    items.push(
      `Similarité de nom estimée ${(breakdown.nameSimilarity * 100).toFixed(0)} %`,
    );
  }
  if (breakdown.objectiveOverlap >= 0.25) {
    items.push(
      `Chevauchement d’objectif estimé ${(breakdown.objectiveOverlap * 100).toFixed(0)} %`,
    );
  }
  if (breakdown.contextOverlap >= 0.25) {
    items.push(
      `Chevauchement de contexte estimé ${(breakdown.contextOverlap * 100).toFixed(0)} %`,
    );
  }
  if (breakdown.activeStatus < 1) {
    items.push("Projet non ACTIVE — reprise non automatique");
  }
  if (breakdown.recency >= 0.7) {
    items.push("Activité récente");
  }
  return items.slice(0, CONTEXT_MATCH_LIMITS.maxEvidenceItems);
}

function recommendForProject(
  outcomeType: string,
  band: ContextEntityMatch["scoreBand"],
  inactive: boolean,
): ContextRecommendedAction {
  if (outcomeType === "ANALYZE_ONLY") return "NO_ACTION";
  if (band === "BELOW_THRESHOLD" || band === "WEAK_MATCH") {
    return outcomeType === "OPEN_CYCLE_CANDIDATE"
      ? "ASK_CLARIFICATION"
      : "CREATE_NEW_PROJECT";
  }
  if (inactive) return "USE_EXISTING_PROJECT";
  if (outcomeType === "OPEN_CYCLE_CANDIDATE") return "OPEN_CYCLE_IN_PROJECT";
  return "USE_EXISTING_PROJECT";
}

/**
 * Deterministic existing-context matching.
 * GPT does not choose IDs — only real repository IDs are returned.
 * No mutation.
 */
export function matchExistingContext(
  input: MatchExistingContextInput,
): ContextMatchResult {
  const started = Date.now();
  logIntakeEvent("intake_context_lookup_started", {
    sessionLocalId: input.sessionLocalId,
    status: "started",
    proposalId: input.proposal.proposalId,
  });

  const snapshot: ExistingContextSnapshot =
    input.snapshotOverride ??
    buildExistingContextSnapshot({
      forceUnavailable: input.forceUnavailable === true,
    });

  logIntakeEvent("intake_context_snapshot_built", {
    sessionLocalId: input.sessionLocalId,
    status: snapshot.projectSourceStatus,
    proposalId: input.proposal.proposalId,
    sourceProjectCount: snapshot.sourceCounts.projects,
    truncationApplied: snapshot.truncationApplied,
    durationMs: Date.now() - started,
  });

  const sourceWarnings: string[] = [
    ...snapshot.sourceErrors.map((e) => `source:${e}`),
  ];
  if (snapshot.cycleSourceStatus === "UNAVAILABLE") {
    sourceWarnings.push(
      "Cycle D1 non implémenté — aucun candidat Cycle (source UNAVAILABLE).",
    );
  }
  if (snapshot.actionSourceStatus === "UNAVAILABLE") {
    sourceWarnings.push(
      "Action D1 non implémentée — aucun candidat Action (source UNAVAILABLE).",
    );
  }

  if (
    snapshot.projectSourceStatus === "UNAVAILABLE" ||
    snapshot.projectSourceStatus === "ERROR"
  ) {
    const result: ContextMatchResult = {
      schemaVersion: CONTEXT_MATCH_SCHEMA_VERSION,
      matchId: `match-${randomUUID()}`,
      proposalId: input.proposal.proposalId,
      snapshotId: snapshot.snapshotId,
      generatedAt: new Date().toISOString(),
      resultStatus: "CONTEXT_UNAVAILABLE",
      recommendedRouting: "ASK_CLARIFICATION",
      projectMatches: [],
      cycleMatches: [],
      actionMatches: [],
      ambiguity: false,
      noMatchReason: "Contexte Project indisponible — aucun faux no-match.",
      sourceWarnings,
      requiresHumanConfirmation: true,
    };
    logIntakeEvent("intake_context_unavailable", {
      sessionLocalId: input.sessionLocalId,
      status: "CONTEXT_UNAVAILABLE",
      proposalId: input.proposal.proposalId,
      durationMs: Date.now() - started,
      errorCode: snapshot.projectSourceStatus,
    });
    return result;
  }

  const scored: ContextEntityMatch[] = snapshot.projects.map((project) => {
    const breakdown = scoreProjectAgainstProposal({
      project,
      rawIntent: input.proposal.rawIntent,
      normalizedIntent: input.proposal.normalizedIntent,
      subject: input.proposal.subject,
      proposedObjective: input.proposal.proposedObjective,
    });
    const scoreBand = bandForScore(breakdown.finalScore, CONTEXT_MATCH_THRESHOLDS);
    const inactive = project.status !== "ACTIVE";
    const warnings: string[] = [];
    if (inactive) {
      warnings.push("Projet inactif (DRAFT) — aucune reprise automatique.");
    }
    if (breakdown.genericPenalty > 0) {
      warnings.push("Correspondance partiellement générique — vérifier manuellement.");
    }
    const recommendedAction = recommendForProject(
      input.proposal.proposedOutcomeType,
      scoreBand,
      inactive,
    );
    return {
      entityType: "PROJECT" as const,
      entityId: project.projectId,
      label: project.name,
      status: project.status,
      score: breakdown.finalScore,
      scoreBand,
      rationale: `Score estimé ${(breakdown.finalScore * 100).toFixed(0)} % — estimation déterministe, pas une vérité.`,
      evidence: evidenceFromBreakdown(project.name, breakdown),
      warnings,
      recommendedAction,
      scoreBreakdown: breakdown,
    };
  });

  // Stable sort: score desc, then label, then id
  scored.sort((a, b) => {
    if (b.score !== a.score) return b.score - a.score;
    const l = a.label.localeCompare(b.label, "fr");
    if (l !== 0) return l;
    return a.entityId.localeCompare(b.entityId);
  });

  const presentable = scored
    .filter((m) => m.score >= CONTEXT_MATCH_THRESHOLDS.weak)
    .slice(0, CONTEXT_MATCH_LIMITS.maxCandidatesPerType);

  const analyzeOnly = input.proposal.proposedOutcomeType === "ANALYZE_ONLY";

  if (analyzeOnly) {
    const informational = presentable.map((m) => ({
      ...m,
      recommendedAction: "NO_ACTION" as const,
      warnings: [
        ...m.warnings,
        "ANALYZE_ONLY — candidats informatifs uniquement, aucun rattachement forcé.",
      ],
    }));
    const result: ContextMatchResult = {
      schemaVersion: CONTEXT_MATCH_SCHEMA_VERSION,
      matchId: `match-${randomUUID()}`,
      proposalId: input.proposal.proposalId,
      snapshotId: snapshot.snapshotId,
      generatedAt: new Date().toISOString(),
      resultStatus:
        informational.length === 0
          ? "NO_MATCH"
          : informational[0].scoreBand === "STRONG_MATCH"
            ? "STRONG_MATCH"
            : "POSSIBLE_MATCH",
      recommendedRouting: "ANALYZE_ONLY",
      projectMatches: informational,
      cycleMatches: [],
      actionMatches: [],
      ambiguity: false,
      noMatchReason:
        informational.length === 0
          ? "Aucun projet proche — analyse seule sans rattachement."
          : null,
      sourceWarnings,
      requiresHumanConfirmation: true,
    };
    logIntakeEvent("intake_context_match_generated", {
      sessionLocalId: input.sessionLocalId,
      status: result.resultStatus,
      proposalId: input.proposal.proposalId,
      candidateCount: informational.length,
      topScoreBand: informational[0]?.scoreBand,
      durationMs: Date.now() - started,
    });
    return result;
  }

  if (presentable.length === 0) {
    const result: ContextMatchResult = {
      schemaVersion: CONTEXT_MATCH_SCHEMA_VERSION,
      matchId: `match-${randomUUID()}`,
      proposalId: input.proposal.proposalId,
      snapshotId: snapshot.snapshotId,
      generatedAt: new Date().toISOString(),
      resultStatus: "NO_MATCH",
      recommendedRouting:
        input.proposal.proposedOutcomeType === "OPEN_CYCLE_CANDIDATE"
          ? "ASK_CLARIFICATION"
          : "CREATE_NEW_PROJECT",
      projectMatches: [],
      cycleMatches: [],
      actionMatches: [],
      ambiguity: false,
      noMatchReason:
        snapshot.projectSourceStatus === "EMPTY"
          ? "Aucun projet dans le workspace."
          : "Aucun projet suffisamment pertinent (seuil faible).",
      sourceWarnings,
      requiresHumanConfirmation: true,
    };
    logIntakeEvent("intake_context_no_match", {
      sessionLocalId: input.sessionLocalId,
      status: "NO_MATCH",
      proposalId: input.proposal.proposalId,
      sourceProjectCount: snapshot.sourceCounts.projects,
      durationMs: Date.now() - started,
    });
    return result;
  }

  const top = presentable[0];
  const second = presentable[1];
  const ambiguity =
    !!second &&
    Math.abs(top.score - second.score) < CONTEXT_MATCH_THRESHOLDS.ambiguityGap &&
    second.score >= CONTEXT_MATCH_THRESHOLDS.weak;

  let resultStatus: ContextMatchResult["resultStatus"];
  let recommendedRouting: ContextRecommendedAction;

  if (ambiguity) {
    resultStatus = "MULTIPLE_MATCHES";
    recommendedRouting = "ASK_CLARIFICATION";
  } else if (top.scoreBand === "STRONG_MATCH") {
    resultStatus = "STRONG_MATCH";
    recommendedRouting = top.recommendedAction;
  } else if (
    presentable.filter(
      (m) =>
        m.scoreBand === "STRONG_MATCH" || m.scoreBand === "POSSIBLE_MATCH",
    ).length > 1
  ) {
    resultStatus = "MULTIPLE_MATCHES";
    recommendedRouting = "ASK_CLARIFICATION";
  } else if (top.scoreBand === "POSSIBLE_MATCH" || top.scoreBand === "WEAK_MATCH") {
    resultStatus = "POSSIBLE_MATCH";
    recommendedRouting = top.recommendedAction;
  } else {
    resultStatus = "NO_MATCH";
    recommendedRouting = "CREATE_NEW_PROJECT";
  }

  const result: ContextMatchResult = {
    schemaVersion: CONTEXT_MATCH_SCHEMA_VERSION,
    matchId: `match-${randomUUID()}`,
    proposalId: input.proposal.proposalId,
    snapshotId: snapshot.snapshotId,
    generatedAt: new Date().toISOString(),
    resultStatus,
    recommendedRouting,
    projectMatches: presentable,
    cycleMatches: [],
    actionMatches: [],
    ambiguity,
    noMatchReason: null,
    sourceWarnings,
    requiresHumanConfirmation: true,
  };

  if (ambiguity) {
    logIntakeEvent("intake_context_match_ambiguous", {
      sessionLocalId: input.sessionLocalId,
      status: "MULTIPLE_MATCHES",
      proposalId: input.proposal.proposalId,
      candidateCount: presentable.length,
      topScoreBand: top.scoreBand,
      durationMs: Date.now() - started,
    });
  } else {
    logIntakeEvent("intake_context_match_generated", {
      sessionLocalId: input.sessionLocalId,
      status: resultStatus,
      proposalId: input.proposal.proposalId,
      candidateCount: presentable.length,
      topScoreBand: top.scoreBand,
      durationMs: Date.now() - started,
    });
  }

  return result;
}
