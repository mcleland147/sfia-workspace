/**
 * D3 common intent conduction — domain-agnostic helpers.
 * NOT a parallel engine: no new authority, permissions, or effect journal.
 * Domain owners remain D2/D4/D5/D6/D7/D9; this module only qualifies,
 * projects refs, reconstructs prior mission state, and continues after
 * owner-confirmed acts when the original intention already required it.
 */
import { and, asc, desc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversationTurnCommands, conversations, messages } from "@/db/schema";
import { savePreparationDocument } from "@/domains/document/service";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";
import { emitObs } from "@/lib/observability";
import { extractContractualDocumentProposal, qualifyDocumentAct } from "./document-act";
import { generateNoraReply } from "./nora-adapter";
import {
  appendMissionAck,
  composeCanonicalMissionRestitution,
  formatMissionAck,
  qualifyPublicationMission,
  type MissionProjection,
  type MissionStep,
  type MissionStatus,
} from "./mission-continuity";

/** Logical capability ids — mapping only, not a second permission catalog. */
export type StudioCapabilityId =
  | "d2.create_project"
  | "d3.converse"
  | "d4.create_document"
  | "d4.revise_document"
  | "d4.read_knowledge"
  | "d5.pilotage_command"
  | "d6.human_decision"
  | "d7.prepare_publication"
  | "d7.dispatch_publication"
  | "d9.git_integration";

export type QualifiedIntent = {
  wantsProjectCreate: boolean;
  proposedProjectName: string | null;
  wantsFollowOnDocument: boolean;
  pendingDocumentBrief: string | null;
  documentAct: ReturnType<typeof qualifyDocumentAct>;
  publication: ReturnType<typeof qualifyPublicationMission>;
  likelyPilotageSignal: boolean;
  simpleDialogue: boolean;
};

const PROJECT_CREATE_RE =
  /\b(?:cr[eé]e(?:r)?|cr[eé]ation)\s+(?:un\s+|le\s+|mon\s+|notre\s+)?projet\b/i;

/**
 * GAP-05: stop at puis/et/comma/period — name must not swallow follow-on clauses.
 * "projet nommé Continuity Global B puis un document…" → "Continuity Global B"
 * "projet nommé Atlas puis prépare…" → "Atlas"
 */
export function extractProposedProjectName(userText: string): string | null {
  const named = userText.match(
    /projet\s+(?:nomm[eé]|intitul[eé]|appel[eé])\s+[«"]?(.+?)[»"]?(?=\s+puis\b|\s+ensuite\b|\s+et\s+(?:un|une|le|la|des|ce|cet|cette)\b|\s+pour\s+(?:la|le|les|un|une|ce|cet|cette|l['’])\b|\s*[,.;:]|$)/i,
  );
  if (named?.[1]) return named[1].replace(/[«»"']/g, "").trim();
  return null;
}

/** Follow-on document after project create — allow intervening scope words (« dans ce projet »). */
const FOLLOWON_DOC_RE =
  /\b(?:puis|ensuite|et)\b[\s\S]{0,120}?\b(?:document|note|synthèse|rapport|cadrage)\b/i;

const PILOTAGE_SIGNAL_RE =
  /\b(?:ouvre|ouvrir|cl[oô]ture|cl[oô]turer|cycle|m[eé]thode|trajectoire|restriction|r[eé]voque)\b/i;

/**
 * Executable mobilization contract — not metadata-only.
 * invokeOwnerRef names the real owner function; tests supply a boundary double
 * for future.* capabilities only.
 */
export type CapabilityMobilizationContract = {
  capabilityId: StudioCapabilityId | string;
  ownerDomain: "D1" | "D2" | "D3" | "D4" | "D5" | "D6" | "D7" | "D8" | "D9" | string;
  invokeOwnerRef: string;
  preconditions: string[];
  rightsBoundary: string;
  structuredResultKeys: string[];
  continuationHook: "cognitiveContinueFromFacts" | "authoritySnippets" | "missionProjection" | "none";
  interruptionRecovery: string;
};

export type CapabilityInvokeContext = {
  pilotId: string;
  preparationId?: string;
  projectId?: string;
  payload?: Record<string, unknown>;
};

export type CapabilityInvokeResult = {
  status: string;
  result: Record<string, unknown>;
};

export type CapabilityOwnerAdapter = {
  capabilityId: string;
  invoke: (ctx: CapabilityInvokeContext) => Promise<CapabilityInvokeResult>;
};

export const CAPABILITY_CONTRACTS: CapabilityMobilizationContract[] = [
  {
    capabilityId: "d2.create_project",
    ownerDomain: "D2",
    invokeOwnerRef: "createProjectCommand",
    preconditions: ["preparation OPEN", "previewName/summary", "Pilot click/API"],
    rightsBoundary: "ownerPilotId + creationRevision CAS",
    structuredResultKeys: ["status", "projectId"],
    continuationHook: "missionProjection",
    interruptionRecovery: "create_project_commands idempotencyKey + reconcileCreateProject",
  },
  {
    capabilityId: "d4.create_document",
    ownerDomain: "D4",
    invokeOwnerRef: "savePreparationDocument",
    preconditions: ["explicit CREATE intent", "proposal extract", "turn fence or owner continue"],
    rightsBoundary: "preparation ownership",
    structuredResultKeys: ["status", "documentId", "revisionId"],
    continuationHook: "cognitiveContinueFromFacts",
    interruptionRecovery: "creationCorrelationKey / reconstituteConfirmedD4Effects",
  },
  {
    capabilityId: "d5.pilotage_command",
    ownerDomain: "D5",
    invokeOwnerRef: "applyConversationalAuthority→executePilotageCommand",
    preconditions: ["project linked", "CLEAR intent", "USER message COMPLETE"],
    rightsBoundary: "project ownership + HumanDecision when required",
    structuredResultKeys: ["status", "operation"],
    continuationHook: "authoritySnippets",
    interruptionRecovery: "business_commands clientCommandKey",
  },
  {
    capabilityId: "d6.human_decision",
    ownerDomain: "D6",
    invokeOwnerRef: "insertHumanDecision / authorizePublication",
    preconditions: ["Pilot act", "fingerprint/mandate when effect-bound"],
    rightsBoundary: "D6 owner only — Nora never invents HD",
    structuredResultKeys: ["decisionId", "state"],
    continuationHook: "missionProjection",
    interruptionRecovery: "human_decisions + effect_attempts.decisionId",
  },
  {
    capabilityId: "d7.prepare_publication",
    ownerDomain: "D7",
    invokeOwnerRef: "preparePublication",
    preconditions: ["AVAILABLE revision", "git link", "explicit path for Nora mission"],
    rightsBoundary: "D1/D9 permissions at prepare",
    structuredResultKeys: ["attemptId", "status", "fingerprint"],
    continuationHook: "missionProjection",
    interruptionRecovery: "effect_attempts correlationKey pub:mission:*",
  },
  {
    capabilityId: "future.example_capability",
    ownerDomain: "Dn",
    invokeOwnerRef: "testBoundaryDouble.only",
    preconditions: ["declared by owner"],
    rightsBoundary: "owner rights — never Nora",
    structuredResultKeys: ["status", "id"],
    continuationHook: "cognitiveContinueFromFacts",
    interruptionRecovery: "owner correlation / idempotency",
  },
];

/** GAP-02: exercise a contract by invoking a matching owner adapter; verify result keys. */
export async function mobilizeCapability(
  contract: CapabilityMobilizationContract,
  adapter: CapabilityOwnerAdapter,
  ctx: CapabilityInvokeContext,
): Promise<CapabilityInvokeResult> {
  if (adapter.capabilityId !== contract.capabilityId) {
    throw new StudioError(
      "CONFLICT",
      `Adapter ${adapter.capabilityId} ≠ contract ${contract.capabilityId}`,
    );
  }
  const out = await adapter.invoke(ctx);
  for (const key of contract.structuredResultKeys) {
    if (!(key in out.result) && key !== "status") {
      // status may live on out.status
      if (key === "status" && out.status) continue;
      if (!(key in out) && out.status === undefined) {
        throw new StudioError("INVALID_REQUEST", `Missing structured key ${key}`);
      }
    }
  }
  // Ensure each declared key is present on result or top-level status
  for (const key of contract.structuredResultKeys) {
    const ok =
      key === "status"
        ? out.status != null || out.result.status != null
        : out.result[key] !== undefined;
    if (!ok) {
      throw new StudioError("INVALID_REQUEST", `Owner result missing key ${key}`);
    }
  }
  return out;
}

export function qualifyStudioIntent(userText: string): QualifiedIntent {
  const documentAct = qualifyDocumentAct(userText);
  const publication = qualifyPublicationMission(userText);
  const wantsProjectCreate = PROJECT_CREATE_RE.test(userText);
  const proposedProjectName = extractProposedProjectName(userText);
  const wantsFollowOnDocument =
    wantsProjectCreate && (FOLLOWON_DOC_RE.test(userText) || documentAct.kind === "CREATE");
  let pendingDocumentBrief: string | null = null;
  if (wantsFollowOnDocument) {
    const afterPuis = userText.split(/\bpuis\b/i)[1] ?? userText.split(/\bensuite\b/i)[1];
    pendingDocumentBrief = (afterPuis ?? userText).trim().slice(0, 400);
  }
  const likelyPilotageSignal = PILOTAGE_SIGNAL_RE.test(userText);
  const simpleDialogue =
    !wantsProjectCreate &&
    documentAct.kind === "NONE" &&
    !publication.wantsPublish &&
    !likelyPilotageSignal;

  return {
    wantsProjectCreate,
    proposedProjectName,
    wantsFollowOnDocument,
    pendingDocumentBrief,
    documentAct,
    publication,
    likelyPilotageSignal,
    simpleDialogue,
  };
}

export function emptyMission(clientIntentKey: string, goalSummary: string): MissionProjection {
  return {
    clientIntentKey,
    status: "ACTIVE",
    goalSummary,
    steps: [],
    restitution: "PENDING",
  };
}

export function mergeMissionSteps(
  base: MissionProjection,
  steps: MissionStep[],
  status?: MissionStatus,
): MissionProjection {
  return {
    ...base,
    status: status ?? base.status,
    steps: [...base.steps, ...steps],
  };
}

export type LoadMissionOpts = {
  /** Only return missions awaiting Pilot D2 act. */
  awaitingPilotAct?: boolean;
  /** Match exact clientIntentKey when known. */
  clientIntentKey?: string;
  /** Scope to preparationId stored on projection. */
  preparationId?: string;
  /** Scan depth — default 40 (not a functional gate of 8). */
  limit?: number;
};

/**
 * GAP-04: intention-anchored load — filter by status/key/preparation, not arbitrary first hit.
 */
export async function loadPriorMissionProjection(
  conversationId: string,
  opts?: LoadMissionOpts,
): Promise<MissionProjection | null> {
  const limit = opts?.limit ?? 40;
  const rows = await db
    .select({
      resultJson: conversationTurnCommands.resultJson,
      status: conversationTurnCommands.status,
      clientTurnKey: conversationTurnCommands.clientTurnKey,
      createdAt: conversationTurnCommands.createdAt,
    })
    .from(conversationTurnCommands)
    .where(
      and(
        eq(conversationTurnCommands.conversationId, conversationId),
        eq(conversationTurnCommands.status, "COMPLETE"),
      ),
    )
    .orderBy(desc(conversationTurnCommands.createdAt))
    .limit(limit);

  for (const row of rows) {
    if (!row.resultJson) continue;
    try {
      const parsed = JSON.parse(row.resultJson) as { missionProjection?: MissionProjection | null };
      const m = parsed.missionProjection;
      if (!m?.clientIntentKey) continue;
      if (opts?.awaitingPilotAct && m.status !== "AWAITING_PILOT_ACT") continue;
      if (opts?.clientIntentKey && m.clientIntentKey !== opts.clientIntentKey) continue;
      if (opts?.preparationId && m.preparationId && m.preparationId !== opts.preparationId) {
        continue;
      }
      return m;
    } catch {
      /* skip */
    }
  }
  return null;
}

export function advanceMissionAfterProjectCreated(
  prior: MissionProjection,
  projectId: string,
): MissionProjection {
  const steps = prior.steps.map((s) =>
    s.id === "d2_create_project" || s.capabilityId === "d2.create_project"
      ? {
          ...s,
          status: "DONE" as const,
          reason: `projectId=${projectId}`,
        }
      : s,
  );
  const stillWaiting = steps.some((s) => s.status === "WAITING" || s.status === "PENDING");
  return {
    ...prior,
    steps,
    status: stillWaiting ? "ACTIVE" : "COMPLETED",
    goalSummary: prior.goalSummary.includes("projet")
      ? `${prior.goalSummary} — projet confirmé ${projectId}`
      : prior.goalSummary,
    restitution: "PENDING",
  };
}

export function buildD2AwaitingStep(proposedName: string | null): MissionStep {
  return {
    id: "d2_create_project",
    capabilityId: "d2.create_project",
    status: "WAITING",
    reason: proposedName
      ? `Acte Pilote requis (Créer le projet) — preview «${proposedName}»`
      : "Acte Pilote requis (Créer le projet) — préciser le nom si besoin",
  };
}

export function buildPendingDocumentStep(kind: "CREATE" | "REVISE", brief?: string | null): MissionStep {
  return {
    id: kind === "CREATE" ? "d4_create" : "d4_revise",
    capabilityId: kind === "CREATE" ? "d4.create_document" : "d4.revise_document",
    status: "PENDING",
    reason: brief?.slice(0, 200) ?? "En attente après création projet / contexte",
  };
}

/**
 * GAP-01/06: after D2 createProjectCommand succeeds, continue the SAME intention
 * (pending D4) without requiring a new Pilot message.
 * Command path only — never from listMessages.
 */
export async function continueAfterProjectCreated(input: {
  pilotId: string;
  preparationId: string;
  projectId: string;
}): Promise<{
  continued: boolean;
  missionProjection: MissionProjection | null;
  documentSave: {
    status: string;
    documentId?: string;
    revisionId?: string;
    revisionNumber?: number;
    act?: string;
    reason?: string;
  } | null;
  assistantMessageId: string | null;
  reason?: string;
}> {
  const conv = (
    await db
      .select()
      .from(conversations)
      .where(
        and(
          eq(conversations.preparationId, input.preparationId),
          eq(conversations.ownerPilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!conv) {
    return {
      continued: false,
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
      reason: "NO_CONVERSATION",
    };
  }

  const prior = await loadPriorMissionProjection(conv.id, {
    awaitingPilotAct: true,
    preparationId: input.preparationId,
  });
  if (!prior) {
    return {
      continued: false,
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
      reason: "NO_AWAITING_MISSION",
    };
  }

  let mission = advanceMissionAfterProjectCreated(prior, input.projectId);
  const pendingDoc = mission.steps.find(
    (s) =>
      (s.id === "d4_create" || s.capabilityId === "d4.create_document") &&
      (s.status === "PENDING" || s.status === "WAITING"),
  );

  if (!pendingDoc) {
    // D2-only intention — mark complete, notify conversation
    mission = { ...mission, status: "COMPLETED", restitution: "DELIVERED" };
    const msgId = await appendContinuationAssistantMessage({
      pilotId: input.pilotId,
      conversationId: conv.id,
      content:
        `### Suite de mission\nProjet créé (projectId=${input.projectId}). ` +
        `Aucune étape documentaire dépendante dans l'intention initiale.\n\n` +
        formatMissionAck(mission),
      generationId: `mission-continue-d2:${mission.clientIntentKey}:${input.projectId}`,
    });
    await persistContinuationTurn({
      conversationId: conv.id,
      pilotId: input.pilotId,
      clientIntentKey: mission.clientIntentKey,
      projectId: input.projectId,
      mission,
      assistantMessageId: msgId,
    });
    return {
      continued: true,
      missionProjection: mission,
      documentSave: null,
      assistantMessageId: msgId,
      reason: "D2_ONLY_COMPLETED",
    };
  }

  const original =
    mission.originalUserText ??
    mission.pendingDocumentBrief ??
    "Prépare le document de cadrage demandé dans l'intention initiale.";

  const userPrompt =
    `Le projet a été créé (projectId=${input.projectId}). ` +
    `Poursuis MAINTENANT l'intention initiale du Pilote sans lui redemander.\n\n` +
    `Intention initiale:\n${original}\n\n` +
    `Produis le document demandé (titre + corps en fence sfia-document) pour ce projet.`;

  let documentSave: {
    status: string;
    documentId?: string;
    revisionId?: string;
    revisionNumber?: number;
    act?: string;
    reason?: string;
  } | null = null;

  const reply = await generateNoraReply({
    userText: userPrompt,
    contextSnippets: [`projectId=${input.projectId}`, `preparationId=${input.preparationId}`],
  });

  if (reply.status === "COMPLETE" && reply.content.trim()) {
    const extracted = extractContractualDocumentProposal(reply.content);
    if (extracted.ok) {
      const saved = await savePreparationDocument(
        input.pilotId,
        input.preparationId,
        extracted.title,
        extracted.content,
        undefined,
        {
          correlationKey: `doc:mission-continue:${mission.clientIntentKey}`,
          provenance: {
            sourceKind: "nora",
            generationId: reply.generationId,
            userMessageId: null,
            explicitRequest: true,
            act: "CREATE",
          },
          scope: "document",
        },
      );
      documentSave = { ...saved, act: "CREATE" };
    } else {
      documentSave = { status: "FAILED", reason: extracted.reason, act: "CREATE" };
    }
  } else {
    documentSave = { status: "FAILED", reason: "CONTINUE_GENERATION_FAILED", act: "CREATE" };
  }

  if (documentSave.status === "AVAILABLE" && documentSave.documentId) {
    mission = {
      ...mission,
      steps: mission.steps.map((s) =>
        s.id === "d4_create" || s.capabilityId === "d4.create_document"
          ? {
              ...s,
              status: "DONE" as const,
              documentId: documentSave!.documentId,
              revisionId: documentSave!.revisionId,
              reason: undefined,
            }
          : s,
      ),
      status: "COMPLETED",
      restitution: "DELIVERED",
    };
  } else {
    mission = {
      ...mission,
      steps: mission.steps.map((s) =>
        s.id === "d4_create" || s.capabilityId === "d4.create_document"
          ? {
              ...s,
              status: "FAILED" as const,
              reason: documentSave?.reason ?? documentSave?.status,
            }
          : s,
      ),
      status: "PARTIAL_FAILED_STEP",
      restitution: "CANONICAL",
    };
  }

  const canonical = composeCanonicalMissionRestitution({
    documentEffect:
      documentSave?.status === "AVAILABLE"
        ? {
            act: "CREATE",
            status: "AVAILABLE",
            documentId: documentSave.documentId,
            revisionId: documentSave.revisionId,
            revisionNumber: documentSave.revisionNumber,
          }
        : {
            act: "CREATE",
            status: "FAILED",
            reason: documentSave?.reason,
          },
    restitutionNote: `Reprise automatique après création projet ${input.projectId} — même intention (${mission.clientIntentKey}).`,
  });

  const body =
    reply.status === "COMPLETE" && reply.content.trim()
      ? appendMissionAck(reply.content, mission)
      : appendMissionAck(canonical, mission);

  const msgId = await appendContinuationAssistantMessage({
    pilotId: input.pilotId,
    conversationId: conv.id,
    content: body,
    generationId: `mission-continue-d2d4:${mission.clientIntentKey}:${input.projectId}`,
  });

  await persistContinuationTurn({
    conversationId: conv.id,
    pilotId: input.pilotId,
    clientIntentKey: mission.clientIntentKey,
    projectId: input.projectId,
    mission,
    assistantMessageId: msgId,
    documentSave,
  });

  emitObs({
    event_name: "d3.mission.continue_after_project_created",
    component: "d3.intent_conduction",
    outcome: mission.status === "COMPLETED" ? "SUCCESS" : "PARTIAL",
    meta: {
      project_id: input.projectId,
      client_intent_key: mission.clientIntentKey,
      document_status: documentSave?.status ?? null,
    },
  });

  return {
    continued: true,
    missionProjection: mission,
    documentSave,
    assistantMessageId: msgId,
  };
}

async function appendContinuationAssistantMessage(input: {
  pilotId: string;
  conversationId: string;
  content: string;
  generationId: string;
}): Promise<string> {
  const existing = (
    await db
      .select()
      .from(messages)
      .where(
        and(
          eq(messages.conversationId, input.conversationId),
          eq(messages.generationId, input.generationId),
        ),
      )
      .limit(1)
  )[0];
  if (existing) return existing.id;

  const last = (
    await db
      .select({ ordinal: messages.ordinal })
      .from(messages)
      .where(eq(messages.conversationId, input.conversationId))
      .orderBy(asc(messages.ordinal))
  ).at(-1);
  const ordinal = (last?.ordinal ?? 0) + 1;
  const id = `msg_mcont_${input.generationId.replace(/[^a-zA-Z0-9_:-]/g, "").slice(-48)}`;
  try {
    await db.insert(messages).values({
      id,
      conversationId: input.conversationId,
      role: "assistant",
      content: input.content,
      status: "COMPLETE",
      ordinal,
      generationId: input.generationId,
      createdAt: new Date(),
    });
    return id;
  } catch {
    const again = (
      await db
        .select()
        .from(messages)
        .where(
          and(
            eq(messages.conversationId, input.conversationId),
            eq(messages.generationId, input.generationId),
          ),
        )
        .limit(1)
    )[0];
    if (again) return again.id;
    throw new StudioError("CONFLICT", "Continuation message non persisté");
  }
}

async function persistContinuationTurn(input: {
  conversationId: string;
  pilotId: string;
  clientIntentKey: string;
  projectId: string;
  mission: MissionProjection;
  assistantMessageId: string | null;
  documentSave?: unknown;
}): Promise<void> {
  const clientTurnKey = `mission-continue:${input.clientIntentKey}:${input.projectId}`;
  const existing = (
    await db
      .select()
      .from(conversationTurnCommands)
      .where(
        and(
          eq(conversationTurnCommands.conversationId, input.conversationId),
          eq(conversationTurnCommands.clientTurnKey, clientTurnKey),
        ),
      )
      .limit(1)
  )[0];
  const resultJson = JSON.stringify({
    missionProjection: input.mission,
    documentSave: input.documentSave ?? null,
    continuedAfterProjectId: input.projectId,
  });
  if (existing) {
    await db
      .update(conversationTurnCommands)
      .set({
        status: "COMPLETE",
        resultJson,
        assistantMessageId: input.assistantMessageId,
        updatedAt: new Date(),
      })
      .where(eq(conversationTurnCommands.id, existing.id));
    return;
  }
  await db.insert(conversationTurnCommands).values({
    id: newId("ctc"),
    conversationId: input.conversationId,
    ownerPilotId: input.pilotId,
    clientTurnKey,
    requestFingerprint: `fp-continue-${input.projectId}`,
    operationId: newId("op"),
    status: "COMPLETE",
    resultJson,
    assistantMessageId: input.assistantMessageId,
    ownerToken: null,
    createdAt: new Date(),
    updatedAt: new Date(),
  });
}
