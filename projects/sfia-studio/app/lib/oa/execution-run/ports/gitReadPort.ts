import type { GitReadRequest, ProviderInvocationResult } from "./providerResult";
import type { ProviderCapabilityDescriptor } from "../domain/types";

/** D2-D GIT-C port — strict read-only; no mutation methods. */
export interface GitReadPort {
  readonly lane: "git";
  readonly transport: "fake" | "local-git" | "gh-cli" | "rest" | "undisclosed";
  describeCapability(): ProviderCapabilityDescriptor;
  read(request: GitReadRequest): Promise<ProviderInvocationResult>;
}
