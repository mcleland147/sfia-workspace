# SFIA Review Pack FULL — E08 Merge Authority Security

## REGULARIZATION §7.2 — COMPLETE CONTENT (merge security)

- date: 2026-11-21T19:06:39+01:00
- cycle: 8 — Correctif CRITICAL sécurisation merge conversationnel
- branche: feat/next-ensemble08-git-publications-nora
- HEAD: a12f89a15c454319c06f49fcc5e8effa9f3f1a75
- origin_main: a12f89a15c454319c06f49fcc5e8effa9f3f1a75
- prior_handoff: eebaeeda067bbd462c5727db8a8393f734ded505
- review pack verdict: **complete**
- NO RELEASE · no project push · no GitHub REAL mutation

## Git Truth

- HEAD == origin/main (a12f89a15c45)
- E08 uncommitted work PRESERVED
- Scope: conversation-merge-authority, authorizeMerge provenance, service gate

## Corrections

| ID | Résultat |
|---|---|
| P0-M01 négation/hypothèse | **FIXED** — refuse / non-authorizing blocks entire effect chain |
| P0-M02 identité PR | **FIXED** — resolveDocumentaryMergeTarget; never latest for named PR |
| P0-M03 provenance D6 | **FIXED** — conversationalProvenance in authorizeMerge effectConditions |

## Tests exécutés (ce cycle)

| Suite | Résultat |
|---|---|
| tsc --noEmit | PASS |
| unit vitest | **750/750 PASS** |
| conversation-merge-authority unit | **7 PASS** |
| conversation-merge-security.pg | **3/3 PASS** |
| mission-continuity-accept01.pg | **10/10 PASS** (non-régression) |
| GitHub REAL mutation | **NOT RUN** (hors mandat) |
| Figma G5 | **N/A** (aucune UI) |

## Fake / Real

- DETERMINISTIC PROVEN: M01/M02/M03 guards + PG
- END-TO-END REAL MUTATION: NOT PROVEN
- Nora LIVE E2E merge: NOT PROVEN

## Verdict

**DELIVERY READY WITH RESERVES**

Reserves: G5 Figma E08 global, REAL mutation, Nora LIVE E2E merge journey, RECETTE.

## Instruction ChatGPT

Relire ce fichier sur sfia/review-handoff après L3 ; vérifier SHA, M01/M02/M03, tests PG, limites, verdict.

## CREATE `projects/sfia-studio-next/web/src/domains/conversation/conversation-merge-authority.ts`

```typescript
/**
 * E08 — conversational documentary merge mandate (distinct from publication D6).
 * Deterministic fail-closed guards verify values/ids — they do not replace Nora
 * semantic qualification as the métier router. Never forge HumanDecision from LLM text.
 */
import { and, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { documentPublicationRefs, effectAttempts } from "@/db/schema";
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
    /\bexpliqu(?:e|er)\b[^\n]{0,40}\b(?:merge|fusion)/i,
    /\bcomment\s+(?:merger|fusionner)\b/i,
    /\bsi\s+(?:je|tu|on)\s+[^\n]{0,40}\b(?:merge|fusionn)/i,
    /\buniquement\s+quand\b[^\n]{0,60}\b(?:demand)/i,
    /\bquand\s+je\s+te\s+le\s+demanderai\b/i,
    /\b(?:hypoth[eè]se|suppose|imaginons)\b/i,
    /\bhow\s+(?:do|to)\s+merge\b/i,
    /\bif\s+i\s+(?:asked|were\s+to\s+ask)\b/i,
  ];
  return patterns.some((re) => re.test(t));
}

const POSITIVE_MERGE_PLEASE_RE =
  /\b(?:peux[- ]tu|pourrais[- ]tu|merci\s+de)\s+(?:merge|merger|fusionner|fusionne)\b/i;

/**
 * Deterministic positive-merge signal for fail-closed gates.
 * Not a métier router — Nora qualification remains owner of intent.
 * Presence of the word "merge" alone is never enough.
 */
export function userStatementRequestsPositiveMerge(userStatement: string): boolean {
  const t = userStatement.normalize("NFKC").trim();
  if (!t) return false;
  if (userStatementIsNonAuthorizingMergeTalk(t)) return false;
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
 */
export function extractPositivelyRequestedPrNumbers(userStatement: string): number[] {
  const all = extractRequestedPrNumbers(userStatement);
  const negated = new Set(extractNegatedPrNumbers(userStatement));
  const positive = all.filter((n) => !negated.has(n));
  return positive.length > 0 ? positive : all;
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
  clientTurnKey?: string | null;
}): Promise<MergeTargetResolution> {
  const explicitAttempt = input.publicationAttemptId?.trim() || null;
  const fromText = extractPositivelyRequestedPrNumbers(input.userStatement);
  const requestedPr =
    input.requestedPrNumber != null && input.requestedPrNumber > 0
      ? input.requestedPrNumber
      : fromText.length === 1
        ? fromText[0]!
        : null;

  if (fromText.length > 1 && input.requestedPrNumber == null) {
    return {
      ok: false,
      reasonCode: "AMBIGUOUS_PR",
      reason: "Plusieurs numéros de PR positifs dans l'acte USER — précision requise",
    };
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
    return {
      ok: true,
      publicationAttemptId: explicitAttempt,
      prNumber: ref.prNumber,
      repositoryId: ref.repositoryId,
      repositoryFullName: null,
      source: "explicit_attempt",
    };
  }

  if (requestedPr != null) {
    const refs = await db
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
      .limit(5);

    if (refs.length === 0) {
      return {
        ok: false,
        reasonCode: "PR_NOT_FOUND",
        reason: `PR #${requestedPr} absente des publications documentaires Studio du projet`,
      };
    }
    if (refs.length > 1) {
      const open = refs.filter((r) => r.status === "PR_OPEN");
      if (open.length !== 1) {
        return {
          ok: false,
          reasonCode: "AMBIGUOUS_TARGET",
          reason: `Plusieurs publications pour PR #${requestedPr} — préciser la tentative`,
        };
      }
      refs.splice(0, refs.length, open[0]!);
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
      repositoryFullName: null,
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
        return {
          ok: true,
          publicationAttemptId: missionPub.id,
          prNumber: ref.prNumber,
          repositoryId: ref.repositoryId,
          repositoryFullName: null,
          source: "unique_mission",
        };
      }
    }
  }

  const openRefs = await db
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
    .limit(3);

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
        repositoryFullName: null,
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
  wantsMergeFromQual: boolean;
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
  if (userStatementIsNonAuthorizingMergeTalk(statement)) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "NON_AUTHORIZING",
      reason: "Demande informative/hypothétique — aucun effet de merge",
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

  const positive =
    input.wantsMergeFromQual === true && userStatementRequestsPositiveMerge(statement);
  if (!positive) {
    // Qual alone is insufficient without a positive USER act; act alone without qual is also blocked.
    if (!userStatementRequestsPositiveMerge(statement)) {
      return emptyOutcome({
        attempted: true,
        reasonCode: "NO_POSITIVE_MERGE",
        reason: "Aucun mandat positif de merge dans l'acte USER",
      });
    }
    if (!input.wantsMergeFromQual) {
      return emptyOutcome({
        attempted: true,
        reasonCode: "NO_MERGE_QUAL",
        reason: "Qualification durable sans intention merge explicite",
      });
    }
  }

  if (PUBLISH_VERB_RE.test(statement) && !userStatementRequestsPositiveMerge(statement)) {
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

```

## CREATE `projects/sfia-studio-next/web/tests/unit/conversation-merge-authority.test.ts`

```typescript
import { describe, expect, it } from "vitest";
import {
  extractNegatedPrNumbers,
  extractPositivelyRequestedPrNumbers,
  extractRequestedPrNumbers,
  userStatementIsNonAuthorizingMergeTalk,
  userStatementRefusesMerge,
  userStatementRequestsPositiveMerge,
} from "@/domains/conversation/conversation-merge-authority";

describe("P0-M01 merge negation / positive intent", () => {
  it("treats explicit refusals as refuse — not positive", () => {
    const negatives = [
      "Ne merge pas cette PR.",
      "Ne fusionne pas la PR #42.",
      "Je ne veux pas que tu merges cette PR.",
      "Ne fais surtout pas le merge.",
      "Publie ce document, mais ne merge pas la PR.",
    ];
    for (const s of negatives) {
      expect(userStatementRefusesMerge(s), s).toBe(true);
      expect(userStatementRequestsPositiveMerge(s), s).toBe(false);
    }
  });

  it("blocks how-to / hypothetical / deferred talk", () => {
    const talk = [
      "Explique-moi comment merger cette PR.",
      "Si je te demandais de merger la PR #42...",
      "Merge-la uniquement quand je te le demanderai.",
    ];
    for (const s of talk) {
      expect(userStatementIsNonAuthorizingMergeTalk(s), s).toBe(true);
      expect(userStatementRequestsPositiveMerge(s), s).toBe(false);
    }
  });

  it("accepts explicit positive merge imperatives", () => {
    const positives = [
      "Merge la PR #42.",
      "Fusionne la PR documentaire #42 du dépôt X.",
      "Peux-tu merger la PR #7 ?",
    ];
    for (const s of positives) {
      expect(userStatementRefusesMerge(s), s).toBe(false);
      expect(userStatementRequestsPositiveMerge(s), s).toBe(true);
    }
  });

  it("does not treat bare publish+merge word soup without imperative as positive", () => {
    expect(userStatementRequestsPositiveMerge("La publication a un merge en attente")).toBe(false);
  });

  it("mixed refuse #42 then merge #43 keeps a positive signal", () => {
    const s = "Ne merge pas la PR #42, merge la PR #43.";
    expect(userStatementRefusesMerge(s)).toBe(false);
    expect(userStatementRequestsPositiveMerge(s)).toBe(true);
    expect(extractNegatedPrNumbers(s)).toEqual([42]);
    expect(extractPositivelyRequestedPrNumbers(s)).toEqual([43]);
  });
});

describe("P0-M02 PR identity extraction", () => {
  it("extracts explicit PR numbers", () => {
    expect(extractRequestedPrNumbers("Merge la PR #42.")).toEqual([42]);
    expect(extractRequestedPrNumbers("Fusionne pull request 7")).toEqual([7]);
  });

  it("never silently picks a different PR from text alone", () => {
    expect(extractPositivelyRequestedPrNumbers("Merge la PR #42")).toEqual([42]);
    expect(extractPositivelyRequestedPrNumbers("Merge la PR #42 et la PR #43").sort()).toEqual([
      42, 43,
    ]);
  });
});

```

## CREATE `projects/sfia-studio-next/web/tests/integration/conversation-merge-security.pg.test.ts`

```typescript
/**
 * P0-M01/M02/M03 — conversational merge security (PG / SCRIPTED).
 * No GitHub REAL mutations.
 */
import { beforeAll, describe, expect, it } from "vitest";
import { config } from "dotenv";
config({ path: ".env.local" });

import { and, eq } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversationTurnCommands,
  conversations,
  documentRevisions,
  effectAttempts,
  humanDecisions,
  messages,
  pilots,
  preparations,
} from "@/db/schema";
import { newId } from "@/lib/ids";
import { openOrCreatePreparation, updatePreview } from "@/domains/preparation/service";
import { createProjectCommand } from "@/domains/preparation/create-project";
import {
  completeGitHubAuthorization,
  startGitHubAuthorization,
} from "@/domains/integrations/authorization-service";
import { attachRepositoryToProject } from "@/domains/integrations/project-link-service";
import {
  getScriptedGitHubProvider,
  resetScriptedStore,
} from "@/domains/integrations/scripted-github-provider";
import {
  authorizeMerge,
  authorizePublication,
  dispatchPublication,
  prepareMerge,
  preparePublication,
} from "@/domains/execution/effect-service";
import type { PublicationPlan } from "@/domains/execution/types";
import { savePreparationDocument } from "@/domains/document/service";
import {
  admitConversationalMergeMandate,
  resolveDocumentaryMergeTarget,
  userStatementRefusesMerge,
} from "@/domains/conversation/conversation-merge-authority";

async function seedProjectWithGit(label: string) {
  resetScriptedStore();
  const pilotId = newId("pilot");
  await db.insert(pilots).values({ id: pilotId, displayName: label, githubUserId: `gh-${pilotId}` });
  const prep = await openOrCreatePreparation(pilotId);
  await updatePreview(pilotId, prep.id, label, "s");
  const refreshed = (await db.select().from(preparations).where(eq(preparations.id, prep.id)))[0];
  const created = await createProjectCommand({
    pilotId,
    preparationId: prep.id,
    expectedCreationRevision: refreshed!.creationRevision,
    projectName: label,
    previewSummary: "s",
    idempotencyKey: newId("idem"),
  });
  if (created.status !== "CREATED" || !created.projectId) {
    throw new Error(`seed failed: ${created.status}`);
  }
  const sessionId = newId("sid");
  const { state } = await startGitHubAuthorization(pilotId, "/settings/integrations", sessionId);
  const status = await completeGitHubAuthorization({
    pilotId,
    state,
    studioSessionId: sessionId,
  });
  const repositoryId = status.repositories[0]!.id;
  await attachRepositoryToProject(pilotId, created.projectId, repositoryId);
  getScriptedGitHubProvider();
  return {
    pilotId,
    projectId: created.projectId,
    preparationId: prep.id,
    repositoryId,
  };
}

async function availableDoc(pilotId: string, preparationId: string, title: string) {
  const saved = await savePreparationDocument(pilotId, preparationId, title, `# ${title}\n`, undefined, {
    correlationKey: newId("ck"),
  });
  expect(saved.status).toBe("AVAILABLE");
  if (!("documentId" in saved) || !saved.documentId) throw new Error("documentId missing");
  const rev = (
    await db
      .select()
      .from(documentRevisions)
      .where(
        and(eq(documentRevisions.documentId, saved.documentId), eq(documentRevisions.status, "AVAILABLE")),
      )
      .limit(1)
  )[0];
  if (!rev) throw new Error("AVAILABLE revision missing");
  return { documentId: saved.documentId, revisionId: rev.id };
}

async function publishDoc(input: {
  pilotId: string;
  projectId: string;
  preparationId: string;
  repositoryId: string;
  title: string;
  path: string;
}) {
  const { documentId, revisionId } = await availableDoc(
    input.pilotId,
    input.preparationId,
    input.title,
  );
  const prepared = await preparePublication({
    pilotId: input.pilotId,
    projectId: input.projectId,
    documentId,
    revisionId,
    repositoryId: input.repositoryId,
    targetPath: input.path,
    targetBranch: "main",
    correlationKey: newId("pub"),
  });
  const plan =
    prepared.plan ??
    (JSON.parse(
      (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, prepared.attemptId)).limit(1)
      )[0]!.planJson,
    ) as PublicationPlan);
  await authorizePublication({
    pilotId: input.pilotId,
    projectId: input.projectId,
    attemptId: prepared.attemptId,
    statement: "GO pub",
    inspectedFingerprint: plan.inspection.inspectionFingerprint,
  });
  const dispatched = await dispatchPublication({
    pilotId: input.pilotId,
    projectId: input.projectId,
    attemptId: prepared.attemptId,
  });
  expect(dispatched.status).toBe("COMPLETED");
  expect(dispatched.prNumber).toBeGreaterThan(0);
  return { attemptId: prepared.attemptId, prNumber: dispatched.prNumber! };
}

async function insertUserAct(input: {
  pilotId: string;
  projectId: string;
  preparationId: string;
  content: string;
  clientTurnKey: string;
}) {
  const convId = newId("conv");
  await db.insert(conversations).values({
    id: convId,
    preparationId: input.preparationId,
    projectId: input.projectId,
    ownerPilotId: input.pilotId,
  });
  const msgId = newId("msg");
  await db.insert(messages).values({
    id: msgId,
    conversationId: convId,
    role: "user",
    content: input.content,
    status: "COMPLETE",
    ordinal: 1,
  });
  await db.insert(conversationTurnCommands).values({
    id: newId("ctc"),
    conversationId: convId,
    ownerPilotId: input.pilotId,
    clientTurnKey: input.clientTurnKey,
    requestFingerprint: "fp",
    operationId: newId("op"),
    status: "COMPLETE",
    userMessageId: msgId,
    ownerToken: newId("otk"),
  });
  return { msgId, convId };
}

describe("conversational merge security (PG)", () => {
  beforeAll(() => {
    if (!process.env.DATABASE_URL) throw new Error("DATABASE_URL required");
    expect(process.env.DATABASE_URL).toMatch(/\/sfia_next_e2e(?:\?|$)/);
    delete process.env.OPENAI_API_KEY;
    process.env.STUDIO_LANE = "DEV";
    process.env.STUDIO_E2E = "1";
    process.env.STUDIO_GITHUB_PROVIDER = "scripted";
    process.env.STUDIO_ALLOW_SCRIPTED_GITHUB = "1";
  });

  it("P0-M01: refuse statement never prepares/authorizes/dispatches merge", async () => {
    const ctx = await seedProjectWithGit("merge-sec-refuse");
    await publishDoc({
      ...ctx,
      title: "Doc Refuse",
      path: "docs/merge-refuse.md",
    });
    const statement = "Ne merge pas la PR #1.";
    expect(userStatementRefusesMerge(statement)).toBe(true);
    const turnKey = newId("ctk");
    const { msgId } = await insertUserAct({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      preparationId: ctx.preparationId,
      content: statement,
      clientTurnKey: turnKey,
    });
    const before = await db
      .select()
      .from(effectAttempts)
      .where(and(eq(effectAttempts.projectId, ctx.projectId), eq(effectAttempts.kind, "GIT_MERGE")));
    const out = await admitConversationalMergeMandate({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      userMessageId: msgId,
      userStatement: statement,
      clientTurnKey: turnKey,
      requestedPrNumber: 1,
      wantsMergeFromQual: true,
      autoDispatch: true,
    });
    expect(out.reasonCode).toBe("REFUSED");
    expect(out.authorized).toBe(false);
    const after = await db
      .select()
      .from(effectAttempts)
      .where(and(eq(effectAttempts.projectId, ctx.projectId), eq(effectAttempts.kind, "GIT_MERGE")));
    expect(after.length).toBe(before.length);
    const hd = await db
      .select()
      .from(humanDecisions)
      .where(
        and(
          eq(humanDecisions.projectId, ctx.projectId),
          eq(humanDecisions.kind, "GIT_MERGE_MANDATE"),
        ),
      );
    expect(hd).toHaveLength(0);
  });

  it("P0-M02: explicit PR #A never resolves to a different newer PR #B", async () => {
    const ctx = await seedProjectWithGit("merge-sec-pr");
    const a = await publishDoc({
      ...ctx,
      title: "Doc A",
      path: "docs/merge-a.md",
    });
    const b = await publishDoc({
      ...ctx,
      title: "Doc B",
      path: "docs/merge-b.md",
    });
    expect(b.prNumber).not.toBe(a.prNumber);

    const resolved = await resolveDocumentaryMergeTarget({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      userStatement: `Merge la PR #${a.prNumber}.`,
      requestedPrNumber: a.prNumber,
    });
    expect(resolved.ok).toBe(true);
    if (resolved.ok) {
      expect(resolved.prNumber).toBe(a.prNumber);
      expect(resolved.publicationAttemptId).toBe(a.attemptId);
      expect(resolved.publicationAttemptId).not.toBe(b.attemptId);
    }

    const missing = await resolveDocumentaryMergeTarget({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      userStatement: "Merge la PR #99999.",
      requestedPrNumber: 99999,
    });
    expect(missing.ok).toBe(false);
    if (!missing.ok) expect(missing.reasonCode).toBe("PR_NOT_FOUND");
  });

  it("P0-M03: authorizeMerge stores conversational provenance; wrong PR refused", async () => {
    const ctx = await seedProjectWithGit("merge-sec-prov");
    const pub = await publishDoc({
      ...ctx,
      title: "Doc Prov",
      path: "docs/merge-prov.md",
    });
    const statement = `Merge la PR #${pub.prNumber}.`;
    const turnKey = newId("ctk");
    const { msgId, convId } = await insertUserAct({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      preparationId: ctx.preparationId,
      content: statement,
      clientTurnKey: turnKey,
    });

    const out = await admitConversationalMergeMandate({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      userMessageId: msgId,
      userStatement: statement,
      clientTurnKey: turnKey,
      requestedPrNumber: pub.prNumber,
      publicationAttemptId: pub.attemptId,
      wantsMergeFromQual: true,
      autoDispatch: false,
    });
    expect(out.authorized).toBe(true);
    expect(out.decisionId).toBeTruthy();
    expect(out.resolvedPrNumber).toBe(pub.prNumber);

    const hd = (
      await db.select().from(humanDecisions).where(eq(humanDecisions.id, out.decisionId!))
    )[0]!;
    const conditions = JSON.parse(hd.effectConditions ?? "{}") as {
      prNumber?: number;
      conversationalProvenance?: {
        userMessageId?: string;
        conversationId?: string;
        requestedPrNumber?: number;
        publicationAttemptId?: string;
        planFingerprint?: string;
      };
    };
    expect(conditions.prNumber).toBe(pub.prNumber);
    expect(conditions.conversationalProvenance?.userMessageId).toBe(msgId);
    expect(conditions.conversationalProvenance?.conversationId).toBe(convId);
    expect(conditions.conversationalProvenance?.requestedPrNumber).toBe(pub.prNumber);
    expect(conditions.conversationalProvenance?.publicationAttemptId).toBe(pub.attemptId);
    expect(conditions.conversationalProvenance?.planFingerprint).toBeTruthy();

    const mergePrep = await prepareMerge({
      pilotId: ctx.pilotId,
      projectId: ctx.projectId,
      publicationAttemptId: pub.attemptId,
      correlationKey: newId("merge-mismatch"),
    });
    await expect(
      authorizeMerge({
        pilotId: ctx.pilotId,
        projectId: ctx.projectId,
        attemptId: mergePrep.attemptId,
        statement,
        conversationalProvenance: {
          userMessageId: msgId,
          conversationId: convId,
          contentFingerprint: "y".repeat(64),
          requestedPrNumber: pub.prNumber + 99,
          publicationAttemptId: pub.attemptId,
          repositoryId: mergePrep.plan.repositoryId,
          expectedHeadSha: mergePrep.plan.expectedHeadSha,
          expectedBaseSha: mergePrep.plan.expectedBaseSha,
          planFingerprint: mergePrep.fingerprint,
          resolutionSource: "explicit_pr",
        },
      }),
    ).rejects.toMatchObject({ code: "CONFLICT" });
  });
});

```

## MODIFY `projects/sfia-studio-next/web/src/domains/execution/effect-service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts b/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
index 02169f13..ec7e4237 100644
--- a/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
+++ b/projects/sfia-studio-next/web/src/domains/execution/effect-service.ts
@@ -923,6 +923,9 @@ export async function authorizePublication(input: {
   attemptId: string;
   statement: string;
   inspectedFingerprint: string;
+  /** Optional durable USER message provenance (E08 conversational mandate). */
+  sourceMessageId?: string | null;
+  clientTurnKey?: string | null;
 }) {
   return db.transaction(async (tx) => {
     const row = (
@@ -979,6 +982,11 @@ export async function authorizePublication(input: {
       );
     }

+    const messageId = input.sourceMessageId?.trim() || null;
+    const turnKey = input.clientTurnKey?.trim() || null;
+    // Conversational path must carry a durable USER message id (P0-03).
+    // Panel authorize may omit it; when present, record provenance only — full
+    // persistence proof runs in admitConversationalPublicationMandate.
     const conditions = JSON.stringify({
       fingerprint: row.fingerprint,
       inspectionFingerprint: plan.inspection.inspectionFingerprint,
@@ -994,6 +1002,16 @@ export async function authorizePublication(input: {
         baseSha: plan.baseSha,
         steps: plan.steps,
       },
+      ...(messageId || turnKey
+        ? {
+            conversationalProvenance: {
+              ...(messageId ? { userMessageId: messageId } : {}),
+              ...(turnKey ? { clientTurnKey: turnKey } : {}),
+              sourceKind: "USER_MESSAGE",
+              roleRequired: "user",
+            },
+          }
+        : {}),
     });

     const decisionId = await insertHumanDecision(tx, {
@@ -1840,11 +1858,27 @@ export async function prepareMerge(input: {
   return { attemptId, status: "PREPARED" as const, plan, fingerprint };
 }

+export type ConversationalMergeProvenance = {
+  userMessageId: string;
+  conversationId: string;
+  clientTurnKey?: string | null;
+  contentFingerprint: string;
+  requestedPrNumber: number;
+  publicationAttemptId: string;
+  repositoryId: string;
+  expectedHeadSha: string;
+  expectedBaseSha: string | null;
+  planFingerprint: string;
+  resolutionSource: string;
+};
+
 export async function authorizeMerge(input: {
   pilotId: string;
   projectId: string;
   attemptId: string;
   statement: string;
+  /** P0-M03 — required for conversational path; panel authorize may omit. */
+  conversationalProvenance?: ConversationalMergeProvenance | null;
 }) {
   return db.transaction(async (tx) => {
     const row = (
@@ -1866,10 +1900,64 @@ export async function authorizeMerge(input: {
       return { attemptId: row.id, status: row.status, decisionId: row.decisionId, idempotent: true };
     }
     const plan = JSON.parse(row.planJson) as MergePlan;
+    const prov = input.conversationalProvenance ?? null;
+    if (prov) {
+      if (prov.planFingerprint !== row.fingerprint) {
+        throw new StudioError("CONFLICT", "Fingerprint plan merge divergent du mandat USER");
+      }
+      if (prov.requestedPrNumber !== plan.prNumber) {
+        throw new StudioError(
+          "CONFLICT",
+          `PR du mandat (#${prov.requestedPrNumber}) ≠ plan (#${plan.prNumber})`,
+        );
+      }
+      if (prov.publicationAttemptId !== plan.publicationAttemptId) {
+        throw new StudioError("CONFLICT", "Publication documentaire du mandat hors plan");
+      }
+      if (prov.repositoryId !== plan.repositoryId) {
+        throw new StudioError("CONFLICT", "Dépôt du mandat hors plan");
+      }
+      if (
+        prov.expectedHeadSha.toLowerCase() !== plan.expectedHeadSha.toLowerCase() ||
+        (prov.expectedBaseSha ?? "").toLowerCase() !== (plan.expectedBaseSha ?? "").toLowerCase()
+      ) {
+        throw new StudioError("REQUIRES_REQUALIFICATION", "SHA head/base divergents du mandat");
+      }
+    }
     const conditions = JSON.stringify({
       fingerprint: row.fingerprint,
       publicationAttemptId: plan.publicationAttemptId,
       prNumber: plan.prNumber,
+      repositoryId: plan.repositoryId,
+      expectedHeadSha: plan.expectedHeadSha,
+      expectedBaseSha: plan.expectedBaseSha,
+      envelope: {
+        documentId: plan.documentId,
+        revisionId: plan.revisionId,
+        publicationRefId: plan.publicationRefId,
+        expectedHeadRef: plan.expectedHeadRef,
+        expectedBaseRef: plan.expectedBaseRef,
+        publicationBranch: plan.publicationBranch,
+      },
+      ...(prov
+        ? {
+            conversationalProvenance: {
+              userMessageId: prov.userMessageId,
+              conversationId: prov.conversationId,
+              ...(prov.clientTurnKey ? { clientTurnKey: prov.clientTurnKey } : {}),
+              contentFingerprint: prov.contentFingerprint,
+              requestedPrNumber: prov.requestedPrNumber,
+              publicationAttemptId: prov.publicationAttemptId,
+              repositoryId: prov.repositoryId,
+              expectedHeadSha: prov.expectedHeadSha,
+              expectedBaseSha: prov.expectedBaseSha,
+              planFingerprint: prov.planFingerprint,
+              resolutionSource: prov.resolutionSource,
+              sourceKind: "USER_MESSAGE",
+              roleRequired: "user",
+            },
+          }
+        : {}),
     });
     const decisionId = await insertHumanDecision(tx, {
       projectId: input.projectId,

```

## MODIFY `projects/sfia-studio-next/web/src/domains/conversation/service.ts`

```diff
diff --git a/projects/sfia-studio-next/web/src/domains/conversation/service.ts b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
index 0fd75b69..c18ae16f 100644
--- a/projects/sfia-studio-next/web/src/domains/conversation/service.ts
+++ b/projects/sfia-studio-next/web/src/domains/conversation/service.ts
@@ -116,6 +116,14 @@ import {
   recoverAuthorizedNoraMissions,
   type MissionProjection,
 } from "./mission-continuity";
+import { admitConversationalPublicationMandate } from "./conversation-publication-authority";
+import {
+  admitConversationalMergeMandate,
+  extractPositivelyRequestedPrNumbers,
+  userStatementRefusesMerge,
+  userStatementRequestsPositiveMerge,
+} from "./conversation-merge-authority";
+import { userStatementRefusesPublication } from "./conversation-publication-mandate-guards";
 import {
   advanceMissionAfterProjectCreated,
   buildD2AwaitingStep,
@@ -1539,6 +1547,8 @@ export async function postUserMessageAndNora(
   const clientIntentKey = clientTurnKey;
   const missionKeys = missionCorrelationKeys(clientIntentKey);

+  let publicationMandateDecisionId: string | null = null;
+
   let durableProposal: DocumentProposalExact | null = null;
   /** P1: set when concurrent fence diverges / is invalid — block silent strip+reinject. */
   let proposalAuthorityConflict: string | null = null;
@@ -2538,6 +2548,9 @@ export async function postUserMessageAndNora(
     }
   }

+  // Explicit refusal must not leave a publication PREPARED / AWAITING_PILOT_AUTH.
+  const userRefusesPublish = userStatementRefusesPublication(content);
+
   if (
     allowOwnerEffects &&
     !ownershipLostBeforeD4 &&
@@ -2545,6 +2558,7 @@ export async function postUserMessageAndNora(
     documentEffectForAck.documentId &&
     documentEffectForAck.revisionId &&
     missionIntent.wantsPublish &&
+    !userRefusesPublish &&
     ctx.project?.id
   ) {
     const steps: MissionProjection["steps"] = [
@@ -2585,7 +2599,7 @@ export async function postUserMessageAndNora(
         targetBranch: missionIntent.targetBranch,
       });
       if (prepared.ok) {
-        steps.push({
+        const prepStep: MissionProjection["steps"][number] = {
           id: "d7_prepare",
           capabilityId: "d7.prepare_publication",
           status: prepared.status === "PREPARED" ? "WAITING" : "DONE",
@@ -2593,26 +2607,86 @@ export async function postUserMessageAndNora(
           attemptId: prepared.attemptId,
           documentId: documentEffectForAck.documentId,
           revisionId: documentEffectForAck.revisionId,
+        };
+        steps.push(prepStep);
+
+        let missionStatus: MissionProjection["status"] = "AWAITING_PILOT_AUTH";
+        let goalSummary = "CREATE D4 + publication Git (attente autorisation Pilote)";
+        let authorizeCalled = false;
+
+        const mandateAdmission = await admitConversationalPublicationMandate({
+          pilotId,
+          projectId: ctx.project.id,
+          attemptId: prepared.attemptId,
+          userMessageId: reserved.userMessageId,
+          userStatement: content,
+          clientTurnKey: clientIntentKey,
+          qualifiedPath: missionIntent.targetPath,
+          qualifiedBranch: missionIntent.targetBranch,
+          wantsPublishFromQual: missionIntent.wantsPublish,
         });
+
+        if (mandateAdmission.authorized && mandateAdmission.decisionId) {
+          publicationMandateDecisionId = mandateAdmission.decisionId;
+          authorizeCalled = true;
+          prepStep.decisionId = mandateAdmission.decisionId;
+          const resumeStatus = mandateAdmission.missionResume?.status ?? "AUTHORIZED";
+          if (resumeStatus === "COMPLETED") {
+            prepStep.status = "DONE";
+            missionStatus = "COMPLETED";
+            goalSummary = "CREATE D4 + publication Git (mandat conversationnel + effet terminé)";
+          } else if (
+            resumeStatus === "DISPATCHED" ||
+            resumeStatus === "AMBIGUOUS" ||
+            mandateAdmission.missionResume?.dispatched
+          ) {
+            prepStep.status = "WAITING";
+            missionStatus = "ACTIVE";
+            goalSummary = "CREATE D4 + publication Git (mandat conversationnel — dispatch en cours)";
+          } else {
+            prepStep.status = "WAITING";
+            missionStatus = "AWAITING_PILOT_AUTH";
+            goalSummary =
+              "CREATE D4 + publication Git (mandat D6 enregistré — reprise dispatch en attente)";
+          }
+        } else if (
+          mandateAdmission.attempted &&
+          mandateAdmission.reasonCode &&
+          !["ALREADY_AUTHORIZED", "REFUSED", "MERGE_ONLY", "NO_PUBLISH_QUAL"].includes(
+            mandateAdmission.reasonCode,
+          ) &&
+          (mandateAdmission.reasonCode === "AMBIGUOUS_PATH" ||
+            mandateAdmission.reasonCode === "AMBIGUOUS_BRANCH" ||
+            mandateAdmission.reasonCode === "PLAN_DRIFT" ||
+            mandateAdmission.reasonCode === "AMBIGUOUS")
+        ) {
+          missionStatus = "AWAITING_CLARIFICATION";
+          goalSummary = "Publication préparée — mandat conversationnel ambigu (précision requise)";
+          prepStep.reason = mandateAdmission.reason ?? mandateAdmission.reasonCode;
+        }
+
         missionProjection = {
           clientIntentKey,
-          status: "AWAITING_PILOT_AUTH",
-          goalSummary: "CREATE D4 + publication Git (attente autorisation Pilote)",
+          status: missionStatus,
+          goalSummary,
           steps,
           restitution: continueFailedAfterEffect ? "PENDING" : "DELIVERED",
         };
         emitObs({
-          event_name: "d3.mission.prepared_awaiting_auth",
+          event_name: mandateAdmission.authorized
+            ? "d3.mission.prepared_conversational_authorize"
+            : "d3.mission.prepared_awaiting_auth",
           component: "d3.mission_continuity",
           request_id: requestId,
           operation_id: reserved.operationId,
           generation_id: reply.generationId,
-          outcome: "SUCCESS",
+          outcome: mandateAdmission.authorized ? "SUCCESS" : "PARTIAL",
           meta: {
             attempt_id: prepared.attemptId,
             document_id: documentEffectForAck.documentId,
-            // Never call authorize here — HD only on Pilot act.
-            authorize_called: false,
+            authorize_called: authorizeCalled,
+            mandate_reason: mandateAdmission.reasonCode ?? null,
+            decision_id: mandateAdmission.decisionId,
           },
         });
       } else {
@@ -2641,6 +2715,99 @@ export async function postUserMessageAndNora(
     }
   }

+  // Documentary merge — distinct D6 mandate (publication ≠ merge).
+  // P0-M01: lexical "merge" alone is never enough; refuse/hypothesis never enter this path.
+  const mergePrHints = extractPositivelyRequestedPrNumbers(content);
+  if (
+    allowOwnerEffects &&
+    !ownershipLostBeforeD4 &&
+    ctx.project?.id &&
+    !userStatementRefusesMerge(content) &&
+    userStatementRequestsPositiveMerge(content)
+  ) {
+    if (await requireTurnOwnership(reserved.commandId, reserved.ownerToken)) {
+      const mergeAdmit = await admitConversationalMergeMandate({
+        pilotId,
+        projectId: ctx.project.id,
+        userMessageId: reserved.userMessageId,
+        userStatement: content,
+        clientTurnKey: clientIntentKey,
+        requestedPrNumber: mergePrHints.length === 1 ? mergePrHints[0]! : null,
+        wantsMergeFromQual: true,
+      });
+      if (mergeAdmit.authorized && mergeAdmit.attemptId) {
+        const mergeStep = {
+          id: "d7_merge",
+          capabilityId: "d7.merge_publication",
+          status:
+            mergeAdmit.dispatchStatus === "COMPLETED"
+              ? ("DONE" as const)
+              : ("WAITING" as const),
+          correlationKey: `merge:mission:${clientIntentKey}`,
+          attemptId: mergeAdmit.attemptId,
+          decisionId: mergeAdmit.decisionId ?? undefined,
+          reason: mergeAdmit.reasonCode,
+        };
+        if (!missionProjection) {
+          missionProjection = {
+            clientIntentKey,
+            status: mergeAdmit.dispatchStatus === "COMPLETED" ? "COMPLETED" : "ACTIVE",
+            goalSummary:
+              mergeAdmit.dispatchStatus === "COMPLETED"
+                ? `Merge documentaire conversationnel terminé (PR #${mergeAdmit.resolvedPrNumber ?? "?"})`
+                : `Merge documentaire — mandat D6 (PR #${mergeAdmit.resolvedPrNumber ?? "?"})`,
+            steps: [mergeStep],
+            restitution: "CANONICAL",
+          };
+        } else {
+          missionProjection = {
+            ...missionProjection,
+            steps: [...missionProjection.steps, mergeStep],
+            status:
+              mergeAdmit.dispatchStatus === "COMPLETED"
+                ? "COMPLETED"
+                : missionProjection.status,
+            goalSummary:
+              mergeAdmit.dispatchStatus === "COMPLETED"
+                ? `${missionProjection.goalSummary} · merge terminé`
+                : `${missionProjection.goalSummary} · merge en cours`,
+          };
+        }
+      } else if (
+        mergeAdmit.attempted &&
+        [
+          "AMBIGUOUS_TARGET",
+          "AMBIGUOUS_PR",
+          "AMBIGUOUS",
+          "TARGET_UNRESOLVED",
+          "PR_NOT_FOUND",
+          "PR_MISMATCH",
+          "NO_PUBLICATION",
+          "PUBLICATION_NOT_FOUND",
+          "PUBLICATION_NOT_COMPLETED",
+        ].includes(mergeAdmit.reasonCode ?? "")
+      ) {
+        const clarifyStep = {
+          id: "d7_merge",
+          capabilityId: "d7.merge_publication",
+          status: "PENDING" as const,
+          correlationKey: `merge:mission:${clientIntentKey}`,
+          reason: mergeAdmit.reason ?? mergeAdmit.reasonCode,
+        };
+        if (!missionProjection) {
+          missionProjection = {
+            clientIntentKey,
+            status: "AWAITING_CLARIFICATION",
+            goalSummary: "Merge documentaire — précision requise",
+            steps: [clarifyStep],
+            restitution: "CANONICAL",
+          };
+        }
+      }
+      // REFUSED / NON_AUTHORIZING / NO_POSITIVE_MERGE: no prepare, no HD, no dispatch.
+    }
+  }
+
   // D2 projection draft prepared here; persisted only AFTER durable terminal commit (Gap C).
   let preparationProjectionDraft: ReturnType<typeof draftProjectionFromQualification> = null;
   let preparationProjectionAck:
@@ -2881,7 +3048,8 @@ export async function postUserMessageAndNora(
     pendingDocumentCandidate: ownershipLostBeforeD4 ? null : pendingDocumentCandidateOut,
     historicalAuthorization: ownershipLostBeforeD4 ? null : historicalAuthorizationOut,
     idempotentReplay: false,
-    humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
+    humanDecisionCreated:
+      Boolean(authority?.humanDecisionCreated) || Boolean(publicationMandateDecisionId),
     pilotageEffect: pilotageEffectFromAuthority(authority),
     missionProjection,
     nextTurnKind,

```

## CREATE/UPDATE `projects/sfia-studio-next/construction/ensemble-08-git-et-publications/as-built.md`

```markdown
# Ensemble 08 — As-built (consultation Git + conduite Nora)

| Champ | Valeur |
|---|---|
| Date | 2026-11-21 (correctif intégré) |
| Branche | `feat/next-ensemble08-git-publications-nora` |
| Base | `origin/main` @ `a12f89a15c454319c06f49fcc5e8effa9f3f1a75` |
| Profil | CRITICAL · Delivery correctif · NO RELEASE |
| CKC | FALLBACK (Delivery #8) |

## Livré (delivery + correctif)

### Capacité A — Consultation Git
- Listing répertoire D9 : `listDirectory` / `listGitDirectory` / `GET .../git/tree`
- Dépassement >200 entrées → `AMBIGUOUS` (SCRIPTED + REAL) — pas de truncation silencieuse
- Projection publications projet : historique D8 ≠ live GitHub
- Surface UI `GitRepositoriesSurface` : choix explicite de dépôt ; génération contexte anti-stale
- Icônes Figma exactes ; split 30/70 ; agrandir icon-only

### Capacité B — Nora
- `admitConversationalPublicationMandate` + preuve USER persistée (rôle/projet/tour/empreinte)
- Refus explicite → **aucune** tentative PREPARED / AWAITING_PILOT_AUTH
- Branch hints : plus de faux « du » / « de » (P0-01)
- `admitConversationalMergeMandate` — mandat D6 merge documentaire distinct
- Merge SHA : `merge_commit_sha` observé uniquement (P0-02)
- **Merge security 2026-11-21** : négation fail-closed (P0-M01) · résolution PR exacte (P0-M02) · provenance USER dans `authorizeMerge` (P0-M03)

### REAL multi-dépôts
- Allowlist explicite `allowedFullNames` + env `GITHUB_APP_ALLOWED_REPOS` (même owner)
- Pas d'« allow all » ; pas de token installation en fallback mutation

## Non livré / réserves
- Figma G5 runtime (captures navigateur + mesures DOM F2) : **NOT PROVEN**
- END-TO-END REAL mutation GitHub : **NOT PROVEN** (pas de GO sandbox)
- Playwright Nora publication/merge conversationnels E2E : partiel (surface SCRIPTED 2 PASS)
- RECETTE / promotion : hors cycle

## Preuves exécutées (correctif)
- `tsc --noEmit` PASS
- unit **743/743** PASS
- `mission-continuity-accept01.pg` **10/10** PASS
- `git-collaboration.pg` **93/93** PASS
- Playwright `ensemble08-git-surface.spec.ts` **2/2** PASS (SCRIPTED)
- `npm run build` PASS
- Figma L2 11.03 metadata : DONE · G5 **NOT PROVEN**

## Fake/Real
| Capacité | Niveau |
|---|---|
| Listing / UI / pubs | DETERMINISTIC PROVEN (SCRIPTED + PG + Playwright) |
| Mandat publication + merge conversationnel | DETERMINISTIC PROVEN (unit/PG path) |
| Merge SHA proof | DETERMINISTIC PROVEN (unit mocks) |
| Multi-repo allowlist | DETERMINISTIC PROVEN (unit) |
| GitHub REAL mutation | NOT PROVEN |
| Figma G5 | NOT PROVEN |

```

## MODIFY `projects/sfia-studio-next/construction/delivery-history.md`

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 01ea3018..f22e361f 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -3,6 +3,59 @@
 Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.

+## delivery_id: DELIV-2026-11-21-ENSEMBLE08-MERGE-AUTHORITY-SECURITY
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-21 |
+| Macro-lot | Ensemble 08 — correctif CRITICAL sécurisation merge conversationnel |
+| Type | CORRECTIVE / CRITICAL · **NO RELEASE** |
+| Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` |
+| Prior handoff | `eebaeeda` |
+| P0-M01 | négation/hypothèse → aucun prepare/authorize/dispatch |
+| P0-M02 | PR explicite liée à publication documentaire exacte (pas latest) |
+| P0-M03 | HumanDecision merge + conversationalProvenance liée au plan |
+| Tests | unit merge guards PASS · PG conversation-merge-security **3/3 PASS** |
+| REAL mutation | **NOT PROVEN** / hors mandat |
+| Push projet | **NONE** |
+| Verdict candidat | **DELIVERY READY WITH RESERVES** |
+
+## delivery_id: DELIV-2026-11-21-ENSEMBLE08-CORRECTIVE-P0P1-G5-REAL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-21 |
+| Macro-lot | Ensemble 08 — cycle correctif intégré (P0/P1, Nora merge, Figma L2, Playwright, REAL allowlist) |
+| Type | CORRECTIVE / CRITICAL · **NO RELEASE** · Gate C OPEN |
+| Base | `origin/main` `a12f89a1` · branche `feat/next-ensemble08-git-publications-nora` (local only) |
+| Prior handoff | `74528b81` (FULL §7.2) — pack mono-cycle réinitialisé puis republier |
+| P0 | branch hint « du/de » · merge SHA ≠ HEAD · provenance USER persistée |
+| P1 | stale async · attach explicite · truncation >200 AMBIGUOUS · pubs D8 non-live |
+| Nora | refuse → no PREPARED · `admitConversationalMergeMandate` |
+| REAL multi-repo | allowlist `GITHUB_APP_ALLOWED_REPOS` (owner-bound, no allow-all) |
+| Figma | L2 11.03 metadata · G5 runtime **NOT PROVEN** |
+| Tests | unit **743 PASS** · mission-continuity PG **10 PASS** · git-collaboration PG **93 PASS** · Playwright E08 surface **2 PASS SCRIPTED** · tsc/build PASS |
+| REAL mutation | **NOT PROVEN** (pas de GO sandbox) |
+| Push projet | **NONE** |
+| Verdict candidat | **DELIVERY READY WITH RESERVES** |
+
+## delivery_id: DELIV-2026-11-21-ENSEMBLE08-GIT-PUBLICATIONS-NORA
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-21 |
+| Macro-lot | Ensemble 08 — Dépôts Git, publications, conduite Nora |
+| Type | EVOL / Delivery CRITICAL · **NO RELEASE** · Gate C OPEN |
+| Base | `origin/main` `a12f89a1` (annoncé `1dd1a8ec` +2 : Journal nav PR #689) |
+| Branche | `feat/next-ensemble08-git-publications-nora` (local only — **no project push**) |
+| Capacité A | tree API · publications projection · `GitRepositoriesSurface` · multi-liens |
+| Capacité B | mandat conversationnel D6 → `authorizePublication` · `list_git_directory` Nora |
+| Merge REAL | code path documentary + SHA (non exercé END-TO-END REAL ce cycle) |
+| Figma | L0/L1 + PNG SHA page 11 · G5 runtime **NOT PROVEN** |
+| Tests | unit 725 PASS · mission-continuity PG 10 PASS · git-collaboration filtré 24 PASS · build PASS |
+| Push projet | **NONE** |
+| Verdict candidat | **DELIVERY READY WITH RESERVES** — supersédé par cycle correctif ci-dessus |
+
 ## delivery_id: DELIV-2026-11-21-ENSEMBLE07-PR687-SAS06-RESPONSIVE-CI

 | Field | Value |

```
