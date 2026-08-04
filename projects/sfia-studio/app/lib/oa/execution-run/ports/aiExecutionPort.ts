import type { AiCompletionRequest, ProviderInvocationResult } from "./providerResult";
import type { ProviderCapabilityDescriptor } from "../domain/types";

/** D2-D AI lane port — provider-independent. */
export interface AiExecutionPort {
  readonly lane: "ai";
  describeCapability(): ProviderCapabilityDescriptor;
  complete(request: AiCompletionRequest): Promise<ProviderInvocationResult>;
}
