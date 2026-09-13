/**
 * D-GF-START-01 — pure CKC resolution ref projection (HARVEST from F2 qualify).
 * Kept in lifecycleRecommendation to avoid importing F2 orchestrate / ProposalStore.
 */

export type CkcResolutionRefProofFields = {
  readonly catalogHash: string;
  readonly correlationId: string;
};

/** Deterministic durable ref from a successful QualifyCycleWithCkc proof. */
export function projectCkcResolutionRef(
  proof: CkcResolutionRefProofFields,
): string {
  const digest = proof.catalogHash.replace(/^sha256:/i, "").slice(0, 12);
  const corr = proof.correlationId.replace(/[^a-zA-Z0-9]/g, "").slice(-16);
  return `ckc:m2-${digest || "nodigest"}-${corr || "nocorr"}`;
}
