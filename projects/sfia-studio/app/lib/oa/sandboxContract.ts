/**
 * Stable Product-facing re-export of the OA sandbox / Studio write-protection
 * policy primitives. Single SoT remains
 * `lib/oa/execution-run/domain/sandboxContract.ts`.
 *
 * Project-assistant imports this path (not `@/lib/oa/execution-run`) so the
 * F1/F2/F3 import-boundary gate stays closed while CP4-02 Option C still
 * composes the same sandbox policy layer.
 */
export {
  classifyStudioProductProtectedPath,
  evaluateSandboxMutationGuards,
  evaluateSandboxPath,
  evaluateStudioProductWritePath,
  normalizeCanonicalPath,
  pathMatchesAllowlistPrefix,
  SANDBOX_DEFAULT_PROTECTED_PATHS,
  STUDIO_GOVERNANCE_PROTECTED_PATHS,
  STUDIO_PRODUCT_PROTECTED_PATHS,
} from "./execution-run/domain/sandboxContract";
export type {
  CanonicalPathResult,
  SandboxPathDecision,
} from "./execution-run/domain/sandboxContract";
