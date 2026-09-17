/**
 * Shared DecisionBasis / prepare-contract docs_write coherence for M3 paths.
 * Server-side only — never driven by client REAL / profile / agent hints.
 */

import {
  M4_BOUNDED_DOCS_WRITE_ACTION,
  M4_BOUNDED_DOCS_WRITE_CAPABILITY,
} from "@/lib/oa/execution-attempt";

export type DocsWriteExecutionBasisLike = {
  intentKind?: string | null;
  requestedOperation?: string | null;
} | null | undefined;

export type DocsWriteIntentQualification =
  | {
      ok: true;
      preferDocsWrite: true;
      basisDocsWriteIntent: true;
      actionIsDocsWrite: true;
      capabilityIsDocsWrite: true;
    }
  | {
      ok: true;
      preferDocsWrite: false;
      basisDocsWriteIntent: boolean;
      actionIsDocsWrite: boolean;
      capabilityIsDocsWrite: boolean;
    }
  | { ok: false; code: string; message: string };

/**
 * Qualify docs_write intent coherently across DecisionBasis + action + capability.
 * Mirrors prepareAndResolveM3ProductPath B2 rules (no authority widening).
 */
export function qualifyDocsWriteM3Intent(input: {
  executionBasis: DocsWriteExecutionBasisLike;
  action: string;
  requiredCapabilities: readonly string[];
  /**
   * Server/test only. Never from the client.
   * true = force docs_write profile when prepare action/cap coherent.
   * false = never auto-select docs_write.
   * undefined = auto from DecisionBasis coherence.
   */
  preferBoundedDocsWriteProfile?: boolean;
}): DocsWriteIntentQualification {
  const executionBasis = input.executionBasis;
  const basisDocsWriteIntent =
    executionBasis?.intentKind === "docs_write" ||
    executionBasis?.requestedOperation?.trim() === M4_BOUNDED_DOCS_WRITE_ACTION;
  const basisRequestedOp = executionBasis?.requestedOperation?.trim() ?? "";
  const basisOpCompatible =
    basisRequestedOp === "" ||
    basisRequestedOp === M4_BOUNDED_DOCS_WRITE_ACTION;
  const actionIsDocsWrite = input.action === M4_BOUNDED_DOCS_WRITE_ACTION;
  const capabilityIsDocsWrite = input.requiredCapabilities.includes(
    M4_BOUNDED_DOCS_WRITE_CAPABILITY,
  );

  if (input.preferBoundedDocsWriteProfile === true) {
    if (!actionIsDocsWrite || !capabilityIsDocsWrite) {
      return {
        ok: false,
        code: "DOCS_WRITE_PROFILE_PREPARE_INCOHERENT",
        message:
          "preferBoundedDocsWriteProfile refusé — PREPARE action/capability docs_write incohérents.",
      };
    }
    return {
      ok: true,
      preferDocsWrite: true,
      basisDocsWriteIntent: true,
      actionIsDocsWrite: true,
      capabilityIsDocsWrite: true,
    };
  }

  if (input.preferBoundedDocsWriteProfile !== false) {
    const partialDocsWriteMarker =
      basisDocsWriteIntent || actionIsDocsWrite || capabilityIsDocsWrite;
    const fullCanonicalDocsWrite =
      basisDocsWriteIntent &&
      basisOpCompatible &&
      actionIsDocsWrite &&
      capabilityIsDocsWrite;
    if (partialDocsWriteMarker && !fullCanonicalDocsWrite) {
      return {
        ok: false,
        code: "DOCS_WRITE_INTENT_INCOHERENT",
        message:
          "Intention docs_write incohérente (DecisionBasis / action / capability) — fail-closed, aucune promotion automatique.",
      };
    }
    if (fullCanonicalDocsWrite) {
      return {
        ok: true,
        preferDocsWrite: true,
        basisDocsWriteIntent: true,
        actionIsDocsWrite: true,
        capabilityIsDocsWrite: true,
      };
    }
  }

  return {
    ok: true,
    preferDocsWrite: false,
    basisDocsWriteIntent: Boolean(basisDocsWriteIntent),
    actionIsDocsWrite,
    capabilityIsDocsWrite,
  };
}
