import type { ExecutionContractCandidate, GPTCallResult, GPTQualificationRequest } from "../types/gptContracts.js";

export interface GPTQualificationPort {
  qualify(request: GPTQualificationRequest): Promise<GPTCallResult<ExecutionContractCandidate>>;
}
