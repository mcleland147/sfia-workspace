/**
 * Display boundary for cycle.objective — distinguish métier finalité from
 * operational OPEN instructions that were incorrectly persisted as objective.
 * Does not mutate storage; does not invent a métier finalité.
 */

const OPERATIONAL_OBJECTIVE = new RegExp(
  [
    "^\\s*OPEN_CYCLE\\b",
    "^\\s*Cycle\\s+[A-Z_]+\\s*$",
    "ouvrir\\s+le\\s+(premier\\s+)?cycle",
    "ouverture\\s+(effective\\s+)?(du\\s+)?cycle",
    "reprendre\\s+le\\s+cycle\\s+déjà\\s+actif",
    "sans\\s+doublon",
    "reste\\s+à\\s+confirmer\\s+par\\s+Studio",
  ].join("|"),
  "i",
);

export function isOperationalCycleObjective(raw: string | null | undefined): boolean {
  const t = (raw ?? "").trim();
  if (!t) return true;
  if (/^finalité métier à préciser\b/i.test(t)) return true;
  return OPERATIONAL_OBJECTIVE.test(t);
}

/** Objective safe to show as métier finalité; null ⇒ honest empty state. */
export function displayableCycleObjective(raw: string | null | undefined): string | null {
  const t = (raw ?? "").trim();
  if (!t || isOperationalCycleObjective(t)) return null;
  return t;
}

/**
 * Value to persist on OPEN/TRANSITION when the incoming objective is operational
 * or empty. Keeps a short non-instructional placeholder — never an OPEN script.
 */
export function persistableCycleObjective(
  raw: string | null | undefined,
  cycleType: string,
): string {
  const shown = displayableCycleObjective(raw);
  if (shown) return shown.slice(0, 2000);
  return `Finalité métier à préciser — ${cycleType}`.slice(0, 2000);
}

export const CYCLE_OBJECTIVE_PENDING_LABEL =
  "Finalité métier non encore formulée pour ce cycle.";
