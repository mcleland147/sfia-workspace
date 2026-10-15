/**
 * Generic PREPARE capability envelope — shared by offer reconstruction,
 * materiality, and ExecutionContract PREPARE.
 *
 * Documentary effect-class `cap:cursor.docs_write` may be proposed by Nora.
 * Product Generic PREPARE resolves it onto studio.cursor.generalist — never
 * silently dropped, never treated as elevated authority by itself.
 */

import { PRODUCT_CANONICAL_EXECUTION_CAPABILITY } from "./w3aProductExecutionSemantics";

export const GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY =
  "cap:cursor.docs_write" as const;

/**
 * Exact Product identities only — no substring / prefix / suffix matching.
 * Unknown strings that merely contain "generalist" are outside the envelope.
 */
export const GENERIC_PREPARE_ENVELOPE_CAPABILITY_IDENTITIES = Object.freeze([
  PRODUCT_CANONICAL_EXECUTION_CAPABILITY,
  GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
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
        | "docs_write_effect_resolved_onto_generalist_product_surface"
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
  const hasDocsWrite = cleaned.includes(
    GENERIC_PREPARE_DOCS_WRITE_EFFECT_CAPABILITY,
  );
  return {
    ok: true,
    contractCapabilities: [PRODUCT_CANONICAL_EXECUTION_CAPABILITY],
    proposedCapabilities: cleaned,
    resolution: hasDocsWrite
      ? "docs_write_effect_resolved_onto_generalist_product_surface"
      : "already_generalist_envelope",
  };
}
