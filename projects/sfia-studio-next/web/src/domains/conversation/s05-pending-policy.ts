/**
 * S05 — pure pending-risk policy (internal decision labels only; not DB statuses).
 * Fail closed when durable evidence is insufficient to prove safety.
 */
import {
  effectIntents,
  type NoraTurnQualification,
} from "@/domains/conversation/semantic-qualification";

export type S05RiskClass =
  | "ACTIVE_EFFECT_RISK"
  | "UNKNOWN_EFFECT_RISK"
  | "PROVEN_NO_EFFECT"
  | "PROVEN_INDEPENDENT"
  | "SAME_INTENT";

export type S05SiblingEvidence = {
  id: string;
  clientTurnKey: string;
  status: "RUNNING" | "ACCEPTED" | "UNKNOWN" | string;
  createdAtMs: number;
  /** Durable qualification status from resultJson, when parseable. */
  qualificationStatus: string | null;
  qualification: NoraTurnQualification | null;
  documentSaveStatus: string | null;
  pilotageEffectAttempted: boolean | null;
  humanDecisionCreated: boolean | null;
  /**
   * Owner-side probe result (never derived from resultJson alone):
   * - true  = correlated owner mutation row identified
   * - false = applicable owners probed to completion with zero hits
   * - null  = probe absent, incomplete, errored, or identity insufficient
   */
  ownerEffectsFound: boolean | null;
  /** Durable correlation / intent keys for SAME_INTENT (comparable identities). */
  correlationKeys?: string[];
};

export type S05CurrentIntentContext = {
  /** Correlation / intent keys of the current turn effect request. */
  correlationKeys: string[];
  /** When true, current turn requests an owner mutation (D2/D4/D5/D6/D7). */
  requestsOwnerEffect: boolean;
};

function hasActionableEffectIntents(q: NoraTurnQualification | null): boolean {
  if (!q) return false;
  return effectIntents(q).length > 0;
}

/**
 * Classify one unresolved sibling for S05.
 * Never uses age alone. Never treats documentSave=null alone as proof.
 */
export function classifySiblingEffectRisk(
  sibling: S05SiblingEvidence,
  current: S05CurrentIntentContext,
): S05RiskClass {
  const sameIntent =
    current.correlationKeys.length > 0 &&
    (sibling.correlationKeys ?? []).some((k) => current.correlationKeys.includes(k));
  if (sameIntent) return "SAME_INTENT";

  if (sibling.status === "RUNNING" || sibling.status === "ACCEPTED") {
    return "ACTIVE_EFFECT_RISK";
  }

  if (sibling.status !== "UNKNOWN") {
    return "UNKNOWN_EFFECT_RISK";
  }

  // Owner probe found a mutation → not safe to ignore.
  if (sibling.ownerEffectsFound === true) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // Explicit attempted pilotage / HD without terminal certainty.
  if (sibling.pilotageEffectAttempted === true || sibling.humanDecisionCreated === true) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // Document save reached a real owner outcome (including CONFLICT/AVAILABLE/UNKNOWN).
  if (
    sibling.documentSaveStatus != null &&
    sibling.documentSaveStatus !== "NOT_EXECUTED"
  ) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // Insufficient durable qualification → fail closed.
  if (sibling.qualificationStatus == null || sibling.qualification == null) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // Owner probe required for PROVEN_NO_EFFECT (null = not probed).
  if (sibling.ownerEffectsFound == null) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // QUALIFIED with actionable REQUEST_EFFECT but no owner row yet → uncertain.
  if (
    sibling.qualificationStatus === "QUALIFIED" &&
    hasActionableEffectIntents(sibling.qualification)
  ) {
    return "UNKNOWN_EFFECT_RISK";
  }

  // UNAVAILABLE / NEEDS_CLARIFICATION / QUALIFIED-without-effect-intents:
  // effectIntents() is empty unless QUALIFIED+REQUEST_EFFECT; owner probe empty.
  if (
    sibling.qualificationStatus === "UNAVAILABLE" ||
    sibling.qualificationStatus === "NEEDS_CLARIFICATION" ||
    (sibling.qualificationStatus === "QUALIFIED" &&
      !hasActionableEffectIntents(sibling.qualification))
  ) {
    if (sibling.ownerEffectsFound === false) {
      // No actionable owner path and no owner rows → proven without effect.
      // Relative to a disjoint current intention, also independent.
      return current.requestsOwnerEffect ? "PROVEN_NO_EFFECT" : "PROVEN_INDEPENDENT";
    }
  }

  return "UNKNOWN_EFFECT_RISK";
}

export function isBlockingS05Risk(risk: S05RiskClass): boolean {
  return (
    risk === "ACTIVE_EFFECT_RISK" ||
    risk === "UNKNOWN_EFFECT_RISK" ||
    risk === "SAME_INTENT"
  );
}

/** Deterministic order: createdAt ascending, then id ascending. */
export function sortS05SiblingsDeterministic<T extends { createdAtMs: number; id: string }>(
  siblings: T[],
): T[] {
  return [...siblings].sort((a, b) => {
    if (a.createdAtMs !== b.createdAtMs) return a.createdAtMs - b.createdAtMs;
    return a.id < b.id ? -1 : a.id > b.id ? 1 : 0;
  });
}

export type S05PolicyDecision = {
  allowOwnerEffects: boolean;
  pendingEffectBlocked: boolean;
  pendingBlockReason: string | undefined;
  classifications: Array<{
    clientTurnKey: string;
    status: string;
    risk: S05RiskClass;
  }>;
  /** Prefer UX hint only for reason string when that sibling actually blocks. */
  primaryBlockingKey: string | null;
};

/**
 * Evaluate all siblings. Missions are handled by the caller (still fail-closed).
 */
export function evaluateS05SiblingPolicy(input: {
  siblings: S05SiblingEvidence[];
  current: S05CurrentIntentContext;
  clientPendingHint: string | null;
  /** When false (DIALOGUE_INDEPENDANT), never block owner effects via S05 siblings. */
  applyPendingGate: boolean;
}): S05PolicyDecision {
  const ordered = sortS05SiblingsDeterministic(input.siblings);
  const classifications = ordered.map((s) => ({
    clientTurnKey: s.clientTurnKey,
    status: s.status,
    risk: classifySiblingEffectRisk(s, input.current),
  }));

  if (!input.applyPendingGate) {
    return {
      allowOwnerEffects: true,
      pendingEffectBlocked: false,
      pendingBlockReason: undefined,
      classifications,
      primaryBlockingKey: null,
    };
  }

  const blockers = classifications.filter((c) => isBlockingS05Risk(c.risk));
  if (blockers.length === 0) {
    return {
      allowOwnerEffects: true,
      pendingEffectBlocked: false,
      pendingBlockReason: undefined,
      classifications,
      primaryBlockingKey: null,
    };
  }

  const hint = input.clientPendingHint?.trim() || null;
  const hinted = hint ? blockers.find((b) => b.clientTurnKey === hint) : null;
  const primary = hinted ?? blockers[0]!;
  const reasonPrefix =
    primary.risk === "SAME_INTENT"
      ? "S05_PENDING_BLOCKS_SAME_INTENT"
      : primary.risk === "ACTIVE_EFFECT_RISK"
        ? "S05_PENDING_BLOCKS_EFFECT"
        : "S05_PENDING_BLOCKS_AMBIGUOUS";

  return {
    allowOwnerEffects: false,
    pendingEffectBlocked: true,
    pendingBlockReason: `${reasonPrefix}:${primary.clientTurnKey}`,
    classifications,
    primaryBlockingKey: primary.clientTurnKey,
  };
}

/**
 * Build comparable durable correlation keys for SAME_INTENT.
 * Only stable identities — never USER text, title, or lexical similarity.
 */
export function buildTurnCorrelationKeys(input: {
  commandId?: string | null;
  operationId?: string | null;
  userMessageId?: string | null;
  clientTurnKey?: string | null;
  /** Client salt / mission doc key / explicit correlation before seal. */
  clientCorrelationSalt?: string | null;
  /** Sealed documentCommandBindings[].correlationKey values. */
  bindingCorrelationKeys?: string[] | null;
  /** D5 conversational client command key when known. */
  businessClientCommandKey?: string | null;
  /** Mission continuity keys (doc:mission:… / pub:mission:…). */
  missionKeys?: string[] | null;
}): string[] {
  const out = new Set<string>();
  const add = (raw: string | null | undefined, prefix?: string) => {
    const v = raw?.trim();
    if (!v) return;
    out.add(v);
    if (prefix) out.add(`${prefix}${v}`);
  };
  add(input.commandId, "tcmd:");
  add(input.operationId, "op:");
  add(input.userMessageId, "umsg:");
  add(input.clientTurnKey, "ctk:");
  add(input.clientCorrelationSalt, "salt:");
  add(input.businessClientCommandKey, "bck:");
  for (const k of input.bindingCorrelationKeys ?? []) add(k, "bind:");
  for (const k of input.missionKeys ?? []) add(k);
  return [...out];
}

/** Parse durable qualification fields from a turn resultJson string. */
export function parseSiblingResultEvidence(resultJson: string | null): {
  qualificationStatus: string | null;
  qualification: NoraTurnQualification | null;
  documentSaveStatus: string | null;
  pilotageEffectAttempted: boolean | null;
  humanDecisionCreated: boolean | null;
  /** Binding correlation keys only — not a substitute for owner probe. */
  bindingCorrelationKeys: string[];
  operationId: string | null;
} {
  if (!resultJson) {
    return {
      qualificationStatus: null,
      qualification: null,
      documentSaveStatus: null,
      pilotageEffectAttempted: null,
      humanDecisionCreated: null,
      bindingCorrelationKeys: [],
      operationId: null,
    };
  }
  try {
    const parsed = JSON.parse(resultJson) as Record<string, unknown>;
    const sq = parsed.semanticQualification as NoraTurnQualification | undefined;
    const sqStatus =
      (typeof parsed.semanticQualificationStatus === "string"
        ? parsed.semanticQualificationStatus
        : null) ??
      (sq && typeof sq.status === "string" ? sq.status : null);
    const docSave = parsed.documentSave as { status?: string } | null | undefined;
    const pilotage = parsed.pilotageEffect as { attempted?: boolean } | null | undefined;
    const bindingCorrelationKeys: string[] = [];
    const bindings = parsed.documentCommandBindings;
    if (Array.isArray(bindings)) {
      for (const b of bindings) {
        if (
          b &&
          typeof b === "object" &&
          typeof (b as { correlationKey?: string }).correlationKey === "string"
        ) {
          bindingCorrelationKeys.push((b as { correlationKey: string }).correlationKey);
        }
      }
    }
    return {
      qualificationStatus: sqStatus,
      qualification: sq && typeof sq.status === "string" ? sq : null,
      documentSaveStatus:
        docSave && typeof docSave.status === "string" ? docSave.status : null,
      pilotageEffectAttempted:
        pilotage && typeof pilotage.attempted === "boolean" ? pilotage.attempted : null,
      humanDecisionCreated:
        typeof parsed.humanDecisionCreated === "boolean" ? parsed.humanDecisionCreated : null,
      bindingCorrelationKeys,
      operationId: typeof parsed.operationId === "string" ? parsed.operationId : null,
    };
  } catch {
    return {
      qualificationStatus: null,
      qualification: null,
      documentSaveStatus: null,
      pilotageEffectAttempted: null,
      humanDecisionCreated: null,
      bindingCorrelationKeys: [],
      operationId: null,
    };
  }
}
