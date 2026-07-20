import { vsFixture } from "@/fixtures/vertical-slice";
import type { StudioHarnessAction, StudioHarnessRequest } from "./types";

/**
 * Pure mapping Studio fixture → adapter payload.
 * No GO validation, no policy, no journal writes.
 */
export function buildStudioHarnessRequest(
  action: StudioHarnessAction,
  overrides: Partial<StudioHarnessRequest> = {},
): StudioHarnessRequest {
  return {
    requestId: vsFixture.requestId,
    correlationId: `${vsFixture.correlationId}-${action}`,
    contractId: vsFixture.contractId,
    contractHash: vsFixture.contractHash,
    branch: "delivery/sfia-studio-poc-increment-b",
    head: "ee9487797ce44c8d864846030c54fac43ee33611",
    allowlist: ["projects/sfia-studio", "projects/sfia-studio/harness"],
    morrisDecision: action === "stop" ? "STOP" : "GO",
    decidedAt: new Date().toISOString(),
    action,
    ...overrides,
  };
}

/** Map UI gate choice to harness action (still no authority). */
export function actionForGateConfirm(input: {
  gateAction: "GO" | "NO-GO" | "CORRIGER" | "ABANDONNER";
  stateId: string;
}): StudioHarnessAction | "local-only" {
  if (input.gateAction === "ABANDONNER" || input.gateAction === "CORRIGER") {
    return "local-only";
  }
  if (input.gateAction === "NO-GO") {
    return "run-fixture"; // morrisDecision overridden by caller
  }
  if (input.stateId === "VS-UX-VAR-GO-INVALID") {
    return "probe-invalid-head";
  }
  return "run-fixture";
}
