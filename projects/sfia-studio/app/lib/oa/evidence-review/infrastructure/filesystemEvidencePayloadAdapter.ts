/**
 * Filesystem EvidencePayloadPort — metadata-only probe by hashing file at location.
 * Never returns raw payload bytes. Observed digest is computed independently
 * (never echoed from expectedDigest).
 */
import { createHash } from "node:crypto";
import fs from "node:fs";
import type { Digest } from "@/lib/oa/doctrine";
import type {
  EvidencePayloadPort,
  EvidencePayloadProbeResult,
} from "../ports/evidencePayloadPort";

export class FilesystemEvidencePayloadAdapter implements EvidencePayloadPort {
  async probeMetadata(input: {
    evidenceId: string;
    location?: string;
    expectedDigest?: Digest;
  }): Promise<EvidencePayloadProbeResult> {
    // expectedDigest unused for observation — independent hash only.
    void input.expectedDigest;
    void input.evidenceId;

    const location = input.location?.trim();
    if (!location) {
      return {
        ok: false,
        reason: "unavailable",
        availability: "unavailable",
      };
    }

    try {
      if (!fs.existsSync(location)) {
        return {
          ok: false,
          reason: "unavailable",
          availability: "unavailable",
        };
      }
      const body = fs.readFileSync(location);
      const digest: Digest = `sha256:${createHash("sha256")
        .update(body)
        .digest("hex")}`;
      return {
        ok: true,
        availability: "available",
        digest,
        sizeBytes: body.byteLength,
        metadataOnly: true,
      };
    } catch {
      return {
        ok: false,
        reason: "technical_error",
        availability: "unknown",
      };
    }
  }
}
