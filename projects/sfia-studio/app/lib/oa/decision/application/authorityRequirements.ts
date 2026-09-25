/**
 * Shared authority → level/gate mapping for Record / Supersede HumanDecision.
 * Option A: pilot ≠ morris. Neither inferred from actor identity.
 */
import type {
  AuthorityLevel,
  DecisionAuthority,
} from "../domain/types";

export function requiredLevelForAuthority(
  authority: DecisionAuthority,
): AuthorityLevel {
  if (authority === "pilot" || authority === "morris") return "N3";
  if (authority === "delegated") return "N2";
  return "N1";
}

export function authorityGateFlags(authority: DecisionAuthority): {
  requirePilotGate: boolean;
  requireMorrisGate: boolean;
} {
  return {
    requirePilotGate: authority === "pilot",
    requireMorrisGate: authority === "morris",
  };
}

/**
 * True for runtime Project structuring HumanDecisions:
 * - "pilot" (Option A)
 * - "morris" (historical conflated structuring HDs — readable, may still promote)
 * Does NOT mean the actor holds a Morris construction gate.
 */
export function isRuntimeStructuringAuthority(
  authority: DecisionAuthority,
): boolean {
  return authority === "pilot" || authority === "morris";
}
