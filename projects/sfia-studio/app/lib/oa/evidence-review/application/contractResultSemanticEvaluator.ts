/**
 * W3-B ARCH-R02 — back-compat barrel for Contract Result semantic helpers.
 * Implementation lives in tempArtifact / docsWrite / registry modules.
 */
export {
  W3B_TEMP_ARTIFACT_RULE_REF,
  W3B_TEMP_ARTIFACT_OPERATION_KEY,
  W3B_TEMP_ARTIFACT_CAPABILITY,
  W3B_TEMP_ARTIFACT_EO_TEMPLATE,
  W3B_TEMP_ARTIFACT_ER_KEY,
  tempArtifactExecutionFactsHold,
  isW3bContractResultEvidenceUsable,
  evidenceMatchesFrozenSnapshot,
  assessTempArtifactExpectedOutput,
  assessTempArtifactEvidenceRequirement,
} from "./tempArtifactContractResultSemantic";

export {
  resolveApplicableContractResultRule,
  resolveApplicableContractResultSemantics,
  CONTRACT_RESULT_SEMANTICS,
  type ApplicableContractResultRule,
  type ContractResultSemantic,
  type ContractResultSemanticApplicability,
  type ContractResultEvidenceSelection,
  type ResolveApplicableContractResultSemanticsResult,
} from "./contractResultSemantics";
