import type { IdentityPort } from "../ports/identityPort";

export class SequentialIdentity implements IdentityPort {
  private run = 0;
  private evidence = 0;
  private intent = 0;

  nextRunId(): string {
    this.run += 1;
    return `executionrun:d2d1:${String(this.run).padStart(4, "0")}`;
  }

  nextEvidenceId(): string {
    this.evidence += 1;
    return `evidence:d2d1:${String(this.evidence).padStart(4, "0")}`;
  }

  nextIntentId(): string {
    this.intent += 1;
    return `intent:d2d1:${String(this.intent).padStart(4, "0")}`;
  }
}
