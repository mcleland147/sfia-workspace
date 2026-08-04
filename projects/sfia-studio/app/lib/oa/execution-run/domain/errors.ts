import type { FailureCode, FailureFamily, NormalizedFailure } from "./types";

export function normalizedFailure(input: {
  family: FailureFamily;
  code: FailureCode;
  userMessage: string;
  retryable: boolean;
  correlationId: string;
}): NormalizedFailure {
  return {
    family: input.family,
    code: input.code,
    userMessage: input.userMessage,
    technicalDetailsRedacted: true,
    retryable: input.retryable,
    correlationId: input.correlationId,
  };
}
