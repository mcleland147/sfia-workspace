/**
 * MP-09 — aggregate multiple D5/D6 conversational outcomes on one turn.
 * Primary effect preserves backward-compatible singular projection; full list feeds restitution.
 */

import type { ConversationalAuthorityOutcome } from "@/domains/pilotage/conversation-authority";
import type { DurablePilotageBinding } from "./semantic-qualification";

/** Durable turn payload slice (matches TurnResult.pilotageEffect when set). */
export type TurnPilotageEffect = {
  attempted: boolean;
  intentClarity: "CLEAR" | "AMBIGUOUS" | "NONE";
  intentReason?: string;
  operation?: string;
  status?: string | null;
  reasonCode?: string | null;
  reason?: string | null;
  commandId?: string | null;
  decisionId?: string | null;
  clarification?: string;
  source: ConversationalAuthorityOutcome["source"];
  clientCommandKey?: string;
  semanticIntentId?: string;
  effects?: Array<{ effectKind: string; targetRef: string }>;
};

export function pilotageEffectFromAuthority(
  authority: ConversationalAuthorityOutcome | null,
  semanticIntentId?: string,
): TurnPilotageEffect | null {
  if (!authority) return null;
  return {
    attempted: authority.attempted,
    intentClarity: authority.intentClarity,
    intentReason: authority.intentReason,
    operation: authority.operation,
    status: authority.command?.status ?? null,
    reasonCode: authority.command?.reasonCode ?? null,
    reason: authority.command?.reason ?? authority.intentReason ?? null,
    commandId: authority.command?.commandId ?? null,
    decisionId: authority.decisionId,
    clarification: authority.clarification,
    source: authority.source,
    clientCommandKey: authority.clientCommandKey,
    semanticIntentId,
    effects: authority.command?.effects?.map((e) => ({
      effectKind: e.effectKind,
      targetRef: e.targetRef,
    })),
  };
}

export function ambiguousPilotageEffectRecord(input: {
  intentId: string;
  reason: string;
}): TurnPilotageEffect {
  return {
    attempted: true,
    intentClarity: "AMBIGUOUS",
    intentReason: input.reason,
    reason: input.reason,
    status: null,
    decisionId: null,
    source: "clarification_only",
    semanticIntentId: input.intentId,
  };
}

export function dependencyBlockedPilotageEffectRecord(input: {
  binding: DurablePilotageBinding;
  blockReason: string;
}): TurnPilotageEffect {
  return {
    attempted: true,
    intentClarity: "CLEAR",
    operation: input.binding.operation,
    status: "REJECTED",
    reasonCode: "DEPENDENCY_PRECONDITION",
    reason: input.blockReason,
    decisionId: null,
    source: "none",
    semanticIntentId: input.binding.intentId,
  };
}

/** Mid-loop ownership loss — remaining bindings must not mutate and must be explicit. */
export function ownershipLostPilotageEffectRecord(input: {
  binding: DurablePilotageBinding | { intentId: string; operation?: string };
}): TurnPilotageEffect {
  return {
    attempted: false,
    intentClarity: "CLEAR",
    operation: "operation" in input.binding ? input.binding.operation : undefined,
    status: "SKIPPED",
    reasonCode: "OWNERSHIP_LOST",
    reason:
      "Propriété du tour perdue avant cet acte — effet non exécuté (pas de duplication à la reprise).",
    decisionId: null,
    source: "none",
    semanticIntentId: input.binding.intentId,
  };
}

/** E2-FINAL-02 — intent known from durable qualification but no owner effect reconstituted. */
export function unknownPilotageEffectRecord(input: {
  intentId: string;
  operation?: string;
  reason?: string;
}): TurnPilotageEffect {
  return {
    attempted: false,
    intentClarity: "CLEAR",
    operation: input.operation,
    status: "UNKNOWN",
    reasonCode: "EFFECT_NOT_RECONSTITUTED",
    reason:
      input.reason ??
      "Intention durable reconnue — aucun effet propriétaire reconstitué (pas de succès inventé).",
    decisionId: null,
    source: "none",
    semanticIntentId: input.intentId,
  };
}

/**
 * E2-FINAL-01 / E2-INT — map capitalisation rows to a single intent outcome.
 * Never attribute another intent's success. Partial ⇒ not satisfied.
 * When acquis/open_point rows exist for the intent, ignore auxiliary subject
 * side-effect rows so a subject-only AVAILABLE cannot satisfy a record intent.
 * When proposalKind is ACQUIS/OPEN_POINT, subject-only rows never count as APPLIED.
 */
export function crossCapOutcomeFromCapitalisations(input: {
  intentId: string;
  capitalisations: Array<{ intentId?: string; status: string; kind?: string }>;
  hadProposal: boolean;
  ownershipLost?: boolean;
  /** Knowledge proposal kind when known (SUBJECT | ACQUIS | OPEN_POINT). */
  proposalKind?: string | null;
}): PilotageIntentStepOutcome {
  if (input.ownershipLost) return "SKIPPED";
  let related = input.capitalisations.filter((c) => c.intentId === input.intentId);
  const proposalKind = (input.proposalKind ?? "").toUpperCase();
  const expectsRecordPrimary =
    proposalKind === "ACQUIS" || proposalKind === "OPEN_POINT";
  const hasRecordPrimary = related.some(
    (c) => c.kind === "acquis" || c.kind === "open_point",
  );
  if (hasRecordPrimary || expectsRecordPrimary) {
    related = related.filter(
      (c) =>
        c.kind === "acquis" ||
        c.kind === "open_point" ||
        c.kind === "open_point_resolve",
    );
  }
  if (related.length === 0) {
    // No primary rows — never treat auxiliary subject AVAILABLE as complete success.
    return input.hadProposal ? "FAILED" : "SKIPPED";
  }
  const ok = (s: string) => {
    const u = s.toUpperCase();
    return u === "AVAILABLE" || u === "OK" || u === "SUCCESS" || u === "APPLIED";
  };
  if (related.every((c) => ok(c.status))) return "APPLIED";
  if (related.some((c) => ok(c.status))) return "PARTIAL";
  return "FAILED";
}

export function isSuccessfulPilotageCommandStatus(status: string | null | undefined): boolean {
  const s = (status ?? "").toUpperCase();
  return s === "APPLIED" || s === "ALREADY_APPLIED";
}

/**
 * Intent-id outcome map entry after each binding step.
 * Values: command status, AMBIGUOUS, or SKIPPED (dependency / gate).
 */
export type PilotageIntentStepOutcome = string;

function isSatisfiedCrossCapOutcome(step: string): boolean {
  const s = step.toUpperCase();
  return (
    s === "APPLIED" ||
    s === "ALREADY_APPLIED" ||
    s === "AVAILABLE" ||
    s === "OK" ||
    s === "SUCCESS"
  );
}

/**
 * If a pilotage predecessor did not succeed, dependent bindings must not mutate.
 * E2-REL-02 — non-pilotage deps (e.g. D4→D5) are satisfiable when the owner
 * effect was already resolved this turn (`crossCapOutcomeByIntentId`); otherwise
 * fail closed (never treat as vacuously satisfied).
 */
export function dependencyPreconditionBlockReason(input: {
  dependsOn: string[];
  pilotageIntentIds: Set<string>;
  outcomeByIntentId: Map<string, PilotageIntentStepOutcome>;
  /** Same-turn non-pilotage owner outcomes (D4 capitalisation, …). */
  crossCapOutcomeByIntentId?: Map<string, PilotageIntentStepOutcome>;
}): string | null {
  for (const dep of input.dependsOn) {
    if (!input.pilotageIntentIds.has(dep)) {
      const cross = input.crossCapOutcomeByIntentId?.get(dep);
      if (cross === undefined) {
        return (
          `Dépendance (${dep}) hors intentions D5/D6 — précondition inter-capacité ` +
          `non encore satisfaite par un propriétaire; effet dépendant non exécuté.`
        );
      }
      if (cross === "AMBIGUOUS") {
        return `L'intention prérequis hors pilotage (${dep}) est ambiguë — effet dépendant non lancé.`;
      }
      if (cross === "SKIPPED") {
        return `L'acte prérequis hors pilotage (${dep}) n'a pas abouti — effet dépendant non exécuté.`;
      }
      if (!isSatisfiedCrossCapOutcome(cross)) {
        return (
          `L'acte prérequis hors pilotage (${dep}) n'est pas appliqué (${cross}) — ` +
          `effet dépendant non exécuté.`
        );
      }
      continue;
    }
    const step = input.outcomeByIntentId.get(dep);
    if (step === undefined) {
      return `Acte prérequis (${dep}) non encore résolu — effet suivant non exécuté.`;
    }
    if (step === "AMBIGUOUS") {
      return `L'intention prérequis (${dep}) est ambiguë — l'effet dépendant n'a pas été lancé.`;
    }
    if (step === "SKIPPED") {
      return `L'acte prérequis (${dep}) n'a pas abouti — effet dépendant non exécuté.`;
    }
    if (!isSuccessfulPilotageCommandStatus(step)) {
      return `L'acte prérequis (${dep}) n'est pas appliqué (${step}) — effet dépendant non exécuté.`;
    }
  }
  return null;
}

/** First attempted record in stable binding order — backward-compatible primary. */
export function pickPrimaryPilotageEffect(
  records: TurnPilotageEffect[],
): TurnPilotageEffect | null {
  if (records.length === 0) return null;
  return records.find((r) => r.attempted) ?? records[records.length - 1] ?? null;
}

export function intentIdsFromPilotageBindings(
  bindings: Array<
    DurablePilotageBinding | { ambiguous: true; reason: string; intentId: string }
  >,
): Set<string> {
  const ids = new Set<string>();
  for (const b of bindings) {
    ids.add("ambiguous" in b ? b.intentId : b.intentId);
  }
  return ids;
}