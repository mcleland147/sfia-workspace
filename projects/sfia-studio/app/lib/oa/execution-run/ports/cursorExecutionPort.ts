import type { CursorFixtureRequest, ProviderInvocationResult } from "./providerResult";
import type { ProviderCapabilityDescriptor } from "../domain/types";

/**
 * D2-D Cursor port — fixture/fake only in D2-D2.
 * Live Cursor requires G-D2D-CURSOR-01 (NOT consumed).
 */
export interface CursorExecutionPort {
  readonly lane: "cursor";
  readonly live: false;
  describeCapability(): ProviderCapabilityDescriptor;
  executeFixture(request: CursorFixtureRequest): Promise<ProviderInvocationResult>;
}
