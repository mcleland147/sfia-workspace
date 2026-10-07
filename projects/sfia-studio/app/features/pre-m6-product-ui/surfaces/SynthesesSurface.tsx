"use client";

import {
  useCallback,
  useEffect,
  useId,
  useMemo,
  useRef,
  useState,
} from "react";
import {
  getProductSynthesisAction,
  listProductSynthesesAction,
  searchProductSynthesesAction,
  type ProductSynthesisListItem,
} from "@/features/project-assistant/synthesisActions";
import type { ProductSynthesisProjection } from "@/lib/oa/synthesis";
import {
  formatSynthesisGeneratedAt,
  formatVerifiedElementsCount,
  presentSynthesisVerdictLabel,
  SYNTHESIS_SECTION_SPECS,
} from "./synthesisPresentation";
import styles from "./SynthesesSurface.module.css";

const BODY_SECTION_SPECS = SYNTHESIS_SECTION_SPECS.filter(
  (spec) => spec.key !== "verified",
);
const VERIFIED_SECTION_SPEC = SYNTHESIS_SECTION_SPECS.find(
  (spec) => spec.key === "verified",
)!;

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
  const detailScrollRef = useRef<HTMLDivElement | null>(null);
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
  const [detailScrollUi, setDetailScrollUi] = useState<{
    active: boolean;
    thumbTop: number;
    thumbHeight: number;
  }>({ active: false, thumbTop: 0, thumbHeight: 0 });

  const verifiedCount = detail?.sourceBindings.evidenceIds.length ?? 0;

  const syncDetailScrollUi = useCallback(() => {
    const el = detailScrollRef.current;
    if (!el) {
      setDetailScrollUi({ active: false, thumbTop: 0, thumbHeight: 0 });
      return;
    }
    const { scrollTop, scrollHeight, clientHeight } = el;
    const overflow = scrollHeight - clientHeight;
    if (overflow <= 8 || clientHeight <= 0) {
      setDetailScrollUi({ active: false, thumbTop: 0, thumbHeight: 0 });
      return;
    }
    const track = Math.max(clientHeight - 32, 1);
    const thumbHeight = Math.max(
      32,
      Math.round((clientHeight / scrollHeight) * track),
    );
    const maxTop = Math.max(track - thumbHeight, 0);
    const thumbTop = Math.round((scrollTop / overflow) * maxTop);
    setDetailScrollUi({ active: true, thumbTop, thumbHeight });
  }, []);

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

  // Initial/top state: never auto-scroll to lower sections on selection change.
  useEffect(() => {
    const el = detailScrollRef.current;
    if (el) el.scrollTop = 0;
    syncDetailScrollUi();
  }, [selectedId, detail?.synthesisId, syncDetailScrollUi]);

  useEffect(() => {
    const el = detailScrollRef.current;
    if (!el) return;
    syncDetailScrollUi();
    const ro =
      typeof ResizeObserver !== "undefined"
        ? new ResizeObserver(() => syncDetailScrollUi())
        : null;
    ro?.observe(el);
    window.addEventListener("resize", syncDetailScrollUi);
    return () => {
      ro?.disconnect();
      window.removeEventListener("resize", syncDetailScrollUi);
    };
  }, [syncDetailScrollUi, detail?.synthesisId, detailBusy]);

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
                    <span className={styles.itemTop}>
                      <span className={styles.itemTitle}>{item.title}</span>
                      <span
                        className={styles.itemVerdict}
                        data-tone={verdictTone(item.verdictLabel)}
                      >
                        {presentSynthesisVerdictLabel(item.verdictLabel)}
                      </span>
                    </span>
                    <span className={styles.itemMeta}>
                      <span
                        className={styles.itemMetaVerdict}
                        data-tone={verdictTone(item.verdictLabel)}
                      >
                        {presentSynthesisVerdictLabel(item.verdictLabel)}
                      </span>
                      <span className={styles.itemMetaSep} aria-hidden="true">
                        {" "}
                        ·{" "}
                      </span>
                      {formatSynthesisGeneratedAt(item.generatedAt)}
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
                  <div className={styles.detailMeta}>
                    <span
                      className={styles.chip}
                      data-tone={verdictTone(detail.verdictLabel)}
                    >
                      {presentSynthesisVerdictLabel(detail.verdictLabel)}
                    </span>
                    <span className={styles.detailTime}>
                      {formatSynthesisGeneratedAt(detail.generatedAt)}
                    </span>
                  </div>
                  <h3 className={styles.detailTitle}>{detail.title}</h3>
                  <p className={styles.detailSubject}>{detail.subject}</p>
                </header>

                {/*
                  Figma 316:2 / 164:3 — Synthesis Scroll: detail body scrolls;
                  header stays structured. Overlay OS scrollbars are often
                  invisible — a thin indicator mirrors real scroll metrics.
                */}
                <div className={styles.detailScrollWrap}>
                  <div
                    ref={detailScrollRef}
                    className={styles.detailScroll}
                    data-testid="project-syntheses-detail-scroll"
                    onScroll={syncDetailScrollUi}
                  >
                    <div className={styles.sections}>
                      {BODY_SECTION_SPECS.map((spec) => (
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
                            <span
                              className={styles.sectionOrdinal}
                              aria-hidden="true"
                            >
                              {spec.ordinal}
                            </span>
                            {spec.label}
                          </h4>
                          <p className={styles.sectionBody}>
                            {detail.sections[spec.key]}
                          </p>
                        </section>
                      ))}

                      <section
                        className={`${styles.section} ${styles.verifiedCard}`}
                        data-testid={`project-syntheses-section-${VERIFIED_SECTION_SPEC.testIdSuffix}`}
                        aria-labelledby={`syn-section-${VERIFIED_SECTION_SPEC.key}`}
                      >
                        <div className={styles.verifiedTop}>
                          <h4
                            className={styles.sectionTitle}
                            id={`syn-section-${VERIFIED_SECTION_SPEC.key}`}
                          >
                            <span
                              className={styles.sectionOrdinal}
                              aria-hidden="true"
                            >
                              {VERIFIED_SECTION_SPEC.ordinal}
                            </span>
                            {VERIFIED_SECTION_SPEC.label}
                          </h4>
                          <span
                            className={styles.verifiedCount}
                            data-testid="project-syntheses-verified-count"
                          >
                            {formatVerifiedElementsCount(verifiedCount)}
                          </span>
                        </div>
                        <p
                          className={styles.verifiedBody}
                          data-testid="project-syntheses-verified-summary"
                        >
                          {detail.sections.verified}
                        </p>
                        {/*
                          PRODUCT-HONEST QUALIFIED DIFFERENCE vs Figma 316:2:
                          no supported Product destination for "Voir le détail →"
                          on verified evidence — omit dead CTA.
                        */}
                      </section>
                    </div>
                  </div>
                  {detailScrollUi.active ? (
                    <div
                      className={styles.detailScrollTrack}
                      data-testid="project-syntheses-scroll-indicator"
                      aria-hidden="true"
                    >
                      <div
                        className={styles.detailScrollThumb}
                        style={{
                          transform: `translateY(${detailScrollUi.thumbTop}px)`,
                          height: detailScrollUi.thumbHeight,
                        }}
                      />
                    </div>
                  ) : null}
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
