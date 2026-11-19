import { and, asc, eq, inArray, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  businessCommands,
  conversationTurnCommands,
  conversations,
  createProjectCommands,
  documentRevisions,
  documents,
  effectAttempts,
  humanDecisions,
  knowledgeAcquis,
  knowledgeOpenPoints,
  messages,
} from "@/db/schema";
// db still used by getConversationId / listMessages
import { newId } from "@/lib/ids";
import { generateNoraReply } from "./nora-adapter";
import {
  applyPreparationProjection,
  getPreparationContext,
  openOrCreatePreparation,
} from "@/domains/preparation/service";
import {
  maybeCapitalizeFromExchange,
  reconstituteConfirmedD4Effects,
  selectRelevantKnowledgeContext,
} from "@/domains/knowledge/service";
import { listDocuments } from "@/domains/document/service";
import {
  admitDocumentCommand,
  canonicalizeDocumentProposal,
  confrontProposalWithFence,
  contentSha256,
  resolveAssistantProposal,
  sealAndApplyDocumentCommand,
  serializeProposalFence,
  type DocumentProposalExact,
} from "@/domains/conversation/document-command";
import {
  bindTurnGenerationId,
  commitTurnTerminal,
  findUnresolvedSiblingTurns,
  markTurnUnknown,
  requireTurnOwnership,
  reserveTurnCommand,
  stashTurnQualification,
  touchTurnLease,
  turnRaceHooks,
} from "./turn-command";
import { emitObs, newRequestId } from "@/lib/observability";
import { StudioError } from "@/lib/http-errors";
import {
  applyConversationalAuthority,
  conversationalCommandKey,
  reconstituteConversationalAuthority,
  type ConversationalAuthorityOutcome,
} from "@/domains/pilotage/conversation-authority";
import { buildNoraPilotageContext } from "@/domains/pilotage/nora-context";
import {
  appendDocumentEffectAck,
  applyTargetedSectionRevision,
  assertSectionScope,
  extractContractualDocumentProposal,
  resolveReviseTarget,
  stripContractualDocumentFences,
  type DocumentEffectSummary,
  type DocumentProposalExtract,
} from "./document-act";
import {
  deriveThreadTurnKind,
  effectIntents,
  extractKnowledgeProposals,
  extractKnowledgeSelectionHints,
  extractPilotageBinding,
  projectStudioEffects,
  unavailableQualification,
  type NoraTurnQualification,
} from "./semantic-qualification";
import { loadLatestMissionsByIntentKey } from "./intent-conduction";
import {
  buildTurnCorrelationKeys,
  evaluateS05SiblingPolicy,
  parseSiblingResultEvidence,
  type S05SiblingEvidence,
} from "./s05-pending-policy";
import type { ThreadTurnKind } from "@/domains/pilotage/thread-recovery";
import {
  appendMissionAck,
  cognitiveContinueFromFacts,
  composeCanonicalMissionRestitution,
  missionCorrelationKeys,
  preparePublicationForMission,
  recoverAuthorizedNoraMissions,
  type MissionProjection,
} from "./mission-continuity";
import {
  advanceMissionAfterProjectCreated,
  buildD2AwaitingStep,
  buildD2OwnerActBinding,
  buildPendingDocumentStep,
  emptyMission,
  loadPriorMissionProjection,
  mergeMissionSteps,
  recoverPendingMissionContinuation,
} from "./intent-conduction";
import { draftProjectionFromQualification } from "@/domains/preparation/projection";
import {
  buildTurnProjection,
  extractTurnProjectionFromResultJson,
  type TurnProjection,
} from "./turn-projection";

/**
 * S05 R-01 — gather owner-side evidence for one unresolved sibling.
 * true = correlated owner row found; false = applicable owners probed empty;
 * null = incomplete / errored / identity insufficient.
 * Never derives absence of effect from resultJson alone.
 */
export async function probeSiblingOwnerEffects(input: {
  pilotId: string;
  preparationId: string;
  projectId: string | null;
  sibling: {
    commandId: string;
    clientTurnKey: string;
    userMessageId: string | null;
    operationId: string | null;
    bindingCorrelationKeys: string[];
  };
}): Promise<boolean | null> {
  const { sibling } = input;
  const missionKeys = missionCorrelationKeys(sibling.clientTurnKey);
  const corrKeys = [
    ...new Set(
      [
        ...sibling.bindingCorrelationKeys,
        missionKeys.document,
        missionKeys.publication,
        sibling.clientTurnKey.trim() || null,
      ].filter((k): k is string => Boolean(k && k.trim())),
    ),
  ];

  try {
    // DEV/E2E seam only — never set in RECETTE/STABLE; forces conservative null.
    if (process.env.STUDIO_S05_PROBE_FORCE_ERROR === "1") {
      throw new Error("STUDIO_S05_PROBE_FORCE_ERROR");
    }

    if (corrKeys.length > 0) {
      const docs = await db
        .select({ id: documents.id })
        .from(documents)
        .where(
          and(
            eq(documents.preparationId, input.preparationId),
            eq(documents.ownerPilotId, input.pilotId),
            inArray(documents.creationCorrelationKey, corrKeys),
          ),
        )
        .limit(1);
      if (docs.length > 0) return true;

      const revs = await db
        .select({ id: documentRevisions.id })
        .from(documentRevisions)
        .innerJoin(documents, eq(documentRevisions.documentId, documents.id))
        .where(
          and(
            eq(documents.preparationId, input.preparationId),
            eq(documents.ownerPilotId, input.pilotId),
            inArray(documentRevisions.correlationKey, corrKeys),
          ),
        )
        .limit(1);
      if (revs.length > 0) return true;
    }

    const cmdNeedle = sibling.commandId;
    const provenanceHits = await db
      .select({ id: documentRevisions.id })
      .from(documentRevisions)
      .innerJoin(documents, eq(documentRevisions.documentId, documents.id))
      .where(
        and(
          eq(documents.preparationId, input.preparationId),
          eq(documents.ownerPilotId, input.pilotId),
          sql`${documentRevisions.provenanceJson} like ${"%" + cmdNeedle + "%"}`,
        ),
      )
      .limit(1);
    if (provenanceHits.length > 0) return true;

    const d2 = await db
      .select({ id: createProjectCommands.id })
      .from(createProjectCommands)
      .where(
        and(
          eq(createProjectCommands.pilotId, input.pilotId),
          eq(createProjectCommands.preparationId, input.preparationId),
          eq(createProjectCommands.idempotencyKey, sibling.clientTurnKey),
        ),
      )
      .limit(1);
    if (d2.length > 0) return true;

    if (input.projectId) {
      const bizKey = conversationalCommandKey(sibling.clientTurnKey);
      const bizByKey = await db
        .select({ id: businessCommands.id })
        .from(businessCommands)
        .where(
          and(
            eq(businessCommands.projectId, input.projectId),
            eq(businessCommands.actorPilotId, input.pilotId),
            eq(businessCommands.clientCommandKey, bizKey),
          ),
        )
        .limit(1);
      if (bizByKey.length > 0) return true;

      if (sibling.userMessageId) {
        const bizByMsg = await db
          .select({ id: businessCommands.id })
          .from(businessCommands)
          .where(
            and(
              eq(businessCommands.projectId, input.projectId),
              eq(businessCommands.actorPilotId, input.pilotId),
              eq(businessCommands.sourceKind, "USER_MESSAGE"),
              eq(businessCommands.sourceRef, sibling.userMessageId),
            ),
          )
          .limit(1);
        if (bizByMsg.length > 0) return true;

        const hd = await db
          .select({ id: humanDecisions.id })
          .from(humanDecisions)
          .where(
            and(
              eq(humanDecisions.projectId, input.projectId),
              eq(humanDecisions.pilotId, input.pilotId),
              eq(humanDecisions.sourceRef, sibling.userMessageId),
            ),
          )
          .limit(1);
        if (hd.length > 0) return true;
      }

      const eaKeys = [
        ...new Set(
          [missionKeys.publication, ...sibling.bindingCorrelationKeys].filter(
            (k): k is string => Boolean(k && k.trim()),
          ),
        ),
      ];
      if (eaKeys.length > 0) {
        const ea = await db
          .select({ id: effectAttempts.id })
          .from(effectAttempts)
          .where(
            and(
              eq(effectAttempts.pilotId, input.pilotId),
              eq(effectAttempts.projectId, input.projectId),
              inArray(effectAttempts.correlationKey, eaKeys),
            ),
          )
          .limit(1);
        if (ea.length > 0) return true;
      }
    }

    // D4 knowledge — use provenance keys actually written by maybeCapitalizeFromExchange:
    // { sourceKind: "message", sourceId: userMessageId, generationId }.
    // commandId is NOT written into knowledge provenance; LIKE(commandId) is not exhaustive.
    // knowledge_subjects has no turn provenance — never attribute by title/createdAt/prep alone.
    const msgId = sibling.userMessageId?.trim() || null;
    let generationId: string | null = null;
    const turnMeta = (
      await db
        .select({ generationId: conversationTurnCommands.generationId })
        .from(conversationTurnCommands)
        .where(eq(conversationTurnCommands.id, sibling.commandId))
        .limit(1)
    )[0];
    generationId = turnMeta?.generationId?.trim() || null;

    if (!msgId && !generationId) {
      // Knowledge negative proof requires durable message/generation identity.
      return null;
    }

    const acquisProv = generationId
      ? sql`(
          ${knowledgeAcquis.provenanceJson}::jsonb->>'generationId' = ${generationId}
          or (
            coalesce(${knowledgeAcquis.provenanceJson}::jsonb->>'generationId', '') = ''
            and ${msgId}::text is not null
            and ${knowledgeAcquis.provenanceJson}::jsonb->>'sourceKind' = 'message'
            and ${knowledgeAcquis.provenanceJson}::jsonb->>'sourceId' = ${msgId}
          )
        )`
      : sql`(
          ${knowledgeAcquis.provenanceJson}::jsonb->>'sourceKind' = 'message'
          and ${knowledgeAcquis.provenanceJson}::jsonb->>'sourceId' = ${msgId}
        )`;
    const openProv = generationId
      ? sql`(
          ${knowledgeOpenPoints.provenanceJson}::jsonb->>'generationId' = ${generationId}
          or (
            coalesce(${knowledgeOpenPoints.provenanceJson}::jsonb->>'generationId', '') = ''
            and ${msgId}::text is not null
            and ${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceKind' = 'message'
            and ${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceId' = ${msgId}
          )
        )`
      : sql`(
          ${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceKind' = 'message'
          and ${knowledgeOpenPoints.provenanceJson}::jsonb->>'sourceId' = ${msgId}
        )`;

    const acquisHit = await db
      .select({ id: knowledgeAcquis.id })
      .from(knowledgeAcquis)
      .where(
        and(
          eq(knowledgeAcquis.preparationId, input.preparationId),
          eq(knowledgeAcquis.ownerPilotId, input.pilotId),
          acquisProv,
        ),
      )
      .limit(1);
    if (acquisHit.length > 0) return true;

    const openHit = await db
      .select({ id: knowledgeOpenPoints.id })
      .from(knowledgeOpenPoints)
      .where(
        and(
          eq(knowledgeOpenPoints.preparationId, input.preparationId),
          eq(knowledgeOpenPoints.ownerPilotId, input.pilotId),
          openProv,
        ),
      )
      .limit(1);
    if (openHit.length > 0) return true;

    // Historical / non-canonical formats: positive-only commandId needle (never sole negative proof).
    if (cmdNeedle) {
      const acquisLegacy = await db
        .select({ id: knowledgeAcquis.id })
        .from(knowledgeAcquis)
        .where(
          and(
            eq(knowledgeAcquis.preparationId, input.preparationId),
            eq(knowledgeAcquis.ownerPilotId, input.pilotId),
            sql`${knowledgeAcquis.provenanceJson} like ${"%" + cmdNeedle + "%"}`,
          ),
        )
        .limit(1);
      if (acquisLegacy.length > 0) return true;
      const openLegacy = await db
        .select({ id: knowledgeOpenPoints.id })
        .from(knowledgeOpenPoints)
        .where(
          and(
            eq(knowledgeOpenPoints.preparationId, input.preparationId),
            eq(knowledgeOpenPoints.ownerPilotId, input.pilotId),
            sql`${knowledgeOpenPoints.provenanceJson} like ${"%" + cmdNeedle + "%"}`,
          ),
        )
        .limit(1);
      if (openLegacy.length > 0) return true;
    }

    // Subjects: no command provenance on schema — do not invent attribution.
    // Negative false here means acquis/open_points probes completed empty with durable
    // message/generation identity. Subject-only writes remain unattributable; QUALIFIED
    // REQUEST_EFFECT knowledge paths stay blocked by classifySiblingEffectRisk via effectIntents.
    // UNAVAILABLE turns cannot produce extractKnowledgeProposals → knowledge write path closed.
    return false;
  } catch {
    return null;
  }
}

export async function listMessages(pilotId: string, preparationId: string) {
  // READ ≠ COMMAND: listing must not dispatch Git or mutate effects.
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.conversation) return [];
  return db
    .select()
    .from(messages)
    .where(eq(messages.conversationId, ctx.conversation.id))
    .orderBy(asc(messages.ordinal));
}

/**
 * R05 — READ-ONLY durable turn lookup by clientTurnKey.
 * Never reserves, never calls Nora, never mutates. Used by cognitive recovery
 * so UI pending clear is grounded in server state (not a bare D7 404).
 */
export async function lookupDurableTurnByClientKey(
  pilotId: string,
  preparationId: string,
  clientTurnKey: string,
): Promise<{
  found: boolean;
  status: string | null;
  generationId: string | null;
  operationId: string | null;
  userMessageId: string | null;
  assistantMessageId: string | null;
  pilotageEffect: TurnResult["pilotageEffect"];
  idempotentReplay: true;
  noraMode: "durable-lookup";
}> {
  const key = clientTurnKey.trim();
  const empty = {
    found: false as const,
    status: null,
    generationId: null,
    operationId: null,
    userMessageId: null,
    assistantMessageId: null,
    pilotageEffect: null,
    idempotentReplay: true as const,
    noraMode: "durable-lookup" as const,
  };
  if (!key) return empty;

  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.conversation) return empty;

  const row = (
    await db
      .select({
        status: conversationTurnCommands.status,
        generationId: conversationTurnCommands.generationId,
        operationId: conversationTurnCommands.operationId,
        userMessageId: conversationTurnCommands.userMessageId,
        assistantMessageId: conversationTurnCommands.assistantMessageId,
        resultJson: conversationTurnCommands.resultJson,
        clientTurnKey: conversationTurnCommands.clientTurnKey,
      })
      .from(conversationTurnCommands)
      .where(
        and(
          eq(conversationTurnCommands.conversationId, ctx.conversation.id),
          eq(conversationTurnCommands.clientTurnKey, key),
        ),
      )
      .limit(1)
  )[0];

  if (!row) return empty;

  let fromJson: TurnResult["pilotageEffect"] = null;
  let humanDecisionCreated = false;
  if (row.resultJson) {
    try {
      const parsed = JSON.parse(row.resultJson) as TurnResult;
      fromJson = parsed.pilotageEffect ?? null;
      humanDecisionCreated = Boolean(parsed.humanDecisionCreated);
    } catch {
      /* ignore corrupt payload — status row still authoritative for D3 */
    }
  }

  const resolved = await resolvePilotageEffectForReplay({
    pilotId,
    projectId: ctx.project?.id,
    clientTurnKey: row.clientTurnKey,
    userMessageId: row.userMessageId,
    fromJson,
    humanDecisionCreated,
  });

  return {
    found: true,
    status: row.status,
    generationId: row.generationId,
    operationId: row.operationId,
    userMessageId: row.userMessageId,
    assistantMessageId: row.assistantMessageId,
    pilotageEffect: resolved.pilotageEffect,
    idempotentReplay: true,
    noraMode: "durable-lookup",
  };
}

/**
 * Ensemble 05 / M1 — reload projections from existing result_json (no new table).
 * READ ≠ COMMAND.
 */
export async function listTurnProjections(pilotId: string, preparationId: string) {
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.conversation) return [];
  const rows = await db
    .select({
      id: conversationTurnCommands.id,
      assistantMessageId: conversationTurnCommands.assistantMessageId,
      status: conversationTurnCommands.status,
      resultJson: conversationTurnCommands.resultJson,
    })
    .from(conversationTurnCommands)
    .where(
      and(
        eq(conversationTurnCommands.conversationId, ctx.conversation.id),
        eq(conversationTurnCommands.ownerPilotId, pilotId),
      ),
    );
  const out = [];
  for (const row of rows) {
    if (!row.assistantMessageId || !row.resultJson) continue;
    const proj = extractTurnProjectionFromResultJson(row.resultJson);
    if (!proj) continue;
    out.push({
      ...proj,
      messageId: proj.messageId ?? row.assistantMessageId,
      turnCommandId: proj.turnCommandId ?? row.id,
      finalized: proj.finalized || row.status === "COMPLETE",
      status: proj.status || row.status,
    });
  }
  return out;
}

/** Qualification decision before extract/D4 — metadata only, never blocks D4. */
function emitDocumentActQualificationObs(args: {
  requestId: string;
  operationId: string;
  generationId?: string | null;
  qualificationKind: "CREATE" | "REVISE" | "NONE";
  qualificationReason?: string | null;
  documentaryIntentSignal: boolean;
  d4Attempted: boolean;
  d4Effect?: string | null;
}) {
  emitObs({
    event_name: "d3.turn.document_act_qualification",
    component: "d3.conversation",
    request_id: args.requestId,
    operation_id: args.operationId,
    generation_id: args.generationId ?? undefined,
    outcome:
      args.qualificationKind === "NONE"
        ? "PARTIAL"
        : args.d4Effect === "AVAILABLE"
          ? "SUCCESS"
          : args.d4Attempted
            ? "PARTIAL"
            : "PARTIAL",
    meta: {
      qualification_kind: args.qualificationKind,
      qualification_reason: args.qualificationReason ?? null,
      documentary_intent_signal: args.documentaryIntentSignal,
      d4_attempted: args.d4Attempted,
      d4_effect: args.d4Effect ?? null,
    },
  });
}

function emitDocumentProposalObs(args: {
  requestId: string;
  operationId: string;
  generationId: string | null | undefined;
  act: "CREATE" | "REVISE";
  extracted: DocumentProposalExtract;
  scopeVerdict?: string | null;
  refuseCode?: string | null;
  d4Attempted: boolean;
  d4Effect?: string | null;
}) {
  emitObs({
    event_name: "d3.turn.document_proposal",
    component: "d3.conversation",
    request_id: args.requestId,
    operation_id: args.operationId,
    generation_id: args.generationId ?? undefined,
    outcome: args.extracted.ok
      ? args.refuseCode
        ? "FAILED"
        : args.d4Effect === "AVAILABLE"
          ? "SUCCESS"
          : args.d4Attempted
            ? "FAILED"
            : "PARTIAL"
      : "FAILED",
    meta: {
      act: args.act,
      extract_path: args.extracted.path,
      proposal_present: args.extracted.ok,
      fence_count: args.extracted.fenceCount,
      section_count: args.extracted.sectionCount,
      proposal_chars: args.extracted.proposalChars,
      proposal_digest16: args.extracted.proposalDigest16,
      body_ends_with_nl: args.extracted.bodyEndsWithNewline,
      scope_verdict: args.scopeVerdict ?? null,
      refuse_code: args.refuseCode ?? (args.extracted.ok ? null : args.extracted.reason),
      d4_attempted: args.d4Attempted,
      d4_effect: args.d4Effect ?? null,
    },
  });
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
  /** Post-qualification preferred listing — resume hint only, not cognition of current reply. */
  knowledgeResumeHints?: unknown;
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
  /** Refs-only mission projection — never owner truth for D4/D6/D7. */
  missionProjection?: MissionProjection | null;
  /** S05 — server-derived turn kind from Nora qualification (not client lexical). */
  nextTurnKind?: ThreadTurnKind;
  /** Echo of durable qualification status for clients / recovery. */
  semanticQualificationStatus?: string;
  /** D2 living sas projection ack for this turn (never an authority grant). */
  preparationProjection?: {
    status: string;
    revision?: number;
    assessment?: string;
  } | null;
  /** S05 — true when a sibling pending blocked owner effects for this turn. */
  pendingEffectBlocked?: boolean;
  pendingBlockReason?: string;
  unresolvedPendingClientTurnKey?: string | null;
  /**
   * Ensemble 05 / M1 — structured reply projection (choices, refs, activity).
   * Additive in result_json; never an authority grant.
   */
  turnProjection?: TurnProjection | null;
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
  opts?: {
    correlationKey?: string;
    clientTurnKey?: string;
    requestId?: string;
    /** Client UX hint only — server DB siblings are authoritative for S05. */
    unresolvedPendingClientTurnKey?: string;
  },
): Promise<TurnResult> {
  const requestId = opts?.requestId ?? newRequestId();
  const ctx = await getPreparationContext(pilotId, preparationId);
  if (!ctx.conversation) throw new StudioError("NOT_FOUND", "Préparation introuvable");

  // Governed recovery (COMMAND path only — never from listMessages READ).
  // P0-B: next turn recovers AUTHORIZED Nora missions after crash mid-authorize→dispatch.
  // G2: also recover interrupted D2→D4 mission continuation when project already exists.
  if (ctx.project?.id) {
    try {
      await recoverAuthorizedNoraMissions({ pilotId, projectId: ctx.project.id });
    } catch {
      /* never block the new turn */
    }
    try {
      await recoverPendingMissionContinuation({ pilotId, projectId: ctx.project.id });
    } catch {
      /* never block the new turn */
    }
  }

  // Multi-domain continuity: prefer intention-anchored load (GAP-04).
  // Primary D2→D4 continuation is continueAfterProjectCreated on create-project COMMAND.
  let carriedMission: MissionProjection | null = null;
  try {
    const awaiting = await loadPriorMissionProjection(ctx.conversation.id, {
      awaitingPilotAct: true,
      preparationId,
    });
    if (awaiting && ctx.project?.id) {
      carriedMission = advanceMissionAfterProjectCreated(awaiting, ctx.project.id);
    } else {
      const priorMission = await loadPriorMissionProjection(ctx.conversation.id, {
        preparationId,
      });
      if (priorMission && priorMission.status !== "COMPLETED") {
        carriedMission = priorMission;
      }
    }
  } catch {
    carriedMission = null;
  }

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

  /** SEM/TV: D5/D6 after Nora semantic qualification — not before. */
  let authority: ConversationalAuthorityOutcome | null = null;

  const existing = await listMessages(pilotId, preparationId);
  const contextSnippets = existing
    .filter((m) => m.status === "COMPLETE" && m.id !== reserved.userMessageId)
    .slice(-6)
    .map((m) => `${m.role}: ${m.content.slice(0, 200)}`);

  // F4: pre-Nora context ONLY feeds generation. Post-qual preferred ids are resume hints,
  // never claimed as having nourished the reply already produced.
  const knowledgeForNora = await selectRelevantKnowledgeContext(pilotId, preparationId, content, {
    projectId: ctx.project?.id ?? null,
  });
  let knowledgeResumeHints: Awaited<ReturnType<typeof selectRelevantKnowledgeContext>> | null =
    null;

  const docs = await listDocuments(pilotId, preparationId);
  const docSnippets = docs.slice(0, 5).map((d) => {
    const rev = d.latestRevision;
    return `DOCUMENT[${d.document.id}] «${d.document.title}» v${rev?.revisionNumber ?? "?"} status=${rev?.status ?? "∅"}`;
  });

  // SEM/TV: Nora qualifies first; same-turn D5/D6 runs after structured qualification.
  // Prior-turn D5/D6 facts still arrive via buildNoraPilotageContext projection only.
  const pilotageCtx = await buildNoraPilotageContext(pilotId, preparationId, content);

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
        knowledgeSnippets: [...knowledgeForNora.snippets, ...docSnippets],
        pilotageSnippets: pilotageCtx.snippets,
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
    // SEM order: Nora runs before same-turn D5/D6, so a provider failure here
    // cannot have produced a same-turn HumanDecision. Prior-turn recovery stays
    // on the reconstitution path below.
    const unknownPayload: TurnResult = {
      userMessageId: reserved.userMessageId,
      assistantMessageId: null,
      operationId: reserved.operationId,
      requestId,
      status: "UNKNOWN",
      idempotentReplay: false,
      humanDecisionCreated: false,
      pilotageEffect: null,
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

  // Test-only injection: swap assistant text before contractual extraction / D4.
  if (turnRaceHooks.replaceNoraAssistantText && reply.status === "COMPLETE") {
    reply = {
      ...reply,
      content: turnRaceHooks.replaceNoraAssistantText(reply.content),
    };
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

  const qualification: NoraTurnQualification =
    reply.qualification ?? unavailableQualification("MISSING_QUALIFICATION", reply.content);

  // TV-04 / T-03 — durable qualification before first owner mutation; applied required.
  const stashed = await stashTurnQualification({
    commandId: reserved.commandId,
    ownerToken: reserved.ownerToken,
    qualificationJson: JSON.stringify(qualification),
  });
  if (!stashed.applied) {
    emitObs({
      event_name: "d3.turn.qualification_stash_failed",
      component: "d3.conversation",
      request_id: requestId,
      operation_id: reserved.operationId,
      outcome: "FAILED",
      error_category: "QUALIFICATION_STASH_NOT_APPLIED",
    });
    try {
      await markTurnUnknown(
        reserved.commandId,
        "QUALIFICATION_STASH_NOT_APPLIED",
        reserved.ownerToken,
        JSON.stringify({
          userMessageId: reserved.userMessageId,
          assistantMessageId: null,
          operationId: reserved.operationId,
          requestId,
          status: "UNKNOWN",
          idempotentReplay: false,
          humanDecisionCreated: false,
          semanticQualificationStatus: "STASH_FAILED",
        }),
      );
    } catch {
      /* ownership may already be lost */
    }
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
      nextTurnKind: "INCERTAIN",
      semanticQualificationStatus: "STASH_FAILED",
    };
  }

  const nextTurnKind = deriveThreadTurnKind(qualification);
  const studioProjection = projectStudioEffects(qualification);
  const pilotageBinding = extractPilotageBinding(qualification);
  const knowledgeHints = extractKnowledgeSelectionHints(qualification);
  if (
    knowledgeHints.acquisIds.length ||
    knowledgeHints.openPointIds.length ||
    knowledgeHints.subjectIds.length
  ) {
    knowledgeResumeHints = await selectRelevantKnowledgeContext(pilotId, preparationId, content, {
      preferredAcquisIds: knowledgeHints.acquisIds,
      preferredOpenPointIds: knowledgeHints.openPointIds,
      preferredSubjectIds: knowledgeHints.subjectIds,
    });
  }

  // S05 — durable unresolved work (turns + missions). Client hint is UX only.
  const siblings = await findUnresolvedSiblingTurns({
    conversationId: ctx.conversation.id,
    ownerPilotId: pilotId,
    excludeClientTurnKey: clientTurnKey,
  });
  const clientPendingHint = opts?.unresolvedPendingClientTurnKey?.trim() || null;
  const missionsByKey = await loadLatestMissionsByIntentKey(ctx.conversation.id);
  const unresolvedMissions = [...missionsByKey.values()].filter((m) =>
    ["AWAITING_PILOT_ACT", "AWAITING_PILOT_AUTH", "AWAITING_CLARIFICATION", "ACTIVE"].includes(
      m.status,
    ),
  );
  // ACTIVE only blocks when a step is still WAITING/PENDING (real unfinished work).
  const blockingMission =
    unresolvedMissions.find((m) =>
      m.status === "ACTIVE"
        ? m.steps.some((s) => s.status === "WAITING" || s.status === "PENDING")
        : true,
    ) ?? null;

  const applyPendingGate =
    nextTurnKind === "INTENTION_EFFET" || nextTurnKind === "INCERTAIN";
  // R-02 — durable comparable identities only (never USER text / title / lexical).
  const currentMissionKeys = missionCorrelationKeys(
    carriedMission?.clientIntentKey?.trim() || clientTurnKey,
  );
  const currentCorrelationKeys = buildTurnCorrelationKeys({
    commandId: reserved.commandId,
    operationId: reserved.operationId,
    userMessageId: reserved.userMessageId,
    clientTurnKey,
    clientCorrelationSalt: opts?.correlationKey?.trim() || null,
    bindingCorrelationKeys: [],
    businessClientCommandKey: conversationalCommandKey(clientTurnKey),
    missionKeys: [currentMissionKeys.document, currentMissionKeys.publication],
  });
  const siblingEvidence: S05SiblingEvidence[] = await Promise.all(
    siblings.map(async (s) => {
      const parsed = parseSiblingResultEvidence(s.resultJson);
      const siblingMission = missionCorrelationKeys(s.clientTurnKey);
      const ownerEffectsFound = await probeSiblingOwnerEffects({
        pilotId,
        preparationId,
        projectId: ctx.project?.id ?? null,
        sibling: {
          commandId: s.id,
          clientTurnKey: s.clientTurnKey,
          userMessageId: s.userMessageId,
          operationId: s.operationId,
          bindingCorrelationKeys: parsed.bindingCorrelationKeys,
        },
      });
      return {
        id: s.id,
        clientTurnKey: s.clientTurnKey,
        status: s.status,
        createdAtMs: s.createdAt.getTime(),
        qualificationStatus: parsed.qualificationStatus,
        qualification: parsed.qualification,
        documentSaveStatus: parsed.documentSaveStatus,
        pilotageEffectAttempted: parsed.pilotageEffectAttempted,
        humanDecisionCreated: parsed.humanDecisionCreated,
        ownerEffectsFound,
        correlationKeys: buildTurnCorrelationKeys({
          commandId: s.id,
          operationId: s.operationId,
          userMessageId: s.userMessageId,
          clientTurnKey: s.clientTurnKey,
          bindingCorrelationKeys: parsed.bindingCorrelationKeys,
          businessClientCommandKey: conversationalCommandKey(s.clientTurnKey),
          missionKeys: [siblingMission.document, siblingMission.publication],
        }),
      };
    }),
  );
  const siblingPolicy = evaluateS05SiblingPolicy({
    siblings: siblingEvidence,
    current: {
      correlationKeys: currentCorrelationKeys,
      requestsOwnerEffect: applyPendingGate,
    },
    clientPendingHint,
    applyPendingGate,
  });

  let pendingEffectBlocked = false;
  let pendingBlockReason: string | undefined;
  let allowOwnerEffects = true;
  const blockingSiblingKey = siblingPolicy.primaryBlockingKey;
  const blockingSibling =
    siblings.find((s) => s.clientTurnKey === blockingSiblingKey) ?? null;

  if (applyPendingGate) {
    if (siblingPolicy.pendingEffectBlocked) {
      allowOwnerEffects = false;
      pendingEffectBlocked = true;
      pendingBlockReason = siblingPolicy.pendingBlockReason;
    }
    if (blockingMission) {
      allowOwnerEffects = false;
      pendingEffectBlocked = true;
      if (!pendingBlockReason) {
        pendingBlockReason =
          nextTurnKind === "INTENTION_EFFET"
            ? `S05_MISSION_BLOCKS_EFFECT:${blockingMission.clientIntentKey ?? "mission"}`
            : `S05_MISSION_BLOCKS_AMBIGUOUS:${blockingMission.clientIntentKey ?? "mission"}`;
      }
    }
  }

  if (pendingEffectBlocked) {
    emitObs({
      event_name: "d3.turn.s05_pending_block",
      component: "d3.conversation",
      request_id: requestId,
      operation_id: reserved.operationId,
      outcome: "PARTIAL",
      meta: {
        pending_client_turn_key: blockingSibling?.clientTurnKey ?? null,
        pending_status: blockingSibling?.status ?? null,
        pending_block_reason: pendingBlockReason ?? null,
        // Primitive summary only — emitObs allowlists scalar meta (QA-19).
        sibling_risks_summary: siblingPolicy.classifications
          .map((c) => `${c.clientTurnKey}:${c.status}:${c.risk}`)
          .join("|")
          .slice(0, 500),
        sibling_blocker_count: siblingPolicy.classifications.filter((c) =>
          ["ACTIVE_EFFECT_RISK", "UNKNOWN_EFFECT_RISK", "SAME_INTENT"].includes(c.risk),
        ).length,
        mission_status: blockingMission?.status ?? null,
        mission_key: blockingMission?.clientIntentKey ?? null,
        next_turn_kind: nextTurnKind,
        client_hint_ignored_as_authority: true,
      },
    });
  }
  // DIALOGUE_INDEPENDANT may answer without métier mutations that bypass A.

  // D5/D6 after semantic qualification — typed binding only (never parameters.notes).
  if (
    allowOwnerEffects &&
    pilotageBinding &&
    !("ambiguous" in pilotageBinding) &&
    ctx.project?.id
  ) {
    const stillOwned = await requireTurnOwnership(reserved.commandId, reserved.ownerToken);
    if (stillOwned) {
      const preQualified = {
        clarity: "CLEAR" as const,
        operation: pilotageBinding.operation,
        objective: pilotageBinding.objective ?? content,
        statement: pilotageBinding.statement,
        objectRef: pilotageBinding.objectRef,
        decisionId: pilotageBinding.decisionId,
        methodRef: pilotageBinding.methodRef,
        methodVersion: pilotageBinding.methodVersion,
        restrictionKindHint: pilotageBinding.restrictionKindHint,
        restrictionTargetRefHint: pilotageBinding.restrictionTargetRefHint,
        cycleType: pilotageBinding.cycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
        toCycleType: pilotageBinding.toCycleType as import("@/domains/pilotage/cki-resolve").CycleType | undefined,
        semanticIntentId: pilotageBinding.intentId,
        semanticSchemaVersion: pilotageBinding.schemaVersion,
      };
      authority = await applyConversationalAuthority({
        pilotId,
        projectId: ctx.project.id,
        userMessageId: reserved.userMessageId,
        content,
        clientTurnKey,
        preQualified,
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
          semantic_gate: true,
          semantic_intent_id: pilotageBinding.intentId,
        },
      });
    }
  } else if (pilotageBinding && "ambiguous" in pilotageBinding) {
    emitObs({
      event_name: "d3.turn.conversational_authority",
      component: "d3.conversation",
      request_id: requestId,
      operation_id: reserved.operationId,
      outcome: "PARTIAL",
      meta: {
        attempted: false,
        intent_clarity: "AMBIGUOUS",
        semantic_gate: true,
        reason: pilotageBinding.reason,
      },
    });
  }

  // C02 fault injection — AFTER same-turn D5/D6 (SEM/TV order: Nora → qualify → authority).
  // Hook name is historical; it must not run before Nora anymore.
  if (turnRaceHooks.afterAuthorityBeforeNora) {
    try {
      await turnRaceHooks.afterAuthorityBeforeNora();
    } catch {
      const unknownPayload: TurnResult = {
        userMessageId: reserved.userMessageId,
        assistantMessageId: null,
        operationId: reserved.operationId,
        requestId,
        status: "UNKNOWN",
        idempotentReplay: false,
        humanDecisionCreated: Boolean(authority?.humanDecisionCreated),
        pilotageEffect: pilotageEffectFromAuthority(authority),
        noraMode: reply.mode,
      };
      try {
        await markTurnUnknown(
          reserved.commandId,
          "PROVIDER_EXCEPTION",
          reserved.ownerToken,
          JSON.stringify(unknownPayload),
        );
      } catch {
        /* ownership may already be lost */
      }
      emitObs({
        event_name: "d3.turn.unknown",
        component: "d3.conversation",
        request_id: requestId,
        operation_id: reserved.operationId,
        outcome: "UNKNOWN",
        error_category: "POST_AUTHORITY_FAULT",
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
  }

  const assistantId = newId("msg");

  let capitalisation: Awaited<ReturnType<typeof maybeCapitalizeFromExchange>> = {
    capitalisations: [],
    selectionMethod: "semantic-proposals",
    selectionLimit:
      "SEM-02: capitalisation depuis propositions Nora typées (d4.record_knowledge).",
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
  const documentAct = studioProjection.documentAct;
  const documentaryIntentSignal = documentAct.kind !== "NONE";
  const missionIntent = studioProjection.publication;
  const studioIntent = studioProjection;
  const clientIntentKey = clientTurnKey;
  const missionKeys = missionCorrelationKeys(clientIntentKey);

  let durableProposal: DocumentProposalExact | null = null;
  /** P1: set when concurrent fence diverges / is invalid — block silent strip+reinject. */
  let proposalAuthorityConflict: string | null = null;
  const sectionScopedConfront =
    documentAct.kind === "REVISE" && Boolean(documentAct.sectionHint);
  if (
    reply.status === "COMPLETE" &&
    qualification.documentProposal &&
    !qualification.documentSource
  ) {
    const earlyCanonical = canonicalizeDocumentProposal(qualification.documentProposal);
    if (earlyCanonical.ok) {
      const earlyExtract = extractContractualDocumentProposal(reply.content);
      const confront = confrontProposalWithFence(earlyCanonical.proposal, earlyExtract, {
        sectionScoped: sectionScopedConfront,
      });
      if (!confront.ok) {
        proposalAuthorityConflict = confront.reason;
        durableProposal = null;
      } else {
        durableProposal = earlyCanonical.proposal;
        if (confront.materialize) {
          reply = {
            ...reply,
            content: `${reply.content.trimEnd()}\n\n${serializeProposalFence(durableProposal)}`,
          };
        }
      }
    }
  }
  // Semantic qualification visible before extract/D4. Absence of obs must never invent D4.
  emitDocumentActQualificationObs({
    requestId,
    operationId: reserved.operationId,
    generationId: reply.generationId,
    qualificationKind: documentAct.kind,
    qualificationReason: documentAct.kind === "NONE" ? "SEMANTIC_NONE" : null,
    documentaryIntentSignal,
    d4Attempted: false,
    d4Effect: null,
  });

  if (reply.status === "COMPLETE" && allowOwnerEffects) {
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
          proposals: extractKnowledgeProposals(qualification),
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
        // C-02/C-03: exact proposal from prior message OR canonical documentProposal OR fence.
        type ExactProposal = { title: string; contentMarkdown: string; contentSha256: string };
        let exact: ExactProposal | null = null;
        let source:
          | { kind: "ASSISTANT_MESSAGE"; assistantMessageId: string }
          | { kind: "SAME_TURN_SNAPSHOT"; commandId: string } = {
          kind: "SAME_TURN_SNAPSHOT",
          commandId: reserved.commandId,
        };
        let createBlocked: string | null = null;
        let extracted = extractContractualDocumentProposal(reply.content);

        if (qualification.documentSource?.kind === "PRIOR_ASSISTANT_MESSAGE") {
          const resolved = await resolveAssistantProposal({
            pilotId,
            preparationId,
            assistantMessageId: qualification.documentSource.assistantMessageId,
          });
          if (!resolved.ok) {
            createBlocked = resolved.reason;
          } else {
            const confront = confrontProposalWithFence(resolved.proposal, extracted);
            if (!confront.ok) {
              createBlocked = confront.reason;
              proposalAuthorityConflict = confront.reason;
              durableProposal = null;
            } else {
              exact = resolved.proposal;
              durableProposal = exact;
              source = {
                kind: "ASSISTANT_MESSAGE",
                assistantMessageId: resolved.assistantMessageId,
              };
              if (confront.materialize) {
                reply.content = `${reply.content.trim()}\n\n${serializeProposalFence(exact)}`;
                extracted = extractContractualDocumentProposal(reply.content);
              }
            }
          }
        } else if (qualification.documentProposal) {
          const canonical = canonicalizeDocumentProposal(qualification.documentProposal);
          if (!canonical.ok) {
            createBlocked = canonical.reason;
          } else {
            const confront = confrontProposalWithFence(canonical.proposal, extracted);
            if (!confront.ok) {
              createBlocked = confront.reason;
              proposalAuthorityConflict = confront.reason;
              durableProposal = null;
            } else {
              exact = canonical.proposal;
              durableProposal = exact;
              if (confront.materialize) {
                reply.content = `${reply.content.trim()}\n\n${serializeProposalFence(exact)}`;
                extracted = extractContractualDocumentProposal(reply.content);
              }
            }
          }
        } else if (extracted.ok) {
          const canonical = canonicalizeDocumentProposal({
            title: extracted.title,
            contentMarkdown: extracted.content,
          });
          if (!canonical.ok) createBlocked = canonical.reason;
          else {
            exact = canonical.proposal;
            durableProposal = exact;
          }
        } else {
          createBlocked = extracted.reason;
        }

        if (createBlocked || !exact) {
          // Pre-effect refuse — D4 not attempted (QA-16).
          documentSave = {
            status: "NOT_EXECUTED",
            reason: createBlocked ?? "DOCUMENT_PROPOSAL_MISSING",
            act: "CREATE",
          };
          emitDocumentProposalObs({
            requestId,
            operationId: reserved.operationId,
            generationId: reply.generationId,
            act: "CREATE",
            extracted: extracted.ok
              ? extracted
              : {
                  ok: false,
                  reason: "DOCUMENT_PROPOSAL_MISSING",
                  path: "none",
                  fenceCount: 0,
                  proposalChars: 0,
                  proposalDigest16: null,
                  bodyEndsWithNewline: false,
                  sectionCount: 0,
                },
            refuseCode: createBlocked ?? "DOCUMENT_PROPOSAL_MISSING",
            d4Attempted: false,
            d4Effect: null,
          });
        } else {
          try {
            const createIntents = effectIntents(qualification).filter(
              (i) => i.capabilityId === "d4.create_document",
            );
            if (createIntents.length > 1) {
              documentSave = {
                status: "NOT_EXECUTED",
                reason: "AMBIGUOUS_CREATE_INTENT",
                act: "CREATE",
              };
            } else {
              const createIntent = createIntents[0];
              if (!createIntent) {
                documentSave = {
                  status: "NOT_EXECUTED",
                  reason: "MISSING_CREATE_INTENT",
                  act: "CREATE",
                };
              } else {
                const clientSalt =
                  opts?.correlationKey?.trim() ||
                  (missionIntent.wantsPublish ? missionKeys.document : null);
                const admitted = admitDocumentCommand({
                  commandId: reserved.commandId,
                  operationId: reserved.operationId,
                  userMessageId: reserved.userMessageId,
                  qualifiedIntentId: createIntent.id,
                  action: "CREATE",
                  preparationId,
                  source,
                  title: exact.title,
                  contentMarkdown: exact.contentMarkdown,
                  clientCorrelationSalt: clientSalt,
                });
                if (!admitted.ok) {
                  documentSave = {
                    status: "NOT_EXECUTED",
                    reason: admitted.reason,
                    act: "CREATE",
                  };
                } else {
                  const sealed = await sealAndApplyDocumentCommand({
                    pilotId,
                    fence: {
                      commandId: reserved.commandId,
                      ownerToken: reserved.ownerToken,
                      beforeFenceCheck: turnRaceHooks.beforeD4Effect,
                    },
                    binding: admitted.binding,
                  });
                  if (!sealed.sealApplied) {
                    documentSave = {
                      status: "NOT_EXECUTED",
                      reason: "BINDING_SEAL_FAILED",
                      act: "CREATE",
                    };
                  } else {
                    documentSave = { ...sealed.effect, act: "CREATE" };
                  }
                }
              }
            }
            if (documentSave.status === "FAILED" && documentSave.reason === "TURN_OWNERSHIP_LOST") {
              ownershipLostBeforeD4 = true;
              documentSave = null;
            } else if (
              documentSave &&
              documentSave.status !== "AVAILABLE" &&
              documentSave.status !== "CONFLICT"
            ) {
              documentSaveUnknown =
                documentSave.status === "UNKNOWN" || documentSave.status === "FAILED";
            }
            emitDocumentProposalObs({
              requestId,
              operationId: reserved.operationId,
              generationId: reply.generationId,
              act: "CREATE",
              extracted: extracted.ok
                ? extracted
                : {
                    ok: true,
                    content: exact.contentMarkdown,
                    title: exact.title,
                    // Obs-only snapshot of authority proposal — explicit title, never LEGACY_UNTITLED.
                    titleProvenance: "STRUCTURED" as const,
                    path: "fence",
                    fenceTag: "sfia-document",
                    fenceCount: 1,
                    proposalChars: exact.contentMarkdown.length,
                    proposalDigest16: exact.contentSha256.slice(0, 16),
                    bodyEndsWithNewline: exact.contentMarkdown.endsWith("\n"),
                    sectionCount: 0,
                  },
              refuseCode:
                documentSave?.status === "AVAILABLE" || documentSave?.status === "CONFLICT"
                  ? null
                  : (documentSave?.reason ?? null),
              d4Attempted: true,
              d4Effect: documentSave?.status ?? null,
            });
          } catch {
            documentSave = { status: "UNKNOWN", reason: "DOCUMENT_SAVE_EXCEPTION", act: "CREATE" };
            documentSaveUnknown = true;
            emitDocumentProposalObs({
              requestId,
              operationId: reserved.operationId,
              generationId: reply.generationId,
              act: "CREATE",
              extracted,
              refuseCode: "DOCUMENT_SAVE_EXCEPTION",
              d4Attempted: true,
              d4Effect: "UNKNOWN",
            });
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
            emitDocumentProposalObs({
              requestId,
              operationId: reserved.operationId,
              generationId: reply.generationId,
              act: "REVISE",
              extracted: extractContractualDocumentProposal(reply.content),
              refuseCode: `REVISE_${target.reason}`,
              d4Attempted: false,
              d4Effect: null,
            });
          } else {
            let extracted = extractContractualDocumentProposal(reply.content);
            let reviseProposalContent: string | null = null;
            let reviseBlocked: string | null = null;
            let reviseSource:
              | { kind: "ASSISTANT_MESSAGE"; assistantMessageId: string }
              | { kind: "SAME_TURN_SNAPSHOT"; commandId: string } = {
              kind: "SAME_TURN_SNAPSHOT",
              commandId: reserved.commandId,
            };
            if (qualification.documentSource?.kind === "PRIOR_ASSISTANT_MESSAGE") {
              const resolved = await resolveAssistantProposal({
                pilotId,
                preparationId,
                assistantMessageId: qualification.documentSource.assistantMessageId,
              });
              if (!resolved.ok) reviseBlocked = resolved.reason;
              else {
                const confront = confrontProposalWithFence(resolved.proposal, extracted, {
                  sectionScoped: sectionScopedConfront,
                });
                if (!confront.ok) {
                  reviseBlocked = confront.reason;
                  proposalAuthorityConflict = confront.reason;
                  durableProposal = null;
                } else {
                  reviseProposalContent = resolved.proposal.contentMarkdown;
                  durableProposal = resolved.proposal;
                  reviseSource = {
                    kind: "ASSISTANT_MESSAGE",
                    assistantMessageId: resolved.assistantMessageId,
                  };
                  if (confront.materialize) {
                    reply.content = `${reply.content.trim()}\n\n${serializeProposalFence(resolved.proposal)}`;
                    extracted = extractContractualDocumentProposal(reply.content);
                  }
                }
              }
            } else if (qualification.documentProposal) {
              const canonical = canonicalizeDocumentProposal(qualification.documentProposal);
              if (!canonical.ok) reviseBlocked = canonical.reason;
              else {
                const confront = confrontProposalWithFence(canonical.proposal, extracted, {
                  sectionScoped: sectionScopedConfront,
                });
                if (!confront.ok) {
                  reviseBlocked = confront.reason;
                  proposalAuthorityConflict = confront.reason;
                  durableProposal = null;
                } else {
                  reviseProposalContent = canonical.proposal.contentMarkdown;
                  durableProposal = canonical.proposal;
                  if (confront.materialize) {
                    reply.content = `${reply.content.trim()}\n\n${serializeProposalFence(canonical.proposal)}`;
                    extracted = extractContractualDocumentProposal(reply.content);
                  }
                }
              }
            } else if (extracted.ok) {
              reviseProposalContent = extracted.content;
              const canonical = canonicalizeDocumentProposal({
                title: extracted.title,
                contentMarkdown: extracted.content,
              });
              if (canonical.ok) durableProposal = canonical.proposal;
            } else {
              reviseBlocked = extracted.reason;
            }
            if (reviseBlocked || !reviseProposalContent) {
              documentSave = {
                status: "NOT_EXECUTED",
                reason: reviseBlocked ?? "DOCUMENT_PROPOSAL_MISSING",
                documentId: target.documentId,
                baseRevisionId: target.baseRevisionId,
                act: "REVISE",
              };
              emitDocumentProposalObs({
                requestId,
                operationId: reserved.operationId,
                generationId: reply.generationId,
                act: "REVISE",
                extracted,
                refuseCode: reviseBlocked ?? "DOCUMENT_PROPOSAL_MISSING",
                d4Attempted: false,
                d4Effect: null,
              });
            } else {
              const merged = applyTargetedSectionRevision(
                target.baseContent,
                reviseProposalContent,
                documentAct.sectionHint,
              );
              if (!merged.ok) {
                documentSave = {
                  status: "NOT_EXECUTED",
                  reason: merged.reason,
                  documentId: target.documentId,
                  baseRevisionId: target.baseRevisionId,
                  act: "REVISE",
                };
                emitDocumentProposalObs({
                  requestId,
                  operationId: reserved.operationId,
                  generationId: reply.generationId,
                  act: "REVISE",
                  extracted,
                  scopeVerdict: merged.reason,
                  refuseCode: merged.reason,
                  d4Attempted: false,
                  d4Effect: null,
                });
              } else {
                const scopeCheck = assertSectionScope(
                  target.baseContent,
                  merged.content,
                  documentAct.sectionHint,
                );
                if (!scopeCheck.ok) {
                  documentSave = {
                    status: "NOT_EXECUTED",
                    reason: scopeCheck.reason,
                    documentId: target.documentId,
                    baseRevisionId: target.baseRevisionId,
                    act: "REVISE",
                  };
                  emitDocumentProposalObs({
                    requestId,
                    operationId: reserved.operationId,
                    generationId: reply.generationId,
                    act: "REVISE",
                    extracted,
                    scopeVerdict: scopeCheck.reason,
                    refuseCode: scopeCheck.reason,
                    d4Attempted: false,
                    d4Effect: null,
                  });
                } else {
                  const reviseIntents = effectIntents(qualification).filter(
                    (i) => i.capabilityId === "d4.revise_document",
                  );
                  if (reviseIntents.length !== 1) {
                    documentSave = {
                      status: "NOT_EXECUTED",
                      reason:
                        reviseIntents.length === 0
                          ? "MISSING_REVISE_INTENT"
                          : "AMBIGUOUS_REVISE_INTENT",
                      documentId: target.documentId,
                      baseRevisionId: target.baseRevisionId,
                      act: "REVISE",
                    };
                  } else {
                    const reviseIntent = reviseIntents[0]!;
                    const clientSalt =
                      opts?.correlationKey?.trim() ||
                      `${target.documentId}:${target.baseRevisionId}`;
                    const admitted = admitDocumentCommand({
                      commandId: reserved.commandId,
                      operationId: reserved.operationId,
                      userMessageId: reserved.userMessageId,
                      qualifiedIntentId: reviseIntent.id,
                      action: "REVISE",
                      preparationId,
                      documentId: target.documentId,
                      baseRevisionId: target.baseRevisionId,
                      sectionHint: documentAct.sectionHint,
                      source: reviseSource,
                      title: target.title,
                      contentMarkdown: merged.content,
                      clientCorrelationSalt: clientSalt,
                    });
                    if (!admitted.ok) {
                      documentSave = {
                        status: "NOT_EXECUTED",
                        reason: admitted.reason,
                        documentId: target.documentId,
                        baseRevisionId: target.baseRevisionId,
                        act: "REVISE",
                      };
                    } else {
                      const sealed = await sealAndApplyDocumentCommand({
                        pilotId,
                        fence: {
                          commandId: reserved.commandId,
                          ownerToken: reserved.ownerToken,
                          beforeFenceCheck: turnRaceHooks.beforeD4Effect,
                        },
                        binding: admitted.binding,
                      });
                      if (!sealed.sealApplied) {
                        documentSave = {
                          status: "NOT_EXECUTED",
                          reason: "BINDING_SEAL_FAILED",
                          documentId: target.documentId,
                          baseRevisionId: target.baseRevisionId,
                          act: "REVISE",
                        };
                      } else {
                        const revised = sealed.effect;
                        documentSave = {
                          ...revised,
                          act: "REVISE",
                          baseRevisionId:
                            "baseRevisionId" in revised &&
                            typeof (revised as { baseRevisionId?: string }).baseRevisionId ===
                              "string"
                              ? (revised as { baseRevisionId: string }).baseRevisionId
                              : target.baseRevisionId,
                        };
                      }
                    }
                  }
                  if (
                    documentSave.status !== "AVAILABLE" &&
                    documentSave.status !== "CONFLICT" &&
                    !(documentSave.status === "FAILED" && documentSave.idempotentReplay)
                  ) {
                    documentSaveUnknown =
                      documentSave.status === "UNKNOWN" || documentSave.status === "FAILED";
                  }
                  emitDocumentProposalObs({
                    requestId,
                    operationId: reserved.operationId,
                    generationId: reply.generationId,
                    act: "REVISE",
                    extracted,
                    scopeVerdict: "OK",
                    refuseCode:
                      documentSave.status === "AVAILABLE" || documentSave.status === "CONFLICT"
                        ? null
                        : (documentSave.reason ?? null),
                    d4Attempted: true,
                    d4Effect: documentSave.status ?? null,
                  });
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
              refuse_code: documentSave?.reason ?? null,
              d4_effect: documentSave?.status ?? null,
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
            // S05 block / skipped owner path: not a transactional UNKNOWN.
            status: "NOT_EXECUTED",
            reason: pendingBlockReason ?? "NO_EFFECT_OBSERVED",
          }
        : // Loyal pre-effect: plausible write language, not qualified → NOT_EXECUTED (never fake FAILED).
          documentAct.kind === "NONE" &&
            documentaryIntentSignal &&
            !ownershipLostBeforeD4 &&
            reply.status === "COMPLETE"
          ? {
              act: "NONE",
              status: "NOT_EXECUTED",
              reason: "NO_EXPLICIT_WRITE",
            }
          : null;

  // Post-effect continuity: facts-first Continue after D4 AVAILABLE (REC-08 + ACCEPT-01).
  let missionProjection: MissionProjection | null = null;
  let continueFailedAfterEffect = false;
  let assistantBody = reply.content;

  if (
    !ownershipLostBeforeD4 &&
    documentEffectForAck?.status === "AVAILABLE" &&
    documentEffectForAck.documentId &&
    documentEffectForAck.revisionId
  ) {
    const factsBlock = [
      `D4 ${documentEffectForAck.act}=${documentEffectForAck.status}`,
      `documentId=${documentEffectForAck.documentId}`,
      `revisionId=${documentEffectForAck.revisionId}`,
      documentEffectForAck.revisionNumber != null
        ? `revisionNumber=${documentEffectForAck.revisionNumber}`
        : null,
    ]
      .filter(Boolean)
      .join("\n");

    if (await requireTurnOwnership(reserved.commandId, reserved.ownerToken)) {
      try {
        const continued = await cognitiveContinueFromFacts({
          userText: content,
          factsBlock,
          contextSnippets,
          toolScope: {
            pilotId,
            preparationId,
            operationId: reserved.operationId,
            projectId: ctx.project?.id,
          },
        });
        if (continued.status === "COMPLETE" && continued.content.trim()) {
          assistantBody = continued.content;
        } else {
          continueFailedAfterEffect = true;
          assistantBody = composeCanonicalMissionRestitution({
            documentEffect: documentEffectForAck,
            restitutionNote:
              "Continuation cognitive incomplète — faits D4 conservés (RESTITUTION_PENDING).",
          });
        }
      } catch {
        continueFailedAfterEffect = true;
        assistantBody = composeCanonicalMissionRestitution({
          documentEffect: documentEffectForAck,
          restitutionNote:
            "Continuation cognitive indisponible — faits D4 conservés (RESTITUTION_PENDING).",
        });
      }
    }
  }

  if (
    allowOwnerEffects &&
    !ownershipLostBeforeD4 &&
    documentEffectForAck?.status === "AVAILABLE" &&
    documentEffectForAck.documentId &&
    documentEffectForAck.revisionId &&
    missionIntent.wantsPublish &&
    ctx.project?.id
  ) {
    const steps: MissionProjection["steps"] = [
      {
        id: "d4_create",
        capabilityId: "d4.create_document",
        status: "DONE",
        correlationKey: missionKeys.document,
        documentId: documentEffectForAck.documentId,
        revisionId: documentEffectForAck.revisionId,
      },
    ];

    // P1-E: no silent path/branch deduction — clarify before D7 prepare.
    if (missionIntent.needsExplicitPath) {
      steps.push({
        id: "d7_prepare",
        capabilityId: "d7.prepare_publication",
        status: "PENDING",
        correlationKey: missionKeys.publication,
        reason: missionIntent.clarify ?? "PATH_REQUIRED",
      });
      missionProjection = {
        clientIntentKey,
        status: "AWAITING_CLARIFICATION",
        goalSummary: "CREATE D4 confirmé — chemin Git requis avant préparation",
        steps,
        restitution: continueFailedAfterEffect ? "PENDING" : "DELIVERED",
      };
    } else if (await requireTurnOwnership(reserved.commandId, reserved.ownerToken)) {
      const prepared = await preparePublicationForMission({
        pilotId,
        projectId: ctx.project.id,
        documentId: documentEffectForAck.documentId,
        revisionId: documentEffectForAck.revisionId,
        clientIntentKey,
        targetPath: missionIntent.targetPath,
        targetBranch: missionIntent.targetBranch,
      });
      if (prepared.ok) {
        steps.push({
          id: "d7_prepare",
          capabilityId: "d7.prepare_publication",
          status: prepared.status === "PREPARED" ? "WAITING" : "DONE",
          correlationKey: missionKeys.publication,
          attemptId: prepared.attemptId,
          documentId: documentEffectForAck.documentId,
          revisionId: documentEffectForAck.revisionId,
        });
        missionProjection = {
          clientIntentKey,
          status: "AWAITING_PILOT_AUTH",
          goalSummary: "CREATE D4 + publication Git (attente autorisation Pilote)",
          steps,
          restitution: continueFailedAfterEffect ? "PENDING" : "DELIVERED",
        };
        emitObs({
          event_name: "d3.mission.prepared_awaiting_auth",
          component: "d3.mission_continuity",
          request_id: requestId,
          operation_id: reserved.operationId,
          generation_id: reply.generationId,
          outcome: "SUCCESS",
          meta: {
            attempt_id: prepared.attemptId,
            document_id: documentEffectForAck.documentId,
            // Never call authorize here — HD only on Pilot act.
            authorize_called: false,
          },
        });
      } else {
        steps.push({
          id: "d7_prepare",
          capabilityId: "d7.prepare_publication",
          status: "FAILED",
          correlationKey: missionKeys.publication,
          reason: `${prepared.code}:${prepared.message}`,
        });
        missionProjection = {
          clientIntentKey,
          status: "PARTIAL_FAILED_STEP",
          goalSummary: "CREATE D4 confirmé — préparation Git non réalisée",
          steps,
          restitution: continueFailedAfterEffect ? "PENDING" : "CANONICAL",
        };
      }
    }

    if (continueFailedAfterEffect && missionProjection) {
      missionProjection = {
        ...missionProjection,
        restitution: "PENDING",
      };
    }
  }

  // D2 projection draft prepared here; persisted only AFTER durable terminal commit (Gap C).
  let preparationProjectionDraft: ReturnType<typeof draftProjectionFromQualification> = null;
  let preparationProjectionAck:
    | { status: string; revision?: number; assessment?: string }
    | null = null;
  if (allowOwnerEffects && !ownershipLostBeforeD4 && !ctx.project?.id) {
    const openFromQual = extractKnowledgeProposals(qualification)
      .filter((p) => p.kind === "OPEN_POINT")
      .map((p) => p.statement)
      .slice(0, 6);
    const proposedName =
      (qualification.proposedProjectName?.trim()
        ? qualification.proposedProjectName.trim()
        : null) ||
      studioIntent.proposedProjectName;
    preparationProjectionDraft = draftProjectionFromQualification({
      preparationId,
      turnKey: clientIntentKey,
      qualificationStatus: qualification.status,
      goal: qualification.goal || "",
      projectIntention: qualification.projectIntention || "",
      desiredOutcome: qualification.desiredOutcome || "",
      initialScope: qualification.initialScope || "",
      // Pass through undefined when envelope omitted clarifications (≠ explicit []).
      clarifications: qualification.clarifications,
      proposedProjectName: proposedName,
      openPointStatements: openFromQual,
      preparationAssessment: qualification.preparationAssessment ?? null,
      preparationAssessmentExplanation:
        qualification.preparationAssessmentExplanation ?? null,
      // Goal→intention bootstrap only when no durable intention exists yet (R1).
      allowGoalIntentionBootstrap: !(ctx.projection?.intention?.value ?? "").trim(),
    });
    if (!preparationProjectionDraft && qualification.status === "UNAVAILABLE") {
      preparationProjectionAck = { status: "UNAVAILABLE" };
    }
  }

  // D2 — accompany project creation; Pilot explicit act remains mandatory (no implicit create).
  if (
    allowOwnerEffects &&
    !ownershipLostBeforeD4 &&
    studioIntent.wantsProjectCreate &&
    !ctx.project?.id
  ) {
    const proposed =
      (studioIntent.proposedProjectName?.trim()
        ? studioIntent.proposedProjectName.trim()
        : null) || "Nouveau projet";
    let d2Mission = emptyMission(
      clientIntentKey,
      `Création de projet «${proposed}» — attente acte Pilote`,
    );
    d2Mission = {
      ...d2Mission,
      originalUserText: content,
      pendingDocumentBrief: studioIntent.pendingDocumentBrief ?? undefined,
      preparationId,
      proposedProjectName: proposed,
      ownerActBinding: buildD2OwnerActBinding(preparationId, clientIntentKey),
    };
    d2Mission = mergeMissionSteps(d2Mission, [buildD2AwaitingStep(proposed)], "AWAITING_PILOT_ACT");
    if (
      studioIntent.wantsFollowOnDocument ||
      studioIntent.documentAct.kind === "CREATE" ||
      studioIntent.publication.wantsPublish
    ) {
      d2Mission = mergeMissionSteps(d2Mission, [
        buildPendingDocumentStep("CREATE", studioIntent.pendingDocumentBrief),
      ]);
    }
    missionProjection = d2Mission;
  } else if (
    !missionProjection &&
    carriedMission &&
    (carriedMission.status === "ACTIVE" || carriedMission.status === "AWAITING_PILOT_ACT")
  ) {
    // Resume carried multi-domain mission after D2 confirmed (or still waiting).
    if (documentEffectForAck?.status === "AVAILABLE" && documentEffectForAck.documentId) {
      const steps = carriedMission.steps.map((s) =>
        s.id === "d4_create" || s.capabilityId === "d4.create_document"
          ? {
              ...s,
              status: "DONE" as const,
              documentId: documentEffectForAck.documentId,
              revisionId: documentEffectForAck.revisionId,
            }
          : s,
      );
      missionProjection = {
        ...carriedMission,
        steps,
        status: steps.some((s) => s.status === "WAITING" || s.status === "PENDING")
          ? "ACTIVE"
          : "COMPLETED",
        restitution: continueFailedAfterEffect ? "PENDING" : "DELIVERED",
      };
    } else {
      missionProjection = carriedMission;
    }
  }

  // P1: PREPARE-only conflict must be observable without D4 mutation or silent rewrite.
  if (
    proposalAuthorityConflict &&
    !documentSave &&
    !ownershipLostBeforeD4 &&
    documentAct.kind === "NONE"
  ) {
    documentSave = {
      status: "NOT_EXECUTED",
      reason: proposalAuthorityConflict,
    };
  }

  // P1: never strip+reinject when concurrent fence was invalid or divergent.
  if (durableProposal && !ownershipLostBeforeD4 && !proposalAuthorityConflict) {
    const narrative = stripContractualDocumentFences(assistantBody);
    const fenced = serializeProposalFence(durableProposal);
    assistantBody = [narrative.trimEnd(), fenced].filter((s) => s.length > 0).join("\n\n");
  }

  const assistantContentForCommit = ownershipLostBeforeD4
    ? reply.content
    : appendMissionAck(
        appendDocumentEffectAck(assistantBody, documentEffectForAck),
        missionProjection,
      );

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
      ...knowledgeForNora.counts,
      selectionMethod: knowledgeForNora.selectionMethod,
      selectionLimit: knowledgeForNora.selectionLimit,
      role: "pre_generation_context" as const,
      selectedAcquisIds: knowledgeForNora.selectedAcquisIds,
      selectedOpenPointIds: knowledgeForNora.selectedOpenPointIds,
    },
    knowledgeResumeHints: knowledgeResumeHints
      ? {
          ...knowledgeResumeHints.counts,
          selectionMethod: knowledgeResumeHints.selectionMethod,
          selectionLimit: knowledgeResumeHints.selectionLimit,
          role: "post_qualification_resume_only" as const,
          selectedAcquisIds: knowledgeResumeHints.selectedAcquisIds,
          selectedOpenPointIds: knowledgeResumeHints.selectedOpenPointIds,
          note: "Indice de reprise — n'a pas nourri la réponse déjà générée",
        }
      : null,
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
    missionProjection,
    nextTurnKind,
    pendingEffectBlocked,
    pendingBlockReason,
    unresolvedPendingClientTurnKey:
      blockingSibling?.clientTurnKey ??
      blockingMission?.clientIntentKey ??
      clientPendingHint,
    semanticQualificationStatus: qualification.status,
    preparationProjection: preparationProjectionAck,
    turnProjection: buildTurnProjection({
      messageId: ownershipLostBeforeD4 ? null : assistantId,
      turnCommandId: reserved.commandId,
      status: turnStatus === "COMPLETE" ? reply.status : turnStatus,
      finalized: turnStatus === "COMPLETE" && !ownershipLostBeforeD4,
      // P1-A: never map clarifications[] → continue buttons.
      continueChoices: qualification.continueChoices ?? null,
      references: (qualification.resourceReferences ?? []).map((r) => ({
        kind: r.kind,
        label: r.label,
        resourceId: r.resourceId,
        revisionId: r.revisionId,
        repositoryId: r.repositoryId,
        path: r.path,
        ref: r.ref,
        commit: r.commit,
        href: r.href,
        available: true,
      })),
      toolCallsObserved: reply.toolCallsObserved,
      d4CharsReturned: reply.d4CharsReturned,
      documentSave,
      visualComposition: qualification.visualComposition,
    }),
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
      preparationProjection: { status: "SKIPPED_OWNERSHIP" },
    };
  }

  // Persist living projection only after durable COMPLETE terminal commit (Gap C).
  if (
    turnStatus === "COMPLETE" &&
    preparationProjectionDraft &&
    !ctx.project?.id &&
    !ownershipLostBeforeD4
  ) {
    try {
      const freshPrep = await openOrCreatePreparation(pilotId, preparationId);
      const appliedProj = await applyPreparationProjection({
        pilotId,
        preparationId,
        expectedCreationRevision: freshPrep.creationRevision,
        draft: preparationProjectionDraft,
      });
      preparationProjectionAck = {
        status: appliedProj.status,
        revision: "revision" in appliedProj ? appliedProj.revision : undefined,
        assessment: preparationProjectionDraft.suggestion?.assessment,
      };
    } catch {
      preparationProjectionAck = { status: "UNAVAILABLE" };
    }
    resultPayload.preparationProjection = preparationProjectionAck;
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
