import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversations, messages } from "@/db/schema";
// db still used by getConversationId / listMessages
import { newId } from "@/lib/ids";
import { generateNoraReply } from "./nora-adapter";
import { getPreparationContext } from "@/domains/preparation/service";
import {
  maybeCapitalizeFromExchange,
  reconstituteConfirmedD4Effects,
  selectRelevantKnowledgeContext,
} from "@/domains/knowledge/service";
import {
  listDocuments,
  reviseDocument,
  savePreparationDocument,
} from "@/domains/document/service";
import {
  bindTurnGenerationId,
  commitTurnTerminal,
  markTurnUnknown,
  requireTurnOwnership,
  reserveTurnCommand,
  touchTurnLease,
  turnRaceHooks,
} from "./turn-command";
import { emitObs, newRequestId } from "@/lib/observability";
import { StudioError } from "@/lib/http-errors";
import {
  applyConversationalAuthority,
  reconstituteConversationalAuthority,
  type ConversationalAuthorityOutcome,
} from "@/domains/pilotage/conversation-authority";
import { buildNoraPilotageContext } from "@/domains/pilotage/nora-context";
import {
  appendDocumentEffectAck,
  applyTargetedSectionRevision,
  assertSectionScope,
  qualifyDocumentAct,
  resolveReviseTarget,
  type DocumentEffectSummary,
} from "./document-act";

export async function listMessages(pilotId: string, preparationId: string) {
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.conversation) return [];
  return db
    .select()
    .from(messages)
    .where(eq(messages.conversationId, ctx.conversation.id))
    .orderBy(asc(messages.ordinal));
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
  documentSave?: {
    status?: string;
    documentId?: string;
    revisionId?: string;
    revisionNumber?: number;
    baseRevisionId?: string;
    reason?: string;
    act?: "CREATE" | "REVISE";
    idempotentReplay?: boolean;
  } | null;
  idempotentReplay: boolean;
  /**
   * True only when a HumanDecision id was actually produced (APPLIED/ALREADY_APPLIED).
   * Never conflated with "intent detected" or "command attempted".
   */
  humanDecisionCreated: boolean;
  /** Honest D5/D6 bridge outcome for this USER turn (absent when no project / no act). */
  pilotageEffect?: {
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
    effects?: Array<{ effectKind: string; targetRef: string }>;
  } | null;
  reconciled?: boolean;
};

function pilotageEffectFromAuthority(
  authority: ConversationalAuthorityOutcome | null,
): TurnResult["pilotageEffect"] {
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
    effects: authority.command?.effects?.map((e) => ({
      effectKind: e.effectKind,
      targetRef: e.targetRef,
    })),
  };
}

async function resolvePilotageEffectForReplay(input: {
  pilotId: string;
  projectId: string | null | undefined;
  clientTurnKey?: string | null;
  userMessageId?: string | null;
  fromJson: TurnResult["pilotageEffect"] | null | undefined;
  humanDecisionCreated: boolean;
}): Promise<{ pilotageEffect: TurnResult["pilotageEffect"]; humanDecisionCreated: boolean }> {
  if (input.fromJson?.attempted && input.fromJson.status) {
    return {
      pilotageEffect: input.fromJson,
      humanDecisionCreated: input.humanDecisionCreated || Boolean(input.fromJson.decisionId),
    };
  }
  if (!input.projectId) {
    return { pilotageEffect: input.fromJson ?? null, humanDecisionCreated: input.humanDecisionCreated };
  }
  const reconstituted = await reconstituteConversationalAuthority({
    pilotId: input.pilotId,
    projectId: input.projectId,
    clientTurnKey: input.clientTurnKey,
    userMessageId: input.userMessageId,
  });
  if (!reconstituted) {
    return { pilotageEffect: input.fromJson ?? null, humanDecisionCreated: input.humanDecisionCreated };
  }
  const effect = pilotageEffectFromAuthority(reconstituted);
  return {
    pilotageEffect: effect,
    humanDecisionCreated:
      input.humanDecisionCreated || Boolean(reconstituted.humanDecisionCreated),
  };
}

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
          // Preserve factual decision flag from the stored terminal payload.
          humanDecisionCreated: Boolean(parsed.humanDecisionCreated),
          reconciled: reserved.reconciled,
        };
      } catch {
        /* fall through */
      }
    }
    // FAILED/UNKNOWN: never fabricate COMPLETE; reconstitute durable D4 + D5/D6 from DB.
    if (reserved.status === "UNKNOWN" || reserved.status === "FAILED") {
      const reconstituted = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
        generationId: reserved.generationId,
        userMessageId: reserved.userMessageId,
      });
      let replayPilotage: TurnResult["pilotageEffect"] = null;
      let replayDecision = false;
      if (reserved.resultJson) {
        try {
          const parsed = JSON.parse(reserved.resultJson) as TurnResult;
          replayPilotage = parsed.pilotageEffect ?? null;
          replayDecision = Boolean(parsed.humanDecisionCreated);
        } catch {
          /* ignore */
        }
      }
      const resolved = await resolvePilotageEffectForReplay({
        pilotId,
        projectId: ctx.project?.id,
        clientTurnKey: reserved.clientTurnKey ?? clientTurnKey,
        userMessageId: reserved.userMessageId,
        fromJson: replayPilotage,
        humanDecisionCreated: replayDecision,
      });
      return {
        operationId: reserved.operationId,
        requestId,
        status: reserved.status,
        idempotentReplay: true,
        generationId: reserved.generationId,
        userMessageId: reserved.userMessageId,
        assistantMessageId: reserved.assistantMessageId,
        humanDecisionCreated: resolved.humanDecisionCreated,
        pilotageEffect: resolved.pilotageEffect,
        reconciled: reserved.reconciled,
        noraMode: "replay-terminal",
        capitalisation: reconstituted.capitalisation,
        capitalisationLimit: reconstituted.capitalisationLimit,
        documentSave: reconstituted.documentSave,
      };
    }
    return {
      operationId: reserved.operationId,
      requestId,
      status: reserved.status,
      idempotentReplay: true,
      generationId: reserved.generationId,
      userMessageId: reserved.userMessageId,
      assistantMessageId: reserved.assistantMessageId,
      humanDecisionCreated: false,
      pilotageEffect: null,
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

  /**
   * F01/F02 — USER → D5/D6 before Nora provider call.
   * Message is already COMPLETE; business TX is short and separate from Nora.
   * Lost ownership ⇒ skip mutation (do not invent a late second command).
   */
  let authority: ConversationalAuthorityOutcome | null = null;
  const stillOwnedBeforeAuthority = await requireTurnOwnership(
    reserved.commandId,
    reserved.ownerToken,
  );
  if (stillOwnedBeforeAuthority && ctx.project?.id) {
    authority = await applyConversationalAuthority({
      pilotId,
      projectId: ctx.project.id,
      userMessageId: reserved.userMessageId,
      content,
      clientTurnKey,
    });
    emitObs({
      event_name: "d3.turn.conversational_authority",
      component: "d3.conversation",
      request_id: requestId,
      operation_id: reserved.operationId,
      outcome: authority.attempted
        ? authority.command?.status === "APPLIED" || authority.command?.status === "ALREADY_APPLIED"
          ? "SUCCESS"
          : authority.command?.status === "UNKNOWN"
            ? "UNKNOWN"
            : "FAILED"
        : "PARTIAL",
      meta: {
        attempted: authority.attempted,
        intent_clarity: authority.intentClarity,
        operation: authority.operation ?? null,
        command_status: authority.command?.status ?? null,
        reason_code: authority.command?.reasonCode ?? null,
        decision_id: authority.decisionId,
        source: authority.source,
      },
    });
  }

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

  // Rebuild after authority so Nora observes confirmed D5/D6 state (projection only).
  const pilotageCtx = await buildNoraPilotageContext(pilotId, preparationId, content);
  const authoritySnippets: string[] = [];
  if (authority?.attempted && authority.command) {
    authoritySnippets.push(
      "### Effet métier confirmé (D5/D6 — pas une permission Nora)",
      `status=${authority.command.status} operation=${authority.operation ?? "?"} reasonCode=${authority.command.reasonCode ?? "∅"} decisionId=${authority.decisionId ?? "∅"}`,
    );
    if (authority.command.effects?.length) {
      authoritySnippets.push(
        `effects=${authority.command.effects.map((e) => `${e.effectKind}:${e.targetRef}`).join(",")}`,
      );
    }
  } else if (authority?.clarification) {
    authoritySnippets.push(
      "### Clarification pilotage requise",
      authority.clarification.slice(0, 300),
    );
  }

  let reply;
  try {
    // C02 fault boundary: after authority, before/during Nora — same recovery path.
    if (turnRaceHooks.afterAuthorityBeforeNora) {
      await turnRaceHooks.afterAuthorityBeforeNora();
    }
    // Heartbeat during long provider work so stale lease does not falsely orphan an active run.
    const leasePulse = setInterval(() => {
      void touchTurnLease(reserved.commandId, reserved.ownerToken);
    }, 60_000);
    try {
      reply = await generateNoraReply({
        userText: content,
        contextSnippets,
        knowledgeSnippets: [...knowledge.snippets, ...docSnippets],
        pilotageSnippets: [...pilotageCtx.snippets, ...authoritySnippets],
        // C01: same structured Level A contract for fixture and LIVE — never authority.
        levelASignals: pilotageCtx.levelASignals,
        // Requested level only. The adapter emits DELIVERED after a real generate.
        ckiDelivery: pilotageCtx.ckiDelivery,
        toolScope: {
          pilotId,
          preparationId,
          operationId: reserved.operationId,
          projectId: ctx.project?.id,
        },
      });
    } finally {
      clearInterval(leasePulse);
    }
  } catch {
    // C02 — Nora failure must not erase a already-committed D5/D6 effect.
    // Persist an honest UNKNOWN turn payload that still surfaces pilotageEffect.
    const unknownPayload: TurnResult = {
      userMessageId: reserved.userMessageId,
      assistantMessageId: null,
      operationId: reserved.operationId,
      requestId,
      status: "UNKNOWN",
      idempotentReplay: false,
      humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
      pilotageEffect: pilotageEffectFromAuthority(authority),
      noraMode: "provider-exception",
    };
    try {
      await markTurnUnknown(
        reserved.commandId,
        "PROVIDER_EXCEPTION",
        reserved.ownerToken,
        JSON.stringify(unknownPayload),
      );
    } catch {
      /* ownership may already be lost — still return reconstituted truth below */
    }
    emitObs({
      event_name: "d3.turn.unknown",
      component: "d3.conversation",
      request_id: requestId,
      operation_id: reserved.operationId,
      outcome: "UNKNOWN",
      error_category: "PROVIDER_EXCEPTION",
    });
    const resolved = await resolvePilotageEffectForReplay({
      pilotId,
      projectId: ctx.project?.id,
      clientTurnKey,
      userMessageId: reserved.userMessageId,
      fromJson: unknownPayload.pilotageEffect,
      humanDecisionCreated: unknownPayload.humanDecisionCreated,
    });
    return {
      ...unknownPayload,
      humanDecisionCreated: resolved.humanDecisionCreated,
      pilotageEffect: resolved.pilotageEffect,
    };
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

  // Bind generationId while ownership holds so D4 provenance + UNKNOWN reconstitution share one key.
  await bindTurnGenerationId(reserved.commandId, reserved.ownerToken, reply.generationId);

  const assistantId = newId("msg");

  let capitalisation: Awaited<ReturnType<typeof maybeCapitalizeFromExchange>> = {
    capitalisations: [],
    selectionMethod: "lexical-heuristic",
    selectionLimit:
      "Capitalisation heuristique — pas une autorité épistémique; LIVE COG requis pour qualification.",
    humanDecisionCreated: false,
    ownershipLost: false,
  };
  let capitalisationError: string | undefined;
  type DocumentSaveResult = {
    status: string;
    documentId?: string;
    revisionId?: string;
    revisionNumber?: number;
    baseRevisionId?: string;
    reason?: string;
    act?: "CREATE" | "REVISE";
    idempotentReplay?: boolean;
  };
  let documentSave: DocumentSaveResult | null = null;
  let documentSaveUnknown = false;
  let ownershipLostBeforeD4 = false;
  const documentAct = qualifyDocumentAct(content);

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
          turnFence: {
            commandId: reserved.commandId,
            ownerToken: reserved.ownerToken,
            beforeFenceCheck: turnRaceHooks.beforeD4Effect,
          },
        });
        if (capitalisation.ownershipLost) {
          ownershipLostBeforeD4 = true;
        }
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

      if (documentAct.kind === "CREATE" && !ownershipLostBeforeD4) {
        const extracted = extractDocumentMarkdown(reply.content, content);
        if (extracted) {
          try {
            const saved = await savePreparationDocument(
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
                  act: "CREATE",
                },
                scope: "document",
                turnFence: {
                  commandId: reserved.commandId,
                  ownerToken: reserved.ownerToken,
                  beforeFenceCheck: turnRaceHooks.beforeD4Effect,
                },
              },
            );
            documentSave = { ...saved, act: "CREATE" };
            if (documentSave.status === "FAILED" && documentSave.reason === "TURN_OWNERSHIP_LOST") {
              ownershipLostBeforeD4 = true;
              documentSave = null;
            } else if (
              documentSave.status !== "AVAILABLE" &&
              documentSave.status !== "CONFLICT"
            ) {
              documentSaveUnknown =
                documentSave.status === "UNKNOWN" || documentSave.status === "FAILED";
            }
          } catch {
            documentSave = { status: "UNKNOWN", reason: "DOCUMENT_SAVE_EXCEPTION", act: "CREATE" };
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
      } else if (documentAct.kind === "REVISE" && !ownershipLostBeforeD4) {
        try {
          const docs = await listDocuments(pilotId, preparationId);
          const target = resolveReviseTarget(docs, documentAct.documentHint);
          if (!target.ok) {
            documentSave = {
              status: "FAILED",
              reason: `REVISE_${target.reason}`,
              act: "REVISE",
            };
          } else {
            const extracted = extractDocumentMarkdown(reply.content, content);
            const proposed = extracted?.content ?? reply.content;
            const merged = applyTargetedSectionRevision(
              target.baseContent,
              proposed,
              documentAct.sectionHint,
            );
            if (!merged.ok) {
              documentSave = {
                status: "FAILED",
                reason: merged.reason,
                documentId: target.documentId,
                baseRevisionId: target.baseRevisionId,
                act: "REVISE",
              };
            } else {
              const scopeCheck = assertSectionScope(
                target.baseContent,
                merged.content,
                documentAct.sectionHint,
              );
              if (!scopeCheck.ok) {
                documentSave = {
                  status: "FAILED",
                  reason: scopeCheck.reason,
                  documentId: target.documentId,
                  baseRevisionId: target.baseRevisionId,
                  act: "REVISE",
                };
              } else {
                const correlationKey = opts?.correlationKey
                  ? `docrev:${opts.correlationKey}:${target.documentId}:${target.baseRevisionId}`
                  : `docrev:${reply.generationId}:${target.documentId}:${target.baseRevisionId}`;
                const revised = await reviseDocument(pilotId, preparationId, {
                  documentId: target.documentId,
                  baseRevisionId: target.baseRevisionId,
                  contentMarkdown: merged.content,
                  correlationKey,
                  scope: documentAct.sectionHint ? "section" : "document",
                  sectionHint: documentAct.sectionHint ?? undefined,
                  provenance: {
                    sourceKind: "nora",
                    generationId: reply.generationId,
                    userMessageId: reserved.userMessageId,
                    explicitRequest: true,
                    act: "REVISE",
                    sectionHint: documentAct.sectionHint,
                  },
                });
                documentSave = {
                  ...revised,
                  act: "REVISE",
                  baseRevisionId:
                    "baseRevisionId" in revised && typeof revised.baseRevisionId === "string"
                      ? revised.baseRevisionId
                      : target.baseRevisionId,
                };
                if (
                  documentSave.status !== "AVAILABLE" &&
                  documentSave.status !== "CONFLICT" &&
                  !(documentSave.status === "FAILED" && documentSave.idempotentReplay)
                ) {
                  documentSaveUnknown =
                    documentSave.status === "UNKNOWN" || documentSave.status === "FAILED";
                }
              }
            }
          }
          emitObs({
            event_name: "d3.turn.document_revise",
            component: "d3.conversation",
            request_id: requestId,
            operation_id: reserved.operationId,
            generation_id: reply.generationId,
            outcome:
              documentSave?.status === "AVAILABLE"
                ? "SUCCESS"
                : documentSave?.status === "CONFLICT"
                  ? "FAILED"
                  : documentSave?.status === "FAILED"
                    ? "FAILED"
                    : "UNKNOWN",
            meta: {
              act: "REVISE",
              status: documentSave?.status ?? null,
              reason: documentSave?.reason ?? null,
              document_id: documentSave?.documentId ?? null,
            },
          });
        } catch {
          documentSave = { status: "UNKNOWN", reason: "DOCUMENT_REVISE_EXCEPTION", act: "REVISE" };
          documentSaveUnknown = true;
          emitObs({
            event_name: "d3.turn.document_revise_failed",
            component: "d3.conversation",
            request_id: requestId,
            operation_id: reserved.operationId,
            generation_id: reply.generationId,
            outcome: "UNKNOWN",
            error_category: "DOCUMENT_REVISE_EXCEPTION",
          });
        }
      }
    }
  }

  const documentEffectForAck: DocumentEffectSummary | null =
    documentSave && !ownershipLostBeforeD4
      ? {
          act: documentSave.act ?? (documentAct.kind === "REVISE" ? "REVISE" : "CREATE"),
          status: documentSave.status,
          documentId: documentSave.documentId,
          revisionId: documentSave.revisionId,
          revisionNumber: documentSave.revisionNumber,
          baseRevisionId: documentSave.baseRevisionId,
          reason: documentSave.reason,
          idempotentReplay: documentSave.idempotentReplay,
        }
      : documentAct.kind !== "NONE" && !ownershipLostBeforeD4
        ? {
            act: documentAct.kind === "REVISE" ? "REVISE" : "CREATE",
            status: "UNKNOWN",
            reason: "NO_EFFECT_OBSERVED",
          }
        : null;

  const assistantContentForCommit = ownershipLostBeforeD4
    ? reply.content
    : appendDocumentEffectAck(reply.content, documentEffectForAck);

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
    documentAct.kind !== "NONE"
  ) {
    turnStatus = "UNKNOWN";
  } else if (
    !ownershipLostBeforeD4 &&
    reply.status === "COMPLETE" &&
    capitalisationError &&
    documentAct.kind === "NONE"
  ) {
    turnStatus = "UNKNOWN";
  }

  // Lost ownership ⇒ never claim COMPLETE even if reply looked complete.
  if (ownershipLostBeforeD4) {
    turnStatus = "UNKNOWN";
  }

  // When ownership already lost, prefer DB reconstitution over in-memory lists
  // (local vars may omit effects committed earlier in the turn).
  let unknownCapReconstituted: Awaited<ReturnType<typeof reconstituteConfirmedD4Effects>> | null =
    null;
  if (ownershipLostBeforeD4 || turnStatus === "UNKNOWN") {
    unknownCapReconstituted = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
      generationId: reply.generationId,
      userMessageId: reserved.userMessageId,
    });
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
    capitalisation: ownershipLostBeforeD4
      ? (unknownCapReconstituted?.capitalisation ?? [])
      : confirmedCapitalisations,
    capitalisationAttempted: ownershipLostBeforeD4 ? [] : capitalisation.capitalisations,
    capitalisationLimit: ownershipLostBeforeD4
      ? (unknownCapReconstituted?.capitalisationLimit ?? "OWNERSHIP_LOST")
      : capitalisationError ?? capitalisation.selectionLimit,
    documentSave: ownershipLostBeforeD4
      ? (unknownCapReconstituted?.documentSave ?? null)
      : documentSave,
    idempotentReplay: false,
    humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
    pilotageEffect: pilotageEffectFromAuthority(authority),
  };

  if (turnRaceHooks.beforeTerminalCommit) {
    await turnRaceHooks.beforeTerminalCommit();
  }

  let applied: { applied: boolean };
  try {
    applied = await commitTurnTerminal({
      commandId: reserved.commandId,
      ownerToken: reserved.ownerToken,
      status: turnStatus,
      conversationId: ctx.conversation.id,
      assistant: ownershipLostBeforeD4
        ? undefined
        : {
            id: assistantId,
            content: assistantContentForCommit,
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
  } catch (e) {
    // Mid-TX DB failure after attempted assistant write — TX rolled back; never COMPLETE.
    if (e instanceof StudioError && e.code === "CONFLICT") {
      emitObs({
        event_name: "d3.turn.assistant_identity_conflict",
        component: "d3.conversation",
        request_id: requestId,
        operation_id: reserved.operationId,
        generation_id: reply.generationId,
        outcome: "UNKNOWN",
        error_category: "ASSISTANT_IDENTITY_CONFLICT",
      });
    } else {
      emitObs({
        event_name: "d3.turn.terminal_tx_failed",
        component: "d3.conversation",
        request_id: requestId,
        operation_id: reserved.operationId,
        generation_id: reply.generationId,
        outcome: "UNKNOWN",
        error_category: "TERMINAL_TX_EXCEPTION",
      });
    }
    try {
      await markTurnUnknown(reserved.commandId, "TERMINAL_TX_EXCEPTION", reserved.ownerToken);
    } catch {
      /* ownership may already be lost */
    }
    const reconstituted = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
      generationId: reply.generationId,
      userMessageId: reserved.userMessageId,
    });
    return {
      ...resultPayload,
      status: "UNKNOWN",
      assistantMessageId: null,
      capitalisation: reconstituted.capitalisation,
      capitalisationLimit: reconstituted.capitalisationLimit,
      documentSave: reconstituted.documentSave,
    };
  }

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
    // Never return COMPLETE when ownership CAS failed — but surface DB-confirmed D4 refs.
    const reconstituted = await reconstituteConfirmedD4Effects(pilotId, preparationId, {
      generationId: reply.generationId,
      userMessageId: reserved.userMessageId,
    });
    return {
      ...resultPayload,
      status: "UNKNOWN",
      assistantMessageId: null,
      capitalisation: reconstituted.capitalisation,
      capitalisationLimit: reconstituted.capitalisationLimit,
      documentSave: reconstituted.documentSave,
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
