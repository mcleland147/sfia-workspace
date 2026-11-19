"use client";

import { useEffect, useMemo, useState } from "react";
import { SafeMarkdown } from "@/components/SafeMarkdown";

export type JournalSubject = {
  id: string;
  title: string;
  status: string;
  parentSubjectId: string | null;
  originatedFromSubjectId: string | null;
  summary?: {
    revisionNumber: number;
    summaryMarkdown: string;
  } | null;
};

export type JournalAcquis = {
  id: string;
  kind: string;
  statement: string;
  status: string;
  subjectId: string | null;
};

export type JournalOpenPoint = {
  id: string;
  statement: string;
  status: string;
  subjectId: string | null;
};

export type JournalDecision = {
  id: string;
  kind: string;
  state: string;
  scope: string;
  statement: string;
  objectRef: string;
  effectiveAt: string;
  createdAt: string;
  applicable?: boolean;
  supersededByDecisionId?: string | null;
  explanation?: {
    revisionNumber: number;
    explanationMarkdown: string;
    potentiallyStale?: boolean;
  } | null;
};

export type JournalRestriction = {
  id: string;
  targetKind: string;
  targetRef: string;
  status: string;
  originDecisionId: string | null;
};

export type JournalSourceLink = {
  ownerKind: "acquis" | "open_point" | "summary";
  ownerId: string;
  subjectId: string | null;
  sourceKind: string;
  sourceId?: string;
  documentId?: string;
  revisionId?: string;
  currentness: string;
  detail: string;
};

export type JournalContradiction = {
  leftAcquisId: string;
  rightAcquisId: string;
  subjectId: string | null;
  status: "UNRESOLVED";
  leftStatement: string;
  rightStatement: string;
  reason: string;
};

export type JournalNavState = {
  tab: "subjects" | "decisions";
  search: string;
  openPointsOnly: boolean;
  selectedSubjectId: string | null;
  selectedDecisionId: string | null;
  layout: "full" | "split" | "enlarged";
};

type Tab = "subjects" | "decisions";
type LayoutMode = "full" | "split" | "enlarged";

const COPY = {
  kicker: "ESPACE PROJET  /  JOURNAL",
  title: "Journal",
  subjectsSub:
    "La mémoire du projet, organisée par thèmes. Retrouvez l’essentiel sans remonter toute la conversation.",
  subjectsSubCompact: "La mémoire du projet, organisée par thèmes.",
  decisionsSub: "Comprendre ce qui a été arbitré et pourquoi.",
  themesLabel: "THÈMES DU PROJET",
  themesHint: "Organisation évolutive · entretenue par Nora",
  decisionsLabel: "DÉCISIONS DURABLES DU PROJET",
  searchSubjects: "Rechercher un sujet…",
  searchDecisions: "Rechercher une décision…",
  openPoints: "◌  Points ouverts",
  emptySubjects: "Aucun thème capitalisé pour l’instant. Les sujets apparaîtront ici lorsqu’ils seront durablement retenus.",
  emptyDecisions: "Aucune décision durable enregistrée pour ce projet.",
  searchEmptySubjects: "Aucun sujet ne correspond à cette recherche.",
  searchEmptyDecisions: "Aucune décision ne correspond à cette recherche.",
  memoryKicker: "MÉMOIRE DU PROJET   /   SUJET",
  decisionKicker: "DÉCISION DURABLE",
  synthesis: "LA SYNTHÈSE",
  retained: "CE QU’ON RETIENT",
  clarify: "À ÉCLAIRCIR",
  children: "SOUS-THÈMES",
  sources: "ÉCHANGE DE RÉFÉRENCE",
  continue: "CONTINUER LE TRAVAIL",
  continueCta: "Poursuivre ce sujet avec Nora",
  enlarge: "⤢ Agrandir",
  reduce: "Réduire la vue",
  close: "×",
  childrenTitle: "SOUS-SUJETS",
  matchesLabel: "SUJETS CORRESPONDANTS",
  openPointsLabel: "POINTS OUVERTS DU PROJET",
  whyMatch: "POURQUOI CE SUJET",
  pathOrigin: "CHEMIN D’ORIGINE",
  asideLabel: "REPÈRES",
  asideReading: "Lecture enrichie",
  asideNature: "NATURE",
  asideSources: "SOURCES",
  asideActions: "ACTIONS",
  parentComplement: "REPÈRE PARENT",
  openPointStatus: "OUVERT",
} as const;

function buildSubjectTree(subjects: JournalSubject[]) {
  const byParent = new Map<string | null, JournalSubject[]>();
  for (const s of subjects.filter((x) => x.status === "ACTIVE")) {
    const key = s.parentSubjectId;
    const bucket = byParent.get(key) ?? [];
    bucket.push(s);
    byParent.set(key, bucket);
  }
  for (const bucket of byParent.values()) {
    bucket.sort((a, b) => a.title.localeCompare(b.title, "fr"));
  }
  return byParent;
}

function subjectBreadcrumb(
  subjectId: string,
  byId: Map<string, JournalSubject>,
): string[] {
  const path: string[] = [];
  let current: string | null = subjectId;
  const guard = new Set<string>();
  while (current && !guard.has(current)) {
    guard.add(current);
    const row = byId.get(current);
    if (!row) break;
    path.unshift(row.title);
    current = row.parentSubjectId;
  }
  return path;
}

/** First editorial line from summary markdown — never invent content. */
function subjectBlurb(subject: JournalSubject): string {
  const raw = subject.summary?.summaryMarkdown?.trim() ?? "";
  if (!raw) return "";
  const line =
    raw
      .split(/\r?\n/)
      .map((l) => l.replace(/^#+\s*/, "").replace(/[*_`]/g, "").trim())
      .find((l) => l.length > 0) ?? "";
  return line.length > 160 ? `${line.slice(0, 157)}…` : line;
}

function decisionBlurb(d: JournalDecision): string {
  const expl = d.explanation?.explanationMarkdown?.trim() ?? "";
  if (expl) {
    const line = expl
      .split(/\r?\n/)
      .map((l) => l.replace(/^#+\s*/, "").replace(/[*_`]/g, "").trim())
      .find((l) => l.length > 0);
    if (line) return line.length > 140 ? `${line.slice(0, 137)}…` : line;
  }
  return d.statement.length > 140 ? `${d.statement.slice(0, 137)}…` : d.statement;
}

function decisionStatusLabel(d: JournalDecision): { label: string; tone: "ok" | "warn" | "muted" } {
  // D6 status must not collapse "non applicable" into "REMPLACÉE".
  if (d.supersededByDecisionId) {
    return { label: "REMPLACÉE", tone: "muted" };
  }
  const st = d.state.toUpperCase();
  if (st.includes("SUSPEND")) return { label: "SUSPENDUE", tone: "warn" };
  if (d.applicable === false) {
    return { label: "SUSPENDUE", tone: "warn" };
  }
  if (
    st.includes("ACTIVE") ||
    st.includes("EFFECTIVE") ||
    st.includes("APPLICABLE") ||
    st === "DECIDED" ||
    d.applicable === true
  ) {
    return { label: "EN VIGUEUR", tone: "ok" };
  }
  return { label: st || "D6", tone: "muted" };
}

export function ProjectJournal(props: {
  subjects: JournalSubject[];
  acquis: JournalAcquis[];
  openPoints: JournalOpenPoint[];
  decisions?: JournalDecision[];
  restrictions?: JournalRestriction[];
  sourceLinks?: JournalSourceLink[];
  contradictions?: JournalContradiction[];
  frameId?: string;
  initialNav?: JournalNavState | null;
  onNavChange?: (nav: JournalNavState) => void;
  onOpenMessage?: (messageId: string) => void;
  onOpenDocument?: (documentId: string, revisionId?: string | null) => void;
  onBackToThread?: () => void;
  /** Sas-only mutation affordance — project Journal stays read-oriented. */
  onRenameSubject?: (id: string, title: string) => void;
  splitSlot?: React.ReactNode;
}) {
  const [tab, setTab] = useState<Tab>(props.initialNav?.tab ?? "subjects");
  const [search, setSearch] = useState(props.initialNav?.search ?? "");
  const [openPointsOnly, setOpenPointsOnly] = useState(props.initialNav?.openPointsOnly ?? false);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(
    props.initialNav?.selectedSubjectId ?? null,
  );
  const [selectedDecisionId, setSelectedDecisionId] = useState<string | null>(
    props.initialNav?.selectedDecisionId ?? null,
  );
  const [layout, setLayout] = useState<LayoutMode>(props.initialNav?.layout ?? "full");
  const [expanded, setExpanded] = useState<Set<string>>(() => new Set());

  const decisions = useMemo(() => props.decisions ?? [], [props.decisions]);
  const restrictions = props.restrictions ?? [];
  const sourceLinks = props.sourceLinks ?? [];
  const contradictions = props.contradictions ?? [];

  useEffect(() => {
    props.onNavChange?.({
      tab,
      search,
      openPointsOnly,
      selectedSubjectId,
      selectedDecisionId,
      layout,
    });
    // Intentionally sync outward on nav field changes only.
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [tab, search, openPointsOnly, selectedSubjectId, selectedDecisionId, layout]);

  const tree = useMemo(() => buildSubjectTree(props.subjects), [props.subjects]);
  const byId = useMemo(
    () => new Map(props.subjects.map((s) => [s.id, s] as const)),
    [props.subjects],
  );

  const roots = tree.get(null) ?? [];

  // Expand parents that have children by default on first subject load.
  useEffect(() => {
    setExpanded((prev) => {
      if (prev.size > 0) return prev;
      const next = new Set<string>();
      for (const s of props.subjects) {
        if ((tree.get(s.id) ?? []).length > 0) next.add(s.id);
      }
      return next;
    });
  }, [props.subjects, tree]);

  const openBySubject = useMemo(() => {
    const map = new Map<string, number>();
    for (const o of props.openPoints) {
      if (o.status !== "OPEN" || !o.subjectId) continue;
      map.set(o.subjectId, (map.get(o.subjectId) ?? 0) + 1);
    }
    return map;
  }, [props.openPoints]);

  /** J-C08 — match title, summary, acquis and open points (reason surfaced on node). */
  const matchBySubject = useMemo(() => {
    const q = search.trim().toLowerCase();
    const map = new Map<string, string>();
    if (!q) return map;
    for (const s of props.subjects) {
      if (s.title.toLowerCase().includes(q)) map.set(s.id, "titre");
      else if ((s.summary?.summaryMarkdown ?? "").toLowerCase().includes(q)) map.set(s.id, "synthèse");
    }
    for (const a of props.acquis) {
      if (a.status !== "CURRENT" || !a.subjectId) continue;
      if (a.statement.toLowerCase().includes(q) && !map.has(a.subjectId)) map.set(a.subjectId, "acquis");
    }
    for (const o of props.openPoints) {
      if (o.status !== "OPEN" || !o.subjectId) continue;
      if (o.statement.toLowerCase().includes(q) && !map.has(o.subjectId)) {
        map.set(o.subjectId, "point ouvert");
      }
    }
    return map;
  }, [search, props.subjects, props.acquis, props.openPoints]);

  const currentAcquis = props.acquis.filter((a) => a.status === "CURRENT");
  const openPoints = props.openPoints.filter((o) => o.status === "OPEN");
  const emptySubjects =
    props.subjects.length === 0 && currentAcquis.length === 0 && openPoints.length === 0;

  const selectedSubject = selectedSubjectId ? byId.get(selectedSubjectId) : null;
  const selectedAcquis = selectedSubjectId
    ? currentAcquis.filter((a) => a.subjectId === selectedSubjectId)
    : [];
  const selectedOpen = selectedSubjectId
    ? openPoints.filter((o) => o.subjectId === selectedSubjectId)
    : [];
  const childSubjects = selectedSubjectId ? tree.get(selectedSubjectId) ?? [] : [];
  const selectedSources = selectedSubjectId
    ? sourceLinks.filter((s) => s.subjectId === selectedSubjectId)
    : [];
  const selectedContradictions = selectedSubjectId
    ? contradictions.filter((c) => c.subjectId === selectedSubjectId)
    : [];
  const activeRestrictions = restrictions.filter((r) => r.status === "ACTIVE");
  const historicalRestrictions = restrictions.filter((r) => r.status !== "ACTIVE");

  const selectedDecision =
    selectedDecisionId != null
      ? decisions.find((d) => d.id === selectedDecisionId) ?? null
      : null;

  /** J-C11 — match statement or explanation; never treat kind/label alone as a hit. */
  const filteredDecisions = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (tab !== "decisions" || !q) return decisions;
    return decisions.filter(
      (d) =>
        d.statement.toLowerCase().includes(q) ||
        (d.explanation?.explanationMarkdown.toLowerCase().includes(q) ?? false),
    );
  }, [decisions, search, tab]);

  const layoutMode: LayoutMode =
    layout === "enlarged"
      ? "enlarged"
      : (tab === "subjects" && selectedSubject) || (tab === "decisions" && selectedDecision)
        ? "split"
        : "full";

  const pickSubject = (id: string) => {
    setSelectedSubjectId(id);
    setLayout("split");
  };

  const pickDecision = (id: string) => {
    setSelectedDecisionId(id);
    setLayout("split");
  };

  const clearSelection = () => {
    setSelectedSubjectId(null);
    setSelectedDecisionId(null);
    setLayout("full");
  };

  const toggleExpand = (id: string, e: React.MouseEvent) => {
    e.stopPropagation();
    setExpanded((prev) => {
      const next = new Set(prev);
      if (next.has(id)) next.delete(id);
      else next.add(id);
      return next;
    });
  };

  const nodeVisible = (s: JournalSubject): boolean => {
    const openCount = openBySubject.get(s.id) ?? 0;
    if (openPointsOnly && openCount === 0) {
      const childOpen = (tree.get(s.id) ?? []).some((c) => nodeVisible(c));
      if (!childOpen) return false;
    }
    const q = search.trim();
    if (!q) return true;
    if (matchBySubject.has(s.id)) return true;
    const children = tree.get(s.id) ?? [];
    return children.some((c) => nodeVisible(c));
  };

  const showSearchEmpty =
    tab === "subjects" && search.trim().length > 0 && matchBySubject.size === 0;

  const showDecisionSearchEmpty =
    tab === "decisions" && search.trim().length > 0 && filteredDecisions.length === 0;

  const subtitle =
    tab === "decisions"
      ? COPY.decisionsSub
      : layoutMode === "full"
        ? COPY.subjectsSub
        : COPY.subjectsSubCompact;

  const isParentSelected = selectedSubject ? (tree.get(selectedSubject.id) ?? []).length > 0 : false;

  return (
    <div
      className={`journal-shell journal-layout-${layoutMode}`}
      data-figma-frame={props.frameId ?? "835:71"}
      data-testid="project-journal"
      data-journal-layout={layoutMode}
    >
      <div className="journal-main-column" hidden={layoutMode === "enlarged"}>
        <header className="journal-v4-head">
          <p className="journal-v4-kicker">{COPY.kicker}</p>
          <div className="journal-v4-title-row">
            <h1 className="journal-v4-title" data-testid="journal-title">
              {COPY.title}
            </h1>
            {props.onBackToThread ? (
              <button
                type="button"
                className="journal-v4-back-thread"
                data-testid="journal-back-thread"
                onClick={props.onBackToThread}
              >
                Retour au fil
              </button>
            ) : null}
          </div>
          <p className="journal-v4-sub" data-testid="journal-subtitle">
            {subtitle}
          </p>
        </header>

        <div className="journal-tabs" role="tablist" data-testid="journal-tabs">
          <button
            type="button"
            role="tab"
            aria-selected={tab === "subjects"}
            className={`journal-tab${tab === "subjects" ? " is-active" : ""}`}
            data-testid="journal-tab-subjects"
            onClick={() => {
              setTab("subjects");
              setSelectedDecisionId(null);
              if (!selectedSubjectId) setLayout("full");
            }}
          >
            Sujets
          </button>
          <button
            type="button"
            role="tab"
            aria-selected={tab === "decisions"}
            className={`journal-tab${tab === "decisions" ? " is-active" : ""}`}
            data-testid="journal-tab-decisions"
            onClick={() => {
              setTab("decisions");
              setSelectedSubjectId(null);
              if (!selectedDecisionId) setLayout("full");
            }}
          >
            Décisions
          </button>
        </div>

        <div className="journal-search-wrap">
          <span className="journal-search-icon" aria-hidden>
            ⌕
          </span>
          <input
            type="search"
            className="journal-search"
            data-testid="journal-search"
            placeholder={tab === "subjects" ? COPY.searchSubjects : COPY.searchDecisions}
            value={search}
            onChange={(e) => setSearch(e.target.value)}
          />
        </div>

        {tab === "subjects" ? (
          <div className="journal-section-bar">
            <p className="journal-section-label">{COPY.themesLabel}</p>
            {layoutMode === "full" ? (
              <p className="journal-section-hint">{COPY.themesHint}</p>
            ) : null}
            <button
              type="button"
              className={`journal-filter-open${openPointsOnly ? " is-active" : ""}`}
              data-testid="journal-filter-open-points"
              aria-pressed={openPointsOnly}
              onClick={() => setOpenPointsOnly((v) => !v)}
            >
              {COPY.openPoints}
            </button>
          </div>
        ) : (
          <div className="journal-section-bar">
            <p className="journal-section-label">{COPY.decisionsLabel}</p>
          </div>
        )}

        {tab === "subjects" ? (
          emptySubjects ? (
            <div className="journal-hierarchy journal-empty" data-testid="journal-empty-structure">
              <p className="journal-empty-copy">{COPY.emptySubjects}</p>
            </div>
          ) : showSearchEmpty ? (
            <div className="journal-hierarchy" data-testid="journal-tree">
              <p className="journal-empty-copy" data-testid="journal-search-empty">
                {COPY.searchEmptySubjects}
              </p>
            </div>
          ) : openPointsOnly ? (
            <OpenPointsTransversalList
              openPoints={openPoints}
              byId={byId}
              selectedId={selectedSubjectId}
              onSelect={pickSubject}
            />
          ) : search.trim().length > 0 ? (
            <SubjectSearchResults
              matchBySubject={matchBySubject}
              byId={byId}
              selectedId={selectedSubjectId}
              onSelect={pickSubject}
            />
          ) : (
            <div className="journal-hierarchy" data-testid="journal-tree">
              {roots.map((s) =>
                nodeVisible(s) ? (
                  <SubjectHierarchyBlock
                    key={s.id}
                    subject={s}
                    tree={tree}
                    expanded={expanded}
                    selectedId={selectedSubjectId}
                    openBySubject={openBySubject}
                    matchBySubject={matchBySubject}
                    nodeVisible={nodeVisible}
                    onToggle={toggleExpand}
                    onSelect={pickSubject}
                  />
                ) : null,
              )}
              {props.onRenameSubject && selectedSubject ? (
                <button
                  type="button"
                  className="btn secondary"
                  data-testid="journal-rename-subject"
                  onClick={() => {
                    const t = window.prompt("Nouveau titre", selectedSubject.title);
                    if (t) props.onRenameSubject?.(selectedSubject.id, t);
                  }}
                >
                  Renommer le sujet
                </button>
              ) : null}
              {props.splitSlot}
            </div>
          )
        ) : (
          <DecisionList
            decisions={filteredDecisions}
            selectedId={selectedDecisionId}
            showEmpty={showDecisionSearchEmpty}
            emptyCopy={COPY.emptyDecisions}
            searchEmptyCopy={COPY.searchEmptyDecisions}
            onSelect={pickDecision}
          />
        )}
      </div>

      {layoutMode !== "full" ? (
        <section
          className={`journal-viewer${isParentSelected ? " is-parent" : ""}`}
          data-testid="journal-viewer"
          data-viewer-kind={tab === "subjects" ? (isParentSelected ? "parent" : "autonomous") : "decision"}
        >
          {tab === "subjects" && selectedSubject ? (
            <>
              <header className="journal-viewer-banner">
                <div className="journal-viewer-banner-text">
                  <p className="journal-viewer-kicker">{COPY.memoryKicker}</p>
                  <h2 className="journal-viewer-title" data-testid="journal-viewer-subject-title">
                    {selectedSubject.title}
                  </h2>
                  <SubjectBreadcrumb path={subjectBreadcrumb(selectedSubject.id, byId)} />
                  <p className="journal-viewer-lede">
                    {subjectBlurb(selectedSubject) ||
                      "Comprendre ce qu’on sait, ce qui reste ouvert et pourquoi."}
                  </p>
                  <span className="journal-viewer-type" data-testid="journal-viewer-subject-kind">
                    {isParentSelected ? "Sujet parent" : "Sujet autonome"}
                  </span>
                </div>
                <div className="journal-viewer-actions">
                  {layoutMode === "enlarged" ? (
                    <button
                      type="button"
                      className="journal-viewer-btn"
                      data-testid="journal-viewer-reduce"
                      onClick={() => setLayout("split")}
                    >
                      {COPY.reduce}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="journal-viewer-btn"
                      data-testid="journal-viewer-enlarge"
                      onClick={() => setLayout("enlarged")}
                    >
                      {COPY.enlarge}
                    </button>
                  )}
                  <button
                    type="button"
                    className="journal-viewer-btn journal-viewer-close"
                    data-testid="journal-viewer-close"
                    aria-label="Fermer"
                    onClick={clearSelection}
                  >
                    {COPY.close}
                  </button>
                </div>
              </header>

              <div className="journal-viewer-body">
                <div className="journal-viewer-layout">
                  <div className="journal-viewer-article">
                    <section className="journal-card journal-card-synthesis">
                      <p className="journal-card-kicker">{COPY.synthesis}</p>
                      {selectedSubject.summary?.summaryMarkdown ? (
                        <div data-testid="journal-subject-summary">
                          <SafeMarkdown content={selectedSubject.summary.summaryMarkdown} />
                        </div>
                      ) : (
                        <p className="journal-muted" data-testid="journal-subject-summary-empty">
                          Synthèse non encore disponible.
                        </p>
                      )}
                    </section>

                    {isParentSelected ? (
                      <section className="journal-card" data-testid="journal-parent-children">
                        <p className="journal-card-kicker">{COPY.childrenTitle}</p>
                        <ul className="journal-child-list">
                          {childSubjects.map((c, i) => (
                            <li key={c.id}>
                              <button
                                type="button"
                                className="journal-child-card"
                                data-testid={`journal-child-card-${c.id}`}
                                onClick={() => pickSubject(c.id)}
                              >
                                <span className="journal-child-num">{String(i + 1).padStart(2, "0")}</span>
                                <span className="journal-child-card-text">
                                  <span className="journal-child-card-title">{c.title}</span>
                                  {subjectBlurb(c) ? (
                                    <span className="journal-child-card-desc">{subjectBlurb(c)}</span>
                                  ) : null}
                                </span>
                                <span aria-hidden>↗</span>
                              </button>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ) : (
                      <div className="journal-card-row">
                        <section className="journal-card journal-card-half">
                          <p className="journal-card-kicker">{COPY.retained}</p>
                          {selectedAcquis.length === 0 ? (
                            <p className="journal-muted">Aucun acquis courant.</p>
                          ) : (
                            selectedAcquis.map((a) => (
                              <p key={a.id} className="journal-acquis-line" data-subject-id={a.subjectId ?? ""}>
                                {a.statement}
                              </p>
                            ))
                          )}
                        </section>
                        <section className="journal-card journal-card-half">
                          <p className="journal-card-kicker">{COPY.clarify}</p>
                          {selectedOpen.length === 0 ? (
                            <p className="journal-muted">Aucun point ouvert.</p>
                          ) : (
                            selectedOpen.map((o) => (
                              <p
                                key={o.id}
                                className="journal-open-line"
                                data-testid={`journal-open-point-${o.id}`}
                                data-subject-id={o.subjectId ?? ""}
                              >
                                {o.statement}
                              </p>
                            ))
                          )}
                        </section>
                      </div>
                    )}

                    {isParentSelected ? (
                      <section className="journal-parent-note" data-testid="journal-parent-complement">
                        <p className="journal-card-kicker">{COPY.parentComplement}</p>
                        <p>
                          Ce thème regroupe {childSubjects.length} sous-sujet
                          {childSubjects.length > 1 ? "s" : ""}. Ouvrez un axe pour lire ses acquis
                          et points ouverts.
                        </p>
                      </section>
                    ) : null}

                    {!isParentSelected && selectedContradictions.length > 0 ? (
                      <section className="journal-card" data-testid="journal-contradictions">
                        <p className="journal-card-kicker">CONTRADICTIONS</p>
                        {selectedContradictions.map((c) => (
                          <div
                            key={`${c.leftAcquisId}-${c.rightAcquisId}`}
                            data-testid={`journal-contradiction-${c.leftAcquisId}`}
                          >
                            <p className="journal-acquis-line">{c.reason}</p>
                          </div>
                        ))}
                      </section>
                    ) : null}

                    {selectedSources.length > 0 ? (
                      <section className="journal-card" data-testid="journal-sources">
                        <p className="journal-card-kicker">{COPY.sources}</p>
                        <ul className="journal-source-list">
                          {selectedSources.map((s) => (
                            <li key={`${s.ownerKind}-${s.ownerId}-${s.sourceId ?? s.revisionId ?? s.documentId}`}>
                              <SourceChip
                                link={s}
                                onOpenMessage={props.onOpenMessage}
                                onOpenDocument={props.onOpenDocument}
                              />
                            </li>
                          ))}
                        </ul>
                      </section>
                    ) : null}

                    {search.trim() && !isParentSelected ? (
                      <section className="journal-card" data-testid="journal-match-context">
                        <p className="journal-card-kicker">{COPY.whyMatch}</p>
                        <p className="journal-muted">
                          Correspondance : {matchBySubject.get(selectedSubject.id) ?? "sélection"}
                        </p>
                        <p className="journal-card-kicker" style={{ marginTop: 12 }}>
                          {COPY.pathOrigin}
                        </p>
                        <p className="journal-muted">
                          {subjectBreadcrumb(selectedSubject.id, byId).join(" › ")}
                        </p>
                      </section>
                    ) : null}

                    {props.onBackToThread ? (
                      <button
                        type="button"
                        className="journal-continue"
                        data-testid="journal-continue-travail"
                        onClick={props.onBackToThread}
                      >
                        <span>
                          <span className="journal-card-kicker">{COPY.continue}</span>
                          <span className="journal-continue-cta">{COPY.continueCta}</span>
                        </span>
                        <span aria-hidden>↗</span>
                      </button>
                    ) : null}
                  </div>

                  <aside className="journal-viewer-aside" data-testid="journal-viewer-aside">
                    <p className="journal-aside-label">{COPY.asideLabel}</p>
                    <p className="journal-aside-title">{COPY.asideReading}</p>
                    <hr className="journal-aside-sep" />
                    <p className="journal-aside-meta-label">{COPY.asideNature}</p>
                    <p className="journal-aside-meta-value">
                      {isParentSelected ? "Sujet parent" : "Sujet autonome"}
                    </p>
                    <p className="journal-aside-meta-desc">
                      {isParentSelected
                        ? "Thème structurant avec sous-sujets consultables."
                        : "Fiche dédiée à un axe capitalisé du projet."}
                    </p>
                    <hr className="journal-aside-sep" />
                    <p className="journal-aside-meta-label">{COPY.asideSources}</p>
                    <p className="journal-aside-meta-value">
                      {selectedSources.length > 0
                        ? `${selectedSources.length} source${selectedSources.length > 1 ? "s" : ""} liée${selectedSources.length > 1 ? "s" : ""}`
                        : "Sources disponibles via les acquis"}
                    </p>
                    {selectedSources.slice(0, 3).map((s) => (
                      <p key={`${s.ownerId}-${s.sourceId}`} className="journal-aside-meta-desc">
                        {s.sourceKind} · {s.currentness}
                      </p>
                    ))}
                    <hr className="journal-aside-sep" />
                    <p className="journal-aside-meta-label">{COPY.asideActions}</p>
                    {props.onBackToThread ? (
                      <button
                        type="button"
                        className="journal-continue"
                        data-testid="journal-aside-continue"
                        onClick={props.onBackToThread}
                      >
                        <span className="journal-continue-cta">Poursuivre avec Nora</span>
                        <span aria-hidden>↗</span>
                      </button>
                    ) : null}
                  </aside>
                </div>
              </div>
            </>
          ) : null}

          {tab === "decisions" && selectedDecision ? (
            <>
              <header className="journal-viewer-banner">
                <div className="journal-viewer-banner-text">
                  <p className="journal-viewer-kicker">{COPY.decisionKicker}</p>
                  <h2 className="journal-viewer-title" data-testid="journal-decision-viewer-title">
                    {selectedDecision.statement || selectedDecision.kind}
                  </h2>
                  <p className="journal-viewer-lede">{decisionBlurb(selectedDecision)}</p>
                  <span className={`journal-status journal-status-${decisionStatusLabel(selectedDecision).tone}`}>
                    {decisionStatusLabel(selectedDecision).label}
                  </span>
                </div>
                <div className="journal-viewer-actions">
                  {layoutMode === "enlarged" ? (
                    <button
                      type="button"
                      className="journal-viewer-btn"
                      data-testid="journal-viewer-reduce"
                      onClick={() => setLayout("split")}
                    >
                      {COPY.reduce}
                    </button>
                  ) : (
                    <button
                      type="button"
                      className="journal-viewer-btn"
                      data-testid="journal-viewer-enlarge"
                      onClick={() => setLayout("enlarged")}
                    >
                      {COPY.enlarge}
                    </button>
                  )}
                  <button
                    type="button"
                    className="journal-viewer-btn journal-viewer-close"
                    data-testid="journal-viewer-close"
                    aria-label="Fermer"
                    onClick={clearSelection}
                  >
                    {COPY.close}
                  </button>
                </div>
              </header>
              <div className="journal-viewer-body" data-testid="journal-decision-viewer">
                <div className="journal-viewer-layout">
                  <div className="journal-viewer-article">
                    <section className="journal-card journal-card-synthesis">
                      <p className="journal-card-kicker">LE CHOIX RETENU</p>
                      <p className="journal-acquis-line">{selectedDecision.statement || "—"}</p>
                      <p className="journal-muted" data-testid="journal-decision-applicability">
                        {selectedDecision.scope}
                        {selectedDecision.applicable === false
                          ? " · non applicable / historique"
                          : " · applicable"}
                        {selectedDecision.supersededByDecisionId ? " · remplacé" : ""}
                      </p>
                    </section>
                    <section className="journal-card">
                      <p className="journal-card-kicker">POURQUOI CE CHOIX</p>
                      {selectedDecision.explanation?.explanationMarkdown ? (
                        <>
                          {selectedDecision.explanation.potentiallyStale ? (
                            <p className="journal-warn" data-testid="journal-explanation-stale">
                              Explication potentiellement périmée.
                            </p>
                          ) : null}
                          <SafeMarkdown content={selectedDecision.explanation.explanationMarkdown} />
                        </>
                      ) : (
                        <p className="journal-muted" data-testid="journal-explanation-empty">
                          Explication contextuelle non encore disponible.
                        </p>
                      )}
                    </section>
                    {activeRestrictions.length > 0 ? (
                      <section className="journal-card">
                        <p className="journal-card-kicker">RESTRICTIONS ACTIVES</p>
                        <ul className="journal-restriction-list">
                          {activeRestrictions.map((r) => (
                            <li key={r.id} data-testid={`journal-restriction-${r.id}`}>
                              {r.targetKind} · {r.targetRef}
                            </li>
                          ))}
                        </ul>
                      </section>
                    ) : null}
                    {historicalRestrictions.length > 0 ? (
                      <section className="journal-card">
                        <p className="journal-card-kicker">RESTRICTIONS HISTORIQUES</p>
                        <ul className="journal-restriction-list">
                          {historicalRestrictions.map((r) => (
                            <li key={r.id} data-testid={`journal-restriction-hist-${r.id}`}>
                              {r.targetKind} · {r.targetRef}
                            </li>
                          ))}
                        </ul>
                      </section>
                    ) : null}
                  </div>
                  <aside className="journal-viewer-aside" data-testid="journal-decision-aside">
                    <p className="journal-aside-label">{COPY.asideLabel}</p>
                    <p className="journal-aside-title">Gouvernance D6</p>
                    <hr className="journal-aside-sep" />
                    <p className="journal-aside-meta-label">STATUT</p>
                    <p className="journal-aside-meta-value">{decisionStatusLabel(selectedDecision).label}</p>
                    <p className="journal-aside-meta-label">PORTÉE</p>
                    <p className="journal-aside-meta-value">{selectedDecision.scope}</p>
                    <p className="journal-aside-meta-label">ÉTAT</p>
                    <p className="journal-aside-meta-value">{selectedDecision.state}</p>
                    {selectedDecision.supersededByDecisionId ? (
                      <>
                        <p className="journal-aside-meta-label">REMPLACÉE PAR</p>
                        <p className="journal-aside-meta-desc">{selectedDecision.supersededByDecisionId}</p>
                      </>
                    ) : null}
                    <hr className="journal-aside-sep" />
                    <p className="journal-aside-meta-label">{COPY.asideActions}</p>
                    {props.onBackToThread ? (
                      <button
                        type="button"
                        className="journal-continue"
                        data-testid="journal-decision-aside-continue"
                        onClick={props.onBackToThread}
                      >
                        <span className="journal-continue-cta">Poursuivre avec Nora</span>
                        <span aria-hidden>↗</span>
                      </button>
                    ) : null}
                  </aside>
                </div>
              </div>
            </>
          ) : null}
        </section>
      ) : null}
    </div>
  );
}


function SubjectSearchResults(props: {
  matchBySubject: Map<string, string>;
  byId: Map<string, JournalSubject>;
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  const rows = [...props.matchBySubject.entries()]
    .map(([id, reason]) => ({ subject: props.byId.get(id), reason }))
    .filter((r): r is { subject: JournalSubject; reason: string } => Boolean(r.subject))
    .sort((a, b) => a.subject.title.localeCompare(b.subject.title, "fr"));
  return (
    <div data-testid="journal-search-results">
      <p className="journal-results-count">
        {rows.length} {COPY.matchesLabel}
      </p>
      <ul className="journal-results-list">
        {rows.map(({ subject, reason }) => (
          <li key={subject.id}>
            <button
              type="button"
              className={`journal-result-row${props.selectedId === subject.id ? " is-selected" : ""}`}
              data-testid={`journal-match-${subject.id}`}
              onClick={() => props.onSelect(subject.id)}
            >
              <span className="journal-result-title">{subject.title}</span>
              <span className="journal-result-path">
                {subjectBreadcrumb(subject.id, props.byId).join(" › ")}
              </span>
              <span className="journal-result-reason">Correspondance · {reason}</span>
            </button>
          </li>
        ))}
      </ul>
    </div>
  );
}

function OpenPointsTransversalList(props: {
  openPoints: JournalOpenPoint[];
  byId: Map<string, JournalSubject>;
  selectedId: string | null;
  onSelect: (id: string) => void;
}) {
  if (props.openPoints.length === 0) {
    return (
      <div className="journal-hierarchy" data-testid="journal-open-points-empty">
        <p className="journal-empty-copy">Aucun point ouvert sur ce projet.</p>
      </div>
    );
  }
  return (
    <div data-testid="journal-open-points-list-wrap">
      <p className="journal-results-count">{COPY.openPointsLabel}</p>
      <ul className="journal-open-points-list" data-testid="journal-open-points-list">
        {props.openPoints.map((o) => {
          const subject = o.subjectId ? props.byId.get(o.subjectId) : null;
          const selected = o.subjectId != null && props.selectedId === o.subjectId;
          return (
            <li key={o.id}>
              <button
                type="button"
                className={`journal-open-point-row${selected ? " is-selected" : ""}`}
                data-testid={`journal-open-point-row-${o.id}`}
                onClick={() => {
                  if (o.subjectId) props.onSelect(o.subjectId);
                }}
              >
                <span className="journal-open-point-title">{o.statement}</span>
                <span className="journal-open-point-origin">
                  {subject ? subject.title : "Sujet non rattaché"} · {COPY.openPointStatus}
                </span>
              </button>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

function SubjectHierarchyBlock(props: {
  subject: JournalSubject;
  tree: Map<string | null, JournalSubject[]>;
  expanded: Set<string>;
  selectedId: string | null;
  openBySubject: Map<string, number>;
  matchBySubject: Map<string, string>;
  nodeVisible: (s: JournalSubject) => boolean;
  onToggle: (id: string, e: React.MouseEvent) => void;
  onSelect: (id: string) => void;
}) {
  const children = (props.tree.get(props.subject.id) ?? []).filter(props.nodeVisible);
  const hasChildren = (props.tree.get(props.subject.id) ?? []).length > 0;
  const isOpen = props.expanded.has(props.subject.id);
  const openCount = props.openBySubject.get(props.subject.id) ?? 0;
  const matchReason = props.matchBySubject.get(props.subject.id);
  const blurb = subjectBlurb(props.subject);
  const selected = props.selectedId === props.subject.id;

  return (
    <div
      className={`journal-group${selected ? " is-selected" : ""}${hasChildren ? " is-parent" : " is-leaf"}`}
    >
      <button
        type="button"
        className="journal-group-head"
        data-testid={`journal-subject-${props.subject.id}`}
        onClick={() => props.onSelect(props.subject.id)}
      >
        {hasChildren ? (
          <span
            className="journal-expand"
            role="presentation"
            onClick={(e) => props.onToggle(props.subject.id, e)}
          >
            {isOpen ? "⌄" : "▸"}
          </span>
        ) : (
          <span className="journal-expand is-leaf-mark" aria-hidden>
            ▸
          </span>
        )}
        <span className="journal-group-text">
          <span className="journal-group-title">{props.subject.title}</span>
          {blurb ? <span className="journal-row-desc">{blurb}</span> : null}
          {matchReason ? (
            <span className="journal-match" data-testid={`journal-match-${props.subject.id}`}>
              {matchReason}
            </span>
          ) : null}
        </span>
        {hasChildren && isOpen ? (
          <span className="journal-axes">
            {children.length} {children.length > 1 ? "AXES" : "AXE"}
          </span>
        ) : null}
        {openCount > 0 ? (
          <span className="journal-open-badge" data-testid={`journal-open-count-${props.subject.id}`}>
            {openCount}
          </span>
        ) : null}
        <span className="journal-open-arrow" aria-hidden>
          ↗
        </span>
      </button>

      {hasChildren && isOpen ? (
        <ul className="journal-children">
          {children.map((c) => {
            const cBlurb = subjectBlurb(c);
            const cMatch = props.matchBySubject.get(c.id);
            const cOpen = props.openBySubject.get(c.id) ?? 0;
            const cSelected = props.selectedId === c.id;
            const grand = (props.tree.get(c.id) ?? []).filter(props.nodeVisible);
            return (
              <li key={c.id} className={cSelected ? "is-selected" : undefined}>
                <button
                  type="button"
                  className={`journal-child-row${cSelected ? " is-selected" : ""}`}
                  data-testid={`journal-subject-${c.id}`}
                  onClick={() => props.onSelect(c.id)}
                >
                  <span className="journal-group-text">
                    <span className="journal-child-title">{c.title}</span>
                    {cBlurb ? <span className="journal-row-desc">{cBlurb}</span> : null}
                    {cMatch ? (
                      <span className="journal-match" data-testid={`journal-match-${c.id}`}>
                        {cMatch}
                      </span>
                    ) : null}
                  </span>
                  {cOpen > 0 ? (
                    <span className="journal-open-badge" data-testid={`journal-open-count-${c.id}`}>
                      {cOpen}
                    </span>
                  ) : null}
                  <span className="journal-open-arrow" aria-hidden>
                    ↗
                  </span>
                </button>
                {grand.length > 0 ? (
                  <ul className="journal-grandchildren">
                    {grand.map((g) => (
                      <li key={g.id}>
                        <button
                          type="button"
                          className={`journal-child-row is-nested${props.selectedId === g.id ? " is-selected" : ""}`}
                          data-testid={`journal-subject-${g.id}`}
                          onClick={() => props.onSelect(g.id)}
                        >
                          <span className="journal-child-title">{g.title}</span>
                          <span className="journal-open-arrow" aria-hidden>
                            ↗
                          </span>
                        </button>
                      </li>
                    ))}
                  </ul>
                ) : null}
              </li>
            );
          })}
        </ul>
      ) : null}
    </div>
  );
}

function SubjectBreadcrumb(props: { path: string[] }) {
  if (props.path.length <= 1) return null;
  return (
    <p className="journal-breadcrumb" data-testid="journal-subject-breadcrumb">
      {props.path.join(" › ")}
    </p>
  );
}

function SourceChip(props: {
  link: JournalSourceLink;
  onOpenMessage?: (messageId: string) => void;
  onOpenDocument?: (documentId: string, revisionId?: string | null) => void;
}) {
  const s = props.link;
  const label = `${s.sourceKind} · ${s.currentness}`;
  const canMessage = s.sourceKind === "message" && Boolean(s.sourceId) && props.onOpenMessage;
  const docId = s.documentId ?? (s.sourceKind === "document" ? s.sourceId : undefined);
  const canDoc = Boolean(docId) && Boolean(props.onOpenDocument);
  return (
    <button
      type="button"
      className="journal-source-chip"
      data-testid={`journal-source-${s.ownerId}`}
      data-currentness={s.currentness}
      disabled={!canMessage && !canDoc}
      title={s.detail}
      onClick={() => {
        if (canMessage && s.sourceId) props.onOpenMessage?.(s.sourceId);
        else if (canDoc && docId) props.onOpenDocument?.(docId, s.revisionId ?? null);
      }}
    >
      <span className="journal-source-label">{label}</span>
      <span className="journal-row-desc">{s.detail.slice(0, 160)}</span>
      <span className="journal-source-cta">
        Retrouver {s.sourceKind === "message" ? "cet échange dans Travail" : "ce document"} ↗
      </span>
    </button>
  );
}

function DecisionList(props: {
  decisions: JournalDecision[];
  selectedId: string | null;
  showEmpty: boolean;
  emptyCopy: string;
  searchEmptyCopy: string;
  onSelect: (id: string) => void;
}) {
  if (props.showEmpty) {
    return (
      <div className="journal-hierarchy" data-testid="journal-decision-list">
        <p className="journal-empty-copy" data-testid="journal-search-empty">
          {props.searchEmptyCopy}
        </p>
      </div>
    );
  }
  if (props.decisions.length === 0) {
    return (
      <div className="journal-hierarchy" data-testid="journal-decision-list">
        <p className="journal-empty-copy" data-testid="journal-decisions-empty">
          {props.emptyCopy}
        </p>
      </div>
    );
  }
  return (
    <ul className="journal-decision-list" data-testid="journal-decision-list">
      {props.decisions.map((d) => {
        const st = decisionStatusLabel(d);
        return (
          <li key={d.id}>
            <button
              type="button"
              className={`journal-decision-row${props.selectedId === d.id ? " is-selected" : ""}`}
              data-testid={`journal-decision-${d.id}`}
              onClick={() => props.onSelect(d.id)}
            >
              <span className="journal-decision-main">
                <span className="journal-decision-title">{d.statement || d.kind}</span>
                <span className="journal-row-desc">{decisionBlurb(d)}</span>
                <span className="journal-decision-meta">
                  {d.kind} · {d.scope}
                </span>
              </span>
              <span className={`journal-status journal-status-${st.tone}`}>
                <span className="journal-status-dot" aria-hidden />
                {st.label}
              </span>
              <span className="journal-open-arrow" aria-hidden>
                ↗
              </span>
            </button>
          </li>
        );
      })}
    </ul>
  );
}
