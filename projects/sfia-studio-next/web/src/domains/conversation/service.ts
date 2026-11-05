import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversations, messages } from "@/db/schema";
// db still used by getConversationId / listMessages
import { newId } from "@/lib/ids";
import { generateNoraReply } from "./nora-adapter";
import { getPreparationContext } from "@/domains/preparation/service";
import {
  maybeCapitalizeFromExchange,
  selectRelevantKnowledgeContext,
} from "@/domains/knowledge/service";
import { listDocuments, savePreparationDocument } from "@/domains/document/service";
import {
  commitTurnTerminal,
  markTurnUnknown,
  requireTurnOwnership,
  reserveTurnCommand,
  touchTurnLease,
  turnRaceHooks,
} from "./turn-command";
import { emitObs, newRequestId } from "@/lib/observability";
import { StudioError } from "@/lib/http-errors";

export async function listMessages(pilotId: string, preparationId: string) {
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.conversation) return [];
  return db
    .select()
    .from(messages)
    .where(eq(messages.conversationId, ctx.conversation.id))
    .orderBy(asc(messages.ordinal));
}

function explicitDocumentIntent(text: string): boolean {
  return (
    /\b(rédige|rédiger|écris|écrire|produis|produire|crée|créer)\b[\s\S]{0,40}\b(document|note|synthèse|rapport|spécification)\b/i.test(
      text,
    ) ||
    /\b(document|note de synthèse|rapport)\b[\s\S]{0,20}\b(s'il te plaît|stp|please)\b/i.test(text)
  );
}

function extractDocumentMarkdown(
  assistantText: string,
  userText: string,
): {
  title: string;
  content: string;
} | null {
  const fence = assistantText.match(/```(?:markdown|md)?\n([\s\S]+?)```/i);
  if (fence?.[1] && fence[1].trim().length > 40) {
    const body = fence[1].trim();
    const titleLine = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
    return { title: titleLine || "Document Nora", content: body };
  }
  const heading = assistantText.match(/(^|\n)#\s+[^\n]+[\s\S]{40,}/);
  if (heading?.[0]) {
    const body = heading[0].trim();
    const titleLine = body.match(/^#\s+(.+)$/m)?.[1]?.trim();
    return { title: titleLine || "Document Nora", content: body };
  }
  return {
    title: "Document demandé",
    content: `# Document demandé\n\n> Demande: ${userText.slice(0, 300)}\n\n${assistantText}`,
  };
}

export type TurnResult = {
  userMessageId?: string | null;
  assistantMessageId?: string | null;
  operationId: string;
  requestId: string;
  noraMode?: string;
  status?: string;
  generationId?: string | null;
  policy?: {
    version: string;
    profileType: string;
    profile: string;
    modelRequested: string;
    modelApplied: string | null;
    effortRequested: string;
    effortApplied: string | null;
    reasonCodes: string[];
  };
  attempts?: unknown[];
  toolCallsObserved?: number;
  d4CharsReturned?: number;
  streaming?: { attempted: boolean; delivered: boolean; notes: string | null };
  knowledgeSelection?: unknown;
  capitalisation?: unknown;
  capitalisationAttempted?: unknown;
  capitalisationLimit?: string;
  documentSave?: { status?: string; documentId?: string; revisionNumber?: number; reason?: string } | null;
  idempotentReplay: boolean;
  humanDecisionCreated: boolean;
  reconciled?: boolean;
};

export async function postUserMessageAndNora(
  pilotId: string,
  preparationId: string,
  content: string,
  opts?: { correlationKey?: string; clientTurnKey?: string; requestId?: string },
): Promise<TurnResult> {
  const requestId = opts?.requestId ?? newRequestId();
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.conversation) throw new StudioError("NOT_FOUND", "Préparation introuvable");

  const clientTurnKey =
    opts?.clientTurnKey?.trim() ||
    opts?.correlationKey?.trim() ||
    `turn-${newId("auto")}`;

  const reserved = await reserveTurnCommand({
    conversationId: ctx.conversation.id,
    ownerPilotId: pilotId,
    clientTurnKey,
    content,
  });

  if (reserved.kind === "replay") {
    emitObs({
      event_name: "d3.turn.replay",
      component: "d3.conversation",
      request_id: requestId,
      operation_id: reserved.operationId,
      outcome: reserved.status === "COMPLETE" ? "SUCCESS" : "UNKNOWN",
      meta: {
        status: reserved.status,
        reconciled: Boolean(reserved.reconciled),
      },
    });
    if (reserved.resultJson && reserved.status === "COMPLETE") {
      try {
        const parsed = JSON.parse(reserved.resultJson) as TurnResult;
        return {
          ...parsed,
          operationId: reserved.operationId,
          requestId,
          idempotentReplay: true,
          humanDecisionCreated: false,
          reconciled: reserved.reconciled,
        };
      } catch {
        /* fall through */
      }
    }
    // FAILED/UNKNOWN: never fabricate a new result from a terminal non-COMPLETE command.
    return {
      operationId: reserved.operationId,
      requestId,
      status: reserved.status,
      idempotentReplay: true,
      generationId: reserved.generationId,
      userMessageId: reserved.userMessageId,
      assistantMessageId: reserved.assistantMessageId,
      humanDecisionCreated: false,
      reconciled: reserved.reconciled,
      noraMode: reserved.status === "COMPLETE" ? "deterministic-fixture" : "replay-terminal",
    };
  }

  emitObs({
    event_name: "d3.turn.accepted",
    component: "d3.conversation",
    request_id: requestId,
    operation_id: reserved.operationId,
    outcome: "PARTIAL",
    meta: { client_turn_key_fp: reserved.requestFingerprint.slice(0, 12) },
  });

  const existing = await listMessages(pilotId, preparationId);
  const contextSnippets = existing
    .filter((m) => m.status === "COMPLETE" && m.id !== reserved.userMessageId)
    .slice(-6)
    .map((m) => `${m.role}: ${m.content.slice(0, 200)}`);

  const knowledge = await selectRelevantKnowledgeContext(pilotId, preparationId, content);

  const docs = await listDocuments(pilotId, preparationId);
  const docSnippets = docs.slice(0, 5).map((d) => {
    const rev = d.latestRevision;
    return `DOCUMENT[${d.document.id}] «${d.document.title}» v${rev?.revisionNumber ?? "?"} status=${rev?.status ?? "∅"}`;
  });

  let reply;
  try {
    // Heartbeat during long provider work so stale lease does not falsely orphan an active run.
    const leasePulse = setInterval(() => {
      void touchTurnLease(reserved.commandId, reserved.ownerToken);
    }, 60_000);
    try {
      reply = await generateNoraReply({
        userText: content,
        contextSnippets,
        knowledgeSnippets: [...knowledge.snippets, ...docSnippets],
        toolScope: {
          pilotId,
          preparationId,
          operationId: reserved.operationId,
        },
      });
    } finally {
      clearInterval(leasePulse);
    }
  } catch (e) {
    await markTurnUnknown(reserved.commandId, "PROVIDER_EXCEPTION", reserved.ownerToken);
    emitObs({
      event_name: "d3.turn.unknown",
      component: "d3.conversation",
      request_id: requestId,
      operation_id: reserved.operationId,
      outcome: "UNKNOWN",
      error_category: "PROVIDER_EXCEPTION",
    });
    throw e;
  }

  if (turnRaceHooks.afterGenerateBeforeEffects) {
    await turnRaceHooks.afterGenerateBeforeEffects();
  }

  // Ownership may have been revoked/reconciled during generation — no COMPLETE, no D4.
  if (!(await requireTurnOwnership(reserved.commandId, reserved.ownerToken))) {
    emitObs({
      event_name: "d3.turn.ownership_lost",
      component: "d3.conversation",
      request_id: requestId,
      operation_id: reserved.operationId,
      generation_id: reply.generationId,
      outcome: "UNKNOWN",
      error_category: "OWNERSHIP_LOST_AFTER_GENERATE",
    });
    return {
      operationId: reserved.operationId,
      requestId,
      status: "UNKNOWN",
      generationId: reply.generationId,
      userMessageId: reserved.userMessageId,
      assistantMessageId: null,
      idempotentReplay: false,
      humanDecisionCreated: false,
      noraMode: reply.mode,
    };
  }

  const assistantId = newId("msg");

  let capitalisation: Awaited<ReturnType<typeof maybeCapitalizeFromExchange>> = {
    capitalisations: [],
    selectionMethod: "lexical-heuristic",
    selectionLimit:
      "Capitalisation heuristique — pas une autorité épistémique; LIVE COG requis pour qualification.",
    humanDecisionCreated: false,
  };
  let capitalisationError: string | undefined;
  let documentSave: Awaited<ReturnType<typeof savePreparationDocument>> | null = null;
  let documentSaveUnknown = false;
  let ownershipLostBeforeD4 = false;

  if (reply.status === "COMPLETE") {
    if (turnRaceHooks.beforeD4Effect) {
      await turnRaceHooks.beforeD4Effect();
    }
    if (!(await requireTurnOwnership(reserved.commandId, reserved.ownerToken))) {
      ownershipLostBeforeD4 = true;
    } else {
      try {
        capitalisation = await maybeCapitalizeFromExchange(pilotId, preparationId, {
          userText: content,
          assistantText: reply.content,
          generationId: reply.generationId,
          userMessageId: reserved.userMessageId,
        });
      } catch {
        capitalisationError = "CAPITALISATION_EXCEPTION";
        emitObs({
          event_name: "d3.turn.capitalisation_failed",
          component: "d3.conversation",
          request_id: requestId,
          operation_id: reserved.operationId,
          generation_id: reply.generationId,
          outcome: "UNKNOWN",
          error_category: "CAPITALISATION_EXCEPTION",
        });
      }

      if (explicitDocumentIntent(content) && !ownershipLostBeforeD4) {
        const extracted = extractDocumentMarkdown(reply.content, content);
        if (extracted) {
          try {
            documentSave = await savePreparationDocument(
              pilotId,
              preparationId,
              extracted.title,
              extracted.content,
              undefined,
              {
                correlationKey: opts?.correlationKey
                  ? `doc:${opts.correlationKey}`
                  : `doc:${reply.generationId}`,
                provenance: {
                  sourceKind: "nora",
                  generationId: reply.generationId,
                  userMessageId: reserved.userMessageId,
                  explicitRequest: true,
                },
                scope: "document",
                turnFence: {
                  commandId: reserved.commandId,
                  ownerToken: reserved.ownerToken,
                  beforeFenceCheck: turnRaceHooks.beforeD4Effect,
                },
              },
            );
            if (documentSave.status === "FAILED" && documentSave.reason === "TURN_OWNERSHIP_LOST") {
              ownershipLostBeforeD4 = true;
              documentSave = null;
            } else if (documentSave.status !== "AVAILABLE") {
              documentSaveUnknown =
                documentSave.status === "UNKNOWN" || documentSave.status === "FAILED";
            }
          } catch {
            documentSave = { status: "UNKNOWN", reason: "DOCUMENT_SAVE_EXCEPTION" } as Awaited<
              ReturnType<typeof savePreparationDocument>
            >;
            documentSaveUnknown = true;
            emitObs({
              event_name: "d3.turn.document_save_failed",
              component: "d3.conversation",
              request_id: requestId,
              operation_id: reserved.operationId,
              generation_id: reply.generationId,
              outcome: "UNKNOWN",
              error_category: "DOCUMENT_SAVE_EXCEPTION",
            });
          }
        }
      }
    }
  }

  const confirmedCapitalisations = capitalisation.capitalisations.filter(
    (c) => c.status === "AVAILABLE",
  );

  let turnStatus: "COMPLETE" | "FAILED" | "UNKNOWN" =
    ownershipLostBeforeD4
      ? "UNKNOWN"
      : reply.status === "COMPLETE"
        ? "COMPLETE"
        : reply.status === "UNKNOWN"
          ? "UNKNOWN"
          : "FAILED";

  if (
    !ownershipLostBeforeD4 &&
    reply.status === "COMPLETE" &&
    (documentSaveUnknown || capitalisationError) &&
    explicitDocumentIntent(content)
  ) {
    turnStatus = "UNKNOWN";
  } else if (
    !ownershipLostBeforeD4 &&
    reply.status === "COMPLETE" &&
    capitalisationError &&
    !explicitDocumentIntent(content)
  ) {
    turnStatus = "UNKNOWN";
  }

  // Lost ownership ⇒ never claim COMPLETE even if reply looked complete.
  if (ownershipLostBeforeD4) {
    turnStatus = "UNKNOWN";
  }

  const resultPayload: TurnResult = {
    userMessageId: reserved.userMessageId,
    assistantMessageId: ownershipLostBeforeD4 ? null : assistantId,
    operationId: reserved.operationId,
    requestId,
    noraMode: reply.mode,
    status: turnStatus === "COMPLETE" ? reply.status : turnStatus,
    generationId: reply.generationId,
    policy: {
      version: reply.policy.policyVersion,
      profileType: reply.policy.profileType,
      profile: reply.policy.profile,
      modelRequested: reply.modelRequested,
      modelApplied: reply.modelApplied,
      effortRequested: reply.effortRequested,
      effortApplied: reply.effortApplied,
      reasonCodes: reply.policy.reasonCodes,
    },
    attempts: reply.attempts,
    toolCallsObserved: reply.toolCallsObserved,
    d4CharsReturned: reply.d4CharsReturned,
    streaming: {
      attempted: reply.streamingAttempted ?? false,
      delivered: reply.streamingDelivered ?? false,
      notes: reply.streamingNotes ?? null,
    },
    knowledgeSelection: {
      ...knowledge.counts,
      selectionMethod: knowledge.selectionMethod,
      selectionLimit: knowledge.selectionLimit,
    },
    capitalisation: ownershipLostBeforeD4 ? [] : confirmedCapitalisations,
    capitalisationAttempted: ownershipLostBeforeD4 ? [] : capitalisation.capitalisations,
    capitalisationLimit: ownershipLostBeforeD4
      ? "OWNERSHIP_LOST"
      : capitalisationError ?? capitalisation.selectionLimit,
    documentSave: ownershipLostBeforeD4 ? null : documentSave,
    idempotentReplay: false,
    humanDecisionCreated: false,
  };

  if (turnRaceHooks.beforeTerminalCommit) {
    await turnRaceHooks.beforeTerminalCommit();
  }

  const applied = await commitTurnTerminal({
    commandId: reserved.commandId,
    ownerToken: reserved.ownerToken,
    status: turnStatus,
    conversationId: ctx.conversation.id,
    assistant: ownershipLostBeforeD4
      ? undefined
      : {
          id: assistantId,
          content: reply.content,
          messageStatus: reply.status,
          generationId: reply.generationId,
          ordinal: reserved.ordinalAssistant,
        },
    generationId: reply.generationId,
    resultJson: JSON.stringify(resultPayload),
    errorCategory:
      turnStatus === "COMPLETE"
        ? undefined
        : ownershipLostBeforeD4
          ? "OWNERSHIP_LOST"
          : capitalisationError ?? reply.status,
  });

  if (!applied.applied) {
    emitObs({
      event_name: "d3.turn.complete_cas_miss",
      component: "d3.conversation",
      request_id: requestId,
      operation_id: reserved.operationId,
      generation_id: reply.generationId,
      outcome: "UNKNOWN",
      error_category: "COMPLETE_CAS_MISSED",
    });
    // Never return COMPLETE when ownership CAS failed.
    return {
      ...resultPayload,
      status: "UNKNOWN",
      assistantMessageId: null,
      documentSave: null,
      capitalisation: [],
    };
  }

  emitObs({
    event_name: "d3.turn.completed",
    component: "d3.conversation",
    request_id: requestId,
    operation_id: reserved.operationId,
    generation_id: reply.generationId,
    outcome:
      turnStatus === "COMPLETE" ? "SUCCESS" : turnStatus === "UNKNOWN" ? "UNKNOWN" : "FAILED",
    policy_version: reply.policy.policyVersion,
    profile_type:
      reply.policy.profileType === "TEST_BOUNDARY" ? "TEST_BOUNDARY" : "OPERATIONAL",
    meta: {
      attempts: reply.attempts.length,
      tool_calls: reply.toolCallsObserved,
      turn_status: turnStatus,
      cas_applied: applied.applied,
    },
  });

  return resultPayload;
}

export async function getConversationId(pilotId: string, preparationId: string) {
  const row = (
    await db
      .select()
      .from(conversations)
      .where(
        and(eq(conversations.preparationId, preparationId), eq(conversations.ownerPilotId, pilotId)),
      )
      .limit(1)
  )[0];
  return row?.id ?? null;
}
