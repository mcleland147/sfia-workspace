/**
 * D3 common intent conduction — domain-agnostic helpers.
 * NOT a parallel engine: no new authority, permissions, or effect journal.
 * Domain owners remain D2/D4/D5/D6/D7/D9; this module only qualifies,
 * projects refs, reconstructs prior mission state, and continues after
 * owner-confirmed acts when the original intention already required it.
 */
import { and, desc, eq, sql } from "drizzle-orm";
import { randomUUID } from "node:crypto";
import { db } from "@/db/client";
import {
  conversationTurnCommands,
  conversations,
  createProjectCommands,
  messages,
} from "@/db/schema";
import { savePreparationDocument } from "@/domains/document/service";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";
import { emitObs } from "@/lib/observability";
import { extractContractualDocumentProposal, qualifyDocumentAct } from "./document-act";
import { generateNoraReply } from "./nora-adapter";
import { TURN_RUNNING_STALE_MS, turnClock } from "./turn-command";
import {
  appendMissionAck,
  composeCanonicalMissionRestitution,
  formatMissionAck,
  qualifyPublicationMission,
  type MissionOwnerActBinding,
  type MissionProjection,
  type MissionStep,
  type MissionStatus,
} from "./mission-continuity";

/**
 * Test-only fault injection for continuation crash points (P3–P6).
 * Must stay no-op in production.
 */
export const continuationRaceHooks: {
  afterReserveBeforeWork?: () => Promise<void>;
  afterNoraBeforeD4?: () => Promise<void>;
  afterD4BeforeCommit?: () => Promise<void>;
} = {};

/** Stable D2↔mission correlation key reused as createProjectCommands.idempotencyKey when known. */
export function d2MissionIdempotencyKey(clientIntentKey: string): string {
  return `d2:mission:${clientIntentKey}`;
}

export function buildD2OwnerActBinding(
  preparationId: string,
  clientIntentKey: string,
): MissionOwnerActBinding {
  return {
    kind: "D2_CREATE_PROJECT",
    preparationId,
    clientIntentKey,
    suggestedIdempotencyKey: d2MissionIdempotencyKey(clientIntentKey),
  };
}

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
  /** Only return missions whose LATEST projection awaits Pilot D2 act. */
  awaitingPilotAct?: boolean;
  /** Match exact clientIntentKey when known. */
  clientIntentKey?: string;
  /** Scope to preparationId stored on projection. */
  preparationId?: string;
  /**
   * Optional soft cap for diagnostics only — correctness must not depend on it.
   * Default: no limit (full conversation turn history for this conversation).
   */
  limit?: number;
};

/**
 * G1/G3: collapse to latest projection per clientIntentKey across ALL COMPLETE turns
 * for the conversation. A completed continuation supersedes an older AWAITING snapshot.
 */
export async function loadLatestMissionsByIntentKey(
  conversationId: string,
  opts?: { limit?: number },
): Promise<Map<string, MissionProjection>> {
  const q = db
    .select({
      resultJson: conversationTurnCommands.resultJson,
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
    .orderBy(desc(conversationTurnCommands.createdAt));

  const rows = opts?.limit != null ? await q.limit(opts.limit) : await q;
  const latest = new Map<string, MissionProjection>();
  for (const row of rows) {
    if (!row.resultJson) continue;
    try {
      const parsed = JSON.parse(row.resultJson) as { missionProjection?: MissionProjection | null };
      const m = parsed.missionProjection;
      if (!m?.clientIntentKey) continue;
      if (!latest.has(m.clientIntentKey)) {
        latest.set(m.clientIntentKey, m);
      }
    } catch {
      /* skip */
    }
  }
  return latest;
}

/**
 * Intention-anchored load — uses latest-per-key map (never an older AWAITING after COMPLETE).
 */
export async function loadPriorMissionProjection(
  conversationId: string,
  opts?: LoadMissionOpts,
): Promise<MissionProjection | null> {
  const latest = await loadLatestMissionsByIntentKey(conversationId, {
    limit: opts?.limit,
  });
  const candidates = [...latest.values()].filter((m) => {
    if (opts?.clientIntentKey && m.clientIntentKey !== opts.clientIntentKey) return false;
    if (opts?.preparationId && m.preparationId && m.preparationId !== opts.preparationId) {
      return false;
    }
    if (opts?.awaitingPilotAct && m.status !== "AWAITING_PILOT_ACT") return false;
    return true;
  });
  if (opts?.clientIntentKey) {
    return candidates[0] ?? null;
  }
  // Prefer most recently updated awaiting (map iteration = insertion = newest-first scan).
  return candidates[0] ?? null;
}

export type MissionD2Resolve =
  | { status: "OK"; mission: MissionProjection }
  | { status: "ALREADY_CONTINUED"; mission: MissionProjection }
  | { status: "NO_AWAITING_MISSION" }
  | { status: "MISSION_KEY_MISMATCH"; reason: string }
  | { status: "MISSION_NAME_MISMATCH"; reason: string; expected: string; received: string }
  | { status: "AMBIGUOUS_AWAITING"; count: number };

function normalizeProjectName(name: string): string {
  return name.trim().replace(/[.]+$/g, "").replace(/\s+/g, " ").toLowerCase();
}

/**
 * Server-authoritative binding of a D2 create act to an awaiting mission.
 * Client clientIntentKey is a hint that must match DB truth — never silent fallback
 * to another mission when the hint is wrong (B/C).
 */
export async function verifyMissionForD2Act(input: {
  conversationId: string;
  preparationId: string;
  clientIntentKey?: string | null;
  /** When set with an awaiting mission that declared a name, must be compatible. */
  projectName?: string | null;
}): Promise<MissionD2Resolve> {
  const latest = await loadLatestMissionsByIntentKey(input.conversationId);
  const awaiting = [...latest.values()].filter(
    (m) =>
      m.status === "AWAITING_PILOT_ACT" &&
      (!m.preparationId || m.preparationId === input.preparationId),
  );

  const hint = input.clientIntentKey?.trim() || null;
  if (hint) {
    const hinted = latest.get(hint);
    if (!hinted) {
      return {
        status: "MISSION_KEY_MISMATCH",
        reason: "clientIntentKey unknown for this conversation",
      };
    }
    if (hinted.preparationId && hinted.preparationId !== input.preparationId) {
      return {
        status: "MISSION_KEY_MISMATCH",
        reason: "clientIntentKey belongs to another preparation",
      };
    }
    if (hinted.status === "AWAITING_PILOT_ACT") {
      const expected = hinted.proposedProjectName?.trim();
      const received = input.projectName?.trim();
      if (expected && received && normalizeProjectName(expected) !== normalizeProjectName(received)) {
        return {
          status: "MISSION_NAME_MISMATCH",
          reason: "projectName incompatible with awaiting mission proposal",
          expected,
          received,
        };
      }
      return { status: "OK", mission: hinted };
    }
    return { status: "ALREADY_CONTINUED", mission: hinted };
  }

  if (awaiting.length === 1) return { status: "OK", mission: awaiting[0]! };
  if (awaiting.length === 0) return { status: "NO_AWAITING_MISSION" };
  return { status: "AMBIGUOUS_AWAITING", count: awaiting.length };
}

/**
 * G1 — authorize a mission-bound D2 create BEFORE any project mutation.
 * Classic path (no clientIntentKey) remains create-only without mission binding.
 * clientIntentKey never authorizes by itself: DB mission truth decides.
 */
export type D2MissionCreateAuthorization =
  | { outcome: "CLASSIC" }
  | {
      outcome: "AUTHORIZED" | "REPLAY_ALLOWED";
      mission: MissionProjection;
      idempotencyKey: string;
    }
  | {
      outcome: "FORBIDDEN";
      code:
        | "MISSION_KEY_MISMATCH"
        | "MISSION_NAME_MISMATCH"
        | "AMBIGUOUS_AWAITING"
        | "NO_CONVERSATION"
        | "FORBIDDEN";
      reason: string;
    };

export async function authorizeMissionBoundD2Create(input: {
  pilotId: string;
  preparationId: string;
  clientIntentKey?: string | null;
  projectName?: string | null;
}): Promise<D2MissionCreateAuthorization> {
  const hint = input.clientIntentKey?.trim() || null;
  if (!hint) {
    // Explicit classic create: do not silently bind a neighboring awaiting mission.
    return { outcome: "CLASSIC" };
  }

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
      outcome: "FORBIDDEN",
      code: "NO_CONVERSATION",
      reason: "no conversation for preparation/pilot",
    };
  }

  const verified = await verifyMissionForD2Act({
    conversationId: conv.id,
    preparationId: input.preparationId,
    clientIntentKey: hint,
    projectName: input.projectName,
  });

  if (verified.status === "OK") {
    return {
      outcome: "AUTHORIZED",
      mission: verified.mission,
      idempotencyKey: d2MissionIdempotencyKey(verified.mission.clientIntentKey),
    };
  }
  if (verified.status === "ALREADY_CONTINUED") {
    return {
      outcome: "REPLAY_ALLOWED",
      mission: verified.mission,
      idempotencyKey: d2MissionIdempotencyKey(verified.mission.clientIntentKey),
    };
  }
  if (verified.status === "MISSION_KEY_MISMATCH") {
    return { outcome: "FORBIDDEN", code: "MISSION_KEY_MISMATCH", reason: verified.reason };
  }
  if (verified.status === "MISSION_NAME_MISMATCH") {
    return {
      outcome: "FORBIDDEN",
      code: "MISSION_NAME_MISMATCH",
      reason: `${verified.reason} (expected «${verified.expected}», received «${verified.received}»)`,
    };
  }
  if (verified.status === "AMBIGUOUS_AWAITING") {
    return {
      outcome: "FORBIDDEN",
      code: "AMBIGUOUS_AWAITING",
      reason: `ambiguous awaiting missions: ${verified.count}`,
    };
  }
  return {
    outcome: "FORBIDDEN",
    code: "MISSION_KEY_MISMATCH",
    reason: "clientIntentKey provided but no awaiting mission matched",
  };
}

/** Structured awaiting mission for UI/API — never parse Nora prose. */
export async function getAwaitingMissionForPreparation(
  pilotId: string,
  preparationId: string,
): Promise<MissionProjection | null> {
  const conv = (
    await db
      .select()
      .from(conversations)
      .where(
        and(
          eq(conversations.preparationId, preparationId),
          eq(conversations.ownerPilotId, pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!conv) return null;
  return loadPriorMissionProjection(conv.id, {
    awaitingPilotAct: true,
    preparationId,
  });
}

/** @deprecated Prefer verifyMissionForD2Act — kept for narrow test helpers. */
export async function resolveMissionAwaitingD2Create(input: {
  conversationId: string;
  preparationId: string;
  projectId: string;
  projectName?: string | null;
  clientIntentKey?: string | null;
}): Promise<MissionProjection | null> {
  const v = await verifyMissionForD2Act({
    conversationId: input.conversationId,
    preparationId: input.preparationId,
    clientIntentKey: input.clientIntentKey,
  });
  return v.status === "OK" ? v.mission : null;
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

type DocumentSaveSummary = {
  status: string;
  documentId?: string;
  revisionId?: string;
  revisionNumber?: number;
  act?: string;
  reason?: string;
};

function continuationTurnKey(clientIntentKey: string, projectId: string): string {
  return `mission-continue:${clientIntentKey}:${projectId}`;
}

function isStaleContinuation(updatedAt: Date | null | undefined): boolean {
  if (!updatedAt) return true;
  return turnClock.nowMs() - updatedAt.getTime() > TURN_RUNNING_STALE_MS;
}

type ContinuationClaim =
  | {
      kind: "replay";
      missionProjection: MissionProjection;
      documentSave: DocumentSaveSummary | null;
      assistantMessageId: string | null;
    }
  | { kind: "fresh"; commandId: string; ownerToken: string; clientTurnKey: string }
  | { kind: "in_progress" };

/**
 * Short transactional claim — xact advisory lock only (released at TX end).
 * Never hold a session lock across the pool or across Nora/D4 work.
 */
async function claimContinuationOwnership(input: {
  conversationId: string;
  pilotId: string;
  clientIntentKey: string;
  projectId: string;
  missionSnapshot: MissionProjection;
}): Promise<ContinuationClaim> {
  const clientTurnKey = continuationTurnKey(input.clientIntentKey, input.projectId);
  return db.transaction(async (tx) => {
    await tx.execute(
      sql`SELECT pg_advisory_xact_lock(hashtext(${input.conversationId}), hashtext(${clientTurnKey}))`,
    );
    const existing = (
      await tx
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

    if (existing?.status === "COMPLETE" && existing.resultJson) {
      try {
        const parsed = JSON.parse(existing.resultJson) as {
          missionProjection?: MissionProjection | null;
          documentSave?: DocumentSaveSummary | null;
        };
        if (parsed.missionProjection && parsed.missionProjection.status !== "AWAITING_PILOT_ACT") {
          return {
            kind: "replay" as const,
            missionProjection: parsed.missionProjection,
            documentSave: parsed.documentSave ?? null,
            assistantMessageId: existing.assistantMessageId,
          };
        }
      } catch {
        /* fall through to reclaim */
      }
    }

    if (existing && (existing.status === "RUNNING" || existing.status === "ACCEPTED")) {
      if (!isStaleContinuation(existing.updatedAt)) {
        return { kind: "in_progress" as const };
      }
      await tx
        .update(conversationTurnCommands)
        .set({
          status: "UNKNOWN",
          errorCategory: "RECONCILED_STALE_CONTINUATION",
          ownerToken: `revoked_${randomUUID()}`,
          updatedAt: new Date(turnClock.nowMs()),
        })
        .where(
          and(
            eq(conversationTurnCommands.id, existing.id),
            eq(conversationTurnCommands.status, existing.status),
          ),
        );
    }

    const ownerToken = `own_${randomUUID()}`;
    const resultJson = JSON.stringify({
      missionProjection: input.missionSnapshot,
      continuedAfterProjectId: input.projectId,
      phase: "RESERVED",
    });

    if (existing) {
      const cas = await tx
        .update(conversationTurnCommands)
        .set({
          status: "RUNNING",
          ownerToken,
          resultJson,
          errorCategory: null,
          assistantMessageId: null,
          updatedAt: new Date(turnClock.nowMs()),
        })
        .where(
          and(
            eq(conversationTurnCommands.id, existing.id),
            sql`${conversationTurnCommands.status} IN ('UNKNOWN', 'FAILED', 'COMPLETE')`,
          ),
        )
        .returning({ id: conversationTurnCommands.id });
      if (!cas[0]) return { kind: "in_progress" as const };
      return {
        kind: "fresh" as const,
        commandId: existing.id,
        ownerToken,
        clientTurnKey,
      };
    }

    const commandId = newId("ctc");
    await tx.insert(conversationTurnCommands).values({
      id: commandId,
      conversationId: input.conversationId,
      ownerPilotId: input.pilotId,
      clientTurnKey,
      requestFingerprint: `fp-continue-${input.projectId}`,
      operationId: newId("op"),
      status: "RUNNING",
      ownerToken,
      resultJson,
      assistantMessageId: null,
      createdAt: new Date(turnClock.nowMs()),
      updatedAt: new Date(turnClock.nowMs()),
    });
    return { kind: "fresh" as const, commandId, ownerToken, clientTurnKey };
  });
}

/** Terminal commit under ownership fence — short TX, CAS on owner_token. */
async function commitContinuationOwned(input: {
  commandId: string;
  ownerToken: string;
  conversationId: string;
  mission: MissionProjection;
  projectId: string;
  documentSave: DocumentSaveSummary | null;
  assistantContent: string;
  generationId: string;
}): Promise<{ applied: boolean; assistantMessageId: string | null }> {
  return db.transaction(async (tx) => {
    const owned = (
      await tx
        .select()
        .from(conversationTurnCommands)
        .where(
          and(
            eq(conversationTurnCommands.id, input.commandId),
            eq(conversationTurnCommands.ownerToken, input.ownerToken),
            eq(conversationTurnCommands.status, "RUNNING"),
          ),
        )
        .limit(1)
    )[0];
    if (!owned) return { applied: false, assistantMessageId: null };

    let assistantMessageId: string | null = null;
    const existingMsg = (
      await tx
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
    if (existingMsg) {
      assistantMessageId = existingMsg.id;
    } else {
      const last = (
        await tx
          .select({ ordinal: messages.ordinal })
          .from(messages)
          .where(eq(messages.conversationId, input.conversationId))
          .orderBy(sql`${messages.ordinal} desc`)
          .limit(1)
      )[0];
      assistantMessageId = `msg_mcont_${input.generationId.replace(/[^a-zA-Z0-9_:-]/g, "").slice(-48)}`;
      await tx.insert(messages).values({
        id: assistantMessageId,
        conversationId: input.conversationId,
        role: "assistant",
        content: input.assistantContent,
        status: "COMPLETE",
        ordinal: (last?.ordinal ?? 0) + 1,
        generationId: input.generationId,
        createdAt: new Date(turnClock.nowMs()),
      });
    }

    const resultJson = JSON.stringify({
      missionProjection: input.mission,
      documentSave: input.documentSave,
      continuedAfterProjectId: input.projectId,
    });
    const cas = await tx
      .update(conversationTurnCommands)
      .set({
        status: "COMPLETE",
        resultJson,
        assistantMessageId,
        updatedAt: new Date(turnClock.nowMs()),
      })
      .where(
        and(
          eq(conversationTurnCommands.id, input.commandId),
          eq(conversationTurnCommands.ownerToken, input.ownerToken),
          eq(conversationTurnCommands.status, "RUNNING"),
        ),
      )
      .returning({ id: conversationTurnCommands.id });

    if (!cas[0]) {
      throw new StudioError("CONFLICT", "CONTINUATION_OWNERSHIP_LOST");
    }
    return { applied: true, assistantMessageId };
  });
}

/**
 * After D2 createProjectCommand succeeds, continue the SAME intention (pending D4)
 * without a new Pilot message. COMMAND path only — never from listMessages.
 * Concurrency: short xact claim + owner_token fence (no session advisory lock).
 */
export async function continueAfterProjectCreated(input: {
  pilotId: string;
  preparationId: string;
  projectId: string;
  projectName?: string | null;
  /** Hint only — server verifies against durable mission state. */
  clientIntentKey?: string | null;
}): Promise<{
  continued: boolean;
  missionProjection: MissionProjection | null;
  documentSave: DocumentSaveSummary | null;
  assistantMessageId: string | null;
  reason?: string;
  replayed?: boolean;
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

  const verified = await verifyMissionForD2Act({
    conversationId: conv.id,
    preparationId: input.preparationId,
    clientIntentKey: input.clientIntentKey,
    projectName: input.projectName,
  });

  if (verified.status === "MISSION_KEY_MISMATCH") {
    return {
      continued: false,
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
      reason: "MISSION_KEY_MISMATCH",
    };
  }
  if (verified.status === "MISSION_NAME_MISMATCH") {
    return {
      continued: false,
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
      reason: "MISSION_NAME_MISMATCH",
    };
  }
  if (verified.status === "AMBIGUOUS_AWAITING") {
    return {
      continued: false,
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
      reason: "AMBIGUOUS_AWAITING",
    };
  }
  if (verified.status === "ALREADY_CONTINUED") {
    const replay = await loadContinuationReplay(
      conv.id,
      verified.mission.clientIntentKey,
      input.projectId,
    );
    if (replay) {
      return { ...replay, continued: true, replayed: true, reason: "ALREADY_CONTINUED" };
    }
    return {
      continued: false,
      missionProjection: verified.mission,
      documentSave: null,
      assistantMessageId: null,
      reason: "MISSION_NO_LONGER_AWAITING",
    };
  }
  if (verified.status === "NO_AWAITING_MISSION") {
    return {
      continued: false,
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
      reason: "NO_AWAITING_MISSION",
    };
  }

  const prior = verified.mission;
  let mission = advanceMissionAfterProjectCreated(prior, input.projectId);

  const claim = await claimContinuationOwnership({
    conversationId: conv.id,
    pilotId: input.pilotId,
    clientIntentKey: prior.clientIntentKey,
    projectId: input.projectId,
    missionSnapshot: mission,
  });

  if (claim.kind === "replay") {
    return {
      continued: true,
      missionProjection: claim.missionProjection,
      documentSave: claim.documentSave,
      assistantMessageId: claim.assistantMessageId,
      replayed: true,
      reason: "ALREADY_CONTINUED",
    };
  }
  if (claim.kind === "in_progress") {
    return {
      continued: false,
      missionProjection: mission,
      documentSave: null,
      assistantMessageId: null,
      reason: "CONTINUATION_IN_PROGRESS",
    };
  }

  if (continuationRaceHooks.afterReserveBeforeWork) {
    await continuationRaceHooks.afterReserveBeforeWork();
  }

  const pendingDoc = mission.steps.find(
    (s) =>
      (s.id === "d4_create" || s.capabilityId === "d4.create_document") &&
      (s.status === "PENDING" || s.status === "WAITING"),
  );

  let documentSave: DocumentSaveSummary | null = null;
  let assistantContent: string;
  let generationId: string;

  if (!pendingDoc) {
    mission = { ...mission, status: "COMPLETED", restitution: "DELIVERED" };
    generationId = `mission-continue-d2:${mission.clientIntentKey}:${input.projectId}`;
    assistantContent =
      `### Suite de mission\nProjet créé (projectId=${input.projectId}). ` +
      `Aucune étape documentaire dépendante dans l'intention initiale.\n\n` +
      formatMissionAck(mission);
  } else {
    const original =
      mission.originalUserText ??
      mission.pendingDocumentBrief ??
      "Prépare le document de cadrage demandé dans l'intention initiale.";
    const userPrompt =
      `Le projet a été créé (projectId=${input.projectId}). ` +
      `Poursuis MAINTENANT l'intention initiale du Pilote sans lui redemander.\n\n` +
      `Intention initiale:\n${original}\n\n` +
      `Produis le document demandé (titre + corps en fence sfia-document) pour ce projet.`;

    const reply = await generateNoraReply({
      userText: userPrompt,
      contextSnippets: [`projectId=${input.projectId}`, `preparationId=${input.preparationId}`],
    });

    if (continuationRaceHooks.afterNoraBeforeD4) {
      await continuationRaceHooks.afterNoraBeforeD4();
    }

    if (reply.status === "COMPLETE" && reply.content.trim()) {
      const extracted = extractContractualDocumentProposal(reply.content);
      if (extracted.ok) {
        const d4Contract = CAPABILITY_CONTRACTS.find(
          (c) => c.capabilityId === "d4.create_document",
        )!;
        const mobilized = await mobilizeCapability(
          d4Contract,
          {
            capabilityId: "d4.create_document",
            invoke: async (ctx) => {
              const saved = await savePreparationDocument(
                ctx.pilotId,
                ctx.preparationId!,
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
              return {
                status: saved.status,
                result: {
                  status: saved.status,
                  documentId: "documentId" in saved ? saved.documentId ?? null : null,
                  revisionId: "revisionId" in saved ? saved.revisionId ?? null : null,
                  revisionNumber:
                    "revisionNumber" in saved ? saved.revisionNumber ?? null : null,
                  reason: "reason" in saved ? (saved as { reason?: string }).reason : undefined,
                },
              };
            },
          },
          {
            pilotId: input.pilotId,
            preparationId: input.preparationId,
            projectId: input.projectId,
          },
        );
        documentSave = {
          status: String(mobilized.result.status ?? mobilized.status),
          documentId: mobilized.result.documentId as string | undefined,
          revisionId: mobilized.result.revisionId as string | undefined,
          revisionNumber: mobilized.result.revisionNumber as number | undefined,
          reason: mobilized.result.reason as string | undefined,
          act: "CREATE",
        };
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
    assistantContent =
      reply.status === "COMPLETE" && reply.content.trim()
        ? appendMissionAck(reply.content, mission)
        : appendMissionAck(canonical, mission);
    generationId = `mission-continue-d2d4:${mission.clientIntentKey}:${input.projectId}`;
  }

  if (continuationRaceHooks.afterD4BeforeCommit) {
    await continuationRaceHooks.afterD4BeforeCommit();
  }

  try {
    const committed = await commitContinuationOwned({
      commandId: claim.commandId,
      ownerToken: claim.ownerToken,
      conversationId: conv.id,
      mission,
      projectId: input.projectId,
      documentSave,
      assistantContent,
      generationId,
    });

    emitObs({
      event_name: "d3.mission.continue_after_project_created",
      component: "d3.intent_conduction",
      outcome: mission.status === "COMPLETED" ? "SUCCESS" : "PARTIAL",
      meta: {
        project_id: input.projectId,
        client_intent_key: mission.clientIntentKey,
        document_status: documentSave?.status ?? null,
        ownership_applied: committed.applied,
      },
    });

    return {
      continued: committed.applied,
      missionProjection: mission,
      documentSave,
      assistantMessageId: committed.assistantMessageId,
      reason: pendingDoc ? undefined : "D2_ONLY_COMPLETED",
    };
  } catch (e) {
    if (e instanceof StudioError && e.message.includes("CONTINUATION_OWNERSHIP_LOST")) {
      const replay = await loadContinuationReplay(conv.id, prior.clientIntentKey, input.projectId);
      if (replay) {
        return { ...replay, continued: true, replayed: true, reason: "ALREADY_CONTINUED" };
      }
      return {
        continued: false,
        missionProjection: mission,
        documentSave,
        assistantMessageId: null,
        reason: "CONTINUATION_OWNERSHIP_LOST",
      };
    }
    throw e;
  }
}

async function loadContinuationReplay(
  conversationId: string,
  clientIntentKey: string,
  projectId: string,
): Promise<{
  continued: boolean;
  missionProjection: MissionProjection | null;
  documentSave: DocumentSaveSummary | null;
  assistantMessageId: string | null;
} | null> {
  const clientTurnKey = continuationTurnKey(clientIntentKey, projectId);
  const existing = (
    await db
      .select()
      .from(conversationTurnCommands)
      .where(
        and(
          eq(conversationTurnCommands.conversationId, conversationId),
          eq(conversationTurnCommands.clientTurnKey, clientTurnKey),
        ),
      )
      .limit(1)
  )[0];
  if (!existing || existing.status !== "COMPLETE" || !existing.resultJson) return null;
  try {
    const parsed = JSON.parse(existing.resultJson) as {
      missionProjection?: MissionProjection | null;
      documentSave?: DocumentSaveSummary | null;
    };
    if (!parsed.missionProjection || parsed.missionProjection.status === "AWAITING_PILOT_ACT") {
      return null;
    }
    return {
      continued: true,
      missionProjection: parsed.missionProjection,
      documentSave: parsed.documentSave ?? null,
      assistantMessageId: existing.assistantMessageId,
    };
  } catch {
    return null;
  }
}

/**
 * G2 — nominal recovery after D2 confirmed + interrupted continuation.
 * COMMAND path only (never listMessages/GET). Idempotent; reuses continueAfterProjectCreated
 * fencing. Trigger surfaces: create-project ALREADY_CREATED retry, project resume POST,
 * next chat turn when project already linked.
 */
export async function recoverPendingMissionContinuation(input: {
  pilotId: string;
  projectId: string;
}): Promise<{
  attempted: boolean;
  recovered: boolean;
  reason?: string;
  missionProjection: MissionProjection | null;
  documentSave: DocumentSaveSummary | null;
  assistantMessageId: string | null;
  replayed?: boolean;
}> {
  const conv = (
    await db
      .select()
      .from(conversations)
      .where(
        and(
          eq(conversations.projectId, input.projectId),
          eq(conversations.ownerPilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!conv || !conv.preparationId) {
    return {
      attempted: false,
      recovered: false,
      reason: "NO_CONVERSATION",
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
    };
  }

  const latest = await loadLatestMissionsByIntentKey(conv.id);
  const awaiting = [...latest.values()].filter(
    (m) =>
      m.status === "AWAITING_PILOT_ACT" &&
      (!m.preparationId || m.preparationId === conv.preparationId),
  );

  // Incomplete continuation turns for this project (crash mid-continue).
  const contPrefix = `mission-continue:`;
  const contSuffix = `:${input.projectId}`;
  const turns = await db
    .select()
    .from(conversationTurnCommands)
    .where(eq(conversationTurnCommands.conversationId, conv.id));
  const incompleteKeys = turns
    .filter(
      (t) =>
        (t.status === "RUNNING" || t.status === "ACCEPTED" || t.status === "UNKNOWN") &&
        t.clientTurnKey.startsWith(contPrefix) &&
        t.clientTurnKey.endsWith(contSuffix),
    )
    .map((t) => t.clientTurnKey.slice(contPrefix.length, t.clientTurnKey.length - contSuffix.length))
    .filter((k) => k.length > 0);

  let clientIntentKey: string | null = null;
  if (incompleteKeys.length === 1) {
    clientIntentKey = incompleteKeys[0]!;
  } else if (awaiting.length === 1) {
    clientIntentKey = awaiting[0]!.clientIntentKey;
  } else if (incompleteKeys.length > 1 || awaiting.length > 1) {
    return {
      attempted: true,
      recovered: false,
      reason: "AMBIGUOUS_PENDING",
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
    };
  } else {
    // Also accept mission-bound create_project_commands already committed for this project.
    const missionCmds = await db
      .select()
      .from(createProjectCommands)
      .where(
        and(
          eq(createProjectCommands.pilotId, input.pilotId),
          eq(createProjectCommands.projectId, input.projectId),
          eq(createProjectCommands.preparationId, conv.preparationId),
        ),
      )
      .orderBy(desc(createProjectCommands.createdAt))
      .limit(8);
    const missionCmd = missionCmds.find((r) =>
      (r.idempotencyKey ?? "").startsWith("d2:mission:"),
    );
    if (missionCmd?.idempotencyKey?.startsWith("d2:mission:")) {
      const key = missionCmd.idempotencyKey.slice("d2:mission:".length);
      const mission = latest.get(key);
      if (!mission || mission.status !== "COMPLETED") {
        clientIntentKey = key;
      }
    }
  }

  if (!clientIntentKey) {
    return {
      attempted: false,
      recovered: false,
      reason: "NOTHING_PENDING",
      missionProjection: null,
      documentSave: null,
      assistantMessageId: null,
    };
  }

  const cont = await continueAfterProjectCreated({
    pilotId: input.pilotId,
    preparationId: conv.preparationId,
    projectId: input.projectId,
    clientIntentKey,
  });

  return {
    attempted: true,
    recovered: Boolean(cont.continued),
    reason: cont.reason,
    missionProjection: cont.missionProjection,
    documentSave: cont.documentSave,
    assistantMessageId: cont.assistantMessageId,
    replayed: cont.replayed,
  };
}
