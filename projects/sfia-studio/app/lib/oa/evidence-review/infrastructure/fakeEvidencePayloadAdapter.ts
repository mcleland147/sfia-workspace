import type { Digest } from "@/lib/oa/doctrine";
import type {
  EvidencePayloadPort,
  EvidencePayloadProbeResult,
} from "../ports/evidencePayloadPort";

export type FakePayloadScript = {
  availability?: "available" | "unavailable" | "unknown";
  digest?: Digest;
  sizeBytes?: number;
  failWith?: "unavailable" | "timeout" | "technical_error" | "digest_missing";
};

/**
 * FakeEvidencePayloadAdapter — metadata-only, no network/filesystem/shell.
 * Scripts are keyed by evidenceId (or "*" default).
 *
 * Fail-closed: without an explicit script, the probe fails.
 * Observed digest is NEVER echoed from expectedDigest (F-A6-D1-01).
 */
export class FakeEvidencePayloadAdapter implements EvidencePayloadPort {
  private scripts = new Map<string, FakePayloadScript>();

  setScript(evidenceId: string, script: FakePayloadScript): void {
    this.scripts.set(evidenceId, script);
  }

  clearScripts(): void {
    this.scripts.clear();
  }

  async probeMetadata(input: {
    evidenceId: string;
    location?: string;
    expectedDigest?: Digest;
  }): Promise<EvidencePayloadProbeResult> {
    // expectedDigest is intentionally unused for observation — claimants cannot mint matches.
    void input.expectedDigest;

    const script =
      this.scripts.get(input.evidenceId) ?? this.scripts.get("*");

    if (!script) {
      return {
        ok: false,
        reason: "technical_error",
        availability: "unknown",
      };
    }

    if (script.failWith) {
      return {
        ok: false,
        reason: script.failWith,
        availability:
          script.failWith === "unavailable" ? "unavailable" : "unknown",
      };
    }

    const availability = script.availability ?? "available";
    if (availability === "unavailable") {
      return {
        ok: false,
        reason: "unavailable",
        availability: "unavailable",
      };
    }

    if (!script.digest) {
      return {
        ok: false,
        reason: "digest_missing",
        availability: "unknown",
      };
    }

    return {
      ok: true,
      availability,
      digest: script.digest,
      sizeBytes: script.sizeBytes,
      metadataOnly: true,
    };
  }
}
