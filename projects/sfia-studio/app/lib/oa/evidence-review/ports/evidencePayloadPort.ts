import type { Digest } from "@/lib/oa/doctrine";

/**
 * Fake / metadata-only payload probe (D-T-A6-DEL-08).
 * Never loads, executes, or returns raw payload bytes.
 */
export type EvidencePayloadProbeResult =
  | {
      ok: true;
      availability: "available" | "unavailable" | "unknown";
      digest?: Digest;
      sizeBytes?: number;
      metadataOnly: true;
    }
  | {
      ok: false;
      reason:
        | "unavailable"
        | "timeout"
        | "technical_error"
        | "digest_missing";
      availability?: "unavailable" | "unknown";
    };

export interface EvidencePayloadPort {
  probeMetadata(input: {
    evidenceId: string;
    location?: string;
    expectedDigest?: Digest;
  }): Promise<EvidencePayloadProbeResult>;
}
