/**
 * Shared M4 REAL-OFF test fixtures (contract inputs.baseHeadSha, wiring).
 */
export const M4_TEST_BASE_HEAD_SHA =
  "aaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaaa";

export const M4_EVIDENCE = "evd:morris-n3";

export function m4ContractInputs(
  baseHeadSha: string = M4_TEST_BASE_HEAD_SHA,
): { baseHeadSha: string } {
  return { baseHeadSha };
}
