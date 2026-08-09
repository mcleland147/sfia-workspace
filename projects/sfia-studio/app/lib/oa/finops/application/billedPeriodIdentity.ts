/**
 * FinOps T2 — BILLED period identity helpers (content-addressed, deterministic).
 */

import { createHash } from "node:crypto";

export const OPENAI_COSTS_ADAPTER_CONTRACT_VERSION = "openai-costs-v1" as const;

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
