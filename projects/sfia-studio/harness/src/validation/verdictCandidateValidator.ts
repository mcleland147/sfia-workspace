/**
 * Increment E — validate GptVerdictCandidate model payload (fail-closed).
 *
 * Affirmative MVP/production/Morris-closure claims are rejected.
 * Prudent negations (e.g. "not production-ready") are allowed.
 */

import {
  GPT_VERDICT_CANDIDATE_SCHEMA,
  type GptVerdictModelPayload,
  type GptVerdictStatus,
} from "../types/gptVerdictCandidate.js";

const STATUSES = new Set<GptVerdictStatus>([
  "PROVED_WITH_RESERVATIONS",
  "PARTIALLY_PROVED",
  "NOT_PROVED",
  "BLOCKED_BY_INCOMPLETE_EVIDENCE",
  "ANALYSIS_INVALID",
]);

/** Negated / prudent phrasing removed before affirmative-claim scan. */
const NEGATED_CLAIM_PHRASES =
  /\b(?:not|no|never|without)\s+(?:an?\s+)?(?:MVP[- ]ready|production[- ]ready|production ready|MVP claim|production readiness|production claim|closure)\b|\b(?:does not|do not|don't|doesn't)\s+(?:prove|authorize|declare)\s+(?:production readiness|MVP|closure)\b|\b(?:no\s+)?MVP claim(?:\s+is)?\s+(?:made|authorized|accepted)\b|\bclosure\s+(?:is\s+)?not\s+authorized\b|\bMorris decision\s+(?:is\s+)?(?:still\s+)?required\b|\bdecision Morris\s+(?:est\s+)?(?:toujours\s+)?requise?\b/gi;

/** Affirmative MVP / production / completeness claims. */
const FORBIDDEN_CLAIM =
  /\b(?:is|as|declared|declares|now|fully|already|becomes?|validated|approved)\s+(?:as\s+)?(?:MVP[- ]ready|production[- ]ready|production ready|industrialis[ée]|Studio complete)\b|\b(?:the\s+)?MVP\s+(?:is\s+)?validated\b|\bapproved for production\b|\bready for production\b|\bmerge authorized\b|\bAPPROVED as final\b|\bVALIDATED as final\b|\b(?:MVP[- ]ready|production[- ]ready)\s+for\s+(?:release|ship|users|production)\b|\bthis is production[- ]ready\b|\bthe cycle is closed\b|\bcycle is closed\b/i;

/** Affirmative Morris decision / closure language from GPT. */
const FORBIDDEN_MORRIS_DECISION =
  /\b(I (decide|authorize|approve)|Morris (GO|decision) (is|was) (made|taken)|Morris has approved|Morris approved|merge (authorized|approved)|I (hereby )?CLOSE_SLICE|cl[oô]turer (le cycle|now)|the cycle is closed)\b/i;

export interface VerdictValidationResult {
  ok: boolean;
  code?: string;
  message: string;
  payload?: GptVerdictModelPayload;
}

function isStringArray(v: unknown): v is string[] {
  return Array.isArray(v) && v.every((x) => typeof x === "string");
}

/** Remove prudent negations so only residual affirmative claims trigger rejection. */
export function stripNegatedAuthorityPhrases(text: string): string {
  return text.replace(NEGATED_CLAIM_PHRASES, " ");
}

export function detectAffirmativeAuthorityBreach(blob: string): {
  breach: boolean;
  code?: "AUTHORITY_BREACH";
  message?: string;
} {
  const scanned = stripNegatedAuthorityPhrases(blob);
  if (FORBIDDEN_CLAIM.test(scanned)) {
    return { breach: true, code: "AUTHORITY_BREACH", message: "MVP/production claim rejected" };
  }
  if (FORBIDDEN_MORRIS_DECISION.test(scanned)) {
    return { breach: true, code: "AUTHORITY_BREACH", message: "GPT Morris decision rejected" };
  }
  return { breach: false };
}

export function validateVerdictModelPayload(
  raw: unknown,
  expected: { analysisRequestId: string; requestId: string; correlationId: string; allowedEvidenceRefs: string[] },
): VerdictValidationResult {
  if (!raw || typeof raw !== "object") {
    return { ok: false, code: "INVALID_RESPONSE", message: "payload not object" };
  }
  const p = raw as Record<string, unknown>;
  const req = [
    "schemaVersion",
    "analysisRequestId",
    "requestId",
    "correlationId",
    "status",
    "proven",
    "notProven",
    "gaps",
    "risks",
    "reservations",
    "requiredMorrisDecisions",
    "recommendedNextAction",
    "evidenceReferences",
    "confidenceNote",
    "limitations",
  ];
  for (const k of req) {
    if (!(k in p)) {
      return { ok: false, code: "INVALID_RESPONSE", message: `missing ${k}` };
    }
  }
  if (p.schemaVersion !== GPT_VERDICT_CANDIDATE_SCHEMA) {
    return { ok: false, code: "INVALID_RESPONSE", message: "schemaVersion mismatch" };
  }
  if (p.analysisRequestId !== expected.analysisRequestId) {
    return { ok: false, code: "INVALID_RESPONSE", message: "analysisRequestId mismatch" };
  }
  if (p.requestId !== expected.requestId || p.correlationId !== expected.correlationId) {
    return { ok: false, code: "INVALID_RESPONSE", message: "id mismatch" };
  }
  if (typeof p.status !== "string" || !STATUSES.has(p.status as GptVerdictStatus)) {
    return { ok: false, code: "INVALID_RESPONSE", message: "invalid status" };
  }
  for (const key of [
    "proven",
    "notProven",
    "gaps",
    "risks",
    "reservations",
    "requiredMorrisDecisions",
    "evidenceReferences",
    "limitations",
  ]) {
    if (!isStringArray(p[key])) {
      return { ok: false, code: "INVALID_RESPONSE", message: `${key} must be string[]` };
    }
  }
  if (!["AWAIT_MORRIS", "CORRECT_EVIDENCE", "BLOCKED"].includes(String(p.recommendedNextAction))) {
    return { ok: false, code: "INVALID_RESPONSE", message: "recommendedNextAction invalid" };
  }
  if (typeof p.confidenceNote !== "string" || !p.confidenceNote.trim()) {
    return { ok: false, code: "INVALID_RESPONSE", message: "confidenceNote required" };
  }

  const authority = detectAffirmativeAuthorityBreach(JSON.stringify(p));
  if (authority.breach) {
    return { ok: false, code: authority.code, message: authority.message ?? "authority breach" };
  }

  const refs = p.evidenceReferences as string[];
  const allowed = new Set(expected.allowedEvidenceRefs);
  for (const ref of refs) {
    if (!allowed.has(ref) && !allowed.has("*")) {
      const okRef =
        allowed.has(ref) ||
        [...allowed].some((a) => ref.startsWith(a) || a.startsWith(ref)) ||
        ref.startsWith("cursor-execution-report") ||
        ref.startsWith("increment-d") ||
        ref.startsWith("pack.");
      if (!okRef) {
        return { ok: false, code: "INVALID_RESPONSE", message: `unknown evidenceReference: ${ref}` };
      }
    }
  }

  return {
    ok: true,
    message: "ok",
    payload: p as unknown as GptVerdictModelPayload,
  };
}

export function assertCandidateAuthority(candidate: {
  candidateOnly: boolean;
  closureAuthorized: boolean;
  morrisDecisionRequired: boolean;
}): VerdictValidationResult {
  if (!candidate.candidateOnly || candidate.closureAuthorized !== false || !candidate.morrisDecisionRequired) {
    return { ok: false, code: "AUTHORITY_BREACH", message: "authority invariants breached" };
  }
  return { ok: true, message: "ok" };
}
