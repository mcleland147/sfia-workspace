/**
 * Single technical source of application version metadata.
 * package.json "version" is technical only — NOT a product release / STABLE claim.
 * Product STABLE version: NOT AVAILABLE until Morris promotion gate.
 */
export const PRODUCT_VERSIONING = {
  technicalPackageVersion: "0.0.0-dev",
  productStableVersion: "NOT AVAILABLE",
  releaseCandidateProposal: "0.1.0-rc.1", // proposal only — NOT attributed
  releaseStatus: "NO RELEASE",
  laneDefault: "DEV",
} as const;

export function buildManifest(input: {
  sourceSha: string;
  buildId: string;
  schemaRevision: string;
  lane: string;
}) {
  return {
    ...PRODUCT_VERSIONING,
    ...input,
    generatedAt: new Date().toISOString(),
  };
}
