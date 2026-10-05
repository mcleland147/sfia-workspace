import type { SynthesisDetailCode } from "./types";

const SAFE_MESSAGES: Record<SynthesisDetailCode, string> = {
  SYNTHESIS_INVALID: "Product synthesis projection is invalid.",
  SYNTHESIS_NOT_FOUND: "Product synthesis projection was not found.",
  SYNTHESIS_ALREADY_EXISTS: "Product synthesis projection already exists.",
  SYNTHESIS_LINEAGE_REQUIRES_CLAIM_EVALUATION:
    "Product synthesis lineage requires a ClaimEvaluation.",
  SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_SUBJECT:
    "Product synthesis lineage requires a Contract Result ClaimEvaluation.",
  SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_BINDINGS:
    "Product synthesis lineage requires Contract Result bindings.",
  SYNTHESIS_LINEAGE_BINDINGS_MISMATCH:
    "Product synthesis lineage bindings do not match current Product facts.",
  SYNTHESIS_LINEAGE_EVIDENCE_NOT_FOUND:
    "Product synthesis lineage requires every bound Evidence row to exist.",
  SYNTHESIS_AUTHORITY_FORBIDDEN:
    "Product synthesis authority cannot be mutated or elevated.",
  SYNTHESIS_PERSISTENCE_FAILED: "Product synthesis persistence failed.",
};

export class SynthesisDomainError extends Error {
  readonly detailCode: SynthesisDetailCode;

  constructor(detailCode: SynthesisDetailCode, message?: string) {
    super(message ?? SAFE_MESSAGES[detailCode]);
    this.name = "SynthesisDomainError";
    this.detailCode = detailCode;
  }
}

export function isSynthesisDomainError(
  err: unknown,
): err is SynthesisDomainError {
  return err instanceof SynthesisDomainError;
}
