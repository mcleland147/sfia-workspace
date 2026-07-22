import {
  GENERIC_MATCH_TOKENS,
  containsNormalizedPhrase,
  jaccard,
  normalizeText,
  tokenize,
  tokenSet,
} from "./normalize";
import type {
  ScoreBreakdown,
  SnapshotProjectCandidate,
} from "./types";
import { CONTEXT_MATCH_LIMITS } from "./types";

function clamp01(n: number): number {
  if (Number.isNaN(n)) return 0;
  return Math.max(0, Math.min(1, n));
}

function recencyScore(updatedAt: string, nowMs: number): number {
  const t = Date.parse(updatedAt);
  if (Number.isNaN(t)) return 0;
  const ageDays = Math.max(0, (nowMs - t) / (1000 * 60 * 60 * 24));
  if (ageDays <= 7) return 1;
  if (ageDays <= 30) return 0.7;
  if (ageDays <= 90) return 0.4;
  if (ageDays <= 365) return 0.2;
  return 0.05;
}

export interface ScoreProjectInput {
  project: SnapshotProjectCandidate;
  rawIntent: string;
  normalizedIntent: string;
  subject: string;
  proposedObjective: string;
  nowMs?: number;
}

/**
 * Deterministic project score with explainable breakdown.
 * Weights are local candidates — not a global baseline.
 */
export function scoreProjectAgainstProposal(
  input: ScoreProjectInput,
): ScoreBreakdown {
  const { project } = input;
  const nowMs = input.nowMs ?? Date.now();
  const maxLen = CONTEXT_MATCH_LIMITS.maxNormalizedTextLength;

  const queryText = [
    input.rawIntent,
    input.normalizedIntent,
    input.subject,
    input.proposedObjective,
  ].join(" ");

  const nameNorm = normalizeText(project.name, maxLen);
  const exactName =
    containsNormalizedPhrase(queryText, project.name) ||
    normalizeText(input.subject, maxLen) === nameNorm ||
    normalizeText(input.normalizedIntent, maxLen) === nameNorm
      ? 1
      : 0;

  const queryTokens = tokenSet(queryText, maxLen);
  const nameTokens = tokenSet(project.name, maxLen);
  const objectiveTokens = tokenSet(project.objective, maxLen);
  const contextTokens = tokenSet(project.initialContextSummary ?? "", maxLen);
  const subjectTokens = tokenSet(input.subject, maxLen);
  const proposedObjTokens = tokenSet(input.proposedObjective, maxLen);

  const nameSimilarity = Math.max(
    jaccard(nameTokens, queryTokens),
    jaccard(nameTokens, subjectTokens),
  );

  const objectiveOverlap = Math.max(
    jaccard(objectiveTokens, queryTokens),
    jaccard(objectiveTokens, proposedObjTokens),
    jaccard(objectiveTokens, subjectTokens),
  );

  const contextOverlap = jaccard(contextTokens, queryTokens);

  const explicitReference = exactName === 1 ? 1 : nameSimilarity >= 0.85 ? 0.7 : 0;

  const activeStatus = project.status === "ACTIVE" ? 1 : 0.35;
  const recency = recencyScore(project.updatedAt, nowMs);

  const allOverlap = new Set<string>();
  for (const t of queryTokens) {
    if (
      nameTokens.has(t) ||
      objectiveTokens.has(t) ||
      contextTokens.has(t)
    ) {
      allOverlap.add(t);
    }
  }
  const meaningful = [...allOverlap].filter((t) => !GENERIC_MATCH_TOKENS.has(t));
  const genericOnly =
    allOverlap.size > 0 && meaningful.length === 0 && exactName === 0;
  const genericPenalty = genericOnly
    ? 0.18
    : tokenize(project.name).every((t) => GENERIC_MATCH_TOKENS.has(t))
      ? 0.08
      : 0;

  const weighted =
    exactName * 0.4 +
    nameSimilarity * 0.18 +
    objectiveOverlap * 0.14 +
    contextOverlap * 0.08 +
    explicitReference * 0.12 +
    activeStatus * 0.04 +
    recency * 0.04 -
    genericPenalty;

  let finalScore = clamp01(Number(weighted.toFixed(4)));
  // Exact name reference is a strong signal — never leave it just under STRONG.
  if (exactName >= 1) {
    finalScore = clamp01(Math.max(finalScore, 0.82));
  }

  return {
    exactName,
    nameSimilarity: Number(nameSimilarity.toFixed(4)),
    objectiveOverlap: Number(objectiveOverlap.toFixed(4)),
    contextOverlap: Number(contextOverlap.toFixed(4)),
    explicitReference,
    activeStatus,
    recency: Number(recency.toFixed(4)),
    genericPenalty,
    finalScore,
  };
}

export function bandForScore(
  score: number,
  thresholds: { strong: number; possible: number; weak: number },
): "STRONG_MATCH" | "POSSIBLE_MATCH" | "WEAK_MATCH" | "BELOW_THRESHOLD" {
  if (score >= thresholds.strong) return "STRONG_MATCH";
  if (score >= thresholds.possible) return "POSSIBLE_MATCH";
  if (score >= thresholds.weak) return "WEAK_MATCH";
  return "BELOW_THRESHOLD";
}
