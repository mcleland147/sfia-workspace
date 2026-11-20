import type { InitialQualificationProjection } from "@/domains/pilotage/initial-qualification-types";

const BLOCKING = new Set(["PENDING", "RUNNING", "UNKNOWN"]);

export function isInitialQualificationComposerLocked(
  q: InitialQualificationProjection | null | undefined,
): boolean {
  // E07-FIX-05 — missing op after create is not "free Travail"; caller may pass a
  // synthetic PENDING gate via ensurePendingGate projection.
  if (!q) return false;
  return BLOCKING.has(q.status);
}

export function initialQualificationComposerReason(
  q: InitialQualificationProjection | null | undefined,
): string {
  if (!q || !isInitialQualificationComposerLocked(q)) return "";
  if (q.status === "UNKNOWN") {
    return "La qualification initiale de trajectoire est en cours de réconciliation — le compositeur est temporairement indisponible.";
  }
  if (q.phase === "PUBLISHING") {
    return "Nora finalise la proposition de trajectoire (étape 3/3) — le compositeur est verrouillé jusqu'à la restitution.";
  }
  if (q.phase === "ANALYZING") {
    return "Nora analyse votre intention pour proposer une trajectoire (étape 2/3) — le compositeur est verrouillé.";
  }
  return "Qualification initiale de trajectoire en cours (étape 1/3) — le compositeur est verrouillé jusqu'à la proposition ou une clarification.";
}

export function blocksPilotTurnAdmission(q: InitialQualificationProjection | null | undefined): boolean {
  if (!q) return false;
  return BLOCKING.has(q.status);
}