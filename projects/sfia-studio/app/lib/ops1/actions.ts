"use server";

import {
  createOpenSession,
  getSessionBundle,
  listOpenSessions,
} from "./repository";
import {
  createFixtureActionCandidate,
  getI3Bundle,
  qualifyActionNotRequired,
  recordGateDecision,
  refineActionCandidate,
  refuseExecutionAttempt,
} from "./actionGate";
import { evaluateAndPersistAllowlist } from "./allowlistService";
import {
  createExecutionContract,
  recordExecutionGate,
} from "./executionContractService";
import {
  getI5Bundle,
  runExecutionAttempt,
} from "./executionOrchestrator";
import { Ops1Error, toSafeClientError } from "./errors";
import {
  assertActionCandidateId,
  assertActionField,
  assertAllowlistEntries,
  assertConversationMode,
  assertGateDecisionKind,
  assertMessageContent,
  assertSessionId,
} from "./validation";
import {
  getLiveConversationAvailability,
  isFakeConversationProviderForced,
} from "./conversation/config";
import { sendConversationMessage } from "./conversation/service";
import { getRealCursorAvailability } from "./cursorExecutionAdapter";
import type {
  ActionAllowlistEvaluation,
  ActionCandidate,
  ConversationAttempt,
  ConversationMode,
  ConversationUsageCounters,
  CycleSession,
  ExecutionAttempt,
  ExecutionContract,
  ExecutionGateRecord,
  GateDecision,
  GateDecisionKind,
  JournalTurn,
  MinimalExecutionResult,
  ProviderPresentation,
  SessionQualification,
} from "./types";

export type Ops1ActionResult<T> =
  | { ok: true; data: T }
  | { ok: false; code: string; message: string };

function fail(error: unknown): Ops1ActionResult<never> {
  const safe = toSafeClientError(error);
  console.error("[ops1]", safe.code, safe.message);
  return { ok: false, code: safe.code, message: safe.message };
}

function resolvePresentation(
  mode: ConversationMode,
): ProviderPresentation {
  if (mode === "fixture") return "fixture";
  if (isFakeConversationProviderForced()) return "test_provider";
  return "openai_live";
}

export async function ops1CreateSessionAction(input?: {
  mode?: ConversationMode;
}): Promise<Ops1ActionResult<{ session: CycleSession }>> {
  try {
    const mode = assertConversationMode(input?.mode ?? "fixture");
    if (mode === "live") {
      const availability = getLiveConversationAvailability();
      // Fake provider may satisfy E2E without real secrets when forced.
      if (!availability.available && !isFakeConversationProviderForced()) {
        throw new Ops1Error(
          "CONFIG",
          `Création live impossible (variables manquantes : ${availability.missing.join(", ")}).`,
        );
      }
    }
    const { session, event } = createOpenSession(mode);
    console.info(
      "[ops1] SESSION_OPENED",
      session.sessionId,
      event.eventId,
      session.conversationMode,
    );
    return { ok: true, data: { session } };
  } catch (error) {
    return fail(error);
  }
}

export async function ops1ListOpenSessionsAction(): Promise<
  Ops1ActionResult<{ sessions: CycleSession[] }>
> {
  try {
    return { ok: true, data: { sessions: listOpenSessions() } };
  } catch (error) {
    return fail(error);
  }
}

export async function ops1GetSessionAction(
  sessionId: string,
): Promise<
  Ops1ActionResult<{
    session: CycleSession;
    turns: JournalTurn[];
    attempts: ConversationAttempt[];
    presentation: ProviderPresentation;
    qualification: SessionQualification | null;
    candidates: ActionCandidate[];
    latestDecisionsByAction: Record<string, GateDecision | null>;
    latestAllowlistByAction: Record<string, ActionAllowlistEvaluation | null>;
    latestContractByAction: Record<string, ExecutionContract | null>;
    latestAttemptByContract: Record<string, ExecutionAttempt | null>;
  }>
> {
  try {
    const id = assertSessionId(sessionId);
    const bundle = getSessionBundle(id);
    if (!bundle) {
      throw new Ops1Error("NOT_FOUND", "Session introuvable.");
    }
    const i3 = getI3Bundle(id);
    const i5 = getI5Bundle(id);
    return {
      ok: true,
      data: {
        ...bundle,
        presentation: resolvePresentation(bundle.session.conversationMode),
        qualification: i3.qualification,
        candidates: i3.candidates,
        latestDecisionsByAction: i3.latestDecisionsByAction,
        latestAllowlistByAction: i3.latestAllowlistByAction,
        latestContractByAction: i5.latestContractByAction,
        latestAttemptByContract: i5.latestAttemptByContract,
      },
    };
  } catch (error) {
    return fail(error);
  }
}

/** Availability only — never returns secret values. */
export async function ops1GetLiveConfigAction(): Promise<
  Ops1ActionResult<{
    available: boolean;
    missing: Array<"OPENAI_API_KEY" | "OPENAI_MODEL">;
    testProvider: boolean;
  }>
> {
  try {
    const status = getLiveConversationAvailability();
    const testProvider = isFakeConversationProviderForced();
    if (status.available || testProvider) {
      return {
        ok: true,
        data: {
          available: true,
          missing: status.available ? [] : status.missing,
          testProvider,
        },
      };
    }
    return {
      ok: true,
      data: { available: false, missing: status.missing, testProvider: false },
    };
  } catch (error) {
    return fail(error);
  }
}

/**
 * Append user message using the session's immutable mode.
 * Optional requestedMode must match or the call is rejected before write.
 */
export async function ops1SendMessageAction(input: {
  sessionId: string;
  content: string;
  /** Optional; if provided must equal session.conversationMode. */
  mode?: ConversationMode;
}): Promise<
  Ops1ActionResult<{
    userTurn: JournalTurn;
    assistantTurn: JournalTurn | null;
    assistantError: string | null;
    usage: ConversationUsageCounters | null;
    mode: ConversationMode;
    presentation: ProviderPresentation;
  }>
> {
  try {
    const sessionId = assertSessionId(input.sessionId);
    const content = assertMessageContent(input.content);
    const requestedMode =
      input.mode !== undefined ? assertConversationMode(input.mode) : undefined;

    const result = await sendConversationMessage({
      sessionId,
      content,
      requestedMode,
    });

    return {
      ok: true,
      data: {
        userTurn: result.userTurn,
        assistantTurn: result.assistantTurn,
        assistantError: result.assistantError,
        usage: result.usage,
        mode: result.mode,
        presentation: resolvePresentation(result.mode),
      },
    };
  } catch (error) {
    return fail(error);
  }
}

/** @deprecated I1 name — fixture sessions only. */
export async function ops1AppendUserMessageAction(input: {
  sessionId: string;
  content: string;
}): Promise<
  Ops1ActionResult<{
    userTurn: JournalTurn;
    assistantTurn: JournalTurn | null;
    assistantError: string | null;
  }>
> {
  const result = await ops1SendMessageAction({
    ...input,
    mode: "fixture",
  });
  if (!result.ok) return result;
  return {
    ok: true,
    data: {
      userTurn: result.data.userTurn,
      assistantTurn: result.data.assistantTurn,
      assistantError: result.data.assistantError,
    },
  };
}

/* ─── OPS1 I3 — action candidate + gate (no execution) ─── */

export async function ops1QualifyActionNotRequiredAction(input: {
  sessionId: string;
}): Promise<Ops1ActionResult<{ qualification: SessionQualification }>> {
  try {
    const sessionId = assertSessionId(input.sessionId);
    const { qualification } = qualifyActionNotRequired(sessionId);
    return { ok: true, data: { qualification } };
  } catch (error) {
    return fail(error);
  }
}

export async function ops1CreateFixtureActionCandidateAction(input: {
  sessionId: string;
}): Promise<Ops1ActionResult<{ candidate: ActionCandidate }>> {
  try {
    const sessionId = assertSessionId(input.sessionId);
    const { candidate } = createFixtureActionCandidate(sessionId);
    return { ok: true, data: { candidate } };
  } catch (error) {
    return fail(error);
  }
}

export async function ops1RefineActionCandidateAction(input: {
  sessionId: string;
  actionCandidateId: string;
  title: string;
  objective: string;
  scopeSummary: string;
  riskSummary: string;
}): Promise<Ops1ActionResult<{ candidate: ActionCandidate }>> {
  try {
    const sessionId = assertSessionId(input.sessionId);
    const actionCandidateId = assertActionCandidateId(input.actionCandidateId);
    const { candidate } = refineActionCandidate({
      sessionId,
      actionCandidateId,
      title: assertActionField("Titre", input.title),
      objective: assertActionField("Objectif", input.objective),
      scopeSummary: assertActionField("Périmètre", input.scopeSummary),
      riskSummary: assertActionField("Risques", input.riskSummary),
    });
    return { ok: true, data: { candidate } };
  } catch (error) {
    return fail(error);
  }
}

export async function ops1RecordGateDecisionAction(input: {
  sessionId: string;
  actionCandidateId: string;
  kind: GateDecisionKind;
  motif?: string | null;
}): Promise<
  Ops1ActionResult<{
    decision: GateDecision;
    candidate: ActionCandidate;
    microcopy: string | null;
  }>
> {
  try {
    const sessionId = assertSessionId(input.sessionId);
    const actionCandidateId = assertActionCandidateId(input.actionCandidateId);
    const kind = assertGateDecisionKind(input.kind);
    const result = recordGateDecision({
      sessionId,
      actionCandidateId,
      kind,
      motif: input.motif ?? null,
    });
    return {
      ok: true,
      data: {
        decision: result.decision,
        candidate: result.candidate,
        microcopy: result.microcopy,
      },
    };
  } catch (error) {
    return fail(error);
  }
}

/** Explicit fail-closed — I3 never executes Cursor/Git/filesystem. */
export async function ops1RefuseExecutionAction(input: {
  sessionId: string;
}): Promise<Ops1ActionResult<{ refused: true; message: string }>> {
  try {
    const sessionId = assertSessionId(input.sessionId);
    refuseExecutionAttempt(sessionId);
    return {
      ok: true,
      data: {
        refused: true,
        message:
          "Exécution refusée — I3 n’autorise aucune exécution Cursor, Git ou filesystem.",
      },
    };
  } catch (error) {
    return fail(error);
  }
}

/* ─── OPS1 I4 — allowlist evaluation (no execution) ─── */

export async function ops1EvaluateAllowlistAction(input: {
  sessionId: string;
  actionCandidateId: string;
  entries: unknown;
}): Promise<Ops1ActionResult<{ evaluation: ActionAllowlistEvaluation }>> {
  try {
    const sessionId = assertSessionId(input.sessionId);
    const actionCandidateId = assertActionCandidateId(input.actionCandidateId);
    const entries = assertAllowlistEntries(input.entries);
    const { evaluation } = evaluateAndPersistAllowlist({
      sessionId,
      actionCandidateId,
      entries,
    });
    return { ok: true, data: { evaluation } };
  } catch (error) {
    return fail(error);
  }
}

/* ─── OPS1 I5 — contract + bounded execution ─── */

export async function ops1GetRealCursorAvailabilityAction(): Promise<
  Ops1ActionResult<{
    flagEnabled: boolean;
    binPath: string | null;
    available: boolean;
  }>
> {
  try {
    return { ok: true, data: getRealCursorAvailability() };
  } catch (error) {
    return fail(error);
  }
}

export async function ops1CreateExecutionContractAction(input: {
  sessionId: string;
  actionCandidateId: string;
  actionObjective: string;
  actionInstructions: string;
  adapterMode?: "fixture" | "real";
}): Promise<Ops1ActionResult<{ contract: ExecutionContract }>> {
  try {
    const sessionId = assertSessionId(input.sessionId);
    const actionCandidateId = assertActionCandidateId(input.actionCandidateId);
    const { contract } = createExecutionContract({
      sessionId,
      actionCandidateId,
      actionObjective: assertActionField("Objectif", input.actionObjective),
      actionInstructions: assertActionField(
        "Instructions",
        input.actionInstructions,
      ),
      adapterMode: input.adapterMode === "real" ? "real" : "fixture",
    });
    return { ok: true, data: { contract } };
  } catch (error) {
    return fail(error);
  }
}

export async function ops1RecordExecutionGateAction(input: {
  sessionId: string;
  contractId: string;
  contractHash: string;
  actionCandidateId: string;
  actionVersion: number;
  baseHeadSha: string;
}): Promise<
  Ops1ActionResult<{
    gate: ExecutionGateRecord;
    contract: ExecutionContract;
  }>
> {
  try {
    const sessionId = assertSessionId(input.sessionId);
    const actionCandidateId = assertActionCandidateId(input.actionCandidateId);
    if (
      typeof input.contractId !== "string" ||
      typeof input.contractHash !== "string" ||
      typeof input.baseHeadSha !== "string" ||
      typeof input.actionVersion !== "number"
    ) {
      throw new Ops1Error("VALIDATION", "Paramètres de gate I5 invalides.");
    }
    const result = recordExecutionGate({
      sessionId,
      contractId: input.contractId,
      contractHash: input.contractHash,
      actionCandidateId,
      actionVersion: input.actionVersion,
      baseHeadSha: input.baseHeadSha,
    });
    return {
      ok: true,
      data: { gate: result.gate, contract: result.contract },
    };
  } catch (error) {
    return fail(error);
  }
}

export async function ops1RunExecutionAttemptAction(input: {
  sessionId: string;
  contractId: string;
  adapterMode?: "fixture" | "real";
}): Promise<
  Ops1ActionResult<{
    attempt: ExecutionAttempt;
    result: MinimalExecutionResult;
    adapterPayload: Record<string, unknown>;
  }>
> {
  try {
    const sessionId = assertSessionId(input.sessionId);
    if (typeof input.contractId !== "string" || !input.contractId) {
      throw new Ops1Error("VALIDATION", "contractId invalide.");
    }
    const result = await runExecutionAttempt({
      sessionId,
      contractId: input.contractId,
      adapterMode: input.adapterMode,
    });
    return {
      ok: true,
      data: {
        attempt: result.attempt,
        result: result.result,
        adapterPayload: result.adapterPayload,
      },
    };
  } catch (error) {
    return fail(error);
  }
}
