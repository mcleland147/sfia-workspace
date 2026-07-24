import type { CkcResolution } from "../domain/types";

export type CkcResolveInput = {
  cycleTypeId: string;
  resolvedAt: string;
  correlationId?: string;
};

/**
 * CKC resolver port — guidance only.
 * Absent CKC must not invent detailed content; never grants executionAuthority.
 */
export interface CkcResolverPort {
  resolve(input: CkcResolveInput): Promise<CkcResolution>;
}
