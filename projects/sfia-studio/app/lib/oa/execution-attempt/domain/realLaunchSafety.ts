/**
 * M4 REAL-OFF — technical launch safety + Gate D GD-1 types.
 *
 * TEMPORARY WITH EXIT technical journal (D-M4-02).
 * ≠ Product Store · ≠ Attempt aggregate · ≠ Confirmation · ≠ PREPARE projection.
 */

export const SFIA_STUDIO_CURSOR_REAL_FLAG = "SFIA_STUDIO_CURSOR_REAL" as const;

/** Closed REAL gateway adapter id — not part of InjectableExecutionAdapter. */
export const M4_REAL_GATEWAY_ADAPTER_ID = "adp:m4-cursor-cli-real" as const;

export const M4_BOUNDED_RO_CURSOR_AGENT_ID =
  "agt:m4.cursor.bounded_readonly" as const;

export type RealLaunchReconcileDisposition =
  | "CLEAR"
  | "UNKNOWN"
  | "REVIEW_REQUIRED";

/** Journal record kinds (D-M4-02 / D-M4-04). */
export type LaunchSafetyRecordKind =
  | "GATE_D_GRANTED"
  | "GATE_D_CONSUMED"
  | "ATTEMPT_CREATED"
  | "ATTEMPT_LAUNCHED";

/** Frontier kinds used for relaunch ambiguity (CREATED / LAUNCHED). */
export type RealLaunchFrontierKind = "CREATED" | "LAUNCHED";

export type GateDGrantStatus =
  | "granted"
  | "consumed"
  | "expired"
  | "invalidated";

export type GateDGrant = {
  readonly grantId: string;
  readonly executionContractId: string;
  readonly executionContractVersion: number;
  readonly semanticFingerprint: string;
  readonly attemptId: string;
  readonly selectedAgentRef: string;
  readonly actorId: string;
  readonly issuedAt: string;
  readonly expiresAt: string;
  readonly status: GateDGrantStatus;
  readonly consumedAt?: string;
  readonly correlationId?: string;
};

export type RealLaunchFrontierRecord = {
  readonly recordId: string;
  readonly kind: RealLaunchFrontierKind;
  readonly occurredAt: string;
  readonly executionContractId: string;
  readonly executionContractVersion: number;
  readonly semanticFingerprint: string;
  readonly attemptId: string;
  readonly selectedAgentRef: string;
  readonly actorId: string;
  readonly grantId: string;
  readonly correlationId: string;
  readonly processRef?: string;
  readonly payloadJson: string;
};

export type ContractSafetyIdentity = {
  readonly executionContractId: string;
  readonly executionContractVersion: number;
  readonly semanticFingerprint: string;
};

export function isStudioCursorRealEnabled(
  env: NodeJS.ProcessEnv = process.env,
): boolean {
  return env[SFIA_STUDIO_CURSOR_REAL_FLAG] === "1";
}

export function assertStudioCursorRealOffForTests(
  env: NodeJS.ProcessEnv = process.env,
): void {
  if (env.OPS1_CURSOR_REAL === "1") {
    throw new Error("M4_REAL_OFF_TESTS_REQUIRE_OPS1_CURSOR_REAL_OFF");
  }
  if (isStudioCursorRealEnabled(env)) {
    throw new Error("M4_REAL_OFF_TESTS_REQUIRE_SFIA_STUDIO_CURSOR_REAL_OFF");
  }
}

export function isRealCursorAgentMode(input: {
  executionMode: string;
  adapterRef: string;
}): boolean {
  return (
    input.executionMode === "cursor_cli_real" ||
    input.adapterRef === M4_REAL_GATEWAY_ADAPTER_ID
  );
}
