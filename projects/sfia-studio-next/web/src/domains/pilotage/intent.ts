/**
 * D5/D6 intent types and helpers.
 * SEM-02: lexical métier qualification removed — Nora durable envelope is canonical.
 */
import type { CycleType } from "@/domains/pilotage/cki-resolve";
import type { PilotageOperation } from "@/domains/pilotage/types";

export type IntentQualification =
  | {
      clarity: "CLEAR";
      operation: PilotageOperation;
      cycleType?: CycleType;
      toCycleType?: CycleType;
      methodRef?: string;
      methodVersion?: string;
      objective?: string;
      /** Documentary decision text (RECORD / REVISE). */
      statement?: string;
      /** Bounded object key for D6 confrontation — not authority by itself. */
      objectRef?: string;
      /** Resolved only when the caller already knows the D6 target. */
      decisionId?: string;
      /** Hint for conversational LIFT — resolved to restrictionId by authority bridge. */
      restrictionKindHint?: string;
      /** Optional targetRef hint (cycle id / specialty) when the pilot names the instance. */
      restrictionTargetRefHint?: string;
      /** Correlation to durable Nora intent id (SEM corrective). */
      semanticIntentId?: string;
      semanticSchemaVersion?: string;
    }
  | { clarity: "AMBIGUOUS"; reason: string }
  | { clarity: "NONE"; reason: string };

/**
 * Lot D2 — retired as semantic objectRef authority.
 * objectRef must come from durable Nora qualification or deterministic owner resolution.
 * Kept as identity-safe passthrough of an already-qualified statement slice only.
 */
export function deriveDecisionObjectRef(statement: string): string {
  const text = statement.trim().replace(/\s+/g, " ");
  if (!text) return "";
  // Technical truncation only — no linguistic target selection.
  return text.slice(0, 80);
}

/**
 * SEM-02 — retired as production métier router.
 * D5/D6 operations come from Nora durable qualification (typed pilotageOperation).
 */
export function qualifyPilotageIntent(_utterance: string): IntentQualification {
  return {
    clarity: "NONE",
    reason: "SEMANTIC_ROUTER_REQUIRED — qualifyPilotageIntent lexical body removed (SEM-02)",
  };
}
