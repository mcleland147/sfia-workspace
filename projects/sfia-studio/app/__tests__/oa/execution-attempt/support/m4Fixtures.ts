/**
 * Shared M4 REAL-OFF test fixtures.
 *
 * TEST CONTEXT LEGITIMATE (not Product-eligibility masking):
 * - `baseHeadSha` is intrinsically required by StartExecution REAL launch
 *   (`extractContractBaseHeadSha`) for M4/GCEC/generalist REAL paths.
 * - repository identity fields supply launch-request identity when the test
 *   stack has no Project.repositoryBinding; they are NOT required to satisfy
 *   Product `resolveProductExecutionEligibility` after Product/non-Product
 *   isolation (non-Product ECs skip that resolver).
 */
export const M4_TEST_BASE_HEAD_SHA =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

export const M4_EVIDENCE = "evd:morris-n3";

export function m4ContractInputs(
  baseHeadSha: string = M4_TEST_BASE_HEAD_SHA,
): {
  baseHeadSha: string;
  repositoryBindingIdentity: string;
  repositoryIdentity: string;
  repositoryRef: string;
} {
  return {
    baseHeadSha,
    repositoryBindingIdentity: "acme/m4-fixture",
    repositoryIdentity: "acme/m4-fixture",
    repositoryRef: "acme/m4-fixture",
  };
}
