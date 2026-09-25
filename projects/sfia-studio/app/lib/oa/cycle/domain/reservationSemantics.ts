/**
 * CYCLE-RESERVATION-PILOTING-01 — Reservation semantics on EpistemicItem.
 * KEEP EpistemicItem store; ADAPT optional metadata only. No parallel store.
 */

import { getCycleTypeById } from "./cycleTypeCatalog";
import type { EpistemicItem, ProjectTrajectory } from "./types";

export type ReservationImpact = "minor" | "moderate" | "major";

export type ReservationAttentionBy =
  | "during_cycle"
  | "before_recommendation"
  | "before_decision"
  | "before_execution_contract"
  | "before_finalization";

export type ReservationFinalizationRelevance =
  | "none"
  | "may_affect"
  | "must_resolve";

export type ReservationResolutionBasisType =
  | "clarification"
  | "human_decision"
  | "evidence";

export type ReservationResolutionProposal = {
  rationale: string;
  basisType: ReservationResolutionBasisType;
  basisRefs: string[];
  proposedAt: string;
  sourceTurnRefs?: string[];
};

export type ReservationDeferredMeta = {
  deferredAt: string;
  /** Durable HumanDecision id when trajectory report requires arbitration. */
  humanDecisionId?: string;
  targetCycleTypeId?: string | null;
  rationale?: string;
};

/**
 * Optional typed Reservation payload (Option A — same EpistemicItem JSON).
 * Absent on historical MealFlow / pre-#517 reservations.
 */
export type EpistemicReservationMetadata = {
  ordinal: number;
  title: string;
  summary: string;
  impact: ReservationImpact;
  attentionBy: ReservationAttentionBy;
  finalizationRelevance: ReservationFinalizationRelevance;
  rationale: string;
  resolutionCondition: string;
  journalEntryRefs: string[];
  sourceTurnRefs: string[];
  resolutionProposal?: ReservationResolutionProposal;
  deferred?: ReservationDeferredMeta;
};

export type ReservationPresentationState =
  | "potential"
  | "blocks_finalization"
  | "resolved"
  | "deferred"
  | "to_qualify"
  | "rejected";

export const RESERVATION_SOURCE_DELTA = "reservation-delta:nora" as const;

/** Legacy Reservation: no reservation metadata. */
export function isLegacyReservation(item: EpistemicItem): boolean {
  return item.type === "Reservation" && item.reservation == null;
}

/**
 * FINALIZE gate predicate (CR-RSV-05 / CR-RSV-08 / CR-RSV-37).
 * - New path: active + finalizationRelevance=must_resolve
 * - Legacy fail-closed: active + blocking=true + no metadata
 * Impact alone never blocks.
 */
export function isFinalizationGateBlockingReservation(
  item: EpistemicItem,
): boolean {
  if (item.type !== "Reservation") return false;
  if (item.status !== "active") return false;
  if (item.reservation?.deferred) return false;
  const meta = item.reservation;
  if (meta) {
    return meta.finalizationRelevance === "must_resolve";
  }
  // Legacy MealFlow / pre-metadata — fail-closed.
  return item.blocking === true;
}

export function presentReservationState(
  item: EpistemicItem,
): ReservationPresentationState {
  if (item.type !== "Reservation") return "to_qualify";
  if (item.status === "resolved") return "resolved";
  if (item.status === "rejected") return "rejected";
  if (item.reservation?.deferred) return "deferred";
  if (isLegacyReservation(item) && item.status === "active") return "to_qualify";
  if (isFinalizationGateBlockingReservation(item)) return "blocks_finalization";
  return "potential";
}

export function presentReservationStateLabel(
  state: ReservationPresentationState,
): string {
  switch (state) {
    case "potential":
      return "POTENTIELLE";
    case "blocks_finalization":
      return "BLOQUE LA CLÔTURE";
    case "resolved":
      return "RÉSOLUE";
    case "deferred":
      return "REPORTÉE";
    case "to_qualify":
      return "À QUALIFIER";
    case "rejected":
      return "REJETÉE";
    default:
      return state;
  }
}

export function presentReservationImpactLabel(
  impact: ReservationImpact | undefined,
): string {
  switch (impact) {
    case "minor":
      return "Mineur";
    case "moderate":
      return "Modéré";
    case "major":
      return "Majeur";
    default:
      return "—";
  }
}

export function presentReservationAttentionLabel(
  attentionBy: ReservationAttentionBy | undefined,
): string {
  switch (attentionBy) {
    case "during_cycle":
      return "Pendant le cycle";
    case "before_recommendation":
      return "Avant recommandation";
    case "before_decision":
      return "Avant décision";
    case "before_execution_contract":
      return "Avant ExecutionContract";
    case "before_finalization":
      return "Avant finalisation";
    default:
      return "—";
  }
}

export function presentFinalizationRelevanceLabel(
  relevance: ReservationFinalizationRelevance | undefined,
): string {
  switch (relevance) {
    case "none":
      return "Sans effet sur la clôture";
    case "may_affect":
      return "Peut affecter la clôture";
    case "must_resolve":
      return "À traiter avant finalisation";
    default:
      return "À qualifier (modèle précédent)";
  }
}

/** Cycle-scoped ordinal assignment — creation order among Reservations. */
export function nextReservationOrdinal(
  existing: readonly EpistemicItem[],
  cycleInstanceId: string,
): number {
  let max = 0;
  for (const item of existing) {
    if (item.type !== "Reservation") continue;
    if (!reservationBelongsToCycle(item, cycleInstanceId)) continue;
    const o = item.reservation?.ordinal;
    if (typeof o === "number" && o > max) max = o;
  }
  return max + 1;
}

export function reservationBelongsToCycle(
  item: EpistemicItem,
  cycleInstanceId: string,
): boolean {
  if (item.provenance?.cycleInstanceId === cycleInstanceId) return true;
  if (item.relatedObjects?.includes(cycleInstanceId)) return true;
  return false;
}

/**
 * Deterministic presentation ordinal for legacy items lacking metadata.
 * Does not rewrite durable payload — UI / projection only.
 */
export function projectReservationOrdinal(
  item: EpistemicItem,
  cycleItems: readonly EpistemicItem[],
  cycleInstanceId: string,
): number {
  if (item.reservation?.ordinal != null) return item.reservation.ordinal;
  const peers = cycleItems
    .filter(
      (i) =>
        i.type === "Reservation" &&
        reservationBelongsToCycle(i, cycleInstanceId),
    )
    .slice()
    .sort((a, b) => {
      const ta = a.createdAt.localeCompare(b.createdAt);
      if (ta !== 0) return ta;
      return a.epistemicItemId.localeCompare(b.epistemicItemId);
    });
  const idx = peers.findIndex((p) => p.epistemicItemId === item.epistemicItemId);
  return idx >= 0 ? idx + 1 : 0;
}

/**
 * Honest defer target from the current ProjectTrajectory — never invent a cycle.
 * Prefer the next later step with a durable cycleTypeId that is not done/skipped
 * and differs from the source cycle type.
 */
export function resolveHonestReservationDeferTarget(input: {
  trajectory: ProjectTrajectory | null | undefined;
  currentCycleTypeId: string | null | undefined;
}): { targetCycleTypeId: string; targetLabel: string } | null {
  const trajectory = input.trajectory;
  if (!trajectory?.steps?.length) return null;
  const steps = [...trajectory.steps].sort((a, b) => a.order - b.order);
  const current = input.currentCycleTypeId?.trim() || null;
  let currentIdx = -1;
  if (current) {
    currentIdx = steps.findIndex(
      (s) =>
        s.cycleTypeId === current &&
        (s.state === "active" || s.state === "pending" || s.state === "blocked"),
    );
    if (currentIdx < 0) {
      currentIdx = steps.findIndex((s) => s.cycleTypeId === current);
    }
  }
  const start = currentIdx >= 0 ? currentIdx + 1 : 0;
  for (let i = start; i < steps.length; i += 1) {
    const step = steps[i]!;
    const typeId = step.cycleTypeId?.trim();
    if (!typeId) continue;
    if (step.state === "done" || step.state === "skipped") continue;
    if (current && typeId === current) continue;
    const catalog = getCycleTypeById(typeId);
    return {
      targetCycleTypeId: typeId,
      targetLabel: catalog?.label?.trim() || step.label.trim() || typeId,
    };
  }
  return null;
}

/** Whether a Reservation may be deferred (Pilot report) under V1 rules. */
export function canDeferReservation(item: EpistemicItem): boolean {
  if (item.type !== "Reservation") return false;
  if (item.status !== "active") return false;
  if (isLegacyReservation(item)) return false;
  if (item.reservation?.deferred) return false;
  if (item.reservation?.finalizationRelevance === "must_resolve") return false;
  return true;
}

export function presentDeferredTargetLabel(
  targetCycleTypeId: string | null | undefined,
): string | null {
  const id = targetCycleTypeId?.trim();
  if (!id) return null;
  return getCycleTypeById(id)?.label?.trim() || id;
}
