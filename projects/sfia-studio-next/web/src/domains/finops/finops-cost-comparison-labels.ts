/**
 * Pilot-facing labels for FinOps cost comparison (13.03).
 * Never surface internal codes (DTO, org:unspecified, disclosed, kind, ownership).
 */

import type { FinOpsProviderReconciliationDto } from "./usage-read-service";
import { formatUsdFr } from "./usage-projection";

export type CostComparability = FinOpsProviderReconciliationDto["comparability"];

export function costComparabilityLabel(status: CostComparability): string {
  switch (status) {
    case "COMPARABLE":
      return "Comparable";
    case "NON_COMPARABLE":
      return "Non comparable";
    case "PARTIAL":
      return "Partiel";
    case "UNAVAILABLE":
      return "Indisponible";
    default:
      return "Indisponible";
  }
}

export function costComparabilityBadgeClass(status: CostComparability): string {
  switch (status) {
    case "COMPARABLE":
      return "is-comparable";
    case "NON_COMPARABLE":
      return "is-non-comparable";
    case "PARTIAL":
      return "is-partial";
    case "UNAVAILABLE":
    default:
      return "is-unavailable";
  }
}

export function costFreshnessLabel(status: string): string {
  switch ((status || "").toUpperCase()) {
    case "READY":
      return "À jour";
    case "PARTIAL":
      return "Partielle";
    case "ERROR":
      return "Erreur de collecte";
    case "IDLE":
    default:
      return "Non disponible";
  }
}

/** Map internal limit codes → short Pilot French. Deduped, max 3. */
export function pilotCostComparisonMessages(limits: string[]): string[] {
  const out: string[] = [];
  const push = (msg: string) => {
    if (!out.includes(msg)) out.push(msg);
  };
  for (const code of limits) {
    switch (code) {
      case "NO_FINANCIAL_HABILITATION_FOR_PROVIDER_AGGREGATE":
      case "PILOT_NOT_AUTHORIZED_FOR_PROVIDER_COSTS":
      case "PROVIDER_DISCLOSE_EMERGENCY_DENY":
        push("Le coût fournisseur n’est pas autorisé pour votre espace.");
        break;
      case "ORG_IDENTITY_UNPROVEN":
        push("L’organisation fournisseur n’est pas identifiée de façon fiable.");
        break;
      case "STUDIO_ESTIMATION_REMAINS_PARTIAL":
        push("L’estimation Studio est partielle.");
        break;
      case "NO_LIVE_COMPLETE_SNAPSHOTS":
      case "ADMIN_COLLECTION_UNAVAILABLE":
      case "ADMIN_SNAPSHOT_READ_DISABLED":
      case "ADMIN_SNAPSHOT_PG_UNAVAILABLE":
        push("Aucune donnée fournisseur complète n’est disponible.");
        break;
      case "PERIOD_WINDOW_END_ABSENT":
      case "PERIOD_NOT_EQUAL":
      case "PERIOD_OVERLAP_NOT_EQUAL":
      case "PERIOD_NO_OVERLAP":
        push("Les périodes de comparaison ne correspondent pas.");
        break;
      case "PROJECT_ATTRIBUTION_UNPROVEN":
      case "PROJECT_OR_KEY_SCOPE_UNPROVEN":
      case "PROVIDER_COST_REQUIRES_STUDIO_PROJECT_FILTER":
      case "OPENAI_PROJECT_NOT_CONFIGURED":
        push("Le périmètre projet ne permet pas une comparaison fiable.");
        break;
      case "GROUPING_INCOMPATIBLE":
      case "COVERAGE_PARTIAL":
      case "FRESHNESS_STALE":
        push("La couverture des données est insuffisante pour comparer.");
        break;
      case "CURRENCY_MISMATCH":
      case "CURRENCY_ABSENT":
        push("La devise fournisseur n’est pas compatible.");
        break;
      case "PILOT_NOT_OWNER_OF_FILTERED_PROJECT":
        push("Ce projet ne fait pas partie de votre espace.");
        break;
      default:
        // Skip raw technical codes — never echo internals to the Pilot.
        break;
    }
    if (out.length >= 3) break;
  }
  return out;
}

export function formatCompareWindowUtc(
  startUtc: string | null,
  endUtc: string | null,
): string {
  if (!startUtc && !endUtc) return "—";
  const fmt = (iso: string) => {
    try {
      return new Date(iso).toISOString().slice(0, 10);
    } catch {
      return iso.slice(0, 10);
    }
  };
  if (startUtc && endUtc) return `${fmt(startUtc)} → ${fmt(endUtc)}`;
  if (startUtc) return `depuis ${fmt(startUtc)}`;
  return `jusqu’à ${fmt(endUtc!)}`;
}

export function formatStudioEstimateDisplay(
  usd: number | null,
  estimationKind: string,
): { value: string; hint: string } {
  if (usd == null || !Number.isFinite(usd)) {
    return { value: "—", hint: "Estimation Studio indisponible" };
  }
  const value = formatUsdFr(usd);
  if (estimationKind === "partial") {
    return { value, hint: "Estimation Studio · partielle" };
  }
  if (estimationKind === "unknown" || estimationKind === "empty") {
    return { value: "—", hint: "Estimation Studio indisponible" };
  }
  return { value, hint: "Estimation Studio" };
}

export function formatProviderCostDisplay(
  recon: Pick<
    FinOpsProviderReconciliationDto,
    "providerCostUsd" | "providerCurrency" | "comparability"
  >,
): { value: string; hint: string } {
  if (recon.providerCostUsd != null && Number.isFinite(recon.providerCostUsd)) {
    const cur = (recon.providerCurrency || "usd").toUpperCase();
    return {
      value: formatUsdFr(recon.providerCostUsd),
      hint: cur === "USD" ? "Coût fournisseur" : `Coût fournisseur · ${cur}`,
    };
  }
  if (recon.comparability === "UNAVAILABLE") {
    return { value: "Non autorisé", hint: "Coût fournisseur masqué" };
  }
  return { value: "Indisponible", hint: "Coût fournisseur non comparable" };
}

export function formatDeltaDisplay(
  recon: Pick<
    FinOpsProviderReconciliationDto,
    "deltaUsd" | "comparability" | "providerCostUsd"
  >,
): string | null {
  if (
    recon.comparability !== "COMPARABLE" ||
    recon.providerCostUsd == null ||
    recon.deltaUsd == null ||
    !Number.isFinite(recon.deltaUsd)
  ) {
    return null;
  }
  const sign = recon.deltaUsd > 0 ? "+" : "";
  return `Écart (fournisseur − Studio) : ${sign}${formatUsdFr(recon.deltaUsd)}`;
}
