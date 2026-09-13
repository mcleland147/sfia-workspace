/**
 * D-GF-ACW-01 — materialize non-authoritative active-cycle EpistemicItems
 * and link them into LPS.epistemicItemIds atomically (Product SQLite UoW).
 *
 * NOT a new aggregate. HARVEST UpdateEpistemicState + AppendLivingProjectStateVersion.
 * No HumanDecision / ExecutionContract / trajectory / LPS structural rewrite.
 */

import { createHash } from "node:crypto";
import type { ActorReference, ProvenanceRecord } from "@/lib/oa/doctrine";
import type {
  EpistemicConfidence,
  EpistemicItem,
  EpistemicItemType,
} from "@/lib/oa/cycle";
import type { UpdateEpistemicState } from "@/lib/oa/cycle/application/updateEpistemicState";
import type { AppendLivingProjectStateVersion } from "@/lib/oa/project/application/appendLivingProjectStateVersion";
import type { GetCurrentLivingProjectState } from "@/lib/oa/project/application/getCurrentLivingProjectState";
import type { CyclePersistenceUnitOfWorkPort } from "@/lib/oa/cycle/ports/cyclePersistenceUnitOfWorkPort";
import type { GetCycle } from "@/lib/oa/cycle/application/getCycle";
import type { NoraActiveCycleWorkItem } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
import type { ActiveCycleWorkContextSeal } from "./f2/activeCycleCognitiveContext";

/** Stable Product source for Nora active-cycle cognitive work. */
export const ACTIVE_CYCLE_WORK_SOURCE = "active-cycle-work:nora" as const;

/** Same Nora agent actor as LR — authority remains none on items. */
export const NORA_ACTIVE_CYCLE_WORK_ACTOR: ActorReference =
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR;

export const ACTIVE_CYCLE_WORK_ALLOWED_TYPES: ReadonlySet<EpistemicItemType> =
  new Set([
    "Observation",
    "Hypothesis",
    "Option",
    "Recommendation",
    "Reservation",
    "Contradiction",
  ]);

export type ActiveCycleWorkMaterializationFacts = {
  readonly projectId: string;
  readonly activeCycleInstanceId: string;
  readonly lpsVersion: number;
  readonly lpsObjective: string;
  readonly existingEpistemicItemIds: readonly string[];
  readonly existingItems: readonly EpistemicItem[];
  /** Production key = durable logical Product turn id (ltu:…). */
  readonly turnCorrelationId: string;
  /** CR-ACW-01 — sealed studio activeCycle projection; validated in UoW. */
  readonly contextSeal: ActiveCycleWorkContextSeal;
};

export type MaterializeActiveCycleWorkResult =
  | {
      readonly ok: true;
      readonly items: readonly EpistemicItem[];
      readonly createdIds: readonly string[];
      readonly reusedIds: readonly string[];
      readonly lpsVersionAfter: number;
      readonly idempotent: boolean;
    }
  | { readonly ok: false; readonly code: string; readonly reason: string };

function statementDigest(statement: string): string {
  return createHash("sha256")
    .update(statement.trim(), "utf8")
    .digest("hex")
    .slice(0, 16);
}

export function activeCycleWorkEpistemicItemId(input: {
  projectId: string;
  cycleInstanceId: string;
  turnCorrelationId: string;
  index: number;
  type: string;
  statement: string;
}): string {
  const raw = [
    input.projectId,
    input.cycleInstanceId,
    input.turnCorrelationId,
    String(input.index),
    input.type,
    statementDigest(input.statement),
  ].join("|");
  const digest = createHash("sha256")
    .update(raw, "utf8")
    .digest("hex")
    .slice(0, 20);
  return `epi:acw:${digest}`;
}

function buildProvenance(input: {
  projectId: string;
  cycleInstanceId: string;
  turnCorrelationId: string;
  producedAt: string;
  index: number;
}): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: `prov:acw:${createHash("sha256")
      .update(
        `${input.turnCorrelationId}|${input.index}|${input.cycleInstanceId}`,
        "utf8",
      )
      .digest("hex")
      .slice(0, 16)}`,
    actor: structuredClone(NORA_ACTIVE_CYCLE_WORK_ACTOR),
    source: "conversation",
    timestamp: input.producedAt,
    correlationId: input.turnCorrelationId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
  };
}

function materialParity(
  existing: EpistemicItem,
  next: {
    type: EpistemicItemType;
    statement: string;
    confidence?: EpistemicConfidence;
    blocking?: boolean;
  },
): boolean {
  if (existing.type !== next.type) return false;
  if (existing.statement.trim() !== next.statement.trim()) return false;
  if ((existing.confidence ?? undefined) !== (next.confidence ?? undefined)) {
    return false;
  }
  if ((existing.blocking ?? undefined) !== (next.blocking ?? undefined)) {
    return false;
  }
  if (existing.source !== ACTIVE_CYCLE_WORK_SOURCE) return false;
  return true;
}

function normNullable(value: string | null | undefined): string | null {
  const t = value?.trim();
  return t ? t : null;
}

class ActiveCycleWorkAtomicFailure extends Error {
  constructor(
    readonly code: string,
    readonly reason: string,
  ) {
    super(reason);
    this.name = "ActiveCycleWorkAtomicFailure";
  }
}

function assertContextSealAgainstLiveState(input: {
  seal: ActiveCycleWorkContextSeal;
  projectId: string;
  cycle: {
    projectId: string;
    cycleInstanceId: string;
    cycleTypeId: string;
    profile: string;
    status: string;
    trajectoryId?: string;
    trajectoryVersion?: number;
    trajectoryStepId?: string;
    ckcResolutionRef?: string;
  };
  lps: {
    version: number;
    activeCycleInstanceId?: string | null;
    ckcResolutionRef?: string | null;
  };
  expectedLpsVersion: number;
}): void {
  const { seal, cycle, lps } = input;
  if (seal.projectId !== input.projectId || cycle.projectId !== seal.projectId) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:projectId",
    );
  }
  if (cycle.cycleInstanceId !== seal.cycleInstanceId) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:cycleInstanceId",
    );
  }
  if (cycle.cycleTypeId !== seal.cycleTypeId) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:cycleTypeId",
    );
  }
  if (cycle.profile !== seal.profile) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:profile",
    );
  }
  if (cycle.status !== "active" || seal.status !== "active") {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:status",
    );
  }
  if (normNullable(cycle.trajectoryId) !== seal.trajectoryId) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:trajectoryId",
    );
  }
  const liveTrajVer =
    typeof cycle.trajectoryVersion === "number" ? cycle.trajectoryVersion : null;
  if (liveTrajVer !== seal.trajectoryVersion) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:trajectoryVersion",
    );
  }
  if (normNullable(cycle.trajectoryStepId) !== seal.trajectoryStepId) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:trajectoryStepId",
    );
  }
  if (normNullable(cycle.ckcResolutionRef) !== seal.ckcResolutionRef) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:ckcResolutionRef",
    );
  }
  if ((lps.activeCycleInstanceId ?? null) !== seal.cycleInstanceId) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:lps.activeCycleInstanceId",
    );
  }
  if (lps.version !== input.expectedLpsVersion) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:lps.version",
    );
  }
  const lpsRef = normNullable(lps.ckcResolutionRef ?? null);
  if (lpsRef && seal.ckcResolutionRef && lpsRef !== seal.ckcResolutionRef) {
    throw new ActiveCycleWorkAtomicFailure(
      "ACTIVE_CYCLE_CONTEXT_STALE",
      "seal_field:lps.ckcResolutionRef",
    );
  }
}

/**
 * Persist active-cycle work items + LPS epistemicItemIds in one Product UoW.
 */
export async function materializeActiveCycleWork(input: {
  items: readonly NoraActiveCycleWorkItem[];
  facts: ActiveCycleWorkMaterializationFacts;
  updateEpistemicState: UpdateEpistemicState;
  appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
  getCurrentLivingProjectState: GetCurrentLivingProjectState;
  getCycle: GetCycle;
  runInTransaction: CyclePersistenceUnitOfWorkPort["runInTransaction"];
  producedAt: string;
  createdBy?: ActorReference;
}): Promise<MaterializeActiveCycleWorkResult> {
  if (!input.items || input.items.length === 0) {
    return {
      ok: true,
      items: [],
      createdIds: [],
      reusedIds: [],
      lpsVersionAfter: input.facts.lpsVersion,
      idempotent: true,
    };
  }

  for (const item of input.items) {
    if (!ACTIVE_CYCLE_WORK_ALLOWED_TYPES.has(item.type as EpistemicItemType)) {
      return {
        ok: false,
        code: "ACTIVE_CYCLE_WORK_FORBIDDEN_TYPE",
        reason: `forbidden_epistemic_type:${item.type}`,
      };
    }
  }

  const createdBy = input.createdBy ?? NORA_ACTIVE_CYCLE_WORK_ACTOR;
  const { facts } = input;

  if (
    facts.contextSeal.projectId !== facts.projectId ||
    facts.contextSeal.cycleInstanceId !== facts.activeCycleInstanceId
  ) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_CONTEXT_STALE",
      reason: "seal_mismatch_vs_materialization_facts",
    };
  }

  try {
    const atomic = await input.runInTransaction(async () => {
      const cycleLoad = await input.getCycle.execute({
        cycleInstanceId: facts.activeCycleInstanceId,
      });
      if (!cycleLoad.ok) {
        throw new ActiveCycleWorkAtomicFailure(
          "ACTIVE_CYCLE_NOT_FOUND",
          "cycle_missing_at_materialization",
        );
      }
      const cycle = cycleLoad.cycle;
      if (cycle.projectId !== facts.projectId) {
        throw new ActiveCycleWorkAtomicFailure(
          "ACTIVE_CYCLE_PROJECT_MISMATCH",
          "cycle_project_mismatch_at_materialization",
        );
      }
      if (cycle.status !== "active") {
        throw new ActiveCycleWorkAtomicFailure(
          "ACTIVE_CYCLE_NOT_ELIGIBLE",
          "cycle_not_active_at_materialization",
        );
      }

      const lpsNow = await input.getCurrentLivingProjectState.execute({
        projectId: facts.projectId,
      });
      if (!lpsNow.ok) {
        throw new ActiveCycleWorkAtomicFailure(
          "LPS_UNAVAILABLE",
          "lps_missing_at_materialization",
        );
      }

      // CR-ACW-01 — exact seal compare before any write; ZERO writes on mismatch.
      assertContextSealAgainstLiveState({
        seal: facts.contextSeal,
        projectId: facts.projectId,
        cycle,
        lps: lpsNow.livingProjectState,
        expectedLpsVersion: facts.lpsVersion,
      });

      if (
        (lpsNow.livingProjectState.activeCycleInstanceId ?? null) !==
        facts.activeCycleInstanceId
      ) {
        throw new ActiveCycleWorkAtomicFailure(
          "ACTIVE_CYCLE_LPS_POINTER_STALE",
          "lps_active_cycle_changed_before_materialization",
        );
      }
      if (lpsNow.livingProjectState.version !== facts.lpsVersion) {
        throw new ActiveCycleWorkAtomicFailure(
          "LPS_VERSION_CONFLICT",
          "lps_version_changed_before_materialization",
        );
      }

      const planned: Array<{
        epistemicItemId: string;
        type: EpistemicItemType;
        statement: string;
        confidence?: EpistemicConfidence;
        blocking?: boolean;
        relatedObjects: string[];
        provenance: ProvenanceRecord;
        reuse: boolean;
      }> = [];

      const existingById = new Map(
        facts.existingItems.map((e) => [e.epistemicItemId, e]),
      );

      for (let index = 0; index < input.items.length; index += 1) {
        const raw = input.items[index]!;
        const type = raw.type as EpistemicItemType;
        const statement = raw.statement.trim();
        if (!statement) {
          throw new ActiveCycleWorkAtomicFailure(
            "ACTIVE_CYCLE_WORK_INVALID",
            "empty_statement",
          );
        }
        const epistemicItemId = activeCycleWorkEpistemicItemId({
          projectId: facts.projectId,
          cycleInstanceId: facts.activeCycleInstanceId,
          turnCorrelationId: facts.turnCorrelationId,
          index,
          type,
          statement,
        });
        const existing = existingById.get(epistemicItemId);
        const confidence =
          raw.confidence === null || raw.confidence === undefined
            ? undefined
            : (raw.confidence as EpistemicConfidence);
        const blocking =
          raw.blocking === null || raw.blocking === undefined
            ? undefined
            : raw.blocking;

        if (existing) {
          if (
            !materialParity(existing, {
              type,
              statement,
              confidence,
              blocking,
            })
          ) {
            throw new ActiveCycleWorkAtomicFailure(
              "ACTIVE_CYCLE_WORK_IDEM_CONFLICT",
              "same_id_different_material",
            );
          }
          planned.push({
            epistemicItemId,
            type,
            statement,
            confidence,
            blocking,
            relatedObjects: existing.relatedObjects
              ? [...existing.relatedObjects]
              : [facts.projectId, facts.activeCycleInstanceId],
            provenance: existing.provenance
              ? structuredClone(existing.provenance)
              : buildProvenance({
                  projectId: facts.projectId,
                  cycleInstanceId: facts.activeCycleInstanceId,
                  turnCorrelationId: facts.turnCorrelationId,
                  producedAt: input.producedAt,
                  index,
                }),
            reuse: true,
          });
          continue;
        }

        const relatedObjects = [
          facts.projectId,
          facts.activeCycleInstanceId,
          ...(cycle.trajectoryId ? [cycle.trajectoryId] : []),
          ...(cycle.trajectoryStepId ? [cycle.trajectoryStepId] : []),
        ];

        planned.push({
          epistemicItemId,
          type,
          statement,
          confidence,
          blocking,
          relatedObjects,
          provenance: buildProvenance({
            projectId: facts.projectId,
            cycleInstanceId: facts.activeCycleInstanceId,
            turnCorrelationId: facts.turnCorrelationId,
            producedAt: input.producedAt,
            index,
          }),
          reuse: false,
        });
      }

      const toWrite = planned.filter((p) => !p.reuse);
      if (toWrite.length > 0) {
        const write = await input.updateEpistemicState.execute({
          projectId: facts.projectId,
          createdBy,
          correlationId: facts.turnCorrelationId,
          items: toWrite.map((p) => ({
            epistemicItemId: p.epistemicItemId,
            type: p.type,
            statement: p.statement,
            status: "active" as const,
            source: ACTIVE_CYCLE_WORK_SOURCE,
            confidence: p.confidence,
            blocking: p.blocking,
            relatedObjects: p.relatedObjects,
            provenance: p.provenance,
          })),
        });
        if (!write.ok) {
          throw new ActiveCycleWorkAtomicFailure(
            write.error.detailCode,
            write.error.internalCauseRef ?? "epistemic_write_failed",
          );
        }
      }

      const newIds = planned.map((p) => p.epistemicItemId);
      const carriedIds = lpsNow.livingProjectState.epistemicItemIds ?? [
        ...facts.existingEpistemicItemIds,
      ];
      const mergedIds = [
        ...carriedIds.filter((id) => !newIds.includes(id)),
        ...newIds,
      ];

      const needsLpsLink = newIds.some((id) => !carriedIds.includes(id));
      let lpsVersionAfter = facts.lpsVersion;
      if (needsLpsLink) {
        const appended =
          await input.appendLivingProjectStateVersion.execute({
            projectId: facts.projectId,
            expectedVersion: facts.lpsVersion,
            objective: facts.lpsObjective,
            createdBy,
            correlationId: facts.turnCorrelationId,
            epistemicItemIds: mergedIds,
            activeCycleInstanceId: facts.activeCycleInstanceId,
          });
        if (!appended.ok) {
          throw new ActiveCycleWorkAtomicFailure(
            appended.error.detailCode,
            appended.error.internalCauseRef ?? "lps_append_failed",
          );
        }
        lpsVersionAfter = appended.livingProjectState.version;
      }

      return {
        planned,
        lpsVersionAfter,
      };
    });

    const createdIds = atomic.planned
      .filter((p) => !p.reuse)
      .map((p) => p.epistemicItemId);
    const reusedIds = atomic.planned
      .filter((p) => p.reuse)
      .map((p) => p.epistemicItemId);

    const items: EpistemicItem[] = atomic.planned.map((p) => ({
      schemaVersion: "0.1.0-oa",
      epistemicItemId: p.epistemicItemId,
      type: p.type,
      statement: p.statement,
      status: "active",
      confidence: p.confidence,
      source: ACTIVE_CYCLE_WORK_SOURCE,
      createdBy: structuredClone(createdBy),
      createdAt: input.producedAt,
      relatedObjects: p.relatedObjects,
      blocking: p.blocking,
      provenance: p.provenance,
    }));

    return {
      ok: true,
      items,
      createdIds,
      reusedIds,
      lpsVersionAfter: atomic.lpsVersionAfter,
      idempotent: createdIds.length === 0,
    };
  } catch (err) {
    if (err instanceof ActiveCycleWorkAtomicFailure) {
      return { ok: false, code: err.code, reason: err.reason };
    }
    return {
      ok: false,
      code: "ACTIVE_CYCLE_WORK_ATOMIC_FAILURE",
      reason: err instanceof Error ? err.message : "atomic_materialize_failed",
    };
  }
}
