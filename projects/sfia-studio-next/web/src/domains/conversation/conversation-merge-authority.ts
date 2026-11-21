/**
 * E08 — conversational documentary merge mandate (distinct from publication D6).
 * Deterministic fail-closed guards verify values/ids — they do not replace Nora
 * semantic qualification as the métier router. Never forge HumanDecision from LLM text.
 */
import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  authorizedRepositories,
  documentPublicationRefs,
  effectAttempts,
} from "@/db/schema";
import {
  authorizeMerge,
  dispatchMerge,
  prepareMerge,
} from "@/domains/execution/effect-service";
import { StudioError } from "@/lib/http-errors";
import { emitObs } from "@/lib/observability";
import { assertPersistedUserPublicationAct } from "./conversation-publication-authority";
import { PUBLISH_VERB_RE } from "./conversation-publication-mandate-guards";

export const NORA_MISSION_MERGE_PREFIX = "merge:mission:";

export type ConversationalMergeMandateOutcome = {
  attempted: boolean;
  admitted: boolean;
  authorized: boolean;
  humanDecisionCreated: boolean;
  decisionId: string | null;
  attemptId: string | null;
  publicationAttemptId?: string | null;
  resolvedPrNumber?: number | null;
  dispatched?: boolean;
  dispatchStatus?: string;
  reasonCode?: string;
  reason?: string;
};

export type MergeTargetResolution =
  | {
      ok: true;
      publicationAttemptId: string;
      prNumber: number;
      repositoryId: string;
      repositoryFullName: string | null;
      source: "explicit_pr" | "explicit_attempt" | "unique_mission" | "unique_open_pr";
    }
  | { ok: false; reasonCode: string; reason: string };

function emptyOutcome(
  partial?: Partial<ConversationalMergeMandateOutcome>,
): ConversationalMergeMandateOutcome {
  return {
    attempted: false,
    admitted: false,
    authorized: false,
    humanDecisionCreated: false,
    decisionId: null,
    attemptId: null,
    ...partial,
  };
}

const MERGE_REFUSE_PATTERNS = [
  /\bne\s+(?:me\s+)?(?:merge|merger|fusionne|fusionner)\s+pas\b/i,
  /\bne\s+(?:fais|fait)\s+(?:surtout\s+)?pas\s+(?:le\s+)?merge\b/i,
  /\bje\s+ne\s+(?:veux|souhaite)\s+pas\s+(?:que\s+tu\s+)?(?:merge|merger|fusionne)/i,
  /\bsans\s+(?:le\s+)?merge\b/i,
  /\bpas\s+de\s+merge\b/i,
  /\bannul(?:e|er)\s+(?:le\s+)?merge\b/i,
  /\brefus(?:e|er)\s+(?:de\s+)?(?:merger|fusionner)\b/i,
  /\bdo\s+not\s+merge\b/i,
  /\bdon't\s+merge\b/i,
  /\bnever\s+merge\b/i,
];

const POSITIVE_MERGE_AFTER_CONTRAST_RE =
  /(?:^|[.!?]\s+|[\n]|,\s*|;\s*|:\s*)(?:mais\s+|ensuite\s+|par\s+contre\s+)?(?:s'?il\s+te\s+pla[iî]t[, ]*)?(?:merge|merger|fusionne|fusionner)\b/i;

/** Explicit refusal / cancellation of merge — fail-closed even if a verb appears. */
export function userStatementRefusesMerge(userStatement: string): boolean {
  const t = userStatement.normalize("NFKC").trim();
  if (!t) return true;
  const hasRefuse = MERGE_REFUSE_PATTERNS.some((re) => re.test(t));
  if (!hasRefuse) return false;
  // Mixed: "Ne merge pas #42, merge #43" — not a global refuse (PR resolution decides).
  if (POSITIVE_MERGE_AFTER_CONTRAST_RE.test(t) && extractRequestedPrNumbers(t).length >= 1) {
    return false;
  }
  return true;
}

/** Hypothetical / deferred / how-to — never an authorizing mandate. */
export function userStatementIsNonAuthorizingMergeTalk(userStatement: string): boolean {
  const t = userStatement.normalize("NFKC");
  const patterns = [
    /\bexpliqu(?:e|er)\b[^\n]{0,40}\b(?:merge|fusion|intégr)/i,
    /\bcomment\s+(?:merger|fusionner|intégrer)\b/i,
    /\bsi\s+(?:je|tu|on)\s+[^\n]{0,40}\b(?:merge|fusionn|intégr)/i,
    /\buniquement\s+quand\b[^\n]{0,60}\b(?:demand)/i,
    /\bquand\s+je\s+te\s+le\s+demanderai\b/i,
    /\b(?:hypoth[eè]se|suppose|imaginons)\b/i,
    /\bhow\s+(?:do|to)\s+merge\b/i,
    /\bif\s+i\s+(?:asked|were\s+to\s+ask)\b/i,
    /\bquelles?\s+pr\b/i,
    /\best[- ]elle\s+pr[eê]te\b/i,
    /\bon\s+pourrait\b[^\n]{0,40}\b(?:intégr|fusionn|merge)/i,
    /\bplus\s+tard\b[^\n]{0,40}\b(?:intégr|fusionn|merge)/i,
    /\bpourra\s+[eê]tre\s+(?:merg|fusionn)/i,
  ];
  return patterns.some((re) => re.test(t));
}

/**
 * Open material conditions that block immediate merge authorization.
 * Fail-closed security gate — not a métier synonym router.
 * Satisfaction must never be invented from the statement alone.
 */
export function userStatementHasOpenMergeCondition(userStatement: string): boolean {
  const t = userStatement.normalize("NFKC");
  if (!t) return false;
  const patterns = [
    /\buniquement\s+apr[eè]s\b/i,
    /\bseulement\s+apr[eè]s\b/i,
    /\bapr[eè]s\s+(?:validation|revue|review|confirmation|mon\s+prochain\s+go)\b/i,
    /\bsi\s+(?:tous\s+les\s+)?tests?\s+(?:sont\s+)?verts?\b/i,
    /\btant\s+que\b[^\n]{0,80}\b(?:pas|revue|review|valid)/i,
    /\bne\s+(?:merge|fusionne|int[eè]gre)\s+pas\s+tant\s+que\b/i,
    /\buniquement\s+quand\s+je\s+(?:te\s+)?(?:le\s+)?confirmerai\b/i,
    /\bseulement\s+quand\s+je\s+(?:te\s+)?(?:le\s+)?confirmerai\b/i,
    /\bwhen\s+(?:i\s+)?(?:confirm|approve|say\s+so)\b/i,
    /\bonly\s+after\b/i,
  ];
  return patterns.some((re) => re.test(t));
}

const POSITIVE_MERGE_PLEASE_RE =
  /\b(?:peux[- ]tu|pourrais[- ]tu|merci\s+de)\s+(?:merge|merger|fusionner|fusionne)\b/i;

/**
 * Deterministic positive-merge signal for fail-closed gates / tests.
 * Not a métier router — Nora qualification remains owner of intent.
 * Presence of the word "merge" alone is never enough.
 * @deprecated Prefer durable qualification wantsMerge + open-condition / refuse gates.
 */
export function userStatementRequestsPositiveMerge(userStatement: string): boolean {
  const t = userStatement.normalize("NFKC").trim();
  if (!t) return false;
  if (userStatementIsNonAuthorizingMergeTalk(t)) return false;
  if (userStatementHasOpenMergeCondition(t)) return false;
  if (userStatementRefusesMerge(t)) return false;
  if (POSITIVE_MERGE_AFTER_CONTRAST_RE.test(t) || POSITIVE_MERGE_PLEASE_RE.test(t)) {
    return true;
  }
  if (/^(?:merge|merger|fusionne|fusionner)\b/i.test(t)) return true;
  return false;
}

/** @deprecated Prefer userStatementRequestsPositiveMerge — kept for call-site compat. */
export function userStatementRequestsMerge(userStatement: string): boolean {
  return userStatementRequestsPositiveMerge(userStatement);
}

/** Extract explicit PR numbers (#42 / PR 42 / pull request 42). */
export function extractRequestedPrNumbers(userStatement: string): number[] {
  const t = userStatement.normalize("NFKC");
  const found = new Set<number>();
  const re =
    /(?:#|pr\s*#?|pull\s*request\s*#?|merge\s+(?:la\s+)?pr\s*#?|fusionne(?:r)?\s+(?:la\s+)?pr\s*#?)\s*(\d{1,6})\b/gi;
  for (const m of t.matchAll(re)) {
    const n = Number(m[1]);
    if (Number.isFinite(n) && n > 0) found.add(n);
  }
  return [...found];
}

/** PR numbers appearing under an explicit merge refusal clause. */
export function extractNegatedPrNumbers(userStatement: string): number[] {
  const t = userStatement.normalize("NFKC");
  const found = new Set<number>();
  const re =
    /\bne\s+(?:me\s+)?(?:merge|merger|fusionne|fusionner)\s+pas\b[^\n.!?]{0,80}?(?:#|pr\s*#?)\s*(\d{1,6})\b/gi;
  for (const m of t.matchAll(re)) {
    const n = Number(m[1]);
    if (Number.isFinite(n) && n > 0) found.add(n);
  }
  return [...found];
}

/**
 * PR numbers that are candidates for a positive merge act.
 * Mixed "Ne merge pas #42, merge #43" → [43] only.
 * Never falls back to negated PRs when the positive set is empty.
 */
export function extractPositivelyRequestedPrNumbers(userStatement: string): number[] {
  const all = extractRequestedPrNumbers(userStatement);
  const negated = new Set(extractNegatedPrNumbers(userStatement));
  return all.filter((n) => !negated.has(n));
}

/**
 * Same PR both refused and positively requested → unresolved contradiction.
 * Example: "Ne merge pas la PR #42, merge la PR #42."
 * Distinct PRs ("ne merge pas #42, merge #43") are not contradictions.
 */
export function userStatementHasUnresolvedSamePrMergeContradiction(
  userStatement: string,
): boolean {
  const t = userStatement.normalize("NFKC").trim();
  if (!t) return false;
  const negated = extractNegatedPrNumbers(t);
  if (negated.length === 0) return false;
  for (const n of negated) {
    const positiveSamePr = new RegExp(
      `(?:^|[.!?\\n;:]\\s*|,\\s*|\\bmais\\s+|\\bensuite\\s+|\\bpar\\s+contre\\s+)(?:merge|merger|fusionne|fusionner)\\b[^\\n.!?]{0,100}?(?:#|pr\\s*#?)\\s*${n}\\b`,
      "i",
    );
    if (positiveSamePr.test(t)) return true;
  }
  return false;
}

/** owner/name hints explicitly named by the Pilote (not invented). */
export function extractRepositoryFullNameHints(userStatement: string): string[] {
  const t = userStatement.normalize("NFKC");
  const found = new Set<string>();
  const re = /\b([A-Za-z0-9_.-]+\/[A-Za-z0-9_.-]+)\b/g;
  for (const m of t.matchAll(re)) {
    const full = m[1]!;
    if (full.includes(".") && !full.includes("/")) continue;
    // Skip obvious non-repo paths like docs/foo.md
    if (/\.(md|txt|json|ts|tsx|js|yml|yaml)$/i.test(full)) continue;
    found.add(full);
  }
  return [...found];
}

/**
 * Resolve documentary Studio publication target for merge.
 * Never substitutes a different PR for an explicitly named one.
 */
export async function resolveDocumentaryMergeTarget(input: {
  pilotId: string;
  projectId: string;
  userStatement: string;
  publicationAttemptId?: string | null;
  requestedPrNumber?: number | null;
  repositoryFullNameHint?: string | null;
  clientTurnKey?: string | null;
}): Promise<MergeTargetResolution> {
  if (userStatementHasUnresolvedSamePrMergeContradiction(input.userStatement)) {
    return {
      ok: false,
      reasonCode: "CONTRADICTION",
      reason: "Contradiction merge sur la même PR — aucun effet sans résolution",
    };
  }

  const explicitAttempt = input.publicationAttemptId?.trim() || null;
  const fromText = extractPositivelyRequestedPrNumbers(input.userStatement);
  const requestedPr =
    input.requestedPrNumber != null && input.requestedPrNumber > 0
      ? input.requestedPrNumber
      : fromText.length === 1
        ? fromText[0]!
        : null;

  const repoHintsFromText = extractRepositoryFullNameHints(input.userStatement);
  const repositoryHint =
    input.repositoryFullNameHint?.trim() ||
    (repoHintsFromText.length === 1 ? repoHintsFromText[0]! : null);
  if (repoHintsFromText.length > 1 && !input.repositoryFullNameHint?.trim()) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS_REPOSITORY",
      reason: "Plusieurs dépôts nommés — précision requise",
    };
  }

  if (fromText.length > 1 && input.requestedPrNumber == null) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS_PR",
      reason: "Plusieurs numéros de PR positifs dans l'acte USER — précision requise",
    };
  }

  async function fullNameForRepositoryId(repositoryId: string): Promise<string | null> {
    const row = (
      await db
        .select({ fullName: authorizedRepositories.fullName })
        .from(authorizedRepositories)
        .where(eq(authorizedRepositories.id, repositoryId))
        .limit(1)
    )[0];
    return row?.fullName ?? null;
  }

  async function filterRefsByRepositoryHint<
    T extends { repositoryId: string },
  >(refs: T[]): Promise<T[] | { error: MergeTargetResolution }> {
    if (!repositoryHint) return refs;
    const withNames = await Promise.all(
      refs.map(async (r) => ({
        ref: r,
        fullName: await fullNameForRepositoryId(r.repositoryId),
      })),
    );
    const matched = withNames.filter(
      (x) => x.fullName?.toLowerCase() === repositoryHint.toLowerCase(),
    );
    if (matched.length === 0) {
      return {
        error: {
          ok: false,
          reasonCode: "REPOSITORY_MISMATCH",
          reason: `PR demandée absente du dépôt nommé (${repositoryHint})`,
        },
      };
    }
    return matched.map((x) => x.ref);
  }

  if (explicitAttempt) {
    const ref = (
      await db
        .select()
        .from(documentPublicationRefs)
        .where(
          and(
            eq(documentPublicationRefs.effectAttemptId, explicitAttempt),
            eq(documentPublicationRefs.projectId, input.projectId),
            eq(documentPublicationRefs.pilotId, input.pilotId),
          ),
        )
        .limit(1)
    )[0];
    if (!ref || ref.prNumber == null) {
      return {
        ok: false,
        reasonCode: "PUBLICATION_NOT_FOUND",
        reason: "Publication documentaire liée introuvable ou sans PR",
      };
    }
    if (requestedPr != null && ref.prNumber !== requestedPr) {
      return {
        ok: false,
        reasonCode: "PR_MISMATCH",
        reason: `PR #${requestedPr} demandée ≠ publication liée (#${ref.prNumber})`,
      };
    }
    const pub = (
      await db
        .select()
        .from(effectAttempts)
        .where(
          and(
            eq(effectAttempts.id, explicitAttempt),
            eq(effectAttempts.kind, "GIT_PUBLICATION"),
            eq(effectAttempts.status, "COMPLETED"),
          ),
        )
        .limit(1)
    )[0];
    if (!pub) {
      return {
        ok: false,
        reasonCode: "PUBLICATION_NOT_COMPLETED",
        reason: "Publication documentaire non COMPLETED",
      };
    }
    const attemptFullName = await fullNameForRepositoryId(ref.repositoryId);
    if (
      repositoryHint &&
      attemptFullName?.toLowerCase() !== repositoryHint.toLowerCase()
    ) {
      return {
        ok: false,
        reasonCode: "REPOSITORY_MISMATCH",
        reason: `Publication liée au dépôt ${attemptFullName ?? "?"} ≠ dépôt nommé (${repositoryHint})`,
      };
    }
    return {
      ok: true,
      publicationAttemptId: explicitAttempt,
      prNumber: ref.prNumber,
      repositoryId: ref.repositoryId,
      repositoryFullName: attemptFullName,
      source: "explicit_attempt",
    };
  }

  if (requestedPr != null) {
    let refs = await db
      .select()
      .from(documentPublicationRefs)
      .where(
        and(
          eq(documentPublicationRefs.projectId, input.projectId),
          eq(documentPublicationRefs.pilotId, input.pilotId),
          eq(documentPublicationRefs.prNumber, requestedPr),
        ),
      )
      .orderBy(desc(documentPublicationRefs.updatedAt))
      .limit(8);

    if (refs.length === 0) {
      return {
        ok: false,
        reasonCode: "PR_NOT_FOUND",
        reason: `PR #${requestedPr} absente des publications documentaires Studio du projet`,
      };
    }

    const filtered = await filterRefsByRepositoryHint(refs);
    if ("error" in filtered) return filtered.error;
    refs = filtered;

    if (refs.length > 1) {
      const distinctRepos = new Set(refs.map((r) => r.repositoryId));
      if (distinctRepos.size > 1 && !repositoryHint) {
        return {
          ok: false,
          reasonCode: "AMBIGUOUS_REPOSITORY",
          reason: `PR #${requestedPr} présente dans plusieurs dépôts — nommer le dépôt exact`,
        };
      }
      const open = refs.filter((r) => r.status === "PR_OPEN");
      if (open.length !== 1) {
        return {
          ok: false,
          reasonCode: "AMBIGUOUS_TARGET",
          reason: `Plusieurs publications pour PR #${requestedPr} — préciser la tentative`,
        };
      }
      refs = [open[0]!];
    }
    const ref = refs[0]!;
    if (!ref.effectAttemptId) {
      return {
        ok: false,
        reasonCode: "PUBLICATION_NOT_FOUND",
        reason: `PR #${requestedPr} sans tentative de publication liée`,
      };
    }
    const pub = (
      await db
        .select()
        .from(effectAttempts)
        .where(
          and(
            eq(effectAttempts.id, ref.effectAttemptId),
            eq(effectAttempts.kind, "GIT_PUBLICATION"),
            eq(effectAttempts.projectId, input.projectId),
            eq(effectAttempts.pilotId, input.pilotId),
            eq(effectAttempts.status, "COMPLETED"),
          ),
        )
        .limit(1)
    )[0];
    if (!pub) {
      return {
        ok: false,
        reasonCode: "PUBLICATION_NOT_COMPLETED",
        reason: `PR #${requestedPr} sans publication documentaire COMPLETED`,
      };
    }
    return {
      ok: true,
      publicationAttemptId: ref.effectAttemptId,
      prNumber: requestedPr,
      repositoryId: ref.repositoryId,
      repositoryFullName: await fullNameForRepositoryId(ref.repositoryId),
      source: "explicit_pr",
    };
  }

  // No explicit PR — only unique mission / unique open documentary PR.
  const turnKey = input.clientTurnKey?.trim() || null;
  if (turnKey) {
    const missionPubKey = `pub:mission:${turnKey}`;
    const missionPub = (
      await db
        .select()
        .from(effectAttempts)
        .where(
          and(
            eq(effectAttempts.projectId, input.projectId),
            eq(effectAttempts.pilotId, input.pilotId),
            eq(effectAttempts.kind, "GIT_PUBLICATION"),
            eq(effectAttempts.status, "COMPLETED"),
            eq(effectAttempts.correlationKey, missionPubKey),
          ),
        )
        .limit(1)
    )[0];
    if (missionPub) {
      const ref = (
        await db
          .select()
          .from(documentPublicationRefs)
          .where(
            and(
              eq(documentPublicationRefs.effectAttemptId, missionPub.id),
              eq(documentPublicationRefs.projectId, input.projectId),
            ),
          )
          .limit(1)
      )[0];
      if (ref?.prNumber != null) {
        const missionFullName = await fullNameForRepositoryId(ref.repositoryId);
        if (
          repositoryHint &&
          missionFullName?.toLowerCase() !== repositoryHint.toLowerCase()
        ) {
          return {
            ok: false,
            reasonCode: "REPOSITORY_MISMATCH",
            reason: `Mission liée au dépôt ${missionFullName ?? "?"} ≠ dépôt nommé (${repositoryHint})`,
          };
        }
        return {
          ok: true,
          publicationAttemptId: missionPub.id,
          prNumber: ref.prNumber,
          repositoryId: ref.repositoryId,
          repositoryFullName: missionFullName,
          source: "unique_mission",
        };
      }
    }
  }

  let openRefs = await db
    .select()
    .from(documentPublicationRefs)
    .where(
      and(
        eq(documentPublicationRefs.projectId, input.projectId),
        eq(documentPublicationRefs.pilotId, input.pilotId),
        eq(documentPublicationRefs.status, "PR_OPEN"),
      ),
    )
    .orderBy(desc(documentPublicationRefs.updatedAt))
    .limit(5);

  const openFiltered = await filterRefsByRepositoryHint(openRefs);
  if ("error" in openFiltered) return openFiltered.error;
  openRefs = openFiltered;

  if (openRefs.length === 1 && openRefs[0]?.effectAttemptId && openRefs[0].prNumber != null) {
    const pub = (
      await db
        .select()
        .from(effectAttempts)
        .where(
          and(
            eq(effectAttempts.id, openRefs[0].effectAttemptId),
            eq(effectAttempts.status, "COMPLETED"),
          ),
        )
        .limit(1)
    )[0];
    if (pub) {
      return {
        ok: true,
        publicationAttemptId: openRefs[0].effectAttemptId,
        prNumber: openRefs[0].prNumber,
        repositoryId: openRefs[0].repositoryId,
        repositoryFullName: await fullNameForRepositoryId(openRefs[0].repositoryId),
        source: "unique_open_pr",
      };
    }
  }

  if (openRefs.length > 1) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS_TARGET",
      reason: "Plusieurs PR documentaires ouvertes — préciser le numéro de PR",
    };
  }

  return {
    ok: false,
    reasonCode: "TARGET_UNRESOLVED",
    reason: "Cible de merge non déterminable — préciser la PR documentaire",
  };
}

/**
 * Admit an explicit USER merge mandate for a documentary Studio publication PR.
 * Publication ≠ merge: a publish verb does not admit this path.
 */
export async function admitConversationalMergeMandate(input: {
  pilotId: string;
  projectId: string;
  userMessageId: string;
  userStatement: string;
  clientTurnKey?: string | null;
  publicationAttemptId?: string | null;
  requestedPrNumber?: number | null;
  repositoryFullNameHint?: string | null;
  /**
   * Must come from durable Nora semantic qualification — never hardcoded true from lexical alone.
   * Lexical positive-verb lists are NOT required once qualification is durable (E08-S02).
   */
  wantsMergeFromQual: boolean;
  /** From durable qualification — OPEN/UNVERIFIABLE blocks immediate effect (E08-S01). */
  conditionStatus?: "NONE" | "OPEN" | "SATISFIED" | "UNVERIFIABLE" | null;
  conditionText?: string | null;
  autoDispatch?: boolean;
}): Promise<ConversationalMergeMandateOutcome> {
  const statement = input.userStatement.trim().slice(0, 500);
  if (!input.userMessageId?.trim() || !statement) {
    return emptyOutcome({ reasonCode: "MISSING_USER_ACT", reason: "Acte USER durable requis" });
  }

  // P0-M01 — refuse / non-authorizing talk blocks the entire effect chain.
  if (userStatementRefusesMerge(statement)) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "REFUSED",
      reason: "Formulation USER refuse le merge — aucun mandat",
    });
  }
  if (userStatementHasUnresolvedSamePrMergeContradiction(statement)) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "CONTRADICTION",
      reason: "Contradiction merge sur la même PR — aucun effet",
    });
  }
  if (userStatementIsNonAuthorizingMergeTalk(statement)) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "NON_AUTHORIZING",
      reason: "Demande informative/hypothétique — aucun effet de merge",
    });
  }

  // E08-S01 — open / unverifiable conditions never authorize immediate merge.
  const conditionStatus = input.conditionStatus ?? null;
  if (
    conditionStatus === "OPEN" ||
    conditionStatus === "UNVERIFIABLE" ||
    userStatementHasOpenMergeCondition(statement)
  ) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "CONDITION_OPEN",
      reason:
        input.conditionText?.trim() ||
        "Condition de merge ouverte ou non vérifiable — aucun effet immédiat",
    });
  }
  // SATISFIED in qualification alone is never enough — no invented satisfaction proof.
  if (conditionStatus === "SATISFIED") {
    return emptyOutcome({
      attempted: true,
      reasonCode: "CONDITION_UNPROVEN",
      reason:
        "Condition déclarée satisfaite sans preuve applicable — aucun effet (pas d'invention de preuve)",
    });
  }

  const provenance = await assertPersistedUserPublicationAct({
    pilotId: input.pilotId,
    projectId: input.projectId,
    userMessageId: input.userMessageId,
    userStatement: statement,
    clientTurnKey: input.clientTurnKey ?? null,
  });
  if (!provenance.ok) {
    return emptyOutcome({ reasonCode: provenance.reasonCode, reason: provenance.reason });
  }

  // E08-S02 — durable qualification owns métier routing; lexical verb lists are not required.
  if (!input.wantsMergeFromQual) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "NO_MERGE_QUAL",
      reason: "Qualification durable sans intention merge explicite",
    });
  }

  // Publish-only statements without merge qualification stay blocked (defense in depth).
  if (
    PUBLISH_VERB_RE.test(statement) &&
    !input.wantsMergeFromQual &&
    !userStatementRequestsPositiveMerge(statement)
  ) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "PUBLISH_NOT_MERGE",
      reason: "Demande de publication — mandat merge distinct requis",
    });
  }

  // P0-M02 — resolve exact documentary target; never "latest COMPLETED" for a named PR.
  const target = await resolveDocumentaryMergeTarget({
    pilotId: input.pilotId,
    projectId: input.projectId,
    userStatement: statement,
    publicationAttemptId: input.publicationAttemptId ?? null,
    requestedPrNumber: input.requestedPrNumber ?? null,
    repositoryFullNameHint: input.repositoryFullNameHint ?? null,
    clientTurnKey: input.clientTurnKey ?? null,
  });
  if (!target.ok) {
    return emptyOutcome({
      attempted: true,
      reasonCode: target.reasonCode,
      reason: target.reason,
    });
  }

  const publicationAttemptId = target.publicationAttemptId;
  const correlationKey = input.clientTurnKey?.trim()
    ? `${NORA_MISSION_MERGE_PREFIX}${input.clientTurnKey.trim()}`
    : `merge:conv:${publicationAttemptId}:pr:${target.prNumber}`;

  try {
    const prepared = await prepareMerge({
      pilotId: input.pilotId,
      projectId: input.projectId,
      publicationAttemptId,
      correlationKey,
    });

    // Prepared plan must match requested PR (defense in depth).
    const planPr = prepared.plan?.prNumber;
    if (planPr != null && planPr !== target.prNumber) {
      return emptyOutcome({
        attempted: true,
        attemptId: prepared.attemptId,
        reasonCode: "PLAN_PR_MISMATCH",
        reason: `Plan D7 PR #${planPr} ≠ PR demandée #${target.prNumber}`,
      });
    }

    if (prepared.status === "AUTHORIZED" || prepared.status === "DISPATCHED" || prepared.status === "COMPLETED") {
      return {
        attempted: true,
        admitted: true,
        authorized: true,
        humanDecisionCreated: true,
        decisionId: null,
        attemptId: prepared.attemptId,
        publicationAttemptId,
        resolvedPrNumber: target.prNumber,
        reasonCode: "ALREADY_AUTHORIZED",
      };
    }
    if (prepared.status !== "PREPARED") {
      return emptyOutcome({
        attempted: true,
        attemptId: prepared.attemptId,
        reasonCode: "CONFLICT",
        reason: `Statut merge incompatible: ${prepared.status}`,
      });
    }

    // P0-M03 — authorize with conversational provenance bound to plan/target.
    const auth = await authorizeMerge({
      pilotId: input.pilotId,
      projectId: input.projectId,
      attemptId: prepared.attemptId,
      statement,
      conversationalProvenance: {
        userMessageId: input.userMessageId,
        conversationId: provenance.conversationId,
        clientTurnKey: input.clientTurnKey ?? null,
        contentFingerprint: provenance.contentFingerprint,
        requestedPrNumber: target.prNumber,
        publicationAttemptId,
        repositoryId: target.repositoryId,
        expectedHeadSha: prepared.plan.expectedHeadSha,
        expectedBaseSha: prepared.plan.expectedBaseSha,
        planFingerprint: prepared.fingerprint,
        resolutionSource: target.source,
      },
    });

    emitObs({
      event_name: "d6.conversational_merge_mandate",
      component: "d6.conversation_merge_authority",
      outcome: "SUCCESS",
      meta: {
        attempt_id: prepared.attemptId,
        decision_id: auth.decisionId,
        user_message_id: input.userMessageId,
        publication_attempt_id: publicationAttemptId,
        pr_number: target.prNumber,
        resolution_source: target.source,
      },
    });

    let dispatched = false;
    let dispatchStatus: string | undefined;
    if (input.autoDispatch !== false && auth.status === "AUTHORIZED") {
      try {
        const dispatchedResult = await dispatchMerge({
          pilotId: input.pilotId,
          projectId: input.projectId,
          attemptId: prepared.attemptId,
        });
        dispatched = true;
        dispatchStatus = dispatchedResult.status;
      } catch (e) {
        const code = e instanceof StudioError ? e.code : "DISPATCH_FAILED";
        return {
          attempted: true,
          admitted: true,
          authorized: true,
          humanDecisionCreated: Boolean(auth.decisionId),
          decisionId: auth.decisionId ?? null,
          attemptId: prepared.attemptId,
          publicationAttemptId,
          resolvedPrNumber: target.prNumber,
          reasonCode: code,
          reason: e instanceof StudioError ? e.message : "dispatchMerge échoué",
        };
      }
    }

    return {
      attempted: true,
      admitted: true,
      authorized: true,
      humanDecisionCreated: Boolean(auth.decisionId),
      decisionId: auth.decisionId ?? null,
      attemptId: prepared.attemptId,
      publicationAttemptId,
      resolvedPrNumber: target.prNumber,
      dispatched,
      dispatchStatus,
    };
  } catch (e) {
    const code = e instanceof StudioError ? e.code : "MERGE_ADMIT_FAILED";
    const message = e instanceof StudioError ? e.message : "admit merge échoué";
    emitObs({
      event_name: "d6.conversational_merge_mandate",
      component: "d6.conversation_merge_authority",
      outcome: "FAILED",
      error_category: code,
      meta: { user_message_id: input.userMessageId },
    });
    return emptyOutcome({ attempted: true, reasonCode: code, reason: message });
  }
}
