# Review Pack FULL — Ensemble 04 Visual Fidelity Correction

- **Date** : 2026-11-16 21:54 UTC
- **Contrat** : CORRECTION DE FIDÉLITÉ VISUELLE ET FINITION UX/UI — ML4D Ensemble 04
- **GO Morris** : VALIDÉ POUR LA CORRECTION EN DEV
- **Typologie** : RUN / correction bornée
- **Profil SFIA** : Standard v2.6
- **Review Handoff** : required / publish-in-cycle

## Verdict Cursor (pré-commit — SHA candidat à compléter après commit)

**ENSEMBLE 04 — VISUAL FIDELITY CORRECTION CANDIDATE READY**

- **Nouveau SHA candidat** : `a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6`
- **Parent RECETTE (inchangé)** : `20fb41baa534b5a802a275b6944fc267ccaa2192`

READY FOR CHATGPT TECHNICAL AND UX REVIEW

RECETTE UNCHANGED · MORRIS VISUAL ACCEPTANCE PENDING

NO PROJECT PUSH · NO PR · NO MERGE · NO STABLE · GATE C OPEN · ML5 NOT STARTED

## 1. Git Truth Check

### Initial
- Repository worktree : `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116`
- Branche : `feat/next-ml4d-project-space-20261116`
- HEAD source (candidat RECETTE) : `20fb41baa534b5a802a275b6944fc267ccaa2192`
- Ancêtre UX-005 : `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` (confirmé)
- Main distant annoncé : `997d4c4e8204993de7107552898c8cc08cd3b0ed`
- Amendement du SHA RECETTE : **interdit / non fait**

### Status au moment du pack (pré-commit)
```
## feat/next-ml4d-project-space-20261116
 M .tmp-sfia-review/chatgpt-review.md
 M projects/sfia-studio-next/construction/delivery-history.md
 M projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/manifest.json
 M projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-journal-nav-1680x970.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-projet-overview-1680x970.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-travail-1680x970.png
 M projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-unavailable-1680x970.png
 M projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
 M projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
 M projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
 M projects/sfia-studio-next/web/src/components/figma/tokens.css
 M projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
 M projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
 M projects/sfia-studio-next/web/src/components/shell/studio-shell.css
 M projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
 M projects/sfia-studio-next/web/tests/e2e/project-space-f2-captures.spec.ts
?? projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/dom-measures-travail.json
?? projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/figma-652-8-travail-fresh.png
?? projects/sfia-studio-next/web/docs/evidence/ensemble-04-project-space/runtime-travail-long-name-1680x970.png
```

### Diffstat
```
.tmp-sfia-review/chatgpt-review.md                 | 167 +---------
 .../construction/delivery-history.md               |  19 ++
 .../ensemble-04-project-space/manifest.json        |  65 +++-
 .../runtime-journal-nav-1680x970.png               | Bin 115314 -> 117645 bytes
 .../runtime-projet-overview-1680x970.png           | Bin 110043 -> 111998 bytes
 .../runtime-travail-1680x970.png                   | Bin 168057 -> 168303 bytes
 .../runtime-unavailable-1680x970.png               | Bin 42351 -> 41477 bytes
 .../web/src/app/projects/[projectId]/page.tsx      | 128 +++-----
 .../web/src/components/figma/NoraConversation.tsx  | 106 ++++---
 .../web/src/components/figma/ProjectChrome.tsx     |  39 ++-
 .../web/src/components/figma/tokens.css            | 341 ++++++++++++++++++++-
 .../web/src/components/shell/StudioShell.tsx       | 191 ++++++++----
 .../web/src/components/shell/studio-rail.ts        |  30 +-
 .../web/src/components/shell/studio-shell.css      | 141 ++++++++-
 .../web/tests/e2e/project-space-ensemble04.spec.ts |  18 +-
 .../tests/e2e/project-space-f2-captures.spec.ts    |  58 ++++
 16 files changed, 906 insertions(+), 397 deletions(-)
```

### Log récent
```
20fb41ba test(next): consolidate Ensemble 04 T13/T16 proofs and RECETTE plan
660ff424 feat(next): converge project space shell to ML4D Figma 652 frames
bd8e1672 fix(next): consolidate Sas Nora R1 durable intention and R2 clarifications
6798219f fix(next): post-recette Sas Nora C1–C4 cognitive and UX corrections
ec7405f3 fix(next): restore D2 canCreate as sole Sas create CTA gate
```

### Worktrees
- Produit : ce worktree (branche feat)
- RECETTE immuable : `…-ensemble04-recette-build-20fb41ba` (LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004`) — **non modifié**
- Handoff : `/Users/morris/Projects/sfia-review-handoff-m5a-gi-20261023` @ `sfia/review-handoff`

### RECETTE (ENV-01)
- URL : http://127.0.0.1:3200 → HTTP 200
- BUILD_ID servi : `Bdn6zx0xBoavYTjWmiO4x`
- SHA servi : `20fb41ba…` (inchangé)
- Aucun arrêt / cutover / LaunchAgent edit dans ce cycle

## 2. Sources Git consultées

- `method/sfia-fast-track/core/sfia-cycle-routing-guide.md`
- `prompts/templates/sfia-cycle-execution-template.md`
- `method/sfia-fast-track/core/sfia-chatgpt-cursor-operating-model.md`
- `method/sfia-fast-track/core/sfia-rules-and-guardrails.md`
- `projects/sfia-studio-next/governance/SEF.md`
- `projects/sfia-studio-next/governance/roadmap.md`
- `projects/sfia-studio-next/governance/environnements-recette-et-promotions.md`
- `projects/sfia-studio-next/governance/product-versioning.md`
- `projects/sfia-studio-next/governance/product-naming-conventions.md`
- `projects/sfia-studio-next/ux-ui/contrat-transposition-figma-code.md`
- Décision R5 : `governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md`
- Review Handoff précédent : `cfeb6cac` / blob `614d31d2`
- Registre ML4D candidat : **non modifié**

## 3. Figma — référence absolue

- Fichier : https://www.figma.com/design/itgvCulInEnFY6DvgIegvP
- Page : 04 · ML4D — Espace projet · Propositions UX
- Frames : **652:8** Travail · **652:58** Projet · **652:108** Navigation · **652:158** Indisponible
- Session MCP : `6a9c1bde-ff3d-40f1-a480-212bd5045df8`
- Extraction : `get_design_context` + `get_screenshot` sur 652:8

### Mesures natives Figma 652:8 (viewport 1680×970)
| Élément | Valeur Figma |
| --- | --- |
| Viewport | 1680 × 970 |
| Rail | 246 px · fill `#0C101A` |
| En-tête | 70 px · surface 1434 px |
| Conversation | 968 px |
| Panneau contextuel | 369 px |
| Gap colonnes | ~25 px (1031−38−968) |
| Carte Espace actif | 214×90 · radius 11 · border `#272e49` |
| Nom projet | 13px / SemiBold · wrap |
| Nav item actif | h 42 · bg `#292d58` · gap icône 11 |
| Compositeur | 968×137 · radius 14 |
| Bouton Envoyer | 52×35 · `#656fe1` · radius 10 · glyphe ↑ |
| Message Pilote | bg `#292d58` · radius 13 · label 10px |
| Message Nora | bg `#0f1420` · border `#272e49` · avatar 30 |

## 4. Tableau Figma ↔ DOM (après correction, 1680×970, zoom 100%, DPR 1)

| Critère | Figma | DOM DEV | Δ | Statut |
| --- | --- | --- | --- | --- |
| V01 Rail width | 246 | 246 | 0 | PASS |
| V01 Rail fill | #0C101A | #0C101A | — | PASS |
| V02 Nom 2 lignes | line-clamp 2 | webkitLineClamp=2 · 13px/600 | — | PASS |
| V07 Conversation w | 968 | 965 | −3 | PASS (tolérance) |
| V07 Aside w | 369 | 368 | −1 | PASS |
| V07 Gap approx | 25 | ~24 (1357−965−368) | −1 | PASS |
| V11 Send | 52×35 ↑ | 52×35 aria=Envoyer text=↑ | 0 | PASS |
| V06 Doublon Retour | absent | 0 lien « Retour portefeuille » | — | PASS |
| V14 Inspecteur unifié | 1 panneau | `travail-aside-inspector` | — | PASS |

Preuves : `web/docs/evidence/ensemble-04-project-space/dom-measures-travail.json` · captures `runtime-*-1680x970.png` · `figma-652-8-travail-fresh.png`

## 5. Corrections réalisées

### A — Rail
- Nom projet : wrap 2 lignes (`-webkit-line-clamp: 2`) + `title`
- Carte Espace actif ~90px, statut « Projet actif »
- `← Portefeuille` unique sous la carte (plus de bandeau bas)
- Sections NAVIGATION / ACCÈS DIRECTS + séparateurs `#272e49`
- Icônes Figma : ◉ ▦ ▤ ◇
- Padding rail projet 16px ; fill `#0C101A`

### B — Composition
- Grid Travail `968fr / 369fr` gap 25px
- Conversation dominante ; aside secondaire
- Reflow ≤1100px → 1 colonne

### C — Finition
- Hero Travail aligné Figma (« Reprendre le fil du projet »)
- Typo allégée (labels 11px, corps 14px, graisses 400/500/600)
- Surfaces `#151c29` / borders `#272e49` / radius 14/13/11
- Sticky `project-space-header`

### D — Fil
- Labels Pilote/Nora sans « · COMPLETE » dominant (status en `sr-only`)
- Bulles différenciées ; avatar Nora
- Markdown préservé

### E — Compositeur
- Bouton flèche ↑ (aria-label Envoyer)
- Hint « Votre message reste rattaché… »
- Suppression Joindre / compteurs applicables permanents
- États disabled/pending/clavier (⌘/Ctrl+Enter) conservés

### F — Panneau
- Un seul `fig-inspector` : En bref / Repères / Points à clarifier
- Plus de « Mémoire D4… » / compteurs techniques à zéro

### G — Scroll
- Rail persistant (shell)
- Header projet sticky
- Thread scroll interne + composer sticky

## 6. Inventaire fichiers

### Modifiés
- `page.tsx` — aside unifié ; retrait Retour portefeuille ; status compositeur épuré
- `NoraConversation.tsx` — coque Travail + composer flèche
- `ProjectChrome.tsx` — hero Figma + badge Contexte conservé
- `StudioShell.tsx` / `studio-shell.css` / `studio-rail.ts` — rail fidélité
- `tokens.css` — workspace/messages/composer/inspector/sticky
- `project-space-ensemble04.spec.ts` / `project-space-f2-captures.spec.ts`
- `construction/delivery-history.md`

### Créés (preuves)
- `dom-measures-travail.json`
- `runtime-travail-long-name-1680x970.png`
- `figma-652-8-travail-fresh.png`
- `manifest.json` (mis à jour)

## 7. Contenu complet — fichiers créés / preuves

### dom-measures-travail.json
```json
{
  "viewport": {
    "w": 1680,
    "h": 970,
    "dpr": 1
  },
  "rail": {
    "w": 246,
    "h": 970,
    "widthAttr": "246",
    "fill": "#0C101A"
  },
  "workspace": {
    "w": 1357,
    "h": 728
  },
  "conversation": {
    "w": 965,
    "h": 728
  },
  "aside": {
    "w": 368,
    "h": 728
  },
  "composer": {
    "w": 923,
    "h": 142
  },
  "projectName": {
    "w": 187,
    "h": 35,
    "lineClamp": "2",
    "fontSize": "13px",
    "fontWeight": "600"
  },
  "send": {
    "w": 52,
    "h": 35,
    "aria": "Envoyer",
    "text": "↑"
  }
}
```

### manifest.json
```json
{
  "capturedAt": "2026-11-16T21:53:26.263Z",
  "viewport": {
    "width": 1680,
    "height": 970
  },
  "projectName": "F2 Espace projet 1794866003268",
  "projectId": "proj_ac10a939-1f5b-481d-a6f7-21c3f6357be6",
  "frames": {
    "travail": "652:8",
    "projet": "652:58",
    "journal": "652:108",
    "unavailable": "652:158"
  },
  "files": [
    "runtime-travail-1680x970.png",
    "runtime-travail-long-name-1680x970.png",
    "runtime-projet-overview-1680x970.png",
    "runtime-journal-nav-1680x970.png",
    "runtime-unavailable-1680x970.png",
    "dom-measures-travail.json"
  ],
  "figmaReference": {
    "viewport": {
      "width": 1680,
      "height": 970
    },
    "railPx": 246,
    "conversationPx": 968,
    "asidePx": 369,
    "columnGapPx": 25,
    "headerPx": 70
  },
  "measures": {
    "viewport": {
      "w": 1680,
      "h": 970,
      "dpr": 1
    },
    "rail": {
      "w": 246,
      "h": 970,
      "widthAttr": "246",
      "fill": "#0C101A"
    },
    "workspace": {
      "w": 1357,
      "h": 728
    },
    "conversation": {
      "w": 965,
      "h": 728
    },
    "aside": {
      "w": 368,
      "h": 728
    },
    "composer": {
      "w": 923,
      "h": 142
    },
    "projectName": {
      "w": 187,
      "h": 35,
      "lineClamp": "2",
      "fontSize": "13px",
      "fontWeight": "600"
    },
    "send": {
      "w": 52,
      "h": 35,
      "aria": "Envoyer",
      "text": "↑"
    }
  }
}
```

### NoraConversation.tsx (fichier réécrit — contenu complet)
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
}) {
  const n = props.messages.length;
  const frame = n === 0 ? "161:216" : n <= 2 ? "161:288" : "94:214";
  const variantLabel =
    n === 0 ? "Première conversation" : n <= 2 ? "Reprise contextualisée" : "Fil long";

  return (
    <div
      className="fig-workspace fig-nora-responsive fig-travail-workspace"
      data-figma-frame={frame}
      data-figma-mobile-frames="282:468,282:492"
      data-testid="nora-workspace"
    >
      <section className="fig-travail-main" data-testid="nora-main">
        <div className="fig-conversation-panel" data-testid="nora-conversation-panel">
          <div className="fig-conversation-head">
            <p className="fig-kicker !mb-0">Conversation du projet</p>
            <span className="fig-tag fig-tag-muted">{variantLabel}</span>
            {props.unresolvedPending ? (
              <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
            ) : null}
          </div>

          <div className="fig-nora-thread-shell" data-testid="nora-thread-shell">
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
                    Première conversation — écrivez pour démarrer le fil du projet. Aucun message
                    fictif n&apos;est prérempli.
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

            <div className="fig-composer fig-composer-sticky fig-travail-composer" data-testid="nora-composer">
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
          </div>
        </div>
      </section>
      {props.aside ? (
        <aside className="fig-travail-aside" data-testid="nora-aside">
          {props.aside}
        </aside>
      ) : null}
    </div>
  );
}

```

## 8. Diffs exploitables des fichiers modifiés

### `projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
index cf3c2517..9cb3e5a7 100644
--- a/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/NoraConversation.tsx
@@ -28,73 +28,105 @@ export function NoraConversation(props: {

   return (
     <div
-      className="fig-workspace fig-nora-responsive"
+      className="fig-workspace fig-nora-responsive fig-travail-workspace"
       data-figma-frame={frame}
       data-figma-mobile-frames="282:468,282:492"
       data-testid="nora-workspace"
     >
-      <section className="space-y-3">
-        <div className="fig-panel space-y-3">
-          <div className="flex flex-wrap gap-2 items-center">
-            <p className="fig-kicker !mb-0">Travail / projet</p>
-            <span className="fig-tag fig-tag-accent">PILOTE</span>
+      <section className="fig-travail-main" data-testid="nora-main">
+        <div className="fig-conversation-panel" data-testid="nora-conversation-panel">
+          <div className="fig-conversation-head">
+            <p className="fig-kicker !mb-0">Conversation du projet</p>
             <span className="fig-tag fig-tag-muted">{variantLabel}</span>
             {props.unresolvedPending ? (
               <span className="fig-tag fig-tag-warn">Interruption / reprise</span>
             ) : null}
           </div>
+
           <div className="fig-nora-thread-shell" data-testid="nora-thread-shell">
-            <div className="space-y-3 max-h-[56vh] overflow-auto pr-1" data-testid="nora-thread">
+            <div className="fig-nora-thread" data-testid="nora-thread">
               {n === 0 ? (
                 <div className="fig-msg fig-msg-nora text-sm" data-testid="nora-first-empty">
-                  <div className="text-xs muted mb-2 uppercase tracking-wide">Nora</div>
-                  Première conversation — écrivez pour démarrer le fil du projet. Aucun message
-                  fictif n&apos;est prérempli.
+                  <div className="fig-msg-meta">
+                    <span className="fig-msg-avatar" aria-hidden>
+                      N
+                    </span>
+                    <span className="fig-msg-role">Nora</span>
+                  </div>
+                  <p className="fig-msg-body">
+                    Première conversation — écrivez pour démarrer le fil du projet. Aucun message
+                    fictif n&apos;est prérempli.
+                  </p>
                 </div>
               ) : null}
-              {props.messages.map((m) => (
-                <article
-                  key={m.id}
-                  className={`fig-msg ${m.role === "assistant" ? "fig-msg-nora" : "fig-msg-pilot"}`}
-                >
-                  <div className="text-xs muted mb-1">
-                    {m.role === "assistant" ? "NORA" : "PILOTE"} · {m.status}
-                  </div>
-                  {m.role === "assistant" ? (
-                    <SafeMarkdown content={m.content} />
-                  ) : (
-                    <div className="whitespace-pre-wrap text-sm">{m.content}</div>
-                  )}
-                </article>
-              ))}
+              {props.messages.map((m) => {
+                const isNora = m.role === "assistant";
+                return (
+                  <article
+                    key={m.id}
+                    className={`fig-msg ${isNora ? "fig-msg-nora" : "fig-msg-pilot"}`}
+                  >
+                    <div className="fig-msg-meta">
+                      {isNora ? (
+                        <span className="fig-msg-avatar" aria-hidden>
+                          N
+                        </span>
+                      ) : null}
+                      <span className={`fig-msg-role ${isNora ? "" : "fig-msg-role-pilot"}`}>
+                        {isNora ? "Nora" : "Pilote"}
+                      </span>
+                      <span className="sr-only">{m.status}</span>
+                    </div>
+                    {isNora ? (
+                      <div className="fig-msg-body">
+                        <SafeMarkdown content={m.content} />
+                      </div>
+                    ) : (
+                      <div className="fig-msg-body whitespace-pre-wrap">{m.content}</div>
+                    )}
+                  </article>
+                );
+              })}
               {props.activity === "preparing" ? (
                 <div className="fig-alert" role="status">
                   Nora prépare une réponse…
                 </div>
               ) : null}
             </div>
-            <div className="fig-composer fig-composer-sticky" data-testid="nora-composer">
+
+            <div className="fig-composer fig-composer-sticky fig-travail-composer" data-testid="nora-composer">
               <textarea
-                className="textarea"
+                className="fig-travail-composer-input"
                 value={props.draft}
                 onChange={(e) => props.onDraft(e.target.value)}
-                placeholder="Écrire à Nora…"
+                placeholder="Écrire à Nora dans ce projet…"
                 aria-label="Message à Nora"
                 data-testid="thread-draft"
+                rows={2}
+                onKeyDown={(e) => {
+                  if (e.key === "Enter" && (e.metaKey || e.ctrlKey) && !props.busy) {
+                    e.preventDefault();
+                    props.onSend();
+                  }
+                }}
               />
-              <div className="flex flex-wrap gap-2">
+              <div className="fig-travail-composer-bar">
+                <span className="fig-travail-composer-hint">
+                  Votre message reste rattaché au projet actif
+                </span>
                 <button
-                  className="btn"
+                  type="button"
+                  className="fig-travail-composer-send"
                   disabled={props.busy || !props.draft.trim()}
                   onClick={props.onSend}
                   data-testid="thread-send"
+                  aria-label="Envoyer"
                 >
-                  Envoyer
+                  <span aria-hidden>↑</span>
                 </button>
-                <span className="text-xs muted self-center">Joindre un élément · non requis</span>
               </div>
               {props.unresolvedPending && props.onReconcile ? (
-                <div className="space-y-1" data-testid="thread-pending-banner">
+                <div className="space-y-1 mt-2" data-testid="thread-pending-banner">
                   <p className="text-xs muted">
                     Tentative non résolue — réconcilier avant un nouveau tour.
                   </p>
@@ -110,7 +142,7 @@ export function NoraConversation(props: {
                 </div>
               ) : null}
               {props.status ? (
-                <p className="text-xs muted" data-testid="thread-nora-status">
+                <p className="sr-only" data-testid="thread-nora-status" role="status">
                   {props.status}
                 </p>
               ) : null}
@@ -118,7 +150,11 @@ export function NoraConversation(props: {
           </div>
         </div>
       </section>
-      {props.aside ? <aside className="space-y-3">{props.aside}</aside> : null}
+      {props.aside ? (
+        <aside className="fig-travail-aside" data-testid="nora-aside">
+          {props.aside}
+        </aside>
+      ) : null}
     </div>
   );
 }
```

### `projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
index 1fe8e22d..65987b17 100644
--- a/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
+++ b/projects/sfia-studio-next/web/src/components/figma/ProjectChrome.tsx
@@ -12,37 +12,37 @@ const HERO: Record<
   { kicker: string; title: string; sub: string }
 > = {
   travail: {
-    kicker: "Travail avec Nora",
-    title: "Conversation du projet",
-    sub: "Collaborer, produire et approfondir le travail du projet.",
+    kicker: "Espace projet  /  Travail",
+    title: "Reprendre le fil du projet",
+    sub: "La préparation et les échanges avec Nora restent dans le contexte de ce projet.",
   },
   projet: {
-    kicker: "Espace projet",
+    kicker: "Espace projet  /  Projet",
     title: "Vue d'ensemble du projet",
     sub: "Identité, contexte et accès — consultation sans nouvelle autorité.",
   },
   pilotage: {
-    kicker: "Trajectoire",
+    kicker: "Espace projet  /  Trajectoire",
     title: "Pilotage · cycle et décisions",
     sub: "Cycle, méthode, CKI et décisions humaines — affichage D5/D6 existant.",
   },
   journal: {
-    kicker: "Journal",
+    kicker: "Espace projet  /  Journal",
     title: "Sujets et acquis",
     sub: "Sujets, acquis et points ouverts — présentation sans nouvelle autorité.",
   },
   document: {
-    kicker: "Documents Nora",
+    kicker: "Espace projet  /  Documents Nora",
     title: "Bibliothèque",
     sub: "Bibliothèque, inspection et révision sous autorité D4.",
   },
   git: {
-    kicker: "Sources Git",
+    kicker: "Espace projet  /  Sources Git",
     title: "Intégration Git",
     sub: "Sources et liens Git du projet — capacités réellement disponibles.",
   },
   publication: {
-    kicker: "Résultats et preuves",
+    kicker: "Espace projet  /  Résultats et preuves",
     title: "Publication Git",
     sub: "Publication et preuves Git — capacités réellement disponibles.",
   },
@@ -86,12 +86,23 @@ export function ProjectChrome(props: {
         </div>

         <header className="project-space-hero space-y-1">
-          <p className="fig-kicker">{hero.kicker}</p>
-          <h1 className="fig-hero-title" data-testid="project-surface-title">
-            {hero.title}
-          </h1>
+          <p className="fig-kicker project-space-kicker">{hero.kicker}</p>
+          <div className="project-space-hero-row">
+            <h1 className="fig-hero-title" data-testid="project-surface-title">
+              {hero.title}
+            </h1>
+            {props.surface === "travail" &&
+            props.statusHint &&
+            !/^chargement/i.test(props.statusHint) ? (
+              <span className="fig-tag fig-tag-ok" data-testid="project-status-hint">
+                {/reprise|conservé|durable/i.test(props.statusHint)
+                  ? "Contexte conservé"
+                  : props.statusHint}
+              </span>
+            ) : null}
+          </div>
           <p className="fig-hero-sub">{hero.sub}</p>
-          {props.statusHint ? (
+          {props.surface !== "travail" && props.statusHint ? (
             <p className="text-xs muted" data-testid="project-status-hint">
               {props.statusHint}
             </p>
```

### `projects/sfia-studio-next/web/src/components/shell/studio-rail.ts`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
index 5f39ecfa..bb73fa7d 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-rail.ts
@@ -51,11 +51,11 @@ export const STUDIO_RAIL_VARIANTS: Record<StudioRailVariant, StudioRailTokens> =
     widthPx: 246,
     // ML4D 652:* validated — common project rail fill
     fill: "#0C101A",
-    paddingTop: 24,
-    paddingRight: 24,
-    paddingBottom: 24,
-    paddingLeft: 24,
-    gap: 13,
+    paddingTop: 22,
+    paddingRight: 16,
+    paddingBottom: 22,
+    paddingLeft: 16,
+    gap: 10,
     railComponentId: "shell.rail.projet",
     sourceNodeId: "652:8",
   },
@@ -64,11 +64,11 @@ export const STUDIO_RAIL_VARIANTS: Record<StudioRailVariant, StudioRailTokens> =
     // Ensemble 04 — project desktop rail fixed at 246 (Figma 652:*)
     widthPx: 246,
     fill: "#0C101A",
-    paddingTop: 25,
-    paddingRight: 19,
-    paddingBottom: 0,
-    paddingLeft: 19,
-    gap: 13,
+    paddingTop: 22,
+    paddingRight: 16,
+    paddingBottom: 16,
+    paddingLeft: 16,
+    gap: 10,
     railComponentId: "shell.rail.conversation",
     sourceNodeId: "652:8",
   },
@@ -76,11 +76,11 @@ export const STUDIO_RAIL_VARIANTS: Record<StudioRailVariant, StudioRailTokens> =
     variant: "inspection",
     widthPx: 246,
     fill: "#0C101A",
-    paddingTop: 23,
-    paddingRight: 19,
-    paddingBottom: 22,
-    paddingLeft: 19,
-    gap: 11,
+    paddingTop: 22,
+    paddingRight: 16,
+    paddingBottom: 16,
+    paddingLeft: 16,
+    gap: 10,
     railComponentId: "shell.rail.inspection",
     sourceNodeId: "652:8",
   },
```

### `projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
index be47fd84..ccca574f 100644
--- a/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
+++ b/projects/sfia-studio-next/web/src/components/shell/StudioShell.tsx
@@ -25,6 +25,24 @@ import "./studio-shell.css";
 /** Existing real account destination — integrations settings (no invented account hub). */
 const ACCOUNT_HREF = "/settings/integrations";

+/** Figma 652:* rail glyphs — decorative, paired with visible labels. */
+function railNavGlyph(key: string): string {
+  switch (key) {
+    case "travail":
+      return "◉";
+    case "projet":
+      return "▦";
+    case "journal":
+      return "▤";
+    case "pilotage":
+      return "◇";
+    case "sas":
+      return "◇";
+    default:
+      return "·";
+  }
+}
+
 export function StudioShell({ children }: { children: React.ReactNode }) {
   return (
     <ProjectSpaceProvider>
@@ -130,43 +148,60 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
         data-rail-fill={tokens.fill}
       >
         <div className="studio-shell-rail-inner" style={{ gap: tokens.gap }}>
-          <div className="flex items-center gap-2 shrink-0">
+          <div className="flex items-center gap-[11px] shrink-0">
             <span
               aria-hidden
-              className="inline-flex h-9 w-9 items-center justify-center rounded-[9px] text-[22px] font-bold"
-              style={{ background: "var(--fig-accent)", color: "white" }}
+              className="inline-flex h-10 w-10 items-center justify-center rounded-[12px] text-[22px] font-bold leading-none"
+              style={{ background: "#656fe1", color: "#f4f6fc" }}
             >
               S
             </span>
-            <div>
-              <div className="text-[19px] font-semibold tracking-tight studio-title">SFIA Studio</div>
-              <div className="text-[10px] muted">{PRODUCT_VERSIONING.releaseStatus}</div>
+            <div className="min-w-0">
+              <div className="text-[19px] font-semibold tracking-tight studio-title leading-[27px]">
+                SFIA Studio
+              </div>
+              {personalSpace ? (
+                <div className="text-[10px] muted">{PRODUCT_VERSIONING.releaseStatus}</div>
+              ) : null}
             </div>
           </div>

-          <div className="shrink-0 border-t border-[var(--line)] my-1" aria-hidden />
+          <div className="studio-rail-rule shrink-0" aria-hidden />

           {projectId ? (
-            <div
-              className="mt-1 shrink-0 rounded-[10px] border border-[var(--line)] px-3 py-2.5"
-              style={{ background: "var(--fig-surface-2, #151C29)" }}
-              data-testid="rail-espace-actif"
-            >
-              <div className="text-[10px] muted uppercase tracking-wide">Espace actif</div>
+            <>
+              <div className="studio-rail-section !mt-0" aria-hidden>
+                Espace actif
+              </div>
               <div
-                className="text-sm font-medium mt-1 truncate"
-                title={activeProjectName ?? undefined}
-                data-testid="rail-project-name"
+                className="studio-rail-espace-actif shrink-0"
+                style={{ background: "#151c29" }}
+                data-testid="rail-espace-actif"
               >
-                {activeProjectName ??
-                  (projectSpaceBlocked ? "Projet indisponible" : "Chargement…")}
-              </div>
-              {activeProjectSubtitle ? (
-                <div className="text-[11px] muted mt-0.5 truncate" data-testid="rail-project-subtitle">
-                  {activeProjectSubtitle}
+                <div
+                  className="studio-rail-project-name"
+                  title={activeProjectName ?? undefined}
+                  data-testid="rail-project-name"
+                >
+                  {activeProjectName ??
+                    (projectSpaceBlocked ? "Projet indisponible" : "Chargement…")}
                 </div>
-              ) : null}
-            </div>
+                {activeProjectSubtitle ? (
+                  <div
+                    className="studio-rail-project-subtitle"
+                    data-testid="rail-project-subtitle"
+                  >
+                    {activeProjectSubtitle}
+                  </div>
+                ) : null}
+                {projectSpaceReady ? (
+                  <div className="studio-rail-project-status" data-testid="rail-project-status">
+                    <span className="studio-rail-status-dot" aria-hidden />
+                    Projet actif
+                  </div>
+                ) : null}
+              </div>
+            </>
           ) : (
             <div className="studio-rail-section" aria-hidden>
               Votre espace
@@ -189,7 +224,7 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
                     disabled={openingPrep}
                     onClick={() => void handleOpenPreparation()}
                   >
-                    <span aria-hidden className="text-[var(--accent-soft)] text-lg leading-none">
+                    <span aria-hidden className="studio-rail-nav-glyph">
                       +
                     </span>
                     <span>{openingPrep ? "Ouverture…" : item.label}</span>
@@ -208,30 +243,60 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
                   </span>
                 );
               }
+
+              if (item.key === "portfolio" && projectId) {
+                return (
+                  <Link
+                    key={item.key}
+                    href={item.href}
+                    className="studio-rail-portfolio-link"
+                    data-testid={`nav-${item.key}`}
+                  >
+                    ←&nbsp;&nbsp;Portefeuille
+                  </Link>
+                );
+              }
+
+              const showNavSection =
+                projectId &&
+                item.key === "travail" &&
+                !projectSpaceBlocked;
+
               return (
-                <Link
-                  key={item.key}
-                  href={item.href}
-                  className={`studio-rail-nav-item ${item.active ? "is-active" : ""}`}
-                  aria-current={item.active ? "page" : undefined}
-                  data-testid={`nav-${item.key}`}
-                  onClick={() => {
-                    const surfaceKey = parseStudioSurface(item.key);
-                    if (projectId && surfaceKey) {
-                      noteProjectSurfaceNavIntent(projectId, surfaceKey);
-                    }
-                  }}
-                >
-                  {item.key === "portfolio" ? (
-                    <span aria-hidden className="grid grid-cols-2 gap-[2px] w-3.5 h-3.5 shrink-0">
-                      <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
-                      <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
-                      <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
-                      <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
-                    </span>
+                <div key={item.key} className="contents">
+                  {showNavSection ? (
+                    <>
+                      <div className="studio-rail-rule" aria-hidden />
+                      <div className="studio-rail-section">Navigation</div>
+                    </>
                   ) : null}
-                  <span>{item.label}</span>
-                </Link>
+                  <Link
+                    href={item.href}
+                    className={`studio-rail-nav-item ${item.active ? "is-active" : ""}`}
+                    aria-current={item.active ? "page" : undefined}
+                    data-testid={`nav-${item.key}`}
+                    onClick={() => {
+                      const surfaceKey = parseStudioSurface(item.key);
+                      if (projectId && surfaceKey) {
+                        noteProjectSurfaceNavIntent(projectId, surfaceKey);
+                      }
+                    }}
+                  >
+                    {item.key === "portfolio" ? (
+                      <span aria-hidden className="grid grid-cols-2 gap-[2px] w-3.5 h-3.5 shrink-0">
+                        <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
+                        <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
+                        <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
+                        <span className="block rounded-[2px] bg-[var(--accent-soft)]" />
+                      </span>
+                    ) : (
+                      <span aria-hidden className="studio-rail-nav-glyph">
+                        {railNavGlyph(item.key)}
+                      </span>
+                    )}
+                    <span>{item.label}</span>
+                  </Link>
+                </div>
               );
             })}
             {prepNotice ? (
@@ -254,38 +319,48 @@ function StudioShellInner({ children }: { children: React.ReactNode }) {
             ) : null}

             {projectId && projectSpaceReady ? (
-              <div className="mt-2 space-y-1" data-testid="rail-acces-directs">
-                <div className="text-[10px] muted uppercase tracking-wide mb-1">Accès directs</div>
+              <div className="mt-1 space-y-0.5" data-testid="rail-acces-directs">
+                <div className="studio-rail-rule" aria-hidden />
+                <div className="studio-rail-section">Accès directs</div>
                 <Link
                   href={`/projects/${projectId}?surface=document`}
-                  className={`text-sm block px-2 py-1 ${
-                    surface === "document" ? "text-[var(--fig-accent-soft)]" : "muted"
+                  className={`studio-rail-direct-link ${
+                    surface === "document" ? "is-active" : ""
                   }`}
                   data-testid="nav-documents"
                   onClick={() => noteProjectSurfaceNavIntent(projectId, "document")}
                 >
-                  Documents Nora
+                  <span aria-hidden className="studio-rail-nav-glyph">
+                    ▤
+                  </span>
+                  <span>Documents Nora</span>
                 </Link>
                 <Link
                   href={`/projects/${projectId}?surface=git`}
-                  className={`text-sm block px-2 py-1 ${
-                    surface === "git" ? "text-[var(--fig-accent-soft)]" : "muted"
+                  className={`studio-rail-direct-link ${
+                    surface === "git" ? "is-active" : ""
                   }`}
                   data-testid="nav-sources-git"
                   onClick={() => noteProjectSurfaceNavIntent(projectId, "git")}
                 >
-                  Sources Git
+                  <span aria-hidden className="studio-rail-nav-glyph">
+                    ◇
+                  </span>
+                  <span>Sources Git</span>
                 </Link>
                 <Link
                   href={`/projects/${projectId}?surface=publication`}
-                  className={`text-sm block px-2 py-1 ${
-                    surface === "publication" ? "text-[var(--fig-accent-soft)]" : "muted"
+                  className={`studio-rail-direct-link ${
+                    surface === "publication" ? "is-active" : ""
                   }`}
                   data-testid="nav-resultats"
                   onClick={() => noteProjectSurfaceNavIntent(projectId, "publication")}
                   title="Publication Git existante (préparation / autorisation / dispatch) — libellé Figma provisoire"
                 >
-                  Résultats et preuves
+                  <span aria-hidden className="studio-rail-nav-glyph">
+                    ▦
+                  </span>
+                  <span>Résultats et preuves</span>
                 </Link>
               </div>
             ) : null}
```

### `projects/sfia-studio-next/web/src/components/shell/studio-shell.css`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
index 4d28b62d..de3da283 100644
--- a/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
+++ b/projects/sfia-studio-next/web/src/components/shell/studio-shell.css
@@ -175,15 +175,90 @@ html.studio-shell-lock body {
   }
 }

+.studio-rail-rule {
+  height: 1px;
+  width: 100%;
+  background: #272e49;
+  margin: 0.35rem 0;
+}
+
+.studio-rail-espace-actif {
+  border: 1px solid #272e49;
+  border-radius: 11px;
+  padding: 11px 12px 12px;
+  min-height: 90px;
+  box-sizing: border-box;
+}
+
+.studio-rail-project-name {
+  font-size: 13px;
+  font-weight: 600;
+  line-height: 1.35;
+  color: #f4f6fc;
+  display: -webkit-box;
+  -webkit-box-orient: vertical;
+  -webkit-line-clamp: 2;
+  overflow: hidden;
+  word-break: break-word;
+}
+
+.studio-rail-project-subtitle {
+  margin-top: 4px;
+  font-size: 12px;
+  font-weight: 400;
+  line-height: 1.35;
+  color: #94a2bb;
+  white-space: nowrap;
+  overflow: hidden;
+  text-overflow: ellipsis;
+}
+
+.studio-rail-project-status {
+  display: flex;
+  align-items: center;
+  gap: 6px;
+  margin-top: 10px;
+  font-size: 11px;
+  font-weight: 500;
+  line-height: 1.2;
+  color: #a6dfbc;
+}
+
+.studio-rail-status-dot {
+  width: 7px;
+  height: 7px;
+  border-radius: 50%;
+  background: #6cdbba;
+  flex-shrink: 0;
+}
+
+.studio-rail-portfolio-link {
+  display: block;
+  padding: 0.35rem 0.35rem 0.15rem;
+  color: #94a2bb;
+  font-size: 13px;
+  font-weight: 500;
+  text-decoration: none;
+  line-height: 1.45;
+}
+
+.studio-rail-portfolio-link:hover {
+  color: var(--ink);
+  text-decoration: none;
+}
+
 .studio-rail-nav-item {
   display: flex;
   align-items: center;
-  gap: 0.65rem;
+  gap: 11px;
   border-radius: 9px;
-  padding: 0.55rem 0.7rem;
-  min-height: 45px;
-  color: var(--muted);
+  padding: 0.45rem 0.875rem;
+  min-height: 42px;
+  color: #94a2bb;
   text-decoration: none;
+  font-size: 13px;
+  font-weight: 500;
+  border: 1px solid transparent;
 }

 .studio-rail-nav-item:hover {
@@ -192,29 +267,61 @@ html.studio-shell-lock body {
 }

 .studio-rail-nav-item.is-active {
-  background: #242c4b;
-  border: 1px solid var(--line);
-  color: var(--ink);
+  background: #292d58;
+  border-color: transparent;
+  color: #f4f6fc;
   font-weight: 600;
-  position: relative;
 }

-.studio-rail-nav-item.is-active::before {
-  content: "";
-  width: 8px;
-  height: 8px;
-  border-radius: 4px;
-  background: var(--accent);
+.studio-rail-nav-glyph {
+  width: 22px;
   flex-shrink: 0;
+  text-align: center;
+  font-size: 16px;
+  line-height: 1;
+  color: inherit;
+  font-weight: 600;
+}
+
+.studio-rail-nav-item.is-active .studio-rail-nav-glyph {
+  color: #afa5ff;
+}
+
+.studio-rail-direct-link {
+  display: flex;
+  align-items: center;
+  gap: 11px;
+  padding: 0.4rem 0.5rem;
+  border-radius: 8px;
+  color: #94a2bb;
+  font-size: 12px;
+  font-weight: 500;
+  text-decoration: none;
+  min-height: 34px;
+}
+
+.studio-rail-direct-link:hover {
+  color: var(--ink);
+  text-decoration: none;
+}
+
+.studio-rail-direct-link.is-active {
+  color: #afa5ff;
+}
+
+.studio-rail-direct-link .studio-rail-nav-glyph {
+  font-size: 14px;
+  font-weight: 500;
 }

 .studio-rail-section {
-  font-size: 0.7rem;
+  font-size: 10px;
   letter-spacing: 0.06em;
   text-transform: uppercase;
-  color: var(--muted);
+  color: #94a2bb;
   font-weight: 600;
   margin: 0.35rem 0 0.15rem;
+  line-height: 1.4;
 }

 .studio-account-link {
@@ -234,6 +341,8 @@ html.studio-shell-lock body {

 .studio-account-link:focus-visible,
 .studio-rail-nav-item:focus-visible,
+.studio-rail-portfolio-link:focus-visible,
+.studio-rail-direct-link:focus-visible,
 .studio-shell-bottom-nav a:focus-visible,
 .studio-shell-bottom-nav-btn:focus-visible {
   outline: 2px solid var(--accent-soft);
```

### `projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx`
```diff
diff --git a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
index 8390eb97..62f1f591 100644
--- a/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
+++ b/projects/sfia-studio-next/web/src/app/projects/[projectId]/page.tsx
@@ -131,7 +131,6 @@ export default function ProjectPage() {
   const [noraActivity, setNoraActivity] = useState<"idle" | "preparing" | "error">("idle");
   const [status, setStatus] = useState("");
   const [pilotageStatus, setPilotageStatus] = useState("");
-  const [decisionSummary, setDecisionSummary] = useState("");
   const [inspect, setInspect] = useState<Doc | null>(null);
   const [docUi, setDocUi] = useState<DocUiState>("READING");
   const [reviseDraft, setReviseDraft] = useState("");
@@ -311,28 +310,7 @@ export default function ProjectPage() {
   }

   async function refreshDurablePilotage() {
-    const [decRes, projRes] = await Promise.all([
-      fetch(`/api/projects/${params.projectId}/decisions`),
-      fetch(`/api/projects/${params.projectId}/pilotage`),
-    ]);
-    if (decRes.ok) {
-      const dj = await decRes.json();
-      const decisions = (dj.decisions ?? []) as Array<{
-        id: string;
-        kind: string;
-        state: string;
-        statement: string;
-        createdAt?: string;
-      }>;
-      const applicable = decisions.filter((d) => d.state === "APPLICABLE");
-      const latest = [...decisions].sort((a, b) =>
-        String(b.createdAt ?? "").localeCompare(String(a.createdAt ?? "")),
-      )[0];
-      setDecisionSummary(
-        `${applicable.length} applicable(s) · ${decisions.length} au journal` +
-          (latest ? ` · dernière ${latest.kind}/${latest.state}` : ""),
-      );
-    }
+    const projRes = await fetch(`/api/projects/${params.projectId}/pilotage`);
     if (projRes.ok) {
       const pj = await projRes.json();
       const cycle = pj.pilotage?.cycle ?? pj.cycle;
@@ -943,7 +921,7 @@ export default function ProjectPage() {
           busy={busy || !preparationId}
           unresolvedPending={Boolean(unresolvedPending)}
           activity={noraActivity}
-          status={[status, pilotageStatus, decisionSummary].filter(Boolean).join(" · ")}
+          status={[status, pilotageStatus].filter(Boolean).join(" · ") || undefined}
           onDraft={setDraft}
           onSend={() => void sendMessage()}
           onReconcile={
@@ -952,68 +930,68 @@ export default function ProjectPage() {
               : undefined
           }
           aside={
-            <>
-              <div className="fig-panel space-y-2" data-testid="travail-aside-bref">
-                <h2 className="fig-panel-title">En bref</h2>
-                <p className="text-sm muted">
-                  Un seul fil visible. Mémoire D4 récupérable au-delà des six derniers messages.
+            <div className="fig-inspector" data-testid="travail-aside-inspector">
+              <p className="fig-kicker">Contexte projet</p>
+              <h2 className="fig-inspector-title">En bref</h2>
+              <div className="fig-inspector-rule" aria-hidden />
+              <p className="fig-inspector-name" data-testid="travail-aside-bref">
+                {projectName ?? "Projet"}
+              </p>
+              <span className="fig-tag fig-tag-ok mt-2 inline-flex">
+                {statusHint && /reprise|conservé|durable/i.test(statusHint)
+                  ? "Contexte conservé"
+                  : "Projet actif"}
+              </span>
+              <div className="fig-inspector-rule" aria-hidden />
+              <p className="fig-inspector-section">Repères</p>
+              <div className="fig-inspector-card" data-testid="travail-aside-objets">
+                <p className="fig-inspector-card-title">Continuité</p>
+                <p className="fig-inspector-card-body">
+                  Fil de préparation et conversation consultables depuis Travail.
                 </p>
-                {knowledge ? (
-                  <p className="text-xs muted">
-                    Acquis capitalisés&nbsp;:{" "}
-                    {knowledge.acquis.filter((a) => a.status === "CURRENT").length}
-                    {" · "}
-                    Points ouverts&nbsp;:{" "}
-                    {knowledge.openPoints.filter((o) => o.status === "OPEN").length}
-                  </p>
-                ) : (
-                  <p className="text-xs muted">Synthèse knowledge non encore disponible.</p>
-                )}
               </div>
-              <div className="fig-panel space-y-2" data-testid="travail-aside-objets">
-                <h2 className="fig-panel-title">Objets du projet</h2>
-                <ul className="text-sm muted space-y-1">
-                  <li>Documents Nora · {documents.length}</li>
-                  <li>
-                    <button
-                      type="button"
-                      className="text-[var(--fig-accent-soft)] underline-offset-2 hover:underline"
-                      onClick={() => selectSurface("publication")}
-                    >
-                      Résultats et preuves
-                    </button>
-                    <span> · surface publication existante</span>
-                  </li>
-                  <li>
-                    <button
-                      type="button"
-                      className="text-[var(--fig-accent-soft)] underline-offset-2 hover:underline"
-                      onClick={() => selectSurface("git")}
-                    >
-                      Sources Git
-                    </button>
-                  </li>
-                </ul>
+              <div className="fig-inspector-card">
+                <p className="fig-inspector-card-title">Dossier du projet</p>
+                <p className="fig-inspector-card-body">
+                  {documents.length > 0
+                    ? `${documents.length} document${documents.length > 1 ? "s" : ""} Nora disponible${documents.length > 1 ? "s" : ""}.`
+                    : "Les objets et sources du projet restent distincts du dialogue."}
+                </p>
+                <div className="fig-inspector-links">
+                  <button
+                    type="button"
+                    className="fig-inspector-link"
+                    onClick={() => selectSurface("git")}
+                  >
+                    Sources Git
+                  </button>
+                  <button
+                    type="button"
+                    className="fig-inspector-link"
+                    onClick={() => selectSurface("publication")}
+                  >
+                    Résultats et preuves
+                  </button>
+                </div>
               </div>
-              <div
-                className="fig-panel space-y-2"
-                style={{ background: "rgba(101,111,225,0.08)" }}
-                data-testid="travail-aside-clarifier"
-              >
-                <h2 className="fig-panel-title">Points à clarifier</h2>
+              <div className="fig-inspector-rule" aria-hidden />
+              <p className="fig-inspector-section">Points à clarifier</p>
+              <div data-testid="travail-aside-clarifier">
                 {(knowledge?.openPoints ?? [])
                   .filter((o) => o.status === "OPEN")
                   .slice(0, 5)
                   .map((o) => (
-                    <p key={o.id} className="text-sm">
+                    <p key={o.id} className="fig-inspector-card-body mb-2">
                       {o.statement}
                     </p>
                   ))}
                 {(knowledge?.openPoints ?? []).filter((o) => o.status === "OPEN").length === 0 ? (
-                  <p className="text-sm muted">Aucun point ouvert capitalisé.</p>
+                  <p className="fig-inspector-card-body">
+                    Seules les informations réellement connues seront affichées.
+                  </p>
                 ) : null}
               </div>
-            </>
+            </div>
           }
         />
       ) : null}
@@ -1192,10 +1170,6 @@ export default function ProjectPage() {
           onBackToThread={() => selectSurface("travail")}
         />
       ) : null}
-
-      <a className="btn secondary inline-block" href="/portfolio">
-        Retour portefeuille
-      </a>
     </ProjectChrome>
   );
 }
```

### `projects/sfia-studio-next/web/src/components/figma/tokens.css`
```diff
diff --git a/projects/sfia-studio-next/web/src/components/figma/tokens.css b/projects/sfia-studio-next/web/src/components/figma/tokens.css
index b3991e2d..d9a07ac9 100644
--- a/projects/sfia-studio-next/web/src/components/figma/tokens.css
+++ b/projects/sfia-studio-next/web/src/components/figma/tokens.css
@@ -198,6 +198,283 @@
   align-items: start;
 }

+/* Figma 652:8 — conversation ~968 / aside ~369 / gap ~25 at 1680×970 */
+.fig-travail-workspace {
+  grid-template-columns: minmax(0, 968fr) minmax(260px, 369fr);
+  gap: 25px;
+  align-items: stretch;
+  min-height: 0;
+}
+
+.fig-travail-main {
+  min-width: 0;
+  display: flex;
+  flex-direction: column;
+  min-height: 0;
+}
+
+.fig-conversation-panel {
+  display: flex;
+  flex-direction: column;
+  gap: 14px;
+  min-height: 0;
+  flex: 1 1 auto;
+  background: #151c29;
+  border: 1px solid #272e49;
+  border-radius: 14px;
+  padding: 18px 20px 16px;
+}
+
+.fig-conversation-head {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: 8px;
+  flex-shrink: 0;
+}
+
+.fig-nora-thread {
+  display: flex;
+  flex-direction: column;
+  gap: 14px;
+  flex: 1 1 auto;
+  min-height: 0;
+  max-height: min(52vh, 500px);
+  overflow: auto;
+  padding-right: 4px;
+}
+
+.fig-msg {
+  border: 0;
+  border-radius: 13px;
+  padding: 14px 18px 16px;
+  background: #0f1420;
+}
+
+.fig-msg-pilot {
+  background: #292d58;
+  margin-left: clamp(0px, 12%, 180px);
+}
+
+.fig-msg-nora {
+  background: #0f1420;
+  border: 1px solid #272e49;
+  margin-right: clamp(0px, 8%, 120px);
+}
+
+.fig-msg-meta {
+  display: flex;
+  align-items: center;
+  gap: 8px;
+  margin-bottom: 8px;
+}
+
+.fig-msg-avatar {
+  display: inline-flex;
+  width: 30px;
+  height: 30px;
+  border-radius: 999px;
+  align-items: center;
+  justify-content: center;
+  background: #292d58;
+  color: #afa5ff;
+  font-size: 13px;
+  font-weight: 700;
+  flex-shrink: 0;
+}
+
+.fig-msg-role {
+  font-size: 11px;
+  font-weight: 600;
+  letter-spacing: 0.04em;
+  text-transform: uppercase;
+  color: #afa5ff;
+}
+
+.fig-msg-role-pilot {
+  color: #afa5ff;
+}
+
+.fig-msg-body {
+  font-size: 14px;
+  line-height: 1.5;
+  color: #f4f6fc;
+  font-weight: 400;
+}
+
+.fig-msg-body p {
+  margin: 0 0 0.55em;
+}
+
+.fig-msg-body p:last-child {
+  margin-bottom: 0;
+}
+
+.fig-travail-composer {
+  display: flex;
+  flex-direction: column;
+  gap: 0;
+  border: 1px solid #272e49;
+  border-radius: 14px;
+  padding: 16px 18px 12px;
+  background: #151c29;
+  min-height: 118px;
+}
+
+.fig-travail-composer-input {
+  width: 100%;
+  min-height: 48px;
+  resize: none;
+  border: 0;
+  background: transparent;
+  color: #f4f6fc;
+  font: inherit;
+  font-size: 15px;
+  line-height: 1.45;
+  padding: 0;
+}
+
+.fig-travail-composer-input::placeholder {
+  color: #94a2bb;
+}
+
+.fig-travail-composer-input:focus {
+  outline: none;
+}
+
+.fig-travail-composer-input:focus-visible {
+  outline: 2px solid var(--fig-accent);
+  outline-offset: 2px;
+}
+
+.fig-travail-composer-bar {
+  display: flex;
+  align-items: center;
+  justify-content: space-between;
+  gap: 12px;
+  margin-top: 12px;
+  padding-top: 12px;
+  border-top: 1px solid #272e49;
+}
+
+.fig-travail-composer-hint {
+  color: #94a2bb;
+  font-size: 11px;
+  font-weight: 400;
+  line-height: 1.4;
+}
+
+.fig-travail-composer-send {
+  width: 52px;
+  height: 35px;
+  border: 0;
+  border-radius: 10px;
+  background: #656fe1;
+  color: #f4f6fc;
+  font-size: 22px;
+  font-weight: 600;
+  line-height: 1;
+  cursor: pointer;
+  display: inline-flex;
+  align-items: center;
+  justify-content: center;
+  flex-shrink: 0;
+}
+
+.fig-travail-composer-send:disabled {
+  opacity: 0.45;
+  cursor: not-allowed;
+}
+
+.fig-travail-composer-send:focus-visible {
+  outline: 2px solid var(--fig-accent-soft);
+  outline-offset: 2px;
+}
+
+.fig-travail-aside {
+  min-width: 0;
+}
+
+.fig-inspector {
+  background: #151c29;
+  border: 1px solid #272e49;
+  border-radius: 14px;
+  padding: 20px 22px 22px;
+  min-height: 100%;
+}
+
+.fig-inspector-title {
+  margin: 8px 0 0;
+  font-size: 22px;
+  font-weight: 600;
+  line-height: 1.3;
+  color: #f4f6fc;
+}
+
+.fig-inspector-name {
+  margin: 0;
+  font-size: 15px;
+  font-weight: 600;
+  color: #f4f6fc;
+}
+
+.fig-inspector-section {
+  margin: 0 0 12px;
+  font-size: 10px;
+  font-weight: 600;
+  letter-spacing: 0.06em;
+  text-transform: uppercase;
+  color: #94a2bb;
+}
+
+.fig-inspector-rule {
+  height: 1px;
+  background: #272e49;
+  margin: 16px 0;
+}
+
+.fig-inspector-card {
+  background: #0f1420;
+  border: 1px solid #272e49;
+  border-radius: 10px;
+  padding: 12px 16px 14px;
+  margin-bottom: 12px;
+}
+
+.fig-inspector-card-title {
+  margin: 0 0 6px;
+  font-size: 13px;
+  font-weight: 600;
+  color: #f4f6fc;
+}
+
+.fig-inspector-card-body {
+  margin: 0;
+  font-size: 12px;
+  line-height: 1.5;
+  color: #94a2bb;
+  font-weight: 400;
+}
+
+.fig-inspector-links {
+  display: flex;
+  flex-wrap: wrap;
+  gap: 10px;
+  margin-top: 10px;
+}
+
+.fig-inspector-link {
+  background: transparent;
+  border: 0;
+  padding: 0;
+  color: #afa5ff;
+  font: inherit;
+  font-size: 12px;
+  cursor: pointer;
+  text-decoration: underline;
+  text-underline-offset: 2px;
+}
+
 /* —— Sas Nora composition (Figma 607:3…607:277) —— */
 .sas-page {
   display: flex;
@@ -761,23 +1038,23 @@
   margin: 0 0 6px;
 }

+/* Message / composer base — Travail overrides in .fig-travail-* above */
 .fig-msg {
-  border: 1px solid var(--fig-line);
-  border-radius: var(--fig-radius-sm);
-  padding: 12px 14px;
-  background: #121826;
+  border-radius: 13px;
+  padding: 14px 18px 16px;
+  background: #0f1420;
 }
-.fig-msg-pilot { background: #1a2130; }
-.fig-msg-nora { background: #151c29; border-color: #3a4560; }
+.fig-msg-pilot { background: #292d58; }
+.fig-msg-nora { background: #0f1420; border: 1px solid #272e49; }

 .fig-composer {
   display: flex;
   flex-direction: column;
   gap: 8px;
-  border: 1px solid var(--fig-line);
-  border-radius: var(--fig-radius);
+  border: 1px solid #272e49;
+  border-radius: 14px;
   padding: 12px;
-  background: #0c1018;
+  background: #151c29;
 }

 /* O-06 — long-thread composer remains reachable while the journal scrolls. */
@@ -942,10 +1219,21 @@
   .fig-stat-grid,
   .fig-card-grid,
   .fig-workspace,
+  .fig-travail-workspace,
   .fig-workspace-3,
   .fig-two-col {
     grid-template-columns: 1fr;
   }
+
+  .fig-nora-thread {
+    max-height: none;
+  }
+
+  .fig-msg-pilot,
+  .fig-msg-nora {
+    margin-left: 0;
+    margin-right: 0;
+  }
 }

 @media (max-width: 767px) {
@@ -1002,6 +1290,11 @@
   flex-direction: column;
   gap: 12px;
   min-height: 70px;
+  position: sticky;
+  top: 0;
+  z-index: 3;
+  background: #0a0e17;
+  padding-bottom: 8px;
 }

 .project-space-breadcrumb {
@@ -1021,8 +1314,36 @@
   background: rgba(101, 111, 225, 0.12);
 }

+.project-space-kicker {
+  color: #afa5ff;
+  font-size: 11px;
+  font-weight: 600;
+  letter-spacing: 0.04em;
+}
+
+.project-space-hero-row {
+  display: flex;
+  flex-wrap: wrap;
+  align-items: center;
+  gap: 12px 16px;
+}
+
 .project-space-hero .fig-hero-title {
-  font-size: clamp(1.35rem, 1.8vw, 1.65rem);
+  font-size: clamp(1.55rem, 2vw, 1.95rem);
+  font-weight: 600;
+  letter-spacing: -0.02em;
+  line-height: 1.25;
+}
+
+.project-space-hero .fig-hero-sub {
+  margin-top: 0.35rem;
+  font-size: 14px;
+  font-weight: 400;
+  max-width: 56rem;
+}
+
+.project-space-page .fig-tag {
+  font-weight: 600;
 }

 .project-unavailable {
```

### `projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts`
```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts b/projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
index a9b77871..dac1f1d0 100644
--- a/projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/project-space-ensemble04.spec.ts
@@ -70,6 +70,22 @@ test.describe("Ensemble 04 project space", () => {
     await expect(page.getByTestId("nav-documents")).toBeVisible();
     await expect(page.getByTestId("nav-sources-git")).toBeVisible();
     await expect(page.getByTestId("nav-resultats")).toBeVisible();
+
+    // Visual fidelity — rail icons / separators / no duplicate portfolio footer
+    await expect(rail.getByText("Navigation", { exact: true })).toBeVisible();
+    await expect(rail.getByText("Accès directs", { exact: true })).toBeVisible();
+    await expect(rail.getByTestId("rail-project-status")).toHaveText(/Projet actif/);
+    await expect(page.getByRole("link", { name: /Retour portefeuille/i })).toHaveCount(0);
+    await expect(page.getByTestId("thread-send")).toHaveAttribute("aria-label", "Envoyer");
+    await expect(page.getByTestId("thread-send")).not.toHaveText(/Envoyer/);
+    await expect(page.getByTestId("travail-aside-inspector")).toBeVisible();
+    await expect(page.getByText(/Mémoire D4 récupérable/i)).toHaveCount(0);
+    await expect(page.getByText(/0 applicable/i)).toHaveCount(0);
+
+    const railBox = await rail.boundingBox();
+    expect(railBox?.width).toBeGreaterThanOrEqual(244);
+    expect(railBox?.width).toBeLessThanOrEqual(248);
+
     await page.getByTestId("nav-documents").click();
     await expect(page).toHaveURL(/surface=document/);

@@ -80,7 +96,7 @@ test.describe("Ensemble 04 project space", () => {
     await expect(page.getByTestId("project-overview")).toBeVisible({ timeout: 20000 });
     await expect(page.getByTestId("rail-project-name")).toHaveText(projectName);

-    // T06 — Retour Portefeuille
+    // T06 — Retour Portefeuille (unique rail entry)
     await rail.getByTestId("nav-portfolio").click();
     await page.waitForURL("**/portfolio");
```

### `projects/sfia-studio-next/web/tests/e2e/project-space-f2-captures.spec.ts`
```diff
diff --git a/projects/sfia-studio-next/web/tests/e2e/project-space-f2-captures.spec.ts b/projects/sfia-studio-next/web/tests/e2e/project-space-f2-captures.spec.ts
index 88f8260b..7cda3483 100644
--- a/projects/sfia-studio-next/web/tests/e2e/project-space-f2-captures.spec.ts
+++ b/projects/sfia-studio-next/web/tests/e2e/project-space-f2-captures.spec.ts
@@ -46,11 +46,58 @@ test("F2 runtime captures Ensemble 04 project space", async ({ page }) => {

   await page.goto(`/projects/${projectId}?surface=travail`);
   await expect(page.getByTestId("rail-project-name")).toHaveText(projectName);
+  await expect(page.getByTestId("nora-workspace")).toBeVisible();
+  await expect(page.getByTestId("thread-send")).toHaveAttribute("aria-label", "Envoyer");
+
+  const measures = await page.evaluate(() => {
+    const rail = document.querySelector('[data-testid="studio-rail"]') as HTMLElement | null;
+    const workspace = document.querySelector('[data-testid="nora-workspace"]') as HTMLElement | null;
+    const main = document.querySelector('[data-testid="nora-main"]') as HTMLElement | null;
+    const aside = document.querySelector('[data-testid="nora-aside"]') as HTMLElement | null;
+    const composer = document.querySelector('[data-testid="nora-composer"]') as HTMLElement | null;
+    const name = document.querySelector('[data-testid="rail-project-name"]') as HTMLElement | null;
+    const cs = (el: HTMLElement | null) => (el ? getComputedStyle(el) : null);
+    const box = (el: HTMLElement | null) =>
+      el ? { w: Math.round(el.getBoundingClientRect().width), h: Math.round(el.getBoundingClientRect().height) } : null;
+    return {
+      viewport: { w: window.innerWidth, h: window.innerHeight, dpr: window.devicePixelRatio },
+      rail: { ...box(rail), widthAttr: rail?.getAttribute("data-rail-width"), fill: rail?.getAttribute("data-rail-fill") },
+      workspace: box(workspace),
+      conversation: box(main),
+      aside: box(aside),
+      composer: box(composer),
+      projectName: {
+        ...box(name),
+        lineClamp: name ? cs(name)?.webkitLineClamp : null,
+        fontSize: name ? cs(name)?.fontSize : null,
+        fontWeight: name ? cs(name)?.fontWeight : null,
+      },
+      send: (() => {
+        const btn = document.querySelector('[data-testid="thread-send"]') as HTMLElement | null;
+        return { ...box(btn), aria: btn?.getAttribute("aria-label"), text: btn?.textContent?.trim() };
+      })(),
+    };
+  });
+  fs.writeFileSync(path.join(outDir, "dom-measures-travail.json"), JSON.stringify(measures, null, 2));
+
   await page.screenshot({
     path: path.join(outDir, "runtime-travail-1680x970.png"),
     fullPage: false,
   });

+  // Long name wrap check (2-line clamp)
+  await page.evaluate((longName) => {
+    const el = document.querySelector('[data-testid="rail-project-name"]');
+    if (el) {
+      el.textContent = longName;
+      el.setAttribute("title", longName);
+    }
+  }, "Cockpit Réunions Projet — Coordination interéquipes et préparation stratégique prolongée");
+  await page.screenshot({
+    path: path.join(outDir, "runtime-travail-long-name-1680x970.png"),
+    fullPage: false,
+  });
+
   await page.goto(`/projects/${projectId}?surface=projet`);
   await expect(page.getByTestId("project-overview")).toBeVisible();
   await page.screenshot({
@@ -95,10 +142,21 @@ test("F2 runtime captures Ensemble 04 project space", async ({ page }) => {
         },
         files: [
           "runtime-travail-1680x970.png",
+          "runtime-travail-long-name-1680x970.png",
           "runtime-projet-overview-1680x970.png",
           "runtime-journal-nav-1680x970.png",
           "runtime-unavailable-1680x970.png",
+          "dom-measures-travail.json",
         ],
+        figmaReference: {
+          viewport: { width: 1680, height: 970 },
+          railPx: 246,
+          conversationPx: 968,
+          asidePx: 369,
+          columnGapPx: 25,
+          headerPx: 70,
+        },
+        measures,
       },
       null,
       2,
```

### `projects/sfia-studio-next/construction/delivery-history.md`
```diff
diff --git a/projects/sfia-studio-next/construction/delivery-history.md b/projects/sfia-studio-next/construction/delivery-history.md
index 29a8ec4d..005c8a1c 100644
--- a/projects/sfia-studio-next/construction/delivery-history.md
+++ b/projects/sfia-studio-next/construction/delivery-history.md
@@ -5,6 +5,25 @@ Append-only logical journal of Cursor product deliveries.



+## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-VISUAL-FIDELITY
+
+| Field | Value |
+| --- | --- |
+| Date | 2026-11-16 ~22:55 CET |
+| Macro-lot | ML4D Ensemble 04 — correction fidélité visuelle Figma 652:* |
+| Type | RUN / correction bornée · **NO RELEASE** |
+| Parent candidat RECETTE | `20fb41baa534b5a802a275b6944fc267ccaa2192` (inchangé) |
+| Baseline UX-005 | `bd8e16728f3c2a726a49be4c94565a2d85fc41a9` |
+| Branch | `feat/next-ml4d-project-space-20261116` |
+| Scope | Rail 2 lignes + icônes + séparateurs ; suppression Retour portefeuille doublon ; proportions 968/369 ; typo/messages/compositeur flèche ; inspecteur unifié ; sticky header ; preuves DOM 1680×970 |
+| Non-scope | Ensembles 05–07 ; API/DB ; amend RECETTE ; push projet ; PR/merge ; Gate C ; ML5 |
+| Preuves | next build PASS ; Vitest studio-rail PASS ; Playwright E04+T13/T16+F2+nav-intent+UX-004+composer PASS ; tsc workspace FAIL=parent (32) / src 0 |
+| Mesures DOM | rail 246 ; conversation 965 (~968) ; aside 368 (~369) ; send 52×35 ; name line-clamp 2 |
+| RECETTE | **inchangée** `:3200` SHA `20fb41ba` / BUILD `Bdn6zx0xBoavYTjWmiO4x` / LaunchAgent `com.sfia.studio.next.recette.ml4d-ux004` |
+| Push produit | **AUCUN** |
+| Verdict cible | `ENSEMBLE 04 — VISUAL FIDELITY CORRECTION CANDIDATE READY` |
+
+
 ## delivery_id: DELIV-2026-11-16-ML4D-ENSEMBLE-04-TECHNICAL-CONSOLIDATION

 | Field | Value |
```

## 9. Blast radius

| Surface | Impact | Non-régression |
| --- | --- | --- |
| Rail commun projet | Structure + styles | UX-004 portfolio PASS |
| Navigation surfaces | Icônes / labels | E04 + nav-intent PASS |
| Conversation / compositeur | Habillage seul | long-thread composer PASS |
| Panneau contextuel | Présentation | — |
| Projet / Journal / Trajectoire | Hero kicker only | E04 PASS |
| Portefeuille / Sas | Rail personnel inchangé (logo + version) | UX-004 + sas suites antérieures |
| API / DB | **aucune** | — |
| RECETTE | **aucune** | BUILD `Bdn6zx0x…` |

## 10. Tests exécutés

| Suite | Résultat |
| --- | --- |
| `tsc` workspace | FAIL **32** = parent UX-005 (fixtures) — **src 0 nouvelle** |
| ESLint fichiers touchés | PASS |
| `next build` | PASS |
| Vitest `studio-rail.test.ts` | 13 PASS |
| Playwright E04 (+T13/T16) | PASS |
| Playwright F2 captures | PASS |
| Playwright nav-intent | PASS |
| Playwright UX-004 portfolio | PASS |
| Playwright ml4c-long-thread-composer | PASS |

Niveau preuves : **FAKE/DEV** (fixture Nora) — pas LIVE. Captures DEV ≠ acceptation Morris.

## 11. Écarts résiduels (non bloquants)

1. Conversation 965 vs 968 (−3 px) — padding shell main + scrollbar ; layout paramétrique.
2. Header shell projet reste dans le flux sticky (pas un second topbar 70px Figma séparé) — chrome produit + sticky.
3. Icônes rail = glyphes Unicode Figma (◉▦▤◇), pas un set SVG stroke — cohérent avec maquette.
4. Contenu messages = fil réel/fixture (pas le copy illustratif Figma) — **attendu**.
5. Mapping « Résultats et preuves » → `publication` : **KNOWN GAP** inchangé.
6. tsc 32 erreurs parent : réserve connue, non présentée comme PASS.

## 12. Dette / exit

- Ensemble 05 : fil structurant, scroll intelligent, inspecteur métier.
- Cutover RECETTE du nouveau SHA : **GO Morris distinct** après revue ChatGPT.
- Aucune STABLE / tag / CHANGELOG release.

## 13. État DEV / RECETTE

- DEV : candidat local sur branche feat (commit ci-dessous).
- RECETTE : **INCHANGÉE** — `20fb41ba` / `Bdn6zx0xBoavYTjWmiO4x` / `:3200`.

## 14. Décision Morris attendue

1. Revue ChatGPT technique + UX sur ce pack.
2. Si GO : remplacer build RECETTE `:3200` par le nouveau SHA (cycle cutover séparé).
3. Acceptation visuelle Morris Figma ↔ application sur RECETTE.
4. Pas d'ADOPTED / STABLE dans ce cycle.

## 15. Post-commit / Git Truth final

- Branche : `feat/next-ml4d-project-space-20261116`
- HEAD : `a30e75c77f4eed4f14cbcb8f83bb6521d571b3c6`
- Parent : `20fb41baa534b5a802a275b6944fc267ccaa2192`
- Amend : **non**
- Push produit : **non**
- Review Handoff commit/blob : _(après publish)_
