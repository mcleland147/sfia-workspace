"use client";

import { useCallback, useEffect, useId, useMemo, useState } from "react";
import {
  getProductSynthesisAction,
  listProductSynthesesAction,
  searchProductSynthesesAction,
  type ProductSynthesisListItem,
} from "@/features/project-assistant/synthesisActions";
import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";
import {
  formatSynthesisGeneratedAt,
  presentSynthesisStatus,
  presentSynthesisVerdictLabel,
  SYNTHESIS_SECTION_SPECS,
} from "./synthesisPresentation";
import styles from "./SynthesesSurface.module.css";

export type SynthesesSurfaceProps = {
  projectId: string;
  initialSynthesisId?: string | null;
  onReturnToOverview: () => void;
};

function verdictTone(
  label: ProductSynthesisProjection["verdictLabel"],
): "ok" | "warn" | "danger" | undefined {
  switch (label) {
    case "atteint":
      return "ok";
    case "echec":
      return "danger";
    case "non_prouve":
    case "indetermine":
      return "warn";
    default:
      return undefined;
  }
}

export function SynthesesSurface({
  projectId,
  initialSynthesisId,
  onReturnToOverview,
}: SynthesesSurfaceProps) {
  const searchId = useId();
  const [items, setItems] = useState<readonly ProductSynthesisListItem[]>([]);
  const [query, setQuery] = useState("");
  const [searchBusy, setSearchBusy] = useState(false);
  const [listReady, setListReady] = useState(false);
  const [loadError, setLoadError] = useState<string | null>(null);
  const [selectedId, setSelectedId] = useState<string | null>(
    initialSynthesisId ?? null,
  );
  const [detail, setDetail] = useState<ProductSynthesisProjection | null>(null);
  const [detailBusy, setDetailBusy] = useState(false);
  const [mobileShowDetail, setMobileShowDetail] = useState(
    Boolean(initialSynthesisId),
  );

  const loadFullList = useCallback(async () => {
    setLoadError(null);
    setListReady(false);
    const result = await listProductSynthesesAction({ projectId });
    if (!result.ok) {
      setLoadError(result.message);
      setItems([]);
      setListReady(true);
      return;
    }
    setItems(result.items);
    setSelectedId((prev) => {
      if (prev && result.items.some((i) => i.synthesisId === prev)) {
        return prev;
      }
      return result.items[0]?.synthesisId ?? null;
    });
    setListReady(true);
  }, [projectId]);

  useEffect(() => {
    void loadFullList();
  }, [loadFullList]);

  useEffect(() => {
    if (initialSynthesisId) {
      setSelectedId(initialSynthesisId);
      setMobileShowDetail(true);
    }
  }, [initialSynthesisId]);

  useEffect(() => {
    let cancelled = false;
    if (!selectedId) {
      setDetail(null);
      return;
    }
    setDetailBusy(true);
    void getProductSynthesisAction({ projectId, synthesisId: selectedId }).then(
      (result) => {
        if (cancelled) return;
        setDetailBusy(false);
        if (result.ok) setDetail(result.synthesis);
        else {
          setDetail(null);
          setLoadError(result.message);
        }
      },
    );
    return () => {
      cancelled = true;
    };
  }, [projectId, selectedId]);

  useEffect(() => {
    const trimmed = query.trim();
    if (!trimmed) {
      void loadFullList();
      return;
    }
    const handle = window.setTimeout(() => {
      setSearchBusy(true);
      void searchProductSynthesesAction({ projectId, query: trimmed }).then(
        (result) => {
          setSearchBusy(false);
          if (result.ok) setItems(result.items);
          else setLoadError(result.message);
        },
      );
    }, 280);
    return () => window.clearTimeout(handle);
  }, [projectId, query, loadFullList]);

  const listEmpty =
    listReady && items.length === 0 && !searchBusy && !loadError;

  const selectedListItem = useMemo(
    () => items.find((i) => i.synthesisId === selectedId) ?? null,
    [items, selectedId],
  );

  const openDetailMobile = (synthesisId: string) => {
    setSelectedId(synthesisId);
    setMobileShowDetail(true);
  };

  return (
    <div
      className={styles.root}
      data-testid="project-syntheses-surface"
      data-mobile-detail={mobileShowDetail ? "true" : "false"}
    >
      {loadError ? (
        <p className={styles.empty} role="alert">
          {loadError}
        </p>
      ) : null}

      {!listReady && !loadError ? (
        <p className={styles.empty} data-testid="project-syntheses-loading">
          Chargement des synthèses…
        </p>
      ) : null}

      {listEmpty ? (
        <div className={styles.emptyPane}>
          <header className={styles.contextualHead}>
            <button
              type="button"
              className={styles.backLink}
              onClick={onReturnToOverview}
              data-testid="project-syntheses-return-overview"
            >
              ← Retour à l&apos;Aperçu
            </button>
            <h2 className={styles.title}>Synthèses</h2>
            <p className={styles.subtitle}>
              Analyses complètes produites après un travail significatif du
              projet.
            </p>
          </header>
          <p className={styles.empty} data-testid="project-syntheses-empty">
            Aucune synthèse produit n&apos;est encore disponible. Elle apparaît
            automatiquement après un résultat de travail qualifié — elle n&apos;est
            pas inventée depuis la conversation.
          </p>
        </div>
      ) : (
        <div className={styles.body}>
          <div
            className={styles.listCol}
            data-mobile-hidden={mobileShowDetail ? "true" : "false"}
          >
            {/* B1 — header/search live in the left contextual pane */}
            <header className={styles.contextualHead}>
              <button
                type="button"
                className={styles.backLink}
                onClick={onReturnToOverview}
                data-testid="project-syntheses-return-overview"
              >
                ← Retour à l&apos;Aperçu
              </button>
              <h2 className={styles.title}>Synthèses</h2>
              <p className={styles.subtitle}>
                Analyses complètes produites après un travail significatif du
                projet.
              </p>
            </header>

            <div className={styles.listHead}>
              <label className={styles.searchLabel} htmlFor={searchId}>
                Rechercher dans les synthèses
              </label>
              <input
                id={searchId}
                type="search"
                className={styles.searchInput}
                data-testid="project-syntheses-search"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                placeholder="Rechercher dans les titres et le contenu…"
                autoComplete="off"
              />
            </div>
            {searchBusy ? (
              <p className={styles.loading}>Recherche…</p>
            ) : null}
            <ul className={styles.list} data-testid="project-syntheses-list">
              {items.map((item) => (
                <li key={item.synthesisId} className={styles.listItem}>
                  <button
                    type="button"
                    className={styles.listButton}
                    data-testid="project-syntheses-item"
                    data-synthesis-id={item.synthesisId}
                    data-selected={
                      item.synthesisId === selectedId ? "true" : "false"
                    }
                    aria-current={
                      item.synthesisId === selectedId ? "true" : undefined
                    }
                    onClick={() => {
                      setSelectedId(item.synthesisId);
                      if (
                        typeof window !== "undefined" &&
                        window.matchMedia("(max-width: 767px)").matches
                      ) {
                        setMobileShowDetail(true);
                      }
                    }}
                    onKeyDown={(e) => {
                      if (e.key === "Enter" || e.key === " ") {
                        e.preventDefault();
                        openDetailMobile(item.synthesisId);
                      }
                    }}
                  >
                    <span className={styles.itemTitle}>{item.title}</span>
                    <span className={styles.itemMetaRow}>
                      <span
                        className={styles.itemVerdict}
                        data-tone={verdictTone(item.verdictLabel)}
                      >
                        {presentSynthesisVerdictLabel(item.verdictLabel)}
                      </span>
                      <span className={styles.itemMeta}>
                        {formatSynthesisGeneratedAt(item.generatedAt)}
                      </span>
                    </span>
                  </button>
                </li>
              ))}
            </ul>
          </div>

          <div
            className={styles.detailCol}
            data-mobile-hidden={mobileShowDetail ? "false" : "true"}
            data-testid="project-syntheses-detail"
          >
            {mobileShowDetail ? (
              <div className={`${styles.mobileBackRow} ${styles.detailOnly}`}>
                <button
                  type="button"
                  className={styles.backBtn}
                  data-testid="project-syntheses-back"
                  onClick={() => setMobileShowDetail(false)}
                >
                  ← Synthèses
                </button>
              </div>
            ) : null}

            {detailBusy && !detail ? (
              <p className={styles.loading}>Chargement de la synthèse…</p>
            ) : null}

            {detail ? (
              <div className={styles.detailInner}>
                <header className={styles.detailHead}>
                  <div className={styles.detailChips}>
                    <span
                      className={styles.chip}
                      data-tone={verdictTone(detail.verdictLabel)}
                    >
                      {presentSynthesisVerdictLabel(detail.verdictLabel)}
                    </span>
                    <span className={styles.chip}>
                      {presentSynthesisStatus(detail.status)}
                    </span>
                    <span className={styles.chip}>
                      {formatSynthesisGeneratedAt(detail.generatedAt)}
                    </span>
                  </div>
                  <h3 className={styles.detailTitle}>{detail.title}</h3>
                  <p className={styles.detailSubject}>{detail.subject}</p>
                </header>

                <div className={styles.sections}>
                  {SYNTHESIS_SECTION_SPECS.map((spec) => (
                    <section
                      key={spec.key}
                      className={styles.section}
                      data-testid={`project-syntheses-section-${spec.testIdSuffix}`}
                      aria-labelledby={`syn-section-${spec.key}`}
                    >
                      <h4
                        className={styles.sectionTitle}
                        id={`syn-section-${spec.key}`}
                      >
                        <span className={styles.sectionOrdinal} aria-hidden="true">
                          {spec.ordinal}
                        </span>
                        {spec.label}
                      </h4>
                      <p className={styles.sectionBody}>
                        {detail.sections[spec.key]}
                      </p>
                    </section>
                  ))}
                </div>
              </div>
            ) : selectedListItem && !detailBusy ? (
              <p className={styles.empty}>
                Impossible d&apos;afficher cette synthèse.
              </p>
            ) : !selectedId ? (
              <p className={styles.empty}>
                Sélectionnez une synthèse dans la liste.
              </p>
            ) : null}
          </div>
        </div>
      )}
    </div>
  );
}
