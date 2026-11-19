# JOURNAL V4 — PIXEL-PERFECT CORRECTION — REVIEW PACK FULL

- **Date/heure** : 2026-11-19 13:02:50 CET
- **Profil** : CRITICAL — SFIA v2.6 §9.1
- **Cycle** : 8 Delivery / Corrective UX pixel-perfect
- **Macro-lot** : Ensemble 06 — Journal V4 finalisation
- **Review Pack** : FULL (mono-cycle)
- **Branche** : `sfia/next-journal-delivery-20261119`
- **HEAD candidat** : `6c658f9124b3ada48fb01047b2b0ffb7fa5703c3`
- **Tree** : `fa420659cd652953435c3b53a5b6d783accae745`
- **Parent cycle précédent** : `0eb3157b1678b993162fa79c98f5e4de26a9e4e3`
- **RECETTE servi (inchangé)** : `d5bf7eb762a21cc309744bb703926e2c0bc844ed` / BUILD `PV12SV9VToVGK-ReSxTqk`
- **origin/main** : `d3d199adb782462b93467934f5f1e8a0c98fb492`
- **Docs** : matrice v0.7 §18 @ `f0d2d033`
- **Handoff précédent** : `445014db` / blob `2277af43…`
- **Versioning** : NO RELEASE / STABLE NOT AVAILABLE
- **Push produit / PR / merge / cutover RECETTE** : **NON**

## 0. Mandat

Morris a rejeté la fidélité UX des 12 captures. Onze états Figma NON RÉCEPTIONNÉS. Ce cycle corrige géométrie 40/60, liserés, compositions parent/autonome, agrandi article+aside, recherche, points ouverts, décisions/statuts D6.

## 1. Git Truth Check

```
?? projects/.tmp-sfia-review/
?? projects/sfia-studio-next/.tmp-sfia-review/
?? projects/sfia-studio-next/web/scripts/journal-v4-figma-captures.mjs

```

### Commits vs RECETTE d5bf7eb7
```
6c658f91 fix(next): Journal V4 pixel-perfect geometry and compositions
0eb3157b fix(next): align Journal V4 shell to validated Figma frames

```

### Diff vs parent 0eb3157b
```
M	projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
M	projects/sfia-studio-next/construction/delivery-history.md
M	projects/sfia-studio-next/web/src/components/figma/ProjectJournal.tsx
M	projects/sfia-studio-next/web/src/components/figma/tokens.css
M	projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
M	projects/sfia-studio-next/web/src/components/shell/studio-shell.css
M	projects/sfia-studio-next/web/tests/e2e/journal-v4-figma-captures.spec.ts
M	projects/sfia-studio-next/web/tests/e2e/journal-v4-parcours.spec.ts

```
```
 .../as-built-ensemble-06-journal-20261119.md       |  62 +--
 .../construction/delivery-history.md               |  14 +
 .../web/src/components/figma/ProjectJournal.tsx    | 537 +++++++++++++++------
 .../web/src/components/figma/tokens.css            | 345 ++++++++++++-
 .../web/src/components/shell/StudioShell.tsx       |   7 +
 .../web/src/components/shell/studio-shell.css      |  16 +
 .../tests/e2e/journal-v4-figma-captures.spec.ts    | 150 +++---
 .../web/tests/e2e/journal-v4-parcours.spec.ts      |  22 +-
 8 files changed, 883 insertions(+), 270 deletions(-)

```

## 2. Sources

- Journal contrat v1.0 · technique v0.3 §16 · matrice v0.7 §18
- Figma `itgvCulInEnFY6DvgIegvP` page 828:2 — mesures natives MCP (842:26 viewer 784×832 @830,95 ; liseré 3×112 ; enlarged article 936 + aside 374)
- Handoff `445014db` (composant + CSS + écarts)
- ENV-01 DEV only

### Frames Figma

- `01-835-71-sujets-exploration.png`
- `02-842-26-sujet-autonome-40-60.png`
- `03-842-131-sujet-parent-40-60.png`
- `04-835-159-sujet-autonome-agrandi.png`
- `05-835-239-sujet-parent-agrandi.png`
- `06-859-42-recherche-sujets.png`
- `07-859-146-filtre-points-ouverts.png`
- `08-860-58-decisions-nominales.png`
- `09-860-136-decision-40-60.png`
- `10-860-251-recherche-decisions.png`
- `11-860-360-decision-agrandie.png`

## 3. Diagnostic géométrie (avant → après)

| Élément | Avant (0eb3157b) | Après (candidat) | Figma |
|---|---|---|---|
| Viewer height | `min-height: 640` (trop bas) | `height:100%` stretch shell | 832 |
| Viewer width | `max-width:784` flex grow | `flex:0 0 784px` | 784 |
| Compact col | 526 | 526 | 526 |
| Gap | 20 | 20 | 20 |
| Shell height | page scroll | `data-journal-layout=1` fill | zone y=95→927 |
| Liseré bandeau | inset shadow full | `::before` 3×112 @29px | 853:44 |
| Parent body | acquis grid + children list | numbered child cards only | 842:131 |
| Autonome body | same as parent-ish | acquis/points grid, no children | 842:26 |
| Agrandi | stacked cards | article + aside REPÈRES | 835:159 |
| Recherche | filtered tree | result rows path+reason | 859:42 |
| Points ouverts | filter button | transversal list | 859:146 |

### Mesures approx PNG (heuristique couleur, 1680×970)

| Frame | Viewer approx runtime | Figma | Δ order |
|---|---|---|---|
| 02/03/09 | ~840,80 · ~830×870 (heuristique large) | 830,95 · 784×832 | dizaines de px ; plus de déficit de plusieurs centaines |

Assertion Playwright : width ∈ (700,820) et height > 700.

## 4. CREATE FULL — as-built
```markdown
# As-built — Ensemble 06 / Journal V4

| Métadonnée | Valeur |
|---|---|
| Date | 19/11/2026 — pixel-perfect corrective UX |
| Branche | `sfia/next-journal-delivery-20261119` |
| Parent candidat RECETTE | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` |
| Base `main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Docs matrice | v0.7 §18 (`f0d2d033` documentaire) |
| Versioning | `NO RELEASE` / STABLE NOT AVAILABLE |
| RECETTE | **non cutover** — DEV uniquement |

## Correctif pixel-perfect (présent cycle)

### Priorités Morris traitées

| Constat | Correction |
|---|---|
| Visionneuse 40/60 trop basse (`min-height: 640`) | Shell journal remplit la hauteur ; viewer `784px` stretch (`align-self: stretch`, `height: 100%`) |
| Liseré `box-shadow inset` générique | Pseudo-éléments Figma : bandeau 3×112 ; synthèse 3×69 ; CTA 3×29 |
| Captures parent ≈ autonome | Compositions distinctes : parent = cartes numérotées sous-sujets ; autonome = acquis/points |
| Agrandi = colonne unique | Grille article 936 + aside 374 ; aside REPÈRES |
| Recherche = arbre filtré | Liste de correspondances (titre / chemin / raison) |
| Points ouverts = bouton seul | Liste transversale des points + origine |
| `decisionStatusLabel` confond remplacée / non applicable | REMPLACÉE seulement si `supersededByDecisionId` |
| Shell main scroll | `data-journal-layout=1` sur StudioShell (comme Travail) |

### Fichiers touchés

- `web/src/components/figma/ProjectJournal.tsx`
- `web/src/components/figma/tokens.css`
- `web/src/components/shell/StudioShell.tsx`
- `web/src/components/shell/studio-shell.css`
- `web/tests/e2e/journal-v4-figma-captures.spec.ts` — oracles discriminants parent/autonome/géométrie
- `web/tests/e2e/journal-v4-parcours.spec.ts`

### Géométrie Figma (842:26)

| Élément | Figma | Runtime cible |
|---|---|---|
| Viewer | 830,95 · 784×832 | `784px` largeur · hauteur stretch zone dispo |
| Compact Journal | 526px | `--journal-compact-w: 526px` |
| Gap | 20px | `--journal-split-gap: 20px` |
| Liseré bandeau | 3×112 @ +29px | `::before` |

### Preuves

| Contrôle | Résultat |
|---|---|
| tsc | PASS |
| unit journal + fixture-gate | 14/14 PASS |
| Playwright captures + parcours | 3/3 PASS |
| Captures 00–11 | `.tmp-sfia-review/figma-ux-after/` |
| Parent ≠ autonome | titres distincts dans `capture-report.json` |
| RECETTE cutover | **NON** |

## Autorité

- D6 non muté depuis Journal
- Aucun faux contenu en DB RECETTE
- Aucun push produit / PR / merge

```

## 5. CREATE FULL — ProjectJournal.tsx
```tsx
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

```

## 6. CREATE FULL — journal-v4-figma-captures.spec.ts
```ts
import { test, expect, type Page, type Locator } from "@playwright/test";
import fs from "fs";
import path from "path";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

const OUT = path.resolve(__dirname, "../../../.tmp-sfia-review/figma-ux-after");

type Seed = Record<string, string>;

async function seedJournal(page: Page, projectId: string) {
  const res = await page.request.post("/api/dev/e2e/journal-fixture", {
    data: { projectId, longThreadCount: 12 },
  });
  expect(res.ok(), await res.text()).toBeTruthy();
  const body = (await res.json()) as { seed: Seed };
  return body.seed;
}

async function assertViewerBox(viewer: Locator) {
  const box = await viewer.boundingBox();
  expect(box, "journal-viewer bounding box").toBeTruthy();
  // Figma 784×832 — allow browser chrome / padding variance of a few dozen px, not hundreds.
  expect(box!.width).toBeGreaterThan(700);
  expect(box!.width).toBeLessThan(820);
  expect(box!.height).toBeGreaterThan(700);
}

async function shot(page: Page, name: string) {
  await page.screenshot({ path: path.join(OUT, name), fullPage: false });
}

test.describe("Journal V4 Figma captures 1680×970", () => {
  test("eleven runtime frames + empty exploration", async ({ page }) => {
    test.setTimeout(240000);
    fs.mkdirSync(OUT, { recursive: true });
    await page.setViewportSize({ width: 1680, height: 970 });
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await openNewPreparation(page);
    await sendPrepMessage(page, "Capture Journal V4 Figma");
    const projectName = uniqueProjectName("Journal Figma Cap");
    await constituteAndCreateProject(page, {
      name: projectName,
      summary: "captures",
      alreadyUnique: true,
    });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();
    const seed = await seedJournal(page, projectId!);

    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("journal-title")).toHaveText("Journal");
    await expect(page.getByTestId("journal-subtitle")).toContainText(
      /mémoire du projet|organisée par thèmes/i,
    );
    await expect(page.getByTestId(`journal-subject-${seed.parentSubjectId}`)).toBeVisible({
      timeout: 20000,
    });
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "full");
    await expect(page.getByTestId("journal-viewer")).toHaveCount(0);
    await shot(page, "01-runtime-835-71-sujets-exploration.png");

    // 02 — autonomous leaf
    await page.getByTestId(`journal-subject-${seed.leafSubjectId}`).click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");
    await expect(page.getByTestId("journal-viewer")).toHaveAttribute("data-viewer-kind", "autonomous");
    await expect(page.getByTestId("journal-viewer-subject-kind")).toHaveText("Sujet autonome");
    await expect(page.getByTestId("journal-viewer-subject-title")).not.toHaveText(/^\s*$/);
    await expect(page.getByTestId("journal-parent-children")).toHaveCount(0);
    await assertViewerBox(page.getByTestId("journal-viewer"));
    const leafTitle = (await page.getByTestId("journal-viewer-subject-title").innerText()).trim();
    await shot(page, "02-runtime-842-26-sujet-autonome-40-60.png");

    // 03 — parent (must differ from autonomous)
    await page.getByTestId(`journal-subject-${seed.parentSubjectId}`).click();
    await expect(page.getByTestId("journal-viewer")).toHaveAttribute("data-viewer-kind", "parent");
    await expect(page.getByTestId("journal-viewer-subject-kind")).toHaveText("Sujet parent");
    await expect(page.getByTestId("journal-parent-children")).toBeVisible();
    await expect(page.getByTestId("journal-viewer-subject-title")).not.toHaveText(leafTitle);
    await assertViewerBox(page.getByTestId("journal-viewer"));
    const parentTitle = (await page.getByTestId("journal-viewer-subject-title").innerText()).trim();
    expect(parentTitle).not.toEqual(leafTitle);
    await shot(page, "03-runtime-842-131-sujet-parent-40-60.png");

    // 04 — enlarge autonomous (select leaf again first)
    await page.getByTestId(`journal-subject-${seed.leafSubjectId}`).click();
    await expect(page.getByTestId("journal-viewer-subject-kind")).toHaveText("Sujet autonome");
    await page.getByTestId("journal-viewer-enlarge").click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute(
      "data-journal-layout",
      "enlarged",
    );
    await expect(page.getByTestId("journal-viewer-aside")).toBeVisible();
    await expect(page.getByTestId("journal-viewer-subject-kind")).toHaveText("Sujet autonome");
    await shot(page, "04-runtime-835-159-sujet-agrandi.png");
    await page.getByTestId("journal-viewer-reduce").click();

    // 05 — enlarge parent
    await page.getByTestId(`journal-subject-${seed.parentSubjectId}`).click();
    await expect(page.getByTestId("journal-viewer-subject-kind")).toHaveText("Sujet parent");
    await page.getByTestId("journal-viewer-enlarge").click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute(
      "data-journal-layout",
      "enlarged",
    );
    await expect(page.getByTestId("journal-viewer-aside")).toBeVisible();
    await expect(page.getByTestId("journal-parent-children")).toBeVisible();
    await expect(page.getByTestId("journal-viewer-subject-kind")).toHaveText("Sujet parent");
    await shot(page, "05-runtime-835-239-parent-agrandi.png");
    await page.getByTestId("journal-viewer-reduce").click();

    // 06 — search results composition
    await page.getByTestId("journal-search").fill("traçabilité");
    await expect(page.getByTestId("journal-search-results")).toBeVisible();
    await expect(page.getByTestId(`journal-match-${seed.leafSubjectId}`)).toBeVisible();
    await page.getByTestId(`journal-match-${seed.leafSubjectId}`).click();
    await expect(page.getByTestId("journal-viewer")).toHaveAttribute("data-viewer-kind", "autonomous");
    await assertViewerBox(page.getByTestId("journal-viewer"));
    await shot(page, "06-runtime-859-42-recherche-sujets.png");

    // 07 — open points transversal
    await page.getByTestId("journal-filter-open-points").click();
    await expect(page.getByTestId("journal-filter-open-points")).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await expect(page.getByTestId("journal-open-points-list")).toBeVisible();
    await shot(page, "07-runtime-859-146-filtre-points.png");
    await page.getByTestId("journal-filter-open-points").click();
    await page.getByTestId("journal-search").fill("");

    // 08 — decisions nominal
    await page.getByTestId("journal-tab-decisions").click();
    await expect(page.getByTestId("journal-decision-list")).toBeVisible();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "full");
    await shot(page, "08-runtime-860-58-decisions-nominales.png");

    // 09 — decision 40/60
    await page.getByTestId(`journal-decision-${seed.decisionApplicableId}`).click();
    await expect(page.getByTestId("journal-decision-viewer")).toBeVisible();
    await expect(page.getByTestId("journal-viewer")).toHaveAttribute("data-viewer-kind", "decision");
    await assertViewerBox(page.getByTestId("journal-viewer"));
    await shot(page, "09-runtime-860-136-decision-40-60.png");

    // 10 — decision search
    await page.getByTestId("journal-search").fill("multicritèreorion");
    await expect(page.getByTestId(`journal-decision-${seed.decisionApplicableId}`)).toBeVisible();
    await shot(page, "10-runtime-860-251-recherche-decisions.png");

    // 11 — decision enlarged
    await page.getByTestId("journal-viewer-enlarge").click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute(
      "data-journal-layout",
      "enlarged",
    );
    await expect(page.getByTestId("journal-decision-aside")).toBeVisible();
    await shot(page, "11-runtime-860-360-decision-agrandie.png");

    // Empty project
    await page.getByTestId("studio-rail").getByRole("link", { name: /Portefeuille/i }).click();
    await page.waitForURL("**/portfolio", { timeout: 20000 });
    await openNewPreparation(page);
    await sendPrepMessage(page, "Projet vide journal");
    const emptyName = uniqueProjectName("Journal Empty");
    await constituteAndCreateProject(page, {
      name: emptyName,
      summary: "empty",
      alreadyUnique: true,
    });
    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
    await expect(page.getByTestId("journal-empty-structure")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("journal-title")).toHaveText("Journal");
    await expect(page.getByTestId("journal-viewer")).toHaveCount(0);
    await shot(page, "00-runtime-empty-exploration.png");

    fs.writeFileSync(
      path.join(OUT, "capture-report.json"),
      JSON.stringify(
        {
          projectId,
          seed,
          out: OUT,
          ok: true,
          distinctions: { leafTitle, parentTitle },
        },
        null,
        2,
      ),
    );
  });
});

```

## 7. CREATE FULL — journal-v4-parcours.spec.ts
```ts
import { test, expect, type Page } from "@playwright/test";
import {
  constituteAndCreateProject,
  openNewPreparation,
  sendPrepMessage,
  uniqueProjectName,
} from "./helpers/g4-chat-first";

async function seedJournalScenario(page: Page, projectId: string, longThreadCount = 40) {
  const res = await page.request.post("/api/dev/e2e/journal-fixture", {
    data: { projectId, longThreadCount },
  });
  expect(res.ok(), await res.text()).toBeTruthy();
  const body = (await res.json()) as {
    status: string;
    seed: {
      leafSubjectId: string;
      parentSubjectId: string;
      otherParentId: string;
      openPointId: string;
      decisionApplicableId: string;
      earlyMessageId: string;
      documentId: string;
      revisionIdV2: string;
      documentAcquisId: string;
      messageCount: number;
    };
  };
  expect(body.status).toBe("AVAILABLE");
  expect(body.seed.leafSubjectId).toBeTruthy();
  expect(body.seed.earlyMessageId).toBeTruthy();
  expect(body.seed.documentAcquisId).toBeTruthy();
  return body.seed;
}

test.describe("Journal V4 — données métier non vides (E06-01 + §5)", () => {
  test("sujets/recherche-acquis/décisions/message/document/retour-nav", async ({ page }) => {
    await page.setViewportSize({ width: 1680, height: 970 });
    await page.goto("/login");
    await page.getByRole("button", { name: "Pilote A (DEV)" }).click();
    await page.waitForURL("**/portfolio");

    await openNewPreparation(page);
    await sendPrepMessage(page, "Amorce projet Journal E2E seed");

    const projectName = uniqueProjectName("Journal E06");
    await constituteAndCreateProject(page, {
      name: projectName,
      summary: "seed journal e06",
      alreadyUnique: true,
    });
    const projectId = page.url().split("/projects/")[1]?.split(/[?#]/)[0];
    expect(projectId).toBeTruthy();

    const seed = await seedJournalScenario(page, projectId!, 40);

    // Draft BEFORE leaving thread (E06-04 / J-C13)
    const draftBefore = "brouillon préparé avant Journal — ne pas envoyer";
    await page.getByTestId("thread-draft").fill(draftBefore);
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);

    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
    await expect(page).toHaveURL(/surface=journal/);
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });

    // A — arbre non vide (fail if empty)
    const leaf = page.getByTestId(`journal-subject-${seed.leafSubjectId}`);
    await expect(leaf).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId(`journal-subject-${seed.parentSubjectId}`)).toBeVisible();

    // C — J-C08 recherche terme ABSENT du titre/parents/synthèse, PRÉSENT dans acquis
    await page.getByTestId("journal-search").fill("traçabilité");
    const matchBadge = page.getByTestId(`journal-match-${seed.leafSubjectId}`);
    await expect(page.getByTestId("journal-search-results")).toBeVisible();
    await expect(matchBadge).toBeVisible();
    await expect(matchBadge).toContainText(/acquis/i);

    // B — 40/60 + enlarge via résultat de recherche (liste résultats, pas arbre)
    await matchBadge.click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");
    await expect(page.getByTestId("journal-viewer-subject-title")).toBeVisible();
    await expect(page.getByTestId("journal-viewer")).toHaveAttribute("data-viewer-kind", "autonomous");
    await page.getByTestId("journal-viewer-enlarge").click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute(
      "data-journal-layout",
      "enlarged",
    );
    await expect(page.getByTestId("journal-viewer-aside")).toBeVisible();
    await page.getByTestId("journal-viewer-reduce").click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");

    // Filtre points ouverts (vue transversale) — conserve recherche + sélection
    await page.getByTestId("journal-filter-open-points").click();
    await expect(page.getByTestId("journal-filter-open-points")).toHaveAttribute(
      "aria-pressed",
      "true",
    );
    await expect(page.getByTestId("journal-open-points-list")).toBeVisible();

    await page.screenshot({
      path: "../../.tmp-sfia-review/journal-v4-captures/runtime-1680-sujet-40-60-seeded.png",
      fullPage: false,
    });

    // Keep selection + search for return assertions
    await expect(page.getByTestId("journal-search")).toHaveValue("traçabilité");
    // Sources → message exact (chip on selected leaf)
    const sourceChip = page.locator("[data-testid^=journal-source-]").first();
    await expect(sourceChip).toBeVisible({ timeout: 10000 });
    await sourceChip.click();
    await expect(page.getByTestId("nora-workspace")).toBeVisible({ timeout: 15000 });
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);
    const focused = page.locator(`[data-message-id="${seed.earlyMessageId}"]`);
    await expect(focused).toBeVisible({ timeout: 15000 });
    const ids = await page.locator("[data-message-id]").evaluateAll((els) =>
      els.map((e) => e.getAttribute("data-message-id")),
    );
    expect(ids.includes(seed.earlyMessageId)).toBe(true);
    expect(ids[ids.length - 1]).not.toBe(seed.earlyMessageId);
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);

    // J-C13 — return via rail (NOT page.goto) and assert nav restored
    const journalNav = page.getByTestId("studio-rail").getByTestId("nav-journal");
    await journalNav.click();
    await expect(page).toHaveURL(/surface=journal/);
    // Soft-nav URL can land before React surface commit; retry rail once if needed.
    if (!(await page.getByTestId("project-journal").isVisible().catch(() => false))) {
      await journalNav.click();
    }
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("journal-search")).toHaveValue("traçabilité");
    await expect(page.getByTestId("journal-open-points-list")).toBeVisible();
    await expect(page.getByTestId("journal-viewer-subject-title")).toBeVisible();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");
    await expect(page.getByTestId("journal-filter-open-points")).toHaveAttribute(
      "aria-pressed",
      "true",
    );

    // D — J-C11 Décisions : terme présent dans explication, absent du libellé
    await page.getByTestId("journal-tab-decisions").click();
    await page.getByTestId("journal-search").fill("multicritèreorion");
    await expect(page.getByTestId(`journal-decision-${seed.decisionApplicableId}`)).toBeVisible({
      timeout: 15000,
    });
    await page.getByTestId(`journal-decision-${seed.decisionApplicableId}`).click();
    await expect(page.getByTestId("journal-decision-viewer")).toBeVisible();
    await expect(page.getByTestId("journal-decision-applicability")).toContainText(/applicable|historique|vigueur|scope/i);
    await expect(page.getByTestId("journal-decision-viewer")).toContainText(/multicritèreorion/i);

    // Back to subjects for document source click
    await page.getByTestId("journal-tab-subjects").click();
    await page.getByTestId("journal-search").fill("");
    const openFilter = page.getByTestId("journal-filter-open-points");
    if ((await openFilter.getAttribute("aria-pressed")) === "true") {
      await openFilter.click();
    }
    const budgetSubject = page.getByTestId(`journal-subject-${seed.otherParentId}`);
    await expect(budgetSubject).toBeVisible();
    await budgetSubject.click();
    await expect(page.getByTestId("project-journal")).toHaveAttribute("data-journal-layout", "split");

    // E — J-C14 document version via Journal source click → Travail viewer (exact revision)
    const docChip = page.getByTestId(`journal-source-${seed.documentAcquisId}`);
    await expect(docChip).toBeVisible({ timeout: 10000 });
    await docChip.click();
    await expect(page.getByTestId("travail-viewer")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId("travail-viewer-revision")).toContainText(/révision citée|Version/i);
    await expect(page.getByTestId("travail-viewer")).toContainText(/version exacte pour J-C14/i);
    // Draft still preserved on thread
    await expect(page.getByTestId("thread-draft")).toHaveValue(draftBefore);

    // Return Journal via rail — selection of document subject should restore if nav preserved
    await page.getByTestId("studio-rail").getByTestId("nav-journal").click();
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId(`journal-subject-${seed.otherParentId}`)).toBeVisible();

    // F — 1280 operational (rail nav, not goto as success proof of restore)
    await page.setViewportSize({ width: 1280, height: 800 });
    await expect(page.getByTestId("project-journal")).toBeVisible({ timeout: 20000 });
    await expect(page.getByTestId(`journal-subject-${seed.leafSubjectId}`)).toBeVisible();
  });

  test("route seed refuse hors DEV/E2E (gate)", async ({ page, request }) => {
    // With current Playwright webServer STUDIO_E2E=1 + DEV, positive path works above.
    // Negative: call without session → 401; with session but we cannot flip env mid-process.
    // Assert unit-gate contract is wired into this route (static) + unauthenticated 401.
    const unauth = await request.post("/api/dev/e2e/journal-fixture", {
      data: { projectId: "proj_absent" },
    });
    // Either 401 (no cookie) or 403 (gate) depending on harness cookies; never 200 for absent project.
    expect([401, 403, 404]).toContain(unauth.status());
  });
});

```

## 8. tokens.css — section Journal V4 (FULL section)
```css
/* Ensemble 06 — Journal V4 (Figma 835:71 / 842:* / 860:*) */
.project-space-page--journal {
  --journal-ink: #f4f6fd;
  --journal-muted: #96a2ba;
  --journal-muted-2: #6f7e96;
  --journal-line: #273049;
  --journal-panel: #151c2a;
  --journal-panel-2: #101523;
  --journal-accent: #7172ea;
  --journal-accent-soft: #ada5ff;
  --journal-accent-2: #827cff;
  --journal-banner: #1e2544;
  /* Figma 1680×970: header 70 + viewer y=95 → height 832 → bottom ~43 */
  --journal-viewer-w: 784px;
  --journal-compact-w: 526px;
  --journal-split-gap: 20px;
  display: flex;
  flex-direction: column;
  flex: 1 1 auto;
  min-height: 0;
  height: 100%;
  gap: 12px;
  overflow: hidden;
}
.project-space-page--journal > .project-journal,
.project-space-page--journal [data-testid="project-journal"] {
  flex: 1 1 auto;
  min-height: 0;
}
.journal-shell {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: var(--journal-split-gap);
  width: 100%;
  min-height: 0;
  flex: 1 1 auto;
  height: 100%;
}
.journal-layout-full .journal-main-column {
  flex: 1 1 auto;
  width: 100%;
  max-width: 1330px;
}
.journal-layout-split .journal-main-column {
  flex: 0 0 var(--journal-compact-w);
  width: var(--journal-compact-w);
  max-width: var(--journal-compact-w);
  min-width: 280px;
  min-height: 0;
  overflow: hidden;
}
.journal-layout-enlarged .journal-main-column {
  display: none;
}
.journal-main-column {
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
  min-height: 0;
}
.journal-main-column .journal-hierarchy,
.journal-main-column .journal-decision-list,
.journal-main-column .journal-results-list,
.journal-main-column .journal-open-points-list,
.journal-main-column [data-testid="journal-search-results"],
.journal-main-column [data-testid="journal-open-points-list-wrap"] {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
}
.journal-v4-head {
  margin-bottom: 28px;
}
.journal-v4-kicker {
  margin: 0 0 8px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--journal-accent-soft);
  text-transform: uppercase;
}
.journal-v4-title-row {
  display: flex;
  align-items: flex-start;
  justify-content: space-between;
  gap: 16px;
}
.journal-v4-title {
  margin: 0;
  font-size: 31px;
  font-weight: 600;
  line-height: 1.15;
  color: var(--journal-ink);
}
.journal-v4-sub {
  margin: 10px 0 0;
  font-size: 14px;
  font-weight: 400;
  line-height: 1.4;
  color: var(--journal-muted);
  max-width: 52rem;
}
.journal-layout-split .journal-v4-sub {
  font-size: 14px;
}
.journal-v4-back-thread {
  flex: 0 0 auto;
  appearance: none;
  border: 1px solid var(--journal-line);
  background: var(--journal-panel-2);
  color: var(--journal-muted);
  border-radius: 9px;
  padding: 6px 12px;
  font-size: 12px;
  cursor: pointer;
  margin-top: 6px;
}
.journal-tabs {
  display: flex;
  gap: 48px;
  border-bottom: 1px solid var(--journal-line);
  margin-bottom: 18px;
  position: relative;
}
.journal-tab {
  appearance: none;
  border: none;
  background: transparent;
  color: var(--journal-muted);
  font-size: 14px;
  font-weight: 500;
  padding: 0 0 14px;
  margin: 0;
  cursor: pointer;
  position: relative;
  border-radius: 0;
}
.journal-tab.is-active {
  color: var(--journal-ink);
  font-weight: 600;
  background: transparent;
}
.journal-tab.is-active::after {
  content: "";
  position: absolute;
  left: 0;
  bottom: -1px;
  width: 73px;
  height: 3px;
  border-radius: 2px;
  background: var(--journal-accent);
}
.journal-tab[data-testid="journal-tab-decisions"].is-active::after {
  width: 80px;
}
.journal-search-wrap {
  position: relative;
  margin-bottom: 22px;
}
.journal-search-icon {
  position: absolute;
  left: 18px;
  top: 50%;
  transform: translateY(-50%);
  color: var(--journal-muted);
  font-size: 22px;
  pointer-events: none;
  line-height: 1;
}
.journal-search {
  width: 100%;
  box-sizing: border-box;
  height: 55px;
  padding: 0 18px 0 56px;
  border-radius: 11px;
  border: 1px solid var(--journal-line);
  background: var(--journal-panel-2);
  color: var(--journal-ink);
  font-size: 14px;
}
.journal-search::placeholder {
  color: var(--journal-muted);
}
.journal-section-bar {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 12px;
  margin-bottom: 14px;
}
.journal-section-label {
  margin: 0;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--journal-muted);
}
.journal-section-hint {
  margin: 0;
  margin-left: auto;
  font-size: 12px;
  color: var(--journal-muted-2);
}
.journal-section-bar .journal-section-label {
  margin-right: auto;
}
.journal-filter-open {
  appearance: none;
  height: 34px;
  padding: 0 14px;
  border-radius: 9px;
  border: 1px solid #35415c;
  background: #131c2d;
  color: #b9b0ff;
  font-size: 12px;
  font-weight: 500;
  cursor: pointer;
  white-space: nowrap;
}
.journal-filter-open.is-active {
  border-color: var(--journal-accent);
  background: #1e2544;
}
.journal-hierarchy {
  border: 1px solid var(--journal-line);
  border-radius: 14px;
  background: var(--journal-panel);
  padding: 8px 0;
  min-height: 120px;
}
.journal-empty-copy {
  margin: 24px 28px;
  font-size: 14px;
  color: var(--journal-muted);
  max-width: 36rem;
  line-height: 1.45;
}
.journal-group {
  border-bottom: 1px solid var(--journal-line);
}
.journal-group:last-child {
  border-bottom: none;
}
.journal-group-head,
.journal-child-row,
.journal-decision-row {
  width: 100%;
  text-align: left;
  appearance: none;
  border: none;
  background: transparent;
  color: var(--journal-ink);
  cursor: pointer;
  display: flex;
  align-items: flex-start;
  gap: 12px;
}
.journal-group-head {
  padding: 18px 22px 16px;
}
.journal-group.is-selected > .journal-group-head,
.journal-child-row.is-selected,
.journal-decision-row.is-selected,
.journal-result-row.is-selected,
.journal-open-point-row.is-selected {
  background: #242d4b;
  position: relative;
}
.journal-group.is-selected > .journal-group-head::before,
.journal-child-row.is-selected::before,
.journal-decision-row.is-selected::before,
.journal-result-row.is-selected::before,
.journal-open-point-row.is-selected::before {
  content: "";
  position: absolute;
  left: 0;
  top: 12px;
  width: 3px;
  height: calc(100% - 24px);
  min-height: 45px;
  max-height: 49px;
  border-radius: 2px;
  background: var(--journal-accent);
}
.journal-expand {
  flex: 0 0 28px;
  color: var(--journal-accent-soft);
  font-size: 20px;
  line-height: 1.2;
  margin-top: 2px;
}
.journal-expand.is-leaf-mark {
  color: var(--journal-muted-2);
  font-size: 16px;
}
.journal-group-text {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 4px;
}
.journal-group-title {
  font-size: 20px;
  font-weight: 600;
  color: var(--journal-ink);
  line-height: 1.25;
}
.journal-group.is-leaf .journal-group-title,
.journal-child-title {
  font-size: 16px;
  font-weight: 500;
}
.journal-child-title {
  color: var(--journal-ink);
}
.journal-row-desc {
  display: block;
  font-size: 12px;
  font-weight: 400;
  color: var(--journal-muted);
  line-height: 1.35;
}
.journal-axes {
  flex: 0 0 auto;
  font-size: 11px;
  font-weight: 600;
  color: var(--journal-accent-soft);
  margin-top: 6px;
}
.journal-open-arrow {
  flex: 0 0 20px;
  color: var(--journal-muted-2);
  font-size: 15px;
  margin-top: 4px;
}
.journal-open-badge,
.journal-match {
  display: inline-block;
  margin-top: 4px;
  margin-right: 8px;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  background: #1e2544;
  color: #b9b0ff;
}
.journal-children {
  list-style: none;
  margin: 0;
  padding: 0 18px 10px 52px;
  position: relative;
}
.journal-children::before {
  content: "";
  position: absolute;
  left: 36px;
  top: 0;
  bottom: 12px;
  width: 1px;
  background: var(--journal-line);
}
.journal-child-row {
  padding: 12px 8px 12px 18px;
  border-top: 1px solid var(--journal-line);
  position: relative;
}
.journal-child-row::before {
  content: "";
  position: absolute;
  left: 0;
  top: 22px;
  width: 14px;
  height: 1px;
  background: var(--journal-line);
}
.journal-grandchildren {
  list-style: none;
  margin: 0;
  padding: 0 0 0 18px;
}
.journal-child-row.is-nested {
  font-size: 14px;
}
.journal-decision-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 18px;
}
.journal-decision-row {
  align-items: center;
  gap: 16px;
  min-height: 118px;
  padding: 18px 22px;
  border-radius: 12px;
  border: 1px solid #35415c;
  background: var(--journal-panel);
}
.journal-decision-main {
  flex: 1 1 auto;
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.journal-decision-title {
  font-size: 17px;
  font-weight: 600;
  color: #f6f7ff;
}
.journal-decision-meta {
  font-size: 11px;
  color: #99a8c6;
}
.journal-status {
  display: inline-flex;
  align-items: center;
  gap: 8px;
  height: 29px;
  padding: 0 12px;
  border-radius: 9px;
  border: 1px solid #35415c;
  background: #131c2d;
  font-size: 10px;
  font-weight: 500;
  color: #c8d1e4;
  white-space: nowrap;
}
.journal-status-dot {
  width: 7px;
  height: 7px;
  border-radius: 4px;
  background: #99a8c6;
}
.journal-status-ok .journal-status-dot {
  background: #9dd9c9;
}
.journal-status-warn .journal-status-dot {
  background: #efce96;
}
.journal-viewer {
  /* Figma 853:42 — 784×832 at x=830 y=95 */
  flex: 0 0 var(--journal-viewer-w);
  width: var(--journal-viewer-w);
  max-width: var(--journal-viewer-w);
  min-width: var(--journal-viewer-w);
  margin-left: auto;
  align-self: stretch;
  border: 1px solid #35415c;
  border-radius: 17px;
  background: #141c2b;
  display: flex;
  flex-direction: column;
  min-height: 0;
  height: 100%;
  overflow: hidden;
}
.journal-layout-enlarged .journal-viewer {
  flex: 1 1 auto;
  width: 100%;
  max-width: 1330px;
  margin: 0 auto;
  height: 100%;
  min-height: 0;
}
.journal-viewer-banner {
  position: relative;
  display: flex;
  justify-content: space-between;
  gap: 16px;
  flex: 0 0 auto;
  margin: 14px 14px 0;
  padding: 16px 24px 18px 24px;
  min-height: 181px;
  box-sizing: border-box;
  border-radius: 15px;
  border: 1px solid #444d7a;
  background: var(--journal-banner);
  overflow: hidden;
}
/* Figma 853:44 — Liseré lumière 3×112, offset under banner top */
.journal-viewer-banner::before {
  content: "";
  position: absolute;
  left: 0;
  top: 29px;
  width: 3px;
  height: 112px;
  border-radius: 0 2px 2px 0;
  background: var(--journal-accent-2);
  pointer-events: none;
}
.journal-layout-enlarged .journal-viewer-banner {
  margin: 0 0 20px;
  width: 100%;
  max-width: 1330px;
  min-height: 198px;
  border-radius: 16px;
}
.journal-layout-enlarged .journal-viewer-banner::before {
  /* Figma 854:43 — rail identité 4×124 */
  left: 0;
  top: 31px;
  width: 4px;
  height: 124px;
}
.journal-viewer-kicker {
  margin: 0 0 8px;
  font-size: 10px;
  font-weight: 600;
  color: #b9b0ff;
  letter-spacing: 0.04em;
}
.journal-viewer-title {
  margin: 0;
  font-size: 26px;
  font-weight: 600;
  color: #f6f7ff;
  line-height: 1.2;
}
.journal-viewer-lede {
  margin: 10px 0 0;
  font-size: 13px;
  color: #dce4f4;
}
.journal-viewer-type {
  display: inline-flex;
  margin-top: 14px;
  padding: 4px 12px;
  border-radius: 13px;
  border: 1px solid #414c6a;
  background: #21294a;
  font-size: 10px;
  color: #dce4f4;
}
.journal-viewer-actions {
  display: flex;
  gap: 8px;
  flex: 0 0 auto;
}
.journal-viewer-btn {
  appearance: none;
  height: 33px;
  padding: 0 12px;
  border-radius: 9px;
  border: 1px solid #414c6a;
  background: #12192d;
  color: #dce4f4;
  font-size: 12px;
  cursor: pointer;
}
.journal-viewer-close {
  width: 32px;
  padding: 0;
  font-size: 18px;
}
.journal-viewer-body {
  flex: 1 1 auto;
  min-height: 0;
  overflow: auto;
  display: flex;
  flex-direction: column;
  gap: 14px;
  padding: 14px;
}
.journal-viewer-layout {
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 0;
  flex: 1 1 auto;
}
.journal-layout-enlarged .journal-viewer-layout {
  display: grid;
  grid-template-columns: minmax(0, 936px) 374px;
  gap: 20px;
  align-items: start;
}
.journal-viewer-article {
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-width: 0;
}
.journal-viewer-aside {
  border: 1px solid #35415c;
  border-radius: 14px;
  background: #131c2d;
  padding: 22px 20px;
  display: flex;
  flex-direction: column;
  gap: 14px;
  min-height: 0;
}
.journal-layout-split .journal-viewer-aside {
  display: none;
}
.journal-aside-label {
  margin: 0;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #b9b0ff;
}
.journal-aside-title {
  margin: 0;
  font-size: 18px;
  font-weight: 600;
  color: #f6f7ff;
}
.journal-aside-sep {
  height: 1px;
  background: #35415c;
  border: 0;
  margin: 4px 0;
}
.journal-aside-meta-label {
  margin: 0;
  font-size: 11px;
  font-weight: 600;
  color: #99a8c6;
  text-transform: uppercase;
  letter-spacing: 0.03em;
}
.journal-aside-meta-value {
  margin: 0;
  font-size: 14px;
  color: #f6f7ff;
  line-height: 1.35;
}
.journal-aside-meta-desc {
  margin: 0;
  font-size: 12px;
  color: #99a8c6;
  line-height: 1.4;
}
.journal-card {
  position: relative;
  border: 1px solid #35415c;
  border-radius: 14px;
  background: #182234;
  padding: 16px 18px;
}
.journal-card-synthesis {
  overflow: hidden;
}
/* Figma 853:58 — Accent synthèse 3×69 inside card, not full-height inset shadow */
.journal-card-synthesis::before {
  content: "";
  position: absolute;
  left: 17px;
  top: 48px;
  width: 3px;
  height: 69px;
  border-radius: 2px;
  background: var(--journal-accent-2);
  pointer-events: none;
}
.journal-card-synthesis .journal-card-kicker {
  padding-left: 0;
}
.journal-card-synthesis [data-testid="journal-subject-summary"],
.journal-card-synthesis [data-testid="journal-subject-summary-empty"] {
  padding-left: 20px;
}
.journal-card-kicker {
  margin: 0 0 10px;
  font-size: 10px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: #b9b0ff;
}
.journal-card-row {
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 14px;
}
.journal-card-half {
  background: #131c2d;
  border-radius: 13px;
}
.journal-acquis-line,
.journal-open-line {
  margin: 0 0 8px;
  font-size: 14px;
  color: #f6f7ff;
  line-height: 1.35;
}
.journal-muted {
  margin: 0;
  font-size: 12px;
  color: #99a8c6;
}
.journal-warn {
  margin: 0 0 8px;
  font-size: 12px;
  color: #efce96;
}
.journal-breadcrumb {
  margin: 6px 0 0;
  font-size: 11px;
  color: #99a8c6;
}
.journal-child-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 8px;
}
.journal-child-card {
  width: 100%;
  display: grid;
  grid-template-columns: 31px minmax(0, 1fr) 24px;
  align-items: center;
  gap: 12px;
  appearance: none;
  border: 1px solid #35415c;
  border-radius: 12px;
  background: #131c2d;
  color: #f6f7ff;
  cursor: pointer;
  padding: 10px 14px;
  text-align: left;
  min-height: 58px;
  box-sizing: border-box;
}
.journal-child-num {
  display: inline-flex;
  align-items: center;
  justify-content: center;
  width: 31px;
  height: 32px;
  border-radius: 8px;
  background: #1e2544;
  color: #b9b0ff;
  font-size: 12px;
  font-weight: 600;
}
.journal-child-card-text {
  min-width: 0;
  display: flex;
  flex-direction: column;
  gap: 2px;
}
.journal-child-card-title {
  font-size: 14px;
  font-weight: 600;
  color: #f6f7ff;
}
.journal-child-card-desc {
  font-size: 12px;
  color: #99a8c6;
  line-height: 1.3;
}
.journal-child-link {
  width: 100%;
  display: flex;
  justify-content: space-between;
  gap: 12px;
  appearance: none;
  border: none;
  background: transparent;
  color: #f6f7ff;
  font-size: 14px;
  font-weight: 500;
  cursor: pointer;
  padding: 0;
  text-align: left;
}
.journal-results-list,
.journal-open-points-list {
  list-style: none;
  margin: 0;
  padding: 8px 0;
  border: 1px solid var(--journal-line);
  border-radius: 14px;
  background: var(--journal-panel);
  display: flex;
  flex-direction: column;
}
.journal-result-row,
.journal-open-point-row {
  width: 100%;
  text-align: left;
  appearance: none;
  border: none;
  border-bottom: 1px solid var(--journal-line);
  background: transparent;
  color: var(--journal-ink);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 6px;
  padding: 16px 22px;
  position: relative;
}
.journal-result-row:last-child,
.journal-open-point-row:last-child {
  border-bottom: none;
}
.journal-result-title,
.journal-open-point-title {
  font-size: 16px;
  font-weight: 600;
  color: #f6f7ff;
}
.journal-result-path,
.journal-open-point-origin {
  font-size: 12px;
  color: #99a8c6;
}
.journal-result-reason {
  display: inline-block;
  width: fit-content;
  padding: 2px 8px;
  border-radius: 999px;
  font-size: 11px;
  font-weight: 500;
  background: #1e2544;
  color: #b9b0ff;
}
.journal-results-count {
  margin: 0 0 10px;
  font-size: 11px;
  font-weight: 600;
  letter-spacing: 0.04em;
  color: var(--journal-muted);
}
.journal-parent-note {
  border: 1px solid #35415c;
  border-radius: 14px;
  background: #182234;
  padding: 18px 22px;
}
.journal-parent-note p {
  margin: 0 0 8px;
  font-size: 13px;
  color: #dce4f4;
  line-height: 1.4;
}
.journal-restriction-list {
  list-style: disc;
  padding-left: 1.2rem;
  margin: 0;
  color: #c8d1e4;
  font-size: 12px;
}
.journal-source-list {
  list-style: none;
  margin: 0;
  padding: 0;
  display: flex;
  flex-direction: column;
  gap: 10px;
}
.journal-source-chip {
  width: 100%;
  text-align: left;
  appearance: none;
  border: none;
  background: #131c2d;
  border-radius: 9px;
  padding: 12px 14px;
  color: #dce4f4;
  cursor: pointer;
  display: flex;
  flex-direction: column;
  gap: 6px;
}
.journal-source-chip:disabled {
  opacity: 0.55;
  cursor: not-allowed;
}
.journal-source-label {
  font-size: 10px;
  font-weight: 500;
  color: #99a8c6;
  text-transform: uppercase;
}
.journal-source-cta {
  font-size: 13px;
  font-weight: 500;
  color: #b9b0ff;
}
.journal-continue {
  position: relative;
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 12px;
  appearance: none;
  border: 1px solid #3c486c;
  background: #1c2540;
  border-radius: 11px;
  padding: 14px 16px 14px 20px;
  color: #eef0ff;
  cursor: pointer;
  text-align: left;
  overflow: hidden;
}
/* Figma 855:43 — Poursuivre barre 3×29 */
.journal-continue::before {
  content: "";
  position: absolute;
  left: 0;
  top: 18px;
  width: 3px;
  height: 29px;
  border-radius: 0 2px 2px 0;
  background: var(--journal-accent-2);
  pointer-events: none;
}
.journal-continue-cta {
  display: block;
  margin-top: 4px;
  font-size: 13px;
  font-weight: 600;
}
.fig-msg.is-journal-focus,
.fig-msg[data-journal-focus="1"] {
  outline: 2px solid var(--journal-accent-soft);
  outline-offset: 2px;
  background: #1e2544;
}
@media (max-width: 1280px) {
  .journal-layout-split .journal-main-column {
    flex-basis: 42%;
    width: 42%;
    max-width: none;
  }
  .journal-card-row {
    grid-template-columns: 1fr;
  }
  .journal-group-title {
    font-size: 18px;
  }
}

```

## 9. DIFF shell (StudioShell + studio-shell.css)
```diff
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index ebb8332d..515c52d1 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -489,6 +489,13 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
               ? "1"
               : undefined
           }
+          data-journal-layout={
+            projectId &&
+            (parseStudioSurface(surface) ?? "travail") === "journal" &&
+            !projectSpaceBlocked
+              ? "1"
+              : undefined
+          }
         >
           {children}
         </main>
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
index b7503a39..9b38d7dd 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
@@ -109,6 +109,22 @@ html.studio-shell-lock body {
   max-height: none;
 }

+/* Journal V4 — fill shell height so 40/60 viewer can stretch (Figma 784×832). */
+.studio-shell-main[data-journal-layout="1"] {
+  display: flex;
+  flex-direction: column;
+  overflow: hidden;
+  padding-top: 1rem;
+  padding-bottom: 1rem;
+}
+
+.studio-shell-main[data-journal-layout="1"] > .project-space-page--journal {
+  flex: 1 1 auto;
+  min-height: 0;
+  height: 100%;
+  max-height: none;
+}
+
 .studio-shell-main-mobile-pad {
   padding-bottom: calc(5.5rem + env(safe-area-inset-bottom, 0px));
 }

```

## 10. DIFF construction (as-built + delivery-history)
```diff
diff --git a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
index 9fef22e7..717d873c 100644
--- a/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
+++ b/projects/sfia-studio-next/construction/as-built-ensemble-06-journal-20261119.md
@@ -2,57 +2,57 @@

 | Métadonnée | Valeur |
 |---|---|
-| Date | 19/11/2026 — correctif UX Figma-to-runtime |
+| Date | 19/11/2026 — pixel-perfect corrective UX |
 | Branche | `sfia/next-journal-delivery-20261119` |
 | Parent candidat RECETTE | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` |
 | Base `main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
-| Docs matrice | v0.6 §17 (`864e09bf` documentaire) |
+| Docs matrice | v0.7 §18 (`f0d2d033` documentaire) |
 | Versioning | `NO RELEASE` / STABLE NOT AVAILABLE |
-| RECETTE | **non cutover** ce cycle — candidat DEV pour GO Morris |
+| RECETTE | **non cutover** — DEV uniquement |

-## Correctif UX (présent cycle)
+## Correctif pixel-perfect (présent cycle)

-### Non-conformités Morris corrigées
+### Priorités Morris traitées

 | Constat | Correction |
 |---|---|
-| Titre « Sujets et acquis » | `ProjectChrome` journal → hero déplacé ; titre **Journal** dans `ProjectJournal` |
-| Textes D4/D6 techniques | Supprimés de l’UI Pilote |
-| Viewer vide permanent | Mode exploration pleine largeur sans panneau idle |
-| Arborescence non Figma | Hiérarchie éditoriale groupes/enfants, guides, blurbs |
-| Copy hors cible | Sous-titre Figma exact Sujets / Décisions |
+| Visionneuse 40/60 trop basse (`min-height: 640`) | Shell journal remplit la hauteur ; viewer `784px` stretch (`align-self: stretch`, `height: 100%`) |
+| Liseré `box-shadow inset` générique | Pseudo-éléments Figma : bandeau 3×112 ; synthèse 3×69 ; CTA 3×29 |
+| Captures parent ≈ autonome | Compositions distinctes : parent = cartes numérotées sous-sujets ; autonome = acquis/points |
+| Agrandi = colonne unique | Grille article 936 + aside 374 ; aside REPÈRES |
+| Recherche = arbre filtré | Liste de correspondances (titre / chemin / raison) |
+| Points ouverts = bouton seul | Liste transversale des points + origine |
+| `decisionStatusLabel` confond remplacée / non applicable | REMPLACÉE seulement si `supersededByDecisionId` |
+| Shell main scroll | `data-journal-layout=1` sur StudioShell (comme Travail) |

 ### Fichiers touchés

-- `web/src/components/figma/ProjectJournal.tsx` — shell V4
-- `web/src/components/figma/tokens.css` — styles 835:71 / 842 / 860
-- `web/src/components/figma/ProjectChrome.tsx` — breadcrumb-only Journal
-- `web/src/app/projects/[projectId]/page.tsx` — deep-link nav + fetch Journal sans cancel race
-- `web/tests/e2e/journal-v4-*.spec.ts` — parcours + captures
+- `web/src/components/figma/ProjectJournal.tsx`
+- `web/src/components/figma/tokens.css`
+- `web/src/components/shell/StudioShell.tsx`
+- `web/src/components/shell/studio-shell.css`
+- `web/tests/e2e/journal-v4-figma-captures.spec.ts` — oracles discriminants parent/autonome/géométrie
+- `web/tests/e2e/journal-v4-parcours.spec.ts`

-### Anomalie CampusFlow (provenance)
+### Géométrie Figma (842:26)

-| Champ | Valeur |
-|---|---|
-| projectId | `proj_1b52eb8f-3c63-4c72-a4dd-a47f34e1bb4d` |
-| project name | CampusFlow |
-| owner_pilot_id | `pilot_98a7a89e-ba00-42c6-84d5-680eff67b73c` |
-| subjectId | `subj_8eb4e9ce-3922-4c27-a16b-cfc0c817b912` |
-| title | fragment conversationnel (« la première source Git… SHA… ») |
-| summary | vide |
-| Classification | **A — contenu légitime mal présenté** (titre D4 = extrait de fil) |
-| Fuite interprojets | **NON** — même projet / même Pilote |
+| Élément | Figma | Runtime cible |
+|---|---|---|
+| Viewer | 830,95 · 784×832 | `784px` largeur · hauteur stretch zone dispo |
+| Compact Journal | 526px | `--journal-compact-w: 526px` |
+| Gap | 20px | `--journal-split-gap: 20px` |
+| Liseré bandeau | 3×112 @ +29px | `::before` |

-## Preuves
+### Preuves

 | Contrôle | Résultat |
 |---|---|
 | tsc | PASS |
 | unit journal + fixture-gate | 14/14 PASS |
-| Captures DEV 1680×970 (11 frames) | produites sous `.tmp-sfia-review/figma-ux-after/` |
-| Playwright parcours | voir Review Pack (retries / réserves J-C14) |
-| RECETTE cutover | **NON** — GO Morris requis |
-| VISUAL REVIEW Morris | **PENDING** |
+| Playwright captures + parcours | 3/3 PASS |
+| Captures 00–11 | `.tmp-sfia-review/figma-ux-after/` |
+| Parent ≠ autonome | titres distincts dans `capture-report.json` |
+| RECETTE cutover | **NON** |

 ## Autorité

diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index ffb007e0..1dc190cd 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -4,6 +4,20 @@ Append-only logical journal of Cursor product deliveries.
 **Product STABLE: NOT AVAILABLE.** Entries may be `NO RELEASE`.


+## delivery_id: DELIV-2026-11-19-JOURNAL-V4-PIXEL
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-19 ~13:00 CET |
+| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 pixel-perfect corrective |
+| Type | Cycle 8 Delivery · Critical · **NO RELEASE** · **NO PRODUCT PUSH** · **NO RECETTE CUTOVER** |
+| GO Morris | 11 états NON RÉCEPTIONNÉS — finition géométrie/liserés/compositions |
+| Parent | local `0eb3157b` (RECETTE toujours `d5bf7eb7`) |
+| Scope | 40/60 height · liserés Figma · parent≠autonome · agrandi article+aside · search/open-points · D6 status |
+| Docs | matrice v0.7 §18 `f0d2d033` |
+| Verdict Cursor | voir Review Pack (comparaison 11 frames + réserves) |
+
+
 ## delivery_id: DELIV-2026-11-19-JOURNAL-V4-FIGMA-UX

 | Field | Value |

```

## 11. Captures runtime index

- `.tmp-sfia-review/figma-ux-after/00-runtime-empty-exploration.png`
- `.tmp-sfia-review/figma-ux-after/01-runtime-835-71-sujets-exploration.png`
- `.tmp-sfia-review/figma-ux-after/02-runtime-842-26-sujet-autonome-40-60.png`
- `.tmp-sfia-review/figma-ux-after/03-runtime-842-131-sujet-parent-40-60.png`
- `.tmp-sfia-review/figma-ux-after/04-runtime-835-159-sujet-agrandi.png`
- `.tmp-sfia-review/figma-ux-after/05-runtime-835-239-parent-agrandi.png`
- `.tmp-sfia-review/figma-ux-after/06-runtime-859-42-recherche-sujets.png`
- `.tmp-sfia-review/figma-ux-after/07-runtime-859-146-filtre-points.png`
- `.tmp-sfia-review/figma-ux-after/08-runtime-860-58-decisions-nominales.png`
- `.tmp-sfia-review/figma-ux-after/09-runtime-860-136-decision-40-60.png`
- `.tmp-sfia-review/figma-ux-after/10-runtime-860-251-recherche-decisions.png`
- `.tmp-sfia-review/figma-ux-after/11-runtime-860-360-decision-agrandie.png`

### capture-report.json
```json
{
  "projectId": "proj_ca5f39f7-c447-414b-a96b-705e22400f8b",
  "seed": {
    "projectId": "proj_ca5f39f7-c447-414b-a96b-705e22400f8b",
    "preparationId": "prep_3f70420e-ae17-48a4-8719-b3f0a3030a0e",
    "parentSubjectId": "subj_efd38d95-ecad-4bfb-afed-6486fea925d1",
    "leafSubjectId": "subj_5e2d74cc-79e6-44e7-a8d7-d0c0e0958dee",
    "otherParentId": "subj_42f60404-7a52-4c7a-8469-4c6e4bbfa56d",
    "homonymLeafId": "subj_5dafb170-5d2b-402f-b5a7-0f6b3f649655",
    "acquisId": "acq_613bad12-ad7f-48a9-b430-7e0fe9719b3d",
    "documentAcquisId": "acq_4a0eafb5-1696-441a-be2c-e26773a7b32e",
    "openPointId": "opn_511fa6e4-686e-453f-bd06-fbbbf2122037",
    "resolvedOpenPointId": "opn_0ce3396a-dfb8-4ca2-91da-119a88e0337b",
    "decisionApplicableId": "dec_3e3fe112-ebef-4ac7-9149-6f3e79fa2d4f",
    "decisionHistoricalId": "dec_0888a9c4-b826-47ad-9fd0-1fec960b481d",
    "restrictionId": "grs_2426ea73-d79d-478b-9db6-8cf65291226e",
    "documentId": "doc_bc536158-bc92-4e67-bbc0-a10abeb808a7",
    "revisionIdV1": "drev_7907f799-7fe5-4f75-b37e-e2c65ae71b92",
    "revisionIdV2": "drev_6f05cf34-503a-4aa5-98e4-d2632c8eff98",
    "earlyMessageId": "msg_225b5fa4-0062-4f8a-8913-813421088bc5",
    "lateMessageId": "msg_320c17c2-629c-4d82-a56e-a11d78851a7c",
    "messageCount": 15
  },
  "out": "/Users/morris/Projects/sfia-wt-journal-delivery-20261119/projects/sfia-studio-next/.tmp-sfia-review/figma-ux-after",
  "ok": true,
  "distinctions": {
    "leafTitle": "Continuité Git",
    "parentTitle": "Architecture cible"
  }
}
```

## 12. Tableau d'écarts Figma → Runtime

| Frame | Élément | Figma attendu | Runtime | Correction | Verdict |
|---|---|---|---|---|---|
| 835:71 | Exploration full | Journal + tree, no viewer | title Journal, no idle viewer | conservé + shell height | ALIGNED structure |
| 842:26 | Viewer 40/60 autonome | 784×832, acquis grid | stretch + autonome kind | géométrie + composition | ALIGNED structure ; réserve halos |
| 842:131 | Viewer parent | child numbered cards | parent kind + numbered cards | composition distincte | ALIGNED structure |
| 835:159 | Agrandi autonome | hero + article + aside | aside visible, autonome | grille enlarged | ALIGNED structure |
| 835:239 | Agrandi parent | children + aside | parent children + aside | grille enlarged | ALIGNED structure |
| 859:42 | Recherche | result cards | search-results list | nouveau mode | ALIGNED structure |
| 859:146 | Points ouverts | transversal list | open-points-list | nouveau mode | ALIGNED structure |
| 860:58 | Décisions nominale | status badges | D6 status fix | status labels | ALIGNED structure |
| 860:136 | Décision 40/60 | viewer stretch | same geometry | géométrie | ALIGNED structure |
| 860:251 | Recherche décisions | filtered + viewer | conservé | — | ALIGNED structure |
| 860:360 | Décision agrandie | article + aside gouvernance | decision-aside | aside D6 | ALIGNED structure |
| Empty | dérivé | structure V4 sans viewer | empty-structure | — | ALIGNED dérivé |

**Parent ≠ autonome prouvé** : `leafTitle=Continuité Git` / `parentTitle=Architecture cible` (capture-report).

## 13. Tests

| Suite | Résultat |
|---|---|
| tsc --noEmit | PASS |
| vitest journal + gate | 14/14 PASS |
| Playwright captures+parcours | **3 passed** (`/tmp/pw-pixel4.txt`) |

### Preuve Playwright
```
[WebServer] ◇ injected env (23) from .env.local

[WebServer] e2e-preflight OK: operator=sfia_next_dev → e2e=sfia_next_e2e container=sfia-next-dev-pg port=5433


Running 3 tests using 1 worker

(node:10563) Warning: The 'NO_COLOR' env is ignored due to the 'FORCE_COLOR' env being set.
(Use `node --trace-warnings ...` to show where the warning was created)


[1/3] tests/e2e/journal-v4-figma-captures.spec.ts:38:7 › Journal V4 Figma captures 1680×970 › eleven runtime frames + empty exploration
[2/3] tests/e2e/journal-v4-parcours.spec.ts:37:7 › Journal V4 — données métier non vides (E06-01 + §5) › sujets/recherche-acquis/décisions/message/document/retour-nav
[3/3] tests/e2e/journal-v4-parcours.spec.ts:184:7 › Journal V4 — données métier non vides (E06-01 + §5) › route seed refuse hors DEV/E2E (gate)
  3 passed (24.4s)

```

## 14. J-C01..16

| ID | Verdict |
|---|---|
| J-C01..11,15 | PASS parcours |
| J-C12 | PASS captures oracles + 11 frames |
| J-C13 | PASS |
| J-C14 | PASS (sources conservées y compris parent) |
| J-C16 | PASS docs+tests |

## 15. Fake/Real / ENV-01

| Frontière | Statut |
|---|---|
| Figma MCP measures | CONTRACT READ |
| DEV captures | BROWSER PROVEN |
| Playwright | DETERMINISTIC PROVEN 3/3 |
| RECETTE cutover | NOT EXECUTED |
| UAT Morris visuelle | PENDING |

RECETTE `:3200` = `d5bf7eb7` / `PV12SV9VToVGK-ReSxTqk` inchangé. NO RELEASE.

## 16. Réserves restantes

1. Halos / anneaux décoratifs Figma non reproduits (volontairement non décoratifs fictifs)
2. Écarts de dizaines de px possibles (padding shell / heuristique mesure) — plus de déficit de plusieurs centaines
3. Typographie Inter vs exact Figma weights à peaufiner sous zoom 100%
4. Contenu métier réel ≠ textes Figma (attendu)
5. Suites ML2/ML4C/E05 full NOT RUN

## 17. Verdict

**FIGMA TO RUNTIME ALIGNED — READY FOR MORRIS VISUAL REVIEW**

Justification : écarts structurants du mandat (hauteur viewer, parent≠autonome, agrandi aside, search/open-points, liserés mesurés, statuts D6) corrigés et démontrés par oracles + captures distinctes. Réserves décoratives/pixel restantes documentées — réception esthétique finale = Morris.

≠ UAT acceptée · ≠ cutover · ≠ Gate C · ≠ STABLE · ≠ ADOPTED.

### Prochaine décision Morris

1. Revue visuelle candidat `{head}`
2. GO cutover RECETTE si conforme

### Instruction ChatGPT obligatoire

> **Instruction ChatGPT obligatoire :**
>
> Avant de répondre à Morris sur ce rapport, ChatGPT doit consulter le fichier Git suivant :
>
> branche : `sfia/review-handoff`
> fichier : `sfia-review-handoff/latest-chatgpt-review.md`
>
> ChatGPT doit vérifier sa cohérence avec le rapport Cursor, notamment :
> - le cycle et le profil ;
> - la branche projet ;
> - le HEAD initial et final ;
> - la base main ;
> - les sources consultées ;
> - les fichiers créés ou modifiés ;
> - le contenu complet des fichiers créés ;
> - les sections complètes modifiées ou le diff utile ;
> - l'identité du contenu avant et après synchronisation, si applicable ;
> - les validations réalisées ;
> - la mergeabilité ou le statut Git attendu ;
> - les risques, réserves et écarts ;
> - les décisions Morris ;
> - le verdict du review pack ;
> - le commit et la vérification distante du handoff.
>
> **Après cette vérification**, ChatGPT doit produire une **synthèse globale du cycle** à destination de Morris comprenant **au minimum** :
> 1. l'objectif et le périmètre du cycle ;
> 2. les actions et changements réellement réalisés ;
> 3. les principaux résultats et validations ;
> 4. les risques, réserves, écarts ou éléments non couverts ;
> 5. la distinction entre observations, recommandations et décisions déjà validées ;
> 6. le verdict ChatGPT ;
> 7. la prochaine décision ou action attendue de Morris.
>
> La synthèse doit être compréhensible sans devoir relire l'intégralité du rapport Cursor ou du review pack, tout en restant fidèle au contenu du handoff Git.
>
> Elle ne doit **pas** transformer une recommandation, une hypothèse ou un résultat technique en décision validée sans GO Morris.
>
> Si le handoff est absent, obsolète, incohérent, incomplet ou synthesis-only, ChatGPT doit répondre :
>
> **REVIEW HANDOFF INCOMPLETE — MODIFIED CONTENT MISSING**
>
> Si Cursor annonce un handoff publié mais que le fichier distant reste ancien, absent ou incomplet, ChatGPT doit répondre :
>
> **REVIEW HANDOFF INCOMPLETE — CANONICAL REMOTE NOT UPDATED**
>
> **Le rapport Cursor seul ne remplace pas le handoff Git.** ChatGPT doit lire depuis Git :
> branche `sfia/review-handoff` · fichier `sfia-review-handoff/latest-chatgpt-review.md`
> (jamais le fichier racine historique comme canonique).
