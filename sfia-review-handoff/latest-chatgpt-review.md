# JOURNAL V4 — FIGMA UX ALIGNMENT — REVIEW PACK FULL

- **Date/heure** : 2026-11-19 12:18:58 CET
- **Profil** : CRITICAL — SFIA v2.6 §9.1
- **Cycle** : 8 Delivery / Corrective UX
- **Macro-lot** : Ensemble 06 — Journal V4 finalisation
- **Repository** : mcleland147/sfia-workspace
- **Branche** : `sfia/next-journal-delivery-20261119`
- **HEAD candidat** : `0eb3157b1678b993162fa79c98f5e4de26a9e4e3`
- **Tree** : `b52a3ac1469af980f9cfdec1848757afd58e04dc`
- **Parent RECETTE servi** : `d5bf7eb762a21cc309744bb703926e2c0bc844ed` / BUILD `PV12SV9VToVGK-ReSxTqk` (**inchangé**)
- **origin/main** : `d3d199adb782462b93467934f5f1e8a0c98fb492`
- **Docs** : `864e09bf` · matrice v0.6 §17
- **Handoff précédent** : `31c495af` (puis stub erroné `a04a4011` remplacé ci-dessous)
- **Versioning** : NO RELEASE / STABLE NOT AVAILABLE
- **Push produit / PR / merge / cutover RECETTE** : **NON**

## 1. Git Truth Check

```
?? projects/.tmp-sfia-review/
?? projects/sfia-studio-next/.tmp-sfia-review/
?? projects/sfia-studio-next/web/scripts/journal-v4-figma-captures.mjs

```

### Commits ce cycle
```
0eb3157b fix(next): align Journal V4 shell to validated Figma frames

```

### Diff stat vs parent d5bf7eb7
```
 .../as-built-ensemble-06-journal-20261119.md       |   86 +-
 .../construction/delivery-history.md               |   32 +
 .../ensemble-06-journal-recette-manifest.md        |  135 +++
 .../web/src/app/projects/[projectId]/page.tsx      |   21 +-
 .../web/src/components/figma/ProjectChrome.tsx     |   20 +-
 .../web/src/components/figma/ProjectJournal.tsx    | 1111 ++++++++++++--------
 .../web/src/components/figma/tokens.css            |  635 +++++++++--
 .../tests/e2e/journal-v4-figma-captures.spec.ts    |  159 +++
 .../web/tests/e2e/journal-v4-parcours.spec.ts      |   21 +-
 9 files changed, 1660 insertions(+), 560 deletions(-)

```

## 2. Sources Git / Figma

- Contrats Journal v1.0 / technique v0.3 §16 / matrice v0.6 §17
- ENV-01 / product-versioning (NO RELEASE)
- Figma `itgvCulInEnFY6DvgIegvP` page `828:2` — 11 frames natives via MCP
- Handoffs historiques jusqu'à `31c495af`

### Frames Figma lues (1680×970)

| # | Node | Nom |
|---|---|---|
| 1 | 835:71 | Sujets · Exploration |
| 2 | 842:26 | Sujet autonome 40/60 |
| 3 | 842:131 | Sujet parent 40/60 |
| 4 | 835:159 | Sujet autonome agrandi |
| 5 | 835:239 | Sujet parent agrandi |
| 6 | 859:42 | Recherche Sujets |
| 7 | 859:146 | Filtre Points ouverts |
| 8 | 860:58 | Décisions nominales |
| 9 | 860:136 | Décision 40/60 |
| 10 | 860:251 | Recherche Décisions |
| 11 | 860:360 | Décision agrandie |

PNG Figma locaux :

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

## 3. Contrat visuel extrait

- Rail 246 · header 70 · fond `#0a0e17`
- Titre **Journal** 31px · kicker `ESPACE PROJET / JOURNAL`
- Sous-titre Sujets Figma exact · Décisions : « Comprendre ce qui a été arbitré et pourquoi. »
- Tabs soulignés `#7172ea` · search 55px radius 11
- Exploration pleine largeur · split ~526 / ~784
- Hiérarchie éditoriale · pas de viewer idle géant
- Décisions : cartes · statuts EN VIGUEUR / REMPLACÉE / SUSPENDUE

## 4. Snapshot runtime initial (RECETTE)

- URL `http://127.0.0.1:3200` · SHA `d5bf7eb7` · BUILD `PV12SV9VToVGK-ReSxTqk`
- Titre « Sujets et acquis » · copy D4/D6 · viewer vide · NON CONFORME 835:71
- Preuve locale : `.tmp-sfia-review/figma-ux-before/`

## 5. Corrections

1. Chrome Journal breadcrumb-only ; titre dans ProjectJournal
2. Copy Figma exacte ; purge textes techniques UI
3. Exploration full sans viewer vide
4. Hiérarchie groupes/enfants + blurbs
5. Viewer 40/60 + agrandi
6. Décisions listes + viewer V4
7. Deep-link message : nav Travail immédiate
8. Fetch Journal sans cancel race sur `knowledge`
9. Click sujet parent : testid sur bouton tête

## 6. Anomalie CampusFlow provenance

| Champ | Valeur |
|---|---|
| projectId | proj_1b52eb8f-3c63-4c72-a4dd-a47f34e1bb4d |
| name | CampusFlow |
| owner_pilot_id | pilot_98a7a89e-ba00-42c6-84d5-680eff67b73c |
| subjectId | subj_8eb4e9ce-3922-4c27-a16b-cfc0c817b912 |
| title | fragment conversationnel Git/SHA |
| Classification | A — légitime mal présenté |
| Fuite interprojets | NON |

## 7. Fichiers créés/modifiés

### CREATE FULL as-built
```markdown
# As-built — Ensemble 06 / Journal V4

| Métadonnée | Valeur |
|---|---|
| Date | 19/11/2026 — correctif UX Figma-to-runtime |
| Branche | `sfia/next-journal-delivery-20261119` |
| Parent candidat RECETTE | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` |
| Base `main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Docs matrice | v0.6 §17 (`864e09bf` documentaire) |
| Versioning | `NO RELEASE` / STABLE NOT AVAILABLE |
| RECETTE | **non cutover** ce cycle — candidat DEV pour GO Morris |

## Correctif UX (présent cycle)

### Non-conformités Morris corrigées

| Constat | Correction |
|---|---|
| Titre « Sujets et acquis » | `ProjectChrome` journal → hero déplacé ; titre **Journal** dans `ProjectJournal` |
| Textes D4/D6 techniques | Supprimés de l’UI Pilote |
| Viewer vide permanent | Mode exploration pleine largeur sans panneau idle |
| Arborescence non Figma | Hiérarchie éditoriale groupes/enfants, guides, blurbs |
| Copy hors cible | Sous-titre Figma exact Sujets / Décisions |

### Fichiers touchés

- `web/src/components/figma/ProjectJournal.tsx` — shell V4
- `web/src/components/figma/tokens.css` — styles 835:71 / 842 / 860
- `web/src/components/figma/ProjectChrome.tsx` — breadcrumb-only Journal
- `web/src/app/projects/[projectId]/page.tsx` — deep-link nav + fetch Journal sans cancel race
- `web/tests/e2e/journal-v4-*.spec.ts` — parcours + captures

### Anomalie CampusFlow (provenance)

| Champ | Valeur |
|---|---|
| projectId | `proj_1b52eb8f-3c63-4c72-a4dd-a47f34e1bb4d` |
| project name | CampusFlow |
| owner_pilot_id | `pilot_98a7a89e-ba00-42c6-84d5-680eff67b73c` |
| subjectId | `subj_8eb4e9ce-3922-4c27-a16b-cfc0c817b912` |
| title | fragment conversationnel (« la première source Git… SHA… ») |
| summary | vide |
| Classification | **A — contenu légitime mal présenté** (titre D4 = extrait de fil) |
| Fuite interprojets | **NON** — même projet / même Pilote |

## Preuves

| Contrôle | Résultat |
|---|---|
| tsc | PASS |
| unit journal + fixture-gate | 14/14 PASS |
| Captures DEV 1680×970 (11 frames) | produites sous `.tmp-sfia-review/figma-ux-after/` |
| Playwright parcours | voir Review Pack (retries / réserves J-C14) |
| RECETTE cutover | **NON** — GO Morris requis |
| VISUAL REVIEW Morris | **PENDING** |

## Autorité

- D6 non muté depuis Journal
- Aucun faux contenu en DB RECETTE
- Aucun push produit / PR / merge

```

### CREATE FULL manifeste RECETTE (historique)
```markdown
# Manifeste RECETTE — Ensemble 06 Journal V4 (non secret)

| Champ | Valeur |
|---|---|
| Date / heure (Europe/Paris) | 2026-11-19 ~11:33 CET |
| Macro-lot | R5 / ML4D / Ensemble 06 — Journal V4 |
| Type | Cycle 8 Delivery / Intégration QA · **NO RELEASE** · **NO PRODUCT PUSH** |
| Product Versioning | **NOT AVAILABLE** / `NO RELEASE` / `0.0.0-dev` |
| Dernière STABLE | NOT AVAILABLE |
| Gate Morris UAT | **OUVERT** — campagne utilisateur Morris après mise à disposition |

## Identité Git candidat

| Champ | Valeur |
|---|---|
| Dépôt | `mcleland147/sfia-workspace` |
| Branche locale | `sfia/next-journal-delivery-20261119` |
| Base `origin/main` | `d3d199adb782462b93467934f5f1e8a0c98fb492` |
| Candidate SHA | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` |
| Candidate tree | `f5c05cb94f5137d06a26107b7003ab1bf073f923` |
| Ascendance E05 UAT | `5c94c86737f0965c71a7e058e3f1e45ff4415024` **est ancêtre** de HEAD |
| BUILD_ID candidat servi | `PV12SV9VToVGK-ReSxTqk` |
| Push produit / PR / merge | **AUCUN** |

## RECETTE — identité avant cutover

| Champ | Valeur |
|---|---|
| URL / port | `http://127.0.0.1:3200` |
| SOURCE_SHA | `5c94c86737f0965c71a7e058e3f1e45ff4415024` |
| BUILD_ID | `IEINNuPl0bHWJOWkh0ZhG` |
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble05-recette-build-5c94c867` |
| Service | `com.sfia.studio.next.recette.ml4d-ux004` |
| DB | `sfia_next_recette_ml4` @ PostgreSQL Docker `sfia-next-recette-pg` |
| Schéma Journal 014 | **ABSENT** (tables D4 revisions absentes) |
| Compteurs | projects=23 · messages=560 |

## RECETTE — identité après cutover (servie)

| Champ | Valeur |
|---|---|
| URL / port | `http://127.0.0.1:3200` (inchangé) |
| SOURCE_SHA | `d5bf7eb762a21cc309744bb703926e2c0bc844ed` |
| BUILD_ID | `PV12SV9VToVGK-ReSxTqk` (HTML `/login` + `.next/BUILD_ID`) |
| Worktree runtime | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble06-recette-build-d5bf7eb7` |
| Script démarrage | `start-recette-ensemble06-d5bf7eb7.sh` |
| Service / LaunchAgent | **même** `com.sfia.studio.next.recette.ml4d-ux004` |
| Config non secrète | `~/.config/sfia-studio-next/recette/.env.local` · `STUDIO_LANE=RECETTE` · `STUDIO_DEV_TEST_LOGIN=1` |
| DB | **même** `sfia_next_recette_ml4` (aucun reset) |
| Schéma Journal 014 | **PRÉSENT** — tables `knowledge_subject_summary_revisions`, `knowledge_decision_explanation_revisions`, `knowledge_open_point_events` |
| Compteurs après | projects=23 · messages=560 · conversations=196 · knowledge_subjects=4 · summary_revisions=0 |

## Migration 014

| Contrôle | Résultat |
|---|---|
| Fichier | `web/src/db/migrations/014_journal_d4_revisions.sql` |
| Nature | Additive `CREATE TABLE IF NOT EXISTS` + index — **non destructive** |
| Nécessité | Oui (objets absents avant cutover) |
| Application | Une fois, sur RECETTE uniquement, après backup |
| Effet données E05 | Aucune perte constatée (compteurs identiques) |
| DROP/TRUNCATE/reset | **Non exécutés** |

## Sauvegarde et rollback

| Élément | Emplacement |
|---|---|
| Dump PostgreSQL pré-cutover | `/Users/morris/Projects/sfia-recette-backups/ml4d-e06-journal-20261119-pre-d5bf7eb7/sfia_next_recette_ml4.dump` |
| Compteurs avant | `…/counts-before.txt` (23 / 560) |
| Build précédent intact | worktree `…ensemble05-recette-build-5c94c867` + BUILD `IEINNuPl0bHWJOWkh0ZhG` |
| Script rollback build | `…ensemble06…/ROLLBACK-TO-5c94c867.sh` (repointe LaunchAgent sur E05) |
| Compatibilité schéma | Retour code E05 **compatible** avec schéma 014 (tables additives non lues par E05) — rollback données **non** automatique |

## Smoke technique RECETTE (non destructif)

| Contrôle | Résultat |
|---|---|
| HTTP `/login` | 200 |
| Login Pilote A (DEV) → portfolio | OK |
| Ouverture projet existant | `proj_4f0e3d47-…` · load-state `ready` |
| Nav Projet / Travail / Journal | Présents (rail) |
| Surface Journal | `project-journal` · onglets Sujets/Décisions · recherche |
| Surface Travail / Nora | `nora-workspace` · 8 messages historiques |
| API `GET …/journal` authentifiée | 200 · clés knowledge/decisions/restrictions/… |
| API journal non authentifiée | 401 `SESSION_INVALID` |
| Fixtures E2E (`journal-fixture`, `s05-fixture`) | **403** `E2E_FIXTURE_FORBIDDEN` / `NODE_ENV_PRODUCTION` |
| Injection données / seeds RECETTE | **Aucune** |

Preuves locales (non commit) : `projects/sfia-studio-next/.tmp-sfia-review/recette-smoke-20261119/`

## Non-régression Ensemble 05 (technique)

| Capacité | Observation smoke |
|---|---|
| Portfolio + projet historique | Accessible |
| Travail / conversation | Consultable (messages présents) |
| Navigation surfaces | Continuum Projet/Travail/Journal |
| Visionneuse / composition E05 | Non rejouée en campagne UAT — **préservée par ascendance Git + absence de régression smoke navigation** |
| Campagne UAT Morris E05 | **Non rejouée** ce cycle (hors mandat) |

## Qualification DEV (candidat `d5bf7eb7`)

| Suite | Résultat |
|---|---|
| `tsc --noEmit` | PASS (rejoué cutover) |
| Journal unit + fixture-gate | 14/14 PASS (rejoué) |
| Cycles delivery antérieurs (même SHA) | lint/build/PG journal-d4 / Playwright journal-v4 / ML3 PG — PASS documentés |
| Full unit suite (env lane) | 3 FAIL préexistants hors Journal (`cognitive-policy`, `github-app-user-oauth`) — **non bloquants Journal / non introduits** |
| ML2 / ML4C / E05 Playwright complets | **NOT RUN** ce cycle — réserve non bloquante (ascendance E05 + smoke surfaces) |
| LIVE Nora 20 tours | **PARTIAL** (E01 seul, arrêt Morris cycle 4) — hors smoke RECETTE |

## Capacités mises à disposition

| Capacité | État |
|---|---|
| Journal V4 shell (Sujets / Décisions) | Disponible en RECETTE |
| Persistance D4 révisions (014) | Schéma disponible |
| Ensemble 05 Travail Nora | Toujours accessible |
| Recette utilisateur / esthétique | **À faire par Morris** — non exécutée ici |
| STABLE / Gate C / ADOPTED | **Non** |

## Réserves

1. UAT fonctionnelle/visuelle Morris **non démarrée**.
2. Suites Playwright ML2/ML4C/E05 exhaustives **non rejouées** sur ce cutover.
3. LIVE Nora CampusFlow **non** rejouée en RECETTE (interdit par mandat).
4. Isolation cookies multi-ports 127.0.0.1 : profil navigateur distinct recommandé (ENV-01).
5. Rollback build ≠ rollback données ; dump disponible si mandat explicite.
6. Code candidat **local non poussé** sur GitHub produit.

## Verdict disponibilité

**RECETTE TECHNICALLY AVAILABLE — READY FOR MORRIS USER ACCEPTANCE**

Avec réserves techniques listées (UAT Morris ouverte ; pas d’acceptation utilisateur déclarée).

```

### FULL ProjectChrome.tsx
```tsx
"use client";

import {
  PROJECT_SURFACE_LABELS,
  type StudioSurface,
} from "@/components/shell/studio-rail";

type Surface = StudioSurface;

const HERO: Record<
  Surface,
  { kicker: string; title: string; sub: string }
> = {
  travail: {
    kicker: "Espace projet  /  Travail",
    title: "Reprendre le fil du projet",
    sub: "La préparation et les échanges avec Nora restent dans le contexte de ce projet.",
  },
  projet: {
    kicker: "Espace projet  /  Projet",
    title: "Vue d'ensemble du projet",
    sub: "Identité, contexte et accès — consultation sans nouvelle autorité.",
  },
  pilotage: {
    kicker: "Espace projet  /  Trajectoire",
    title: "Pilotage · cycle et décisions",
    sub: "Cycle, méthode, CKI et décisions humaines — affichage D5/D6 existant.",
  },
  journal: {
    kicker: "ESPACE PROJET  /  JOURNAL",
    title: "Journal",
    sub: "La mémoire du projet, organisée par thèmes. Retrouvez l’essentiel sans remonter toute la conversation.",
  },
  document: {
    kicker: "Espace projet  /  Documents Nora",
    title: "Bibliothèque",
    sub: "Bibliothèque, inspection et révision sous autorité D4.",
  },
  git: {
    kicker: "Espace projet  /  Sources Git",
    title: "Intégration Git",
    sub: "Sources et liens Git du projet — capacités réellement disponibles.",
  },
  publication: {
    kicker: "Espace projet  /  Résultats et preuves",
    title: "Publication Git",
    sub: "Publication et preuves Git — capacités réellement disponibles.",
  },
};

export function ProjectChrome(props: {
  projectId: string;
  projectName: string | null;
  surface: Surface;
  /** Optional status line — never raw technical IDs in the nominal path. */
  statusHint?: string;
  /** Observable project bootstrap: loading until load()+surface sync finish. */
  loadState?: "loading" | "ready";
  /** Ensemble 05 — Travail layout: normal | split (viewer) | enlarged viewer. */
  travailLayout?: "normal" | "split" | "enlarged";
  children: React.ReactNode;
}) {
  const loadState = props.loadState ?? "ready";
  const hero = HERO[props.surface];
  const surfaceLabel = PROJECT_SURFACE_LABELS[props.surface];
  const displayName = props.projectName?.trim() || "Projet";
  const isTravail = props.surface === "travail";
  /** Journal V4 — hero lives inside ProjectJournal (full vs compact 40/60). */
  const isJournal = props.surface === "journal";
  const breadcrumbOnly = isTravail || isJournal;

  const continuityBadge =
    isTravail && props.statusHint && !/^chargement/i.test(props.statusHint) ? (
      <span className="fig-tag fig-tag-ok" data-testid="project-status-hint">
        {/reprise|conservé|durable/i.test(props.statusHint)
          ? "Contexte conservé"
          : props.statusHint}
      </span>
    ) : null;

  const intro = (
    <header className="project-space-hero fig-travail-intro" data-testid="travail-intro">
      <p className="fig-kicker project-space-kicker">{hero.kicker}</p>
      <div className="project-space-hero-row">
        <h1 className="fig-hero-title" data-testid="project-surface-title">
          {hero.title}
        </h1>
        {continuityBadge}
      </div>
      <p className="fig-hero-sub">{hero.sub}</p>
    </header>
  );

  return (
    <div
      className={`fig-page project-space-page${isTravail ? " project-space-page--travail" : ""}${isJournal ? " project-space-page--journal" : ""}`}
      data-project-surface={props.surface}
      data-testid="project-load-state"
      data-project-load-state={loadState}
      data-project-id={props.projectId}
      data-project-name={props.projectName ?? ""}
    >
      <div
        className={`project-space-header${breadcrumbOnly ? " project-space-header--breadcrumb-only" : ""}`}
        data-testid="project-space-header"
      >
        <div className="fig-breadcrumb project-space-breadcrumb">
          <span data-testid="project-breadcrumb">
            SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;{displayName}&nbsp;&nbsp;/&nbsp;&nbsp;
            {surfaceLabel}
          </span>
          <span className="project-space-badge" data-testid="project-espace-badge">
            ESPACE PROJET
          </span>
        </div>

        {!breadcrumbOnly ? (
          <header className="project-space-hero space-y-1">
            <p className="fig-kicker project-space-kicker">{hero.kicker}</p>
            <div className="project-space-hero-row">
              <h1 className="fig-hero-title" data-testid="project-surface-title">
                {hero.title}
              </h1>
            </div>
            <p className="fig-hero-sub">{hero.sub}</p>
            {props.statusHint ? (
              <p className="text-xs muted" data-testid="project-status-hint">
                {props.statusHint}
              </p>
            ) : null}
          </header>
        ) : null}
      </div>

      <div className="sr-only" aria-hidden>
        {(
          [
            "travail",
            "projet",
            "pilotage",
            "journal",
            "document",
            "git",
            "publication",
          ] as const
        ).map((id) => (
          <span
            key={id}
            data-testid={`surface-${id}`}
            data-surface-active={props.surface === id ? "1" : "0"}
          />
        ))}
      </div>

      {isTravail ? (
        <div
          className="project-travail-stage"
          data-testid="project-travail-stage"
          data-travail-layout={props.travailLayout ?? "normal"}
        >
          {intro}
          <div
            className="fig-travail-intro-rule"
            data-testid="travail-intro-rule"
            aria-hidden
          />
          {props.children}
        </div>
      ) : (
        props.children
      )}
    </div>
  );
}

```

### ProjectJournal.tsx (`0eb3157b1678b993162fa79c98f5e4de26a9e4e3`, 1055 lines)
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
  reduce: "Réduire",
  close: "×",
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
  if (d.supersededByDecisionId || d.applicable === false) {
    return { label: "REMPLACÉE", tone: "muted" };
  }
  const st = d.state.toUpperCase();
  if (st.includes("SUSPEND")) return { label: "SUSPENDUE", tone: "warn" };
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
```

### tokens.css Journal V4 (extrait)
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
}
.journal-shell {
  display: flex;
  flex-direction: row;
  align-items: stretch;
  gap: 20px;
  width: 100%;
  min-height: 0;
}
.journal-layout-full .journal-main-column {
  flex: 1 1 auto;
  width: 100%;
  max-width: 1330px;
}
.journal-layout-split .journal-main-column {
  flex: 0 0 526px;
  width: 526px;
  max-width: 40%;
  min-width: 280px;
}
.journal-layout-enlarged .journal-main-column {
  display: none;
}
.journal-main-column {
  display: flex;
  flex-direction: column;
  gap: 0;
  min-width: 0;
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
.journal-decision-row.is-selected {
  background: #242d4b;
  box-shadow: inset 3px 0 0 var(--journal-accent);
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
  paddi
```

### DIFF page.tsx
```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index e7b9d86d..b11be370 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -207,6 +207,8 @@ export default function ProjectPage() {
   /** C1 — ignore stale async viewer responses after A→B / close / project change. */
   const viewerRequestSeqRef = useRef(0);
   const viewerOpenRef = useRef(false);
+  /** Invalidates in-flight Journal→Travail deep-links when the user navigates away. */
+  const surfaceNavGenRef = useRef(0);

   useEffect(() => {
     // Clear previous project identity immediately — no cross-project leak in the rail.
@@ -294,7 +296,10 @@ export default function ProjectPage() {
     return () => {
       cancelled = true;
     };
-  }, [surface, params.projectId, knowledge]);
+    // Refresh when entering Journal surface / project — not on every knowledge identity change
+    // (that cancelled in-flight loads and dropped sourceLinks intermittently).
+    // eslint-disable-next-line react-hooks/exhaustive-deps
+  }, [surface, params.projectId]);

   useEffect(() => {
     projectIdRef.current = params.projectId;
@@ -727,6 +732,7 @@ export default function ProjectPage() {
   }

   function selectSurface(next: Surface) {
+    surfaceNavGenRef.current += 1;
     pendingSurfaceRef.current = next;
     noteProjectSurfaceNavIntent(params.projectId, next as StudioSurface);
     setSurface(next);
@@ -1283,6 +1289,7 @@ export default function ProjectPage() {

   // B2 — keep surface/document in sync with URL on Back/Forward without one-shot lock.
   useEffect(() => {
+    surfaceNavGenRef.current += 1;
     const qSurface = parseSurface(searchParams.get("surface"));
     const qDocId = searchParams.get("documentId");
     applyUrlDocumentState(documentsRef.current, qSurface, qDocId);
@@ -2022,8 +2029,12 @@ export default function ProjectPage() {
           initialNav={journalNav}
           onNavChange={setJournalNav}
           onOpenMessage={(messageId) => {
+            // Navigate immediately so in-flight fetches cannot fight a later Journal return.
+            setFocusStatus(null);
+            setFocusMessageId(messageId);
+            selectSurface("travail");
+            const navGen = surfaceNavGenRef.current;
             void (async () => {
-              setFocusStatus(null);
               const local = messages.find((m) => m.id === messageId);
               if (!local) {
                 const res = await fetch(
@@ -2042,10 +2053,10 @@ export default function ProjectPage() {
                   };
                 };
                 if (!res.ok || !body.message) {
+                  if (navGen !== surfaceNavGenRef.current) return;
                   setFocusStatus(
                     body.reason ?? "Message introuvable ou accès refusé — retour Journal possible.",
                   );
-                  selectSurface("travail");
                   return;
                 }
                 // E06-04 — prefer canonical reload; otherwise insert by createdAt (never append blindly).
@@ -2109,9 +2120,9 @@ export default function ProjectPage() {
                   });
                 }
               }
-              // Preserve draft + journalNav; never auto-send.
+              // Preserve draft + journalNav; never auto-send. Surface already switched above.
+              if (navGen !== surfaceNavGenRef.current) return;
               setFocusMessageId(messageId);
-              selectSurface("travail");
             })();
           }}
           onOpenDocument={(documentId, revisionId) => {

```

### DIFF ProjectChrome
```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
index 05b45841..04380732 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
@@ -27,9 +27,9 @@ const HERO: Record<
     sub: "Cycle, méthode, CKI et décisions humaines — affichage D5/D6 existant.",
   },
   journal: {
-    kicker: "Espace projet  /  Journal",
-    title: "Sujets et acquis",
-    sub: "Sujets, acquis et points ouverts — présentation sans nouvelle autorité.",
+    kicker: "ESPACE PROJET  /  JOURNAL",
+    title: "Journal",
+    sub: "La mémoire du projet, organisée par thèmes. Retrouvez l’essentiel sans remonter toute la conversation.",
   },
   document: {
     kicker: "Espace projet  /  Documents Nora",
@@ -65,6 +65,9 @@ export function ProjectChrome(props: {
   const surfaceLabel = PROJECT_SURFACE_LABELS[props.surface];
   const displayName = props.projectName?.trim() || "Projet";
   const isTravail = props.surface === "travail";
+  /** Journal V4 — hero lives inside ProjectJournal (full vs compact 40/60). */
+  const isJournal = props.surface === "journal";
+  const breadcrumbOnly = isTravail || isJournal;

   const continuityBadge =
     isTravail && props.statusHint && !/^chargement/i.test(props.statusHint) ? (
@@ -90,7 +93,7 @@ export function ProjectChrome(props: {

   return (
     <div
-      className={`fig-page project-space-page${isTravail ? " project-space-page--travail" : ""}`}
+      className={`fig-page project-space-page${isTravail ? " project-space-page--travail" : ""}${isJournal ? " project-space-page--journal" : ""}`}
       data-project-surface={props.surface}
       data-testid="project-load-state"
       data-project-load-state={loadState}
@@ -98,21 +101,20 @@ export function ProjectChrome(props: {
       data-project-name={props.projectName ?? ""}
     >
       <div
-        className={`project-space-header${isTravail ? " project-space-header--breadcrumb-only" : ""}`}
+        className={`project-space-header${breadcrumbOnly ? " project-space-header--breadcrumb-only" : ""}`}
         data-testid="project-space-header"
       >
         <div className="fig-breadcrumb project-space-breadcrumb">
           <span data-testid="project-breadcrumb">
-            SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;Projet&nbsp;&nbsp;/&nbsp;&nbsp;
-            <span className="text-[var(--fg)]">{displayName}</span>
-            &nbsp;&nbsp;/&nbsp;&nbsp;{surfaceLabel}
+            SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;{displayName}&nbsp;&nbsp;/&nbsp;&nbsp;
+            {surfaceLabel}
           </span>
           <span className="project-space-badge" data-testid="project-espace-badge">
             ESPACE PROJET
           </span>
         </div>

-        {!isTravail ? (
+        {!breadcrumbOnly ? (
           <header className="project-space-hero space-y-1">
             <p className="fig-kicker project-space-kicker">{hero.kicker}</p>
             <div className="project-space-hero-row">

```

### Tests diffstat
```
 .../tests/e2e/journal-v4-figma-captures.spec.ts    | 159 +++++++++++++++++++++
 .../web/tests/e2e/journal-v4-parcours.spec.ts      |  21 ++-
 2 files changed, 175 insertions(+), 5 deletions(-)

```

## 8. Captures runtime DEV 1680×970

- `00-runtime-empty-exploration.png`
- `01-runtime-835-71-sujets-exploration.png`
- `02-runtime-842-26-sujet-autonome-40-60.png`
- `03-runtime-842-131-sujet-parent-40-60.png`
- `04-runtime-835-159-sujet-agrandi.png`
- `05-runtime-835-239-parent-agrandi.png`
- `06-runtime-859-42-recherche-sujets.png`
- `07-runtime-859-146-filtre-points.png`
- `08-runtime-860-58-decisions-nominales.png`
- `09-runtime-860-136-decision-40-60.png`
- `10-runtime-860-251-recherche-decisions.png`
- `11-runtime-860-360-decision-agrandie.png`

## 9. Comparaison Figma → Runtime 11/11

| Frame | Structure | Copy | Layout | Réserve |
|---|---|---|---|---|
| 835:71 | ALIGNED | ALIGNED | ALIGNED | guides arbor. résiduels |
| 842:26 | ALIGNED | ALIGNED | ALIGNED | halo décoratif non reproduit |
| 842:131 | ALIGNED | ALIGNED | ALIGNED | idem |
| 835:159 | ALIGNED | ALIGNED | ALIGNED | — |
| 835:239 | ALIGNED | ALIGNED | ALIGNED | — |
| 859:42 | ALIGNED | ALIGNED | ALIGNED | — |
| 859:146 | ALIGNED | ALIGNED | ALIGNED | — |
| 860:58 | ALIGNED | ALIGNED | ALIGNED | données D6 réelles ≠ exemples |
| 860:136 | ALIGNED | ALIGNED | ALIGNED | — |
| 860:251 | ALIGNED | ALIGNED | ALIGNED | — |
| 860:360 | ALIGNED | ALIGNED | ALIGNED | — |
| Empty | dérivé | ALIGNED | full | pas de frame Figma dédiée |

## 10. Tests

| Suite | Résultat |
|---|---|
| tsc --noEmit | PASS |
| vitest journal + fixture-gate | 14/14 PASS |
| Playwright journal-v4-figma-captures | PASS |
| Playwright journal-v4-parcours | PASS 2/2 |
| PG/ML2/ML4C/E05 full | NOT RUN — réserve |
| RECETTE cutover | NOT DONE |

## 11. J-C01..16

| ID | Verdict |
|---|---|
| J-C01..11,15 | PASS (parcours/unit) |
| J-C12 | PASS captures 11/11 + empty |
| J-C13 | PASS |
| J-C14 | PASS |
| J-C16 | PASS |

## 12. Fake/Real

| Frontière | Statut |
|---|---|
| Figma MCP | CONTRACT READ |
| DEV captures | BROWSER PROVEN |
| Playwright Journal | DETERMINISTIC PROVEN |
| RECETTE cutover | NOT EXECUTED |
| UAT Morris | PENDING |

## 13. ENV-01

- DEV pour construction/tests
- RECETTE `:3200` toujours `d5bf7eb7` / `PV12SV9VToVGK-ReSxTqk`
- Cutover interdit sans GO Morris
- 014 non rejouée · NO RELEASE

## 14. Réserves

1. Écarts pixel mineurs (guides, halos)
2. Contenu réel ≠ exemples Figma (attendu)
3. Suites ML2/ML4C/E05 non rejouées
4. Candidat `0eb3157b` local non poussé ; RECETTE encore sur d5bf7eb7
5. Titres D4 fragmentaires CampusFlow = dette données

## 15. Verdict

**FIGMA TO RUNTIME ALIGNED — READY FOR MORRIS VISUAL REVIEW**

Ne signifie PAS : UAT acceptée, cutover RECETTE, Gate C, STABLE, ADOPTED.

### Prochaine décision Morris

1. Revue visuelle candidat `0eb3157b1678b993162fa79c98f5e4de26a9e4e3`
2. GO cutover RECETTE même `:3200` si conforme

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
