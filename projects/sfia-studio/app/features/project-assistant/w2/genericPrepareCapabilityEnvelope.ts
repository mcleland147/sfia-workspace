/**
 * Generic PREPARE capability envelope — shared by offer reconstruction,
 * materiality, and ExecutionContract PREPARE.
 *
 * Only the studio cursor generalist capability is inside the envelope.
 * Any other proposed capability fail-closes. A retired specialized
 * document-write token is outside the envelope (not resolved onto Product).
 */

import { PRODUCT_CANONICAL_EXECUTION_CAPABILITY } from "./w3aProductExecutionSemantics";

/**
 * Exact Product identities only — no substring / prefix / suffix matching.
 * Unknown strings that merely contain "generalist" are outside the envelope.
 */
export const GENERIC_PREPARE_ENVELOPE_CAPABILITY_IDENTITIES = Object.freeze([
  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
] as const);

export function isCapabilityWithinGenericPrepareEnvelope(cap: string): boolean {
  const c = cap.trim();
  if (!c) return true;
  return (GENERIC_PREPARE_ENVELOPE_CAPABILITY_IDENTITIES as readonly string[]).includes(
    c,
  );
}

export type GenericPrepareCapabilityResolution =
  | {
      readonly ok: true;
      readonly contractCapabilities: readonly [
        typeof PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
      ];
      readonly proposedCapabilities: readonly string[];
      readonly resolution:
        | "no_proposed_capabilities_default_generalist"
        | "already_generalist_envelope";
    }
  | {
      readonly ok: false;
      readonly code: "CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE";
      readonly elevated: readonly string[];
      readonly proposedCapabilities: readonly string[];
    };

export function resolveGenericPrepareCapabilityEnvelope(
  proposed: readonly string[] | null | undefined,
): GenericPrepareCapabilityResolution {
  const cleaned = (proposed ?? [])
    .map((c) => c.trim())
    .filter((c) => c.length > 0);
  if (cleaned.length === 0) {
    return {
      ok: true,
      contractCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
      proposedCapabilities: [],
      resolution: "no_proposed_capabilities_default_generalist",
    };
  }
  const elevated = cleaned.filter(
    (c) => !isCapabilityWithinGenericPrepareEnvelope(c),
  );
  if (elevated.length > 0) {
    return {
      ok: false,
      code: "CAPABILITY_OUTSIDE_GENERALIST_ENVELOPE",
      elevated,
      proposedCapabilities: cleaned,
    };
  }
  return {
    ok: true,
    contractCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
    proposedCapabilities: cleaned,
    resolution: "already_generalist_envelope",
  };
}
