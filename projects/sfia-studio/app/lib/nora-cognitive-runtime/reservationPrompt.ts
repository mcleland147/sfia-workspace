/**
 * CYCLE-RESERVATION-PILOTING-01 — bounded reservation projection for Nora prompt.
 */

import type { EpistemicItem } from "@/lib/oa/cycle/domain/types";
import {
  isFinalizationGateBlockingReservation,
  presentReservationState,
  presentReservationStateLabel,
  projectReservationOrdinal,
  reservationBelongsToCycle,
  type ReservationImpact,
} from "@/lib/oa/cycle/domain/reservationSemantics";

export type ReservationCompactPromptRow = {
  epistemicItemId: string;
  ordinal: number;
  title: string;
  statusLabel: string;
  impact: ReservationImpact | "legacy";
  attentionBy: string;
  finalizationRelevance: string;
  rationale: string;
  resolutionCondition: string;
  journalEntryRefs: string[];
  isGateBlocker: boolean;
};

const IMPACT_RANK: Record<string, number> = {
  major: 0,
  moderate: 1,
  minor: 2,
  legacy: 3,
};

const ATTENTION_RANK: Record<string, number> = {
  before_finalization: 0,
  before_execution_contract: 1,
  before_decision: 2,
  before_recommendation: 3,
  during_cycle: 4,
};

/**
 * Compact, bounded reservation list for active-cycle cognitive context.
 * Priority: gate blockers → major impact → attentionBy proximity → others.
 */
export function buildReservationCompactForPrompt(
  items: readonly EpistemicItem[],
  cycleInstanceId: string,
  limit = 12,
): ReservationCompactPromptRow[] {
  const cycleItems = items.filter(
    (i) =>
      i.type === "Reservation" &&
      reservationBelongsToCycle(i, cycleInstanceId) &&
      (i.status === "active" || i.status === "resolved"),
  );
  const rows: ReservationCompactPromptRow[] = cycleItems.map((item) => {
    const state = presentReservationState(item);
    return {
      epistemicItemId: item.epistemicItemId,
      ordinal: projectReservationOrdinal(item, cycleItems, cycleInstanceId),
      title: item.reservation?.title?.trim() || item.statement,
      statusLabel: presentReservationStateLabel(state),
      impact: item.reservation?.impact ?? "legacy",
      attentionBy: item.reservation?.attentionBy ?? "during_cycle",
      finalizationRelevance:
        item.reservation?.finalizationRelevance ??
        (item.blocking === true ? "must_resolve(legacy)" : "to_qualify"),
      rationale: (item.reservation?.rationale ?? "").slice(0, 160),
      resolutionCondition: (item.reservation?.resolutionCondition ?? "").slice(
        0,
        120,
      ),
      journalEntryRefs: item.reservation?.journalEntryRefs ?? [],
      isGateBlocker: isFinalizationGateBlockingReservation(item),
    };
  });

  rows.sort((a, b) => {
    if (a.isGateBlocker !== b.isGateBlocker) return a.isGateBlocker ? -1 : 1;
    const ia = IMPACT_RANK[a.impact] ?? 9;
    const ib = IMPACT_RANK[b.impact] ?? 9;
    if (ia !== ib) return ia - ib;
    const aa = ATTENTION_RANK[a.attentionBy] ?? 9;
    const ab = ATTENTION_RANK[b.attentionBy] ?? 9;
    if (aa !== ab) return aa - ab;
    return a.ordinal - b.ordinal;
  });

  return rows.slice(0, limit);
}

export function formatReservationCompactForPrompt(
  rows: readonly ReservationCompactPromptRow[],
): string {
  if (rows.length === 0) {
    return [
      "=== RÉSERVES DU CYCLE (compact) ===",
      "Aucune réserve active pour ce cycle.",
      "Réserve ≠ openPoint Journal. Ne crée une Réserve que si une incertitude a une conséquence significative.",
    ].join("\n");
  }
  const lines = [
    "=== RÉSERVES DU CYCLE (compact) ===",
    "Utilise ces réserves pour challenger / timing / finalisation honnête.",
    "Tu ne les lèves PAS seul — PROPOSE_RESOLUTION + confirmation Pilote.",
    "Réserve ≠ HumanDecision ≠ Evidence ≠ Truth C.",
  ];
  for (const r of rows) {
    lines.push(
      `- Réserve ${r.ordinal} [${r.statusLabel}] id=${r.epistemicItemId}`,
      `  titre: ${r.title}`,
      `  impact=${r.impact} attention=${r.attentionBy} finalization=${r.finalizationRelevance}`,
    );
    if (r.rationale) lines.push(`  pourquoi: ${r.rationale}`);
    if (r.resolutionCondition) {
      lines.push(`  levée si: ${r.resolutionCondition}`);
    }
    if (r.journalEntryRefs.length > 0) {
      lines.push(`  journal: ${r.journalEntryRefs.join(", ")}`);
    }
    if (r.isGateBlocker) {
      lines.push("  GATE: bloque FINALIZE tant qu'active.");
    }
  }
  return lines.join("\n");
}
