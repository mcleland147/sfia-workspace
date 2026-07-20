"use server";

import { invokeHarnessStudioRun } from "./invokeHarness";
import type { StudioHarnessRequest, StudioHarnessView } from "./types";

/** Server-only forward to harness CLI. No authority in this layer. */
export async function runStudioHarness(
  request: StudioHarnessRequest,
): Promise<StudioHarnessView> {
  return invokeHarnessStudioRun(request);
}
