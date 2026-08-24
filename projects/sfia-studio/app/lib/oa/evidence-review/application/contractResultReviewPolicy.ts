/**
 * W3-B bounded server-owned Contract Result review policy (ARCH-R06-C).
 * structural criticality MUST NOT auto-select Morris in contract-result mode.
 */
import type { ClaimEvaluationMethod } from "../domain/claimEvaluationTypes";
import {
  W3B_CONTRACT_RESULT_REVIEW_POLICY_REF,
  resolveContractResultConfirmationAuthority,
} from "../domain/contractResultTypes";

export { W3B_CONTRACT_RESULT_REVIEW_POLICY_REF };

export function contractResultRequiresHumanConfirmation(
  method: ClaimEvaluationMethod,
): boolean {
  return method === "assisted" || method === "human_review";
}

export function contractResultConfirmationAuthorityForMethod(
  method: ClaimEvaluationMethod,
) {
  return resolveContractResultConfirmationAuthority(method);
}

/** Contract-result mode bypasses generic structural→Morris inheritance. */
export function contractResultBypassesMorrisStructuralGate(): true {
  return true;
}
