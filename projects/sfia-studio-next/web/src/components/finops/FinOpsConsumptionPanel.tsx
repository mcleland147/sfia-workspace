"use client";

import Link from "next/link";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import type {
  FinOpsProviderReconciliationDto,
  FinOpsSummaryDto,
  FinOpsWorkListItem,
} from "@/domains/finops/usage-read-service";
import {
  FINOPS_PERIOD_OPTIONS,
  finOpsDailyChartScaleMax,
  finOpsDailyChartYTicks,
  finOpsDailyXAxisLabels,
  formatModelBreakdownCost,
  formatMeasuredPercent,
  formatMeasuredTokens,
  formatMeasuredUsd,
  formatIntegerFr,
  formatUsdAxisFr,
  displayModelShort,
  finOpsMeasureCoverageSubtext,
} from "@/domains/finops/usage-projection";
import {
  costComparabilityBadgeClass,
  costComparabilityLabel,
  costFreshnessLabel,
  formatCompareWindowUtc,
  formatDeltaDisplay,
  formatProviderCostDisplay,
  formatStudioEstimateDisplay,
  pilotCostComparisonMessages,
} from "@/domains/finops/finops-cost-comparison-labels";
import "./finops-consumption.css";

type FilterOptions = {
  projects: Array<{ id: string; name: string }>;
  models: string[];
};

type SummaryResponse = {
  summary: FinOpsSummaryDto;
  filterOptions: FilterOptions;
};

function kpiSubCost(metric: FinOpsSummaryDto["kpis"]["estimatedCostUsd"]): string {
  if (metric.kind === "unknown") return "Estimation Studio indisponible";
  if (metric.kind === "partial") return metric.note ?? "Estimation Studio partielle";
  return "USD · estimation Studio";
}

function kpiSubTokens(metric: FinOpsSummaryDto["kpis"]["totalTokens"]): string {
  if (metric.kind === "partial") return metric.note ?? "Mesure partielle";
  return "Entrée + sortie · cache inclus";
}

function kpiSubCompleted(
  completed: FinOpsSummaryDto["kpis"]["completedWorks"],
  costPer: FinOpsSummaryDto["kpis"]["costPerCompletedWorkUsd"],
): string {
  if (completed.kind === "partial") return completed.note ?? "Décompte partiel";
  if (completed.kind === "unknown") return completed.reason ?? "Travaux non établis";
  if (costPer.kind === "partial") {
    return `Coût global / travail abouti : ${formatMeasuredUsd(costPer)} · estimation partielle`;
  }
  if (costPer.kind === "known") {
    return `Coût global / travail abouti : ${formatMeasuredUsd(costPer)}`;
  }
  if (costPer.kind === "unknown") return costPer.reason ?? "Ratio indisponible";
  return "Travaux aboutis observés";
}

function kpiSubCoverage(kpis: FinOpsSummaryDto["kpis"]): string {
  return finOpsMeasureCoverageSubtext(kpis);
}

function cellTokens(metric: FinOpsWorkListItem["tokens"]): string {
  if (metric.kind === "known" || metric.kind === "partial") {
    return formatIntegerFr(metric.value);
  }
  return "—";
}

export function FinOpsConsumptionPanel() {
  const [period, setPeriod] = useState("30");
  const [projectId, setProjectId] = useState("");
  const [model, setModel] = useState("");
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [worksError, setWorksError] = useState<string | null>(null);
  const [summary, setSummary] = useState<FinOpsSummaryDto | null>(null);
  const [filterOptions, setFilterOptions] = useState<FilterOptions | null>(null);
  const [works, setWorks] = useState<FinOpsWorkListItem[]>([]);
  const requestSeq = useRef(0);

  const query = useMemo(() => {
    const p = new URLSearchParams();
    p.set("period", period);
    if (projectId) p.set("projectId", projectId);
    if (model) p.set("model", model);
    return p.toString();
  }, [period, projectId, model]);

  const refresh = useCallback(async () => {
    const seq = ++requestSeq.current;
    setLoading(true);
    setError(null);
    setWorksError(null);
    try {
      const [sumRes, worksRes] = await Promise.all([
        fetch(`/api/finops/summary?${query}`),
        fetch(`/api/finops/works?${query}`),
      ]);
      if (seq !== requestSeq.current) return;
      if (!sumRes.ok) {
        const j = await sumRes.json().catch(() => ({}));
        throw new Error(j.message ?? "Chargement impossible");
      }
      const sumBody = (await sumRes.json()) as SummaryResponse;
      if (seq !== requestSeq.current) return;
      setSummary(sumBody.summary);
      setFilterOptions(sumBody.filterOptions);

      if (worksRes.ok) {
        const w = (await worksRes.json()) as { items: FinOpsWorkListItem[] };
        if (seq !== requestSeq.current) return;
        setWorks(w.items ?? []);
        setWorksError(null);
      } else {
        setWorks([]);
        setWorksError("La liste des travaux n’a pas pu être chargée.");
      }
    } catch (e) {
      if (seq !== requestSeq.current) return;
      setError(e instanceof Error ? e.message : "Erreur de chargement");
      setSummary(null);
      setWorks([]);
      setWorksError(null);
    } finally {
      if (seq === requestSeq.current) setLoading(false);
    }
  }, [query]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const dailyScaleMax = summary
    ? finOpsDailyChartScaleMax(summary.dailyCosts.map((d) => d.costUsd))
    : 1;
  const dailyYTicks = finOpsDailyChartYTicks(dailyScaleMax);
  const dailyChartTop = dailyYTicks[0] ?? dailyScaleMax;
  const dailyXLabels = finOpsDailyXAxisLabels(summary?.periodDays ?? Number(period));
  const maxModel =
    summary?.modelBreakdown.reduce((m, d) => Math.max(m, d.costUsd ?? 0), 0) ?? 1;

  const completedMetric = summary?.kpis.completedWorks;
  const completedDisplay =
    completedMetric &&
    (completedMetric.kind === "known" || completedMetric.kind === "partial")
      ? formatIntegerFr(completedMetric.value)
      : "—";

  return (
    <div className="finops-1306-page" data-testid="finops-consumption-page">
      <div className="finops-1306">
        <header className="finops-1306-header">
          <p className="finops-1306-eyebrow">PARAMÈTRES / OBSERVABILITÉ</p>
          <h1 className="finops-1306-title">Consommation et coûts</h1>
          <p className="finops-1306-lead">
            Comprenez les ressources mobilisées par Nora et l&apos;origine des dépenses.
          </p>
        </header>

        <p className="finops-1306-banner" data-testid="finops-disclaimer">
          Données observées Studio — estimations tarifaires locales, non rapprochées d&apos;une
          facture fournisseur.
        </p>

        <div className="finops-1306-filters" data-testid="finops-filters">
          <select
            className="finops-1306-select"
            value={period}
            onChange={(e) => setPeriod(e.target.value)}
            aria-label="Période"
            data-testid="finops-filter-period"
          >
            {FINOPS_PERIOD_OPTIONS.map((d) => (
              <option key={d} value={String(d)}>
                {d === 7 ? "7 derniers jours" : d === 90 ? "90 derniers jours" : "30 derniers jours"}
              </option>
            ))}
          </select>
          <select
            className="finops-1306-select"
            value={projectId}
            onChange={(e) => setProjectId(e.target.value)}
            aria-label="Projet"
            data-testid="finops-filter-project"
          >
            <option value="">Tous les projets</option>
            {(filterOptions?.projects ?? []).map((p) => (
              <option key={p.id} value={p.id}>
                {p.name}
              </option>
            ))}
          </select>
          <select
            className="finops-1306-select"
            value={model}
            onChange={(e) => setModel(e.target.value)}
            aria-label="Modèle"
            data-testid="finops-filter-model"
          >
            <option value="">Tous les modèles</option>
            {(filterOptions?.models ?? []).map((m) => (
              <option key={m} value={m}>
                {displayModelShort(m) ?? m}
              </option>
            ))}
          </select>
          <span className="finops-1306-filter-label">Tous les usages Studio</span>
        </div>

        {loading ? (
          <p className="finops-1306-state" data-testid="finops-loading">
            Chargement…
          </p>
        ) : null}

        {error ? (
          <p className="finops-1306-state" role="alert" data-testid="finops-error">
            {error}{" "}
            <button type="button" className="finops-1306-link" onClick={() => void refresh()}>
              Réessayer
            </button>
          </p>
        ) : null}

        {!loading && !error && worksError ? (
          <p className="finops-1306-state" role="alert" data-testid="finops-works-error">
            {worksError}{" "}
            <button type="button" className="finops-1306-link" onClick={() => void refresh()}>
              Réessayer
            </button>
          </p>
        ) : null}

        {!loading && !error && summary && !summary.hasObservations ? (
          <div className="finops-1306-empty" data-testid="finops-empty">
            <h2>Aucune consommation disponible</h2>
            <p>Aucune mesure n&apos;est disponible pour la période et les filtres sélectionnés.</p>
            <p className="finops-1306-empty-note">
              Un usage non observé n&apos;est pas une consommation nulle. Les données apparaîtront
              lorsque les requêtes seront mesurées.
            </p>
          </div>
        ) : null}

        {!loading && !error && summary?.hasObservations ? (
          <>
            <div className="finops-1306-kpis" data-testid="finops-kpis">
              <article className="finops-1306-kpi">
                <p className="finops-1306-kpi-label">Coût estimé</p>
                <p className="finops-1306-kpi-value">
                  {formatMeasuredUsd(summary.kpis.estimatedCostUsd)}
                </p>
                <p className="finops-1306-kpi-sub">{kpiSubCost(summary.kpis.estimatedCostUsd)}</p>
              </article>
              <article className="finops-1306-kpi">
                <p className="finops-1306-kpi-label">Tokens consommés</p>
                <p className="finops-1306-kpi-value">
                  {formatMeasuredTokens(summary.kpis.totalTokens)}
                </p>
                <p className="finops-1306-kpi-sub">{kpiSubTokens(summary.kpis.totalTokens)}</p>
              </article>
              <article className="finops-1306-kpi">
                <p className="finops-1306-kpi-label">Travaux aboutis</p>
                <p className="finops-1306-kpi-value">{completedDisplay}</p>
                <p className="finops-1306-kpi-sub">
                  {kpiSubCompleted(
                    summary.kpis.completedWorks,
                    summary.kpis.costPerCompletedWorkUsd,
                  )}
                </p>
              </article>
              <article className="finops-1306-kpi">
                <p className="finops-1306-kpi-label">Couverture mesure</p>
                <p className="finops-1306-kpi-value">
                  {formatMeasuredPercent(summary.kpis.measureCoveragePercent)}
                </p>
                <p className="finops-1306-kpi-sub">{kpiSubCoverage(summary.kpis)}</p>
              </article>
            </div>

            <CostComparisonBanner recon={summary.providerReconciliation} />

            <div className="finops-1306-charts">
              <section className="finops-1306-panel finops-1306-daily-panel">
                <div className="finops-1306-panel-head">
                  <h2>Évolution des dépenses</h2>
                  <span className="finops-1306-chart-meta">
                    USD · {summary.periodDays} jours
                  </span>
                </div>
                <div className="finops-1306-daily-chart" data-testid="finops-daily-chart">
                  <ul className="finops-1306-chart-y" aria-hidden>
                    {dailyYTicks.map((tick) => (
                      <li key={tick}>{formatUsdAxisFr(tick)}</li>
                    ))}
                  </ul>
                  <div className="finops-1306-bars">
                    {summary.dailyCosts.map((d) => {
                      const h =
                        d.costUsd != null && dailyChartTop > 0
                          ? Math.max(4, Math.round((d.costUsd / dailyChartTop) * 130))
                          : d.hasData
                            ? 4
                            : 2;
                      const title =
                        d.costUsd != null
                          ? `${d.day} · ${formatMeasuredUsd({ kind: "known", value: d.costUsd })}`
                          : d.hasData
                            ? `${d.day} · coût inconnu`
                            : d.day;
                      return (
                        <div
                          key={d.day}
                          className={`finops-1306-bar ${d.costUsd == null ? "is-unknown" : ""} ${!d.hasData ? "is-empty" : ""}`}
                          style={{ height: `${h}px` }}
                          title={title}
                        />
                      );
                    })}
                  </div>
                </div>
                <div className="finops-1306-daily-x" aria-hidden>
                  <span>{dailyXLabels.start}</span>
                  <span>{dailyXLabels.end}</span>
                </div>
              </section>
              <section className="finops-1306-panel">
                <h2>Répartition par modèle</h2>
                {summary.modelBreakdown.length === 0 ? (
                  <p className="muted text-sm m-0">Aucune ventilation par modèle.</p>
                ) : (
                  summary.modelBreakdown.map((row) => {
                    const label = displayModelShort(row.model) ?? row.model;
                    const width =
                      row.costUsd != null && maxModel > 0
                        ? `${Math.round((row.costUsd / maxModel) * 100)}%`
                        : undefined;
                    return (
                      <div key={row.model} className="finops-1306-model-row">
                        <span>{label}</span>
                        <div className="finops-1306-model-bar">
                          {width ? <span style={{ width }} /> : null}
                        </div>
                        <span>{formatModelBreakdownCost(row)}</span>
                      </div>
                    );
                  })
                )}
              </section>
            </div>

            {worksError ? null : <WorksTable works={works} />}
          </>
        ) : null}
      </div>
    </div>
  );
}

function CostComparisonBanner({
  recon,
}: {
  recon: FinOpsProviderReconciliationDto;
}) {
  const studio = formatStudioEstimateDisplay(
    recon.studioEstimatedUsd,
    recon.studioEstimationKind,
  );
  const provider = formatProviderCostDisplay(recon);
  const delta = formatDeltaDisplay(recon);
  const messages = pilotCostComparisonMessages(recon.limits);
  const period = formatCompareWindowUtc(
    recon.compareWindowStartUtc,
    recon.compareWindowEndUtc,
  );
  const freshness = costFreshnessLabel(recon.freshness.status);
  const badge = costComparabilityLabel(recon.comparability);
  const badgeClass = costComparabilityBadgeClass(recon.comparability);

  return (
    <aside
      className="finops-1306-compare"
      data-testid="finops-cost-comparison"
      data-comparability={recon.comparability}
      aria-label="Comparaison des coûts"
    >
      <p className="finops-1306-compare-title">Comparaison des coûts</p>
      <div className="finops-1306-compare-grid">
        <div className="finops-1306-compare-cell" data-testid="finops-compare-studio">
          <p className="finops-1306-compare-label">Estimation Studio</p>
          <p className="finops-1306-compare-value">{studio.value}</p>
          <p className="finops-1306-compare-hint">{studio.hint}</p>
        </div>
        <div className="finops-1306-compare-cell" data-testid="finops-compare-provider">
          <p className="finops-1306-compare-label">Coût fournisseur</p>
          <p className="finops-1306-compare-value">{provider.value}</p>
          <p className="finops-1306-compare-hint">{provider.hint}</p>
        </div>
        <div className="finops-1306-compare-cell" data-testid="finops-compare-period">
          <p className="finops-1306-compare-label">Période de comparaison</p>
          <p className="finops-1306-compare-value finops-1306-compare-value-sm">{period}</p>
          <p className="finops-1306-compare-hint">UTC</p>
        </div>
        <div className="finops-1306-compare-cell" data-testid="finops-compare-status">
          <p className="finops-1306-compare-label">Comparabilité</p>
          <p className="finops-1306-compare-value">
            <span className={`finops-1306-compare-badge ${badgeClass}`}>{badge}</span>
          </p>
          <p className="finops-1306-compare-hint">
            Fraîcheur : {freshness}
            {recon.freshness.snapshotCount > 0
              ? ` · ${recon.freshness.snapshotCount} collecte${recon.freshness.snapshotCount > 1 ? "s" : ""}`
              : ""}
          </p>
        </div>
      </div>
      {delta ? (
        <p className="finops-1306-compare-delta" data-testid="finops-compare-delta">
          {delta}
        </p>
      ) : null}
      {messages.length > 0 ? (
        <ul className="finops-1306-compare-messages" data-testid="finops-compare-messages">
          {messages.map((m) => (
            <li key={m}>{m}</li>
          ))}
        </ul>
      ) : null}
    </aside>
  );
}

function WorksTable({ works }: { works: FinOpsWorkListItem[] }) {
  return (
    <div className="finops-1306-table-wrap" data-testid="finops-works-table">
      <h2 className="finops-1306-table-title">Travaux récents</h2>
      {works.length === 0 ? (
        <p className="finops-1306-state" data-testid="finops-works-empty">
          Aucun travail cognitif lié sur la période.
        </p>
      ) : (
        <table className="finops-1306-table">
          <thead>
            <tr>
              <th>Travail</th>
              <th>Projet</th>
              <th>Modèles</th>
              <th>Tokens</th>
              <th>Coût estimé</th>
              <th>Statut</th>
              <th>Détail</th>
            </tr>
          </thead>
          <tbody>
            {works.map((w) => (
              <tr key={w.cognitiveWorkId} data-testid={`finops-work-row-${w.cognitiveWorkId}`}>
                <td>{w.title}</td>
                <td>{w.projectName ?? "—"}</td>
                <td>{w.modelsLabel}</td>
                <td>{cellTokens(w.tokens)}</td>
                <td>{formatMeasuredUsd(w.estimatedCostUsd)}</td>
                <td>{w.statusLabel}</td>
                <td>
                  <Link
                    className="finops-1306-link"
                    href={`/settings/consumption/travaux/${w.cognitiveWorkId}`}
                  >
                    Voir le détail
                  </Link>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
}