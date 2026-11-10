/**
 * Mission continuity — logical helpers inside D3 (NOT a parallel engine).
 * Anchors wait on effect_attempts PREPARED; never calls authorize for "waiting".
 * Owner truth remains D4/D6/D7; MissionProjection is refs-only.
 */
import { and, asc, eq } from "drizzle-orm";
import { db } from "@/db/client";
import { conversations, effectAttempts, messages } from "@/db/schema";
import {
  dispatchPublication,
  preparePublication,
  reconcileAttempt,
} from "@/domains/execution/effect-service";
import { listProjectGitLinks } from "@/domains/integrations/project-link-service";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";
import { emitObs } from "@/lib/observability";
import { generateNoraReply } from "./nora-adapter";
import type { DocumentEffectSummary } from "./document-act";
import { qualifyDocumentAct } from "./document-act";

export type MissionStatus =
  | "ACTIVE"
  | "AWAITING_PILOT_AUTH"
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

export type MissionProjection = {
  clientIntentKey: string;
  status: MissionStatus;
  goalSummary: string;
  steps: MissionStep[];
  /** Restitution layer — not owner truth. */
  restitution: "PENDING" | "DELIVERED" | "CANONICAL";
};

export type PublicationMissionIntent = {
  wantsDocumentCreate: boolean;
  wantsPublish: boolean;
  targetPath: string | null;
  targetBranch: string;
  ambiguous: boolean;
  clarify?: string;
};

const PUBLISH_RE =
  /\b(?:publie|publier|publication|pousse(?:r)?\s+(?:(?:le|la|ce|cet|cette)\s+)?(?:document|fichier)?|sur\s+(?:mon\s+)?d[eé]p[oô]t|dans\s+(?:mon\s+)?d[eé]p[oô]t|github)\b/i;
const PATH_RE =
  /(?:(?:chemin|path|fichier)\s*[:=]?\s*|sous\s+)[`"]?([A-Za-z0-9_./\-]+\.(?:md|markdown|txt))[`"]?/i;

export function qualifyPublicationMission(userText: string): PublicationMissionIntent {
  const act = qualifyDocumentAct(userText);
  const wantsDocumentCreate = act.kind === "CREATE";
  const wantsPublish = PUBLISH_RE.test(userText);
  const pathMatch = userText.match(PATH_RE);
  const targetPath = pathMatch?.[1] ?? null;
  if (wantsPublish && !wantsDocumentCreate && act.kind === "NONE") {
    // Publish-only without new doc — still a mission if revise/create unclear
  }
  return {
    wantsDocumentCreate,
    wantsPublish,
    targetPath,
    targetBranch: "main",
    ambiguous: wantsPublish && !wantsDocumentCreate && act.kind === "NONE",
    clarify: wantsPublish && !targetPath
      ? "Chemin cible non précisé — défaut docs/studio-next/publication.md si un seul dépôt est rattaché."
      : undefined,
  };
}

export function missionCorrelationKeys(clientIntentKey: string): {
  document: string;
  publication: string;
} {
  const key = clientIntentKey.trim();
  return {
    document: `doc:mission:${key}`,
    publication: `pub:mission:${key}`,
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
  if (mission.status === "AWAITING_PILOT_AUTH") {
    lines.push(
      "",
      "Préparation Git PREPARED — aucune HumanDecision créée.",
      "Autorisation Pilote requise (authorizePublication) avant toute publication.",
      "Après autorisation, Studio reprend automatiquement le dispatch.",
    );
  }
  if (mission.status === "RESTITUTION_PENDING") {
    lines.push(
      "",
      "Effets propriétaires conservés — restitution cognitive en attente (pas de rejeu d'effet).",
    );
  }
  return lines.join("\n");
}

export function appendMissionAck(content: string, mission: MissionProjection | null): string {
  if (!mission) return content;
  return `${content.trimEnd()}\n\n---\n${formatMissionAck(mission)}\n`;
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

export async function preparePublicationForMission(input: {
  pilotId: string;
  projectId: string;
  documentId: string;
  revisionId: string;
  clientIntentKey: string;
  targetPath: string | null;
  targetBranch: string;
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
  const targetPath = input.targetPath ?? "docs/studio-next/publication.md";
  const keys = missionCorrelationKeys(input.clientIntentKey);
  try {
    const prepared = await preparePublication({
      pilotId: input.pilotId,
      projectId: input.projectId,
      documentId: input.documentId,
      revisionId: input.revisionId,
      repositoryId,
      targetPath,
      targetBranch: input.targetBranch,
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

/**
 * After Pilot authorizePublication — automatic dispatch (no extra "continue" message).
 * Idempotent: COMPLETED returns without re-dispatch; DISPATCHED → reconcile.
 */
export async function resumeMissionAfterPublicationAuthorize(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  decisionId: string | null | undefined;
}): Promise<{
  dispatched: boolean;
  reconciled: boolean;
  status: string;
  restitution: string;
  conversationMessageId: string | null;
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
    // Best-effort reconcile if DISPATCHED after partial failure
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

  const restitution = composeCanonicalMissionRestitution({
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

  let conversationMessageId: string | null = null;
  if (plan.preparationId) {
    try {
      conversationMessageId = await appendAssistantMissionMessage({
        pilotId: input.pilotId,
        preparationId: plan.preparationId,
        content: restitution,
      });
    } catch {
      conversationMessageId = null;
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
    },
  });

  return {
    dispatched,
    reconciled,
    status,
    restitution,
    conversationMessageId,
    error: detail ?? undefined,
  };
}

async function appendAssistantMissionMessage(input: {
  pilotId: string;
  preparationId: string;
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

  const last = (
    await db
      .select({ ordinal: messages.ordinal })
      .from(messages)
      .where(eq(messages.conversationId, conv.id))
      .orderBy(asc(messages.ordinal))
  ).at(-1);
  const ordinal = (last?.ordinal ?? 0) + 1;
  const id = newId("msg");
  await db.insert(messages).values({
    id,
    conversationId: conv.id,
    role: "assistant",
    content: input.content,
    status: "COMPLETE",
    ordinal,
    generationId: null,
    createdAt: new Date(),
  });
  return id;
}

/** Facts-only cognitive continue — reuses generateNoraReply; tools allowed for read only via policy. */
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
      `Produis une restitution fidèle à ces faits. N'affirme aucun effet absent de cette liste.`,
    contextSnippets: input.contextSnippets,
    toolScope: input.toolScope,
  });
}
