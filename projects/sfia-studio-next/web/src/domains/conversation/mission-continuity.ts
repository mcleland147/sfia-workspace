/**
 * Mission continuity — logical helpers inside D3 (NOT a parallel engine).
 * Anchors wait on effect_attempts PREPARED; never calls authorize for "waiting".
 * Owner truth remains D4/D6/D7; MissionProjection is refs-only.
 *
 * Git-specific adapters (PUBLISH_RE, pub:mission: keys) stay here as domain
 * adaptations — the cognitive continue helper is capacity-agnostic.
 */
import { and, asc, eq, like, or } from "drizzle-orm";
import { db } from "@/db/client";
import { conversations, effectAttempts, messages } from "@/db/schema";
import {
  dispatchPublication,
  preparePublication,
  reconcileAttempt,
} from "@/domains/execution/effect-service";
import { listProjectGitLinks } from "@/domains/integrations/project-link-service";
import { StudioError } from "@/lib/http-errors";
import { emitObs } from "@/lib/observability";
import { generateNoraReply } from "./nora-adapter";
import type { DocumentEffectSummary } from "./document-act";

export type MissionStatus =
  | "ACTIVE"
  | "AWAITING_PILOT_ACT"
  | "AWAITING_PILOT_AUTH"
  | "AWAITING_CLARIFICATION"
  | "RESTITUTION_PENDING"
  | "PARTIAL_FAILED_STEP"
  | "COMPLETED"
  | "STOPPED";

export type MissionStepStatus =
  | "PENDING"
  | "DONE"
  | "FAILED"
  | "WAITING"
  | "SKIPPED";

export type MissionStep = {
  id: string;
  capabilityId: string;
  status: MissionStepStatus;
  correlationKey?: string;
  attemptId?: string;
  documentId?: string;
  revisionId?: string;
  decisionId?: string;
  reason?: string;
};

export type MissionOwnerActBinding = {
  kind: "D2_CREATE_PROJECT";
  preparationId: string;
  clientIntentKey: string;
  /** Recommended createProjectCommands.idempotencyKey correlation (not a second journal). */
  suggestedIdempotencyKey: string;
};

export type MissionProjection = {
  clientIntentKey: string;
  status: MissionStatus;
  goalSummary: string;
  steps: MissionStep[];
  /** Restitution layer — not owner truth. */
  restitution: "PENDING" | "DELIVERED" | "CANONICAL";
  /** Original Pilot utterance — anchors continuation without a second ask. */
  originalUserText?: string;
  /** Brief of pending document step (if compound intention). */
  pendingDocumentBrief?: string;
  /** Preparation that owns this mission (scope anchor). */
  preparationId?: string;
  /** Exact project name proposed for D2 preview / act correlation. */
  proposedProjectName?: string;
  /** Durable binding of the awaited owner act to this intention. */
  ownerActBinding?: MissionOwnerActBinding;
};

export type PublicationMissionIntent = {
  wantsDocumentCreate: boolean;
  wantsPublish: boolean;
  targetPath: string | null;
  targetBranch: string | null;
  ambiguous: boolean;
  needsExplicitPath: boolean;
  clarify?: string;
};

/** Server-side marker: only attempts prepared with this prefix are Nora missions. */
export const NORA_MISSION_PUB_PREFIX = "pub:mission:";

/** Technical path/branch capture — not a métier intent router. */
const PATH_RE =
  /(?:(?:chemin|path|fichier)\s*[:=]?\s*|sous\s+)[`"]?([A-Za-z0-9_./\-]+\.(?:md|markdown|txt))[`"]?/i;

const BRANCH_RE =
  /(?:branche|branch)\s*[:=]?\s*[`"]?([A-Za-z0-9._/\-]+)[`"]?/i;

export function isNoraMissionPublicationKey(correlationKey: string): boolean {
  return correlationKey.startsWith(NORA_MISSION_PUB_PREFIX);
}

export function attemptIsNoraMission(row: { correlationKey: string }): boolean {
  return isNoraMissionPublicationKey(row.correlationKey);
}

/**
 * SEM-02 — retired as production métier router.
 * Publication intent comes from Nora semantic qualification (capability d7.*).
 * Technical path/branch helpers remain available for already-qualified missions.
 */
export function qualifyPublicationMission(_userText: string): PublicationMissionIntent {
  return {
    wantsDocumentCreate: false,
    wantsPublish: false,
    targetPath: null,
    targetBranch: null,
    ambiguous: false,
    needsExplicitPath: false,
  };
}

/** Extract explicit publication path from text when an effect is already qualified. */
export function extractPublicationPathHint(userText: string): string | null {
  return userText.match(PATH_RE)?.[1] ?? null;
}

export function extractPublicationBranchHint(userText: string): string | null {
  return userText.match(BRANCH_RE)?.[1] ?? null;
}

export function missionCorrelationKeys(clientIntentKey: string): {
  document: string;
  publication: string;
} {
  const key = clientIntentKey.trim();
  return {
    document: `doc:mission:${key}`,
    publication: `${NORA_MISSION_PUB_PREFIX}${key}`,
  };
}

export function formatMissionAck(mission: MissionProjection): string {
  const lines = [
    "### Suite de mission (projection D3 — refs owners)",
    `status=${mission.status}`,
    `clientIntentKey=${mission.clientIntentKey}`,
    `restitution=${mission.restitution}`,
  ];
  for (const s of mission.steps) {
    lines.push(
      `- step=${s.id} capability=${s.capabilityId} status=${s.status}` +
        (s.attemptId ? ` attemptId=${s.attemptId}` : "") +
        (s.documentId ? ` documentId=${s.documentId}` : "") +
        (s.revisionId ? ` revisionId=${s.revisionId}` : "") +
        (s.decisionId ? ` decisionId=${s.decisionId}` : "") +
        (s.reason ? ` reason=${s.reason}` : ""),
    );
  }
  if (mission.status === "AWAITING_PILOT_ACT") {
    lines.push(
      "",
      "Acte Pilote explicite requis (ex. Créer le projet) — Nora n'exécute pas D2 à la place du Pilote.",
      "Après création confirmée, Studio reprend automatiquement les étapes dépendantes de la même intention (sans nouveau message Pilote).",
    );
  }
  if (mission.status === "AWAITING_PILOT_AUTH") {
    lines.push(
      "",
      "Préparation Git PREPARED — aucune HumanDecision créée.",
      "Autorisation Pilote requise (authorizePublication) avant toute publication.",
      "Après autorisation, Studio reprend automatiquement le dispatch pour cette mission Nora.",
    );
  }
  if (mission.status === "AWAITING_CLARIFICATION") {
    lines.push("", "Précision Pilote requise avant préparation Git (pas d'effet D7).");
  }
  if (mission.status === "RESTITUTION_PENDING") {
    lines.push(
      "",
      "Effets propriétaires conservés — restitution cognitive en attente (pas de rejeu d'effet).",
    );
  }
  return lines.join("\n");
}

/**
 * ML4C SEM / A-007: mission state stays in structured missionProjection.
 * Do not dump status/clientIntentKey/step/capability into Nora user text.
 */
export function appendMissionAck(
  content: string,
  mission: MissionProjection | null,
): string {
  void mission;
  return content;
}

export function composeCanonicalMissionRestitution(input: {
  documentEffect?: DocumentEffectSummary | null;
  prepareStatus?: string | null;
  attemptId?: string | null;
  decisionId?: string | null;
  dispatchStatus?: string | null;
  dispatchDetail?: string | null;
  restitutionNote?: string;
}): string {
  const lines = [
    "### Restitution de mission (faits propriétaires)",
    input.restitutionNote ??
      "Synthèse canonique — la génération Nora n'a pas pu compléter la narration.",
    "",
  ];
  if (input.documentEffect) {
    lines.push(
      `Document: act=${input.documentEffect.act} status=${input.documentEffect.status}` +
        (input.documentEffect.documentId ? ` id=${input.documentEffect.documentId}` : "") +
        (input.documentEffect.revisionId ? ` revision=${input.documentEffect.revisionId}` : "") +
        (input.documentEffect.revisionNumber != null
          ? ` v${input.documentEffect.revisionNumber}`
          : ""),
    );
  }
  if (input.prepareStatus) {
    lines.push(
      `Préparation Git: status=${input.prepareStatus}` +
        (input.attemptId ? ` attemptId=${input.attemptId}` : ""),
    );
  }
  if (input.decisionId) {
    lines.push(`Autorisation D6: decisionId=${input.decisionId}`);
  } else if (input.prepareStatus === "PREPARED") {
    lines.push("Autorisation D6: non encore accordée (attente acte Pilote).");
  }
  if (input.dispatchStatus) {
    lines.push(
      `Publication: status=${input.dispatchStatus}` +
        (input.dispatchDetail ? ` detail=${input.dispatchDetail}` : ""),
    );
  }
  return lines.join("\n");
}

/** Capacity-agnostic facts continue — reuses generateNoraReply (no second runner). */
export async function cognitiveContinueFromFacts(input: {
  userText: string;
  factsBlock: string;
  contextSnippets: string[];
  toolScope?: Parameters<typeof generateNoraReply>[0]["toolScope"];
}): Promise<Awaited<ReturnType<typeof generateNoraReply>>> {
  return generateNoraReply({
    userText:
      `${input.userText}\n\n` +
      `### Faits applicatifs confirmés (non négociables — ne pas les contredire)\n` +
      `${input.factsBlock}\n\n` +
      `Produis une restitution fidèle à ces faits. N'affirme aucun effet absent de cette liste. ` +
      `Si des étapes restent dans l'intention, propose la suite sans réexécuter les effets confirmés.`,
    contextSnippets: input.contextSnippets,
    toolScope: input.toolScope,
  });
}

export async function preparePublicationForMission(input: {
  pilotId: string;
  projectId: string;
  documentId: string;
  revisionId: string;
  clientIntentKey: string;
  targetPath: string | null;
  targetBranch: string | null;
}): Promise<
  | {
      ok: true;
      attemptId: string;
      status: string;
      fingerprint: string;
      idempotent?: boolean;
      repositoryId: string;
      targetPath: string;
    }
  | { ok: false; code: string; message: string }
> {
  if (!input.targetPath) {
    return {
      ok: false,
      code: "PATH_REQUIRED",
      message:
        "Chemin de publication non précisé — aucune préparation D7 (pas de défaut silencieux).",
    };
  }
  const links = await listProjectGitLinks(input.pilotId, input.projectId);
  if (links.length === 0) {
    return {
      ok: false,
      code: "NO_GIT_LINK",
      message: "Aucun dépôt Git rattaché au projet — rattachement requis avant préparation.",
    };
  }
  if (links.length > 1) {
    return {
      ok: false,
      code: "AMBIGUOUS_GIT_LINK",
      message: "Plusieurs dépôts rattachés — préciser le dépôt cible.",
    };
  }
  const repositoryId = links[0]!.repositoryId;
  const targetPath = input.targetPath;
  const targetBranch = input.targetBranch ?? "main";
  const keys = missionCorrelationKeys(input.clientIntentKey);
  try {
    const prepared = await preparePublication({
      pilotId: input.pilotId,
      projectId: input.projectId,
      documentId: input.documentId,
      revisionId: input.revisionId,
      repositoryId,
      targetPath,
      targetBranch,
      correlationKey: keys.publication,
    });
    return {
      ok: true,
      attemptId: prepared.attemptId,
      status: prepared.status,
      fingerprint: prepared.fingerprint,
      idempotent: "idempotent" in prepared ? Boolean(prepared.idempotent) : false,
      repositoryId,
      targetPath,
    };
  } catch (e) {
    if (e instanceof StudioError) {
      return { ok: false, code: e.code, message: e.message };
    }
    return { ok: false, code: "PREPARE_EXCEPTION", message: "Préparation Git échouée" };
  }
}

function missionResumeMessageId(attemptId: string): string {
  return `msg_mresume_${attemptId}`;
}

function missionResumeGenerationId(attemptId: string): string {
  return `mission-resume:${attemptId}`;
}

/**
 * After Pilot authorizePublication — automatic dispatch for Nora missions only.
 * Idempotent: COMPLETED returns without re-dispatch; DISPATCHED → reconcile.
 * Restitution message is unique per attempt (P1-C).
 * Cognitive continue after observed result (P1-D), canonical fallback.
 */
export async function resumeMissionAfterPublicationAuthorize(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  decisionId?: string | null;
}): Promise<{
  dispatched: boolean;
  reconciled: boolean;
  status: string;
  restitution: string;
  conversationMessageId: string | null;
  prNumber?: number | null;
  commitSha?: string | null;
  cognitiveContinue?: "DELIVERED" | "CANONICAL" | "SKIPPED";
  error?: string;
}> {
  const row = (
    await db
      .select()
      .from(effectAttempts)
      .where(
        and(
          eq(effectAttempts.id, input.attemptId),
          eq(effectAttempts.projectId, input.projectId),
          eq(effectAttempts.pilotId, input.pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) {
    return {
      dispatched: false,
      reconciled: false,
      status: "NOT_FOUND",
      restitution: "Tentative introuvable — aucune publication.",
      conversationMessageId: null,
      error: "NOT_FOUND",
    };
  }

  if (!attemptIsNoraMission(row)) {
    return {
      dispatched: false,
      reconciled: false,
      status: row.status,
      restitution:
        "Tentative hors mission Nora — reprise auto refusée (parcours classique authorize→dispatch).",
      conversationMessageId: null,
      error: "NOT_NORA_MISSION",
      cognitiveContinue: "SKIPPED",
    };
  }

  let status = row.status;
  let dispatched = false;
  let reconciled = false;
  let detail: string | null = null;

  try {
    if (status === "AUTHORIZED" || status === "AMBIGUOUS") {
      const out = await dispatchPublication({
        pilotId: input.pilotId,
        projectId: input.projectId,
        attemptId: input.attemptId,
      });
      status = out.status;
      dispatched = true;
    } else if (status === "DISPATCHED") {
      const rec = await reconcileAttempt(input.pilotId, input.projectId, input.attemptId);
      status = rec.status;
      reconciled = true;
    } else if (status === "COMPLETED") {
      dispatched = false;
    } else {
      return {
        dispatched: false,
        reconciled: false,
        status,
        restitution: `Statut incompatible pour reprise auto: ${status}`,
        conversationMessageId: null,
        error: "CONFLICT",
      };
    }
  } catch (e) {
    const msg = e instanceof StudioError ? e.message : "DISPATCH_FAILED";
    const code = e instanceof StudioError ? e.code : "DISPATCH_FAILED";
    emitObs({
      event_name: "d3.mission.resume_dispatch_failed",
      component: "d3.mission_continuity",
      outcome: "FAILED",
      error_category: code,
      meta: { attempt_id: input.attemptId },
    });
    try {
      const again = (
        await db.select().from(effectAttempts).where(eq(effectAttempts.id, input.attemptId)).limit(1)
      )[0];
      if (again?.status === "DISPATCHED") {
        const rec = await reconcileAttempt(input.pilotId, input.projectId, input.attemptId);
        status = rec.status;
        reconciled = true;
      } else {
        status = again?.status ?? status;
      }
    } catch {
      /* keep */
    }
    detail = msg;
  }

  const plan = JSON.parse(row.planJson || "{}") as {
    preparationId?: string;
    documentId?: string;
    revisionId?: string;
  };

  const finalRow = (
    await db.select().from(effectAttempts).where(eq(effectAttempts.id, input.attemptId)).limit(1)
  )[0];
  const resultPayload = (() => {
    try {
      return JSON.parse(finalRow?.resultJson || "{}") as {
        prNumber?: number | null;
        commitSha?: string | null;
        sha?: string | null;
        missionResumeMessageId?: string | null;
      };
    } catch {
      return {} as {
        prNumber?: number | null;
        commitSha?: string | null;
        sha?: string | null;
        missionResumeMessageId?: string | null;
      };
    }
  })();
  const prNumber = resultPayload.prNumber ?? null;
  const commitSha = resultPayload.commitSha ?? resultPayload.sha ?? null;

  const canonical = composeCanonicalMissionRestitution({
    documentEffect: plan.documentId
      ? {
          act: "CREATE",
          status: "AVAILABLE",
          documentId: plan.documentId,
          revisionId: plan.revisionId,
        }
      : null,
    prepareStatus: "PREPARED",
    attemptId: input.attemptId,
    decisionId: input.decisionId ?? row.decisionId,
    dispatchStatus: status,
    dispatchDetail: detail,
    restitutionNote:
      status === "COMPLETED"
        ? "Publication reprise automatiquement après autorisation Pilote."
        : "Reprise post-autorisation exécutée — voir statut publication.",
  });

  const factsBlock = [
    `Publication attemptId=${input.attemptId} status=${status}`,
    input.decisionId || row.decisionId
      ? `decisionId=${input.decisionId ?? row.decisionId}`
      : null,
    plan.documentId ? `documentId=${plan.documentId}` : null,
    plan.revisionId ? `revisionId=${plan.revisionId}` : null,
    prNumber != null ? `prNumber=${prNumber}` : null,
    commitSha ? `commitSha=${commitSha}` : null,
    detail ? `detail=${detail}` : null,
  ]
    .filter(Boolean)
    .join("\n");

  let restitution = canonical;
  let cognitiveContinue: "DELIVERED" | "CANONICAL" | "SKIPPED" = "CANONICAL";
  try {
    // No turn operationId here — facts-only continue without tool scope (still generateNoraReply).
    const continued = await cognitiveContinueFromFacts({
      userText:
        "L'autorisation Pilote a été accordée et l'effet de publication a été traité. Restitue le résultat.",
      factsBlock,
      contextSnippets: [],
    });
    if (continued.status === "COMPLETE" && continued.content.trim()) {
      restitution = `${continued.content.trim()}\n\n---\n${canonical}`;
      cognitiveContinue = "DELIVERED";
    }
  } catch {
    cognitiveContinue = "CANONICAL";
  }

  let conversationMessageId: string | null = resultPayload.missionResumeMessageId ?? null;
  if (plan.preparationId) {
    try {
      conversationMessageId = await appendAssistantMissionMessage({
        pilotId: input.pilotId,
        preparationId: plan.preparationId,
        attemptId: input.attemptId,
        content: restitution,
      });
      // Persist message id on attempt for crash/retry idempotence
      const merged = {
        ...resultPayload,
        missionResumeMessageId: conversationMessageId,
      };
      await db
        .update(effectAttempts)
        .set({ resultJson: JSON.stringify(merged), updatedAt: new Date() })
        .where(eq(effectAttempts.id, input.attemptId));
    } catch {
      /* keep prior id if any */
    }
  }

  emitObs({
    event_name: "d3.mission.resume_after_authorize",
    component: "d3.mission_continuity",
    outcome: status === "COMPLETED" ? "SUCCESS" : "PARTIAL",
    meta: {
      attempt_id: input.attemptId,
      decision_id: input.decisionId ?? null,
      status,
      dispatched,
      reconciled,
      cognitive_continue: cognitiveContinue,
      nora_mission: true,
    },
  });

  return {
    dispatched,
    reconciled,
    status,
    restitution,
    conversationMessageId,
    prNumber,
    commitSha,
    cognitiveContinue,
    error: detail ?? undefined,
  };
}

/**
 * P0-B durable recovery: AUTHORIZED (or DISPATCHED) Nora-mission attempts
 * resume on the next nominal event (chat load / new turn / reconcile).
 * No universal scheduler — uses existing D3/D7 entry points.
 */
export async function recoverAuthorizedNoraMissions(input: {
  pilotId: string;
  projectId: string;
}): Promise<
  Array<{
    attemptId: string;
    status: string;
    resumed: boolean;
    error?: string;
  }>
> {
  const rows = await db
    .select()
    .from(effectAttempts)
    .where(
      and(
        eq(effectAttempts.pilotId, input.pilotId),
        eq(effectAttempts.projectId, input.projectId),
        eq(effectAttempts.kind, "GIT_PUBLICATION"),
        or(eq(effectAttempts.status, "AUTHORIZED"), eq(effectAttempts.status, "DISPATCHED")),
        like(effectAttempts.correlationKey, `${NORA_MISSION_PUB_PREFIX}%`),
      ),
    );

  const out: Array<{
    attemptId: string;
    status: string;
    resumed: boolean;
    error?: string;
  }> = [];

  for (const row of rows) {
    const resume = await resumeMissionAfterPublicationAuthorize({
      pilotId: input.pilotId,
      projectId: input.projectId,
      attemptId: row.id,
      decisionId: row.decisionId,
    });
    out.push({
      attemptId: row.id,
      status: resume.status,
      resumed: resume.dispatched || resume.reconciled || resume.status === "COMPLETED",
      error: resume.error,
    });
  }
  if (out.length > 0) {
    emitObs({
      event_name: "d3.mission.recover_authorized",
      component: "d3.mission_continuity",
      outcome: "SUCCESS",
      meta: { project_id: input.projectId, count: out.length },
    });
  }
  return out;
}

/** P1-C — stable message id + generationId per attempt; ordinal unique with conflict recovery. */
async function appendAssistantMissionMessage(input: {
  pilotId: string;
  preparationId: string;
  attemptId: string;
  content: string;
}): Promise<string> {
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
  if (!conv) throw new StudioError("NOT_FOUND", "Conversation introuvable");

  const generationId = missionResumeGenerationId(input.attemptId);
  const stableId = missionResumeMessageId(input.attemptId);

  const existingByGen = (
    await db
      .select()
      .from(messages)
      .where(and(eq(messages.conversationId, conv.id), eq(messages.generationId, generationId)))
      .limit(1)
  )[0];
  if (existingByGen) return existingByGen.id;

  const existingById = (
    await db.select().from(messages).where(eq(messages.id, stableId)).limit(1)
  )[0];
  if (existingById) return existingById.id;

  const last = (
    await db
      .select({ ordinal: messages.ordinal })
      .from(messages)
      .where(eq(messages.conversationId, conv.id))
      .orderBy(asc(messages.ordinal))
  ).at(-1);
  const ordinal = (last?.ordinal ?? 0) + 1;

  try {
    await db.insert(messages).values({
      id: stableId,
      conversationId: conv.id,
      role: "assistant",
      content: input.content,
      status: "COMPLETE",
      ordinal,
      generationId,
      createdAt: new Date(),
    });
    return stableId;
  } catch {
    const again = (
      await db
        .select()
        .from(messages)
        .where(and(eq(messages.conversationId, conv.id), eq(messages.generationId, generationId)))
        .limit(1)
    )[0];
    if (again) return again.id;
    const byId = (
      await db.select().from(messages).where(eq(messages.id, stableId)).limit(1)
    )[0];
    if (byId) return byId.id;
    throw new StudioError("CONFLICT", "Restitution mission non persistée (conflit ordinal/id)");
  }
}
