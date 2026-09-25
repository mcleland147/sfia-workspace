/**
 * CYCLE-RESERVATION-PILOTING-01 — materialize reservationDelta onto EpistemicItems.
 * KEEP UpdateEpistemicState; no parallel store; no auto-RESOLVE.
 */

import { createHash } from "node:crypto";
import type { ActorReference, ProvenanceRecord } from "@/lib/oa/doctrine";
import type { EpistemicItem } from "@/lib/oa/cycle/domain/types";
import type { UpdateEpistemicState } from "@/lib/oa/cycle/application/updateEpistemicState";
import {
  RESERVATION_SOURCE_DELTA,
  nextReservationOrdinal,
  reservationBelongsToCycle,
  type EpistemicReservationMetadata,
} from "@/lib/oa/cycle/domain/reservationSemantics";
import { NORA_LIFECYCLE_RECOMMENDATION_ACTOR } from "@/lib/oa/cycle/application/lifecycleRecommendation/noraActor";
import type { NoraActiveCycleWorkOutput } from "@/lib/nora-cognitive-runtime/noraProductTurnOutputType";
import type { NoraReservationDeltaStructured } from "@/lib/nora-cognitive-runtime/reservationDelta";

export const NORA_RESERVATION_DELTA_ACTOR: ActorReference =
  NORA_LIFECYCLE_RECOMMENDATION_ACTOR;

export type MaterializeReservationDeltaResult =
  | {
      ok: true;
      createdIds: string[];
      updatedIds: string[];
      proposedIds: string[];
      skipped: string[];
    }
  | { ok: false; code: string; reason: string };

function reservationCreateId(input: {
  projectId: string;
  cycleInstanceId: string;
  logicalTurnId: string;
  opIndex: number;
  title: string;
}): string {
  const digest = createHash("sha256")
    .update(
      [
        input.projectId,
        input.cycleInstanceId,
        input.logicalTurnId,
        String(input.opIndex),
        "CREATE",
        input.title.trim().toLowerCase(),
      ].join("\0"),
    )
    .digest("hex")
    .slice(0, 24);
  return `epi:rsv:${digest}`;
}

function buildProvenance(input: {
  projectId: string;
  cycleInstanceId: string;
  logicalTurnId: string;
  producedAt: string;
  opIndex: number;
}): ProvenanceRecord {
  return {
    schemaVersion: "0.1.0-oa",
    provenanceRecordId: `prov:rsv:${input.logicalTurnId}:${input.opIndex}`,
    actor: NORA_RESERVATION_DELTA_ACTOR,
    source: "conversation",
    timestamp: input.producedAt,
    correlationId: input.logicalTurnId,
    projectId: input.projectId,
    cycleInstanceId: input.cycleInstanceId,
  };
}

function requireCreateFields(
  op: NoraReservationDeltaStructured["operations"][number],
): string | null {
  if (!op.title?.trim()) return "create_title_required";
  if (!op.summary?.trim()) return "create_summary_required";
  if (!op.impact) return "create_impact_required";
  if (!op.attentionBy) return "create_attention_by_required";
  if (!op.finalizationRelevance) return "create_finalization_relevance_required";
  if (!op.rationale?.trim()) return "create_rationale_required";
  if (!op.resolutionCondition?.trim()) return "create_resolution_condition_required";
  return null;
}

/**
 * Apply reservationDelta operations. Never sets status=resolved.
 * CREATE is retry-safe via durable id from logicalTurnId+index+title.
 */
export async function materializeReservationDelta(input: {
  projectId: string;
  cycleInstanceId: string;
  logicalTurnId: string;
  producedAt: string;
  delta: NoraReservationDeltaStructured;
  existingItems: readonly EpistemicItem[];
  updateEpistemicState: UpdateEpistemicState;
  /** Valid journal entry ids for this cycle (optional filter). */
  validJournalEntryIds?: ReadonlySet<string>;
}): Promise<MaterializeReservationDeltaResult> {
  const createdIds: string[] = [];
  const updatedIds: string[] = [];
  const proposedIds: string[] = [];
  const skipped: string[] = [];
  const working = input.existingItems.map((i) => structuredClone(i));

  for (let opIndex = 0; opIndex < input.delta.operations.length; opIndex += 1) {
    const op = input.delta.operations[opIndex]!;

    if (op.op === "CREATE") {
      const missing = requireCreateFields(op);
      if (missing) {
        return { ok: false, code: "RESERVATION_DELTA_INVALID", reason: missing };
      }
      const title = op.title!.trim();
      const epistemicItemId = reservationCreateId({
        projectId: input.projectId,
        cycleInstanceId: input.cycleInstanceId,
        logicalTurnId: input.logicalTurnId,
        opIndex,
        title,
      });
      const existing = working.find((i) => i.epistemicItemId === epistemicItemId);
      if (existing) {
        skipped.push(`create_idempotent:${epistemicItemId}`);
        continue;
      }
      const journalEntryRefs = (op.journalEntryRefs ?? []).filter((id) =>
        input.validJournalEntryIds
          ? input.validJournalEntryIds.has(id)
          : true,
      );
      const reservation: EpistemicReservationMetadata = {
        ordinal: nextReservationOrdinal(working, input.cycleInstanceId),
        title,
        summary: op.summary!.trim(),
        impact: op.impact!,
        attentionBy: op.attentionBy!,
        finalizationRelevance: op.finalizationRelevance!,
        rationale: op.rationale!.trim(),
        resolutionCondition: op.resolutionCondition!.trim(),
        journalEntryRefs,
        sourceTurnRefs: [...(op.sourceTurnRefs ?? [])],
      };
      const statement = `${title} — ${reservation.summary}`;
      const itemPayload = {
        epistemicItemId,
        type: "Reservation" as const,
        statement,
        status: "active" as const,
        source: RESERVATION_SOURCE_DELTA,
        // New path: blocking flag mirrors must_resolve for legacy readers only.
        blocking: reservation.finalizationRelevance === "must_resolve",
        relatedObjects: [input.projectId, input.cycleInstanceId],
        provenance: buildProvenance({
          projectId: input.projectId,
          cycleInstanceId: input.cycleInstanceId,
          logicalTurnId: input.logicalTurnId,
          producedAt: input.producedAt,
          opIndex,
        }),
        reservation,
      };
      const saved = await input.updateEpistemicState.execute({
        projectId: input.projectId,
        createdBy: NORA_RESERVATION_DELTA_ACTOR,
        correlationId: input.logicalTurnId,
        items: [itemPayload],
      });
      if (!saved.ok) {
        return {
          ok: false,
          code: saved.error.detailCode,
          reason: saved.error.message,
        };
      }
      working.push({
        schemaVersion: "0.1.0-oa",
        epistemicItemId,
        type: "Reservation",
        statement,
        status: "active",
        source: RESERVATION_SOURCE_DELTA,
        createdBy: NORA_RESERVATION_DELTA_ACTOR,
        createdAt: input.producedAt,
        relatedObjects: [input.projectId, input.cycleInstanceId],
        blocking: reservation.finalizationRelevance === "must_resolve",
        provenance: itemPayload.provenance,
        reservation,
      });
      createdIds.push(epistemicItemId);
      continue;
    }

    if (op.op === "UPDATE") {
      const targetId = op.targetReservationId?.trim();
      if (!targetId) {
        return {
          ok: false,
          code: "RESERVATION_DELTA_INVALID",
          reason: "update_target_required",
        };
      }
      const target = working.find((i) => i.epistemicItemId === targetId);
      if (!target || target.type !== "Reservation") {
        return {
          ok: false,
          code: "RESERVATION_NOT_FOUND",
          reason: targetId,
        };
      }
      if (!reservationBelongsToCycle(target, input.cycleInstanceId)) {
        return {
          ok: false,
          code: "RESERVATION_CYCLE_MISMATCH",
          reason: targetId,
        };
      }
      if (target.status !== "active") {
        skipped.push(`update_not_active:${targetId}`);
        continue;
      }
      const prior = target.reservation;
      const journalEntryRefs = (
        op.journalEntryRefs.length > 0
          ? op.journalEntryRefs
          : (prior?.journalEntryRefs ?? [])
      ).filter((id) =>
        input.validJournalEntryIds
          ? input.validJournalEntryIds.has(id)
          : true,
      );
      const reservation: EpistemicReservationMetadata = {
        ordinal:
          prior?.ordinal ??
          nextReservationOrdinal(working, input.cycleInstanceId),
        title: (op.title?.trim() || prior?.title || target.statement).trim(),
        summary: (op.summary?.trim() || prior?.summary || target.statement).trim(),
        impact: op.impact ?? prior?.impact ?? "moderate",
        attentionBy: op.attentionBy ?? prior?.attentionBy ?? "during_cycle",
        finalizationRelevance:
          op.finalizationRelevance ?? prior?.finalizationRelevance ?? "may_affect",
        rationale: (op.rationale?.trim() || prior?.rationale || "").trim(),
        resolutionCondition: (
          op.resolutionCondition?.trim() ||
          prior?.resolutionCondition ||
          ""
        ).trim(),
        journalEntryRefs,
        sourceTurnRefs: [
          ...(prior?.sourceTurnRefs ?? []),
          ...(op.sourceTurnRefs ?? []),
        ].filter((v, i, a) => a.indexOf(v) === i),
        resolutionProposal: prior?.resolutionProposal,
        deferred: prior?.deferred,
      };
      const statement = `${reservation.title} — ${reservation.summary}`;
      const saved = await input.updateEpistemicState.execute({
        projectId: input.projectId,
        createdBy: NORA_RESERVATION_DELTA_ACTOR,
        correlationId: input.logicalTurnId,
        items: [
          {
            epistemicItemId: target.epistemicItemId,
            type: "Reservation",
            statement,
            status: "active",
            source: target.source ?? RESERVATION_SOURCE_DELTA,
            confidence: target.confidence,
            blocking: reservation.finalizationRelevance === "must_resolve",
            relatedObjects: target.relatedObjects
              ? [...target.relatedObjects]
              : [input.projectId, input.cycleInstanceId],
            provenance: target.provenance
              ? structuredClone(target.provenance)
              : buildProvenance({
                  projectId: input.projectId,
                  cycleInstanceId: input.cycleInstanceId,
                  logicalTurnId: input.logicalTurnId,
                  producedAt: input.producedAt,
                  opIndex,
                }),
            reservation,
          },
        ],
      });
      if (!saved.ok) {
        return {
          ok: false,
          code: saved.error.detailCode,
          reason: saved.error.message,
        };
      }
      target.statement = statement;
      target.reservation = reservation;
      target.blocking = reservation.finalizationRelevance === "must_resolve";
      updatedIds.push(target.epistemicItemId);
      continue;
    }

    if (op.op === "PROPOSE_RESOLUTION") {
      const targetId = op.targetReservationId?.trim();
      if (!targetId) {
        return {
          ok: false,
          code: "RESERVATION_DELTA_INVALID",
          reason: "propose_target_required",
        };
      }
      if (!op.rationale?.trim()) {
        return {
          ok: false,
          code: "RESERVATION_DELTA_INVALID",
          reason: "propose_rationale_required",
        };
      }
      if (!op.basisType) {
        return {
          ok: false,
          code: "RESERVATION_DELTA_INVALID",
          reason: "propose_basis_type_required",
        };
      }
      // Bounded default: clarification without refs → pin to current Product turn.
      // The Pilote clarification that satisfies resolutionCondition is this turn.
      let basisRefs = [...op.basisRefs];
      if (
        basisRefs.length === 0 &&
        op.basisType === "clarification" &&
        input.logicalTurnId.trim()
      ) {
        basisRefs = [input.logicalTurnId.trim()];
      }
      if (!basisRefs.length) {
        return {
          ok: false,
          code: "RESERVATION_DELTA_INVALID",
          reason: "propose_basis_refs_required",
        };
      }
      const target = working.find((i) => i.epistemicItemId === targetId);
      if (!target || target.type !== "Reservation") {
        return {
          ok: false,
          code: "RESERVATION_NOT_FOUND",
          reason: targetId,
        };
      }
      if (target.status !== "active") {
        skipped.push(`propose_not_active:${targetId}`);
        continue;
      }
      const prior = target.reservation;
      const reservation: EpistemicReservationMetadata = {
        ordinal:
          prior?.ordinal ??
          nextReservationOrdinal(working, input.cycleInstanceId),
        title: prior?.title ?? target.statement,
        summary: prior?.summary ?? target.statement,
        impact: prior?.impact ?? "moderate",
        attentionBy: prior?.attentionBy ?? "during_cycle",
        finalizationRelevance: prior?.finalizationRelevance ?? "may_affect",
        rationale: prior?.rationale ?? "",
        resolutionCondition: prior?.resolutionCondition ?? "",
        journalEntryRefs: prior?.journalEntryRefs ?? [],
        sourceTurnRefs: [
          ...(prior?.sourceTurnRefs ?? []),
          ...(op.sourceTurnRefs ?? []),
        ].filter((v, i, a) => a.indexOf(v) === i),
        deferred: prior?.deferred,
        resolutionProposal: {
          rationale: op.rationale.trim(),
          basisType: op.basisType,
          basisRefs: [...basisRefs],
          proposedAt: input.producedAt,
          sourceTurnRefs: [...(op.sourceTurnRefs ?? [])],
        },
      };
      const saved = await input.updateEpistemicState.execute({
        projectId: input.projectId,
        createdBy: NORA_RESERVATION_DELTA_ACTOR,
        correlationId: input.logicalTurnId,
        items: [
          {
            epistemicItemId: target.epistemicItemId,
            type: "Reservation",
            statement: target.statement,
            status: "active",
            source: target.source ?? RESERVATION_SOURCE_DELTA,
            confidence: target.confidence,
            blocking: target.blocking,
            relatedObjects: target.relatedObjects
              ? [...target.relatedObjects]
              : [input.projectId, input.cycleInstanceId],
            provenance: target.provenance
              ? structuredClone(target.provenance)
              : buildProvenance({
                  projectId: input.projectId,
                  cycleInstanceId: input.cycleInstanceId,
                  logicalTurnId: input.logicalTurnId,
                  producedAt: input.producedAt,
                  opIndex,
                }),
            reservation,
          },
        ],
      });
      if (!saved.ok) {
        return {
          ok: false,
          code: saved.error.detailCode,
          reason: saved.error.message,
        };
      }
      target.reservation = reservation;
      proposedIds.push(target.epistemicItemId);
      continue;
    }
  }

  return { ok: true, createdIds, updatedIds, proposedIds, skipped };
}

/**
 * Strip Reservation items from activeCycleWork when reservationDelta is present
 * to avoid double materialization (CR-RSV-19).
 */
export function stripActiveCycleWorkReservationsWhenDeltaPresent(input: {
  activeCycleWork: NoraActiveCycleWorkOutput | null;
  reservationDelta: NoraReservationDeltaStructured | null;
}): NoraActiveCycleWorkOutput | null {
  const acw = input.activeCycleWork;
  if (!acw) return null;
  if (!input.reservationDelta || input.reservationDelta.operations.length === 0) {
    return acw;
  }
  const items = acw.items.filter((i) => i.type !== "Reservation");
  return { items };
}
