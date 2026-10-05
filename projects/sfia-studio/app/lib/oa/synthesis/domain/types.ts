export type SynthesisStatus = "current" | "superseded" | "stale_source";
export type SynthesisVerdictLabel =
  | "atteint"
  | "non_prouve"
  | "echec"
  | "indetermine";

export type SynthesisSourceBindings = {
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly executionContractId: string | null;
  readonly attemptId: string | null;
  readonly evidenceIds: readonly string[];
  readonly reviewBundleId: string | null;
  readonly claimEvaluationId: string;
  readonly recommendationRef: string | null;
};

export type SynthesisSections = {
  readonly summary: string;
  readonly planned: string;
  readonly done: string;
  readonly evaluation: string;
  readonly gaps: string;
  readonly impact: string;
  readonly verdict: string;
  readonly recommendation: string;
  readonly verified: string;
};

export type ProductSynthesisProjection = {
  readonly synthesisId: string;
  readonly projectId: string;
  readonly cycleInstanceId: string | null;
  readonly title: string;
  readonly subject: string;
  readonly status: SynthesisStatus;
  readonly verdictLabel: SynthesisVerdictLabel;
  readonly canonicalVerdict: "PASS" | "NOT_PROVEN" | "FAIL";
  readonly sections: SynthesisSections;
  readonly sourceBindings: SynthesisSourceBindings;
  readonly sourceFingerprint: string;
  readonly generatedAt: string;
  readonly generatedBy: "deterministic_product_synthesis_builder_s04";
  readonly authority: "none"; // never Truth C
  readonly supersedes: string | null;
  readonly version: number;
};

export type SynthesisDetailCode =
  | "SYNTHESIS_INVALID"
  | "SYNTHESIS_NOT_FOUND"
  | "SYNTHESIS_ALREADY_EXISTS"
  | "SYNTHESIS_LINEAGE_REQUIRES_CLAIM_EVALUATION"
  | "SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_SUBJECT"
  | "SYNTHESIS_LINEAGE_REQUIRES_CONTRACT_RESULT_BINDINGS"
  | "SYNTHESIS_LINEAGE_BINDINGS_MISMATCH"
  | "SYNTHESIS_LINEAGE_EVIDENCE_NOT_FOUND"
  | "SYNTHESIS_AUTHORITY_FORBIDDEN"
  | "SYNTHESIS_PERSISTENCE_FAILED";
