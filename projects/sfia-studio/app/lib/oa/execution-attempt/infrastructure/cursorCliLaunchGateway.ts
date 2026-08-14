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
  NodeCursorProcessRunner,
  NODE_CURSOR_STDOUT_CAP_BYTES,
  NODE_CURSOR_STDERR_CAP_BYTES,
  type SpawnPrimitive,
  type NodeCursorProcessRunnerOptions,
} from "./nodeCursorProcessRunner";
