/**
 * CursorCliLaunchGateway — OA-owned REAL launch ACL (D-M4-01).
 * Re-exports StudioCursorRealLaunchGateway under the Delivery cycle name.
 * Fake runners are NOT re-exported — use __tests__/…/support doubles.
 */
export {
  StudioCursorRealLaunchGateway as CursorCliLaunchGateway,
  StudioCursorRealLaunchGateway,
  DisabledRealProcessRunner,
  resolveStudioCursorBinPath,
  resolveCursorBinPath,
  type StudioCursorRealLaunchGatewayOptions as CursorCliLaunchGatewayOptions,
  type StudioCursorRealLaunchGatewayOptions,
} from "./studioCursorRealLaunchGateway";
export {
  buildMutatingCursorConfinementEnv,
  isMutatingGcecCursorProfile,
  MUTATING_CURSOR_STRIPPED_ENV_KEYS,
  resolveMutatingConfinementEffectClass,
  MUTATING_CURSOR_REMOTE_GIT_PRESERVED_ENV_KEYS,
  MUTATING_CURSOR_REMOTE_GITHUB_PRESERVED_ENV_KEYS,
  type MutatingCursorConfinementEffectClass,
} from "./mutatingCursorConfinementEnv";
export {
  NodeCursorProcessRunner,
  NODE_CURSOR_STDOUT_CAP_BYTES,
  NODE_CURSOR_STDERR_CAP_BYTES,
  type SpawnPrimitive,
  type NodeCursorProcessRunnerOptions,
} from "./nodeCursorProcessRunner";
