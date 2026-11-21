import { and, asc, eq, sql } from "drizzle-orm";
import { db } from "@/db/client";
import {
  conversations,
  messages,
  preparationProjectLinks,
  preparations,
  projectPilotageState,
  projects,
  trajectoryQualificationOperations,
} from "@/db/schema";
import {
  buildInitialForecast,
  qualificationInputFingerprint,
  parseForecastJson,
  validateStructuredForecast,
  type ForecastBuildResult,
} from "@/domains/pilotage/forecast-builder";
import {
  initialQualificationComposerReason,
  isInitialQualificationComposerLocked,
} from "@/domains/pilotage/qualification-lock";
import type {
  InitialQualificationProjection,
  QualificationPhase,
  QualificationStatus,
} from "@/domains/pilotage/initial-qualification-types";
import { executePilotageCommand } from "@/domains/pilotage/service";
import { parseProjectionJson } from "@/domains/preparation/projection";
import { StudioError } from "@/lib/http-errors";
import { newId } from "@/lib/ids";

const CLAIM_LEASE_MS = 120_000;

/**
 * Test hooks for P0 fencing / publication races.
 * - beforePublish: after claim, before publish path
 * - afterOwnerCheckBeforeEffect: AFTER owner CAS check, BEFORE D5/message write (E07-FIX-01)
 */
export const initialQualificationFault: {
  beforePublish: null | (() => void | Promise<void>);
  afterOwnerCheckBeforeEffect: null | (() => void | Promise<void>);
} = {
  beforePublish: null,
  afterOwnerCheckBeforeEffect: null,
};

class OwnershipLostError extends Error {
  constructor() {
    super("QUALIFICATION_OWNERSHIP_LOST");
    this.name = "OwnershipLostError";
  }
}

function phaseToUiStep(phase: QualificationPhase): 1 | 2 | 3 | null {
  switch (phase) {
    case "ENGAGED":
      return 1;
    case "ANALYZING":
      return 2;
    case "PUBLISHING":
      return 3;
    default:
      return null;
  }
}

function rowToProjection(
  row: typeof trajectoryQualificationOperations.$inferSelect,
  forecastSteps: InitialQualificationProjection["forecastSteps"],
  clarificationQuestion: string | null,
): InitialQualificationProjection {
  const status = row.status as QualificationStatus;
  const phase = row.phase as QualificationPhase;
  const composerLocked = isInitialQualificationComposerLocked({
    operationId: row.id,
    projectId: row.projectId,
    preparationId: row.preparationId,
    status,
    phase,
    version: row.version,
    uiStep: phaseToUiStep(phase),
    composerLocked: false,
    composerLockReason: "",
    trajectoryRevisionId: row.trajectoryRevisionId,
    assistantMessageId: row.assistantMessageId,
    forecastSteps,
    clarificationQuestion,
    errorCode: row.errorCode,
  });
  return {
    operationId: row.id,
    projectId: row.projectId,
    preparationId: row.preparationId,
    status,
    phase,
    version: row.version,
    uiStep: phaseToUiStep(phase),
    composerLocked,
    composerLockReason: initialQualificationComposerReason({
      operationId: row.id,
      projectId: row.projectId,
      preparationId: row.preparationId,
      status,
      phase,
      version: row.version,
      uiStep: phaseToUiStep(phase),
      composerLocked,
      composerLockReason: "",
      trajectoryRevisionId: row.trajectoryRevisionId,
      assistantMessageId: row.assistantMessageId,
      forecastSteps,
      clarificationQuestion,
      errorCode: row.errorCode,
    }),
    trajectoryRevisionId: row.trajectoryRevisionId,
    assistantMessageId: row.assistantMessageId,
    forecastSteps,
    clarificationQuestion,
    errorCode: row.errorCode,
  };
}

function parseResultJson(raw: unknown): {
  clarificationQuestion: string | null;
  forecastSteps: InitialQualificationProjection["forecastSteps"];
  assistantContent: string | null;
  orientation: string | null;
} {
  if (!raw || typeof raw !== "object") {
    return {
      clarificationQuestion: null,
      forecastSteps: null,
      assistantContent: null,
      orientation: null,
    };
  }
  const o = raw as Record<string, unknown>;
  const clarificationQuestion =
    typeof o.clarificationQuestion === "string" ? o.clarificationQuestion : null;
  const forecastSteps = parseForecastJson(o.forecastSteps);
  const assistantContent = typeof o.assistantContent === "string" ? o.assistantContent : null;
  const orientation = typeof o.orientation === "string" ? o.orientation : null;
  return { clarificationQuestion, forecastSteps, assistantContent, orientation };
}

/** P0-02 — stable assistant body for resume; never rebuild a divergent summary. */
function resumeAssistantContent(
  parsed: ReturnType<typeof parseResultJson>,
  projectName: string,
): string {
  if (parsed.assistantContent?.trim()) return parsed.assistantContent;
  if (parsed.clarificationQuestion?.trim()) return parsed.clarificationQuestion;
  if (parsed.forecastSteps?.length) {
    return buildAssistantContent(
      {
        kind: "PROPOSE",
        steps: parsed.forecastSteps,
        orientation: parsed.orientation ?? "Trajectoire proposée",
        summary:
          parsed.orientation ??
          "Proposition de trajectoire initiale (restitution durable reprise).",
      },
      projectName,
    );
  }
  return buildAssistantContent(
    {
      kind: "PROPOSE",
      steps: [],
      orientation: "Trajectoire proposée",
      summary: "Proposition de trajectoire initiale reprise après interruption.",
    },
    projectName,
  );
}

export async function getQualificationProjection(
  pilotId: string,
  projectId: string,
): Promise<InitialQualificationProjection | null> {
  const row = (
    await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(
        and(
          eq(trajectoryQualificationOperations.projectId, projectId),
          eq(trajectoryQualificationOperations.pilotId, pilotId),
        ),
      )
      .limit(1)
  )[0];
  if (!row) return null;
  const parsed = parseResultJson(row.resultJson);
  return rowToProjection(row, parsed.forecastSteps, parsed.clarificationQuestion);
}

export async function ensureInitialQualification(input: {
  projectId: string;
  preparationId: string;
  pilotId: string;
}): Promise<InitialQualificationProjection> {
  const existing = await getQualificationProjection(input.pilotId, input.projectId);
  if (existing) return existing;

  const prep = (
    await db
      .select()
      .from(preparations)
      .where(
        and(eq(preparations.id, input.preparationId), eq(preparations.ownerPilotId, input.pilotId)),
      )
      .limit(1)
  )[0];
  if (!prep) throw new StudioError("NOT_FOUND", "Préparation introuvable");

  const projection = parseProjectionJson(
    prep.projectionJson,
    prep.id,
    prep.creationRevision,
  );
  const fingerprint = qualificationInputFingerprint({
    preparationId: prep.id,
    projection,
    previewSummary: prep.previewSummary ?? "",
    creationRevision: prep.creationRevision,
  });

  const id = newId("iqop");
  const now = new Date();
  try {
    await db.insert(trajectoryQualificationOperations).values({
      id,
      projectId: input.projectId,
      preparationId: input.preparationId,
      pilotId: input.pilotId,
      status: "PENDING",
      phase: "ENGAGED",
      version: 1,
      inputFingerprint: fingerprint,
      createdAt: now,
      updatedAt: now,
    });
  } catch {
  }

  const row = (
    await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, input.projectId))
      .limit(1)
  )[0];
  if (!row) throw new StudioError("INTERNAL", "Qualification initiale non créée");
  return rowToProjection(row, null, null);
}

function initialQualificationGenerationId(
  operationId: string,
  version: number,
  role: "assistant" | "system",
): string {
  // E07-FIX-02 — cognitive vs Studio incident must not share generation identity.
  return role === "system"
    ? `sfia:iq:${operationId}:v${version}:system`
    : `sfia:iq:${operationId}:v${version}`;
}

function stableQualificationMessageId(
  operationId: string,
  version: number,
  role: "assistant" | "system",
): string {
  return role === "system"
    ? `msg_iq_${operationId}_v${version}_system`
    : `msg_iq_${operationId}_v${version}`;
}

function messageMatchesQualificationIntent(
  row: { role: string; content: string; conversationId: string },
  expected: { role: string; content: string; conversationId: string },
): boolean {
  return (
    row.role === expected.role &&
    row.content === expected.content &&
    row.conversationId === expected.conversationId
  );
}

/**
 * E07-FIX-01 — fence at write point: FOR UPDATE op + ownerToken CAS, then insert.
 * TOCTOU after check is closed inside the same transaction as the insert.
 */
async function appendQualificationThreadMessage(input: {
  pilotId: string;
  preparationId: string;
  operationId: string;
  ownerToken: string;
  version: number;
  content: string;
  /** E07-COR-08 — Studio incidents use system; Nora cognitive uses assistant. */
  role: "assistant" | "system";
}): Promise<string | null> {
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

  const generationId = initialQualificationGenerationId(
    input.operationId,
    input.version,
    input.role,
  );
  const stableId = stableQualificationMessageId(input.operationId, input.version, input.role);

  // E07-FIX-01 — CAS outside TX so afterOwnerCheckBeforeEffect can race (lease steal).
  const casOk = await updateOpIfOwner(input.operationId, input.ownerToken, {
    updatedAt: new Date(),
  });
  if (!casOk) return null;
  await initialQualificationFault.afterOwnerCheckBeforeEffect?.();

  return db.transaction(async (tx) => {
    const locked = await tx.execute(
      sql`select id, owner_token from trajectory_qualification_operations where id = ${input.operationId} for update`,
    );
    const rows = (
      Array.isArray(locked)
        ? locked
        : ((locked as { rows?: Array<Record<string, unknown>> }).rows ?? [])
    ) as Array<Record<string, unknown>>;
    const op = rows[0];
    if (!op || String(op.owner_token ?? "") !== input.ownerToken) {
      return null;
    }

    const existingByGen = (
      await tx
        .select()
        .from(messages)
        .where(and(eq(messages.conversationId, conv.id), eq(messages.generationId, generationId)))
        .limit(1)
    )[0];
    if (existingByGen) {
      if (
        messageMatchesQualificationIntent(existingByGen, {
          role: input.role,
          content: input.content,
          conversationId: conv.id,
        })
      ) {
        return existingByGen.id;
      }
      throw new StudioError(
        "CONFLICT",
        "Message de qualification existant incompatible (rôle/contenu)",
      );
    }

    const existingById = (
      await tx.select().from(messages).where(eq(messages.id, stableId)).limit(1)
    )[0];
    if (existingById) {
      if (
        messageMatchesQualificationIntent(existingById, {
          role: input.role,
          content: input.content,
          conversationId: conv.id,
        })
      ) {
        return existingById.id;
      }
      throw new StudioError(
        "CONFLICT",
        "Identité de message de qualification déjà utilisée avec un autre contenu",
      );
    }

    const last = (
      await tx
        .select({ ordinal: messages.ordinal })
        .from(messages)
        .where(eq(messages.conversationId, conv.id))
        .orderBy(asc(messages.ordinal))
    ).at(-1);
    const ordinal = (last?.ordinal ?? 0) + 1;
    const now = new Date();

    await tx.insert(messages).values({
      id: stableId,
      conversationId: conv.id,
      role: input.role,
      content: input.content,
      status: "COMPLETE",
      ordinal,
      generationId,
      createdAt: now,
    });
    return stableId;
  });
}

async function currentPilotageRevision(projectId: string): Promise<number> {
  const row = (
    await db
      .select({ revision: projectPilotageState.revision })
      .from(projectPilotageState)
      .where(eq(projectPilotageState.projectId, projectId))
      .limit(1)
  )[0];
  return row?.revision ?? 0;
}

async function publishProposedTrajectory(input: {
  pilotId: string;
  projectId: string;
  operationId: string;
  ownerToken: string;
  version: number;
  orientation: string;
  forecastSteps: ForecastBuildResult & { kind: "PROPOSE" };
}): Promise<string | null> {
  // P0-01 — last outer CAS; true fence is effectOwnerFence inside runBusinessCommand TX.
  const stillOwner = await updateOpIfOwner(input.operationId, input.ownerToken, {
    updatedAt: new Date(),
  });
  if (!stillOwner) return null;

  // Discriminant race window: after last successful CAS, before D5 mutate TX.
  await initialQualificationFault.afterOwnerCheckBeforeEffect?.();

  const clientCommandKey = `iq:${input.operationId}:v${input.version}:propose`;
  const expectedRevision = await currentPilotageRevision(input.projectId);
  const result = await executePilotageCommand(input.pilotId, input.projectId, {
    clientCommandKey,
    expectedRevision,
    operation: "PROPOSE_TRAJECTORY",
    sourceKind: "COGNITIVE_PROPOSAL",
    sourceRef: input.operationId,
    orientation: input.orientation,
    forecastJson: input.forecastSteps.steps,
    actInstanceId: clientCommandKey,
    effectOwnerFence: {
      operationId: input.operationId,
      ownerToken: input.ownerToken,
    },
  });
  if (result.status === "REJECTED") {
    if (result.reasonCode === "QUALIFICATION_OWNERSHIP_LOST") {
      return null;
    }
    throw new StudioError("INTERNAL", result.reason ?? "Proposition D5 refusée");
  }
  if (result.status === "CONFLICT") {
    throw new StudioError("INTERNAL", result.reason ?? "Proposition D5 en conflit");
  }
  // Post-effect fence: expired owner must not claim terminal over a newer claim.
  const stillOwnerAfter = await updateOpIfOwner(input.operationId, input.ownerToken, {
    updatedAt: new Date(),
  });
  if (!stillOwnerAfter) return null;

  const propose = result.effects.find((e) => e.effectKind === "PROPOSE");
  if (!propose?.targetRef) throw new StudioError("INTERNAL", "Trajectoire PROPOSED absente");
  return propose.targetRef;
}

async function updateOpIfOwner(
  opId: string,
  ownerToken: string,
  patch: Partial<typeof trajectoryQualificationOperations.$inferInsert>,
): Promise<boolean> {
  const updated = await db
    .update(trajectoryQualificationOperations)
    .set({ ...patch, updatedAt: new Date() })
    .where(
      and(
        eq(trajectoryQualificationOperations.id, opId),
        eq(trajectoryQualificationOperations.ownerToken, ownerToken),
      ),
    )
    .returning({ id: trajectoryQualificationOperations.id });
  return updated.length > 0;
}

/** E07-COR-04 — fence before side effects (D5 propose / thread message). */
async function stillOwnsOperation(opId: string, ownerToken: string): Promise<boolean> {
  const row = (
    await db
      .select({ id: trajectoryQualificationOperations.id })
      .from(trajectoryQualificationOperations)
      .where(
        and(
          eq(trajectoryQualificationOperations.id, opId),
          eq(trajectoryQualificationOperations.ownerToken, ownerToken),
        ),
      )
      .limit(1)
  )[0];
  return Boolean(row);
}

function buildAssistantContent(
  built: ForecastBuildResult,
  projectName: string,
): string {
  if (built.kind === "CLARIFICATION") {
    return built.question;
  }
  return [
    `Projet **${projectName}** — proposition de trajectoire initiale (non retenue).`,
    "",
    built.summary,
    "",
    "Vous pouvez accepter cette direction, la contester ou demander un autre premier cycle — chaque décision d'ouverture reste la vôtre.",
  ].join("\n");
}

function studioFailedMessage(): string {
  return [
    "[Studio] La qualification initiale de trajectoire n'a pas abouti techniquement.",
    "Le projet reste accessible. Vous pouvez continuer la conversation pour préciser votre intention ; la trajectoire pourra être qualifiée ultérieurement.",
  ].join("\n");
}

const TERMINAL = new Set<QualificationStatus>(["PROPOSED", "CLARIFICATION", "FAILED"]);

export async function processInitialQualification(
  projectId: string,
  opts?: { force?: boolean; pilotId?: string },
): Promise<InitialQualificationProjection | null> {
  const row = (
    await db
      .select()
      .from(trajectoryQualificationOperations)
      .where(eq(trajectoryQualificationOperations.projectId, projectId))
      .limit(1)
  )[0];
  if (!row) return null;
  if (opts?.pilotId && row.pilotId !== opts.pilotId) return null;

  if (TERMINAL.has(row.status as QualificationStatus) && !opts?.force) {
    const parsed = parseResultJson(row.resultJson);
    return rowToProjection(row, parsed.forecastSteps, parsed.clarificationQuestion);
  }

  /** DEV visual capture only — freeze PENDING/RUNNING so 09.10 / 05.17 remain observable. */
  if (
    process.env.STUDIO_LANE === "DEV" &&
    process.env.STUDIO_DEV_HOLD_INITIAL_QUALIFICATION === "1" &&
    !opts?.force
  ) {
    const parsed = parseResultJson(row.resultJson);
    return rowToProjection(row, parsed.forecastSteps, parsed.clarificationQuestion);
  }

  const ownerToken = newId("iqtk");
  const now = new Date();

  const claimed = await db.transaction(async (tx) => {
    const execResult = await tx.execute(
      sql`select * from trajectory_qualification_operations where project_id = ${projectId} for update`,
    );
    const locked = (
      Array.isArray(execResult)
        ? execResult
        : ((execResult as { rows?: Array<Record<string, unknown>> }).rows ?? [])
    ) as Array<Record<string, unknown>>;
    const cur = locked[0];
    if (!cur) return null;
    const status = String(cur.status) as QualificationStatus;
    if (TERMINAL.has(status) && !opts?.force) return { kind: "terminal" as const, id: String(cur.id) };

    if (status === "RUNNING" && cur.owner_token && cur.claimed_at) {
      const claimedAt = new Date(String(cur.claimed_at)).getTime();
      if (Date.now() - claimedAt < CLAIM_LEASE_MS) {
        return { kind: "busy" as const, id: String(cur.id) };
      }
      // Lease expired — mark UNKNOWN then reclaim (E07-COR-05).
      await tx
        .update(trajectoryQualificationOperations)
        .set({ status: "UNKNOWN", updatedAt: now })
        .where(eq(trajectoryQualificationOperations.id, String(cur.id)));
    }

    const priorTrajectoryId =
      cur.trajectory_revision_id != null ? String(cur.trajectory_revision_id) : null;
    const priorResult = cur.result_json ?? null;

    await tx
      .update(trajectoryQualificationOperations)
      .set({
        status: "RUNNING",
        phase: priorTrajectoryId ? "PUBLISHING" : "ANALYZING",
        ownerToken,
        claimedAt: now,
        updatedAt: now,
      })
      .where(eq(trajectoryQualificationOperations.id, String(cur.id)));

    return {
      kind: "claimed" as const,
      id: String(cur.id),
      pilotId: String(cur.pilot_id),
      preparationId: String(cur.preparation_id),
      version: Number(cur.version),
      priorTrajectoryId,
      priorResult,
    };
  });

  if (!claimed || claimed.kind === "busy") {
    return getQualificationProjection(row.pilotId, projectId);
  }
  if (claimed.kind === "terminal") {
    return getQualificationProjection(row.pilotId, projectId);
  }

  try {
    const prep = (
      await db
        .select()
        .from(preparations)
        .where(eq(preparations.id, claimed.preparationId))
        .limit(1)
    )[0];
    const projection = prep
      ? parseProjectionJson(prep.projectionJson, prep.id, prep.creationRevision)
      : null;
    const projectRow = (
      await db.select({ name: projects.name }).from(projects).where(eq(projects.id, projectId)).limit(1)
    )[0];
    const name = projectRow?.name ?? "Projet";

    // Resume path: D5 already published, message/terminal missing (P0-02 / E07-COR-03).
    if (claimed.priorTrajectoryId) {
      const parsedPrior = parseResultJson(claimed.priorResult);
      const stableContent = resumeAssistantContent(parsedPrior, name);
      const assistantMessageId = await appendQualificationThreadMessage({
        pilotId: claimed.pilotId,
        preparationId: claimed.preparationId,
        operationId: claimed.id,
        ownerToken,
        version: claimed.version,
        content: stableContent,
        role: "assistant",
      });
      if (!assistantMessageId) {
        return getQualificationProjection(claimed.pilotId, projectId);
      }
      const priorJson =
        claimed.priorResult && typeof claimed.priorResult === "object"
          ? ({ ...(claimed.priorResult as Record<string, unknown>) } as Record<string, unknown>)
          : ({
              kind: "PROPOSED",
              forecastSteps: parsedPrior.forecastSteps,
            } as Record<string, unknown>);
      if (!priorJson.assistantContent) priorJson.assistantContent = stableContent;
      const ok = await updateOpIfOwner(claimed.id, ownerToken, {
        status: "PROPOSED",
        phase: "TERMINAL",
        trajectoryRevisionId: claimed.priorTrajectoryId,
        assistantMessageId,
        resultJson: priorJson,
        ownerToken: null,
        errorCode: null,
      });
      if (!ok) {
        await updateOpIfOwner(claimed.id, ownerToken, {
          status: "UNKNOWN",
          phase: "PUBLISHING",
        });
      }
      return getQualificationProjection(claimed.pilotId, projectId);
    }

    await initialQualificationFault.beforePublish?.();

    const phaseOk = await updateOpIfOwner(claimed.id, ownerToken, { phase: "PUBLISHING" });
    if (!phaseOk) {
      return getQualificationProjection(claimed.pilotId, projectId);
    }

    // FIX-04 — refuse stale publish when durable input fingerprint no longer matches.
    if (prep) {
      const currentFp = qualificationInputFingerprint({
        preparationId: prep.id,
        projection,
        previewSummary: prep.previewSummary ?? "",
        creationRevision: prep.creationRevision,
      });
      const opRow = (
        await db
          .select({ inputFingerprint: trajectoryQualificationOperations.inputFingerprint })
          .from(trajectoryQualificationOperations)
          .where(eq(trajectoryQualificationOperations.id, claimed.id))
          .limit(1)
      )[0];
      if (opRow && opRow.inputFingerprint && opRow.inputFingerprint !== currentFp) {
        const staleContent =
          "Le contexte de préparation a évolué depuis l'engagement de la qualification. Une nouvelle analyse est nécessaire avant toute proposition de trajectoire.";
        const mid = await appendQualificationThreadMessage({
          pilotId: claimed.pilotId,
          preparationId: claimed.preparationId,
          operationId: claimed.id,
          ownerToken,
          version: claimed.version,
          content: staleContent,
          role: "assistant",
        });
        if (!mid) return getQualificationProjection(claimed.pilotId, projectId);
        await updateOpIfOwner(claimed.id, ownerToken, {
          status: "CLARIFICATION",
          phase: "TERMINAL",
          assistantMessageId: mid,
          resultJson: {
            kind: "CLARIFICATION",
            clarificationQuestion: staleContent,
            missing: ["fingerprint"],
            assistantContent: staleContent,
            staleFingerprint: true,
          },
          ownerToken: null,
          errorCode: "STALE_INPUT_FINGERPRINT",
        });
        return getQualificationProjection(claimed.pilotId, projectId);
      }
    }

    const builtRaw = buildInitialForecast({
      projection,
      previewSummary: prep?.previewSummary ?? "",
    });
    const validated = validateStructuredForecast(builtRaw);
    const built: ForecastBuildResult = validated.ok
      ? builtRaw
      : {
          kind: "CLARIFICATION",
          question:
            "Je n'ai pas pu qualifier une trajectoire structurée fiable à partir des éléments disponibles. Précisez l'intention et le premier résultat utile attendu.",
          missing: ["sortie structurée", validated.reason],
        };

    let trajectoryRevisionId: string | null = null;
    let terminalStatus: QualificationStatus;
    let resultJson: Record<string, unknown>;
    const assistantContent = buildAssistantContent(built, name);

    if (built.kind === "CLARIFICATION") {
      terminalStatus = "CLARIFICATION";
      resultJson = {
        kind: "CLARIFICATION",
        clarificationQuestion: built.question,
        missing: built.missing,
        assistantContent,
      };
    } else {
      trajectoryRevisionId = await publishProposedTrajectory({
        pilotId: claimed.pilotId,
        projectId,
        operationId: claimed.id,
        ownerToken,
        version: claimed.version,
        orientation: built.orientation,
        forecastSteps: built,
      });
      if (!trajectoryRevisionId) {
        return getQualificationProjection(claimed.pilotId, projectId);
      }
      terminalStatus = "PROPOSED";
      resultJson = {
        kind: "PROPOSED",
        forecastSteps: built.steps,
        orientation: built.orientation,
        assistantContent,
      };
      // Persist D5 pointer + stable content before message so crash can resume (P0-02).
      const mid = await updateOpIfOwner(claimed.id, ownerToken, {
        trajectoryRevisionId,
        resultJson,
        phase: "PUBLISHING",
      });
      if (!mid) {
        return getQualificationProjection(claimed.pilotId, projectId);
      }
    }

    const assistantMessageId = await appendQualificationThreadMessage({
      pilotId: claimed.pilotId,
      preparationId: claimed.preparationId,
      operationId: claimed.id,
      ownerToken,
      version: claimed.version,
      content: assistantContent,
      role: "assistant",
    });
    if (!assistantMessageId) {
      return getQualificationProjection(claimed.pilotId, projectId);
    }

    if (built.kind === "PROPOSE" && !trajectoryRevisionId) {
      throw new StudioError("INTERNAL", "Publication incomplète");
    }

    const terminalOk = await updateOpIfOwner(claimed.id, ownerToken, {
      status: terminalStatus,
      phase: "TERMINAL",
      trajectoryRevisionId,
      assistantMessageId,
      resultJson,
      ownerToken: null,
      errorCode: null,
    });
    if (!terminalOk) {
      return getQualificationProjection(claimed.pilotId, projectId);
    }

    return getQualificationProjection(claimed.pilotId, projectId);
  } catch (e) {
    if (e instanceof OwnershipLostError) {
      return getQualificationProjection(claimed.pilotId, projectId);
    }
    const errorCode = e instanceof StudioError ? e.code : "QUALIFICATION_FAILED";
    const systemMessageId = await appendQualificationThreadMessage({
      pilotId: claimed.pilotId,
      preparationId: claimed.preparationId,
      operationId: claimed.id,
      ownerToken,
      version: claimed.version,
      content: studioFailedMessage(),
      role: "system",
    }).catch(() => null);

    if (!systemMessageId) {
      return getQualificationProjection(claimed.pilotId, projectId);
    }

    const failedOk = await updateOpIfOwner(claimed.id, ownerToken, {
      status: "FAILED",
      phase: "TERMINAL",
      assistantMessageId: systemMessageId,
      errorCode,
      ownerToken: null,
      resultJson: { kind: "FAILED", errorCode },
    });
    if (!failedOk) {
      return getQualificationProjection(claimed.pilotId, projectId);
    }

    return getQualificationProjection(claimed.pilotId, projectId);
  }
}

export function kickInitialQualificationProcessing(projectId: string, pilotId: string): void {
  void processInitialQualification(projectId, { pilotId }).catch(() => undefined);
}

/** E07-COR-01 — ensure durable op then kick; retry once on ensure failure. */
export async function ensureAndKickInitialQualification(input: {
  projectId: string;
  preparationId: string;
  pilotId: string;
}): Promise<{
  projection: InitialQualificationProjection | null;
  ensureStatus: "OK" | "FAILED_RETRYABLE";
}> {
  try {
    const projection = await ensureInitialQualification(input);
    kickInitialQualificationProcessing(input.projectId, input.pilotId);
    return { projection, ensureStatus: "OK" };
  } catch {
    try {
      const projection = await ensureInitialQualification(input);
      kickInitialQualificationProcessing(input.projectId, input.pilotId);
      return { projection, ensureStatus: "OK" };
    } catch {
      return { projection: null, ensureStatus: "FAILED_RETRYABLE" };
    }
  }
}

/**
 * E07-COR-01/02/05 — explicit reconcile (POST), never from GET.
 * Creates missing op when project+prep linked; processes PENDING/RUNNING/UNKNOWN.
 */
export async function reconcileInitialQualification(
  projectId: string,
  pilotId: string,
): Promise<InitialQualificationProjection | null> {
  const project = (
    await db
      .select({ id: projects.id })
      .from(projects)
      .where(and(eq(projects.id, projectId), eq(projects.ownerPilotId, pilotId)))
      .limit(1)
  )[0];
  if (!project) throw new StudioError("NOT_FOUND", "Projet introuvable");

  let projection = await getQualificationProjection(pilotId, projectId);
  if (!projection) {
    const link = (
      await db
        .select()
        .from(preparationProjectLinks)
        .where(eq(preparationProjectLinks.projectId, projectId))
        .limit(1)
    )[0];
    // P0-04 — never silently create qualification for legacy projects.
    if (!link || !link.initialQualificationExpected) return null;
    projection = await ensureInitialQualification({
      projectId,
      preparationId: link.preparationId,
      pilotId,
    });
  }

  if (
    projection.status === "PENDING" ||
    projection.status === "RUNNING" ||
    projection.status === "UNKNOWN"
  ) {
    return processInitialQualification(projectId, { pilotId });
  }
  return projection;
}

/** E07-FIX-05 — synthetic gate when prep↔project linked but op not yet persisted. */
export function pendingEnsureGateProjection(
  projectId: string,
  preparationId: string,
): InitialQualificationProjection {
  return {
    operationId: "",
    projectId,
    preparationId,
    status: "PENDING",
    phase: "ENGAGED",
    version: 0,
    uiStep: 1,
    composerLocked: true,
    composerLockReason:
      "Le projet est créé — la qualification initiale de trajectoire est en cours d'engagement.",
    trajectoryRevisionId: null,
    assistantMessageId: null,
    forecastSteps: null,
    clarificationQuestion: null,
    errorCode: null,
  };
}

export async function getQualificationProjectionForClient(
  pilotId: string,
  projectId: string,
): Promise<InitialQualificationProjection | null> {
  const q = await getQualificationProjection(pilotId, projectId);
  if (q) return q;
  const link = (
    await db
      .select()
      .from(preparationProjectLinks)
      .where(eq(preparationProjectLinks.projectId, projectId))
      .limit(1)
  )[0];
  if (!link) return null;
  // P0-04 — legacy / pre-capability projects: no synthetic PENDING lock, no silent ensure.
  if (!link.initialQualificationExpected) return null;
  // New create: SAS link expects qualification but op not yet durable — keep Travail locked.
  return pendingEnsureGateProjection(projectId, link.preparationId);
}

export async function assertPilotTurnNotBlockedByQualification(
  pilotId: string,
  projectId: string,
): Promise<void> {
  const q = await getQualificationProjectionForClient(pilotId, projectId);
  if (q && (q.status === "PENDING" || q.status === "RUNNING" || q.status === "UNKNOWN")) {
    throw new StudioError(
      "QUALIFICATION_IN_PROGRESS",
      "Qualification initiale de trajectoire en cours — envoyez un message après la proposition ou la clarification.",
      { httpStatus: 409 },
    );
  }
}

export { blocksPilotTurnAdmission, isInitialQualificationComposerLocked } from "@/domains/pilotage/qualification-lock";