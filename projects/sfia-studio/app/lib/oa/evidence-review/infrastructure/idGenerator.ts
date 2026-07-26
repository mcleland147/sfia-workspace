import { randomBytes } from "node:crypto";
import type { IdGeneratorPort } from "../ports/idGenerator";

export class RandomIdGenerator implements IdGeneratorPort {
  newProvenanceId(): string {
    return `prv:${randomBytes(8).toString("hex")}`;
  }

  newCorrelationId(): string {
    return `cor:${randomBytes(8).toString("hex")}`;
  }
}

export class FixedIdGenerator implements IdGeneratorPort {
  constructor(
    private readonly provenanceId = "prv:fixed-evidence-001",
    private readonly correlationId = "cor:fixed-evidence-001",
  ) {}

  newProvenanceId(): string {
    return this.provenanceId;
  }

  newCorrelationId(): string {
    return this.correlationId;
  }
}
