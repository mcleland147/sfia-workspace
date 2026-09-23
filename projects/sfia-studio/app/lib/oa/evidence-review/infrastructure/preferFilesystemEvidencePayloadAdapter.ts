/**
 * Product EvidencePayloadPort — prefer independent filesystem digest when a
 * durable location exists; otherwise fall back to Fake scripts (test harness /
 * fail-closed without script). Never echoes expectedDigest.
 */
import fs from "node:fs";
import type { Digest } from "@/lib/oa/doctrine";
import type {
  EvidencePayloadPort,
  EvidencePayloadProbeResult,
} from "../ports/evidencePayloadPort";
import {
  FakeEvidencePayloadAdapter,
  type FakePayloadScript,
} from "./fakeEvidencePayloadAdapter";
import { FilesystemEvidencePayloadAdapter } from "./filesystemEvidencePayloadAdapter";

export class PreferFilesystemEvidencePayloadAdapter
  implements EvidencePayloadPort
{
  readonly fake = new FakeEvidencePayloadAdapter();
  private readonly filesystem = new FilesystemEvidencePayloadAdapter();

  setScript(evidenceId: string, script: FakePayloadScript): void {
    this.fake.setScript(evidenceId, script);
  }

  clearScripts(): void {
    this.fake.clearScripts();
  }

  async probeMetadata(input: {
    evidenceId: string;
    location?: string;
    expectedDigest?: Digest;
  }): Promise<EvidencePayloadProbeResult> {
    const location = input.location?.trim();
    if (location) {
      try {
        if (fs.existsSync(location)) {
          return this.filesystem.probeMetadata(input);
        }
      } catch {
        /* fall through to Fake */
      }
    }
    return this.fake.probeMetadata(input);
  }
}
