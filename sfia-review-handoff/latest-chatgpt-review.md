# SFIA Studio Next — Review Pack Full
## Ensemble 05 — Qualification technique intégrée (Travail avec Nora)

**Date** : 2026-11-17 11:02 CET
**Type** : 6 — Architecture technique / EVOL — préparation
**Profil** : Standard — lecture seule
**Macro-lot** : R5 / ML4D — Ensemble 05
**Verdict** : **TECHNICAL QUALIFICATION READY WITH RESERVES**

```text
NO IMPLEMENTATION
NO PRODUCT FILE CREATED OR MODIFIED
NO RELEASE — READ ONLY
ENV-01 : N/A — READ ONLY
MORRIS REVIEW REQUIRED before Delivery
Gate C OPEN / ML5 NOT STARTED / NO ADOPTED
```

---

## 1. Git Truth Check

| Item | Valeur |
|------|--------|
| Workspace | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |
| Origin | `https://github.com/mcleland147/sfia-workspace.git` |
| Branche active | `feat/next-ml4d-project-space-20261116` |
| HEAD local | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
| Tree | `b92cc822ac67399c6d8753c17dbcce5f4b5b734f` |
| Parent | `351aea9607c5997f7343212a837dd13c0f1e4429` |
| `origin/main` | `997d4c4e8204993de7107552898c8cc08cd3b0ed` (**match** ref ChatGPT) |
| Branche docs | `origin/docs/next-ml4d-registre-revues-20261116` = `1364471d2f040217132fd0be24030ef7a61d4135` (**match**) |
| Handoff tip observé | `c35f0bbd0f3024f06c729511ad4c8824354e418e` (cycle cutover précédent) |
| Staged / untracked produit | **aucun** |
| Diff hors pack | `.tmp-sfia-review/chatgpt-review.md` seulement |
| RECETTE observée | `:3200` HTTP 200 ; BUILD `3LzvYPTQc-Km7St6nF97r` ; LaunchAgent → worktree `…-984d77a3` ; `SFIA_SOURCE_SHA` attendu `984d77a3` |

**Distinction stricte :** `main` (baseline Git) ≠ branche docs ML4D (contrats UX/tech candidats) ≠ branche produit locale `984d77a3` ≠ runtime RECETTE (même SHA candidat actuellement servi).

Aucun nettoyage/checkout/rebase effectué.

---

## 2. Sources lues (ref + blob)

### Gouvernance / architecture (`origin/main`)

| Source | Blob |
|--------|------|
| `governance/SEF.md` | `ef85ba1eda6ce5eaddd75eca3ca299a10cd05ad4` |
| `governance/roadmap.md` | `1be3e58d734bbb8ff88a4308020dc82e78c97cf7` |
| `governance/decisions/2026-11-11-r5-convergence-fonctionnelle-ux-trajectoire.md` | `a9f7823128fe5652d3b80df2fd3df98d2e5fc99e` |
| `governance/product-naming-conventions.md` | `9cdd253d84b73260b624c8856a62e6fbb5e7c87e` |
| `governance/environnements-recette-et-promotions.md` | `14b61f0d1265cf85fcca09b028dd09bd8c71597f` |
| `governance/product-versioning.md` | `8bc93e0fafac0f981c446e978a37f5f93d183875` |
| `cadrage/vision-cible/README.md` | `3854bf75b321b7d5409807a0116267355764d8b5` |
| `architecture-technique/cadrage-r4.md` | `4d54ced7f3ea5be4b81b138ea4d0fe4993335c22` |
| `architecture-technique/contrat-observabilite-transverse.md` | `ee4f56624282ad0d8eddf97342aeb83a9efee207` |

ENV-01 / versioning : **pas de divergence** vs blobs cités par le mandat. Applicabilité cycle : **N/A — READ ONLY** / **NO RELEASE — READ ONLY**. STABLE : NOT AVAILABLE.

### Contrats Ensemble 05 (`origin/docs/next-ml4d-registre-revues-20261116@1364471d`)

| Source | Blob | Statut |
|--------|------|--------|
| `conception-ux-travail-avec-nora.md` | `dc5ef25f53e9b819965fac3981d430e59298825f` | **VALIDATED SPEC Morris** v0.7 |
| `contrat-technique-travail-avec-nora.md` | `f584bfc44e7b238de55d33c79c4028e0bbdf6e0e` | **CANDIDATE / DOCUMENTED** v0.1 — **non adopté** |
| `registre-central-revues.md` | `26268494daba4e1790f5cac60f9f0333b360ecef` | v0.13 |

Ces fichiers sont **absents** de HEAD produit `984d77a3` (KNOWN GAP docs↔produit branch).

### Doctrines v3 (`origin/main`)

- `30-knowledge-context-human-decision-doctrine.md`
- `34-agent-capabilities-reversibility-and-execution-governance.md`
- `35-artifact-evidence-debt-and-controlled-learning.md`
- `37-studio-v3-foundations-and-consolidation-decision-pack.md`

### Contrats fonctionnels D3/D4/D6/D7/D8/D9 + SFIA v2.6

Lus depuis `origin/main` (chemins `conception-fonctionnelle/*`, guides method/templates). CKC Architecture technique : guide cognitif candidate, **sans autorité d'exécution**.

### Code analysé

HEAD produit `984d77a3` (également servi en RECETTE) + comparaison mentale à `main@997d4c4e` pour les écarts déjà notés dans le contrat technique candidat. Fichiers principaux : `page.tsx`, `NoraConversation.tsx`, `SafeMarkdown.tsx`, `tokens.css`, `StudioShell.tsx`, `DocumentSurfaces.tsx`, `domains/conversation/*`, `domains/pilotage/*`, API preparations/messages, tests ML4C/Ensemble04.

---

## 3. Capacités existantes confirmées (DEMONSTRATED_IN_CODE)

1. **Fil unique Travail** via `NoraConversation` + bootstrap `GET /api/projects/{id}` ; envoi via `POST /api/preparations/{prepId}/messages`.
2. **Autorité tour D3** : `reserveTurnCommand` / `conversation_turn_commands` ; `clientTurnKey` idempotent.
3. **S05 pending métier** : `s05-pending-policy` + siblings durables ; hint client `unresolvedPendingClientTurnKey` non autoritatif.
4. **Réconciliation client** : `sessionStorage sfia.thread.pending:{projectId}` + `GET pilotage/commands/by-key/conv-auth:{ctk}` + retry POST mêmes clés.
5. **UI pending CP01** : bandeau hors `max-height` composer (`nora-composer-stack`) — Ensemble 04.
6. **Activité UI binaire** : `idle|preparing|error` ; bandeau « Nora prépare… » ; **pas** de fragments progressifs exposés.
7. **Streaming fournisseur** côté `nora-adapter` : drain/structuré ; **pas** de projection navigateur de tokens.
8. **Markdown sûr** : `SafeMarkdown` (escape + liens filtrés).
9. **Layout Ensemble 04** : grille Travail intro/rule/conversation/composer × aside ; rail 246 desktop ; strip mobile.
10. **Documents** : surface `document` séparée (`DocumentLibrary`/`DocumentInspector`) — **pas** de visionneuse dans Travail.
11. **Draft** : `useState` uniquement — **pas** de restauration après refresh.
12. **Tests** : E04/T13/T16/CP01-CP02, long-thread, S05 e2e/pg, turn-command pg — **ne prouvent pas** UX-002 scroll, choix typés, visionneuse 50/50, streaming UI.

---

## 4. Carte de responsabilités

| Fait | Propriétaire | Travail/Nora peut |
|------|--------------|-------------------|
| Tour / messages / qualification cognitive | D3 | présenter, transmettre tours |
| Documents / versions / connaissance | D4 | citer, ouvrir lecture sous droits |
| Actes humains / Exécuter | D6 | afficher états, jamais décider |
| Tentatives / effets techniques | D7 | afficher reprise, jamais rejouer |
| Verdicts preuves | D8 | libellés honnêtes |
| Accès / refs Git | D9 | consulter si autorisé |
| Traces | Observabilité | corréler ; **jamais** autoriser |

**Interdit :** second moteur pending, second registre documentaire, HTML/Markdown comme déclencheur d'effet, diffusion JSON qualification / chain-of-thought, visionneuse = éditeur (Ensemble 06).

---

## 5. Matrice d'impact CT-01 → CT-08

Légende classification : **CODE** = démontré ; **UX** = VALIDATED SPEC ; **TECH-CAND** = contrat technique candidat non adopté ; **GAP** ; **DEC** = arbitrage Morris requis.

### CT-01 — Fil / continuité (UX-002)

| Champ | Contenu |
|-------|---------|
| Résultat Pilote | Dernier message par défaut ; relecture volontaire protégée ; flèche « nouveau message » |
| Observé | Scroll interne `fig-nora-thread` ; pas d'ancrage « stick-to-bottom / preserve » ; refresh/nav → comportement **non démontré** conforme UX-002 (observation Morris RECETTE : retour au **premier** message) |
| API/données | Messages existants ; **pas** de besoin schema pour scroll |
| Extension | État UI local (nearBottom, unread signal) dans page/`NoraConversation` |
| Sécurité | Nulle hors isolation projet |
| Régression | Ensemble 04 géométrie ; long-thread |
| Alternatives | (A) pure UI scroll controller **recommandé** ; (B) persister offset lecture — **rejeté** par UX (pas d'offset intersession) |
| Décision | **Sans arbitrage structurant** si limité à UI |
| Preuves | UX002-A01..09 BROWSER sur SHA/build |

### CT-02 — Réponses composites / choix (UX-007)

| Champ | Contenu |
|-------|---------|
| Résultat | Forme adaptative ; choix = raccourci tour ; gel après transmission effective ; brouillon intact |
| Observé | `SafeMarkdown` texte ; **pas** d'actions typées ; pas de durée de vie choix |
| Extension | Projection versionnée (messageId/turnId/blocs/actions) — **TECH-CAND** ; rendu UI ; envoi choix → nouveau `clientTurnKey` |
| Risque double autorité | Parse Markdown → effet = **interdit** |
| Alternatives | (A) blocs structurés dans `resultJson`/contenu versionné D3 ; (B) UI-only heuristics sur markdown — **rejeté** (fragile/unsafe) |
| Décision | **DEC Morris** sur schéma de projection (sans migration précipitée) avant code Delivery |
| Preuves | UX-NORA-01..25 ; double-clic / ACK perdu |

### CT-03 — Compositeur / brouillon (UX-008)

| Champ | Contenu |
|-------|---------|
| Résultat | Auto-expand ; Entrée/Maj+Entrée ; brouillon local par Pilote+projet ; alignement bas Figma |
| Observé | `textarea` fixe ; draft `useState` ; composer max-height 160 Ensemble 04 ; pending stack |
| Extension | CSS/JS hauteur ; storage navigateur isolé ; anti-ACK tardif (`draftVersion`) |
| Alternatives storage | (1) `sessionStorage` simple ; (2) `localStorage` + purge logout/révocation ; (3) serveur — **hors besoin UX** |
| Décision | Mécanisme exact storage = **DEC Morris légère** (sécurité/purge) ; auto-expand UI sans DEC |
| Preuves | UX-COMP-01..13 ; IME ; refresh ; mobile |

### CT-04 — Activité / progressive (UX-009)

| Champ | Contenu |
|-------|---------|
| Gap majeur | Adapter streame côté serveur mais UI n'affiche que preparing ; fragments structurés drainés |
| Alternatives transport | (1) **Dégradation honnête** final-only + activité événementielle **recommandée en V1** ; (2) polling statut ; (3) SSE/stream HTTP — coût/reprise/sécurité plus élevés |
| Interdit | JSON qualification, %, temps estimé, pensée |
| Décision | **DEC Morris** si autre chose que dégradation V1 + événements déjà observables |
| Preuves | UX-ACT ; LIVE seulement si événements réels |

### CT-05 — Erreurs / reprise

| Champ | Contenu |
|-------|---------|
| Observé | Pending client + S05 + turn UNKNOWN + pilotage by-key — **réutiliser** |
| Extension | Cartographie UI des états (confirmé non envoyé / ACK perdu / partiel / UNKNOWN / session) sans second automate |
| Décision | Pas de nouveau moteur — **sans DEC** si strict reuse |
| Preuves | doubles clics, timeout, réauth |

### CT-06 — Visionneuse lecture seule (UX-010)

| Champ | Contenu |
|-------|---------|
| Observé | Docs sur surface séparée ; Travail = aside « En bref » |
| Extension | Mode normal / 50/50 / agrandi **dans** Travail ; une ressource ; lecture seule ; rail fixe |
| Frontière | **≠ Ensemble 06 éditeur** |
| Alternatives navigation | (A) état UI local + refs D4/D9 ; (B) query `viewer=` — deep-link vs simplicité |
| Décision | **DEC Morris** sur deep-link vs état local ; droits D4/D9 inchangés |
| Preuves | UX-VIEW-01..15 ; mobile 05.13/05.14 |

### CT-07 — Shell / responsive / alignement Figma 05

| Champ | Contenu |
|-------|---------|
| Observé | Grille E04 968/369 ; rail 246 ; compositeur bas |
| Figma 05 | Viewport **1680×970** ; rail **246** ; zone utile **1434×900** ; fil ~**972** ; En bref/visionneuse **367×832** @x=1030 ; composer compact **972×84** @y=773 ; bottoms **857=857** (alignement prouvé metadata) ; 50/50 fil+composer **668** + viewer **668** ; agrandi viewer **1359×832** ; mobile **430×932** |
| Extension | Modes layout ; ne pas casser E04 nominal |
| Décision | Calage F2 au Delivery — pas d'ADR |

### CT-08 — Sécurité / a11y / perf / obs

| Champ | Contenu |
|-------|---------|
| Observé | SafeMarkdown ; isolation lane ; obs D3 events |
| Extension | focus trap visionneuse ; ARIA activité sobre ; mesurer fil 300+ avant virtualisation |
| Décision | Virtualisation seulement si mesure — **STOP** si nouvelle persistance cache messages |

**Blast radius global Delivery (prévisionnel) :** `page.tsx`, `NoraConversation.tsx`, `tokens.css`, éventuellement petit module scroll/viewer, tests e2e/unit ; **éviter** schema sauf DEC projection ; **pas** `command-runner` rewrite.

---

## 6. Contrat visuel Figma (page 05)

**Fichier** `itgvCulInEnFY6DvgIegvP` — page `700:38` « 05 · ML4D — Travail avec Nora · Contrat UX v0.7 ».
Session Figma : `4672d9d3-1d67-44ea-824c-b32bed36dd10`.
**16 variantes** natives extraites (metadata) :

| Node | Nom | Taille |
|------|-----|--------|
| 700:39 | 05.01 Conversation nominale | 1680×970 |
| 701:62 | 05.02 Fil long et relecture | 1680×970 |
| 701:105 | 05.03 Réponse composite et choix | 1680×970 |
| 701:148 | 05.04 Choix expirés, brouillon conservé | 1680×970 |
| 701:191 | 05.05 Compositeur multi-lignes | 1680×970 |
| 701:234 | 05.06 Activité contextualisée | 1680×970 |
| 701:277 | 05.07 Réponse interrompue / erreur | 1680×970 |
| 701:320 | 05.08 Envoi incertain / réconciliation | 1680×970 |
| 701:363 | 05.09 Visionneuse document 50/50 | 1680×970 |
| 701:406 | 05.10 Visionneuse Git 50/50 | 1680×970 |
| 701:449 | 05.11 Visionneuse en grand | 1680×970 |
| 701:492 | 05.12 Source indisponible | 1680×970 |
| 701:535 | 05.13 Mobile conversation | 430×932 |
| 701:537 | 05.14 Mobile visionneuse | 430×932 |
| 708:98 | 05.15 Activité terminée / historique | 1680×970 |
| 708:199 | 05.16 Échec d'envoi confirmé | 1680×970 |

**Mesures clés (700:39 / contenu `700:80`) :**
- Rail projet nommé « 246 px » : 246×970
- Fil conversation : 972×574 @ (38,174)
- Compositeur compact : 972×84 @ (38,773) → bottom **857**
- Panneau En bref : 367×832 @ (1030,25) → bottom **857**
- **Alignement inférieur compositeur ↔ panneau droit : CONFIRMÉ** (metadata)
- Multi-lignes (701:191) : composer 972×198 @ y=659 → bottom 857
- 50/50 (701:363) : composer/fil colonne 668 ; visionneuse 668×832 @ x=729 ; bottoms alignés 857
- Agrandi (701:449) : visionneuse 1359×832 @ (38,25)

**Limites extraction :** typographies/couleurs tokens non exhaustivement dumpés (metadata structurelle + screenshots 700:39 / 701:363 obtenus). **Aucune conformité runtime déclarée** (cycle read-only).

**Aucune modification Figma.**

---

## 7. Fake / Real Qualification (frontières)

| Frontière | Fixtures actuelles | Niveau ce cycle | Futur |
|-----------|--------------------|-----------------|-------|
| Nora provider | fixture FAKE / `STUDIO_FORCE_NORA_FIXTURE` | analyse | LIVE sous gate |
| D4 documents | PG + UI document surface | analyse | lecture réelle visionneuse |
| D9 Git | intégrations existantes | analyse | source autorisée REAL |
| D7 effets | S05 / pilotage tests | analyse | UNKNOWN réel |
| Streaming UI | **absent** | — | seulement si transport arbitrée |

**Interdit :** `DETERMINISTIC PROVEN ⇒ READY FOR REAL`.

---

## 8. Contrat de réalisation intégré proposé (pour futur Delivery)

### 8.1 Résultat end-to-end
Un Pilote dans un projet existant lit/écrit dans **un fil unique** conforme UX-002..010 : réponses adaptatives, choix sûrs, brouillon préservé, activité honnête, reprise sans doublon, visionneuse lecture seule 50/50/agrandi, shell E04 non régressé, Figma 05 calé.

### 8.2 Interfaces communes (à stabiliser avant/au début du code)
1. **TurnProjection vN (candidat)** : `messageId`, `turnId`/`clientTurnKey`, `finalization`, blocs sûrs, refs ressource, `actions[]` typées liées au message Nora.
2. **ActivityEvent vN (candidat, optionnel V1)** : `generationId`, sequence, state, provenance — **sans** secrets/qualification brute.
3. **ViewerRef** : `kind=document|git`, id/version, rights snapshot time-of-access.
4. **DraftKey** : `pilotId+projectId` (+lane) isolé navigateur.
5. Réuse : `clientTurnKey`, `conv-auth:` , S05, turn-command statuses.

### 8.3 Composants touchés (chemins)
- `web/src/app/projects/[projectId]/page.tsx` — scroll policy, draft persistence, viewer state, choice send
- `web/src/components/figma/NoraConversation.tsx` — render blocs/actions, composer expand, activity, jump control
- `web/src/components/figma/tokens.css` — modes 50/50 / agrandi ; composer grow
- Nouveau module UI local possible : `travail-scroll.ts` / `travail-viewer-panel.tsx` (lecture seule)
- **Ne pas** forker `command-runner` / S05 ; **ne pas** éditer dans viewer

### 8.4 Choix faisables sans arbitrage structurant
- Contrôleur scroll UX-002
- Composer auto-expand + clavier
- UI états erreur s'appuyant sur pending existant
- Layout CSS 50/50/agrandi **si** données document déjà accessibles en lecture
- Dégradation activité : preparing → réponse finale

### 8.5 Choix nécessitant Morris avant code
1. **Schéma de projection** réponses/actions (persisté où ? resultJson vs table vs dérivé markdown sûr ?)
2. **Transport progressive** au-delà de final-only (SSE/poll/autre)
3. **Support brouillon** (session vs local + politique purge/révocation)
4. **Deep-link visionneuse** vs état UI éphémère
5. Toute **migration** / nouvelle table / nouvel endpoint public

### 8.6 Ordre interne macro-lot
1. Pre-check Git + freeze SHA Delivery
2. Stabiliser projection minimale (même si V1 texte+actions simples)
3. Fil+composer+choix
4. Activité/reprise branchée sur existant
5. Visionneuse
6. Matrice 88 oracles **groupés** (10 oracles discriminants du contrat tech §12) + non-régression E04/ML4C
7. F2 Figma↔runtime
8. Pack + réception Morris

### 8.7 Stratégie 88 oracles
Ne pas créer 88 cycles. Packager en suites : UX002 / NORA / COMP / ACT / VIEW / CROSS + 10 oracles discriminants intégrés. Niveaux Unit → PG → BROWSER → LIVE ciblé.

### 8.8 Non-régression
Ensemble 04 (cartes, gap 25, pending CP01, mobile strip), ML4C S05/idempotence, Sas, shell rail, Document surface inchangée comme éditeur.

### 8.9 Intégrateur
Un Delivery unique « Travail avec Nora » ; sous-travaux parallélisables UI scroll/composer vs viewer **après** interfaces figées ; STOP si DEC non tranchée.

### 8.10 Dette / exit
Dette acceptable V1 : pas de streaming tokens si final-only documenté ; pas de virtualisation tant que perf OK. Exit : DEC Morris ou mesure perf.

### 8.11 Critère d'acceptation final (futur)
SHA/build RECETTE ; oracles discriminants PASS aux niveaux requis ; F2≤2px rectangles stables ; aucune double autorité ; Ensemble 06 non empiété ; Gate C toujours ouvert jusqu'à décision Morris séparée.

---

## 9. Options / réserves pour Morris

| ID | Question | Recommandation Cursor | Impact si non tranché |
|----|----------|----------------------|------------------------|
| M1 | Projection structurée choix/blocs | Adopter contrat projection versionné D3 **sans** nouvelle table au premier jet si `resultJson`/payload existant suffit | Delivery CT-02 bloqué ou contournement unsafe |
| M2 | Progressive UI | **V1 final-only + activity honest** ; reporter SSE | OK pour démarrer CT-01/03/05/06 partiel |
| M3 | Draft storage | `localStorage` namespaced + purge logout/project revoke **ou** session-only si Morris accepte perte onglet | CT-03 partiel |
| M4 | Viewer routing | État UI local d'abord ; deep-link phase 2 | CT-06 possible |
| M5 | Confirmer non-migration | Aucune migration Ensemble 05 V1 | Si besoin schema → nouveau cycle |

---

## 10. Produit inchangé

- Aucun fichier sous `projects/sfia-studio-next/**` créé ou modifié dans ce cycle.
- Seul `.tmp-sfia-review/chatgpt-review.md` + handoff `sfia/review-handoff`.

---

## 11. Review Handoff

- Branche : `sfia/review-handoff`
- Fichier : `sfia-review-handoff/latest-chatgpt-review.md`
- Publisher : `scripts/sfia/publish-review-handoff.sh`
- (commit/blob après publication)

---

## 12. Verdict

**TECHNICAL QUALIFICATION READY WITH RESERVES**

La préparation Delivery est **faisable** sur la base code `984d77a3` + UX VALIDATED + Figma 05 mesuré, **à condition** que Morris tranche au minimum M1/M2 (et M3 si brouillon post-refresh est dans le premier GO Delivery). Le contrat technique candidat v0.1 reste **non adopté** comme architecture ; il sert de brief.

**Prochaine décision Morris :** revue de ce pack → arbitrages M1–M5 → **GO Delivery distinct** (implémentation). Ce cycle **n'autorise pas** l'exécution.
