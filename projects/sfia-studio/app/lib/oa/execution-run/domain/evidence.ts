/**
 * Evidence, completeness, source disclosure rules (FD-05/08).
 */
import type {
  Completeness,
  ExecutionEvidence,
  ExecutionSource,
  ProviderLane,
  SourceDisclosure,
  UsageSummary,
} from "./types";

export function assertSourceHonest(
  declared: ExecutionSource,
  claimed: ExecutionSource,
): boolean {
  return declared === claimed;
}

export function canSucceed(completeness: Completeness): boolean {
  return completeness === "complete";
}

export function createOfficialEvidence(input: {
  evidenceId: string;
  runId: string;
  correlationId: string;
  source: ExecutionSource;
  completeness: Completeness;
  producedAt: string;
  summary: string;
  late?: boolean;
  digest?: string;
}): ExecutionEvidence {
  return {
    evidenceId: input.evidenceId,
    runId: input.runId,
    correlationId: input.correlationId,
    source: input.source,
    completeness: input.completeness,
    producedAt: input.producedAt,
    digest: input.digest,
    summary: input.summary,
    late: input.late ?? false,
    official: true,
  };
}

export function createSourceDisclosure(input: {
  source: ExecutionSource;
  providerLane: ProviderLane;
  limits?: readonly string[];
  cursorUnverified?: boolean;
}): SourceDisclosure {
  return {
    source: input.source,
    providerLane: input.providerLane,
    limits: input.limits ?? [],
    processLocalMemory: true,
    cursorUnverified: input.cursorUnverified ?? input.providerLane === "cursor",
  };
}

export function usageUnavailable(reason: string): UsageSummary {
  return { status: "unavailable", reason };
}

export function isIsoTimestamp(value: string): boolean {
  if (!/^\d{4}-\d{2}-\d{2}T\d{2}:\d{2}:\d{2}(?:\.\d+)?Z$/.test(value)) {
    return false;
  }
  const t = Date.parse(value);
  return Number.isFinite(t);
}
