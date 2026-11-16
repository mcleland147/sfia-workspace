# Review Pack FULL — Ensemble 04 Vertical Layout Correction

- **Date** : 2026-11-16 22:40 UTC
- **Contrat** : R5 / ML4D — Ensemble 04 — CORRECTION CIBLÉE DE COMPOSITION VERTICALE
- **GO Morris** : CORRECTION DEV AUTORISÉE
- **Typologie** : RUN / correction bornée
- **Profil SFIA** : Standard v2.6
- **Review Handoff** : required / publish-in-cycle

## Verdict

**ENSEMBLE 04 — VERTICAL LAYOUT CORRECTION CANDIDATE READY**

READY FOR CHATGPT REVIEW

RECETTE UNCHANGED · MORRIS VISUAL ACCEPTANCE PENDING

- **Nouveau SHA candidat** : `351aea9607c5997f7343212a837dd13c0f1e4429`
- **Parent** : `a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6` (non amendé)
- **Branche** : `feat/next-ml4d-project-space-20261116`

NO PROJECT PUSH · NO PR · NO MERGE · NO STABLE · GATE C OPEN · ML5 NOT STARTED · NO ADOPTED

## 1. Git Truth Check

### Initial
- HEAD source : `a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6`
- Parent précédent : `20fb41ba…`
- Remote : `https://github.com/mcleland147/sfia-workspace.git`
- Untracked pertinent : seul `.tmp-sfia-review` (pack)
- Worktrees RECETTE : `…-a30e75c7` (servi) + `…-20fb41ba` (rollback) — non touchés

### Final
- HEAD : `351aea9607c5997f7343212a837dd13c0f1e4429`
- Amend : **non**
- Push produit : **non**
- RECETTE : toujours `a30e75c7` / `WUqfWdCB7T2rHzDvk-Hre`

### Diffstat `a30e75c7..351aea96`
```
 .../construction/delivery-history.md               |  17 ++
 .../dom-measures-travail.json                      |  79 ++++++-
 .../ensemble-04-project-space/manifest.json        |  85 +++++++-
 .../runtime-journal-nav-1680x970.png               | Bin 117645 -> 117326 bytes
 .../runtime-projet-overview-1680x970.png           | Bin 111998 -> 112890 bytes
 .../runtime-travail-1680x970.png                   | Bin 168303 -> 173116 bytes
 .../runtime-travail-long-name-1680x970.png         | Bin 169963 -> 174493 bytes
 .../runtime-unavailable-1680x970.png               | Bin 41477 -> 41475 bytes
 .../web/src/app/projects/[projectId]/page.tsx      |   1 +
 .../web/src/components/figma/NoraConversation.tsx  | 233 +++++++++++----------
 .../web/src/components/figma/ProjectChrome.tsx     |  83 +++++---
 .../web/src/components/figma/tokens.css            | 145 ++++++++++++-
 .../web/src/components/shell/StudioShell.tsx       |   7 +
 .../web/src/components/shell/studio-shell.css      |  16 ++
 .../tests/e2e/ml4c-long-thread-composer.spec.ts    |  10 +-
 .../web/tests/e2e/project-space-ensemble04.spec.ts |   7 +
 .../tests/e2e/project-space-f2-captures.spec.ts    |  61 +++++-
 17 files changed, 577 insertions(+), 167 deletions(-)

```

## 2. Sources

SFIA templates + operating model + guardrails ; SEF/roadmap ; ENV-01 ; product-versioning ; contrat Figma-to-code ; décision R5 ; handoff cutover `cb1eb0c6`/`24f0e783`.
Figma 652:8 (mesures contrat : intro rule Y234 ; conv 259–759 ; composer 784–921 h137 ; inspector 103–922 ; gap 25).

## 3. Diagnostic corrigé

Avant : un seul cadre englobait fil+compositeur ; compositeur trop haut ; espace bas inutilisé ; inspecteur trop court/bas ; intro trop dominante.

Après (DOM 1680×970 DPR1) :
```json
{
  "viewport": {
    "w": 1680,
    "h": 970,
    "dpr": 1
  },
  "rail": {
    "x": 0,
    "y": 0,
    "w": 246,
    "h": 970,
    "bottom": 970,
    "widthAttr": "246",
    "fill": "#0C101A"
  },
  "stage": {
    "x": 284,
    "y": 58,
    "w": 1357,
    "h": 896,
    "bottom": 954
  },
  "intro": {
    "x": 284,
    "y": 58,
    "w": 965,
    "h": 84,
    "bottom": 142
  },
  "introRule": {
    "x": 284,
    "y": 154,
    "w": 965,
    "h": 1,
    "bottom": 155
  },
  "workspace": {
    "x": 0,
    "y": 0,
    "w": 0,
    "h": 0,
    "bottom": 0
  },
  "conversation": {
    "x": 284,
    "y": 193,
    "w": 965,
    "h": 594,
    "bottom": 787
  },
  "aside": {
    "x": 1274,
    "y": 58,
    "w": 368,
    "h": 896,
    "bottom": 954
  },
  "inspector": {
    "x": 1274,
    "y": 58,
    "w": 368,
    "h": 896,
    "bottom": 954
  },
  "composer": {
    "x": 284,
    "y": 812,
    "w": 965,
    "h": 142,
    "bottom": 954
  },
  "thread": {
    "x": 305,
    "y": 250,
    "w": 923,
    "h": 520,
    "bottom": 770,
    "overflowY": "auto",
    "scrollHeight": 544,
    "clientHeight": 520
  },
  "gaps": {
    "conversationToComposer": 25,
    "composerInspectorBottomAlign": 0,
    "introToInspectorTop": 0,
    "bottomSlack": 16
  },
  "structure": {
    "composerInsideConversation": false,
    "embed": "1"
  },
  "projectName": {
    "x": 29,
    "y": 133,
    "w": 187,
    "h": 35,
    "bottom": 168,
    "lineClamp": "2",
    "fontSize": "13px",
    "fontWeight": "600"
  },
  "send": {
    "x": 1184,
    "y": 906,
    "w": 52,
    "h": 35,
    "bottom": 941,
    "aria": "Envoyer",
    "text": "\u2191"
  }
}
```

| Critère | Figma | DOM | Statut |
| --- | --- | --- | --- |
| Cartes séparées | 2 | composerInsideConversation=false | PASS |
| Gap conv→composer | 25 | 25 | PASS |
| Bas inspecteur/composer | alignés | Δ=0 | PASS |
| Intro ∥ inspecteur top | alignés | Δ=0 | PASS |
| Hauteur fil | ↑ | conversation h=594 thread client=520 | PASS |
| Composer h | ~137 | 142 (≤160) | PASS |
| Bottom slack | faible | 16 | PASS |
| Séparateur intro | visible | introRule y=154 | PASS |

## 4. Corrections

1. **ProjectChrome** — Travail : breadcrumb seul en tête ; intro dans `project-travail-stage` ; séparateur `travail-intro-rule`.
2. **NoraConversation** — `display:contents` embed ; conversation panel et compositeur = cartes siblings ; thread `overflow:auto` flex-1.
3. **StudioShell** — `data-travail-layout=1` (y compris URL sans `?surface=`) → main overflow hidden, page flex height.
4. **tokens.css** — grille 4 rangées × 2 colonnes ; inspecteur `grid-row:1/-1` ; gap 25.

## 5. Fichiers créés / complets

### NoraConversation.tsx (complet)
```tsx
"use client";

import { SafeMarkdown } from "@/components/SafeMarkdown";

export type NoraMsg = {
  id: string;
  role: string;
  content: string;
  status: string;
};

export function NoraConversation(props: {
  messages: NoraMsg[];
  draft: string;
  busy: boolean;
  unresolvedPending?: boolean;
  activity?: "idle" | "preparing" | "error";
  status?: string;
  onDraft: (v: string) => void;
  onSend: () => void;
  onReconcile?: () => void;
  aside?: React.ReactNode;
  /** When set, participates in project-travail-stage CSS grid via display:contents. */
  embeddedInStage?: boolean;
}) {
  const n = props.messages.length;
  const frame = n === 0 ? "161:216" : n <= 2 ? "161:288" : "94:214";
  const variantLabel =
    n === 0 ? "Première conversation" : n <= 2 ? "Reprise contextualisée" : "Fil long";
  const embedded = Boolean(props.embeddedInStage);

  return (
    <div
      className={
        embedded
          ? "fig-travail-workspace-embed"
          : "fig-workspace fig-nora-responsive fig-travail-workspace"
      }
      data-figma-frame={frame}
      data-figma-mobile-frames="282:468,282:492"
      data-testid="nora-workspace"
      data-travail-embed={embedded ? "1" : "0"}
    >
      <section
        className="fig-conversation-panel"
        data-testid="nora-conversation-panel"
        data-nora-main="1"
        id="nora-main"
      >
        <div className="fig-conversation-head">
          <p className="fig-kicker !mb-0">Conversation du projet</p>
          <span className="fig-tag fig-tag-muted">{variantLabel}</span>
          {props.unresolvedPending ? (
            <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
          ) : null}
        </div>

        <div className="fig-nora-thread" data-testid="nora-thread">
          {n === 0 ? (
            <div className="fig-msg fig-msg-nora text-sm" data-testid="nora-first-empty">
              <div className="fig-msg-meta">
                <span className="fig-msg-avatar" aria-hidden>
                  N
                </span>
                <span className="fig-msg-role">Nora</span>
              </div>
              <p className="fig-msg-body">
                Première conversation — écrivez pour démarrer le fil du projet. Aucun message fictif
                n&apos;est prérempli.
              </p>
            </div>
          ) : null}
          {props.messages.map((m) => {
            const isNora = m.role === "assistant";
            return (
              <article
                key={m.id}
                className={`fig-msg ${isNora ? "fig-msg-nora" : "fig-msg-pilot"}`}
              >
                <div className="fig-msg-meta">
                  {isNora ? (
                    <span className="fig-msg-avatar" aria-hidden>
                      N
                    </span>
                  ) : null}
                  <span className={`fig-msg-role ${isNora ? "" : "fig-msg-role-pilot"}`}>
                    {isNora ? "Nora" : "Pilote"}
                  </span>
                  <span className="sr-only">{m.status}</span>
                </div>
                {isNora ? (
                  <div className="fig-msg-body">
                    <SafeMarkdown content={m.content} />
                  </div>
                ) : (
                  <div className="fig-msg-body whitespace-pre-wrap">{m.content}</div>
                )}
              </article>
            );
          })}
          {props.activity === "preparing" ? (
            <div className="fig-alert" role="status">
              Nora prépare une réponse…
            </div>
          ) : null}
        </div>
      </section>

      <div
        className="fig-composer fig-travail-composer"
        data-testid="nora-composer"
      >
        <textarea
          className="fig-travail-composer-input"
          value={props.draft}
          onChange={(e) => props.onDraft(e.target.value)}
          placeholder="Écrire à Nora dans ce projet…"
          aria-label="Message à Nora"
          data-testid="thread-draft"
          rows={2}
          onKeyDown={(e) => {
            if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
              e.preventDefault();
              props.onSend();
            }
          }}
        />
        <div className="fig-travail-composer-bar">
          <span className="fig-travail-composer-hint">
            Votre message reste rattaché au projet actif
          </span>
          <button
            type="button"
            className="fig-travail-composer-send"
            disabled={props.busy || !props.draft.trim()}
            onClick={props.onSend}
            data-testid="thread-send"
            aria-label="Envoyer"
          >
            <span aria-hidden>↑</span>
          </button>
        </div>
        {props.unresolvedPending && props.onReconcile ? (
          <div className="space-y-1 mt-2" data-testid="thread-pending-banner">
            <p className="text-xs muted">
              Tentative non résolue — réconcilier avant un nouveau tour.
            </p>
            <button
              type="button"
              className="btn secondary"
              disabled={props.busy}
              data-testid="thread-reconcile-pending"
              onClick={props.onReconcile}
            >
              Réconcilier la tentative en cours
            </button>
          </div>
        ) : null}
        {props.status ? (
          <p className="sr-only" data-testid="thread-nora-status" role="status">
            {props.status}
          </p>
        ) : null}
      </div>

      {props.aside ? (
        <aside className="fig-travail-aside" data-testid="nora-aside">
          {props.aside}
        </aside>
      ) : null}
    </div>
  );
}

```

### ProjectChrome.tsx (complet)
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
    kicker: "Espace projet  /  Journal",
    title: "Sujets et acquis",
    sub: "Sujets, acquis et points ouverts — présentation sans nouvelle autorité.",
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
  children: React.ReactNode;
}) {
  const loadState = props.loadState ?? "ready";
  const hero = HERO[props.surface];
  const surfaceLabel = PROJECT_SURFACE_LABELS[props.surface];
  const displayName = props.projectName?.trim() || "Projet";
  const isTravail = props.surface === "travail";

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
      className={`fig-page project-space-page${isTravail ? " project-space-page--travail" : ""}`}
      data-project-surface={props.surface}
      data-testid="project-load-state"
      data-project-load-state={loadState}
      data-project-id={props.projectId}
      data-project-name={props.projectName ?? ""}
    >
      <div
        className={`project-space-header${isTravail ? " project-space-header--breadcrumb-only" : ""}`}
        data-testid="project-space-header"
      >
        <div className="fig-breadcrumb project-space-breadcrumb">
          <span data-testid="project-breadcrumb">
            SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;Projet&nbsp;&nbsp;/&nbsp;&nbsp;
            <span className="text-[var(--fg)]">{displayName}</span>
            &nbsp;&nbsp;/&nbsp;&nbsp;{surfaceLabel}
          </span>
          <span className="project-space-badge" data-testid="project-espace-badge">
            ESPACE PROJET
          </span>
        </div>

        {!isTravail ? (
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
        <div className="project-travail-stage" data-testid="project-travail-stage">
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

## 6. Diffs exploitables

```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 005c8a1c..e196ea73 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -5,6 +5,23 @@ Append-only logical journal of Cursor product deliveries.



+## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-VERTICAL-LAYOUT
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-16 ~23:45 CET |
+| Macro-lot | ML4D Ensemble 04 — composition verticale Travail |
+| Type | RUN / correction bornée · **NO RELEASE** |
+| Parent candidat | `a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6` |
+| Branch | `feat/next-ml4d-project-space-20261116` |
+| Scope | Intro compacte + séparateur ; conversation/compositeur cartes distinctes ; compositeur ancré bas ; inspecteur hauteur intro→compositeur ; scroll fil propriétaire |
+| Non-scope | Rail/DA déjà validés ; Ensembles 05–07 ; API/DB ; RECETTE ; amend a30e75c7 |
+| Preuves | next build PASS ; Playwright E04+T13/T16+F2+long-thread+UX-004 PASS ; DOM gaps conv→comp 25, bottoms align 0, intro∥inspector 0 |
+| RECETTE | **inchangée** `:3200` SHA `a30e75c7` / BUILD `WUqfWdCB7T2rHzDvk-Hre` |
+| Push produit | **AUCUN** |
+| Verdict cible | `ENSEMBLE 04 — VERTICAL LAYOUT CORRECTION CANDIDATE READY` |
+
+
 ## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-VISUAL-FIDELITY

 | Field | Value |
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 62f1f591..f359048e 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -916,6 +916,7 @@ export default function ProjectPage() {

       {surface === "travail" ? (
         <NoraConversation
+          embeddedInStage
           messages={messages}
           draft={draft}
           busy={busy || !preparationId}
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index 9cb3e5a7..08296c92 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -20,136 +20,149 @@ export function NoraConversation(props: {
   onSend: () => void;
   onReconcile?: () => void;
   aside?: React.ReactNode;
+  /** When set, participates in project-travail-stage CSS grid via display:contents. */
+  embeddedInStage?: boolean;
 }) {
   const n = props.messages.length;
   const frame = n === 0 ? "161:216" : n <= 2 ? "161:288" : "94:214";
   const variantLabel =
     n === 0 ? "Première conversation" : n <= 2 ? "Reprise contextualisée" : "Fil long";
+  const embedded = Boolean(props.embeddedInStage);

   return (
     <div
-      className="fig-workspace fig-nora-responsive fig-travail-workspace"
+      className={
+        embedded
+          ? "fig-travail-workspace-embed"
+          : "fig-workspace fig-nora-responsive fig-travail-workspace"
+      }
       data-figma-frame={frame}
       data-figma-mobile-frames="282:468,282:492"
       data-testid="nora-workspace"
+      data-travail-embed={embedded ? "1" : "0"}
     >
-      <section className="fig-travail-main" data-testid="nora-main">
-        <div className="fig-conversation-panel" data-testid="nora-conversation-panel">
-          <div className="fig-conversation-head">
-            <p className="fig-kicker !mb-0">Conversation du projet</p>
-            <span className="fig-tag fig-tag-muted">{variantLabel}</span>
-            {props.unresolvedPending ? (
-              <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
-            ) : null}
-          </div>
+      <section
+        className="fig-conversation-panel"
+        data-testid="nora-conversation-panel"
+        data-nora-main="1"
+        id="nora-main"
+      >
+        <div className="fig-conversation-head">
+          <p className="fig-kicker !mb-0">Conversation du projet</p>
+          <span className="fig-tag fig-tag-muted">{variantLabel}</span>
+          {props.unresolvedPending ? (
+            <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
+          ) : null}
+        </div>

-          <div className="fig-nora-thread-shell" data-testid="nora-thread-shell">
-            <div className="fig-nora-thread" data-testid="nora-thread">
-              {n === 0 ? (
-                <div className="fig-msg fig-msg-nora text-sm" data-testid="nora-first-empty">
-                  <div className="fig-msg-meta">
+        <div className="fig-nora-thread" data-testid="nora-thread">
+          {n === 0 ? (
+            <div className="fig-msg fig-msg-nora text-sm" data-testid="nora-first-empty">
+              <div className="fig-msg-meta">
+                <span className="fig-msg-avatar" aria-hidden>
+                  N
+                </span>
+                <span className="fig-msg-role">Nora</span>
+              </div>
+              <p className="fig-msg-body">
+                Première conversation — écrivez pour démarrer le fil du projet. Aucun message fictif
+                n&apos;est prérempli.
+              </p>
+            </div>
+          ) : null}
+          {props.messages.map((m) => {
+            const isNora = m.role === "assistant";
+            return (
+              <article
+                key={m.id}
+                className={`fig-msg ${isNora ? "fig-msg-nora" : "fig-msg-pilot"}`}
+              >
+                <div className="fig-msg-meta">
+                  {isNora ? (
                     <span className="fig-msg-avatar" aria-hidden>
                       N
                     </span>
-                    <span className="fig-msg-role">Nora</span>
-                  </div>
-                  <p className="fig-msg-body">
-                    Première conversation — écrivez pour démarrer le fil du projet. Aucun message
-                    fictif n&apos;est prérempli.
-                  </p>
-                </div>
-              ) : null}
-              {props.messages.map((m) => {
-                const isNora = m.role === "assistant";
-                return (
-                  <article
-                    key={m.id}
-                    className={`fig-msg ${isNora ? "fig-msg-nora" : "fig-msg-pilot"}`}
-                  >
-                    <div className="fig-msg-meta">
-                      {isNora ? (
-                        <span className="fig-msg-avatar" aria-hidden>
-                          N
-                        </span>
-                      ) : null}
-                      <span className={`fig-msg-role ${isNora ? "" : "fig-msg-role-pilot"}`}>
-                        {isNora ? "Nora" : "Pilote"}
-                      </span>
-                      <span className="sr-only">{m.status}</span>
-                    </div>
-                    {isNora ? (
-                      <div className="fig-msg-body">
-                        <SafeMarkdown content={m.content} />
-                      </div>
-                    ) : (
-                      <div className="fig-msg-body whitespace-pre-wrap">{m.content}</div>
-                    )}
-                  </article>
-                );
-              })}
-              {props.activity === "preparing" ? (
-                <div className="fig-alert" role="status">
-                  Nora prépare une réponse…
-                </div>
-              ) : null}
-            </div>
-
-            <div className="fig-composer fig-composer-sticky fig-travail-composer" data-testid="nora-composer">
-              <textarea
-                className="fig-travail-composer-input"
-                value={props.draft}
-                onChange={(e) => props.onDraft(e.target.value)}
-                placeholder="Écrire à Nora dans ce projet…"
-                aria-label="Message à Nora"
-                data-testid="thread-draft"
-                rows={2}
-                onKeyDown={(e) => {
-                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
-                    e.preventDefault();
-                    props.onSend();
-                  }
-                }}
-              />
-              <div className="fig-travail-composer-bar">
-                <span className="fig-travail-composer-hint">
-                  Votre message reste rattaché au projet actif
-                </span>
-                <button
-                  type="button"
-                  className="fig-travail-composer-send"
-                  disabled={props.busy || !props.draft.trim()}
-                  onClick={props.onSend}
-                  data-testid="thread-send"
-                  aria-label="Envoyer"
-                >
-                  <span aria-hidden>↑</span>
-                </button>
-              </div>
-              {props.unresolvedPending && props.onReconcile ? (
-                <div className="space-y-1 mt-2" data-testid="thread-pending-banner">
-                  <p className="text-xs muted">
-                    Tentative non résolue — réconcilier avant un nouveau tour.
-                  </p>
-                  <button
-                    type="button"
-                    className="btn secondary"
-                    disabled={props.busy}
-                    data-testid="thread-reconcile-pending"
-                    onClick={props.onReconcile}
-                  >
-                    Réconcilier la tentative en cours
-                  </button>
+                  ) : null}
+                  <span className={`fig-msg-role ${isNora ? "" : "fig-msg-role-pilot"}`}>
+                    {isNora ? "Nora" : "Pilote"}
+                  </span>
+                  <span className="sr-only">{m.status}</span>
                 </div>
-              ) : null}
-              {props.status ? (
-                <p className="sr-only" data-testid="thread-nora-status" role="status">
-                  {props.status}
-                </p>
-              ) : null}
+                {isNora ? (
+                  <div className="fig-msg-body">
+                    <SafeMarkdown content={m.content} />
+                  </div>
+                ) : (
+                  <div className="fig-msg-body whitespace-pre-wrap">{m.content}</div>
+                )}
+              </article>
+            );
+          })}
+          {props.activity === "preparing" ? (
+            <div className="fig-alert" role="status">
+              Nora prépare une réponse…
             </div>
-          </div>
+          ) : null}
         </div>
       </section>
+
+      <div
+        className="fig-composer fig-travail-composer"
+        data-testid="nora-composer"
+      >
+        <textarea
+          className="fig-travail-composer-input"
+          value={props.draft}
+          onChange={(e) => props.onDraft(e.target.value)}
+          placeholder="Écrire à Nora dans ce projet…"
+          aria-label="Message à Nora"
+          data-testid="thread-draft"
+          rows={2}
+          onKeyDown={(e) => {
+            if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
+              e.preventDefault();
+              props.onSend();
+            }
+          }}
+        />
+        <div className="fig-travail-composer-bar">
+          <span className="fig-travail-composer-hint">
+            Votre message reste rattaché au projet actif
+          </span>
+          <button
+            type="button"
+            className="fig-travail-composer-send"
+            disabled={props.busy || !props.draft.trim()}
+            onClick={props.onSend}
+            data-testid="thread-send"
+            aria-label="Envoyer"
+          >
+            <span aria-hidden>↑</span>
+          </button>
+        </div>
+        {props.unresolvedPending && props.onReconcile ? (
+          <div className="space-y-1 mt-2" data-testid="thread-pending-banner">
+            <p className="text-xs muted">
+              Tentative non résolue — réconcilier avant un nouveau tour.
+            </p>
+            <button
+              type="button"
+              className="btn secondary"
+              disabled={props.busy}
+              data-testid="thread-reconcile-pending"
+              onClick={props.onReconcile}
+            >
+              Réconcilier la tentative en cours
+            </button>
+          </div>
+        ) : null}
+        {props.status ? (
+          <p className="sr-only" data-testid="thread-nora-status" role="status">
+            {props.status}
+          </p>
+        ) : null}
+      </div>
+
       {props.aside ? (
         <aside className="fig-travail-aside" data-testid="nora-aside">
           {props.aside}
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
index 65987b17..1b2ce939 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
@@ -62,18 +62,43 @@ export function ProjectChrome(props: {
   const hero = HERO[props.surface];
   const surfaceLabel = PROJECT_SURFACE_LABELS[props.surface];
   const displayName = props.projectName?.trim() || "Projet";
+  const isTravail = props.surface === "travail";
+
+  const continuityBadge =
+    isTravail && props.statusHint && !/^chargement/i.test(props.statusHint) ? (
+      <span className="fig-tag fig-tag-ok" data-testid="project-status-hint">
+        {/reprise|conservé|durable/i.test(props.statusHint)
+          ? "Contexte conservé"
+          : props.statusHint}
+      </span>
+    ) : null;
+
+  const intro = (
+    <header className="project-space-hero fig-travail-intro" data-testid="travail-intro">
+      <p className="fig-kicker project-space-kicker">{hero.kicker}</p>
+      <div className="project-space-hero-row">
+        <h1 className="fig-hero-title" data-testid="project-surface-title">
+          {hero.title}
+        </h1>
+        {continuityBadge}
+      </div>
+      <p className="fig-hero-sub">{hero.sub}</p>
+    </header>
+  );

   return (
     <div
-      className="fig-page project-space-page"
+      className={`fig-page project-space-page${isTravail ? " project-space-page--travail" : ""}`}
       data-project-surface={props.surface}
       data-testid="project-load-state"
       data-project-load-state={loadState}
       data-project-id={props.projectId}
       data-project-name={props.projectName ?? ""}
     >
-      {/* Compact Figma header — no second tab strip (rail owns navigation). */}
-      <div className="project-space-header" data-testid="project-space-header">
+      <div
+        className={`project-space-header${isTravail ? " project-space-header--breadcrumb-only" : ""}`}
+        data-testid="project-space-header"
+      >
         <div className="fig-breadcrumb project-space-breadcrumb">
           <span data-testid="project-breadcrumb">
             SFIA Studio&nbsp;&nbsp;/&nbsp;&nbsp;Projet&nbsp;&nbsp;/&nbsp;&nbsp;
@@ -85,32 +110,24 @@ export function ProjectChrome(props: {
           </span>
         </div>

-        <header className="project-space-hero space-y-1">
-          <p className="fig-kicker project-space-kicker">{hero.kicker}</p>
-          <div className="project-space-hero-row">
-            <h1 className="fig-hero-title" data-testid="project-surface-title">
-              {hero.title}
-            </h1>
-            {props.surface === "travail" &&
-            props.statusHint &&
-            !/^chargement/i.test(props.statusHint) ? (
-              <span className="fig-tag fig-tag-ok" data-testid="project-status-hint">
-                {/reprise|conservé|durable/i.test(props.statusHint)
-                  ? "Contexte conservé"
-                  : props.statusHint}
-              </span>
+        {!isTravail ? (
+          <header className="project-space-hero space-y-1">
+            <p className="fig-kicker project-space-kicker">{hero.kicker}</p>
+            <div className="project-space-hero-row">
+              <h1 className="fig-hero-title" data-testid="project-surface-title">
+                {hero.title}
+              </h1>
+            </div>
+            <p className="fig-hero-sub">{hero.sub}</p>
+            {props.statusHint ? (
+              <p className="text-xs muted" data-testid="project-status-hint">
+                {props.statusHint}
+              </p>
             ) : null}
-          </div>
-          <p className="fig-hero-sub">{hero.sub}</p>
-          {props.surface !== "travail" && props.statusHint ? (
-            <p className="text-xs muted" data-testid="project-status-hint">
-              {props.statusHint}
-            </p>
-          ) : null}
-        </header>
+          </header>
+        ) : null}
       </div>

-      {/* Hidden anchors so historical e2e surface-* selectors remain meaningful. */}
       <div className="sr-only" aria-hidden>
         {(
           [
@@ -131,7 +148,19 @@ export function ProjectChrome(props: {
         ))}
       </div>

-      {props.children}
+      {isTravail ? (
+        <div className="project-travail-stage" data-testid="project-travail-stage">
+          {intro}
+          <div
+            className="fig-travail-intro-rule"
+            data-testid="travail-intro-rule"
+            aria-hidden
+          />
+          {props.children}
+        </div>
+      ) : (
+        props.children
+      )}
     </div>
   );
 }
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index d9a07ac9..98a26e0b 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -201,28 +201,34 @@
 /* Figma 652:8 — conversation ~968 / aside ~369 / gap ~25 at 1680×970 */
 .fig-travail-workspace {
   grid-template-columns: minmax(0, 968fr) minmax(260px, 369fr);
+  grid-template-rows: minmax(0, 1fr) auto;
   gap: 25px;
   align-items: stretch;
   min-height: 0;
 }

-.fig-travail-main {
-  min-width: 0;
-  display: flex;
-  flex-direction: column;
-  min-height: 0;
+/* Participates in .project-travail-stage grid (intro | rule | conversation | composer × inspector). */
+.fig-travail-workspace-embed {
+  display: contents;
 }

 .fig-conversation-panel {
   display: flex;
   flex-direction: column;
   gap: 14px;
+  min-width: 0;
   min-height: 0;
-  flex: 1 1 auto;
   background: #151c29;
   border: 1px solid #272e49;
   border-radius: 14px;
   padding: 18px 20px 16px;
+  grid-column: 1;
+  grid-row: 3;
+  overflow: hidden;
+}
+
+.fig-travail-workspace > .fig-conversation-panel {
+  grid-row: 1;
 }

 .fig-conversation-head {
@@ -239,8 +245,8 @@
   gap: 14px;
   flex: 1 1 auto;
   min-height: 0;
-  max-height: min(52vh, 500px);
   overflow: auto;
+  overscroll-behavior: contain;
   padding-right: 4px;
 }

@@ -318,7 +324,17 @@
   border-radius: 14px;
   padding: 16px 18px 12px;
   background: #151c29;
+  /* Figma 652:8 composer ≈ 137px — natural height, not stretched */
   min-height: 118px;
+  max-height: 160px;
+  flex-shrink: 0;
+  grid-column: 1;
+  grid-row: 4;
+  align-self: end;
+}
+
+.fig-travail-workspace > .fig-travail-composer {
+  grid-row: 2;
 }

 .fig-travail-composer-input {
@@ -393,6 +409,12 @@

 .fig-travail-aside {
   min-width: 0;
+  min-height: 0;
+  grid-column: 2;
+  grid-row: 1 / -1;
+  align-self: stretch;
+  display: flex;
+  flex-direction: column;
 }

 .fig-inspector {
@@ -400,7 +422,10 @@
   border: 1px solid #272e49;
   border-radius: 14px;
   padding: 20px 22px 22px;
-  min-height: 100%;
+  flex: 1 1 auto;
+  min-height: 0;
+  overflow: auto;
+  overscroll-behavior: contain;
 }

 .fig-inspector-title {
@@ -1285,6 +1310,15 @@
   gap: 20px;
 }

+.project-space-page--travail {
+  min-height: 0;
+  gap: 10px;
+  overflow: hidden;
+  display: flex;
+  flex-direction: column;
+  flex: 1 1 auto;
+}
+
 .project-space-header {
   display: flex;
   flex-direction: column;
@@ -1297,6 +1331,16 @@
   padding-bottom: 8px;
 }

+.project-space-header--breadcrumb-only {
+  min-height: 0;
+  gap: 0;
+  padding-bottom: 4px;
+  flex-shrink: 0;
+  /* No differentiated navy panel behind intro — breadcrumb only. */
+  background: transparent;
+  position: relative;
+}
+
 .project-space-breadcrumb {
   min-height: 28px;
 }
@@ -1319,33 +1363,112 @@
   font-size: 11px;
   font-weight: 600;
   letter-spacing: 0.04em;
+  margin: 0 0 6px;
 }

 .project-space-hero-row {
   display: flex;
   flex-wrap: wrap;
   align-items: center;
-  gap: 12px 16px;
+  gap: 10px 14px;
 }

 .project-space-hero .fig-hero-title {
   font-size: clamp(1.55rem, 2vw, 1.95rem);
   font-weight: 600;
   letter-spacing: -0.02em;
-  line-height: 1.25;
+  line-height: 1.2;
+  margin: 0;
 }

 .project-space-hero .fig-hero-sub {
-  margin-top: 0.35rem;
+  margin-top: 0.3rem;
+  margin-bottom: 0;
   font-size: 14px;
   font-weight: 400;
+  line-height: 1.4;
   max-width: 56rem;
 }

+/* Compact Travail intro — same surface as page, no aplat. */
+.fig-travail-intro {
+  grid-column: 1;
+  grid-row: 1;
+  background: transparent;
+  padding: 0;
+  margin: 0;
+  min-width: 0;
+}
+
+.fig-travail-intro-rule {
+  grid-column: 1;
+  grid-row: 2;
+  height: 1px;
+  width: 100%;
+  background: #272e49;
+  margin: 12px 0 0;
+  border: 0;
+}
+
+.project-travail-stage {
+  flex: 1 1 auto;
+  min-height: 0;
+  display: grid;
+  grid-template-columns: minmax(0, 968fr) minmax(260px, 369fr);
+  grid-template-rows: auto auto minmax(0, 1fr) auto;
+  column-gap: 25px;
+  /* Figma conversation→composer gap ≈ 25px; intro→rule stays compact via rule margin. */
+  row-gap: 25px;
+  align-items: stretch;
+}
+
+.fig-travail-intro-rule {
+  margin-top: 0;
+  /* Pull rule closer under intro (override uniform 25px track gap for rows 1→2). */
+  translate: 0 -13px;
+}
+
+.project-travail-stage > .fig-travail-composer {
+  margin-top: 0;
+  align-self: stretch;
+}
+
 .project-space-page .fig-tag {
   font-weight: 600;
 }

+@media (max-width: 1100px) {
+  .project-space-page--travail {
+    height: auto;
+    max-height: none;
+    overflow: visible;
+  }
+
+  .project-travail-stage {
+    grid-template-columns: 1fr;
+    grid-template-rows: auto;
+    row-gap: 16px;
+  }
+
+  .fig-travail-intro,
+  .fig-travail-intro-rule,
+  .fig-conversation-panel,
+  .fig-travail-composer,
+  .fig-travail-aside {
+    grid-column: 1;
+    grid-row: auto;
+  }
+
+  .fig-conversation-panel {
+    min-height: 280px;
+    max-height: min(60vh, 520px);
+  }
+
+  .fig-travail-aside {
+    max-height: none;
+  }
+}
+
 .project-unavailable {
   display: flex;
   align-items: flex-start;
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index ccca574f..1c0ecba1 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -476,6 +476,13 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
           className={`studio-shell-main ${personalSpace ? "studio-shell-main-mobile-pad" : ""}`}
           data-testid="studio-shell-main"
           data-sas-layout={onSasPreparation ? "1" : undefined}
+          data-travail-layout={
+            projectId &&
+            (parseStudioSurface(surface) ?? "travail") === "travail" &&
+            !projectSpaceBlocked
+              ? "1"
+              : undefined
+          }
         >
           {children}
         </main>
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
index de3da283..b7503a39 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
@@ -93,6 +93,22 @@ html.studio-shell-lock body {
   min-height: 0;
 }

+/* Travail: page owns height; conversation thread scrolls — avoid outer page scroll. */
+.studio-shell-main[data-travail-layout="1"] {
+  display: flex;
+  flex-direction: column;
+  overflow: hidden;
+  padding-top: 1rem;
+  padding-bottom: 1rem;
+}
+
+.studio-shell-main[data-travail-layout="1"] > .project-space-page--travail {
+  flex: 1 1 auto;
+  min-height: 0;
+  height: auto;
+  max-height: none;
+}
+
 .studio-shell-main-mobile-pad {
   padding-bottom: calc(5.5rem + env(safe-area-inset-bottom, 0px));
 }
diff --git a/projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts b/projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts
index b8da3043..389971bd 100644
--- a/projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/ml4c-long-thread-composer.spec.ts
@@ -110,7 +110,15 @@ test("ML4C C-07: composer usable on 320+ message thread after scroll", async ({
     el.scrollTop = 0;
   });
   await expect(composer).toBeVisible();
-  expect(await composer.evaluate((el) => el.classList.contains("fig-composer-sticky"))).toBe(true);
+  // Vertical layout: composer stays in the viewport while the thread scrolls.
+  await expect(composer).toBeInViewport();
+  const threadScroll = await thread.evaluate((el) => ({
+    overflowY: getComputedStyle(el).overflowY,
+    clientHeight: el.clientHeight,
+    scrollHeight: el.scrollHeight,
+  }));
+  expect(["auto", "scroll"]).toContain(threadScroll.overflowY);
+  expect(threadScroll.scrollHeight).toBeGreaterThan(threadScroll.clientHeight);

   await draft.fill("Message après parcours du fil long.");
   await expect(draft).toHaveValue("Message après parcours du fil long.");
diff --git a/projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts b/projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
index dac1f1d0..5836aa58 100644
--- a/projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
@@ -80,6 +80,13 @@ test.describe("Ensemble 04 project space", () => {
     await expect(page.getByTestId("thread-send")).not.toHaveText(/Envoyer/);
     await expect(page.getByTestId("travail-aside-inspector")).toBeVisible();
     await expect(page.getByText(/Mémoire D4 récupérable/i)).toHaveCount(0);
+    await expect(page.getByTestId("travail-intro-rule")).toBeVisible();
+    await expect(page.getByTestId("nora-conversation-panel")).toBeVisible();
+    await expect(page.getByTestId("nora-composer")).toBeVisible();
+    // Conversation and composer are separate cards (composer not inside conversation panel).
+    await expect(
+      page.getByTestId("nora-conversation-panel").getByTestId("nora-composer"),
+    ).toHaveCount(0);
     await expect(page.getByText(/0 applicable/i)).toHaveCount(0);

     const railBox = await rail.boundingBox();
diff --git a/projects/sfia-studio-next/web/tests/e2e/project-space-f2-captures.spec.ts b/projects/sfia-studio-next/web/tests/e2e/project-space-f2-captures.spec.ts
index 7cda3483..e77f613c 100644
--- a/projects/sfia-studio-next/web/tests/e2e/project-space-f2-captures.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/project-space-f2-captures.spec.ts
@@ -52,20 +52,61 @@ test("F2 runtime captures Ensemble 04 project space", async ({ page }) => {
   const measures = await page.evaluate(() => {
     const rail = document.querySelector('[data-testid="studio-rail"]') as HTMLElement | null;
     const workspace = document.querySelector('[data-testid="nora-workspace"]') as HTMLElement | null;
-    const main = document.querySelector('[data-testid="nora-main"]') as HTMLElement | null;
+    const intro = document.querySelector('[data-testid="travail-intro"]') as HTMLElement | null;
+    const rule = document.querySelector('[data-testid="travail-intro-rule"]') as HTMLElement | null;
+    const main = document.querySelector('[data-testid="nora-conversation-panel"]') as HTMLElement | null;
     const aside = document.querySelector('[data-testid="nora-aside"]') as HTMLElement | null;
+    const inspector = document.querySelector('[data-testid="travail-aside-inspector"]') as HTMLElement | null;
     const composer = document.querySelector('[data-testid="nora-composer"]') as HTMLElement | null;
+    const thread = document.querySelector('[data-testid="nora-thread"]') as HTMLElement | null;
     const name = document.querySelector('[data-testid="rail-project-name"]') as HTMLElement | null;
+    const stage = document.querySelector('[data-testid="project-travail-stage"]') as HTMLElement | null;
     const cs = (el: HTMLElement | null) => (el ? getComputedStyle(el) : null);
-    const box = (el: HTMLElement | null) =>
-      el ? { w: Math.round(el.getBoundingClientRect().width), h: Math.round(el.getBoundingClientRect().height) } : null;
+    const box = (el: HTMLElement | null) => {
+      if (!el) return null;
+      const r = el.getBoundingClientRect();
+      return {
+        x: Math.round(r.x),
+        y: Math.round(r.y),
+        w: Math.round(r.width),
+        h: Math.round(r.height),
+        bottom: Math.round(r.bottom),
+      };
+    };
+    const introBox = box(intro);
+    const conv = box(main);
+    const comp = box(composer);
+    const insp = box(inspector) || box(aside);
     return {
       viewport: { w: window.innerWidth, h: window.innerHeight, dpr: window.devicePixelRatio },
       rail: { ...box(rail), widthAttr: rail?.getAttribute("data-rail-width"), fill: rail?.getAttribute("data-rail-fill") },
+      stage: box(stage),
+      intro: introBox,
+      introRule: box(rule),
       workspace: box(workspace),
-      conversation: box(main),
+      conversation: conv,
       aside: box(aside),
-      composer: box(composer),
+      inspector: insp,
+      composer: comp,
+      thread: {
+        ...box(thread),
+        overflowY: thread ? cs(thread)?.overflowY : null,
+        scrollHeight: thread?.scrollHeight ?? null,
+        clientHeight: thread?.clientHeight ?? null,
+      },
+      gaps: {
+        conversationToComposer:
+          conv && comp ? Math.round(comp.y - conv.bottom) : null,
+        composerInspectorBottomAlign:
+          comp && insp ? Math.round(comp.bottom - insp.bottom) : null,
+        introToInspectorTop:
+          introBox && insp ? Math.round(introBox.y - insp.y) : null,
+        bottomSlack: comp ? Math.round(window.innerHeight - comp.bottom) : null,
+      },
+      structure: {
+        composerInsideConversation: Boolean(main?.contains(composer)),
+        embed: workspace?.getAttribute("data-travail-embed"),
+      },
       projectName: {
         ...box(name),
         lineClamp: name ? cs(name)?.webkitLineClamp : null,
@@ -80,6 +121,16 @@ test("F2 runtime captures Ensemble 04 project space", async ({ page }) => {
   });
   fs.writeFileSync(path.join(outDir, "dom-measures-travail.json"), JSON.stringify(measures, null, 2));

+  // Assert vertical composition contract (desktop 1680×970)
+  expect(measures.structure.composerInsideConversation).toBe(false);
+  expect(measures.gaps.conversationToComposer).not.toBeNull();
+  expect(measures.gaps.conversationToComposer!).toBeGreaterThanOrEqual(18);
+  expect(measures.gaps.conversationToComposer!).toBeLessThanOrEqual(32);
+  expect(Math.abs(measures.gaps.composerInspectorBottomAlign ?? 99)).toBeLessThanOrEqual(8);
+  expect(Math.abs(measures.gaps.introToInspectorTop ?? 99)).toBeLessThanOrEqual(8);
+  expect(measures.composer?.h ?? 999).toBeLessThanOrEqual(160);
+  expect(measures.gaps.bottomSlack ?? 999).toBeLessThanOrEqual(48);
+
   await page.screenshot({
     path: path.join(outDir, "runtime-travail-1680x970.png"),
     fullPage: false,
```

## 7. Blast radius

Travail layout + shell height flag ; tests E04/F2/long-thread. Portefeuille/Sas non redesignés (UX-004 PASS). Pas d'API/DB.

## 8. Tests

| Suite | Résultat |
| --- | --- |
| Playwright E04 + T13/T16 | PASS |
| F2 captures + DOM asserts | PASS |
| ml4c-long-thread-composer | PASS |
| UX-004 portfolio (cycle précédent non-régression) | PASS (run antérieur) |
| next build | PASS |
| ESLint fichiers touchés | PASS |
| tsc workspace | FAIL 32 = parent UX-005 ; **src 0** |

Preuves : FAKE/DEV. Captures sous `web/docs/evidence/ensemble-04-project-space/`.

## 9. RECETTE

**INCHANGÉE** — http://127.0.0.1:3200 · SHA `a30e75c7` · BUILD `WUqfWdCB7T2rHzDvk-Hre` · LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004`.

## 10. Réserves

R01 tsc 32 ; R02 Résultats→publication ; R03 glyphes Unicode ; R04 Ens.05 ; R05 OAuth Morris pour smoke privé ; R06 captures DEV ≠ acceptation ; Y absolus Figma ≠ runtime (pas de topbar 70 projet) — relations paramétriques validées.

## 11. Décision Morris attendue

1. Revue ChatGPT technique.
2. GO cutover RECETTE distinct vers `351aea9607c5997f7343212a837dd13c0f1e4429`.
3. Acceptation visuelle Morris sur RECETTE.
4. Pas d'ADOPTED/STABLE.

## 12. Review Handoff

- Commit/blob : _(après publish)_
