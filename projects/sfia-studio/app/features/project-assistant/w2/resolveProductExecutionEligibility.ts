/**
 * Re-export — canonical module lives in lib/oa/execution-contract (shared by
 * Authorize, UI, Select, Start without features→lib inversion).
 */
export {
  TRAJECTORY_NON_EXECUTE_STOPS,
  filterTrajectoryNonExecuteStopsFromEc,
  resolveProductExecutionEligibility,
  shouldApplyProductExecutionEligibility,
  PRODUCT_GOVERNED_CONSTRAINT,
  LEGACY_PRODUCT_COMPAT_ACTION,
  LEGACY_PRODUCT_COMPAT_TARGET,
  LEGACY_PRODUCT_COMPAT_SCOPE,
  LEGACY_PRODUCT_COMPAT_CAPABILITY,
  type ProductExecutionEligibility,
  type ProductExecutionEligibilityReasonCode,
} from "@/lib/oa/execution-contract/domain/resolveProductExecutionEligibility";
