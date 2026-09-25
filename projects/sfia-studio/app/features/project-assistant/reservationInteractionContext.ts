/**
 * RESERVATION-CONTEXT-PILOT-CONFIRMATION-01
 * Bounded structured Reservation interaction context for one Product turn.
 *
 * Client-supplied ids are UNTRUSTED. Server revalidates project / cycle /
 * Reservation identity / active status before any cognitive binding.
 * Not Truth C, not HumanDecision, not Confirmation, not authority.
 *
 * RC-01 — absent context ≠ present-but-malformed:
 *   absent → generic conversation;
 *   malformed → RESERVATION_CONTEXT_INVALID (fail closed, no F2 fallback).
 */
import type { EpistemicItem } from "@/lib/oa/cycle/domain/types";
import {
  reservationBelongsToCycle,
} from "@/lib/oa/cycle/domain/reservationSemantics";

export type ReservationInteractionContextInput = {
  cycleInstanceId: string;
  epistemicItemId: string;
};

export type ValidatedReservationInteractionContext = {
  kind: "reservation_resolution";
  cycleInstanceId: string;
  epistemicItemId: string;
  ordinal: number | null;
  title: string;
};

export type ReservationInteractionValidationFailure = {
  ok: false;
  code:
    | "RESERVATION_CONTEXT_INVALID"
    | "RESERVATION_CONTEXT_CYCLE_MISMATCH"
    | "RESERVATION_CONTEXT_NOT_FOUND"
    | "RESERVATION_CONTEXT_NOT_ACTIVE"
    | "RESERVATION_CONTEXT_WRONG_TYPE";
  message: string;
};

export type ReservationInteractionValidationResult =
  | { ok: true; value: ValidatedReservationInteractionContext }
  | ReservationInteractionValidationFailure;

/**
 * Parse untrusted client payload.
 * - absent (undefined / null): no Reservation interaction requested
 * - present but malformed: explicit INVALID (never silent generic fallback)
 * - well-formed ids: ok → server revalidation
 */
export type ReservationInteractionContextParseResult =
  | { status: "absent" }
  | {
      status: "invalid";
      code: "RESERVATION_CONTEXT_INVALID";
      message: string;
    }
  | { status: "ok"; value: ReservationInteractionContextInput };

const INVALID_MESSAGE =
  "Contexte de réserve invalide. Rouvrez « Traiter avec Nora » depuis une réserve active du cycle courant.";

export function parseReservationInteractionContextInput(
  raw: unknown,
): ReservationInteractionContextParseResult {
  // CASE 1 — genuinely absent: generic conversation.
  if (raw === undefined || raw === null) {
    return { status: "absent" };
  }

  // CASE 2 — present but not a plain object (string / array / number / …).
  if (typeof raw !== "object" || Array.isArray(raw)) {
    return {
      status: "invalid",
      code: "RESERVATION_CONTEXT_INVALID",
      message: INVALID_MESSAGE,
    };
  }

  const o = raw as Record<string, unknown>;
  const hasCycleKey = Object.prototype.hasOwnProperty.call(o, "cycleInstanceId");
  const hasItemKey = Object.prototype.hasOwnProperty.call(o, "epistemicItemId");

  // Empty object or missing required keys → present-invalid.
  if (!hasCycleKey || !hasItemKey) {
    return {
      status: "invalid",
      code: "RESERVATION_CONTEXT_INVALID",
      message: INVALID_MESSAGE,
    };
  }

  const cycleRaw = o.cycleInstanceId;
  const itemRaw = o.epistemicItemId;
  if (typeof cycleRaw !== "string" || typeof itemRaw !== "string") {
    return {
      status: "invalid",
      code: "RESERVATION_CONTEXT_INVALID",
      message: INVALID_MESSAGE,
    };
  }

  const cycleInstanceId = cycleRaw.trim();
  const epistemicItemId = itemRaw.trim();
  if (!cycleInstanceId || !epistemicItemId) {
    return {
      status: "invalid",
      code: "RESERVATION_CONTEXT_INVALID",
      message: INVALID_MESSAGE,
    };
  }

  return {
    status: "ok",
    value: { cycleInstanceId, epistemicItemId },
  };
}

/**
 * Fail-closed server revalidation. Does not invent or retarget another Reservation.
 */
export function validateReservationInteractionContext(input: {
  claimed: ReservationInteractionContextInput;
  /** Active / applicable cycle for this Product turn (Truth C). */
  activeCycleInstanceId: string | null | undefined;
  items: readonly EpistemicItem[];
}): ReservationInteractionValidationResult {
  const cycleId = input.activeCycleInstanceId?.trim() || "";
  if (!cycleId) {
    return {
      ok: false,
      code: "RESERVATION_CONTEXT_CYCLE_MISMATCH",
      message:
        "Aucun cycle actif pour traiter cette réserve. Revenez au cycle courant, puis réessayez.",
    };
  }
  if (input.claimed.cycleInstanceId !== cycleId) {
    return {
      ok: false,
      code: "RESERVATION_CONTEXT_CYCLE_MISMATCH",
      message:
        "Le contexte de réserve ne correspond plus au cycle actif. Rouvrez « Traiter avec Nora » depuis la réserve du cycle courant.",
    };
  }
  const item = input.items.find(
    (i) => i.epistemicItemId === input.claimed.epistemicItemId,
  );
  if (!item) {
    return {
      ok: false,
      code: "RESERVATION_CONTEXT_NOT_FOUND",
      message:
        "Cette réserve n’existe plus. Actualisez le Journal, puis réessayez.",
    };
  }
  if (item.type !== "Reservation") {
    return {
      ok: false,
      code: "RESERVATION_CONTEXT_WRONG_TYPE",
      message: "L’élément ciblé n’est pas une réserve.",
    };
  }
  if (!reservationBelongsToCycle(item, cycleId)) {
    return {
      ok: false,
      code: "RESERVATION_CONTEXT_CYCLE_MISMATCH",
      message:
        "Cette réserve n’appartient pas au cycle actif. Rouvrez le traitement depuis le Journal du cycle courant.",
    };
  }
  if (item.status !== "active") {
    return {
      ok: false,
      code: "RESERVATION_CONTEXT_NOT_ACTIVE",
      message:
        "Cette réserve n’est plus active. Actualisez le Journal avant de poursuivre.",
    };
  }
  const title =
    item.reservation?.title?.trim() || item.statement?.trim() || "Réserve";
  return {
    ok: true,
    value: {
      kind: "reservation_resolution",
      cycleInstanceId: cycleId,
      epistemicItemId: item.epistemicItemId,
      ordinal: item.reservation?.ordinal ?? null,
      title,
    },
  };
}

/**
 * RC-02 — human-facing active-cycle label for Reservation proposal context.
 * Uses composed cycle label when present; does not invent a new lookup.
 */
export function formatReservationActiveCycleFacingLabel(
  cycleLabel: string | null | undefined,
): string {
  const t = typeof cycleLabel === "string" ? cycleLabel.trim() : "";
  if (!t) return "Cycle actif";
  if (/\bacti[fv]\b/i.test(t)) return t;
  return `${t} actif`;
}
