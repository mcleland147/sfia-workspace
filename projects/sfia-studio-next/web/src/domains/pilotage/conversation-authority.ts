/**
 * F01/F02 — bridge from a persisted USER message to the existing D5/D6
 * command boundary. Never invents authority from Nora or D4 content.
 *
 * Sequencing contract:
 * 1. USER message already durable (COMPLETE) before this runs.
 * 2. Short business TX via executePilotageCommand only — never around Nora.
 * 3. Ambiguous / insufficient acts do not call the command runner
 *    (avoids HUMAN_INTENT locks on clarification turns).
 * 4. C02 — durable effects are recoverable via business_commands
 *    (conv-auth:{clientTurnKey} / USER_MESSAGE sourceRef), not only resultJson.
 */
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { businessCommandEffects, businessCommands, humanDecisions } from "@/db/schema";
import {
  findAuthorityReviseCandidates,
  type DecisionBrief,
} from "@/domains/decisions/divergence-assist";
import { toCommandResult } from "@/domains/pilotage/command-runner";
import type { IntentQualification } from "@/domains/pilotage/intent";
import {
  executePilotageCommand,
  getPilotageProjection,
  reconcileCommandByClientKey,
} from "@/domains/pilotage/service";
import { conversationalClientCommandKey } from "@/domains/pilotage/thread-recovery";
import type { CommandResult, PilotageRequestBody } from "@/domains/pilotage/types";

const D5_FOUNDING_KINDS = new Set([
  "OPEN_CYCLE",
  "CLOSE_CYCLE",
  "TRANSITION_CYCLE",
  "CHOOSE_METHOD",
  "REPLACE_METHOD",
  "WITHDRAW_METHOD",
  "RETAIN_TRAJECTORY",
  "PROPOSE_TRAJECTORY",
  "APPLY_RESTRICTION",
  "LIFT_RESTRICTION",
  "REVOKE_DECISION",
]);

export type ConversationalAuthorityOutcome = {
  /** Whether a D5/D6 command was attempted. */
  attempted: boolean;
  /** Intent recognized before any command. */
  intentClarity: "CLEAR" | "AMBIGUOUS" | "NONE";
  intentReason?: string;
  operation?: string;
  /** Honest command result when attempted. */
  command: CommandResult | null;
  /** True only when a HumanDecision id was produced or already applied. */
  humanDecisionCreated: boolean;
  decisionId: string | null;
  clarification?: string;
  source: "none" | "user_message_command" | "clarification_only" | "reconstituted";
  /** Stable business key — searchable after Nora/HTTP interruption. */
  clientCommandKey?: string;
};

/** Stable D5/D6 client key for a conversational turn — not a second registry. */
export function conversationalCommandKey(clientTurnKey: string): string {
  return conversationalClientCommandKey(clientTurnKey);
}

async function loadDecisionBriefs(projectId: string): Promise<DecisionBrief[]> {
  const rows = await db
    .select({
      id: humanDecisions.id,
      kind: humanDecisions.kind,
      objectRef: humanDecisions.objectRef,
      scope: humanDecisions.scope,
      statement: humanDecisions.statement,
      state: humanDecisions.state,
      sourceKind: humanDecisions.sourceKind,
    })
    .from(humanDecisions)
    .where(eq(humanDecisions.projectId, projectId))
    .orderBy(asc(humanDecisions.createdAt));
  return rows.map((r) => ({
    id: r.id,
    kind: r.kind,
    objectRef: r.objectRef ?? "",
    scope: r.scope ?? "PROJECT",
    statement: r.statement ?? "",
    state: r.state,
    sourceKind: r.sourceKind,
  }));
}

/**
 * C05 rework — pilot explicitly designates a founding D5 act as the revise target
 * (e.g. « je révise la décision d'ouverture du cycle »). Must not fall through
 * to an opportunistic RECORD_DECISION match.
 */
/** @deprecated Lot D2 — lexical founding revise designation retired from authority path. */
export function designatesFoundingReviseTarget(utterance: string): string | null {
  const t = utterance.trim();
  if (
    /\b(?:d[eé]cision\s+d['’]ouverture|ouverture\s+du\s+cycle|d[eé]cision\s+d['’]ouvrir)\b/i.test(
      t,
    ) ||
    /\br[eé]vise\s+la\s+d[eé]cision\s+d['’]ouverture\b/i.test(t)
  ) {
    return "OPEN_CYCLE";
  }
  if (
    /\b(?:d[eé]cision\s+de\s+cl[oô]ture|cl[oô]ture\s+du\s+cycle|d[eé]cision\s+de\s+cl[oô]turer)\b/i.test(
      t,
    )
  ) {
    return "CLOSE_CYCLE";
  }
  if (/\b(?:d[eé]cision\s+de\s+(?:retenir|choisir)\s+la\s+m[eé]thode)\b/i.test(t)) {
    return "CHOOSE_METHOD";
  }
  if (/\b(?:d[eé]cision\s+(?:d['’]appliquer|de\s+restriction)|restriction\s+appliqu[eé]e)\b/i.test(t)) {
    return "APPLY_RESTRICTION";
  }
  return null;
}

/**
 * Resolve a documentary REVISE target (CR-01 / C05 LIVE / C05 rework).
 * Uses the full APPLICABLE set — never the Nora cognitive window of 12.
 * Level A framing filters relevance only — never authorizes by itself.
 * Qualify must already be CLEAR (caller).
 *
 * Eligibility before uniqueness: only RECORD_DECISION compete for generic
 * REVISE — unless the pilot explicitly designates a founding D5 target, in
 * which case refuse typed (never rewrite OPEN via documentary REVISE).
 * 0 / many admissible candidates ⇒ clarification; never chronological newest-wins.
 */
/** @deprecated Lot D2 — lexical revise target selection retired from authority path. */
export function resolveReviseTargetLexical(
  utterance: string,
  briefs: DecisionBrief[],
):
  | { ok: true; decisionId: string; statement: string }
  | { ok: false; reason: string } {
  const designatedFounding = designatesFoundingReviseTarget(utterance);
  if (designatedFounding) {
    return {
      ok: false,
      reason: `Révision générique refusée pour ${designatedFounding} — utiliser l'opération métier typée`,
    };
  }

  const lexical = findAuthorityReviseCandidates(utterance, briefs);
  const documentary = lexical.filter((c) => c.kind === "RECORD_DECISION");

  if (documentary.length === 0) {
    const founding = lexical.find((c) => D5_FOUNDING_KINDS.has(c.kind));
    if (founding) {
      return {
        ok: false,
        reason: `Révision générique refusée pour ${founding.kind} — utiliser l'opération métier typée`,
      };
    }
    const other = lexical[0];
    if (other) {
      return {
        ok: false,
        reason: `Révision conversationnelle limitée aux décisions documentaires (kind=${other.kind})`,
      };
    }
    return {
      ok: false,
      reason: "Aucune décision applicable clairement revisitée — précisez la cible",
    };
  }
  if (documentary.length > 1) {
    const scopes = new Set(documentary.map((c) => c.scope));
    return {
      ok: false,
      reason:
        scopes.size > 1
          ? "Plusieurs décisions candidates à portées distinctes — précisez la portée et la cible"
          : "Plusieurs décisions candidates — précisez laquelle réviser",
    };
  }
  const target = documentary[0];
  if (!target || target.state !== "APPLICABLE") {
    return { ok: false, reason: "Cible de révision non applicable" };
  }
  const statement = utterance
    .replace(/^(?:finalement|désormais|dorénavant)[,:]?\s+/i, "")
    .trim();
  return { ok: true, decisionId: target.id, statement: statement.slice(0, 500) };
}

function outcomeFromCommand(
  command: CommandResult,
  operation: string,
  clientCommandKey: string,
  source: ConversationalAuthorityOutcome["source"] = "user_message_command",
): ConversationalAuthorityOutcome {
  const applied = command.status === "APPLIED" || command.status === "ALREADY_APPLIED";
  return {
    attempted: true,
    intentClarity: "CLEAR",
    operation,
    command,
    humanDecisionCreated: applied && Boolean(command.decisionId),
    decisionId: command.decisionId,
    source,
    clientCommandKey,
    intentReason:
      command.status === "REJECTED" || command.status === "CONFLICT" || command.status === "UNKNOWN"
        ? command.reason
        : undefined,
    clarification:
      command.status === "REJECTED" && command.reasonCode === "AMBIGUOUS"
        ? command.reason
        : undefined,
  };
}

/**
 * C02 — reconstitute a prior conversational D5/D6 effect from the durable registry.
 * Prefer clientCommandKey; fall back to USER_MESSAGE sourceRef (= userMessageId).
 * Never invents APPLIED/REJECTED when nothing is found.
 */
export async function reconstituteConversationalAuthority(input: {
  pilotId: string;
  projectId: string;
  clientTurnKey?: string | null;
  userMessageId?: string | null;
}): Promise<ConversationalAuthorityOutcome | null> {
  const key = input.clientTurnKey?.trim()
    ? conversationalCommandKey(input.clientTurnKey)
    : null;
  if (key) {
    try {
      const command = await reconcileCommandByClientKey(input.pilotId, input.projectId, key);
      return outcomeFromCommand(
        command,
        command.effects[0]?.effectKind ?? "UNKNOWN",
        key,
        "reconstituted",
      );
    } catch {
      /* fall through to sourceRef */
    }
  }
  const messageId = input.userMessageId?.trim();
  if (!messageId) return null;
  const cmd = (
    await db
      .select()
      .from(businessCommands)
      .where(
        and(
          eq(businessCommands.projectId, input.projectId),
          eq(businessCommands.actorPilotId, input.pilotId),
          eq(businessCommands.sourceKind, "USER_MESSAGE"),
          eq(businessCommands.sourceRef, messageId),
        ),
      )
      .limit(1)
  )[0];
  if (!cmd) return null;
  const effects = await db
    .select()
    .from(businessCommandEffects)
    .where(eq(businessCommandEffects.commandId, cmd.id))
    .orderBy(asc(businessCommandEffects.ordinal));
  const command = toCommandResult(cmd, effects, "replay");
  return outcomeFromCommand(
    command,
    cmd.operation || effects[0]?.effectKind || "UNKNOWN",
    cmd.clientCommandKey,
    "reconstituted",
  );
}

/**
 * Attempt a governed D5/D6 command from a persisted USER message.
 * Caller must pass the durable message id as sourceRef / actInstanceId.
 */
export async function applyConversationalAuthority(input: {
  pilotId: string;
  projectId: string;
  userMessageId: string;
  content: string;
  clientTurnKey: string;
  /**
   * SEM/TV-02: semantic qualification from Nora (correlated to USER message).
   * When omitted, do NOT fall back to lexical qualifyPilotageIntent — fail closed.
   */
  preQualified?: IntentQualification | null;
}): Promise<ConversationalAuthorityOutcome> {
  const content = input.content.trim();
  const clientCommandKey = conversationalCommandKey(input.clientTurnKey);
  const empty: ConversationalAuthorityOutcome = {
    attempted: false,
    intentClarity: "NONE",
    command: null,
    humanDecisionCreated: false,
    decisionId: null,
    source: "none",
    clientCommandKey,
  };
  if (!content || !input.projectId || !input.userMessageId) return empty;

  // C02 — if this turn key already produced a durable command, return it (no second effect).
  const prior = await reconstituteConversationalAuthority({
    pilotId: input.pilotId,
    projectId: input.projectId,
    clientTurnKey: input.clientTurnKey,
    userMessageId: input.userMessageId,
  });
  if (prior?.attempted && prior.command) {
    return prior;
  }

  const qualified: IntentQualification =
    input.preQualified ??
    ({
      clarity: "NONE",
      reason: "NO_SEMANTIC_PILOTAGE_QUALIFICATION",
    } as IntentQualification);
  // Lexical qualifyPilotageIntent removed from this production path (SEM-02 / TV-05).
  if (qualified.clarity === "NONE") {
    return { ...empty, intentClarity: "NONE", intentReason: qualified.reason };
  }
  if (qualified.clarity === "AMBIGUOUS") {
    return {
      ...empty,
      intentClarity: "AMBIGUOUS",
      intentReason: qualified.reason,
      clarification: qualified.reason,
      source: "clarification_only",
    };
  }

  const projection = await getPilotageProjection(input.pilotId, input.projectId);
  const base: PilotageRequestBody = {
    clientCommandKey,
    expectedRevision: projection.revision,
    sourceKind: "USER_MESSAGE",
    sourceRef: input.userMessageId,
    utterance: content,
    // Server-derived act identity — ignore any client-supplied actInstanceId.
    actInstanceId: qualified.semanticIntentId
      ? `${input.userMessageId}:${qualified.semanticIntentId}`
      : input.userMessageId,
    operation: qualified.operation,
    semanticIntentId: qualified.semanticIntentId,
    semanticSchemaVersion: qualified.semanticSchemaVersion,
    cycleType: qualified.cycleType,
    toCycleType: qualified.toCycleType,
    methodRef: qualified.methodRef,
    methodVersion: qualified.methodVersion,
    decisionId: qualified.decisionId,
    objectRef: qualified.objectRef,
    // Statement only for documentary D6 — never echo full utterance as statement on D5 opens.
    statement:
      qualified.operation === "RECORD_DECISION" || qualified.operation === "REVISE_DECISION"
        ? qualified.statement
        : undefined,
  };

  if (qualified.operation === "REVISE_DECISION") {
    // Lot D2 — target from durable qualification or unique objectRef match on
    // known APPLICABLE RECORD_DECISION resources. No lexical utterance router.
    const briefs = await loadDecisionBriefs(input.projectId);
    let decisionId = (qualified.decisionId ?? "").trim();
    const statement =
      (qualified.statement ?? "").trim() || content.replace(/^(?:finalement|désormais|dorénavant)[,:]?\s+/i, "").trim();
    if (!decisionId && qualified.objectRef?.trim()) {
      const objectRef = qualified.objectRef.trim();
      const matches = briefs.filter(
        (b) =>
          b.state === "APPLICABLE" &&
          b.kind === "RECORD_DECISION" &&
          b.objectRef.trim() === objectRef,
      );
      if (matches.length === 1) {
        decisionId = matches[0]!.id;
      } else if (matches.length > 1) {
        return {
          attempted: false,
          intentClarity: "AMBIGUOUS",
          intentReason: "Plusieurs décisions pour objectRef — précisez decisionId",
          command: null,
          humanDecisionCreated: false,
          decisionId: null,
          clarification: "Plusieurs décisions pour objectRef — précisez decisionId",
          source: "clarification_only",
          operation: "REVISE_DECISION",
          clientCommandKey,
        };
      }
    }
    if (!decisionId) {
      return {
        attempted: false,
        intentClarity: "AMBIGUOUS",
        intentReason:
          "REVISE_DECISION sans decisionId/objectRef durable — clarification requise (pas de cible lexicale)",
        command: null,
        humanDecisionCreated: false,
        decisionId: null,
        clarification:
          "Précisez la décision à réviser (identifiant ou objectRef unique) — pas de choix heuristique",
        source: "clarification_only",
        operation: "REVISE_DECISION",
        clientCommandKey,
      };
    }
    const command = await executePilotageCommand(input.pilotId, input.projectId, {
      ...base,
      operation: "REVISE_DECISION",
      decisionId,
      statement: statement.slice(0, 500),
      objectRef: qualified.objectRef,
    });
    return outcomeFromCommand(command, "REVISE_DECISION", clientCommandKey);
  }

  if (qualified.operation === "RECORD_DECISION") {
    const command = await executePilotageCommand(input.pilotId, input.projectId, {
      ...base,
      operation: "RECORD_DECISION",
      statement: qualified.statement ?? qualified.objective ?? content,
      objectRef: qualified.objectRef,
      objective: qualified.objective,
    });
    return outcomeFromCommand(command, "RECORD_DECISION", clientCommandKey);
  }

  /** C06 — resolve a unique ACTIVE restriction before LIFT (never approximate). */
  if (qualified.operation === "LIFT_RESTRICTION") {
    const hint = (qualified.restrictionKindHint ?? "").trim().toUpperCase();
    const targetHint = (qualified.restrictionTargetRefHint ?? "").trim();
    const active = projection.restrictions.filter((r) => r.status === "ACTIVE");
    let pool = hint
      ? active.filter((r) => r.targetKind.toUpperCase() === hint)
      : active;
    // If the pilot named an instance/specialty, require a matching targetRef
    // (a lone matching kind with a contradictory target is not enough).
    if (targetHint && pool.length > 0) {
      const hintNorm = targetHint.toUpperCase();
      const narrowed = pool.filter((r) => {
        const ref = (r.targetRef || "*").toUpperCase();
        if (ref === "*" || ref === hintNorm) return true;
        // Specialty name vs cycle id: allow when pilot says CADRAGE and target is cycle id
        // only if projection cycle type matches — otherwise require exact/soft includes.
        if (projection.cycle && hintNorm === projection.cycle.cycleType.toUpperCase()) {
          return ref === projection.cycle.id.toUpperCase() || ref === "*";
        }
        return ref.includes(hintNorm) || hintNorm.includes(ref);
      });
      if (narrowed.length === 0) {
        return {
          attempted: false,
          intentClarity: "AMBIGUOUS",
          intentReason:
            "Restriction active d'un autre cible que celle indiquée — précisez la cible exacte",
          command: null,
          humanDecisionCreated: false,
          decisionId: null,
          clarification:
            "Restriction active d'un autre cible que celle indiquée — précisez la cible exacte",
          source: "clarification_only",
          operation: "LIFT_RESTRICTION",
          clientCommandKey,
        };
      }
      pool = narrowed;
    }
    if (pool.length === 0) {
      return {
        attempted: false,
        intentClarity: "AMBIGUOUS",
        intentReason: "Aucune restriction active correspondant à la demande",
        command: null,
        humanDecisionCreated: false,
        decisionId: null,
        clarification: "Aucune restriction active correspondant à la demande — précisez la cible",
        source: "clarification_only",
        operation: "LIFT_RESTRICTION",
        clientCommandKey,
      };
    }
    if (pool.length > 1) {
      return {
        attempted: false,
        intentClarity: "AMBIGUOUS",
        intentReason: "Plusieurs restrictions actives — précisez laquelle lever",
        command: null,
        humanDecisionCreated: false,
        decisionId: null,
        clarification: "Plusieurs restrictions actives — précisez laquelle lever",
        source: "clarification_only",
        operation: "LIFT_RESTRICTION",
        clientCommandKey,
      };
    }
    const target = pool[0];
    const command = await executePilotageCommand(input.pilotId, input.projectId, {
      ...base,
      operation: "LIFT_RESTRICTION",
      restrictionId: target.id,
    });
    return outcomeFromCommand(command, "LIFT_RESTRICTION", clientCommandKey);
  }

  const command = await executePilotageCommand(input.pilotId, input.projectId, {
    ...base,
    operation: qualified.operation,
    cycleType: qualified.cycleType,
    toCycleType: qualified.toCycleType,
    methodRef: qualified.methodRef,
    methodVersion: qualified.methodVersion,
    objective: qualified.objective,
  });
  return outcomeFromCommand(command, qualified.operation, clientCommandKey);
}
