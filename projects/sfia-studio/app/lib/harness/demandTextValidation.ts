/**
 * Client-side demandText guards for Increment C.
 * Authority for token/cost ceilings remains in the harness — these are UX gates only.
 */

export const DEMAND_TEXT_MIN_CHARS = 10;
/** Soft UX max; leaves headroom under harness 6000-token input ceiling. */
export const DEMAND_TEXT_MAX_CHARS = 12_000;

export type DemandValidationCode =
  | "OK"
  | "EMPTY"
  | "TOO_SHORT"
  | "TOO_LONG";

export interface DemandValidationResult {
  ok: boolean;
  code: DemandValidationCode;
  /** Trimmed text ready to send — only set when ok. */
  normalized: string;
  message: string;
  length: number;
}

export function validateDemandText(raw: string): DemandValidationResult {
  const normalized = raw.trim();
  const length = normalized.length;
  if (length === 0) {
    return {
      ok: false,
      code: "EMPTY",
      normalized: "",
      message: "Saisissez une demande avant de qualifier.",
      length: 0,
    };
  }
  if (length < DEMAND_TEXT_MIN_CHARS) {
    return {
      ok: false,
      code: "TOO_SHORT",
      normalized: "",
      message: `Demande trop courte (minimum ${DEMAND_TEXT_MIN_CHARS} caractères).`,
      length,
    };
  }
  if (length > DEMAND_TEXT_MAX_CHARS) {
    return {
      ok: false,
      code: "TOO_LONG",
      normalized: "",
      message: `Demande trop longue (${length} / ${DEMAND_TEXT_MAX_CHARS} caractères). Réduisez le texte — aucune troncature silencieuse.`,
      length,
    };
  }
  return {
    ok: true,
    code: "OK",
    normalized,
    message: "",
    length,
  };
}
