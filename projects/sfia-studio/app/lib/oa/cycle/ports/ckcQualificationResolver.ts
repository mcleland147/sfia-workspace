import type {
  CkcQualificationResolution,
  ValidatedCycleTypeProjection,
} from "../domain/ckcQualificationContracts";
import type { CkcConsumptionProof } from "../domain/ckcConsumptionProof";
import type { CkcQualificationError } from "../domain/ckcQualificationErrors";

export type CkcQualificationResolveInput = {
  readonly projection: ValidatedCycleTypeProjection;
  readonly resolvedAt: string;
};

export type CkcQualificationResolutionOutcome =
  | {
      readonly ok: true;
      readonly resolution: CkcQualificationResolution;
      readonly proof: CkcConsumptionProof;
    }
  | {
      readonly ok: false;
      readonly resolution: CkcQualificationResolution;
      readonly error: CkcQualificationError;
    };

/** Synchronous D2-B boundary: manifest-backed, deterministic and I/O-free. */
export interface CkcQualificationResolverPort {
  resolve(
    input: CkcQualificationResolveInput,
  ): CkcQualificationResolutionOutcome;
}
