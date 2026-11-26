"use client";

import Link from "next/link";
import { useCallback, useEffect, useState } from "react";
import type { FinOpsWorkDetailDto } from "@/domains/finops/usage-read-service";
import {
  displayModelShort,
  formatIntegerFr,
  formatMeasuredTokens,
  formatMeasuredUsd,
} from "@/domains/finops/usage-projection";
import "./finops-consumption.css";

export function FinOpsWorkDetailPanel({ workId }: { workId: string }) {
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [detail, setDetail] = useState<FinOpsWorkDetailDto | null>(null);

  const refresh = useCallback(async () => {
    setLoading(true);
    setError(null);
    try {
      const res = await fetch(`/api/finops/works/${workId}`);
      if (!res.ok) {
        const j = await res.json().catch(() => ({}));
        throw new Error(j.message ?? "Travail introuvable");
      }
      setDetail((await res.json()) as FinOpsWorkDetailDto);
    } catch (e) {
      setDetail(null);
      setError(e instanceof Error ? e.message : "Erreur");
    } finally {
      setLoading(false);
    }
  }, [workId]);

  useEffect(() => {
    void refresh();
  }, [refresh]);

  const requestsDisplay =
    detail?.kpis.providerRequests.kind === "known"
      ? formatIntegerFr(detail.kpis.providerRequests.value)
      : "—";
  const segmentsDisplay =
    detail?.kpis.segmentCount.kind === "known"
      ? formatIntegerFr(detail.kpis.segmentCount.value)
      : "—";

  return (
    <div className="finops-1306-page" data-testid="finops-work-detail-page">
      <div className="finops-1306">
        <header className="finops-1306-header">
          <p className="finops-1306-eyebrow">PARAMÈTRES / OBSERVABILITÉ</p>
          <h1 className="finops-1306-title">Consommation et coûts</h1>
          <p className="finops-1306-lead">
            Inspection d&apos;un travail cognitif
            {detail?.projectName ? ` · ${detail.projectName}` : ""}
          </p>
        </header>

        <p className="finops-1306-banner" data-testid="finops-detail-disclaimer">
          Les consommations non observées restent inconnues — jamais présentées comme nulles.
        </p>

        <Link href="/settings/consumption" className="finops-1306-back" data-testid="finops-back">
          ← Retour aux travaux
        </Link>

        {loading ? (
          <p className="finops-1306-state" data-testid="finops-detail-loading">
            Chargement…
          </p>
        ) : null}
        {error ? (
          <p className="finops-1306-state" role="alert">
            {error}
          </p>
        ) : null}

        {detail ? (
          <>
            <h2 className="text-lg font-semibold m-0" data-testid="finops-work-title">
              {detail.title} · {detail.statusLabel}
            </h2>

            <div className="finops-1306-kpis" data-testid="finops-detail-kpis">
              <article className="finops-1306-kpi">
                <p className="finops-1306-kpi-label">Coût estimé</p>
                <p className="finops-1306-kpi-value">
                  {formatMeasuredUsd(detail.kpis.estimatedCostUsd)}
                </p>
                <p className="finops-1306-kpi-sub">USD · frais outils inclus si connus</p>
              </article>
              <article className="finops-1306-kpi">
                <p className="finops-1306-kpi-label">Tokens</p>
                <p className="finops-1306-kpi-value">
                  {formatMeasuredTokens(detail.kpis.totalTokens)}
                </p>
                <p className="finops-1306-kpi-sub">Entrée + sortie</p>
              </article>
              <article className="finops-1306-kpi">
                <p className="finops-1306-kpi-label">Requêtes</p>
                <p className="finops-1306-kpi-value">{requestsDisplay}</p>
                <p className="finops-1306-kpi-sub">Requêtes fournisseur observées</p>
              </article>
              <article className="finops-1306-kpi">
                <p className="finops-1306-kpi-label">Segments</p>
                <p className="finops-1306-kpi-value">{segmentsDisplay}</p>
                <p className="finops-1306-kpi-sub">Même travail cognitif</p>
              </article>
            </div>

            <section className="finops-1306-panel" data-testid="finops-segments">
              <h2>Allocation des ressources par segment</h2>
              {detail.segments.length === 0 ? (
                <p className="finops-1306-state">Aucun segment observé pour ce travail.</p>
              ) : (
                <div className="finops-1306-segments">
                  {detail.segments.map((s) => (
                    <div
                      key={s.segmentIndex}
                      className="finops-1306-segment-row"
                      data-testid={`finops-segment-${s.segmentIndex}`}
                    >
                      <span>{String(s.segmentIndex + 1).padStart(2, "0")}</span>
                      <span>{s.label}</span>
                      <span>
                        {displayModelShort(s.model) ?? "—"}
                        {s.effort ? ` · ${s.effort}` : ""}
                      </span>
                      <span>{formatMeasuredTokens(s.tokens)}</span>
                      <span>{formatMeasuredUsd(s.estimatedCostUsd)}</span>
                    </div>
                  ))}
                </div>
              )}
              {detail.tariffVersion ? (
                <p className="finops-1306-kpi-sub mt-3">
                  Tarif de référence : {detail.tariffVersion}
                </p>
              ) : null}
            </section>
          </>
        ) : null}
      </div>
    </div>
  );
}