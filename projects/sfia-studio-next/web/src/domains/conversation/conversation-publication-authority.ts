/**
 * E08 Capacité B — bridge from a persisted USER message to authorizePublication (D6/D7).
 * Never treats Nora qualification as HumanDecision; never bypasses effect-service gates.
 */
import { and, eq } from "drizzle-orm";
import { createHash } from "node:crypto";
import { db } from "@/db/client";
import {
  conversationTurnCommands,
  conversations,
  effectAttempts,
  messages,
} from "@/db/schema";
import {
  authorizePublication,
  inspectionAllowsAuthorization,
} from "@/domains/execution/effect-service";
import type { PublicationPlan } from "@/domains/execution/types";
import { StudioError } from "@/lib/http-errors";
import { emitObs } from "@/lib/observability";
import {
  assertPublicationMandateCoversPlan,
  PUBLISH_VERB_RE,
  userStatementRefusesPublication,
  userStatementRequestsMergeOnly,
} from "./conversation-publication-mandate-guards";
import {
  attemptIsNoraMission,
  missionCorrelationKeys,
  NORA_MISSION_PUB_PREFIX,
  resumeMissionAfterPublicationAuthorize,
} from "./mission-continuity";

function normalizeActText(s: string): string {
  return s.normalize("NFKC").trim().replace(/\s+/g, " ");
}

function actFingerprint(s: string): string {
  return createHash("sha256").update(normalizeActText(s), "utf8").digest("hex");
}

/**
 * P0-03 — Server-side proof that userMessageId is a durable USER act for this
 * pilot/project/turn — not a forged id in JSON alone.
 */
export async function assertPersistedUserPublicationAct(input: {
  pilotId: string;
  projectId: string;
  userMessageId: string;
  userStatement: string;
  clientTurnKey?: string | null;
}): Promise<{ ok: true; conversationId: string; contentFingerprint: string } | { ok: false; reasonCode: string; reason: string }> {
  const msgId = input.userMessageId.trim();
  if (!msgId) {
    return { ok: false, reasonCode: "MISSING_USER_ACT", reason: "Acte USER durable requis" };
  }

  const row = (
    await db
      .select({
        messageId: messages.id,
        role: messages.role,
        content: messages.content,
        status: messages.status,
        conversationId: messages.conversationId,
        ownerPilotId: conversations.ownerPilotId,
        projectId: conversations.projectId,
      })
      .from(messages)
      .innerJoin(conversations, eq(messages.conversationId, conversations.id))
      .where(eq(messages.id, msgId))
      .limit(1)
  )[0];

  if (!row) {
    return { ok: false, reasonCode: "USER_MESSAGE_NOT_FOUND", reason: "Message USER introuvable" };
  }
  if (row.role.trim().toLowerCase() !== "user") {
    return {
      ok: false,
      reasonCode: "NOT_USER_ROLE",
      reason: "Le message source n'est pas un acte USER",
    };
  }
  if (row.status !== "COMPLETE") {
    return {
      ok: false,
      reasonCode: "USER_MESSAGE_INCOMPLETE",
      reason: `Statut message incompatible: ${row.status}`,
    };
  }
  if (row.ownerPilotId !== input.pilotId) {
    return {
      ok: false,
      reasonCode: "PILOT_MISMATCH",
      reason: "Message USER hors identité Pilote attendue",
    };
  }
  if ((row.projectId ?? "") !== input.projectId) {
    return {
      ok: false,
      reasonCode: "PROJECT_MISMATCH",
      reason: "Message USER hors projet de la tentative",
    };
  }

  const statement = normalizeActText(input.userStatement).slice(0, 500);
  const persisted = normalizeActText(row.content);
  if (!persisted) {
    return { ok: false, reasonCode: "EMPTY_USER_CONTENT", reason: "Contenu USER vide" };
  }
  // Admit truncates to 500 — statement must match that prefix of the persisted USER act.
  const persistedPrefix = persisted.slice(0, 500);
  if (statement !== persistedPrefix && !persisted.startsWith(statement)) {
    return {
      ok: false,
      reasonCode: "STATEMENT_MISMATCH",
      reason: "Énoncé du mandat non concordant avec le message USER persisté",
    };
  }

  const turnKey = input.clientTurnKey?.trim() || null;
  if (turnKey) {
    const turn = (
      await db
        .select({
          userMessageId: conversationTurnCommands.userMessageId,
          ownerPilotId: conversationTurnCommands.ownerPilotId,
          conversationId: conversationTurnCommands.conversationId,
        })
        .from(conversationTurnCommands)
        .where(
          and(
            eq(conversationTurnCommands.conversationId, row.conversationId),
            eq(conversationTurnCommands.clientTurnKey, turnKey),
          ),
        )
        .limit(1)
    )[0];
    if (!turn || turn.userMessageId !== msgId || turn.ownerPilotId !== input.pilotId) {
      return {
        ok: false,
        reasonCode: "TURN_MISMATCH",
        reason: "Tour conversationnel non aligné sur le message USER",
      };
    }
  }

  return {
    ok: true,
    conversationId: row.conversationId,
    contentFingerprint: actFingerprint(persisted),
  };
}

export type ConversationalPublicationMandateOutcome = {
  attempted: boolean;
  admitted: boolean;
  authorized: boolean;
  humanDecisionCreated: boolean;
  decisionId: string | null;
  reasonCode?: string;
  reason?: string;
  missionResume?: Awaited<ReturnType<typeof resumeMissionAfterPublicationAuthorize>> | null;
};

export {
  assertPublicationMandateCoversPlan,
  userStatementRefusesPublication,
  userStatementRequestsMergeOnly,
} from "./conversation-publication-mandate-guards";

function emptyOutcome(
  partial?: Partial<ConversationalPublicationMandateOutcome>,
): ConversationalPublicationMandateOutcome {
  return {
    attempted: false,
    admitted: false,
    authorized: false,
    humanDecisionCreated: false,
    decisionId: null,
    ...partial,
  };
}

/**
 * Admit an explicit USER publication mandate on the exact PREPARED plan, then authorize.
 * Caller must pass the durable USER message id and statement (not Nora replyDraft).
 */
export async function admitConversationalPublicationMandate(input: {
  pilotId: string;
  projectId: string;
  attemptId: string;
  userMessageId: string;
  userStatement: string;
  clientTurnKey?: string | null;
  qualifiedPath?: string | null;
  qualifiedBranch?: string | null;
  wantsPublishFromQual: boolean;
  autoResumeMission?: boolean;
}): Promise<ConversationalPublicationMandateOutcome> {
  const statement = input.userStatement.trim().slice(0, 500);
  if (!input.userMessageId?.trim() || !statement) {
    return emptyOutcome({ reasonCode: "MISSING_USER_ACT", reason: "Acte USER durable requis" });
  }

  const provenance = await assertPersistedUserPublicationAct({
    pilotId: input.pilotId,
    projectId: input.projectId,
    userMessageId: input.userMessageId,
    userStatement: statement,
    clientTurnKey: input.clientTurnKey ?? null,
  });
  if (!provenance.ok) {
    return emptyOutcome({ reasonCode: provenance.reasonCode, reason: provenance.reason });
  }

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
    return emptyOutcome({ reasonCode: "NOT_FOUND", reason: "Tentative introuvable" });
  }
  if (row.kind !== "GIT_PUBLICATION") {
    return emptyOutcome({ reasonCode: "WRONG_KIND", reason: "Tentative non publication" });
  }

  const conversationalMission =
    attemptIsNoraMission(row) ||
    (input.clientTurnKey?.trim()
      ? row.correlationKey === missionCorrelationKeys(input.clientTurnKey.trim()).publication
      : false);
  if (!conversationalMission) {
    return emptyOutcome({
      reasonCode: "NOT_CONVERSATIONAL",
      reason: "Tentative hors corrélation mission Nora — autorisation panel requise",
    });
  }

  if (
    input.clientTurnKey?.trim() &&
    row.correlationKey !== `${NORA_MISSION_PUB_PREFIX}${input.clientTurnKey.trim()}`
  ) {
    return emptyOutcome({
      reasonCode: "CORRELATION_MISMATCH",
      reason: "Clé de corrélation mission non alignée au tour USER",
    });
  }

  if (row.status === "AUTHORIZED" || row.status === "DISPATCHED" || row.status === "COMPLETED") {
    const idempotent = Boolean(row.decisionId);
    return {
      attempted: true,
      admitted: idempotent,
      authorized: idempotent,
      humanDecisionCreated: idempotent,
      decisionId: row.decisionId ?? null,
      reasonCode: idempotent ? "ALREADY_AUTHORIZED" : undefined,
    };
  }
  if (row.status !== "PREPARED") {
    return emptyOutcome({
      attempted: true,
      reasonCode: "CONFLICT",
      reason: `Statut incompatible: ${row.status}`,
    });
  }

  if (!input.wantsPublishFromQual) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "NO_PUBLISH_QUAL",
      reason: "Qualification durable sans intention publication explicite",
    });
  }
  if (userStatementRefusesPublication(statement)) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "REFUSED",
      reason: "Formulation USER refuse la publication — aucun mandat",
    });
  }
  if (userStatementRequestsMergeOnly(statement)) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "MERGE_ONLY",
      reason: "Intention merge seule — mandat publication non admis (merge séparé)",
    });
  }
  if (!PUBLISH_VERB_RE.test(statement) && !input.qualifiedPath?.trim()) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "AMBIGUOUS",
      reason: "Demande de publication non explicite dans le message USER",
    });
  }

  let plan: PublicationPlan;
  try {
    plan = JSON.parse(row.planJson) as PublicationPlan;
  } catch {
    return emptyOutcome({
      attempted: true,
      reasonCode: "INVALID_PLAN",
      reason: "Plan publication illisible",
    });
  }

  if (!inspectionAllowsAuthorization(plan.inspection.kind)) {
    return emptyOutcome({
      attempted: true,
      reasonCode: "REQUIRES_REQUALIFICATION",
      reason: `Inspection non autorisable: ${plan.inspection.kind}`,
    });
  }

  const scope = assertPublicationMandateCoversPlan({
    userStatement: statement,
    qualifiedPath: input.qualifiedPath ?? null,
    qualifiedBranch: input.qualifiedBranch ?? null,
    plan,
  });
  if (!scope.ok) {
    return emptyOutcome({
      attempted: true,
      reasonCode: scope.reasonCode,
      reason: scope.reason,
    });
  }

  try {
    const auth = await authorizePublication({
      pilotId: input.pilotId,
      projectId: input.projectId,
      attemptId: input.attemptId,
      statement,
      inspectedFingerprint: plan.inspection.inspectionFingerprint,
      sourceMessageId: input.userMessageId,
      clientTurnKey: input.clientTurnKey ?? null,
    });

    emitObs({
      event_name: "d6.conversational_publication_mandate",
      component: "d6.conversation_publication_authority",
      outcome: "SUCCESS",
      meta: {
        attempt_id: input.attemptId,
        decision_id: auth.decisionId,
        user_message_id: input.userMessageId,
        idempotent: "idempotent" in auth ? Boolean(auth.idempotent) : false,
      },
    });

    let missionResume: Awaited<ReturnType<typeof resumeMissionAfterPublicationAuthorize>> | null =
      null;
    if (input.autoResumeMission !== false && auth.status === "AUTHORIZED") {
      missionResume = await resumeMissionAfterPublicationAuthorize({
        pilotId: input.pilotId,
        projectId: input.projectId,
        attemptId: input.attemptId,
        decisionId: auth.decisionId,
      });
    }

    const created =
      Boolean(auth.decisionId) &&
      !("idempotent" in auth && auth.idempotent && row.decisionId === auth.decisionId);

    return {
      attempted: true,
      admitted: true,
      authorized: true,
      humanDecisionCreated: Boolean(auth.decisionId),
      decisionId: auth.decisionId ?? null,
      missionResume,
      reasonCode: "idempotent" in auth && auth.idempotent ? "ALREADY_AUTHORIZED" : undefined,
      reason: created ? undefined : "Mandat déjà enregistré",
    };
  } catch (e) {
    const code = e instanceof StudioError ? e.code : "AUTHORIZE_FAILED";
    const message = e instanceof StudioError ? e.message : "authorizePublication échoué";
    emitObs({
      event_name: "d6.conversational_publication_mandate",
      component: "d6.conversation_publication_authority",
      outcome: "FAILED",
      error_category: code,
      meta: { attempt_id: input.attemptId, user_message_id: input.userMessageId },
    });
    return emptyOutcome({
      attempted: true,
      reasonCode: code,
      reason: message,
    });
  }
}