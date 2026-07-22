import { buildFixtureAssistantReply } from "../fixtureReply";
import { Ops1Error, toSafeClientError } from "../errors";
import {
  appendTurn,
  completeConversationAttemptFailure,
  completeConversationAttemptSuccess,
  getSession,
  listTurns,
  startConversationAttempt,
} from "../repository";
import type {
  ConversationMode,
  ConversationUsageCounters,
  JournalTurn,
} from "../types";
import {
  assertJournalMatchesMode,
  buildProviderMessagesFromJournal,
} from "./types";
import { resolveConversationProvider } from "./provider";
import type { ConversationProvider } from "./types";
import { runToolCallingLoop } from "./toolLoop";
import { createToolCallId, routeToolCall } from "../tools/toolRouter";
import { openOps1Db, nowIsoWithOffset } from "../db";
import { createEventId } from "../ids";
import {
  buildSfiaSystemPreamble,
  ensureSfiaContext,
} from "../sfia/sessionContext";
import { parseProposalFromAssistantText } from "../sfia/proposalSchema";
import { compileSfiaActionProposal } from "../sfia/actionCompiler";
import { resolveWorkspaceRootFromAppCwd } from "../allowlistEvaluation";
import type {
  SfiaActionProposal,
  SfiaCanonicalContext,
  SfiaCompilationResult,
} from "../sfia/types";

export interface SendMessageResult {
  userTurn: JournalTurn;
  assistantTurn: JournalTurn | null;
  assistantError: string | null;
  usage: ConversationUsageCounters | null;
  mode: ConversationMode;
  providerId: string | null;
  toolRounds?: number;
  toolCalls?: number;
  sfiaContext?: SfiaCanonicalContext | null;
  sfiaProposal?: SfiaActionProposal | null;
  sfiaCompilation?: SfiaCompilationResult | null;
}

function durationMs(startedAt: string, completedAt: string): number | null {
  const a = Date.parse(startedAt);
  const b = Date.parse(completedAt);
  if (Number.isNaN(a) || Number.isNaN(b)) return null;
  return Math.max(0, b - a);
}

function emitSfia(
  sessionId: string,
  type: "SFIA_PROPOSAL_RECEIVED" | "SFIA_PROPOSAL_INVALID",
  detail: Record<string, unknown>,
): void {
  const db = openOps1Db();
  db.prepare(
    `INSERT INTO session_events (event_id, session_id, type, created_at, detail)
     VALUES (?, ?, ?, ?, ?)`,
  ).run(
    createEventId(),
    sessionId,
    type,
    nowIsoWithOffset(),
    JSON.stringify(detail),
  );
}

async function runFixtureWithOptionalTools(
  sessionId: string,
  userContent: string,
): Promise<{ reply: string; toolCalls: number }> {
  const markers: Array<{
    marker: RegExp;
    name: string;
    args: Record<string, unknown>;
  }> = [
    {
      marker: /__CT_TOOL_GIT_STATUS__/i,
      name: "git_local_get_status",
      args: {},
    },
    {
      marker: /__CT_TOOL_GIT_HEAD__/i,
      name: "git_local_get_head",
      args: {},
    },
    {
      marker: /__CT_TOOL_GITHUB_REPO__/i,
      name: "github_get_repository",
      args: {},
    },
    {
      marker: /__CT_TOOL_DENIED_PATH__/i,
      name: "git_local_read_file",
      args: { path: ".env" },
    },
  ];

  const db = openOps1Db();
  const parts: string[] = [buildFixtureAssistantReply(userContent)];
  let toolCalls = 0;
  for (const m of markers) {
    if (!m.marker.test(userContent)) continue;
    toolCalls += 1;
    const result = await routeToolCall(
      {
        toolCallId: createToolCallId(),
        name: m.name,
        arguments: m.args,
        sessionId,
      },
      { db },
    );
    parts.push(
      result.ok
        ? `[FIXTURE TOOL OK] ${m.name}: ${result.summary}`
        : `[FIXTURE TOOL ${result.status.toUpperCase()}] ${m.name}: ${result.errorCode} — ${result.message}`,
    );
  }

  if (/__SFIA_PROPOSE_CREATE_MD__/i.test(userContent)) {
    const ctx = ensureSfiaContext({ sessionId });
    const content =
      "# Preuve Control Tower\n\nCe fichier a été créé pendant la validation live du vertical slice Control Tower.\n";
    const proposalJson = {
      kind: "action_proposed",
      proposalId: `sfia-prop-fixture-${Date.now()}`,
      sessionId,
      contextId: ctx.contextId,
      objective:
        "Créer projects/campus360/05-control-tower-live-proof.md avec le contenu exact demandé.",
      rationale: "Demande Morris bornée — CREATE Markdown Campus360.",
      cycle: "Delivery documentaire",
      profile: "Critical",
      profileJustification:
        "Exécution Cursor potentielle + gouvernance SFIA",
      blocks: ["QA / validation", "sécurité"],
      project: "campus360",
      operations: ["CREATE"],
      files: [
        {
          path: "projects/campus360/05-control-tower-live-proof.md",
          operation: "CREATE",
          exactContent: content,
        },
      ],
      expectedEffects: ["create markdown file in worktree after GO"],
      excludedEffects: ["commit", "push", "PR", "merge"],
      requiredGates: ["GO Cursor"],
      stopConditions: ["Aucun effet distant"],
      cursorRequired: true,
      reviewPackLevel: "full",
      reviewHandoffRequired: true,
      userVisibleSummary:
        "ActionCandidate proposée: CREATE 05-control-tower-live-proof.md — aucune exécution.",
      exactRequestedContent: content,
      confidence: 0.95,
      unresolvedQuestions: [],
    };
    parts.push("Proposition SFIA structurée:");
    parts.push("```json");
    parts.push(JSON.stringify(proposalJson, null, 2));
    parts.push("```");
  }

  if (/__SFIA_PROPOSE_COMMIT__/i.test(userContent)) {
    const ctx = ensureSfiaContext({ sessionId });
    parts.push("```json");
    parts.push(
      JSON.stringify(
        {
          kind: "action_proposed",
          proposalId: `sfia-prop-bad-${Date.now()}`,
          sessionId,
          contextId: ctx.contextId,
          objective: "Persister les changements via commit puis push distant",
          rationale: "invalid — doit être refusé par le compilateur",
          cycle: "Delivery",
          profile: "Standard",
          profileJustification: "n/a",
          blocks: [],
          project: "campus360",
          operations: ["commit", "push"],
          files: [
            {
              path: "projects/campus360/README.md",
              operation: "MODIFY",
              exactContent: "x",
            },
          ],
          expectedEffects: [],
          excludedEffects: [],
          requiredGates: [],
          stopConditions: [],
          cursorRequired: false,
          reviewPackLevel: "light",
          reviewHandoffRequired: false,
          userVisibleSummary: "Proposition commit puis push (doit être refusée)",
          confidence: 0.5,
          unresolvedQuestions: [],
        },
        null,
        2,
      ),
    );
    parts.push("```");
  }

  return { reply: parts.join("\n"), toolCalls };
}

function processSfiaProposalFromText(input: {
  sessionId: string;
  text: string;
  context: SfiaCanonicalContext;
}): {
  proposal: SfiaActionProposal | null;
  compilation: SfiaCompilationResult | null;
} {
  const parsed = parseProposalFromAssistantText(input.text, {
    sessionId: input.sessionId,
    contextId: input.context.contextId,
  });
  if (!parsed.ok) {
    emitSfia(input.sessionId, "SFIA_PROPOSAL_INVALID", {
      reason: parsed.reason,
      contextId: input.context.contextId,
    });
    return { proposal: null, compilation: null };
  }
  emitSfia(input.sessionId, "SFIA_PROPOSAL_RECEIVED", {
    proposalId: parsed.proposal.proposalId,
    kind: parsed.proposal.kind,
    contextId: input.context.contextId,
  });
  const compilation = compileSfiaActionProposal({
    proposal: parsed.proposal,
    context: input.context,
    workspaceRoot: resolveWorkspaceRootFromAppCwd(),
    persist: parsed.proposal.kind === "action_proposed",
  });
  return { proposal: parsed.proposal, compilation };
}

export async function sendConversationMessage(input: {
  sessionId: string;
  content: string;
  requestedMode?: ConversationMode;
  provider?: ConversationProvider;
  enableTools?: boolean;
  enableSfia?: boolean;
}): Promise<SendMessageResult> {
  const session = getSession(input.sessionId);
  if (!session) {
    throw new Ops1Error("NOT_FOUND", "Session introuvable.");
  }
  if (session.status !== "OPEN") {
    throw new Ops1Error(
      "CONFLICT",
      "La session n’accepte plus de tours (statut non OPEN).",
    );
  }

  const mode = session.conversationMode;

  if (input.requestedMode && input.requestedMode !== mode) {
    throw new Ops1Error(
      "CONFLICT",
      `Mode refusé : cette session est verrouillée en « ${mode} ». Créez une nouvelle session pour changer de mode.`,
    );
  }

  assertJournalMatchesMode(listTurns(input.sessionId), mode);

  if (mode === "fixture") {
    const { turn: userTurn } = appendTurn({
      sessionId: input.sessionId,
      role: "user",
      content: input.content,
      fixture: true,
    });

    let assistantTurn: JournalTurn | null = null;
    let assistantError: string | null = null;
    let toolCalls = 0;
    let sfiaContext: SfiaCanonicalContext | null = null;
    let sfiaProposal: SfiaActionProposal | null = null;
    let sfiaCompilation: SfiaCompilationResult | null = null;
    try {
      const { reply, toolCalls: tc } = await runFixtureWithOptionalTools(
        input.sessionId,
        input.content,
      );
      toolCalls = tc;
      const appended = appendTurn({
        sessionId: input.sessionId,
        role: "assistant_fixture",
        content: reply,
        fixture: true,
      });
      assistantTurn = appended.turn;

      if (
        input.enableSfia !== false &&
        (/__SFIA_PROPOSE_/i.test(input.content) ||
          /```json[\s\S]*"kind"\s*:/i.test(reply))
      ) {
        sfiaContext = ensureSfiaContext({ sessionId: input.sessionId });
        const processed = processSfiaProposalFromText({
          sessionId: input.sessionId,
          text: reply,
          context: sfiaContext,
        });
        sfiaProposal = processed.proposal;
        sfiaCompilation = processed.compilation;
      }
    } catch (error) {
      assistantError = toSafeClientError(error).message;
    }

    return {
      userTurn,
      assistantTurn,
      assistantError,
      usage: null,
      mode: "fixture",
      providerId: null,
      toolRounds: toolCalls > 0 ? 1 : 0,
      toolCalls,
      sfiaContext,
      sfiaProposal,
      sfiaCompilation,
    };
  }

  const provider = input.provider ?? resolveConversationProvider();
  const enableSfia = input.enableSfia !== false;
  const sfiaContext = enableSfia
    ? ensureSfiaContext({ sessionId: input.sessionId })
    : null;

  const { turn: userTurn } = appendTurn({
    sessionId: input.sessionId,
    role: "user",
    content: input.content,
    fixture: false,
  });

  const attempt = startConversationAttempt({
    sessionId: input.sessionId,
    userTurnId: userTurn.turnId,
    provider: provider.providerId,
  });

  console.info(
    "[ops1] CONVERSATION_ATTEMPT_STARTED",
    input.sessionId,
    attempt.attemptId,
    provider.providerId,
  );

  try {
    const history = listTurns(input.sessionId);
    let messages = buildProviderMessagesFromJournal(history, "live");
    if (sfiaContext) {
      messages = [
        {
          role: "user",
          content: `[SFIA_SYSTEM_CONTEXT]\n${buildSfiaSystemPreamble(sfiaContext)}`,
        },
        {
          role: "assistant",
          content:
            "Contexte SFIA reçu. Je qualifierai sans exécuter et produirai une SfiaActionProposal JSON si une action est pertinente.",
        },
        ...messages,
      ];
    }
    const loop = await runToolCallingLoop({
      sessionId: input.sessionId,
      messages,
      provider,
      enableTools: input.enableTools !== false,
    });

    const { turn: assistantTurn } = appendTurn({
      sessionId: input.sessionId,
      role: "assistant_live",
      content: loop.text,
      fixture: false,
    });

    let sfiaProposal: SfiaActionProposal | null = null;
    let sfiaCompilation: SfiaCompilationResult | null = null;
    if (sfiaContext) {
      const processed = processSfiaProposalFromText({
        sessionId: input.sessionId,
        text: loop.text,
        context: sfiaContext,
      });
      sfiaProposal = processed.proposal;
      sfiaCompilation = processed.compilation;
    }

    const finalized = completeConversationAttemptSuccess({
      attemptId: attempt.attemptId,
      sessionId: input.sessionId,
      assistantTurnId: assistantTurn.turnId,
      providerResponseId: loop.usage.providerResponseId,
      model: loop.usage.model,
      inputTokens: loop.usage.inputTokens,
      outputTokens: loop.usage.outputTokens,
      totalTokens: loop.usage.totalTokens,
    });

    console.info(
      "[ops1] CONVERSATION_ATTEMPT_SUCCEEDED",
      input.sessionId,
      attempt.attemptId,
      finalized.totalTokens,
      `tools=${loop.toolCalls}`,
      sfiaCompilation ? `sfia=${sfiaCompilation.status}` : "",
    );

    return {
      userTurn,
      assistantTurn,
      assistantError: null,
      usage: {
        inputTokens: finalized.inputTokens,
        outputTokens: finalized.outputTokens,
        totalTokens: finalized.totalTokens,
        model: finalized.model,
        provider: finalized.provider,
        attemptId: finalized.attemptId,
        durationMs: durationMs(
          finalized.requestStartedAt,
          finalized.requestCompletedAt ?? finalized.requestStartedAt,
        ),
      },
      mode: "live",
      providerId: provider.providerId,
      toolRounds: loop.toolRounds,
      toolCalls: loop.toolCalls,
      sfiaContext,
      sfiaProposal,
      sfiaCompilation,
    };
  } catch (error) {
    const safe = toSafeClientError(error);
    completeConversationAttemptFailure({
      attemptId: attempt.attemptId,
      sessionId: input.sessionId,
      errorCode: safe.code,
    });
    console.error(
      "[ops1] CONVERSATION_ATTEMPT_FAILED",
      input.sessionId,
      attempt.attemptId,
      safe.code,
    );
    return {
      userTurn,
      assistantTurn: null,
      assistantError: safe.message,
      usage: null,
      mode: "live",
      providerId: provider.providerId,
      sfiaContext,
    };
  }
}
