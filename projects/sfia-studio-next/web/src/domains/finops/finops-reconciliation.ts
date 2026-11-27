/**
 * FinOps reconciliation helpers used by the product service path.
 * Separated so tests can exercise the same logic without mocking private methods.
 */

import {
  assessPeriodEquality,
  reconcileFinOpsCosts,
  sumMeasuredCostUsd,
  type AdminUsageSnapshot,
  type FinOpsScopeEvidence,
} from "./provider-admin-usage-collector";
import { decimalFromNumberLike } from "./decimal-money";

export type FinOpsReconciliationInput = {
  studioEstimatedUsd: number | null;
  studioEstimationKind: "known" | "partial" | "empty" | "unknown" | string;
  snapshots: AdminUsageSnapshot[];
  windowStartUtc: string;
  windowEndUtc: string;
  organizationScope: string;
  configuredOrgId: string | null;
  configuredProjectId: string | null;
  configuredApiKeyId: string | null;
  pilotAuthorized: boolean;
  freshnessStatus: string;
  freshnessSnapshotCount: number;
};

export type FinOpsReconciliationResult = {
  comparability: "COMPARABLE" | "NON_COMPARABLE" | "PARTIAL" | "UNAVAILABLE";
  providerCostUsd: string | null;
  providerCurrency: string | null;
  deltaUsd: string | null;
  limits: string[];
  disclosed: boolean;
};

/**
 * Establish COMPARABLE only when identity, window equality, provenance LIVE,
 * and Pilot authorization are all proven — same path as product service.
 */
export function evaluateFinOpsReconciliation(
  input: FinOpsReconciliationInput,
): FinOpsReconciliationResult {
  const limits: string[] = [];
  if (!input.pilotAuthorized) {
    return {
      comparability: "UNAVAILABLE",
      providerCostUsd: null,
      providerCurrency: null,
      deltaUsd: null,
      limits: ["PILOT_NOT_AUTHORIZED_FOR_PROVIDER_COSTS"],
      disclosed: false,
    };
  }

  const liveComplete = input.snapshots.filter(
    (s) =>
      s.surfaceObject === "organization.costs.result" &&
      s.completeness === "complete" &&
      (s.collectionProvenance === "LIVE" ||
        // Qualification-only: allow TEST when explicitly tagged for isolated DB proofs.
        s.collectionProvenance === "TEST_SUBSTITUTED" &&
          (process.env.SFIA_FINOPS_ALLOW_TEST_PROVENANCE ?? "").trim() === "1"),
  );

  // Default product path: LIVE only.
  const usable =
    (process.env.SFIA_FINOPS_ALLOW_TEST_PROVENANCE ?? "").trim() === "1"
      ? liveComplete
      : liveComplete.filter((s) => s.collectionProvenance === "LIVE");

  if (usable.length === 0) {
    return {
      comparability: "UNAVAILABLE",
      providerCostUsd: null,
      providerCurrency: null,
      deltaUsd: null,
      limits: ["NO_LIVE_COMPLETE_SNAPSHOTS"],
      disclosed: false,
    };
  }

  const orgIdentityProven = Boolean(
    input.configuredOrgId &&
      (input.organizationScope === input.configuredOrgId ||
        input.organizationScope === `org:${input.configuredOrgId}`),
  );
  if (!orgIdentityProven) limits.push("ORG_IDENTITY_UNPROVEN");

  const attributed = input.configuredProjectId
    ? usable.filter((s) => s.dimensions.project_id === input.configuredProjectId)
    : [];

  const sum = sumMeasuredCostUsd(usable, {
    intervalStartUtc: input.windowStartUtc,
    intervalEndUtc: input.windowEndUtc,
    projectId: input.configuredProjectId,
  });
  limits.push(...sum.limits);

  const period = assessPeriodEquality(attributed, {
    startUtc: input.windowStartUtc,
    endUtc: input.windowEndUtc,
  });
  limits.push(...period.limits);

  const freshnessAcceptable =
    input.freshnessStatus === "READY" &&
    attributed.length > 0 &&
    input.freshnessSnapshotCount > 0;

  const evidence: FinOpsScopeEvidence = {
    organizationMatches: orgIdentityProven,
    organizationIdentityProven: orgIdentityProven,
    projectIdsOverlap: attributed.length > 0,
    projectAttributionProven: Boolean(
      input.configuredProjectId && sum.counted > 0,
    ),
    apiKeyIdsOverlap: Boolean(
      input.configuredApiKeyId &&
        attributed.some(
          (s) => s.dimensions.api_key_id === input.configuredApiKeyId,
        ),
    ),
    periodOverlap: period.periodOverlap,
    periodEqual: period.periodEqual,
    currencyMatches: sum.currency === "usd",
    providerCurrency: sum.currency,
    surfacesRequested: ["/organization/costs"],
    groupingCompatible: true,
    coverageComplete:
      input.freshnessStatus === "READY" &&
      !sum.limits.includes("COST_AMOUNT_ABSENT"),
    freshnessAcceptable,
    evidenceNotes: ["SERVICE_PATH_EVALUATOR"],
  };

  const studioDecimal =
    input.studioEstimatedUsd != null
      ? decimalFromNumberLike(input.studioEstimatedUsd)
      : null;

  if (input.studioEstimationKind === "partial") {
    return {
      comparability: "PARTIAL",
      providerCostUsd: null,
      providerCurrency: null,
      deltaUsd: null,
      limits: [...limits, "STUDIO_ESTIMATION_REMAINS_PARTIAL"],
      disclosed: false,
    };
  }

  const rec = reconcileFinOpsCosts({
    studioEstimatedUsd: studioDecimal,
    providerCostUsd: sum.total,
    scope: evidence,
  });
  limits.push(...rec.limits);

  const disclosed =
    (rec.status === "COMPARABLE" || rec.status === "PARTIAL") &&
    orgIdentityProven &&
    Boolean(input.configuredProjectId) &&
    input.pilotAuthorized;

  return {
    comparability: rec.status,
    providerCostUsd: disclosed ? sum.total : null,
    providerCurrency: disclosed ? sum.currency : null,
    deltaUsd: disclosed ? rec.deltaUsd : null,
    limits: [...new Set(limits)],
    disclosed,
  };
}
