/**
 * D3 cognitive work — durable identity distinct from conversation turns.
 * Option C (C15): PostgreSQL checkpoints + ownership fencing.
 * Never hold a DB transaction open across a provider call.
 */

import { and, desc, eq, sql } from "drizzle-orm";
import { randomUUID } from "node:crypto";
import { db } from "@/db/client";
import { cognitiveWorkCheckpoints, cognitiveWorks, preparations } from "@/db/schema";
import { newId } from "@/lib/ids";
import { StudioError } from "@/lib/http-errors";
import {
  createEmptyInvestigation,
  evaluateContractReadiness,
  type InvestigationState,
} from "./investigation-state";

export type CognitiveWorkStatus =
  | "OPEN"
  | "RUNNING"
  | "SUSPENDED"
  | "COMPLETE"
  | "FAILED"
  | "ABANDONED";

export type CognitiveResources = {
  segmentCalls: number;
  inputTokens?: number | null;
  outputTokens?: number | null;
  cacheTokens?: number | null;
  reasoningTokens?: number | null;
  estimatedCostUsd?: number | null;
  modelRequested?: string | null;
  modelApplied?: string | null;
  effortRequested?: string | null;
  effortApplied?: string | null;
  webCalls?: number;
  durationMs?: number;
  limits?: string[];
};

export type CognitiveProductionState = {
  kind: "NONE" | "REPLY" | "DOCUMENT" | "CONTRACT" | "SYNTHESIS" | "ADVICE";
  status: "IDLE" | "IN_PROGRESS" | "COMPLETE" | "PARTIAL" | "FAILED";
  parts: Array<{ id: string; title?: string; complete: boolean }>;
  objectRef?: string | null;
  limits?: string[];
  /** Durable produced content for resume (document/contract body). */
  contentMarkdown?: string | null;
};

export type CognitiveWorkRow = {
  id: string;
  ownerPilotId: string;
  preparationId: string;
  projectId: string | null;
  conversationId: string | null;
  status: CognitiveWorkStatus;
  revision: number;
  ownerToken: string | null;
  leaseUntil: Date | null;
  objective: string;
  expectedOutcome: string;
  state: InvestigationState;
  resources: CognitiveResources;
  production: CognitiveProductionState;
  interruptCause: string | null;
  /** B4 — provenance when a new work reuses acquis from a prior work. */
  parentWorkId: string | null;
};

export const COGNITIVE_LEASE_MS = 20 * 60 * 1000;

export const cognitiveClock = {
  nowMs: (): number => Date.now(),
};

function parseJson<T>(raw: string, fallback: T): T {
  try {
    return JSON.parse(raw) as T;
  } catch {
    return fallback;
  }
}

function emptyResources(): CognitiveResources {
  return { segmentCalls: 0, webCalls: 0, durationMs: 0, limits: [] };
}

function emptyProduction(): CognitiveProductionState {
  return { kind: "NONE", status: "IDLE", parts: [] };
}

function mapRow(row: typeof cognitiveWorks.$inferSelect): CognitiveWorkRow {
  const state = evaluateContractReadiness(
    parseJson<InvestigationState>(row.stateJson, createEmptyInvestigation(row.objective)),
  );
  return {
    id: row.id,
    ownerPilotId: row.ownerPilotId,
    preparationId: row.preparationId,
    projectId: row.projectId,
    conversationId: row.conversationId,
    status: row.status as CognitiveWorkStatus,
    revision: row.revision,
    ownerToken: row.ownerToken,
    leaseUntil: row.leaseUntil,
    objective: row.objective,
    expectedOutcome: row.expectedOutcome,
    state,
    resources: parseJson<CognitiveResources>(row.resourcesJson, emptyResources()),
    production: parseJson<CognitiveProductionState>(row.productionJson, emptyProduction()),
    interruptCause: row.interruptCause,
    parentWorkId: row.parentWorkId ?? null,
  };
}

async function assertPrepOwnership(pilotId: string, preparationId: string) {
  const prep = (
    await db.select().from(preparations).where(eq(preparations.id, preparationId)).limit(1)
  )[0];
  if (!prep) throw new StudioError("NOT_FOUND", "Préparation introuvable");
  if (prep.ownerPilotId !== pilotId) {
    throw new StudioError("ACCESS_DENIED", "Préparation d'un autre Pilote");
  }
  return prep;
}

/** Open a new cognitive work or resume an existing OPEN/SUSPENDED work when continuationKey matches. */
export async function openOrResumeCognitiveWork(input: {
  pilotId: string;
  preparationId: string;
  projectId?: string | null;
  conversationId?: string | null;
  objective: string;
  expectedOutcome?: string;
  /** When set, resume this work id if owned and eligible. */
  workId?: string | null;
  /** Independent new demand — never overwrite another work. */
  forceNew?: boolean;
  /** B4 — prior work whose acquis this new envelope reuses. */
  parentWorkId?: string | null;
}): Promise<{ work: CognitiveWorkRow; resumed: boolean; ownerToken: string }> {
  await assertPrepOwnership(input.pilotId, input.preparationId);

  async function claimExisting(existing: typeof cognitiveWorks.$inferSelect) {
    if (existing.ownerPilotId !== input.pilotId) {
      throw new StudioError("ACCESS_DENIED", "Travail cognitif d'un autre Pilote");
    }
    if (existing.preparationId !== input.preparationId) {
      throw new StudioError("ACCESS_DENIED", "Travail hors préparation");
    }
    // C20: explicit project/conversation scope must match when provided.
    if (
      input.projectId &&
      existing.projectId &&
      existing.projectId !== input.projectId
    ) {
      throw new StudioError("ACCESS_DENIED", "Travail hors projet");
    }
    if (
      input.conversationId &&
      existing.conversationId &&
      existing.conversationId !== input.conversationId
    ) {
      throw new StudioError("ACCESS_DENIED", "Travail hors conversation");
    }
    const now = cognitiveClock.nowMs();
    const leaseActive =
      existing.status === "RUNNING" &&
      existing.leaseUntil != null &&
      existing.leaseUntil.getTime() > now;
    if (leaseActive) {
      throw new StudioError(
        "CONFLICT",
        "Lease cognitif actif — reprise refusée tant que le propriétaire détient le travail",
      );
    }
    // C16: claim bumps revision (fencing) — never silent takeover of same revision.
    const ownerToken = randomUUID();
    const leaseUntil = new Date(now + COGNITIVE_LEASE_MS);
    const nextRevision = existing.revision + 1;
    const nowIso = new Date(now).toISOString();
    const updated = await db.transaction(async (tx) => {
      const rows = await tx
        .update(cognitiveWorks)
        .set({
          status: "RUNNING",
          ownerToken,
          leaseUntil,
          revision: nextRevision,
          updatedAt: new Date(),
          interruptCause: null,
        })
        .where(
          and(
            eq(cognitiveWorks.id, existing.id),
            eq(cognitiveWorks.revision, existing.revision),
            // C17: explicit claim may reopen COMPLETE for clarification / prepare completion
            // (same work identity). Never claim FAILED/ABANDONED.
            sql`(
              ${cognitiveWorks.status} IN ('OPEN', 'SUSPENDED', 'COMPLETE')
              OR (
                ${cognitiveWorks.status} = 'RUNNING'
                AND (
                  ${cognitiveWorks.leaseUntil} IS NULL
                  OR ${cognitiveWorks.leaseUntil} <= ${nowIso}::timestamptz
                )
              )
            )`,
          ),
        )
        .returning();
      if (!rows[0]) {
        throw new StudioError("CONFLICT", "Lease/revision cognitive concurrente");
      }
      await tx.insert(cognitiveWorkCheckpoints).values({
        id: newId("cgcp"),
        workId: existing.id,
        revision: nextRevision,
        parentRevision: existing.revision,
        cause: "CLAIM",
        payloadJson: rows[0].stateJson,
        resourcesJson: rows[0].resourcesJson,
      });
      return rows[0];
    });
    return { work: mapRow(updated), resumed: true as const, ownerToken };
  }

  if (input.workId && !input.forceNew) {
    const existing = (
      await db.select().from(cognitiveWorks).where(eq(cognitiveWorks.id, input.workId)).limit(1)
    )[0];
    if (!existing) throw new StudioError("NOT_FOUND", "Travail cognitif introuvable");
    return claimExisting(existing);
  }

  // C16: without explicit workId, do NOT auto-resume SUSPENDED (semantic attachment required).
  // Only a single OPEN work may be continued implicitly; otherwise create new.
  if (!input.forceNew) {
    const candidates = await db
      .select()
      .from(cognitiveWorks)
      .where(
        and(
          eq(cognitiveWorks.preparationId, input.preparationId),
          eq(cognitiveWorks.ownerPilotId, input.pilotId),
          eq(cognitiveWorks.status, "OPEN"),
        ),
      )
      .orderBy(desc(cognitiveWorks.updatedAt))
      .limit(2);
    if (candidates.length === 1) {
      return claimExisting(candidates[0]!);
    }
  }

  const ownerToken = randomUUID();
  const leaseUntil = new Date(cognitiveClock.nowMs() + COGNITIVE_LEASE_MS);
  const state = createEmptyInvestigation(input.objective);
  if (input.expectedOutcome) state.desiredOutcome = input.expectedOutcome;
  const id = newId("cgw");
  const [row] = await db
    .insert(cognitiveWorks)
    .values({
      id,
      ownerPilotId: input.pilotId,
      preparationId: input.preparationId,
      projectId: input.projectId ?? null,
      conversationId: input.conversationId ?? null,
      status: "RUNNING",
      revision: 1,
      ownerToken,
      leaseUntil,
      objective: input.objective.trim(),
      expectedOutcome: (input.expectedOutcome ?? "").trim(),
      stateJson: JSON.stringify(state),
      resourcesJson: JSON.stringify(emptyResources()),
      productionJson: JSON.stringify(emptyProduction()),
      parentWorkId: input.parentWorkId?.trim() || null,
    })
    .returning();
  return { work: mapRow(row!), resumed: false, ownerToken };
}

export async function getCognitiveWork(input: {
  pilotId: string;
  workId: string;
}): Promise<CognitiveWorkRow> {
  const row = (
    await db.select().from(cognitiveWorks).where(eq(cognitiveWorks.id, input.workId)).limit(1)
  )[0];
  if (!row) throw new StudioError("NOT_FOUND", "Travail cognitif introuvable");
  if (row.ownerPilotId !== input.pilotId) {
    throw new StudioError("ACCESS_DENIED", "Travail cognitif d'un autre Pilote");
  }
  return mapRow(row);
}

export async function listCognitiveWorksForPreparation(input: {
  pilotId: string;
  preparationId: string;
}): Promise<CognitiveWorkRow[]> {
  await assertPrepOwnership(input.pilotId, input.preparationId);
  const rows = await db
    .select()
    .from(cognitiveWorks)
    .where(
      and(
        eq(cognitiveWorks.preparationId, input.preparationId),
        eq(cognitiveWorks.ownerPilotId, input.pilotId),
      ),
    )
    .orderBy(desc(cognitiveWorks.updatedAt));
  return rows.map(mapRow);
}

/**
 * Checkpoint + CAS bump. Requires live ownerToken.
 * Does not open a long-lived transaction around provider I/O.
 */
export async function checkpointCognitiveWork(input: {
  pilotId: string;
  workId: string;
  ownerToken: string;
  expectedRevision: number;
  cause: string;
  state: InvestigationState;
  resources?: CognitiveResources;
  production?: CognitiveProductionState;
  status?: CognitiveWorkStatus;
  interruptCause?: string | null;
  turnCommandId?: string | null;
  generationId?: string | null;
  objective?: string;
  expectedOutcome?: string;
}): Promise<CognitiveWorkRow> {
  const evaluated = evaluateContractReadiness(input.state);
  const nextRevision = input.expectedRevision + 1;
  const leaseUntil = new Date(cognitiveClock.nowMs() + COGNITIVE_LEASE_MS);

  const nowIso = new Date(cognitiveClock.nowMs()).toISOString();
  const result = await db.transaction(async (tx) => {
    // C16: absent field ≠ empty replacement — load current row first.
    // C20: lease must still be live for this owner — expired owner cannot write.
    const current = (
      await tx
        .select()
        .from(cognitiveWorks)
        .where(
          and(
            eq(cognitiveWorks.id, input.workId),
            eq(cognitiveWorks.ownerPilotId, input.pilotId),
            eq(cognitiveWorks.ownerToken, input.ownerToken),
            eq(cognitiveWorks.revision, input.expectedRevision),
            eq(cognitiveWorks.status, "RUNNING"),
            sql`(
              ${cognitiveWorks.leaseUntil} IS NULL
              OR ${cognitiveWorks.leaseUntil} > ${nowIso}::timestamptz
            )`,
          ),
        )
        .limit(1)
    )[0];
    if (!current) {
      throw new StudioError(
        "CONFLICT",
        "Checkpoint cognitif refusé — ownership, lease expiré ou révision concurrente",
      );
    }
    const resources =
      input.resources ??
      parseJson<CognitiveResources>(current.resourcesJson, emptyResources());
    const production =
      input.production ??
      parseJson<CognitiveProductionState>(current.productionJson, emptyProduction());
    const patch: Record<string, unknown> = {
      revision: nextRevision,
      status: input.status ?? "RUNNING",
      stateJson: JSON.stringify(evaluated),
      resourcesJson: JSON.stringify(resources),
      productionJson: JSON.stringify(production),
      interruptCause: input.interruptCause ?? null,
      leaseUntil,
      updatedAt: new Date(),
    };
    if (input.objective?.trim()) patch.objective = input.objective.trim();
    if (input.expectedOutcome?.trim()) patch.expectedOutcome = input.expectedOutcome.trim();
    const updated = await tx
      .update(cognitiveWorks)
      .set(patch)
      .where(
        and(
          eq(cognitiveWorks.id, input.workId),
          eq(cognitiveWorks.ownerPilotId, input.pilotId),
          eq(cognitiveWorks.ownerToken, input.ownerToken),
          eq(cognitiveWorks.revision, input.expectedRevision),
          eq(cognitiveWorks.status, "RUNNING"),
          sql`(
            ${cognitiveWorks.leaseUntil} IS NULL
            OR ${cognitiveWorks.leaseUntil} > ${nowIso}::timestamptz
          )`,
        ),
      )
      .returning();
    if (!updated[0]) {
      throw new StudioError(
        "CONFLICT",
        "Checkpoint cognitif refusé — ownership, lease expiré ou révision concurrente",
      );
    }
    await tx.insert(cognitiveWorkCheckpoints).values({
      id: newId("cgcp"),
      workId: input.workId,
      revision: nextRevision,
      parentRevision: input.expectedRevision,
      cause: input.cause,
      turnCommandId: input.turnCommandId ?? null,
      generationId: input.generationId ?? null,
      payloadJson: JSON.stringify(evaluated),
      resourcesJson: JSON.stringify(resources),
    });
    return updated[0];
  });

  return mapRow(result);
}

/** Heartbeat lease while RUNNING — no revision bump. */
export async function heartbeatCognitiveWork(input: {
  workId: string;
  ownerToken: string;
}): Promise<boolean> {
  const nowMs = cognitiveClock.nowMs();
  const leaseUntil = new Date(nowMs + COGNITIVE_LEASE_MS);
  const nowIso = new Date(nowMs).toISOString();
  // C20: refuse renew when lease already expired — expired owner is not live.
  const updated = await db
    .update(cognitiveWorks)
    .set({ leaseUntil, updatedAt: new Date() })
    .where(
      and(
        eq(cognitiveWorks.id, input.workId),
        eq(cognitiveWorks.ownerToken, input.ownerToken),
        eq(cognitiveWorks.status, "RUNNING"),
        sql`(
          ${cognitiveWorks.leaseUntil} IS NULL
          OR ${cognitiveWorks.leaseUntil} > ${nowIso}::timestamptz
        )`,
      ),
    )
    .returning({ id: cognitiveWorks.id });
  return Boolean(updated[0]);
}

/**
 * C19 — reconcile RUNNING works whose lease expired (process crash / mid-work kill).
 * Does not invent provider results; marks recoverable SUSPENDED with explicit cause.
 */
export async function reconcileStaleRunningCognitiveWorks(input?: {
  preparationId?: string | null;
  pilotId?: string | null;
}): Promise<{ reconciled: number; workIds: string[] }> {
  const nowIso = new Date(cognitiveClock.nowMs()).toISOString();
  const conds = [
    eq(cognitiveWorks.status, "RUNNING"),
    sql`(
      ${cognitiveWorks.leaseUntil} IS NULL
      OR ${cognitiveWorks.leaseUntil} <= ${nowIso}::timestamptz
    )`,
  ];
  if (input?.preparationId) {
    conds.push(eq(cognitiveWorks.preparationId, input.preparationId));
  }
  if (input?.pilotId) {
    conds.push(eq(cognitiveWorks.ownerPilotId, input.pilotId));
  }
  const stale = await db
    .select({
      id: cognitiveWorks.id,
      revision: cognitiveWorks.revision,
      stateJson: cognitiveWorks.stateJson,
      resourcesJson: cognitiveWorks.resourcesJson,
    })
    .from(cognitiveWorks)
    .where(and(...conds))
    .limit(50);
  const workIds: string[] = [];
  for (const row of stale) {
    const nextRevision = row.revision + 1;
    const updated = await db.transaction(async (tx) => {
      // C20: re-assert lease expiry inside the transaction so a concurrent
      // heartbeat that renewed the lease cannot be suspended.
      const txNow = new Date(cognitiveClock.nowMs()).toISOString();
      const rows = await tx
        .update(cognitiveWorks)
        .set({
          status: "SUSPENDED",
          ownerToken: null,
          leaseUntil: null,
          interruptCause: "PROCESS_OR_LEASE_INTERRUPT",
          revision: nextRevision,
          updatedAt: new Date(),
        })
        .where(
          and(
            eq(cognitiveWorks.id, row.id),
            eq(cognitiveWorks.revision, row.revision),
            eq(cognitiveWorks.status, "RUNNING"),
            sql`(
              ${cognitiveWorks.leaseUntil} IS NULL
              OR ${cognitiveWorks.leaseUntil} <= ${txNow}::timestamptz
            )`,
          ),
        )
        .returning({ id: cognitiveWorks.id });
      if (!rows[0]) return null;
      await tx.insert(cognitiveWorkCheckpoints).values({
        id: newId("cgcp"),
        workId: row.id,
        revision: nextRevision,
        parentRevision: row.revision,
        cause: "PROCESS_OR_LEASE_INTERRUPT",
        payloadJson: row.stateJson,
        resourcesJson: row.resourcesJson,
      });
      return rows[0];
    });
    if (updated) workIds.push(row.id);
  }
  return { reconciled: workIds.length, workIds };
}

/** Release ownership after segment; keep state durable. */
export async function releaseCognitiveWorkLease(input: {
  workId: string;
  ownerToken: string;
  status: CognitiveWorkStatus;
  interruptCause?: string | null;
}): Promise<void> {
  await db
    .update(cognitiveWorks)
    .set({
      status: input.status,
      ownerToken: null,
      leaseUntil: null,
      interruptCause: input.interruptCause ?? null,
      updatedAt: new Date(),
    })
    .where(
      and(
        eq(cognitiveWorks.id, input.workId),
        eq(cognitiveWorks.ownerToken, input.ownerToken),
      ),
    );
}

export async function loadLatestCheckpoint(input: {
  pilotId: string;
  workId: string;
}): Promise<{
  revision: number;
  cause: string;
  state: InvestigationState;
  resources: CognitiveResources;
  createdAt: Date;
} | null> {
  await getCognitiveWork(input);
  const row = (
    await db
      .select()
      .from(cognitiveWorkCheckpoints)
      .where(eq(cognitiveWorkCheckpoints.workId, input.workId))
      .orderBy(desc(cognitiveWorkCheckpoints.revision))
      .limit(1)
  )[0];
  if (!row) return null;
  return {
    revision: row.revision,
    cause: row.cause,
    state: evaluateContractReadiness(
      parseJson(row.payloadJson, createEmptyInvestigation("")),
    ),
    resources: parseJson(row.resourcesJson, emptyResources()),
    createdAt: row.createdAt,
  };
}

/** Accumulate global resource counters — never reset between segments. */
export function accumulateResources(
  current: CognitiveResources,
  delta: Partial<CognitiveResources>,
): CognitiveResources {
  return {
    segmentCalls: (current.segmentCalls ?? 0) + (delta.segmentCalls ?? 0),
    inputTokens: sumOpt(current.inputTokens, delta.inputTokens),
    outputTokens: sumOpt(current.outputTokens, delta.outputTokens),
    cacheTokens: sumOpt(current.cacheTokens, delta.cacheTokens),
    reasoningTokens: sumOpt(current.reasoningTokens, delta.reasoningTokens),
    estimatedCostUsd: sumOpt(current.estimatedCostUsd, delta.estimatedCostUsd),
    modelRequested: delta.modelRequested ?? current.modelRequested ?? null,
    modelApplied: delta.modelApplied ?? current.modelApplied ?? null,
    effortRequested: delta.effortRequested ?? current.effortRequested ?? null,
    effortApplied: delta.effortApplied ?? current.effortApplied ?? null,
    webCalls: (current.webCalls ?? 0) + (delta.webCalls ?? 0),
    durationMs: (current.durationMs ?? 0) + (delta.durationMs ?? 0),
    limits: [...(current.limits ?? []), ...(delta.limits ?? [])].slice(-40),
  };
}

function sumOpt(a?: number | null, b?: number | null): number | null {
  if (a == null && b == null) return null;
  return (a ?? 0) + (b ?? 0);
}

/** Calibration defaults — OPERATIONAL_PROVISIONAL DEV (Morris GO adaptive continuation). */
export const COGNITIVE_DEFAULT_MAX_TOKENS = 2_000_000;
export const COGNITIVE_DEFAULT_REEVAL_TOKENS = 1_000_000;
/** Anti-loop safety — not a cognitive depth oracle; progress detection is primary. */
export const COGNITIVE_DEFAULT_MAX_SEGMENTS = 120;

export function cognitiveEnvelopeLimits(
  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
): { maxTokens: number; maxSegments: number; reevalTokens: number } {
  return {
    maxTokens: Number(env.SFIA_COGNITIVE_MAX_TOKENS || String(COGNITIVE_DEFAULT_MAX_TOKENS)),
    maxSegments: Number(
      env.SFIA_COGNITIVE_MAX_SEGMENTS || String(COGNITIVE_DEFAULT_MAX_SEGMENTS),
    ),
    reevalTokens: Number(
      env.SFIA_COGNITIVE_REEVAL_TOKENS || String(COGNITIVE_DEFAULT_REEVAL_TOKENS),
    ),
  };
}

/**
 * Global envelope — administrative safety, not a cognitive depth oracle.
 * Exceeding suspends the work honestly.
 *
 * Adaptive calibration (Morris GO): 1M reevaluation threshold, 2M administrative max.
 * Soft stop (projected / reserve) is NOT a hard SDK cap — residual overshoot possible
 * when provider usage for the in-flight call is not yet known.
 * Cached tokens are never subtracted from the cumulative safety envelope.
 */
export function evaluateGlobalResourceEnvelope(
  resources: CognitiveResources,
  env: NodeJS.ProcessEnv | Record<string, string | undefined> = process.env,
  opts?: {
    /** Tokens to keep for restitution / partial answer (default 12k). */
    reserveForRestitution?: number;
    /** Estimated cost of the next segment before starting it. */
    projectedNextSegmentTokens?: number;
  },
): {
  ok: boolean;
  reason?: string;
  remainingTokens?: number;
  softStop?: boolean;
  /** Crossed 1M reevaluation threshold — strategy may adapt; not a suspension. */
  reevaluationNeeded?: boolean;
} {
  const { maxSegments, maxTokens, reevalTokens } = cognitiveEnvelopeLimits(env);
  if (Number.isFinite(maxSegments) && resources.segmentCalls >= maxSegments) {
    return { ok: false, reason: "GLOBAL_SEGMENT_BUDGET_EXHAUSTED", remainingTokens: 0 };
  }
  // C24 — do not add reasoningTokens on top of outputTokens (SDK usually
  // already includes reasoning in output). Track reasoning separately for OBS.
  // Functional completion: the global envelope guards cumulative tokens processed
  // in the work (input + output). Cached tokens remain part of the context window
  // and must NOT be subtracted from the safety envelope (UAT-16 / FinOps ≠ window).
  // cacheTokens stay in resources.limits / OBS for cost analysis only.
  const used = (resources.inputTokens ?? 0) + (resources.outputTokens ?? 0);
  const remaining = Number.isFinite(maxTokens) ? Math.max(0, maxTokens - used) : Number.POSITIVE_INFINITY;
  if (Number.isFinite(maxTokens) && used >= maxTokens) {
    return { ok: false, reason: "GLOBAL_TOKEN_BUDGET_EXHAUSTED", remainingTokens: 0 };
  }
  const reserve = Math.max(0, opts?.reserveForRestitution ?? 12_000);
  const projected = Math.max(0, opts?.projectedNextSegmentTokens ?? 0);
  if (Number.isFinite(maxTokens) && projected > 0 && used + projected > maxTokens) {
    return {
      ok: false,
      reason: "GLOBAL_TOKEN_BUDGET_EXHAUSTED",
      remainingTokens: remaining,
      softStop: true,
    };
  }
  // Soft stop: leave restitution reserve when continuing beyond the first segment.
  if (
    Number.isFinite(maxTokens) &&
    reserve > 0 &&
    resources.segmentCalls >= 1 &&
    remaining <= reserve
  ) {
    return {
      ok: false,
      reason: "GLOBAL_TOKEN_BUDGET_EXHAUSTED",
      remainingTokens: remaining,
      softStop: true,
    };
  }
  const reevaluationNeeded =
    Number.isFinite(reevalTokens) && reevalTokens > 0 && used >= reevalTokens;
  return { ok: true, remainingTokens: remaining, reevaluationNeeded };
}
