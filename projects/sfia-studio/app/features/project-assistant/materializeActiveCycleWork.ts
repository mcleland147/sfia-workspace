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
  EpistemicWorkRecommendationRelation,
} from "@/lib/oa/cycle";
import type { UpdateEpistemicState } from "@/lib/oa/cycle/application/updateEpistemicState";
import type { AppendLivingProjectStateVersion } from "@/lib/oa/project/application/appendLivingProjectStateVersion";
import type { GetCurrentLivingProjectState } from "@/lib/oa/project/application/getCurrentLivingProjectState";
import type { CyclePersistenceUnitOfWorkPort } from "@/lib/oa/cycle/ports/cyclePersistenceUnitOfWorkPort";
import type { GetCycle } from "@/lib/oa/cycle/application/getCycle";
import type { NoraActiveCycleWorkItem } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import {
  normalizeActiveCycleRecommendedOptionRef,
  normalizeRelatedRecommendationRef,
} from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
import { planDurableWorkRecommendationRelation } from "@/lib/oa/cycle/application/qualifyProspectiveWorkRecommendationMaterialization";
import { isOpenWorkRecommendationRelationTarget } from "@/lib/oa/cycle/application/deriveWorkRecommendations";
import type { ActiveCycleWorkContextSeal } from "./f2/activeCycleCognitiveContext";

/** Stable Product source for Nora active-cycle cognitive work. */
export const ACTIVE_CYCLE_WORK_SOURCE = "active-cycle-work:nora" as const;

/**
 * Extract canonical recommendedOptionRef from ACW EpistemicItem.relatedObjects.
 * Prefers opt:trajectory:* then any opt:* (W2-compatible relatedObjects pattern).
 */
export function extractAcwRecommendedOptionRef(
  relatedObjects: readonly string[] | null | undefined,
): string | null {
  if (!relatedObjects || relatedObjects.length === 0) return null;
  const optionRefs = relatedObjects.filter((r) => r.startsWith("opt:"));
  const trajectory = optionRefs.find((r) => r.startsWith("opt:trajectory:"));
  return trajectory ?? optionRefs[0] ?? null;
}

/**
 * CORR-01 C2 — validate structured ACW Recommendation option identity against
 * server trajectory decision-support BEFORE persistence / Pilot display.
 * Non-trajectory Recommendations (recommendedOptionRef=null) remain allowed.
 */
export function validateActiveCycleRecommendationAgainstDecisionSupport(input: {
  readonly items: readonly {
    readonly type: string;
    readonly recommendedOptionRef?: string | null;
  }[];
  readonly decisionSupportState:
    | "PRESENT"
    | "NONE"
    | "UNAVAILABLE"
    | null
    | undefined;
  readonly optionRefs: readonly string[] | null | undefined;
}):
  | { readonly ok: true }
  | {
      readonly ok: false;
      readonly code: "ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID";
      readonly reason: string;
    } {
  for (const item of input.items) {
    if (item.type !== "Recommendation") continue;
    if (
      item.recommendedOptionRef == null ||
      String(item.recommendedOptionRef).trim() === ""
    ) {
      continue;
    }
    const normalized = normalizeActiveCycleRecommendedOptionRef(
      item.recommendedOptionRef,
    );
    if (normalized === null) {
      return {
        ok: false,
        code: "ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID",
        reason: "recommended_option_ref_invalid_shape",
      };
    }
    if (input.decisionSupportState !== "PRESENT") {
      return {
        ok: false,
        code: "ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID",
        reason: "decision_support_not_present_for_trajectory_recommendation",
      };
    }
    if (!input.optionRefs || !input.optionRefs.includes(normalized)) {
      return {
        ok: false,
        code: "ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID",
        reason: `recommended_option_ref_not_in_decision_support:${normalized}`,
      };
    }
  }
  return { ok: true };
}

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

/**
 * EPI — only Reservation may carry blocking into Product EpistemicItems.
 * Stabilized constraints / out-of-scope choices must not become lifecycle blockers
 * via Observation|Hypothesis|… with blocking=true.
 */
export function resolveActiveCycleWorkBlockingFlag(
  type: EpistemicItemType,
  blocking: boolean | null | undefined,
): boolean | undefined {
  if (type !== "Reservation") return undefined;
  if (blocking === null || blocking === undefined) return undefined;
  return blocking;
}

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
  /** Semantic continuity — part of identity when Recommendation binds an Option. */
  recommendedOptionRef?: string | null;
}): string {
  const raw = [
    input.projectId,
    input.cycleInstanceId,
    input.turnCorrelationId,
    String(input.index),
    input.type,
    statementDigest(input.statement),
    input.recommendedOptionRef?.trim() || "",
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

function relationMaterialKey(
  relation: EpistemicWorkRecommendationRelation | null | undefined,
): string {
  if (!relation) return "";
  return [
    relation.kind,
    relation.targetEpistemicItemId,
    relation.judgmentOrigin,
    relation.authority,
  ].join("|");
}

function materialParity(
  existing: EpistemicItem,
  next: {
    type: EpistemicItemType;
    statement: string;
    confidence?: EpistemicConfidence;
    blocking?: boolean;
    recommendedOptionRef?: string | null;
    workRecommendationRelation?: EpistemicWorkRecommendationRelation | null;
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
  const existingRef = extractAcwRecommendedOptionRef(existing.relatedObjects);
  const nextRef = next.recommendedOptionRef?.trim() || null;
  if ((existingRef ?? null) !== (nextRef ?? null)) return false;
  // Option A — same identity must not silently change typed relation material.
  if (
    relationMaterialKey(existing.workRecommendationRelation) !==
    relationMaterialKey(next.workRecommendationRelation)
  ) {
    return false;
  }
  return true;
}

/**
 * Intended durable relation material from Nora candidate (no live applicability).
 * Used for materialParity on historical replay — durable ≠ CURRENT.
 */
function intendedWorkRecommendationRelationMaterial(
  item: NoraActiveCycleWorkItem,
): EpistemicWorkRecommendationRelation | null {
  if (item.type !== "Recommendation") return null;
  const planned = planDurableWorkRecommendationRelation({
    relationKind: item.relationKind,
    relatedRecommendationRef: item.relatedRecommendationRef,
  });
  if (!planned.persist) return null;
  return planned.relation;
}

/**
 * Resolve durable typed WR relation for a **new** Recommendation mint inside UoW.
 * CONTRADICTORY requires an open applicable Work Recommendation target now.
 * Fail-closed: never mint CONTRADICTORY without a writable envelope.
 * Not used for reuse of an already-persisted identity (see replay path).
 */
function resolveWorkRecommendationRelationForNewWrite(input: {
  readonly item: NoraActiveCycleWorkItem;
  readonly existingItems: readonly EpistemicItem[];
  readonly cycleInstanceId: string;
}):
  | { readonly ok: true; readonly relation?: EpistemicWorkRecommendationRelation }
  | { readonly ok: false; readonly reason: string } {
  if (input.item.type !== "Recommendation") {
    return { ok: true };
  }
  const planned = planDurableWorkRecommendationRelation({
    relationKind: input.item.relationKind,
    relatedRecommendationRef: input.item.relatedRecommendationRef,
  });
  if (!planned.persist) {
    if (planned.reason === "contradictory_target_missing") {
      return { ok: false, reason: "contradictory_relation_target_missing" };
    }
    return { ok: true };
  }
  const targetId = planned.relation.targetEpistemicItemId;
  const target = input.existingItems.find((e) => e.epistemicItemId === targetId);
  if (
    !target ||
    !isOpenWorkRecommendationRelationTarget({
      item: target,
      allItems: input.existingItems,
      cycleInstanceId: input.cycleInstanceId,
    })
  ) {
    return {
      ok: false,
      reason: "contradictory_relation_target_not_applicable",
    };
  }
  // Normalize once more against Product id (not Nora text paraphrase).
  const normalized = normalizeRelatedRecommendationRef(targetId);
  if (!normalized || normalized !== target.epistemicItemId) {
    return { ok: false, reason: "contradictory_relation_target_invalid" };
  }
  return {
    ok: true,
    relation: {
      kind: "CONTRADICTORY",
      targetEpistemicItemId: normalized,
      judgmentOrigin: "nora_structured_candidate",
      authority: "none",
    },
  };
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
  /**
   * Optional original Nora ACW payload indexes parallel to `items`.
   * When set, Epistemic identity uses these indexes instead of the filtered
   * array position — required so prospective REC-01 suppression cannot shift
   * identities of surviving items on logical-turn replay.
   * Omit for legacy callers that pass the full unfiltered payload.
   */
  itemSourceIndexes?: readonly number[];
  facts: ActiveCycleWorkMaterializationFacts;
  updateEpistemicState: UpdateEpistemicState;
  appendLivingProjectStateVersion: AppendLivingProjectStateVersion;
  getCurrentLivingProjectState: GetCurrentLivingProjectState;
  getCycle: GetCycle;
  runInTransaction: CyclePersistenceUnitOfWorkPort["runInTransaction"];
  producedAt: string;
  createdBy?: ActorReference;
  /**
   * CORR-01 C2 — when provided, every structured recommendedOptionRef must be an
   * exact member. Omit only for legacy callers without decision-support context.
   */
  allowedOptionRefs?: readonly string[];
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

  if (
    input.itemSourceIndexes != null &&
    input.itemSourceIndexes.length !== input.items.length
  ) {
    return {
      ok: false,
      code: "ACTIVE_CYCLE_WORK_INVALID",
      reason: "source_indexes_length_mismatch",
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
    // Recommendation may carry structured option identity; other types must not.
    if (
      item.type !== "Recommendation" &&
      item.recommendedOptionRef != null &&
      String(item.recommendedOptionRef).trim() !== ""
    ) {
      return {
        ok: false,
        code: "ACTIVE_CYCLE_WORK_INVALID",
        reason: "recommended_option_ref_only_on_recommendation",
      };
    }
    // P6-HQA-02 REC-01 Option B — structured WR fields are Recommendation-only.
    if (
      item.type !== "Recommendation" &&
      (item.trackingRationale !== undefined ||
        item.relationKind !== undefined ||
        item.relatedRecommendationRef !== undefined)
    ) {
      return {
        ok: false,
        code: "ACTIVE_CYCLE_WORK_INVALID",
        reason: "option_b_fields_only_on_recommendation",
      };
    }
    if (
      item.type === "Recommendation" &&
      item.recommendedOptionRef != null &&
      normalizeActiveCycleRecommendedOptionRef(item.recommendedOptionRef) ===
        null
    ) {
      return {
        ok: false,
        code: "ACTIVE_CYCLE_WORK_INVALID",
        reason: "recommended_option_ref_invalid",
      };
    }
    // CORR-01 C2 defense-in-depth — when allowedOptionRefs is supplied, every
    // structured Recommendation ref must be an exact member.
    if (
      item.type === "Recommendation" &&
      item.recommendedOptionRef != null &&
      String(item.recommendedOptionRef).trim() !== ""
    ) {
      const normalized = normalizeActiveCycleRecommendedOptionRef(
        item.recommendedOptionRef,
      );
      if (
        input.allowedOptionRefs !== undefined &&
        (normalized === null ||
          !input.allowedOptionRefs.includes(normalized))
      ) {
        return {
          ok: false,
          code: "ACTIVE_CYCLE_RECOMMENDATION_OPTION_INVALID",
          reason: "recommended_option_ref_not_in_decision_support",
        };
      }
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
        workRecommendationRelation?: EpistemicWorkRecommendationRelation;
        reuse: boolean;
      }> = [];

      const existingById = new Map(
        facts.existingItems.map((e) => [e.epistemicItemId, e]),
      );

      for (let index = 0; index < input.items.length; index += 1) {
        const raw = input.items[index]!;
        // Prefer original ACW payload index when prospective filtering compacted
        // the write list — identity must not depend on post-filter position.
        const identityIndex = input.itemSourceIndexes?.[index] ?? index;
        const type = raw.type as EpistemicItemType;
        const statement = raw.statement.trim();
        if (!statement) {
          throw new ActiveCycleWorkAtomicFailure(
            "ACTIVE_CYCLE_WORK_INVALID",
            "empty_statement",
          );
        }
        const recommendedOptionRef =
          type === "Recommendation"
            ? normalizeActiveCycleRecommendedOptionRef(
                raw.recommendedOptionRef,
              )
            : null;
        const epistemicItemId = activeCycleWorkEpistemicItemId({
          projectId: facts.projectId,
          cycleInstanceId: facts.activeCycleInstanceId,
          turnCorrelationId: facts.turnCorrelationId,
          index: identityIndex,
          type,
          statement,
          recommendedOptionRef,
        });
        const existing = existingById.get(epistemicItemId);
        const confidence =
          raw.confidence === null || raw.confidence === undefined
            ? undefined
            : (raw.confidence as EpistemicConfidence);
        const blocking = resolveActiveCycleWorkBlockingFlag(type, raw.blocking);

        if (existing) {
          // Historical replay: compare durable relation material only.
          // Do NOT require the target to still be CURRENT/applicable.
          const intendedRelation =
            intendedWorkRecommendationRelationMaterial(raw);
          if (
            !materialParity(existing, {
              type,
              statement,
              confidence,
              blocking,
              recommendedOptionRef,
              workRecommendationRelation: intendedRelation,
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
                  index: identityIndex,
                }),
            workRecommendationRelation: existing.workRecommendationRelation
              ? structuredClone(existing.workRecommendationRelation)
              : undefined,
            reuse: true,
          });
          continue;
        }

        // New mint only: CONTRADICTORY target must be open/applicable now.
        const relationPlan = resolveWorkRecommendationRelationForNewWrite({
          item: raw,
          existingItems: facts.existingItems,
          cycleInstanceId: facts.activeCycleInstanceId,
        });
        if (!relationPlan.ok) {
          throw new ActiveCycleWorkAtomicFailure(
            "ACTIVE_CYCLE_WORK_RELATION_INVALID",
            relationPlan.reason,
          );
        }
        const workRecommendationRelation = relationPlan.relation;

        const relatedObjects = [
          facts.projectId,
          facts.activeCycleInstanceId,
          ...(cycle.trajectoryId ? [cycle.trajectoryId] : []),
          ...(cycle.trajectoryStepId ? [cycle.trajectoryStepId] : []),
          ...(recommendedOptionRef ? [recommendedOptionRef] : []),
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
            index: identityIndex,
          }),
          workRecommendationRelation,
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
            workRecommendationRelation: p.workRecommendationRelation,
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
      workRecommendationRelation: p.workRecommendationRelation
        ? structuredClone(p.workRecommendationRelation)
        : undefined,
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
