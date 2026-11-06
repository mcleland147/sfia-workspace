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
import { qualifyPilotageIntent } from "@/domains/pilotage/intent";
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
 * Resolve a documentary REVISE target (CR-01).
 * Uses the full APPLICABLE set — never the Nora cognitive window of 12.
 * Level A framing filters relevance only — never authorizes by itself.
 * Qualify must already be CLEAR (caller). Founding D5 kinds are refused.
 * 0 / many candidates ⇒ clarification; never chronological newest-wins.
 */
function resolveReviseTarget(
  utterance: string,
  briefs: DecisionBrief[],
):
  | { ok: true; decisionId: string; statement: string }
  | { ok: false; reason: string } {
  const candidates = findAuthorityReviseCandidates(utterance, briefs);
  if (candidates.length === 0) {
    return {
      ok: false,
      reason: "Aucune décision applicable clairement revisitée — précisez la cible",
    };
  }
  if (candidates.length > 1) {
    const scopes = new Set(candidates.map((c) => c.scope));
    return {
      ok: false,
      reason:
        scopes.size > 1
          ? "Plusieurs décisions candidates à portées distinctes — précisez la portée et la cible"
          : "Plusieurs décisions candidates — précisez laquelle réviser",
    };
  }
  const target = candidates[0];
  if (!target || target.state !== "APPLICABLE") {
    return { ok: false, reason: "Cible de révision non applicable" };
  }
  if (D5_FOUNDING_KINDS.has(target.kind)) {
    return {
      ok: false,
      reason: `Révision générique refusée pour ${target.kind} — utiliser l'opération métier typée`,
    };
  }
  if (target.kind !== "RECORD_DECISION") {
    return {
      ok: false,
      reason: `Révision conversationnelle limitée aux décisions documentaires (kind=${target.kind})`,
    };
  }
  const qualified = qualifyPilotageIntent(utterance);
  const statement =
    (qualified.clarity === "CLEAR" && qualified.statement) ||
    utterance.replace(/^(?:finalement|désormais|dorénavant)[,:]?\s+/i, "").trim();
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

  const qualified = qualifyPilotageIntent(content);
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
    actInstanceId: input.userMessageId,
  };

  if (qualified.operation === "REVISE_DECISION") {
    const briefs = await loadDecisionBriefs(input.projectId);
    const resolved = resolveReviseTarget(content, briefs);
    if (!resolved.ok) {
      return {
        attempted: false,
        intentClarity: "AMBIGUOUS",
        intentReason: resolved.reason,
        command: null,
        humanDecisionCreated: false,
        decisionId: null,
        clarification: resolved.reason,
        source: "clarification_only",
        operation: "REVISE_DECISION",
        clientCommandKey,
      };
    }
    const command = await executePilotageCommand(input.pilotId, input.projectId, {
      ...base,
      operation: "REVISE_DECISION",
      decisionId: resolved.decisionId,
      statement: resolved.statement,
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

  const command = await executePilotageCommand(input.pilotId, input.projectId, {
    ...base,
    cycleType: qualified.cycleType,
    toCycleType: qualified.toCycleType,
    methodRef: qualified.methodRef,
    methodVersion: qualified.methodVersion,
    objective: qualified.objective,
  });
  return outcomeFromCommand(command, qualified.operation, clientCommandKey);
}
