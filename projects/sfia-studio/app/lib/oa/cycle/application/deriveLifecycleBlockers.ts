/**
 * CORR-PROOF-05 / CYCLE-RESERVATION-PILOTING-01 —
 * derive lifecycle blockers from durable epistemic reservations.
 * No second blockers store; unreadable sources must fail closed at transitions.
 *
 * Gate rule (FINALIZE):
 * - active Reservation + reservation.finalizationRelevance = must_resolve
 * - OR legacy active Reservation without metadata + blocking=true (fail-closed)
 * Impact alone never blocks. may_affect / none never block.
 */
import type { EpistemicItem } from "../domain/types";
import { isFinalizationGateBlockingReservation } from "../domain/reservationSemantics";

export type LifecycleBlockerSnapshot =
  | { ok: true; statements: string[]; source: "epistemic_reservation" }
  | { ok: false; reason: "epistemic_unreadable" | "epistemic_reader_unavailable" };

export function deriveLifecycleBlockersFromEpistemicItems(
  items: readonly EpistemicItem[],
): Extract<LifecycleBlockerSnapshot, { ok: true }> {
  const statements = items
    .filter(isFinalizationGateBlockingReservation)
    .map((i) => {
      const title = i.reservation?.title?.trim();
      return title && title.length > 0 ? title : i.statement;
    })
    .sort();
  return { ok: true, statements, source: "epistemic_reservation" };
}

/** Helper for transitions when the epistemic reader is missing or throws. */
export function lifecycleBlockersFromReaderFailure(
  reason: Extract<LifecycleBlockerSnapshot, { ok: false }>["reason"],
): Extract<LifecycleBlockerSnapshot, { ok: false }> {
  return { ok: false, reason };
}

/** Gate-blocking Reservation items (full objects) for UI / Traiter avec Nora. */
export function listFinalizationBlockingReservations(
  items: readonly EpistemicItem[],
): EpistemicItem[] {
  return items.filter(isFinalizationGateBlockingReservation);
}
