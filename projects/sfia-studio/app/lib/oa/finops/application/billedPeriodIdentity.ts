/**
 * FinOps T2 — BILLED period identity helpers (content-addressed, deterministic).
 */

import { createHash } from "node:crypto";

/**
 * Adapter contract bumped for coverage-bound sourceBatchId material
 * (coverageStart + coverageEndExclusive). No live PROJECT_PERIOD data exists.
 */
export const OPENAI_COSTS_ADAPTER_CONTRACT_VERSION = "openai-costs-v2" as const;

function normalizePart(value: string | null | undefined): string {
  if (value === null || value === undefined) return "";
  return value.trim();
}

function sha256Hex(material: string): string {
  return createHash("sha256").update(material, "utf8").digest("hex");
}

export function buildDerivedSourceReference(input: {
  readonly provider: string;
  readonly externalProjectId: string;
  readonly sfiaProjectId: string;
  readonly sourceBucketStart: string;
  readonly sourceBucketEndExclusive: string | null;
  readonly lineItem: string | null;
  readonly currency: string;
}): string {
  const lineItemOrAll = input.lineItem ?? "ALL";
  return [
    normalizePart(input.provider),
    normalizePart(input.externalProjectId),
    normalizePart(input.sfiaProjectId),
    normalizePart(input.sourceBucketStart),
    normalizePart(input.sourceBucketEndExclusive),
    lineItemOrAll,
    normalizePart(input.currency),
  ].join("|");
}

type BilledPeriodBatchAtom = {
  readonly sourceBucketStart: string;
  readonly sourceBucketEndExclusive: string | null;
  readonly project_id: string;
  readonly line_item: string | null;
  readonly currency: string;
  readonly providerAmount: string;
};

function canonicalAtomKey(atom: BilledPeriodBatchAtom): string {
  return [
    normalizePart(atom.sourceBucketStart),
    normalizePart(atom.sourceBucketEndExclusive),
    normalizePart(atom.project_id),
    normalizePart(atom.line_item ?? "ALL"),
    normalizePart(atom.currency),
    normalizePart(atom.providerAmount),
  ].join("|");
}

export function buildBilledPeriodSourceBatchId(input: {
  readonly provider: string;
  readonly externalProjectId: string;
  readonly sfiaProjectId: string;
  readonly periodStart: string;
  readonly adapterContractVersion: string;
  readonly coverageStart: string;
  readonly coverageEndExclusive: string;
  readonly atoms: ReadonlyArray<BilledPeriodBatchAtom>;
}): string {
  const sorted = [...input.atoms]
    .map(canonicalAtomKey)
    .sort((a, b) => a.localeCompare(b));
  const material = [
    normalizePart(input.provider),
    normalizePart(input.externalProjectId),
    normalizePart(input.sfiaProjectId),
    normalizePart(input.periodStart),
    normalizePart(input.adapterContractVersion),
    normalizePart(input.coverageStart),
    normalizePart(input.coverageEndExclusive),
    sorted.join("\n"),
  ].join("|");
  return `batch_${sha256Hex(material)}`;
}

export function buildCorrectionRef(input: {
  readonly kind: "INITIAL" | "CORR";
  readonly providerPayloadDigest?: string;
}): string {
  if (input.kind === "INITIAL") return "INITIAL";
  const digest = normalizePart(input.providerPayloadDigest);
  if (!digest) {
    throw new Error("providerPayloadDigest is required for CORR correctionRef");
  }
  return `CORR|${digest}`;
}

export function buildProviderPayloadDigest(input: {
  readonly provider: string;
  readonly externalProjectId: string;
  readonly projectId: string;
  readonly periodStart: string;
  readonly sourceBucketStart: string;
  readonly sourceBucketEndExclusive: string | null;
  readonly lineItem: string | null;
  readonly currency: string;
  readonly providerAmount: string;
  readonly derivedSourceReference: string;
}): string {
  const material = [
    normalizePart(input.provider),
    normalizePart(input.externalProjectId),
    normalizePart(input.projectId),
    normalizePart(input.periodStart),
    normalizePart(input.sourceBucketStart),
    normalizePart(input.sourceBucketEndExclusive),
    normalizePart(input.lineItem ?? "ALL"),
    normalizePart(input.currency),
    normalizePart(input.providerAmount),
    normalizePart(input.derivedSourceReference),
  ].join("|");
  return sha256Hex(material);
}

/**
 * derivedSourceReference material:
 * provider|externalProjectId|sfiaProjectId|sourceBucketStart|sourceBucketEndExclusive|lineItemOrALL|currency
 */
export function derivedSourceReferenceBelongsToScope(
  derivedSourceReference: string,
  scope: {
    readonly provider: string;
    readonly externalProjectId: string;
    readonly sfiaProjectId: string;
  },
): boolean {
  const parts = derivedSourceReference.split("|");
  if (parts.length < 7) return false;
  return (
    parts[0] === normalizePart(scope.provider) &&
    parts[1] === normalizePart(scope.externalProjectId) &&
    parts[2] === normalizePart(scope.sfiaProjectId)
  );
}

export function isParsableDerivedSourceReference(
  derivedSourceReference: string,
): boolean {
  return derivedSourceReference.split("|").length >= 7;
}

/** Parse bucket bounds from derivedSourceReference; null if unprovable. */
export function parseBucketIntervalFromDerivedSourceReference(
  derivedSourceReference: string,
): {
  readonly sourceBucketStart: string;
  readonly sourceBucketEndExclusive: string;
} | null {
  const parts = derivedSourceReference.split("|");
  if (parts.length < 7) return null;
  const sourceBucketStart = normalizePart(parts[3]);
  const sourceBucketEndExclusive = normalizePart(parts[4]);
  if (!sourceBucketStart || !sourceBucketEndExclusive) return null;
  if (
    Number.isNaN(Date.parse(sourceBucketStart)) ||
    Number.isNaN(Date.parse(sourceBucketEndExclusive))
  ) {
    return null;
  }
  return { sourceBucketStart, sourceBucketEndExclusive };
}

/** bucketStart >= coverageStart AND bucketEndExclusive <= coverageEndExclusive */
export function bucketFullyWithinCoverage(
  bucket: {
    readonly sourceBucketStart: string;
    readonly sourceBucketEndExclusive: string;
  },
  coverage: {
    readonly coverageStart: string;
    readonly coverageEndExclusive: string;
  },
): boolean {
  const bStart = Date.parse(bucket.sourceBucketStart);
  const bEnd = Date.parse(bucket.sourceBucketEndExclusive);
  const cStart = Date.parse(coverage.coverageStart);
  const cEnd = Date.parse(coverage.coverageEndExclusive);
  if (
    Number.isNaN(bStart) ||
    Number.isNaN(bEnd) ||
    Number.isNaN(cStart) ||
    Number.isNaN(cEnd)
  ) {
    return false;
  }
  return bStart >= cStart && bEnd <= cEnd;
}

/** Deterministic correction for an atom absent from a complete snapshot. */
export function buildAbsentFromCompleteSnapshotCorrectionRef(input: {
  readonly derivedSourceReference: string;
  readonly sourceBatchId: string;
  readonly provider: string;
  readonly externalProjectId: string;
  readonly sfiaProjectId: string;
  readonly periodStart: string;
}): string {
  const material = [
    "ABSENT_FROM_COMPLETE_SNAPSHOT",
    normalizePart(input.derivedSourceReference),
    normalizePart(input.sourceBatchId),
    normalizePart(input.provider),
    normalizePart(input.externalProjectId),
    normalizePart(input.sfiaProjectId),
    normalizePart(input.periodStart),
  ].join("|");
  return `ABSENT_FROM_COMPLETE_SNAPSHOT|${sha256Hex(material)}`;
}
