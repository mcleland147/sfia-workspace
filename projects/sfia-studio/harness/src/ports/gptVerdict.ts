import type { GPTCallResult, GPTVerdictRequest, VerdictCandidate } from "../types/gptContracts.js";

export interface GPTVerdictPort {
  verdict(request: GPTVerdictRequest): Promise<GPTCallResult<VerdictCandidate>>;
}
