/**
 * Playwright helper — arms W3-B TEST-ONLY external boundary before generic Exécuter.
 */
import type { APIRequestContext } from "@playwright/test";

const CONTROL_PATH = "/api/e2e/w3b-boundary";

export async function armW3bAdapterFail(
  request: APIRequestContext,
  reason = "e2e_adapter_fail",
): Promise<void> {
  const res = await request.post(CONTROL_PATH, {
    data: { action: "arm", kind: "adapter_fail", reason },
  });
  if (!res.ok()) {
    throw new Error(`w3b arm adapter_fail failed: ${res.status()}`);
  }
}

export async function armW3bGovernedStop(
  request: APIRequestContext,
  stopCondition = "EXECUTOR_INSUFFICIENT",
): Promise<void> {
  const res = await request.post(CONTROL_PATH, {
    data: { action: "arm", kind: "governed_stop", stopCondition },
  });
  if (!res.ok()) {
    throw new Error(`w3b arm governed_stop failed: ${res.status()}`);
  }
}

export async function clearW3bBoundary(
  request: APIRequestContext,
): Promise<void> {
  await request.post(CONTROL_PATH, { data: { action: "clear" } });
}
