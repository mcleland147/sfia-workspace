/**
 * G-D4 / T-A4 / Authority Continuity — generic ExecutionContract PREPARE
 * without systematic HumanDecision for non-structural missions.
 *
 * M-HD-01 — structural / HD-required missions may resume PREPARE only after a
 * verified OA HumanDecision (sourceType generic_mission, accept-prepare).
 * decisionRefs then carries that verified decisionId only. PREPARE ≠ EXECUTE.
 *
 * Confirm/Authorize remain separate Pilote acts. Empty decisionRefs at
 * confirmed require MATERIALITY:NON_STRUCTURAL stamp + CURRENT revalidation
 * (T-A4 schema G-D4).
 *
 * Reuses BuildExecutionContract + ValidateExecutionContract + generalist surface
 * + resolveTrustedProductLaunchContext + resolveContractSourceGroundingForPrepare.
 * No task catalog, no parallel engine, no synthetic HumanDecision.
 */

import { createHash, randomBytes } from "node:crypto";
import {
  LOCAL_PILOTE_ACTOR,
  registerLocalAuthorityForExecutionClass,
} from "@/lib/oa/decision";
import type { ExecutionContract } from "@/lib/oa/execution-contract";
import {
  CONTRACT_SOURCE_GROUNDING_INPUT_KEY,
  assertContractSourceGroundingHonest,
  assessExecutionMaterialityOrUnknown,
  isCurrentFullRepositoryRead,
  type ExecutionMaterialityAssessment,
} from "@/lib/oa/execution-contract";
import { classifyStudioProductProtectedPath } from "@/lib/oa/sandboxContract";
import {
  PRODUCT_CANONICAL_EXECUTION_ACTION,
  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
  PRODUCT_CANONICAL_EXECUTION_SCOPE,
  PRODUCT_CANONICAL_EXECUTION_TARGET,
} from "./w3aProductExecutionSemantics";
import type { IntentAnalysisDto, PilotDecisionCandidate } from "../f2/types";
import type { RuntimeOaStack } from "@/lib/vertical-slice-runtime";
import { resolveAuthoritativeProductMateriality } from "./resolveAuthoritativeProductMateriality";
import {
  resolveContractSourceGroundingForPrepare,
  type ContractSourceGroundingReader,
} from "./resolveContractSourceGrounding";
import {
  launchContextAsContractInputs,
  resolveTrustedProductLaunchContext,
} from "./resolveTrustedProductLaunchContext";
import {
  getPendingGenericPrepareOffer,
  rememberPendingGenericPrepareOffer,
  clearPendingGenericPrepareOffer,
  resolveProductPrepareOfferSessionKey,
  type PendingGenericPrepareMissionEffects,
  type PendingGenericPrepareOffer,
} from "./pendingGenericPrepareOfferStore";
import {
  validateExecutionIntentPayload,
  type ExecutionIntentPayload,
} from "../f2/executionIntentSchema";
import {
  isCapabilityWithinGenericPrepareEnvelope,
  resolveGenericPrepareCapabilityEnvelope,
  type GenericPrepareCapabilityResolution,
} from "./genericPrepareCapabilityEnvelope";
import {
  mapReversibilityExpectationToOa,
} from "./genericMissionSubject";
import {
  verifyGenericMissionHumanDecisionForContract,
  verifyGenericMissionHumanDecisionForPrepare,
} from "./verifyGenericMissionHumanDecisionForPrepare";
import {
  resolveGenericPrepareDocumentaryTarget,
} from "./resolveGenericPrepareDocumentaryTarget";

export {
  isCapabilityWithinGenericPrepareEnvelope,
  resolveGenericPrepareCapabilityEnvelope,
};
export type { GenericPrepareCapabilityResolution };

export type GenericMissionPrepareReadiness = {
  readonly ready: boolean;
  readonly structuralBlocked: boolean;
  /** Blocking gaps only — never a questionnaire. */
  readonly missingFields: readonly string[];
};

type PrepareSpeechAct = {
  readonly kind: "refuse" | "authorize";
  readonly index: number;
};

const PREPARE_REFUSAL_PATTERNS: readonly RegExp[] = [
  /\b(ne|n[''])\s*(me\s+)?(prépare|prepare|préparer|preparer)\s+(surtout\s+)?pas\b[\s\S]{0,80}\b(contrat|executioncontract|execution contract|mission)\b/giu,
  /\b(ne|n[''])\s*(me\s+)?(prépare|prepare|préparer|preparer)\s+rien\b[\s\S]{0,60}\b(cursor|contrat|mission|exécution|execution)\b/giu,
  /\b(refuse|refus\w*)\b[\s\S]{0,60}\b(pr[ée]par\w*|cr[ée]er?|cr[ée]e)\b[\s\S]{0,50}\b(contrat|executioncontract|execution contract|mission)\b/giu,
  /\b(ne\s+)?(cr[ée]e|creer|créer|crée)\s+(pas|aucun|aucune)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/giu,
  /\bsans\s+(cr[ée]er?|créer|crée)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/giu,
  /\b(pas|sans|aucune?|aucun)\s+(de\s+|d[''])?(contrat(\s+d['']exéc?cution)?|execution\s*contract)\b/giu,
  /\bsans\s+(préparer|preparer|prepare)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/giu,
  /\b(ne\s+)?(veux|veut|souhait\w*|lance|lancer)\s+pas\b[\s\S]{0,60}\b(contrat|mission(\s+(technique|d['']exécution|cursor))?|cursor)\b/giu,
  /\b(analyse|cadrage|proposition)\s+seulement\b[\s\S]{0,80}\bsans\b[\s\S]{0,60}\b(contrat|mission|exécution|execution|cursor)\b/giu,
  /\bsans\s+(lancer|préparer|preparer|prepare)\b[\s\S]{0,40}\b(mission|contrat|cursor|exécution|execution)\b/giu,
  /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,80}\bpas\s+(de\s+|un\s+|une\s+)?(contrat|executioncontract|execution contract)\b/giu,
  /\bmais\s+(ne\s+)?(prépare|prepare|crée|creer|créer)\b[\s\S]{0,40}\b(pas|aucun|aucune)\b[\s\S]{0,40}\b(contrat|mission)\b/giu,
  /\b(finalement|non)\s*[,:]?\s*(ne\s+)?(le\s+)?(prépare|prepare|préparer|preparer)\s+pas\b/giu,
];

/** Positive PREPARE authorize acts (not EXECUTE). Temporal last-act wins vs refuse. */
const PREPARE_AUTHORIZE_PATTERNS: readonly RegExp[] = [
  /\b(maintenant|désormais|cette\s+fois|finalement|plutôt)\b[\s\S]{0,60}\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,50}\b(contrat|executioncontract|execution contract|mission)\b/giu,
  /\b(ok|oui|vas[- ]y|go|d['']accord)\b[\s\S]{0,40}\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract|mission)\b/giu,
  /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(le\s+|un\s+|une\s+)?(contrat(\s+d['']exéc?cution)?|execution\s*contract)\b/giu,
];

/**
 * Remove citations, code, and reported/example frames so quoted PREPARE
 * commands are not treated as current Pilote consent.
 * Deterministic span masking — not a general French NLP parser.
 */
export function stripNonAuthoritativePrepareSpans(text: string): string {
  let t = text;
  // Fenced / inline code
  t = t.replace(/```[\s\S]*?```/g, " ");
  t = t.replace(/`[^`]*`/g, " ");
  // Explicit citation delimiters only — never ASCII/typographic apostrophes
  // used in French (d'exécution, l'analyse), which would erase refuse/authorize acts.
  t = t.replace(/«[^»]*»/g, " ");
  t = t.replace(/"[^"]*"/g, " ");
  t = t.replace(/“[^”]*”/g, " ");
  t = t.replace(/‘[^’]*’/g, " ");
  // Reported / documentary / pedagogical frames introducing a command.
  t = t.replace(
    /\b(voici une phrase à analyser|phrase à analyser|que signifie(?:t|-elle| cette)?|explique(?:r)? (?:ce qu['']elle|cette|la)|dans (?:notre |la )?documentation|on trouve\s*:|exemple\s*:|par exemple\s*:|nora m['']a proposé(?: de)?|tu (?:m['']as|as) (?:dit|proposé)(?: de)?|elle a (?:dit|proposé)(?: de)?|il a (?:dit|proposé)(?: de)?)\b[\s\S]{0,160}/giu,
    " ",
  );
  return t.replace(/\s+/g, " ").trim();
}

/**
 * True when the utterance is primarily analysis / discussion of a PREPARE
 * phrase rather than a current instruction to prepare.
 */
export function isPrepareMetaAnalysisOrCitationFrame(text: string): boolean {
  const raw = text.trim();
  if (!raw) return false;
  const hasMeta =
    /\b(phrase à analyser|que signifie|explique(?:r)? (?:ce qu['']elle|cette)|dans (?:notre |la )?documentation|on trouve\s*:|exemple\s*:|comprendre pourquoi|pour l['']instant[\s\S]{0,80}(seulement|analyse)|je voudrais comprendre)\b/iu.test(
      raw,
    );
  if (!hasMeta) return false;
  // After stripping citations, no remaining direct authorize → meta-only.
  const cleaned = stripNonAuthoritativePrepareSpans(raw).toLowerCase();
  const acts = collectPrepareSpeechActsOn(cleaned);
  return !acts.some((a) => a.kind === "authorize");
}

function collectPrepareSpeechActsOn(text: string): PrepareSpeechAct[] {
  const acts: PrepareSpeechAct[] = [];
  for (const re of PREPARE_REFUSAL_PATTERNS) {
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      acts.push({ kind: "refuse", index: m.index });
      if (m.index === re.lastIndex) re.lastIndex += 1;
    }
  }
  for (const re of PREPARE_AUTHORIZE_PATTERNS) {
    re.lastIndex = 0;
    let m: RegExpExecArray | null;
    while ((m = re.exec(text)) !== null) {
      // Skip authorize matches that are actually refusals
      // ("prépare … pas … contrat", "surtout pas le contrat", …).
      const slice = text.slice(m.index, m.index + Math.max(m[0].length, 80));
      if (
        /\b(surtout\s+)?pas\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract|mission)\b/i.test(
          slice,
        ) ||
        /\brien\b[\s\S]{0,40}\b(contrat|cursor|mission)\b/i.test(slice)
      ) {
        continue;
      }
      acts.push({ kind: "authorize", index: m.index });
      if (m.index === re.lastIndex) re.lastIndex += 1;
    }
  }
  acts.sort((a, b) => a.index - b.index);
  return acts;
}

function collectPrepareSpeechActs(text: string): PrepareSpeechAct[] {
  // Scan authoritative spans only (citations / code / reported frames removed).
  return collectPrepareSpeechActsOn(stripNonAuthoritativePrepareSpans(text));
}

/**
 * Last explicit PREPARE speech-act in the utterance (refuse | authorize).
 * Chronology: later act wins. Citations do not count. Ambiguous → null.
 */
export function resolveLastExplicitPrepareSpeechAct(
  text: string,
): PrepareSpeechAct["kind"] | null {
  const t = text.trim().toLowerCase();
  if (!t) return null;
  const acts = collectPrepareSpeechActs(t);
  if (acts.length === 0) return null;
  return acts[acts.length - 1]!.kind;
}

/**
 * Explicit Pilote refusal of ExecutionContract PREPARE (TEST-15 / LUMEN).
 * Fail-closed at Product admission — cognition may solicit, but refusal
 * is never an authorization to PREPARE.
 *
 * Temporal rule: the **last** explicit refuse/authorize act in the message
 * is the current intention. Earlier "maintenant prépare" does not neutralize
 * a later "ne prépare pas".
 */
export function hasExplicitPrepareContractRefusal(text: string): boolean {
  const t = text.trim().toLowerCase();
  if (!t) return false;
  const last = resolveLastExplicitPrepareSpeechAct(t);
  if (last === "authorize") return false;
  if (last === "refuse") return true;
  return false;
}

/**
 * Explicit Pilote prepare-contract lexical intent (FR natural language).
 * Actionable work alone MUST NOT systematically PREPARE an EC (Q16 / Q20).
 * Explicit refusal outranks any positive substring match (TEST-15).
 */
export function hasExplicitPrepareContractIntent(text: string): boolean {
  const raw = text.trim();
  if (!raw) return false;
  if (hasExplicitPrepareContractRefusal(raw)) return false;
  if (isPrepareMetaAnalysisOrCitationFrame(raw)) return false;
  // Last authoritative act must be authorize (citations already stripped).
  if (resolveLastExplicitPrepareSpeechAct(raw) !== "authorize") return false;
  const t = stripNonAuthoritativePrepareSpans(raw).toLowerCase();
  if (!t) return false;
  if (
    /\b(prépare|prepare|préparer|preparer)\b[\s\S]{0,40}\b(contrat|executioncontract|execution contract)\b/.test(
      t,
    )
  ) {
    return true;
  }
  if (
    /\b(contrat d['']exécution|execution contract)\b[\s\S]{0,40}\b(prépare|prepare|préparer)\b/.test(
      t,
    )
  ) {
    return true;
  }
  if (
    /\b(ok|oui|vas[- ]y|go)\b[\s\S]{0,30}\b(prépare|prepare)\b[\s\S]{0,40}\b(contrat|mission)\b/.test(
      t,
    )
  ) {
    return true;
  }
  return false;
}

/**
 * Lexical accept of a CURRENT prepare recommendation only.
 * Never an execution GO. Never authoritative alone — requires pending offer.
 *
 * Slice D R1 — PilotDecisionCandidate (model INTENT CANDIDATE) is NEVER
 * sufficient admission evidence. Parameter retained for call-site stability
 * and is intentionally ignored for the GO decision.
 */
export function isChatFirstPrepareAcceptGo(input: {
  readonly text: string;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
}): boolean {
  void input.pilotDecisionCandidate;
  if (hasExplicitPrepareContractRefusal(input.text)) return false;
  const t = input.text.trim().toLowerCase();
  if (!t) return false;
  // Strip DET harness markers — never treat model DTO as accept (R1).
  const cleaned = t
    .replace(/\b__[a-z0-9_]+__\b/gi, " ")
    .replace(/\s+/g, " ")
    .trim();
  // Short acceptives — only meaningful when a CURRENT prepare offer exists.
  if (
    /^(ok|oui|vas[- ]y|vasy|go|d['']accord|ok vas[- ]y|ok,?\s*vas[- ]y)[\s.!]*$/i.test(
      cleaned,
    )
  ) {
    return true;
  }
  if (
    /\b(ok|oui|vas[- ]y|go|d['']accord)\b[\s\S]{0,40}\b(pr[ée]pare|cursor|contrat|mission)\b/.test(
      cleaned,
    )
  ) {
    return true;
  }
  return false;
}

/**
 * Pilote utterance references a CURRENT prepare proposal/offer (not a new
 * independent mission). Narrow — not a new NLP family; binds R2 subject.
 */
export function referencesCurrentPrepareOffer(text: string): boolean {
  // Narrow — "pour cette mission" alone is often an independent PREPARE target,
  // not an accept of a CURRENT offer (lumenCog / T10).
  return /\b(cette\s+proposition|cette\s+offre|cette\s+recommandation|que\s+tu\s+(viens\s+de\s+)?propos|le\s+contrat\s+(d['']exécution\s+)?que\s+tu|pour\s+cette\s+(proposition|offre|recommandation))\b/iu.test(
    text,
  );
}

/**
 * Server-side: bind Pilot GO to a unique CURRENT prepare offer.
 * Ambiguous concurrent governed subjects → clarification (caller checks).
 * No offer / historical only → no invented prepare.
 *
 * Contractual priority (R2):
 * 1. Refuse / citation / hedge
 * 2. Accept bound to CURRENT offer (incl. prepare+offer reference)
 * 3. Independent explicit prepare (no offer reference)
 * 4. no_go
 */
export function resolveChatFirstGenericPrepareGo(input: {
  readonly projectId: string;
  /** null = S8 project-context (no active cycle). Matches only a null-cycle offer. */
  readonly cycleInstanceId: string | null;
  readonly text: string;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
}):
  | { readonly kind: "prepare"; readonly offerFingerprint: string }
  | { readonly kind: "explicit_lexical_prepare" }
  | { readonly kind: "no_go"; readonly reason: string } {
  // TEST-15 / LUMEN — explicit refusal is Product-side absence of consent.
  if (hasExplicitPrepareContractRefusal(input.text)) {
    return { kind: "no_go", reason: "explicit_prepare_refusal" };
  }
  if (isPrepareMetaAnalysisOrCitationFrame(input.text)) {
    return { kind: "no_go", reason: "prepare_citation_or_analysis_not_consent" };
  }
  // Slice D / S7 — suggestive hedges are not a current PREPARE instruction.
  if (
    /\b(on pourrait|nous pourrions|je pourrais|tu pourrais|peut[- ]être|éventuellement)\b[\s\S]{0,80}\b(prépare|prepare|préparer|preparer)\b/iu.test(
      input.text,
    )
  ) {
    return { kind: "no_go", reason: "ambiguous_or_hedged_prepare_intent" };
  }

  const sessionKey = resolveProductPrepareOfferSessionKey({
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });
  const offer = getPendingGenericPrepareOffer(input.projectId, sessionKey);
  const acceptLexical = isChatFirstPrepareAcceptGo({
    text: input.text,
    // R1 — candidate ignored; keep signature for callers.
    pilotDecisionCandidate: input.pilotDecisionCandidate,
  });
  const refsOffer = referencesCurrentPrepareOffer(input.text);
  const explicitPrepare = hasExplicitPrepareContractIntent(input.text);

  // Priority 2 — bind CURRENT offer when Pilote accept or prepare+offer ref.
  if (offer && (acceptLexical || (explicitPrepare && refsOffer))) {
    if (offer.sessionKey !== sessionKey) {
      return { kind: "no_go", reason: "prepare_offer_session_mismatch" };
    }
    if ((offer.cycleInstanceId ?? null) !== (input.cycleInstanceId ?? null)) {
      return { kind: "no_go", reason: "prepare_offer_cycle_mismatch" };
    }
    return { kind: "prepare", offerFingerprint: offer.offerFingerprint };
  }

  // Offer referenced but missing / inapplicable → no silent E-EXPLICIT downgrade.
  if (refsOffer && !offer) {
    return { kind: "no_go", reason: "no_current_prepare_offer" };
  }
  if (refsOffer && offer) {
    // Accept/explicit+ref already handled; remaining = ambiguous reference.
    if ((offer.cycleInstanceId ?? null) !== (input.cycleInstanceId ?? null)) {
      return { kind: "no_go", reason: "prepare_offer_cycle_mismatch" };
    }
    if (offer.sessionKey !== sessionKey) {
      return { kind: "no_go", reason: "prepare_offer_session_mismatch" };
    }
  }

  // Priority 3 — independent direct PREPARE (no CURRENT-offer subject binding).
  if (explicitPrepare && !refsOffer) {
    return { kind: "explicit_lexical_prepare" };
  }

  if (acceptLexical && !offer) {
    return { kind: "no_go", reason: "no_current_prepare_offer" };
  }

  return { kind: "no_go", reason: "no_prepare_accept_signal" };
}

/**
 * Option B / Slice D — positive Product admission evidence for PREPARE.
 * Nora tool / model DTO / absence of refusal are NEVER sufficient alone.
 *
 * E-OFFER-ACCEPT — Pilote accept bound to unique CURRENT offer.
 * E-EXPLICIT-PREPARE — narrow direct prepare speech-act (heuristic, fail-closed).
 * E-UI-PREPARE — FUTURE / not implemented.
 */
export type PositivePrepareAdmissionEvidence =
  | {
      readonly kind: "e_offer_accept";
      readonly offerFingerprint: string;
      readonly code: "E_OFFER_ACCEPT";
    }
  | {
      readonly kind: "e_explicit_prepare";
      readonly code: "E_EXPLICIT_PREPARE";
    }
  | {
      readonly kind: "no_go";
      readonly code: string;
      readonly reason: string;
    };

export function resolvePositivePrepareAdmissionEvidence(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly text: string;
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
  /** When set (F2 offer-accept path), must still match CURRENT offer. */
  readonly expectedOfferFingerprint?: string | null;
}): PositivePrepareAdmissionEvidence {
  const text = (input.text ?? "").trim();
  if (!text) {
    return {
      kind: "no_go",
      code: "POSITIVE_PREPARE_ADMISSION_REQUIRED",
      reason: "missing_pilot_utterance",
    };
  }
  const go = resolveChatFirstGenericPrepareGo({
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    text,
    pilotDecisionCandidate: input.pilotDecisionCandidate,
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });
  const expected = input.expectedOfferFingerprint?.trim() || null;
  // T12 / R2 — expected fingerprint forces offer binding; E-EXPLICIT cannot bypass.
  if (expected && go.kind === "explicit_lexical_prepare") {
    return {
      kind: "no_go",
      code: "EXPECTED_OFFER_BINDING_REQUIRED",
      reason: "expected_fingerprint_blocks_explicit_bypass",
    };
  }
  if (go.kind === "no_go") {
    const code =
      go.reason === "explicit_prepare_refusal"
        ? "EXPLICIT_PREPARE_REFUSAL"
        : go.reason === "prepare_citation_or_analysis_not_consent"
          ? "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT"
          : go.reason === "no_current_prepare_offer"
            ? "NO_CURRENT_PREPARE_OFFER"
            : go.reason === "prepare_offer_session_mismatch"
              ? "PREPARE_OFFER_SESSION_MISMATCH"
              : go.reason === "prepare_offer_cycle_mismatch"
                ? "PREPARE_OFFER_CYCLE_MISMATCH"
                : go.reason === "ambiguous_or_hedged_prepare_intent"
                  ? "AMBIGUOUS_OR_HEDGED_PREPARE_INTENT"
                  : go.reason === "no_prepare_accept_signal"
                    ? "POSITIVE_PREPARE_ADMISSION_REQUIRED"
                    : "POSITIVE_PREPARE_ADMISSION_REQUIRED";
    return { kind: "no_go", code, reason: go.reason };
  }
  if (go.kind === "explicit_lexical_prepare") {
    return { kind: "e_explicit_prepare", code: "E_EXPLICIT_PREPARE" };
  }
  if (expected && expected !== go.offerFingerprint) {
    return {
      kind: "no_go",
      code: "PREPARE_OFFER_FINGERPRINT_MISMATCH",
      reason: "expected_offer_fingerprint_mismatch",
    };
  }
  // Re-read CURRENT offer — refuse if consumed / restarted / swapped.
  const live = getCurrentGenericPrepareOffer(input.projectId, {
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });
  if (!live || live.offerFingerprint !== go.offerFingerprint) {
    return {
      kind: "no_go",
      code: "PREPARE_OFFER_STALE_OR_MISMATCH",
      reason: "offer_stale_or_missing_at_admission",
    };
  }
  if ((live.cycleInstanceId ?? null) !== (input.cycleInstanceId ?? null)) {
    return {
      kind: "no_go",
      code: "PREPARE_OFFER_CYCLE_MISMATCH",
      reason: "prepare_offer_cycle_mismatch",
    };
  }
  return {
    kind: "e_offer_accept",
    offerFingerprint: go.offerFingerprint,
    code: "E_OFFER_ACCEPT",
  };
}

export function assessGenericMissionPrepareReadiness(
  analysis: IntentAnalysisDto,
): GenericMissionPrepareReadiness {
  const signals = analysis.signals;
  const structuralBlocked = Boolean(
    signals?.structuralChange ||
      signals?.securityImpact ||
      signals?.architectureImpact ||
      signals?.dataImpact ||
      signals?.irreversible ||
      analysis.contradictionCandidate?.conflictPresent,
  );

  const objective = (analysis.objective ?? analysis.rephrasedRequest ?? "").trim();
  const expectedOutcome = (analysis.expectedOutcome ?? "").trim();
  const scope = (analysis.scope ?? "").trim();
  const missingFields: string[] = [];
  if (!objective) missingFields.push("objectif");
  if (!expectedOutcome && !scope) {
    missingFields.push("résultat attendu ou périmètre");
  }

  // D-P6-SHE-01 — structural signals no longer block PREPARE readiness.
  // HD / authority remain required before launch (Execute), not before an
  // inspectable proposal. Missing descriptive fields still block PREPARE.
  return {
    ready: missingFields.length === 0,
    structuralBlocked,
    missingFields,
  };
}

function collectProtectedPathHits(analysis: IntentAnalysisDto): string[] {
  const candidates = [
    ...(analysis.executionIntent?.scopeIn ?? []),
    ...(analysis.scope ? [analysis.scope] : []),
  ];
  const hits: string[] = [];
  for (const raw of candidates) {
    const path = raw.trim();
    if (!path || path.includes(" ")) continue;
    const hit = classifyStudioProductProtectedPath(path);
    if (hit) hits.push(path);
  }
  return hits;
}

function missionImpliesRepositoryWork(analysis: IntentAnalysisDto): boolean {
  const scopeIn = analysis.executionIntent?.scopeIn ?? [];
  if (scopeIn.some((p) => typeof p === "string" && p.trim().length > 0)) {
    return true;
  }
  const scope = (analysis.scope ?? "").trim();
  if (scope && !scope.includes(" ") && scope.includes("/")) return true;
  if (scope && /\.(ts|tsx|js|md|json|py|go|rs)\b/i.test(scope)) return true;
  return false;
}

/**
 * EP-S2-08-PROOF-01 Option 1 — preserve an already-declared mutation claim as an
 * inspectable EC input. Does NOT invent "write", does NOT authorize execution,
 * and does NOT add EFFECT_CLASS:local-write. Bounded non-mutating remains "none".
 * Absence stays null (fail-closed for Delivery WHAT at W3-C).
 */
function preserveDeclaredRepositoryMutation(input: {
  readonly boundedNonMutating: boolean;
  readonly analysisDeclared: unknown;
}): "none" | "read" | "write" | "unknown" | null {
  if (input.boundedNonMutating) return "none";
  const declared = input.analysisDeclared;
  if (
    declared === "none" ||
    declared === "read" ||
    declared === "write" ||
    declared === "unknown"
  ) {
    return declared;
  }
  return null;
}

/**
 * @deprecated Prefer resolveAuthoritativeProductMateriality — sync helper kept
 * for unit oracles that only have analysis (forces UNKNOWN without Product).
 */
export function assessMaterialityForGenericPrepare(
  analysis: IntentAnalysisDto,
): ExecutionMaterialityAssessment {
  // Without live Product context, never claim NON_STRUCTURAL (Q02).
  const protectedPathHits = collectProtectedPathHits(analysis);
  return assessExecutionMaterialityOrUnknown({
    productContextSufficient: false,
    facts: {
      modelSignals: analysis.signals
        ? {
            structuralChange: analysis.signals.structuralChange,
            securityImpact: analysis.signals.securityImpact,
            architectureImpact: analysis.signals.architectureImpact,
            dataImpact: analysis.signals.dataImpact,
            irreversible: analysis.signals.irreversible,
          }
        : null,
      contradictionConflictPresent: Boolean(
        analysis.contradictionCandidate?.conflictPresent,
      ),
      protectedPathHits,
      currentContradictionUnresolved: Boolean(
        analysis.contradictionCandidate?.conflictPresent,
      ),
    },
  });
}

export type PrepareGenericExecutionContractDraftInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  readonly cycleInstanceId?: string | null;
  readonly analysis: IntentAnalysisDto;
  /**
   * M-HD-01 — durable OA HumanDecision id for structural resume.
   * Verified before decisionRefs is populated. Never fabricated.
   */
  readonly decisionId?: string | null;
  /** When true, bypass local authority env gate (DET tests). */
  readonly forceLocalAuthority?: boolean;
  /**
   * When true, Validate after Build (Product inspectable path).
   * Default true for G-D4 continuity. Tests may set false to assert draft-only.
   */
  readonly validateAfterBuild?: boolean;
  /** DET only — explicit server pin; never inferred from VITEST. */
  readonly pinnedBaseHeadSha?: string | null;
  readonly managedRepoRootBase?: string | null;
  readonly sourceGroundingReader?: ContractSourceGroundingReader | null;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
};

export type PrepareGenericExecutionContractDraftResult =
  | {
      readonly ok: true;
      readonly contract: ExecutionContract;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
      readonly materiality: ExecutionMaterialityAssessment;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
    };

function stableMissionKey(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scope: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly materiality: string;
  /** M-HD-01 — bind EC identity to verified HD when present. */
  readonly decisionId?: string | null;
  readonly presentationDigest?: string | null;
}): string {
  const raw = [
    input.projectId,
    input.cycleInstanceId ?? "",
    input.objective,
    input.expectedOutcome,
    input.scope,
    input.scopeIn.join("|"),
    input.scopeOut.join("|"),
    input.materiality,
    input.decisionId?.trim() || "",
    input.presentationDigest?.trim() || "",
  ].join("\n");
  return createHash("sha256").update(raw).digest("hex").slice(0, 24);
}

export function extractMissionEffectsFromAnalysis(
  analysis: IntentAnalysisDto,
): PendingGenericPrepareMissionEffects {
  const rawEi = analysis.executionIntent ?? null;
  const validated = rawEi ? validateExecutionIntentPayload(rawEi) : null;
  const ei: ExecutionIntentPayload | null =
    validated && validated.ok ? validated.payload : null;
  const rev = ei?.reversibilityExpectation ?? null;
  return {
    intentKind: ei?.intentKind?.trim() || null,
    artifactType: ei?.artifactType?.trim() || null,
    proposedTargetPath: ei?.targetPath?.trim() || null,
    proposedArtifactFileName: ei?.artifactFileName?.trim() || null,
    proposedTargetRepositoryRef: ei?.targetRepositoryRef?.trim() || null,
    artifactBrief: ei?.artifactBrief?.trim() || null,
    contentRequirements: [...(ei?.contentRequirements ?? [])],
    expectedOutputs: [...(ei?.expectedOutputs ?? [])],
    proposedRequiredCapabilities: [...(ei?.requiredCapabilities ?? [])],
    validationExpectations: [...(ei?.validationExpectations ?? [])],
    evidenceRequirements: [...(ei?.evidenceRequirements ?? [])],
    requestedOperation:
      ei?.requestedOperation?.trim() ||
      analysis.requestedOperation?.trim() ||
      null,
    reversibilityExpectation:
      rev === "reversible" || rev === "irreversible" || rev === "unknown"
        ? rev
        : null,
    exitRequirementKinds: [...(ei?.exitRequirementKinds ?? [])],
  };
}

function offerFingerprintFor(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly objective: string;
  readonly expectedOutcome: string;
  readonly scope: string;
  readonly scopeIn: readonly string[];
  readonly scopeOut: readonly string[];
  readonly missionEffects: PendingGenericPrepareMissionEffects;
}): string {
  const e = input.missionEffects;
  return createHash("sha256")
    .update(
      [
        input.projectId,
        input.cycleInstanceId ?? "",
        input.objective,
        input.expectedOutcome,
        input.scope,
        input.scopeIn.join("|"),
        input.scopeOut.join("|"),
        e.intentKind ?? "",
        e.artifactType ?? "",
        e.proposedTargetPath ?? "",
        e.proposedArtifactFileName ?? "",
        e.proposedRequiredCapabilities.join("|"),
        e.expectedOutputs.join("|"),
        e.requestedOperation ?? "",
        e.artifactBrief ?? "",
        e.contentRequirements.join("|"),
      ].join("\n"),
    )
    .digest("hex")
    .slice(0, 24);
}

/** Remember CURRENT prepare recommendation (Nora offered; Pilot has not GO'd). */
export function rememberGenericPrepareRecommendation(input: {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly analysis: IntentAnalysisDto;
  readonly offeredAtIso: string;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
}): string {
  const sessionKey = resolveProductPrepareOfferSessionKey({
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });
  const objective = (
    input.analysis.objective ??
    input.analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (input.analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (input.analysis.scope ?? expectedOutcome).trim();
  const scopeIn = input.analysis.executionIntent?.scopeIn ?? [];
  const scopeOut = input.analysis.executionIntent?.scopeOut ?? [];
  const missionEffects = extractMissionEffectsFromAnalysis(input.analysis);
  const fp = offerFingerprintFor({
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    objective,
    expectedOutcome,
    scope: scopeNarrative,
    scopeIn,
    scopeOut,
    missionEffects,
  });
  rememberPendingGenericPrepareOffer({
    projectId: input.projectId,
    sessionKey,
    cycleInstanceId: input.cycleInstanceId,
    missionKey: fp,
    objective,
    expectedOutcome,
    scopeNarrative,
    scopeIn,
    scopeOut,
    outOfScope: input.analysis.outOfScope ?? [],
    stopConditions: input.analysis.stopConditions ?? [],
    risks: input.analysis.risks ?? [],
    reservations: input.analysis.reservations ?? [],
    signalStructuralChange: input.analysis.signals?.structuralChange === true,
    signalSecurityImpact: input.analysis.signals?.securityImpact === true,
    signalArchitectureImpact:
      input.analysis.signals?.architectureImpact === true,
    signalDataImpact: input.analysis.signals?.dataImpact === true,
    signalIrreversible: input.analysis.signals?.irreversible === true,
    contradictionConflictPresent: Boolean(
      input.analysis.contradictionCandidate?.conflictPresent,
    ),
    offeredAtIso: input.offeredAtIso,
    offerFingerprint: fp,
    missionEffects,
  });
  return fp;
}

/** Rebuild IntentAnalysis for PREPARE from the CURRENT pending offer (accept GO). */
export function analysisFromPendingGenericPrepareOffer(
  offer: PendingGenericPrepareOffer,
): IntentAnalysisDto {
  const effects = offer.missionEffects;
  const intentKind = effects?.intentKind?.trim() || "other";
  const executionIntent: NonNullable<IntentAnalysisDto["executionIntent"]> = {
    intentKind,
    artifactType: effects?.artifactType ?? null,
    // Candidate only — Product pathRoot / workspace still authoritative at PREPARE.
    targetPath: effects?.proposedTargetPath ?? null,
    artifactFileName: effects?.proposedArtifactFileName ?? null,
    targetRepositoryRef: effects?.proposedTargetRepositoryRef ?? null,
    scopeIn: [...offer.scopeIn],
    scopeOut: [...offer.scopeOut],
    expectedOutputs: [...(effects?.expectedOutputs ?? [])],
    requiredCapabilities: [...(effects?.proposedRequiredCapabilities ?? [])],
    validationExpectations: [...(effects?.validationExpectations ?? [])],
    evidenceRequirements: [...(effects?.evidenceRequirements ?? [])],
    requestedOperation: effects?.requestedOperation ?? null,
    reversibilityExpectation: effects?.reversibilityExpectation ?? null,
    artifactBrief: effects?.artifactBrief ?? null,
    contentRequirements: [...(effects?.contentRequirements ?? [])],
    exitRequirementKinds: [...(effects?.exitRequirementKinds ?? [])],
  };
  return {
    parseOk: true,
    intentClass: "actionable",
    candidateCycleTypeId: null,
    signals: {
      structuralChange: offer.signalStructuralChange,
      securityImpact: offer.signalSecurityImpact,
      architectureImpact: offer.signalArchitectureImpact,
      dataImpact: offer.signalDataImpact,
      irreversible: offer.signalIrreversible,
      lowRiskBounded: !offer.signalStructuralChange,
    },
    cognitiveWorkload: null,
    contradictionCandidate: offer.contradictionConflictPresent
      ? { conflictPresent: true, claimedEvidenceIds: [] }
      : null,
    challengeResponseAssessment: "sufficient",
    objective: offer.objective,
    scope: offer.scopeNarrative,
    rephrasedRequest: offer.objective,
    outOfScope: [...offer.outOfScope],
    risks: [...offer.risks],
    reservations: [...offer.reservations],
    stopConditions: [...offer.stopConditions],
    activatedBlocks: [],
    expectedOutcome: offer.expectedOutcome,
    criticalJustification: null,
    requestedOperation: effects?.requestedOperation ?? null,
    executionIntent,
  };
}

export function getCurrentGenericPrepareOffer(
  projectId: string,
  sessionKeyOrOpts?:
    | string
    | { readonly sessionKey?: string | null; readonly sessionDbPath?: string | null },
): PendingGenericPrepareOffer | null {
  const sessionKey =
    typeof sessionKeyOrOpts === "string"
      ? sessionKeyOrOpts
      : resolveProductPrepareOfferSessionKey({
          sessionKey: sessionKeyOrOpts?.sessionKey,
          sessionDbPath: sessionKeyOrOpts?.sessionDbPath,
        });
  return getPendingGenericPrepareOffer(projectId, sessionKey);
}

/**
 * Build (+ optional Validate) an inspectable generalist ExecutionContract.
 * Empty decisionRefs when non-structural. Structural resume requires verified HD.
 * Never records HumanDecision. Never auto-EXECUTE.
 */
export async function prepareGenericExecutionContractDraft(
  input: PrepareGenericExecutionContractDraftInput,
): Promise<PrepareGenericExecutionContractDraftResult> {
  const readiness = assessGenericMissionPrepareReadiness(input.analysis);
  if (readiness.missingFields.length > 0) {
    return {
      ok: false,
      code: "MISSION_INSUFFICIENTLY_QUALIFIED",
      message: `Informations manquantes pour préparer le contrat : ${readiness.missingFields.join(", ")}.`,
    };
  }

  // MATERIALITY-BLOCK-01 — documentary missions without concrete WHERE reuse
  // Product artifact target routing (pathRoot + cycle segment) BEFORE materiality.
  const documentaryBind = await resolveGenericPrepareDocumentaryTarget({
    oa: input.oa,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
    analysis: input.analysis,
  });
  if (
    documentaryBind.kind === "needs_clarification" ||
    documentaryBind.kind === "blocked"
  ) {
    return {
      ok: false,
      code: documentaryBind.code,
      message: documentaryBind.message,
    };
  }
  const analysis = documentaryBind.analysis;
  const productDocumentaryTargetResolution =
    documentaryBind.documentaryTargetResolution;
  const resolvedAuthoritativeTargetPath =
    documentaryBind.kind === "resolved"
      ? documentaryBind.resolvedAuthoritativeTargetPath
      : documentaryBind.resolvedAuthoritativeTargetPath;

  const decisionId = input.decisionId?.trim() || null;
  let verifiedDecisionRefs: string[] = [];
  let verifiedPresentationDigest: string | null = null;
  let verifiedMissionSubjectId: string | null = null;
  let sealedHdEffects: {
    readonly requestedOperation: string | null;
    readonly reversibilityExpectation:
      | "reversible"
      | "irreversible"
      | "unknown"
      | null;
    readonly risks: readonly string[];
    readonly reservations: readonly string[];
    readonly intentKind: string | null;
    readonly artifactType: string | null;
    readonly expectedOutputs: readonly string[];
    readonly stopConditions: readonly string[];
    readonly repositoryBindingIdentity: string | null;
    readonly pathRoot: string | null;
    readonly impactSignals: {
      readonly structuralChange: boolean;
      readonly securityImpact: boolean;
      readonly architectureImpact: boolean;
      readonly dataImpact: boolean;
      readonly irreversible: boolean;
    };
  } | null = null;

  const proposedCapabilities =
    analysis.executionIntent?.requiredCapabilities ?? [];
  const capabilityResolution =
    resolveGenericPrepareCapabilityEnvelope(proposedCapabilities);
  if (!capabilityResolution.ok) {
    return {
      ok: false,
      code: capabilityResolution.code,
      message: `Capacités hors enveloppe généraliste Product — clarification ou gate requis : ${capabilityResolution.elevated.join(", ")}. Aucune HumanDecision artificielle ; aucune élévation silencieuse.`,
    };
  }

  const materialityResolution = await resolveAuthoritativeProductMateriality({
    oa: input.oa,
    projectId: input.projectId,
    analysis,
    cycleInstanceId: input.cycleInstanceId,
    isDocumentaryWriteMission:
      documentaryBind.kind === "resolved" ||
      productDocumentaryTargetResolution === "resolved_product",
  });
  const materiality = materialityResolution.assessment;
  const hdRequired =
    readiness.structuralBlocked || materiality.humanDecisionRequired;
  /**
   * D-P6-SHE-01 — STRUCTURAL / UNKNOWN may PREPARE an inspectable contract with
   * empty decisionRefs. HumanDecision is deferred to the explicit Execute
   * gesture (INV-SHE-PREPARE-NO-AUTHORITY / INV-SHE-STRUCTURAL-INSPECTABLE).
   * Optional pre-bound decisionId remains supported for resume paths.
   */
  let sheDeferredStructuralAuthority = false;

  if (hdRequired && decisionId) {
    const verified = await verifyGenericMissionHumanDecisionForPrepare({
      oa: input.oa,
      projectId: input.projectId,
      cycleInstanceId: input.cycleInstanceId?.trim() || null,
      decisionId,
      analysis,
    });
    if (!verified.ok) {
      return {
        ok: false,
        code: verified.code,
        message: verified.message,
      };
    }
    verifiedDecisionRefs = [verified.verified.decisionId];
    verifiedPresentationDigest = verified.verified.presentationDigest;
    verifiedMissionSubjectId = verified.verified.missionSubjectId;
    const sealedCtx =
      verified.verified.decision.decisionBasis?.genericMissionContext;
    if (!sealedCtx) {
      return {
        ok: false,
        code: "HD_BASIS_INVALID",
        message: "genericMissionContext absent après vérification HD.",
      };
    }
    // Authoritative accepted effects — stamp EC from sealed HD, not a parallel re-derivation.
    sealedHdEffects = {
      requestedOperation: sealedCtx.requestedOperation ?? null,
      reversibilityExpectation: sealedCtx.reversibilityExpectation ?? null,
      risks: [...sealedCtx.risks],
      reservations: [...sealedCtx.reservations],
      intentKind: sealedCtx.intentKind ?? null,
      artifactType: sealedCtx.artifactType ?? null,
      expectedOutputs: [...sealedCtx.expectedOutputs],
      stopConditions: [...sealedCtx.stopConditions],
      repositoryBindingIdentity: sealedCtx.repositoryBindingIdentity,
      pathRoot: sealedCtx.pathRoot,
      impactSignals: { ...sealedCtx.impactSignals },
    };
    // R-INSPECT-01 — sealed read_only / non-mutating intent cannot be silently
    // overridden by an analysis write declaration (no invented HD write approval).
    const analysisMutation = (
      analysis as { repositoryMutationDeclared?: unknown }
    ).repositoryMutationDeclared;
    if (
      sealedHdEffects.intentKind === "read_only" &&
      analysisMutation === "write"
    ) {
      return {
        ok: false,
        code: "HD_MUTATION_DECLARATION_CONFLICT",
        message:
          "HumanDecision scellée read_only contradictoire avec repositoryMutationDeclared=write — PREPARE refusé (fail-closed).",
      };
    }
  } else if (hdRequired) {
    sheDeferredStructuralAuthority = true;
    // decisionRefs stay []; honest MATERIALITY stamp remains on constraints.
  }
  // Non-structural / SHE-deferred: decisionRefs remain empty (no systematic HD at PREPARE).

  const services = input.oa.executionContractServices;
  if (!services?.buildExecutionContract) {
    return {
      ok: false,
      code: "EXECUTION_CONTRACT_SERVICES_UNAVAILABLE",
      message: "Services ExecutionContract indisponibles.",
    };
  }

  const objective = (
    analysis.objective ??
    analysis.rephrasedRequest ??
    ""
  ).trim();
  const expectedOutcome = (analysis.expectedOutcome ?? objective).trim();
  const scopeNarrative = (analysis.scope ?? expectedOutcome).trim();
  // Concrete WHERE after Product documentary bind (may include cycle workspace root).
  const scopeIn = analysis.executionIntent?.scopeIn ?? [];
  const outOfScope = analysis.outOfScope ?? [];
  const cycleInstanceId = input.cycleInstanceId?.trim() || undefined;
  // Nora proposals from the inbound analysis only — never promote Product-resolved
  // path as a Nora "proposal" (D-PC-09 / MATERIALITY-BLOCK-01).
  const noraMissionEffects = extractMissionEffectsFromAnalysis(input.analysis);
  const missionEffects =
    documentaryBind.kind === "resolved"
      ? {
          ...extractMissionEffectsFromAnalysis(analysis),
          proposedTargetPath: noraMissionEffects.proposedTargetPath,
          proposedArtifactFileName: noraMissionEffects.proposedArtifactFileName,
        }
      : extractMissionEffectsFromAnalysis(analysis);
  const proposedDocumentaryOutputCandidates = [
    ...noraMissionEffects.expectedOutputs,
    ...(noraMissionEffects.proposedTargetPath
      ? [noraMissionEffects.proposedTargetPath]
      : []),
    ...(noraMissionEffects.proposedArtifactFileName
      ? [noraMissionEffects.proposedArtifactFileName]
      : []),
  ].filter((v, i, arr) => v.trim().length > 0 && arr.indexOf(v) === i);
  const documentaryTargetResolution =
    productDocumentaryTargetResolution === "resolved_product"
      ? "resolved_product"
      : productDocumentaryTargetResolution === "unresolved_nora_candidate"
        ? "unresolved_nora_candidate"
        : proposedDocumentaryOutputCandidates.length > 0
          ? "unresolved_nora_candidate"
          : "not_applicable";
  // Contract expectedOutputs: Product-resolved path when available; else outcome text.
  // Never list unresolved Nora path candidates as authorized destinations.
  const contractExpectedOutputs = sealedHdEffects
    ? [...sealedHdEffects.expectedOutputs]
    : resolvedAuthoritativeTargetPath
      ? [resolvedAuthoritativeTargetPath]
      : [expectedOutcome];

  // D — source grounding / trusted launch when mission implies repository work
  // OR bounded pathless analysis (Cursor still needs Project binding — ≠ inventing
  // a documentary/Git mission target; scopeIn stays empty).
  const impliesGit = missionImpliesRepositoryWork(analysis);
  const needsLaunchContext =
    impliesGit || materialityResolution.facts.boundedNonMutatingAnalysis === true;
  let launchInputs: Record<string, unknown> = {};
  let sourcesToRead: string[] = [];
  let sourceGroundingPayload: unknown = null;

  if (needsLaunchContext) {
    const launch = await resolveTrustedProductLaunchContext({
      oa: input.oa,
      projectId: input.projectId,
      pinnedBaseHeadSha: input.pinnedBaseHeadSha,
      managedRepoRootBase: input.managedRepoRootBase,
    });
    if (!launch.ok) {
      return {
        ok: false,
        code: launch.code,
        message: launch.message,
      };
    }
    launchInputs = {
      ...launchContextAsContractInputs(launch.context),
      trustedLaunchContextPinnedAtPrepare: true,
      ...(materialityResolution.facts.boundedNonMutatingAnalysis
        ? {
            launchContextForBoundedAnalysisOnly: true,
            missionScopeInEmptyByDesign: true,
          }
        : {}),
    };
    // Declared READ sources only — mutation scopeIn is NOT a read claim
    // (search ≠ read). Empty declared → honesty NOT_APPLICABLE when no reader.
    const declaredReadSources: string[] = [];
    const sourceGrounding = await resolveContractSourceGroundingForPrepare({
      projectId: input.projectId,
      cycleInstanceId: cycleInstanceId ?? "",
      declaredSources: declaredReadSources,
      repositoryIdentity: launch.context.repositoryBindingIdentity,
      repositoryHeadSha: launch.context.baseHeadSha,
      reader: input.sourceGroundingReader ?? null,
    });
    const groundingHonest = assertContractSourceGroundingHonest(sourceGrounding);
    if (!groundingHonest.ok) {
      return {
        ok: false,
        code: groundingHonest.code,
        message: groundingHonest.message,
      };
    }
    sourceGroundingPayload = sourceGrounding;
    const groundedSourceRefs = sourceGrounding.readRefs
      .filter((ref) =>
        isCurrentFullRepositoryRead({
          ref,
          expectedRepositoryHeadSha: sourceGrounding.repositoryHeadSha,
          expectedCycleInstanceId: sourceGrounding.cycleInstanceId,
        }),
      )
      .map((ref) => ref.pathOrRef);
    sourcesToRead = [...new Set(groundedSourceRefs)];
    // Concrete inspectable WHERE: scopeIn and/or narrative scope required.
    const concreteScope =
      scopeIn.some((p) => typeof p === "string" && p.trim().length > 0) ||
      (scopeNarrative.trim().length > 0 &&
        (scopeNarrative.includes("/") || scopeNarrative.length >= 8));
    if (!concreteScope) {
      return {
        ok: false,
        code: "SOURCE_GROUNDING_INSUFFICIENT",
        message:
          "Mission dépôt sans périmètre concret vérifiable — préparation refusée (STOP honnête).",
      };
    }
  }

  const missionKey = stableMissionKey({
    projectId: input.projectId,
    cycleInstanceId: cycleInstanceId ?? null,
    objective,
    expectedOutcome,
    scope: scopeNarrative,
    scopeIn,
    scopeOut: outOfScope,
    materiality: materiality.materiality,
    decisionId: verifiedDecisionRefs[0] ?? null,
    presentationDigest: verifiedPresentationDigest,
  });
  const executionContractId = `xct:gen-prep:${missionKey}`;
  const idempotencyKey = `idem:gen-prep:${missionKey}`;
  const correlationId = `cor:gen-prep:${randomBytes(6).toString("hex")}`;

  const sealedOrAnalysisStops = sealedHdEffects
    ? [...sealedHdEffects.stopConditions]
    : [
        ...(analysis.stopConditions ?? []).filter((s) => s.trim().length > 0),
        "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
      ];
  const stopConditions = [
    ...sealedOrAnalysisStops,
    "AUTHORITY_DENIED",
    "CONTEXT_STALE",
    "NO_EXECUTE_WITHOUT_EXPLICIT_AUTHORIZE",
    "PROTECTED_PATH_GATES_REMAIN_APPLICABLE",
    ...(materialityResolution.facts.boundedNonMutatingAnalysis
      ? ["NO_REPOSITORY_MUTATION_FOR_BOUNDED_ANALYSIS"]
      : []),
  ];
  const stopSeen = new Set<string>();
  const mergedStops = stopConditions.filter((s) => {
    if (stopSeen.has(s)) return false;
    stopSeen.add(s);
    return true;
  });

  const sealedOrAnalysisRisks = sealedHdEffects
    ? [...sealedHdEffects.risks]
    : [...(analysis.risks ?? [])];
  const sealedOrAnalysisReservations = sealedHdEffects
    ? [...sealedHdEffects.reservations]
    : [...(analysis.reservations ?? [])];

  const boundedNonMutating =
    materialityResolution.facts.boundedNonMutatingAnalysis === true;
  const constraints = [
    "PRODUCT_GOVERNED",
    "NO_ATTEMPT_AT_PREPARE",
    verifiedDecisionRefs.length > 0
      ? "PREPARE_AFTER_VERIFIED_GENERIC_MISSION_HD"
      : "PREPARE_WITHOUT_SYSTEMATIC_HD",
    "CURSOR_DETERMINES_HOW",
    "GENERIC_MISSION_NO_TASK_CATALOG",
    materiality.constraintToken,
    ...(boundedNonMutating
      ? [
          "MISSION_EFFECT:NO_REPOSITORY_MUTATION_DECLARED",
          "NO_INVENTED_DOCUMENTARY_OR_GIT_TARGET",
        ]
      : []),
    ...outOfScope.map((s) => `OUT_OF_SCOPE:${s}`),
    ...sealedOrAnalysisRisks.map((s) => `RISK:${s}`),
    ...sealedOrAnalysisReservations.map((s) => `RESERVATION:${s}`),
  ];

  const issuedAt = input.oa.clock.nowIso();
  const requiredAuthority = "N2" as const;
  const authority = registerLocalAuthorityForExecutionClass({
    authorityResolver: input.oa.authorityResolver,
    scope: PRODUCT_CANONICAL_EXECUTION_SCOPE,
    issuedAt,
    requiredAuthority,
    evidenceId: `evd:gen-prep:${missionKey}`,
    forceEnable: input.forceLocalAuthority === true,
  });
  if (!authority.ok) {
    return {
      ok: false,
      code: authority.code,
      message: authority.message,
    };
  }

  const materialityFacts = {
    ...materialityResolution.facts,
    assessedMateriality: materiality.materiality,
    reasonCodes: [...materiality.reasonCodes],
  };
  const currentness = materialityResolution.facts.productCurrentness;
  // Authoritative EC↔HD effect stamps (M-HD-01 binding). When HD verified,
  // missionSubjectId + presentationDigest + sealed effects are required on the EC.
  const stampedRevExpectation =
    sealedHdEffects?.reversibilityExpectation ??
    missionEffects.reversibilityExpectation;
  const stampedRequestedOperation =
    sealedHdEffects?.requestedOperation ?? missionEffects.requestedOperation;
  const stampedIntentKind =
    sealedHdEffects?.intentKind ?? missionEffects.intentKind;
  const stampedArtifactType =
    sealedHdEffects?.artifactType ?? missionEffects.artifactType;
  const stampedRepoIdentity =
    sealedHdEffects?.repositoryBindingIdentity ??
    currentness?.repositoryIdentity ??
    null;
  const stampedPathRoot =
    sealedHdEffects?.pathRoot ?? currentness?.pathRoot ?? null;
  const oaReversibility = mapReversibilityExpectationToOa(stampedRevExpectation);

  const built = await services.buildExecutionContract.execute({
    executionContractId,
    projectId: input.projectId,
    cycleInstanceId,
    decisionRefs: [...verifiedDecisionRefs],
    action: PRODUCT_CANONICAL_EXECUTION_ACTION,
    target: PRODUCT_CANONICAL_EXECUTION_TARGET,
    scope: PRODUCT_CANONICAL_EXECUTION_SCOPE,
    inputs: {
      objective,
      expectedOutcome,
      missionScopeNarrative: scopeNarrative,
      scopeIn,
      scopeOut: outOfScope,
      sourcesToRead,
      cursorDeterminesHow: true,
      prepareWithoutSystematicHumanDecision: verifiedDecisionRefs.length === 0,
      verifiedGenericMissionHumanDecisionId: verifiedDecisionRefs[0] ?? null,
      sheDeferredStructuralAuthority,
      missionSubjectId: verifiedMissionSubjectId,
      presentationDigest: verifiedPresentationDigest,
      humanDecisionCreated: false,
      executionAttemptCreated: false,
      prepareStatus: "draft_inspectable",
      materialityFacts,
      boundedNonMutatingAnalysis: boundedNonMutating,
      repositoryMutationDeclared: preserveDeclaredRepositoryMutation({
        boundedNonMutating,
        analysisDeclared: (
          analysis as {
            repositoryMutationDeclared?: unknown;
          }
        ).repositoryMutationDeclared,
      }),
      // Intent fidelity — inspectable mission effects (Pass 02 / EC↔HD).
      intentKind: boundedNonMutating
        ? stampedIntentKind ?? "read_only"
        : stampedIntentKind,
      artifactType: stampedArtifactType,
      requestedOperation: stampedRequestedOperation,
      reversibilityExpectation: stampedRevExpectation,
      risks: sealedOrAnalysisRisks,
      reservations: sealedOrAnalysisReservations,
      repositoryBindingIdentity: stampedRepoIdentity,
      pathRoot: stampedPathRoot,
      // Historical accepted impact signals (not a live Nora re-qualification).
      impactSignals: sealedHdEffects?.impactSignals ??
        (analysis.signals
          ? {
              structuralChange: Boolean(analysis.signals.structuralChange),
              securityImpact: Boolean(analysis.signals.securityImpact),
              architectureImpact: Boolean(analysis.signals.architectureImpact),
              dataImpact: Boolean(analysis.signals.dataImpact),
              irreversible: Boolean(analysis.signals.irreversible),
            }
          : null),
      artifactBrief: missionEffects.artifactBrief,
      contentRequirements: [...missionEffects.contentRequirements],
      validationExpectations: [...missionEffects.validationExpectations],
      // D-PC-09 — Nora path/name candidates are NON-AUTHORITATIVE.
      proposedTargetPath: noraMissionEffects.proposedTargetPath,
      proposedArtifactFileName: noraMissionEffects.proposedArtifactFileName,
      proposedDocumentaryOutputCandidates,
      proposedTargetPathAuthoritative: false,
      documentaryTargetResolution,
      // Server-owned destination when Product routing resolved it (≠ Nora candidate).
      resolvedAuthoritativeTargetPath,
      ...(resolvedAuthoritativeTargetPath
        ? {
            targetPath: resolvedAuthoritativeTargetPath,
            artifactFileName:
              documentaryBind.kind === "resolved"
                ? documentaryBind.artifactFileName
                : missionEffects.proposedArtifactFileName,
          }
        : {}),
      proposedRequiredCapabilities: [
        ...capabilityResolution.proposedCapabilities,
      ],
      capabilityResolution: capabilityResolution.resolution,
      contractCapabilitySurface: PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
      ...launchInputs,
      ...(sourceGroundingPayload
        ? { [CONTRACT_SOURCE_GROUNDING_INPUT_KEY]: sourceGroundingPayload }
        : {}),
      protectedPathHitsAtPrepare: collectProtectedPathHits(analysis),
    },
    expectedOutputs: contractExpectedOutputs,
    requiredCapabilities: [...capabilityResolution.contractCapabilities],
    requiredAuthority,
    constraints,
    stopConditions: mergedStops,
    evidenceRequirements: [
      "evreq:generic-prepare-mission-evidence",
      ...missionEffects.evidenceRequirements,
    ],
    reversibility: oaReversibility,
    idempotencyKey,
    correlationId,
    status: "draft",
    actor: LOCAL_PILOTE_ACTOR,
    authorityEvidenceId: authority.evidenceId,
  });

  let contract;
  let reusedExisting = false;
  if (!built.ok) {
    // Idempotent resume: same missionKey / executionContractId already built.
    if (built.error.detailCode === "CONTRACT_ALREADY_EXISTS") {
      const existing = await services.getExecutionContract.execute({
        executionContractId,
      });
      const reusableStatuses = new Set([
        "draft",
        "validated",
        "confirmation_required",
        "confirmed",
        "authorized",
      ]);
      const existingRefs = [...(existing.ok ? existing.contract.decisionRefs ?? [] : [])].sort();
      const wantedRefs = [...verifiedDecisionRefs].sort();
      const existingCaps = [
        ...(existing.ok ? existing.contract.requiredCapabilities ?? [] : []),
      ];
      const wantedCaps = [...capabilityResolution.contractCapabilities];
      const existingInputs = (existing.ok ? existing.contract.inputs ?? {} : {}) as Record<
        string,
        unknown
      >;
      const sameRefs = JSON.stringify(existingRefs) === JSON.stringify(wantedRefs);
      const sameCaps = JSON.stringify(existingCaps) === JSON.stringify(wantedCaps);
      const sameObjective =
        String(existingInputs.objective ?? "").trim() === objective.trim();
      const sameScope =
        String(existingInputs.missionScopeNarrative ?? "").trim() ===
          scopeNarrative.trim() &&
        JSON.stringify(existingInputs.scopeIn ?? []) === JSON.stringify(scopeIn) &&
        JSON.stringify(existingInputs.scopeOut ?? []) === JSON.stringify(outOfScope);
      const sameMateriality = (existing.ok ? existing.contract.constraints ?? [] : []).includes(
        materiality.constraintToken,
      );
      const sameDigest =
        !verifiedPresentationDigest ||
        String(existingInputs.presentationDigest ?? "") ===
          verifiedPresentationDigest;
      const statusOk =
        existing.ok && reusableStatuses.has(existing.contract.status);
      const notSuperseded =
        existing.ok && existing.contract.status !== "superseded";
      if (
        existing.ok &&
        existing.contract.projectId === input.projectId &&
        sameRefs &&
        sameCaps &&
        sameObjective &&
        sameScope &&
        sameMateriality &&
        sameDigest &&
        statusOk &&
        notSuperseded
      ) {
        // When HD resume: re-verify decision still applicable before reuse.
        if (verifiedDecisionRefs.length > 0) {
          for (const ref of verifiedDecisionRefs) {
            const hd = await verifyGenericMissionHumanDecisionForContract({
              oa: input.oa,
              projectId: input.projectId,
              decisionId: ref,
              contract: existing.contract,
            });
            if (!hd.ok) {
              return {
                ok: false,
                code: "CONTRACT_STALE",
                message: `EC existant non réutilisable — HD courante invalide (${hd.code}).`,
              };
            }
          }
        }
        contract = existing.contract;
        reusedExisting = true;
      } else {
        return {
          ok: false,
          code: "CONTRACT_STALE",
          message:
            "EC existant non réutilisable (statut/scope/effets/decisionRefs/currentness divergents).",
        };
      }
    } else {
      return {
        ok: false,
        code: built.error.detailCode,
        message: built.error.message,
      };
    }
  } else {
    contract = built.contract;
  }

  const shouldValidate =
    input.validateAfterBuild !== false && !reusedExisting;
  if (shouldValidate && services.validateExecutionContract) {
    const validated = await services.validateExecutionContract.execute({
      executionContractId: contract.executionContractId,
      actor: LOCAL_PILOTE_ACTOR,
      authorityEvidenceId: authority.evidenceId,
    });
    if (!validated.ok) {
      return {
        ok: false,
        code: validated.error.detailCode,
        message: validated.error.message,
      };
    }
    contract = validated.contract;
  }

  // Prepare consumed the CURRENT offer (if any).
  clearPendingGenericPrepareOffer(
    input.projectId,
    resolveProductPrepareOfferSessionKey({
      sessionKey: input.sessionKey,
      sessionDbPath: input.sessionDbPath,
    }),
  );

  return {
    ok: true,
    contract,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
    materiality,
  };
}

export function genericMissionClarificationText(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly missingFields: readonly string[];
  readonly structuralBlocked: boolean;
  readonly recommendPrepare?: boolean;
  /** false = S8 project-context (no active cycle, none invented). Default true. */
  readonly hasActiveCycle?: boolean;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  const contextKept =
    input.hasActiveCycle === false
      ? "Contexte projet conservé — aucun cycle artificiel créé."
      : "Le cycle actif est conservé.";
  if (input.structuralBlocked) {
    // D-P6-SHE-01 — structural boundary is disclosed; PREPARE of an inspectable
    // proposal remains admissible. Authority is consumed at Execute, not here.
    return [
      head,
      contextKept,
      "Cette demande touche une frontière structurelle — le contrat d'exécution pourra être préparé pour inspection ; l'autorité Pilote sera consommée au clic Exécuter, pas à la préparation.",
      "Préparer ≠ autoriser ≠ exécuter. Rien n'a encore été exécuté.",
    ].join(" ");
  }
  if (input.recommendPrepare) {
    return [
      head,
      contextKept,
      "Je recommande de confier cette mission à Cursor.",
      "Je peux préparer le contrat d'exécution générique inspectable.",
      "Si tu es d'accord, dis-le-moi (par ex. « OK, vas-y ») — préparer ≠ autoriser ≠ exécuter.",
      "Rien n'a encore été exécuté.",
    ].join(" ");
  }
  const gaps = input.missingFields.join(", ");
  return [
    head,
    contextKept,
    `Pour préparer le contrat d'exécution, il me manque encore : ${gaps}.`,
    "La préparation reste distincte du lancement. Rien n'a encore été exécuté.",
  ].join(" ");
}

export function genericMissionPreparedText(input: {
  readonly presentation: "test_provider" | "openai_live";
  readonly executionContractId: string;
  readonly objective: string;
  readonly status: string;
}): string {
  const head =
    input.presentation === "test_provider" ? "[Mode test]" : "[Mode réel]";
  return [
    head,
    `J'ai préparé le contrat d'exécution correspondant à : ${input.objective}.`,
    `Contrat inspectable : ${input.executionContractId} (statut ${input.status} — non lancé).`,
    "Tu peux le consulter dans la trajectoire et me demander de l'ajuster avant d'autoriser l'exécution.",
    "Préparer ≠ autoriser ≠ exécuter. Aucune exécution n'a été lancée.",
  ].join(" ");
}

// ---------------------------------------------------------------------------
// D-ER-16…19 — Nora tool solicitation (Option 2). Thin Product service over
// the SAME backend: assess readiness → prepareGenericExecutionContractDraft.
// No parallel prepare engine · no task taxonomy · never an ExecutionAttempt.
// ---------------------------------------------------------------------------

/**
 * Same-turn currentness (P6 Option B) — Nora tool solicitation is recorded during
 * the Agents round; Product FINALIZES PREPARE only after durable turn writes
 * (ACW / reservation / LR) so the EC stamp binds the final LPS, not a mid-turn
 * snapshot invalidated by later epistemic materialization.
 * Does NOT weaken MATERIALITY_CURRENTNESS_STALE for post-turn mutations.
 */
export const GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION =
  "GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION" as const;

export const GENERIC_PREPARE_TURN_FINALIZATION_SUPPRESSED =
  "GENERIC_PREPARE_TURN_FINALIZATION_SUPPRESSED" as const;

/** Mission fields Nora may supply to the solicitation tool (NON-AUTHORITATIVE). */
export type SolicitGenericPrepareMissionFields = {
  readonly objective?: string | null;
  readonly expectedOutcome?: string | null;
  readonly scope?: string | null;
  readonly contextNotes?: string | null;
  /**
   * Optional repository-mutation claim. Product verifies; "write" without paths
   * stays fail-closed. "none"|"read" strengthens pathless non-mutating admission.
   */
  readonly repositoryMutation?: "none" | "read" | "write" | "unknown" | null;
  /** Conservative-only: a true flag can only make Product MORE cautious. */
  readonly impactSignals?: {
    readonly structuralChange?: boolean;
    readonly securityImpact?: boolean;
    readonly architectureImpact?: boolean;
    readonly dataImpact?: boolean;
    readonly irreversible?: boolean;
  } | null;
};

/**
 * R3 Exit — standalone repository path token for scopeIn parity only.
 * DÉDUPLICATION ≠ QUALIFICATION WRITE: never promote narrative / URL / A/B
 * labels into mutation scopeIn. Whole-string match only (no embedded path).
 */
export function isStandaloneRepoPathScopeToken(scope: string): boolean {
  const s = scope.trim();
  if (!s) return false;
  // Narratives always contain whitespace — keep scope narrative, empty scopeIn.
  if (/\s/.test(s)) return false;
  if (/^https?:\/\//i.test(s) || /^[a-z][a-z0-9+.-]*:\/\//i.test(s)) {
    return false;
  }
  // Reject path traversal / absolute FS as auto scopeIn (gates remain later).
  if (s.includes("..") || s.startsWith("/") || /^[a-z]:\\/i.test(s)) {
    return false;
  }
  const hasExt =
    /\.(ts|tsx|js|jsx|mjs|cjs|py|md|json|ya?ml)$/i.test(s);
  const workspaceish =
    /^(projects|\.sfia|app|src|docs)[/\\]/.test(s) ||
    /^projects[/\\]/i.test(s);
  // "A/B" labels without extension or workspace prefix are NOT repo paths.
  if (!hasExt && !workspaceish) return false;
  return hasExt || /[/\\]/.test(s);
}

/**
 * Minimal IntentAnalysisDto for a tool-solicited mission. Safe defaults:
 * intentClass execution_request, NO executionIntent taxonomy, NO
 * continuationKind / artifactMaterializationOperation, NO cycle type.
 */
export function buildIntentAnalysisFromSolicitedMission(
  fields: SolicitGenericPrepareMissionFields,
): IntentAnalysisDto {
  const objective = fields.objective?.trim() || null;
  const expectedOutcome = fields.expectedOutcome?.trim() || null;
  const scope = fields.scope?.trim() || null;
  const sig = fields.impactSignals ?? null;
  const structural =
    sig?.structuralChange === true ||
    sig?.securityImpact === true ||
    sig?.architectureImpact === true ||
    sig?.dataImpact === true ||
    sig?.irreversible === true;
  const notes = fields.contextNotes?.trim() || null;
  const mutation = fields.repositoryMutation ?? null;
  // R3 Exit — only a standalone path token may enter scopeIn for missionKey
  // parity. read/none keep empty scopeIn. Never invent WRITE from path alone.
  const pathLikeScope = !!scope && isStandaloneRepoPathScopeToken(scope);
  const readOnly = mutation === "none" || mutation === "read";
  const scopeIn = !readOnly && pathLikeScope && scope ? [scope] : [];
  const base: IntentAnalysisDto = {
    parseOk: true,
    intentClass: "execution_request",
    candidateCycleTypeId: null,
    signals: {
      structuralChange: sig?.structuralChange === true,
      securityImpact: sig?.securityImpact === true,
      architectureImpact: sig?.architectureImpact === true,
      dataImpact: sig?.dataImpact === true,
      irreversible: sig?.irreversible === true,
      lowRiskBounded: !structural,
    },
    cognitiveWorkload: null,
    contradictionCandidate: null,
    challengeResponseAssessment: "sufficient",
    objective,
    scope,
    rephrasedRequest: objective,
    outOfScope: [],
    risks: [],
    reservations: notes ? [notes] : [],
    stopConditions: [],
    activatedBlocks: [],
    expectedOutcome,
    criticalJustification: null,
    requestedOperation: null,
    executionIntent: readOnly
      ? ({
          intentKind: "read_only",
          scopeIn: [],
          scopeOut: [],
          expectedOutputs: expectedOutcome ? [expectedOutcome] : [],
          requiredCapabilities: [],
        } as IntentAnalysisDto["executionIntent"])
      : ({
          intentKind: "other",
          scopeIn,
          scopeOut: [],
          expectedOutputs: expectedOutcome ? [expectedOutcome] : [],
          requiredCapabilities: [],
        } as IntentAnalysisDto["executionIntent"]),
  };
  if (
    mutation === "none" ||
    mutation === "read" ||
    mutation === "write" ||
    mutation === "unknown"
  ) {
    return {
      ...base,
      repositoryMutationDeclared: mutation,
    } as IntentAnalysisDto;
  }
  return base;
}

export type SolicitGenericExecutionPrepareInput = {
  readonly oa: RuntimeOaStack;
  readonly projectId: string;
  /** null = S8 project-context (no active cycle; none is ever created here). */
  readonly cycleInstanceId: string | null;
  /** Full analysis (F2) OR mission fields (Nora tool) — exactly one source. */
  readonly analysis?: IntentAnalysisDto;
  readonly mission?: SolicitGenericPrepareMissionFields;
  /**
   * Current Pilote utterance (Option B / Slice D). Required for conversational
   * F1/F2 admission unless M-HD-01 `decisionId` resume applies.
   * Nora tool / model fields alone never admit PREPARE.
   */
  readonly pilotUtterance?: string | null;
  /** Non-authoritative model candidate — never sufficient alone. */
  readonly pilotDecisionCandidate?: PilotDecisionCandidate | null;
  /** F2 offer-accept: fingerprint captured at GO, revalidated before write. */
  readonly expectedOfferFingerprint?: string | null;
  /**
   * When true (default), require E-OFFER-ACCEPT or E-EXPLICIT-PREPARE from the
   * Pilote utterance (or verified decisionId resume). Set false only for
   * non-conversational Product harnesses that call prepare via solicit without
   * a turn — prefer prepareGenericExecutionContractDraft for those paths.
   */
  readonly requirePositivePilotAdmission?: boolean;
  /** M-HD-01 — verified OA HumanDecision for structural resume. */
  readonly decisionId?: string | null;
  readonly sessionKey?: string | null;
  readonly sessionDbPath?: string | null;
  readonly forceLocalAuthority?: boolean;
  readonly pinnedBaseHeadSha?: string | null;
  readonly managedRepoRootBase?: string | null;
  readonly sourceGroundingReader?: ContractSourceGroundingReader | null;
};

/**
 * Immediate PREPARE result (drafted EC or fail-closed). Never deferred —
 * tool-time queueing uses {@link QueuedGenericPrepareForTurnFinalizationResult}.
 */
export type SolicitGenericExecutionPrepareResult =
  | {
      readonly ok: true;
      readonly code: "GENERIC_PREPARE_DRAFTED";
      readonly executionContractId: string;
      readonly contractStatus: string;
      readonly materiality: string;
      readonly cycleInstanceId: string | null;
      readonly projectContextOnly: boolean;
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
      readonly message: string;
    }
  | {
      readonly ok: false;
      readonly code: string;
      readonly message: string;
      readonly missingFields?: readonly string[];
      readonly humanDecisionCreated: false;
      readonly executionAttemptCreated: false;
    };

/** Tool-time acknowledgement — no EC written yet (same-turn currentness). */
export type QueuedGenericPrepareForTurnFinalizationResult = {
  readonly ok: true;
  readonly code: typeof GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION;
  readonly deferredFinalize: true;
  readonly humanDecisionCreated: false;
  readonly executionAttemptCreated: false;
  readonly message: string;
};

/** Tool-time acknowledgement — no EC written yet (same-turn currentness). */
export function queueGenericPrepareForTurnFinalization(): QueuedGenericPrepareForTurnFinalizationResult {
  return {
    ok: true,
    code: GENERIC_PREPARE_QUEUED_FOR_TURN_FINALIZATION,
    deferredFinalize: true,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
    message:
      "Sollicitation Generic PREPARE enregistrée — Product finalisera le contrat après les écritures durables du tour (empreinte CURRENT). PREPARE ≠ AUTHORIZE ≠ EXECUTE ; aucun ExecutionAttempt créé.",
  };
}

/**
 * Thin Product service for Nora tool injection (D-ER-16). PREPARE only —
 * AUTHORIZE and EXECUTE remain separate Pilote/Studio acts. Always reports
 * executionAttemptCreated:false; JSON-serializable.
 */
export async function solicitGenericExecutionPrepare(
  input: SolicitGenericExecutionPrepareInput,
): Promise<SolicitGenericExecutionPrepareResult> {
  const projectId = input.projectId.trim();
  const fail = (
    code: string,
    message: string,
    missingFields?: readonly string[],
  ): SolicitGenericExecutionPrepareResult => ({
    ok: false,
    code,
    message,
    ...(missingFields ? { missingFields } : {}),
    humanDecisionCreated: false,
    executionAttemptCreated: false,
  });
  if (!projectId) {
    return fail("PRODUCT_PROJECT_REQUIRED", "Project requis pour préparer.");
  }

  const cycleInstanceId = input.cycleInstanceId?.trim() || null;
  const decisionId = input.decisionId?.trim() || null;
  const requirePositive = input.requirePositivePilotAdmission !== false;
  const utterance =
    typeof input.pilotUtterance === "string" ? input.pilotUtterance.trim() : "";

  let admissionKind:
    | "e_offer_accept"
    | "e_explicit_prepare"
    | "e_verified_hd_resume"
    | "harness_bypass" = "harness_bypass";
  let boundOfferFingerprint: string | null = null;

  if (requirePositive) {
    if (decisionId) {
      // M-HD-01 resume — still refuse if current utterance forbids PREPARE.
      if (utterance && hasExplicitPrepareContractRefusal(utterance)) {
        return fail(
          "EXPLICIT_PREPARE_REFUSAL",
          "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé.",
        );
      }
      if (utterance && isPrepareMetaAnalysisOrCitationFrame(utterance)) {
        return fail(
          "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT",
          "La citation ou l'analyse d'une commande PREPARE n'est pas un consentement courant. Aucun EC n'a été créé.",
        );
      }
      admissionKind = "e_verified_hd_resume";
    } else {
      const admission = resolvePositivePrepareAdmissionEvidence({
        projectId,
        cycleInstanceId,
        text: utterance,
        pilotDecisionCandidate: input.pilotDecisionCandidate,
        sessionKey: input.sessionKey,
        sessionDbPath: input.sessionDbPath,
        expectedOfferFingerprint: input.expectedOfferFingerprint,
      });
      if (admission.kind === "no_go") {
        return fail(
          admission.code,
          admission.code === "EXPLICIT_PREPARE_REFUSAL"
            ? "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé."
            : admission.code === "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT"
              ? "La citation ou l'analyse d'une commande PREPARE n'est pas un consentement courant. Aucun EC n'a été créé."
              : "Admission PREPARE refusée — aucune preuve positive Pilote applicable (E-OFFER-ACCEPT / E-EXPLICIT-PREPARE). Sollicitation Nora ≠ consentement. Aucun EC n'a été créé.",
        );
      }
      if (admission.kind === "e_offer_accept") {
        admissionKind = "e_offer_accept";
        boundOfferFingerprint = admission.offerFingerprint;
      } else {
        admissionKind = "e_explicit_prepare";
      }
      // Belt: expected fingerprint must never be ignored via E-EXPLICIT (R2/T12).
      if (
        input.expectedOfferFingerprint?.trim() &&
        admissionKind === "e_explicit_prepare"
      ) {
        return fail(
          "EXPECTED_OFFER_BINDING_REQUIRED",
          "Empreinte d'offre attendue : E-EXPLICIT ne peut pas contourner le binding CURRENT. Aucun EC n'a été créé.",
        );
      }
    }
  } else if (utterance) {
    // Harness bypass still honors refuse/citation when utterance is supplied.
    if (hasExplicitPrepareContractRefusal(utterance)) {
      return fail(
        "EXPLICIT_PREPARE_REFUSAL",
        "Le Pilote a refusé explicitement la préparation d'un contrat d'exécution. Aucun EC n'a été créé.",
      );
    }
    if (isPrepareMetaAnalysisOrCitationFrame(utterance)) {
      return fail(
        "PREPARE_CITATION_OR_ANALYSIS_NOT_CONSENT",
        "La citation ou l'analyse d'une commande PREPARE n'est pas un consentement courant. Aucun EC n'a été créé.",
      );
    }
  }

  // E-OFFER-ACCEPT — re-bind mission from CURRENT offer; refuse silent swap (X2).
  let analysis: IntentAnalysisDto;
  if (admissionKind === "e_offer_accept" && boundOfferFingerprint) {
    const offer = getCurrentGenericPrepareOffer(projectId, {
      sessionKey: input.sessionKey,
      sessionDbPath: input.sessionDbPath,
    });
    if (!offer || offer.offerFingerprint !== boundOfferFingerprint) {
      return fail(
        "PREPARE_OFFER_STALE_OR_MISMATCH",
        "Offre CURRENT absente ou divergente au moment de l'écriture. Aucun EC n'a été créé.",
      );
    }
    if ((offer.cycleInstanceId ?? null) !== cycleInstanceId) {
      return fail(
        "PREPARE_OFFER_CYCLE_MISMATCH",
        "Offre CURRENT hors cycle applicable. Aucun EC n'a été créé.",
      );
    }
    analysis = analysisFromPendingGenericPrepareOffer(offer);
  } else {
    analysis =
      input.analysis ??
      buildIntentAnalysisFromSolicitedMission(input.mission ?? {});
  }

  const readiness = assessGenericMissionPrepareReadiness(analysis);
  if (readiness.missingFields.length > 0) {
    return fail(
      "MISSION_INSUFFICIENTLY_QUALIFIED",
      `Informations manquantes pour préparer le contrat : ${readiness.missingFields.join(", ")}.`,
      readiness.missingFields,
    );
  }

  const prep = await prepareGenericExecutionContractDraft({
    oa: input.oa,
    projectId,
    cycleInstanceId,
    analysis,
    decisionId: input.decisionId,
    forceLocalAuthority: input.forceLocalAuthority,
    pinnedBaseHeadSha: input.pinnedBaseHeadSha,
    managedRepoRootBase: input.managedRepoRootBase,
    sourceGroundingReader: input.sourceGroundingReader,
    sessionKey: input.sessionKey,
    sessionDbPath: input.sessionDbPath,
  });
  if (!prep.ok) {
    // M-HD-02 — retain CURRENT offer so Pilot UI can seal/present without a
    // parallel PresentedMission store (process-local continuity only).
    if (
      prep.code === "STRUCTURAL_HUMAN_DECISION_REQUIRED" ||
      prep.code === "MATERIALITY_UNKNOWN"
    ) {
      rememberGenericPrepareRecommendation({
        projectId,
        cycleInstanceId,
        analysis,
        offeredAtIso: input.oa.clock.nowIso(),
        sessionKey: input.sessionKey,
        sessionDbPath: input.sessionDbPath,
      });
    }
    return fail(prep.code, prep.message);
  }
  return {
    ok: true,
    code: "GENERIC_PREPARE_DRAFTED",
    executionContractId: prep.contract.executionContractId,
    contractStatus: prep.contract.status,
    materiality: prep.materiality.materiality,
    cycleInstanceId,
    projectContextOnly: cycleInstanceId === null,
    humanDecisionCreated: false,
    executionAttemptCreated: false,
    message:
      "Contrat d'exécution préparé et inspectable — non autorisé, non lancé. Préparer ≠ autoriser ≠ exécuter.",
  };
}
