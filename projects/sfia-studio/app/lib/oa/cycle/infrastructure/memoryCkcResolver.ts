import { randomBytes } from "node:crypto";
import type { CkcResolution } from "../domain/types";
import type {
  CkcResolveInput,
  CkcResolverPort,
} from "../ports/ckcResolver";

export type CkcRegistryEntry = {
  cycleTypeId: string;
  level: "detailed" | "synthetic";
  status: "resolved" | "synthetic";
  version?: string;
  freshness?: "fresh" | "aging" | "stale" | "unknown";
  confidence?: "high" | "medium" | "low" | "none";
  source?: "repository_candidate" | "intra_v3_synthetic";
};

/**
 * Memory CKC resolver — registry of candidate resolutions by cycleTypeId,
 * or level=absent / status=unavailable / fallbackPolicy=intra_v3_only.
 * Never invents detailed content. Never sets executionAuthority true. No v2.6.
 */
export class MemoryCkcResolver implements CkcResolverPort {
  private readonly registry = new Map<string, CkcRegistryEntry>();

  constructor(entries: CkcRegistryEntry[] = []) {
    for (const entry of entries) {
      this.registry.set(entry.cycleTypeId, entry);
    }
  }

  register(entry: CkcRegistryEntry): void {
    this.registry.set(entry.cycleTypeId, entry);
  }

  async resolve(input: CkcResolveInput): Promise<CkcResolution> {
    const found = this.registry.get(input.cycleTypeId);
    if (!found) {
      return {
        schemaVersion: "0.1.0-oa",
        ckcResolutionId: `ckc:${randomBytes(8).toString("hex")}`,
        cycleTypeId: input.cycleTypeId,
        level: "absent",
        source: "unavailable",
        freshness: "unknown",
        confidence: "none",
        resolvedAt: input.resolvedAt,
        fallbackPolicy: "intra_v3_only",
        status: "unavailable",
        executionAuthority: false,
      };
    }

    return {
      schemaVersion: "0.1.0-oa",
      ckcResolutionId: `ckc:${randomBytes(8).toString("hex")}`,
      cycleTypeId: input.cycleTypeId,
      level: found.level,
      source: found.source ?? "repository_candidate",
      version: found.version,
      freshness: found.freshness ?? "unknown",
      confidence: found.confidence ?? "medium",
      resolvedAt: input.resolvedAt,
      fallbackPolicy: "intra_v3_only",
      status: found.status,
      executionAuthority: false,
    };
  }
}
