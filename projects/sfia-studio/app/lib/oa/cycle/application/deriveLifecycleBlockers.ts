/**
 * CORR-PROOF-05 — derive lifecycle blockers from durable epistemic reservations.
 * No second blockers store; unreadable sources must fail closed at transitions.
 */
import type { EpistemicItem } from "../domain/types";

export type LifecycleBlockerSnapshot =
  | { ok: true; statements: string[]; source: "epistemic_reservation" }
  | { ok: false; reason: "epistemic_unreadable" | "epistemic_reader_unavailable" };

export function deriveLifecycleBlockersFromEpistemicItems(
  items: readonly EpistemicItem[],
): Extract<LifecycleBlockerSnapshot, { ok: true }> {
  const statements = items
    .filter(
      (i) =>
        i.type === "Reservation" &&
        i.status === "active" &&
        i.blocking === true,
    )
    .map((i) => i.statement)
    .sort();
  return { ok: true, statements, source: "epistemic_reservation" };
}

/** Helper for transitions when the epistemic reader is missing or throws. */
export function lifecycleBlockersFromReaderFailure(
  reason: Extract<LifecycleBlockerSnapshot, { ok: false }>["reason"],
): Extract<LifecycleBlockerSnapshot, { ok: false }> {
  return { ok: false, reason };
}
