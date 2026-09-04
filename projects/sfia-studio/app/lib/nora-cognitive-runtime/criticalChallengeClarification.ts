/**
 * MW5-S01…S04 — structural challenge / clarification / Critical ordering / escalation.
 *
 * Studio-owned fail-closed policy over F2 + CWP facts.
 * Does NOT duplicate CWP, does NOT invent HumanDecision/GO/Confirmation,
 * does NOT persist, does NOT adopt a second Runner.
 *
 * `criticalChallengeArmed` is an INPUT HOOK (MW2 High-Assurance) — not MW5-S03 proof.
 *
 * Behavioral Proof Contract (frozen before product wiring):
 * S01 CLAIM structural challenge ≤3, never questionnaire
 *   SEAM decideMw5Disposition + F2 withhold Rec
 * S02 CLAIM clarify only structural ambiguity; cosmetic / context-resolved → CONTINUE
 * S03 CLAIM Critical/HA Rec only after challenge performed/satisfied; bypass fail-closed
 * S04 CLAIM CONTINUE/CHALLENGE/CLARIFY/ESCALATE; never synthesize HD/GO/Confirmation
 */

export const MW5_MAX_STRUCTURAL_CHALLENGES = 3;

export const MW5_CHALLENGE_MARKER = "[MW5 CHALLENGE]";
export const MW5_CLARIFY_MARKER = "[MW5 CLARIFY]";
export const MW5_ESCALATE_MARKER = "[MW5 ESCALADE PILOTE]";

/**
 * TEST-ONLY Fake / fixture markers.
 * Truth C / consumed HD markers MUST NOT be read as product authority on the F2 path
 * (CORR-MW5-01). Satisfaction markers may drive Fake structured cognition only
 * (`challengeResponseAssessment`), never a bare `historyChallengeSatisfied` bypass.
 */
export const MW5_TEST_MARKERS = {
  cosmetic: "__MW5_COSMETIC__",
  contextResolved: "__MW5_CONTEXT_RESOLVED__",
  /** TEST-ONLY Fake fixture — not product Truth C authority. */
  truthC: "__MW5_TRUTH_C_ESTABLISHED__",
  /** TEST-ONLY Fake fixture — not product HD authority. */
  consumedHd: "__MW5_CONSUMED_HD__",
  questionnaire: "__MW5_QUESTIONNAIRE_ATTEMPT__",
  authority: "__MW5_AUTHORITY__",
  /** TEST-ONLY: Fake emits challengeResponseAssessment=sufficient. */
  challengeSatisfied: "__MW5_CHALLENGE_SATISFIED__",
  satisfactionSufficient: "__MW5_SATISFACTION_SUFFICIENT__",
  satisfactionInsufficient: "__MW5_SATISFACTION_INSUFFICIENT__",
  synthHd: "__MW5_SYNTH_HD__",
  highAssurance: "__MW5_HIGH_ASSURANCE__",
} as const;

export type Mw5Disposition =
  | "CONTINUE"
  | "CHALLENGE"
  | "CLARIFY"
  | "ESCALATE";

export type Mw5UncertaintyClass =
  | "none"
  | "cosmetic"
  | "structural_ambiguity"
  | "structural_premise"
  | "authority_boundary";

export type Mw5PolicyInput = {
  uncertaintyClass: Mw5UncertaintyClass;
  contextResolvesUncertainty: boolean;
  truthCEstablishedForClaim: boolean;
  consumedHumanDecisionWithoutNewContradiction: boolean;
  priorStructuralChallengeCount: number;
  challengeSatisfied: boolean;
  /** MW2 hook — NOT S03 proof by itself. */
  criticalChallengeArmed: boolean;
  recommendedProfile: string | null;
  recommendationWouldEmit: boolean;
  unresolvedAuthorityBoundary: boolean;
  synthesizeHumanActAttempt: boolean;
  proposedStructuralChallenges: readonly string[];
};

export type Mw5PolicyResult = {
  disposition: Mw5Disposition;
  challenges: string[];
  structuralChallengeCount: number;
  questionnaireSuppressed: boolean;
  clarificationAllowed: boolean;
  recommendationAllowed: boolean;
  challengeGateApplicable: boolean;
  challengeSatisfied: boolean;
  challengeEvidenceBeforeRecommendation: boolean;
  bypassAttempted: boolean;
  bypassBlocked: boolean;
  synthesizedHumanDecision: false;
  synthesizedGo: false;
  synthesizedConfirmation: false;
  reasonCodes: string[];
  disclosure: string;
};

export type Mw5TurnSurface = {
  disposition: Mw5Disposition;
  structuralChallengeCount: number;
  questionnaireSuppressed: boolean;
  recommendationAllowed: boolean;
  challengeGateApplicable: boolean;
  challengeSatisfied: boolean;
  challengeEvidenceBeforeRecommendation: boolean;
  bypassAttempted: boolean;
  bypassBlocked: boolean;
  synthesizedHumanDecision: false;
  synthesizedGo: false;
  synthesizedConfirmation: false;
  disclosure: string;
  reasonCodes: readonly string[];
  challenges: readonly string[];
  /** Honest: High-Assurance arming is not S03 proof. */
  criticalChallengeArmedHookOnly: boolean;
};

const DEFAULT_STRUCTURAL_CHALLENGES: readonly string[] = [
  "Quelle prémisse structurante n'est pas encore établie pour cette recommandation ?",
  "Quel périmètre ou impact reste non fondé dans le contexte Truth C disponible ?",
  "Quelle frontière d'autorité humaine reste ouverte — sans confondre Recommandation et HumanDecision ?",
];

const DEFAULT_STRUCTURAL_CLARIFICATIONS: readonly string[] = [
  "Précisez l'objectif, le périmètre ou l'acte demandé uniquement s'ils changent l'analyse, le scope, l'autorité, la recommandation, la preuve ou la trajectoire.",
];

const INTAKE_FORM_PROBES: readonly string[] = [
  "Quel est votre prénom ?",
  "Quelle couleur préférez-vous ?",
  "Quel fuseau horaire utilisez-vous ?",
  "Quel navigateur préférez-vous ?",
  "Souhaitez-vous un thème clair ou sombre ?",
  "Quel est votre plat préféré ?",
];

const COSMETIC_RE =
  /\b(typo|orthographe|couleur|padding|polish|cosm[eé]tique|wording de style|formulation cosmétique)\b/i;

export function isCriticalProfile(profile: string | null | undefined): boolean {
  return profile === "Critical";
}

export function capStructuralChallenges(
  proposed: readonly string[],
  priorCount: number,
): { challenges: string[]; questionnaireSuppressed: boolean } {
  const remaining = Math.max(0, MW5_MAX_STRUCTURAL_CHALLENGES - Math.max(0, priorCount));
  const unique = [];
  const seen = new Set<string>();
  for (const raw of proposed) {
    const text = raw.trim();
    if (!text || seen.has(text)) continue;
    seen.add(text);
    unique.push(text);
  }
  const questionnaireSuppressed =
    unique.length > remaining || unique.length > MW5_MAX_STRUCTURAL_CHALLENGES;
  return {
    challenges: unique.slice(0, remaining),
    questionnaireSuppressed,
  };
}

export function looksLikeQuestionnaire(challenges: readonly string[]): boolean {
  if (challenges.length > MW5_MAX_STRUCTURAL_CHALLENGES) return true;
  const joined = challenges.join(" ");
  const qMarks = (joined.match(/\?/g) ?? []).length;
  return qMarks > MW5_MAX_STRUCTURAL_CHALLENGES;
}

function antiSynthesis(): Pick<
  Mw5PolicyResult,
  "synthesizedHumanDecision" | "synthesizedGo" | "synthesizedConfirmation"
> {
  return {
    synthesizedHumanDecision: false,
    synthesizedGo: false,
    synthesizedConfirmation: false,
  };
}

function finish(
  partial: Omit<
    Mw5PolicyResult,
    | "synthesizedHumanDecision"
    | "synthesizedGo"
    | "synthesizedConfirmation"
    | "challengeEvidenceBeforeRecommendation"
    | "structuralChallengeCount"
  > & { structuralChallengeCount?: number },
): Mw5PolicyResult {
  const structuralChallengeCount =
    partial.structuralChallengeCount ?? partial.challenges.length;
  const challengeEvidenceBeforeRecommendation =
    !partial.recommendationAllowed ||
    !partial.challengeGateApplicable ||
    partial.challengeSatisfied;
  return {
    ...antiSynthesis(),
    ...partial,
    structuralChallengeCount,
    challengeEvidenceBeforeRecommendation,
  };
}

export function decideMw5Disposition(input: Mw5PolicyInput): Mw5PolicyResult {
  const reasons: string[] = [];
  const profileCritical = isCriticalProfile(input.recommendedProfile);
  const criticalOutputGate =
    (input.criticalChallengeArmed || profileCritical) &&
    input.recommendationWouldEmit;
  if (input.criticalChallengeArmed) {
    reasons.push("critical_challenge_armed_hook");
  }
  if (profileCritical) {
    reasons.push("critical_profile");
  }

  const skipReopen =
    input.truthCEstablishedForClaim ||
    input.consumedHumanDecisionWithoutNewContradiction;
  if (input.truthCEstablishedForClaim) reasons.push("skip_established_truth_c");
  if (input.consumedHumanDecisionWithoutNewContradiction) {
    reasons.push("skip_consumed_human_decision");
  }

  const proposedLooksLikeQuestionnaire = looksLikeQuestionnaire(
    input.proposedStructuralChallenges,
  );
  const proposedForUse = proposedLooksLikeQuestionnaire
    ? DEFAULT_STRUCTURAL_CHALLENGES
    : input.proposedStructuralChallenges;
  const capped = capStructuralChallenges(
    proposedForUse,
    input.priorStructuralChallengeCount,
  );
  let challenges = capped.challenges;
  let questionnaireSuppressed =
    capped.questionnaireSuppressed || proposedLooksLikeQuestionnaire;

  if (input.synthesizeHumanActAttempt) {
    reasons.push("refuse_synthesized_human_act");
    return finish({
      disposition: "ESCALATE",
      challenges: [],
      questionnaireSuppressed,
      clarificationAllowed: false,
      recommendationAllowed: false,
      challengeGateApplicable: criticalOutputGate && !skipReopen,
      challengeSatisfied: input.challengeSatisfied,
      bypassAttempted: input.recommendationWouldEmit,
      bypassBlocked: input.recommendationWouldEmit,
      reasonCodes: reasons,
      disclosure:
        "Nora n'émet pas de HumanDecision, GO, Confirmation, décision Morris ou acte Pilote. Escalade vers le chemin Pilote existant.",
    });
  }

  if (skipReopen && input.uncertaintyClass !== "authority_boundary") {
    reasons.push("no_gratuitous_reopen");
    return finish({
      disposition: "CONTINUE",
      challenges: [],
      questionnaireSuppressed,
      clarificationAllowed: false,
      recommendationAllowed: true,
      challengeGateApplicable: false,
      challengeSatisfied: true,
      bypassAttempted: false,
      bypassBlocked: false,
      reasonCodes: reasons,
      disclosure:
        "Prémisse déjà établie (Truth C ou HumanDecision consommée) — pas de re-challenge gratuit.",
    });
  }

  if (
    input.uncertaintyClass === "cosmetic" &&
    !criticalOutputGate &&
    !input.unresolvedAuthorityBoundary
  ) {
    reasons.push("cosmetic_suppressed");
    return finish({
      disposition: "CONTINUE",
      challenges: [],
      questionnaireSuppressed,
      clarificationAllowed: false,
      recommendationAllowed: true,
      challengeGateApplicable: false,
      challengeSatisfied: input.challengeSatisfied,
      bypassAttempted: false,
      bypassBlocked: false,
      reasonCodes: reasons,
      disclosure: "Ambiguïté cosmétique / de style — CONTINUE, pas de clarification storm.",
    });
  }

  if (
    input.contextResolvesUncertainty &&
    !criticalOutputGate &&
    input.uncertaintyClass !== "authority_boundary"
  ) {
    reasons.push("context_resolves");
    return finish({
      disposition: "CONTINUE",
      challenges: [],
      questionnaireSuppressed,
      clarificationAllowed: false,
      recommendationAllowed: true,
      challengeGateApplicable: false,
      challengeSatisfied: true,
      bypassAttempted: false,
      bypassBlocked: false,
      reasonCodes: reasons,
      disclosure: "Le contexte disponible résout l'incertitude — CONTINUE autonome.",
    });
  }

  const challengeNeeded =
    (criticalOutputGate || input.uncertaintyClass === "structural_premise") &&
    !input.challengeSatisfied &&
    !skipReopen;

  if (challengeNeeded) {
    reasons.push("structural_challenge_required");
    if (criticalOutputGate) reasons.push("critical_output_ordering_gate");
    if (input.priorStructuralChallengeCount >= MW5_MAX_STRUCTURAL_CHALLENGES) {
      questionnaireSuppressed = true;
      reasons.push("challenge_cap_reached_escalate");
      return finish({
        disposition: "ESCALATE",
        challenges: [],
        questionnaireSuppressed: true,
        clarificationAllowed: false,
        recommendationAllowed: false,
        challengeGateApplicable: true,
        challengeSatisfied: false,
        bypassAttempted: input.recommendationWouldEmit,
        bypassBlocked: true,
        reasonCodes: reasons,
        disclosure:
          "Plafond de 3 challenges structurants atteint sans satisfaction — escalade Pilote, pas de 4e question, Rec bloquée.",
      });
    }
    if (challenges.length === 0) {
      challenges = capStructuralChallenges(
        DEFAULT_STRUCTURAL_CHALLENGES,
        input.priorStructuralChallengeCount,
      ).challenges;
    }
    const bypassAttempted = input.recommendationWouldEmit;
    return finish({
      disposition: "CHALLENGE",
      challenges,
      questionnaireSuppressed,
      clarificationAllowed: false,
      recommendationAllowed: false,
      challengeGateApplicable: true,
      challengeSatisfied: false,
      bypassAttempted,
      bypassBlocked: bypassAttempted,
      reasonCodes: reasons,
      disclosure:
        "Challenge structural requis avant Recommandation Critical/High-Assurance. Rec non émise.",
    });
  }

  if (
    input.uncertaintyClass === "structural_ambiguity" &&
    !input.contextResolvesUncertainty
  ) {
    reasons.push("structural_clarify");
    const clarify = capStructuralChallenges(
      challenges.length > 0 ? challenges : DEFAULT_STRUCTURAL_CLARIFICATIONS,
      input.priorStructuralChallengeCount,
    );
    return finish({
      disposition: "CLARIFY",
      challenges: clarify.challenges,
      questionnaireSuppressed:
        questionnaireSuppressed || clarify.questionnaireSuppressed,
      clarificationAllowed: true,
      recommendationAllowed: false,
      challengeGateApplicable: false,
      challengeSatisfied: input.challengeSatisfied,
      bypassAttempted: false,
      bypassBlocked: false,
      reasonCodes: reasons,
      disclosure: "Clarification structurante uniquement — pas de questionnaire.",
    });
  }

  if (
    input.unresolvedAuthorityBoundary ||
    input.uncertaintyClass === "authority_boundary"
  ) {
    reasons.push("escalate_unresolved_authority");
    return finish({
      disposition: "ESCALATE",
      challenges: [],
      questionnaireSuppressed,
      clarificationAllowed: false,
      recommendationAllowed: input.challengeSatisfied || !criticalOutputGate,
      challengeGateApplicable: criticalOutputGate,
      challengeSatisfied: input.challengeSatisfied || !criticalOutputGate,
      bypassAttempted: false,
      bypassBlocked: false,
      reasonCodes: reasons,
      disclosure:
        "Frontière d'autorité non résolue — escalade vers le chemin HumanDecision Pilote. Rec reste Rec.",
    });
  }

  reasons.push("continue");
  return finish({
    disposition: "CONTINUE",
    challenges: [],
    questionnaireSuppressed,
    clarificationAllowed: false,
    recommendationAllowed: true,
    challengeGateApplicable: criticalOutputGate && input.challengeSatisfied,
    challengeSatisfied: input.challengeSatisfied || !criticalOutputGate,
    bypassAttempted: false,
    bypassBlocked: false,
    reasonCodes: reasons,
    disclosure: "CONTINUE — cognition propose-only, pas d'escalade d'autorité.",
  });
}

export function toMw5TurnSurface(
  result: Mw5PolicyResult,
  criticalChallengeArmed: boolean,
): Mw5TurnSurface {
  return {
    disposition: result.disposition,
    structuralChallengeCount: result.structuralChallengeCount,
    questionnaireSuppressed: result.questionnaireSuppressed,
    recommendationAllowed: result.recommendationAllowed,
    challengeGateApplicable: result.challengeGateApplicable,
    challengeSatisfied: result.challengeSatisfied,
    challengeEvidenceBeforeRecommendation:
      result.challengeEvidenceBeforeRecommendation,
    bypassAttempted: result.bypassAttempted,
    bypassBlocked: result.bypassBlocked,
    synthesizedHumanDecision: false,
    synthesizedGo: false,
    synthesizedConfirmation: false,
    disclosure: result.disclosure,
    reasonCodes: result.reasonCodes,
    challenges: result.challenges,
    criticalChallengeArmedHookOnly: criticalChallengeArmed,
  };
}

export function parseIssuedChallengeCount(text: string): number {
  const counted = text.match(/\[MW5 CHALLENGE count=(\d+)\]/g);
  if (counted && counted.length > 0) {
    let total = 0;
    for (const token of counted) {
      const n = token.match(/count=(\d+)/);
      if (n) total += Number(n[1]);
    }
    return total;
  }
  if (text.includes(MW5_CHALLENGE_MARKER)) return 1;
  return 0;
}

export function formatMw5AssistantText(result: Mw5PolicyResult): string {
  const anti =
    "AUCUNE EXÉCUTION. Nora n'émet pas de HumanDecision, GO, Confirmation, décision Morris ou acte Pilote.";
  if (result.disposition === "CHALLENGE") {
    const lines = result.challenges.map((c, i) => `${i + 1}. ${c}`);
    return [
      `${MW5_CHALLENGE_MARKER} count=${result.challenges.length}`,
      "Challenge structural requis (plafond 3). Pas un questionnaire d'intake.",
      ...lines,
      result.disclosure,
      anti,
      "RECOMMANDATION non émise.",
    ].join(" ");
  }
  if (result.disposition === "CLARIFY") {
    const lines = result.challenges.map((c, i) => `${i + 1}. ${c}`);
    return [
      MW5_CLARIFY_MARKER,
      "[Clarification requise] Clarification structurante requise.",
      ...lines,
      result.disclosure,
      anti,
    ].join(" ");
  }
  if (result.disposition === "ESCALATE") {
    return [
      MW5_ESCALATE_MARKER,
      result.disclosure,
      "Chemin HumanDecision Pilote existant — pas de décision synthétisée.",
      anti,
    ].join(" ");
  }
  return result.disclosure;
}

/**
 * Fail-closed (CORR-MW5-02 / CORR-MW5-02B):
 * server-issued open challenge + explicit sufficient assessment only.
 * Client history alone never proves prior challenge.
 * missing / unknown / insufficient / any non-empty reply alone → false.
 */
export function isMw5ChallengeSatisfied(input: {
  openChallengePresent: boolean;
  challengeResponseAssessment?:
    | "sufficient"
    | "insufficient"
    | "unknown"
    | null;
}): boolean {
  if (!input.openChallengePresent) return false;
  return input.challengeResponseAssessment === "sufficient";
}

export type DeriveMw5FactsInput = {
  userContent: string;
  history?: readonly { role: string; content: string }[];
  intentClass: string;
  parseOk: boolean;
  recommendedProfile: string | null;
  criticalChallengeArmed: boolean;
  recommendationWouldEmit: boolean;
  /**
   * Authoritative product facts (CORR-MW5-01). Caller resolves from OA read-side.
   * Defaults false — never inferred from user markers on the product path.
   */
  truthCEstablishedForClaim?: boolean;
  consumedHumanDecisionWithoutNewContradiction?: boolean;
  /**
   * INTERNAL structured cognition assessment (CORR-MW5-02).
   * Not Truth C / Evidence / HumanDecision / authority.
   */
  challengeResponseAssessment?:
    | "sufficient"
    | "insufficient"
    | "unknown"
    | null;
  /**
   * Server-issued open MW5 challenge (CORR-MW5-02B provenance).
   * Never derived from client-authored history alone.
   */
  openChallengePresent?: boolean;
  /** Server-tracked prior structural challenge count (process-local). */
  priorStructuralChallengeCount?: number;
};

export function deriveMw5FactsFromF2Turn(input: DeriveMw5FactsInput): Mw5PolicyInput {
  const content = input.userContent;
  const cosmetic =
    content.includes(MW5_TEST_MARKERS.cosmetic) || COSMETIC_RE.test(content);
  const contextResolves = content.includes(MW5_TEST_MARKERS.contextResolved);
  const authority =
    content.includes(MW5_TEST_MARKERS.authority) ||
    (input.intentClass === "execution_request" &&
      content.includes(MW5_TEST_MARKERS.synthHd) === false &&
      content.includes("__F2_EXECUTION__") === false);
  const synthHd = content.includes(MW5_TEST_MARKERS.synthHd);
  const questionnaire = content.includes(MW5_TEST_MARKERS.questionnaire);

  let uncertaintyClass: Mw5UncertaintyClass = "none";
  if (synthHd || authority) uncertaintyClass = "authority_boundary";
  else if (cosmetic && input.intentClass !== "execution_request") {
    uncertaintyClass = "cosmetic";
  } else if (
    input.intentClass === "ambiguous" ||
    input.parseOk === false
  ) {
    uncertaintyClass = "structural_ambiguity";
  } else if (
    input.recommendationWouldEmit &&
    (input.criticalChallengeArmed || isCriticalProfile(input.recommendedProfile))
  ) {
    uncertaintyClass = "structural_premise";
  }

  const proposed = questionnaire
    ? [...INTAKE_FORM_PROBES]
    : uncertaintyClass === "structural_ambiguity"
      ? [...DEFAULT_STRUCTURAL_CLARIFICATIONS]
      : uncertaintyClass === "structural_premise" ||
          input.criticalChallengeArmed ||
          isCriticalProfile(input.recommendedProfile)
        ? [...DEFAULT_STRUCTURAL_CHALLENGES]
        : [];

  return {
    uncertaintyClass,
    contextResolvesUncertainty: contextResolves,
    truthCEstablishedForClaim: input.truthCEstablishedForClaim === true,
    consumedHumanDecisionWithoutNewContradiction:
      input.consumedHumanDecisionWithoutNewContradiction === true,
    priorStructuralChallengeCount: Math.max(
      0,
      input.priorStructuralChallengeCount ?? 0,
    ),
    challengeSatisfied: isMw5ChallengeSatisfied({
      openChallengePresent: input.openChallengePresent === true,
      challengeResponseAssessment: input.challengeResponseAssessment ?? null,
    }),
    criticalChallengeArmed: input.criticalChallengeArmed,
    recommendedProfile: input.recommendedProfile,
    recommendationWouldEmit: input.recommendationWouldEmit,
    unresolvedAuthorityBoundary: authority && !synthHd,
    synthesizeHumanActAttempt: synthHd,
    proposedStructuralChallenges: proposed,
  };
}

export function containsSynthesizedHumanAct(text: string): boolean {
  return (
    /\b(HumanDecision\s+(prise|accord[eé]e)|GO accord[eé]|Confirmation (Nora|automatique)|d[eé]cision Morris [eé]mise|acte Pilote synth[eé]tis[eé])\b/i.test(
      text,
    )
  );
}
