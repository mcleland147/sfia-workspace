"use client";

import { useMemo, useState } from "react";
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

type Tab = "subjects" | "decisions";
type LayoutMode = "full" | "split" | "enlarged";

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

function SubjectTreeNodes(props: {
  parentId: string | null;
  tree: Map<string | null, JournalSubject[]>;
  depth: number;
  selectedId: string | null;
  openPointsOnly: boolean;
  openBySubject: Map<string, number>;
  search: string;
  onSelect: (id: string) => void;
}) {
  const nodes = props.tree.get(props.parentId) ?? [];
  if (nodes.length === 0) return null;
  return (
  <ul className="journal-tree-level" data-depth={props.depth}>
      {nodes.map((s) => {
        const openCount = props.openBySubject.get(s.id) ?? 0;
        if (props.openPointsOnly && openCount === 0) {
          const childOpen = (props.tree.get(s.id) ?? []).some(
            (c) => (props.openBySubject.get(c.id) ?? 0) > 0,
          );
          if (!childOpen) return null;
        }
        const hay = `${s.title} ${s.summary?.summaryMarkdown ?? ""}`.toLowerCase();
        if (props.search.trim() && !hay.includes(props.search.trim().toLowerCase())) {
          const childVisible = (props.tree.get(s.id) ?? []).length > 0;
          if (!childVisible) return null;
        }
        return (
          <li key={s.id}>
            <button
              type="button"
              className={`journal-tree-node${props.selectedId === s.id ? " is-selected" : ""}`}
              data-testid={`journal-subject-${s.id}`}
              style={{ paddingLeft: `${8 + props.depth * 14}px` }}
              onClick={() => props.onSelect(s.id)}
            >
              <span className="journal-tree-title">{s.title}</span>
              {openCount > 0 ? (
                <span className="fig-tag fig-tag-warn" data-testid={`journal-open-count-${s.id}`}>
                  {openCount}
                </span>
              ) : null}
            </button>
            <SubjectTreeNodes
              parentId={s.id}
              tree={props.tree}
              depth={props.depth + 1}
              selectedId={props.selectedId}
              openPointsOnly={props.openPointsOnly}
              openBySubject={props.openBySubject}
              search={props.search}
              onSelect={props.onSelect}
            />
          </li>
        );
      })}
    </ul>
  );
}

export function ProjectJournal(props: {
  subjects: JournalSubject[];
  acquis: JournalAcquis[];
  openPoints: JournalOpenPoint[];
  decisions?: JournalDecision[];
  restrictions?: JournalRestriction[];
  frameId?: string;
  onBackToThread?: () => void;
  /** Sas-only mutation affordance — project Journal stays read-oriented. */
  onRenameSubject?: (id: string, title: string) => void;
  splitSlot?: React.ReactNode;
}) {
  const [tab, setTab] = useState<Tab>("subjects");
  const [search, setSearch] = useState("");
  const [openPointsOnly, setOpenPointsOnly] = useState(false);
  const [selectedSubjectId, setSelectedSubjectId] = useState<string | null>(null);
  const [selectedDecisionId, setSelectedDecisionId] = useState<string | null>(null);
  const [layout, setLayout] = useState<LayoutMode>("full");

  const decisions = useMemo(() => props.decisions ?? [], [props.decisions]);
  const restrictions = props.restrictions ?? [];

  const tree = useMemo(() => buildSubjectTree(props.subjects), [props.subjects]);
  const byId = useMemo(
    () => new Map(props.subjects.map((s) => [s.id, s] as const)),
    [props.subjects],
  );

  const openBySubject = useMemo(() => {
    const map = new Map<string, number>();
    for (const o of props.openPoints) {
      if (o.status !== "OPEN" || !o.subjectId) continue;
      map.set(o.subjectId, (map.get(o.subjectId) ?? 0) + 1);
    }
    return map;
  }, [props.openPoints]);

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

  const selectedDecision =
    selectedDecisionId != null
      ? decisions.find((d) => d.id === selectedDecisionId) ?? null
      : null;

  const filteredDecisions = useMemo(() => {
    const q = search.trim().toLowerCase();
    if (tab !== "decisions" || !q) return decisions;
    return decisions.filter(
      (d) =>
        d.statement.toLowerCase().includes(q) ||
        (d.explanation?.explanationMarkdown.toLowerCase().includes(q) ?? false) ||
        d.kind.toLowerCase().includes(q),
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

  const showSearchEmpty =
    tab === "subjects" &&
    search.trim().length > 0 &&
    !props.subjects.some((s) => s.title.toLowerCase().includes(search.trim().toLowerCase()));

  const showDecisionSearchEmpty =
    tab === "decisions" && search.trim().length > 0 && filteredDecisions.length === 0;

  return (
    <div
      className={`journal-shell journal-layout-${layoutMode}`}
      data-figma-frame={props.frameId ?? "835:71"}
      data-testid="project-journal"
      data-journal-layout={layoutMode}
    >
      <div className="journal-head fig-section-head">
        <div>
          <p className="fig-kicker">Journal</p>
          <h2 className="fig-section-title">Sujets et décisions durables</h2>
          <p className="fig-hero-sub !mt-1">
            Consultation capitalisée (D4) et actes D6 en lecture seule — aucune HumanDecision créée
            ici.
          </p>
        </div>
        {props.onBackToThread ? (
          <button
            type="button"
            className="btn secondary"
            data-testid="journal-back-thread"
            onClick={props.onBackToThread}
          >
            Retour au fil
          </button>
        ) : null}
      </div>

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

      <div className="journal-toolbar">
        <input
          type="search"
          className="journal-search"
          data-testid="journal-search"
          placeholder={tab === "subjects" ? "Rechercher sujets, acquis…" : "Rechercher décisions…"}
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
        {tab === "subjects" ? (
          <label className="journal-filter-open" data-testid="journal-filter-open-points">
            <input
              type="checkbox"
              checked={openPointsOnly}
              onChange={(e) => setOpenPointsOnly(e.target.checked)}
            />
            Points ouverts
          </label>
        ) : null}
      </div>

      {emptySubjects && tab === "subjects" ? (
        <div className="fig-panel space-y-3" data-testid="journal-empty-structure">
          <h3 className="fig-panel-title">Structure du journal</h3>
          <p className="text-sm muted">Aucun sujet capitalisé pour l&apos;instant.</p>
        </div>
      ) : (
        <div className="journal-body" data-testid="journal-split">
          <aside
            className="journal-rail fig-panel"
            data-testid="journal-rail"
            hidden={layoutMode === "enlarged"}
          >
            {tab === "subjects" ? (
              <div className="journal-tree-wrap" data-testid="journal-tree">
                {showSearchEmpty ? (
                  <p className="text-sm muted" data-testid="journal-search-empty">
                    Aucun sujet ne correspond à cette recherche.
                  </p>
                ) : (
                  <SubjectTreeNodes
                    parentId={null}
                    tree={tree}
                    depth={0}
                    selectedId={selectedSubjectId}
                    openPointsOnly={openPointsOnly}
                    openBySubject={openBySubject}
                    search={search}
                    onSelect={pickSubject}
                  />
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
            ) : (
              <DecisionList
                decisions={filteredDecisions}
                selectedId={selectedDecisionId}
                showEmpty={showDecisionSearchEmpty}
                onSelect={pickDecision}
              />
            )}
          </aside>

          <section className="journal-viewer fig-panel" data-testid="journal-viewer">
            {tab === "subjects" ? (
              selectedSubject ? (
                <>
                  <header className="journal-viewer-head">
                    <SubjectBreadcrumb path={subjectBreadcrumb(selectedSubject.id, byId)} />
                    <h3 className="fig-panel-title" data-testid="journal-viewer-subject-title">
                      {selectedSubject.title}
                    </h3>
                    <JournalLayoutActions
                      layout={layoutMode}
                      onEnlarge={() => setLayout("enlarged")}
                      onReduce={() => setLayout("split")}
                    />
                  </header>
                  <div className="journal-viewer-body">
                    <section className="space-y-2">
                      <h4 className="text-sm font-medium">Synthèse</h4>
                      {selectedSubject.summary?.summaryMarkdown ? (
                        <div data-testid="journal-subject-summary">
                          <SafeMarkdown content={selectedSubject.summary.summaryMarkdown} />
                          <p className="text-xs muted">
                            Révision {selectedSubject.summary.revisionNumber}
                          </p>
                        </div>
                      ) : (
                        <p className="text-sm muted" data-testid="journal-subject-summary-empty">
                          Synthèse non encore disponible.
                        </p>
                      )}
                    </section>
                    {childSubjects.length > 0 ? (
                      <section className="space-y-2">
                        <h4 className="text-sm font-medium">Sous-sujets</h4>
                        <ul className="journal-child-list">
                          {childSubjects.map((c) => (
                            <li key={c.id}>
                              <button type="button" className="btn secondary" onClick={() => pickSubject(c.id)}>
                                {c.title}
                              </button>
                            </li>
                          ))}
                        </ul>
                      </section>
                    ) : null}
                    <section className="space-y-2">
                      <h4 className="text-sm font-medium">Acquis courants</h4>
                      {selectedAcquis.length === 0 ? (
                        <p className="text-sm muted">Aucun acquis CURRENT pour ce sujet.</p>
                      ) : (
                        selectedAcquis.map((a) => (
                          <div key={a.id} className="fig-msg text-sm" data-subject-id={a.subjectId ?? ""}>
                            <span className="fig-tag fig-tag-muted mr-2">{a.kind}</span>
                            {a.statement}
                          </div>
                        ))
                      )}
                    </section>
                    <section className="space-y-2">
                      <h4 className="text-sm font-medium">Points ouverts</h4>
                      {selectedOpen.length === 0 ? (
                        <p className="text-sm muted">Aucun point ouvert rattaché.</p>
                      ) : (
                        selectedOpen.map((o) => (
                          <div
                            key={o.id}
                            className="fig-msg text-sm"
                            data-testid={`journal-open-point-${o.id}`}
                            data-subject-id={o.subjectId ?? ""}
                          >
                            {o.statement}
                          </div>
                        ))
                      )}
                    </section>
                  </div>
                </>
              ) : (
                <p className="text-sm muted" data-testid="journal-viewer-idle">
                  Sélectionnez un sujet dans l&apos;arborescence.
                </p>
              )
            ) : selectedDecision ? (
              <>
                <header className="journal-viewer-head">
                  <h3 className="fig-panel-title" data-testid="journal-decision-viewer-title">
                    {selectedDecision.kind} · {selectedDecision.state}
                  </h3>
                  <JournalLayoutActions
                    layout={layoutMode}
                    onEnlarge={() => setLayout("enlarged")}
                    onReduce={() => setLayout("split")}
                  />
                </header>
                <div className="journal-viewer-body" data-testid="journal-decision-viewer">
                  <section className="space-y-2">
                    <h4 className="text-sm font-medium">Choix retenu (D6)</h4>
                    <p className="text-sm">{selectedDecision.statement || "—"}</p>
                    <p className="text-xs muted">
                      {selectedDecision.scope} · {selectedDecision.state} · effet{" "}
                      {new Date(selectedDecision.effectiveAt).toLocaleString("fr-FR")}
                    </p>
                  </section>
                  <section className="space-y-2">
                    <h4 className="text-sm font-medium">Pourquoi ce choix ? (narratif D4)</h4>
                    {selectedDecision.explanation?.explanationMarkdown ? (
                      <>
                        {selectedDecision.explanation.potentiallyStale ? (
                          <p className="fig-tag fig-tag-warn" data-testid="journal-explanation-stale">
                            Explication potentiellement périmée — revalider l&apos;acte D6.
                          </p>
                        ) : null}
                        <SafeMarkdown content={selectedDecision.explanation.explanationMarkdown} />
                      </>
                    ) : (
                      <p className="text-sm muted" data-testid="journal-explanation-empty">
                        Explication contextuelle non encore disponible.
                      </p>
                    )}
                  </section>
                  {restrictions.length > 0 ? (
                    <section className="space-y-2">
                      <h4 className="text-sm font-medium">Restrictions D6 actives</h4>
                      <ul className="journal-restriction-list">
                        {restrictions.map((r) => (
                          <li key={r.id} className="text-xs muted" data-testid={`journal-restriction-${r.id}`}>
                            {r.targetKind} · {r.targetRef} ({r.status})
                          </li>
                        ))}
                      </ul>
                    </section>
                  ) : null}
                </div>
              </>
            ) : (
              <p className="text-sm muted" data-testid="journal-viewer-idle">
                Sélectionnez une décision durable.
              </p>
            )}
          </section>
        </div>
      )}
    </div>
  );
}

function SubjectBreadcrumb(props: { path: string[] }) {
  if (props.path.length <= 1) return null;
  return (
    <p className="text-xs muted journal-breadcrumb" data-testid="journal-subject-breadcrumb">
      {props.path.join(" › ")}
    </p>
  );
}

function JournalLayoutActions(props: {
  layout: LayoutMode;
  onEnlarge: () => void;
  onReduce: () => void;
}) {
  return (
    <div className="journal-viewer-actions">
      {props.layout === "enlarged" ? (
        <button type="button" className="btn secondary" data-testid="journal-viewer-reduce" onClick={props.onReduce}>
          Réduire
        </button>
      ) : (
        <button type="button" className="btn secondary" data-testid="journal-viewer-enlarge" onClick={props.onEnlarge}>
          Agrandir
        </button>
      )}
    </div>
  );
}

function DecisionList(props: {
  decisions: JournalDecision[];
  selectedId: string | null;
  showEmpty: boolean;
  onSelect: (id: string) => void;
}) {
  if (props.showEmpty) {
    return (
      <p className="text-sm muted" data-testid="journal-search-empty">
        Aucune décision ne correspond à cette recherche.
      </p>
    );
  }
  if (props.decisions.length === 0) {
    return (
      <p className="text-sm muted" data-testid="journal-decisions-empty">
        Aucune HumanDecision enregistrée pour ce projet.
      </p>
    );
  }
  return (
    <ul className="journal-decision-list">
      {props.decisions.map((d) => (
        <li key={d.id}>
          <button
            type="button"
            className={`journal-decision-row${props.selectedId === d.id ? " is-selected" : ""}`}
            data-testid={`journal-decision-${d.id}`}
            onClick={() => props.onSelect(d.id)}
          >
            <span className="font-medium text-sm">{d.kind}</span>
            <span className="fig-tag fig-tag-muted">{d.state}</span>
            <span className="text-xs muted block mt-1">{d.statement.slice(0, 120)}</span>
          </button>
        </li>
      ))}
    </ul>
  );
}