# SFIA Studio — Review Pack FULL — Cycle 4 UX/UI

**Date/heure :** 2026-07-18 22:49:10 CEST
**Niveau :** FULL
**Cycle :** 4 — UX/UI
**Profil SFIA :** Critical
**Typologie :** DOC / UX — conception UX/UI fonctionnelle et visuelle
**Verdict :** `SFIA STUDIO UX/UI DOCUMENTARY CONTRACT READY — VISUAL VALIDATION PENDING`

---

## 1. Identité Git

| Champ | Valeur |
|---|---|
| Repository local | `/Users/morris/Projects/sfia-workspace` |
| Repository distant | `mcleland147/sfia-workspace` |
| Branche locale | `project/sfia-studio-functional-architecture` |
| HEAD local | `4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3` |
| origin/main | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
| Branche architecture | Conservée @ `4f4e7cf…` |
| Branche UX proposée | `project/sfia-studio-ux-ui` — **non créée** |
| PR #214 | **MERGED** — merge `5f1eb908…` |
| Staged | **Aucun** |

---

## 2. Décision Morris AF-CAND-11B

Morris **valide AF-CAND-11B** et sélectionne le cycle **UX/UI** comme prochain cycle SFIA Studio.

Conséquences :
- lance le cycle UX/UI ;
- applique la trajectoire AF-CAND-11A ;
- **ne** lance pas architecture technique / backlog / POC / MVP / code ;
- **ne** prononce pas automatiquement la clôture formelle architecture ;
- **n’autorise** aucun commit/push/PR/merge/suppression de branche projet ;
- **n’autorise** aucune modification Figma distante sans GO explicite.

---

## 3. Justification Critical

Plateforme métier ; gates/preuves/responsabilités visibles ; Git = vérité ; Studio ≠ orchestrateur ; anti-GO-implicite ; écrans structurants avant tech ; a11y/sécurité/RGPD/perf dès le contrat ; aucun verdict UX fort sans Figma/runtime.

---

## 4. Sources

**Méthode (main) :** template exécution ; routing guide ; operating model ; guardrails (si présent).

**Projet :** README, `01`, `04`–`13`.

**Handoff précédent :** `51036f0e991caa1aa7bbe54a9b58741cd644546c`.

---

## 5. Figma

| Élément | État |
|---|---|
| MCP Figma | **Disponible** (authentifié — plan Pro) |
| Fichier cible | **Absent** / non identifié |
| Actions Figma distantes | **Aucune** |
| Cas §6.6 | **Figma à produire** |
| Preuve visuelle | **Pending** |

---

## 6. Rôles et besoins

Morris (L0) ; ChatGPT (qualification/verdict proposé) ; Cursor (exécution bornée) ; lecteur ; orchestrateur candidat **séparé non décisionnaire**.

Tâches critiques : projet → Git truth → cycle → décisions → prompt → exécution → preuves → GO/STOP/clôture → reprise → divergence.

---

## 7. Architecture de l’information

Espaces : portefeuille ; projet ; Git ; cycle ; trajectoire ; décisions/gates ; exécutions ; review/preuves ; historique ; paramètres (P2).

Chaque espace documenté dans `14` (objectif, données, source, actions, interdits, rôles, vides/erreurs/divergence/stop).

---

## 8. Parcours prioritaires

P-01…P-10 dans `15` (ouvrir projet ; sélectionner cycle ; prompt ; rapport ; diff/pack ; GO commit/push/PR ; STOP ; clôture ; reprise ; divergence).

---

## 9. Inventaire écrans

P0 candidats : UX-S01…S10 (portefeuille, dashboard, cycle, Git truth, décisions, prompt, exécution, review, modal décision, audit).

P1 : S12–S15. P2 : S11. **Non baseline** sans GO.

---

## 10. Contrat visuel

Grille 12 col ; shell Top bar + nav + main + inspector ; Git Truth Strip ; Gate Card 4 champs ; sémantique couleur non masquante ; WCAG 2.2 AA cible.

---

## 11. Dimensions retenues

| Frame | Dimensions |
|---|---|
| Primary desktop | **1440 × 1024** |
| Validation desktop | **1280 × 832** |

Confirmées dans le contrat documentaire ; à produire en Figma sous GO.

---

## 12. Options UX

| Option | Nature | Statut |
|---|---|---|
| UX-A | Cockpit dense gouvernance | Candidate |
| UX-B | Parcours guidé cycle | Candidate |
| UX-H | Hybride (shell A + mode B) | Candidate **recommandée documentairement** — **NON SÉLECTIONNÉE** |

---

## 13. Recommandation

UX-H pour prototypage Figma futur ; POC = shell Git Truth + gates + parcours GO P-06. **≠ décision.**

---

## 14. Accessibilité / sécurité / RGPD / performance

WCAG 2.2 AA cible ; clavier/focus/contraste ; pas de secrets UI ; minimisation PII ; refresh Git explicite ; journal GO/STOP reconstructible.

---

## 15. Gouvernance Git et gates

Git seule vérité ; local≠remote visibles ; commit/push/PR/merge/delete séparés ; GO explicite ; draft/ready/merged/closed/clôturé distincts ; clôture architecture **NON PRONONCÉE**.

---

## 16. Fichiers créés

- `projects/sfia-studio/14-ux-ui-contract.md`
- `projects/sfia-studio/15-ux-ui-flows-and-screens.md`
- `projects/sfia-studio/16-ux-ui-decision-pack.md`

## 17. Fichiers modifiés

- `README.md`, `07` (cycle UX + AF-CAND-11B)
- `11`, `13` (corrections factuelles AF-CAND-11B)
- `12` (uniquement sync post-#214 antérieure — base SHA ; pas de promo option UX)

## 18. Fichiers protégés

`01`–`06`, `08`–`10` : **sans modification de fond** (diff `08`–`10` vide).

---

## 19. Diff stat (studio)

```
 .../07-product-trajectory-and-decision-pack.md     | 77 ++++++++++++---------
 projects/sfia-studio/11-functional-architecture.md | 14 ++--
 ...functional-architecture-flows-and-boundaries.md |  6 +-
 .../13-functional-architecture-decision-pack.md    | 29 ++++----
 projects/sfia-studio/README.md                     | 80 ++++++++++++++--------
 5 files changed, 122 insertions(+), 84 deletions(-)

```

## 20. Diff check

`git diff --check` : **propre**.

## 21. Staged / commit / push / PR projet

Tous **aucun**.

## 22. Working tree

```
 M projects/campus360/README.md (OOS)
 M projects/sfia-studio/07, 11, 12, 13, README
?? projects/sfia-studio/14, 15, 16
?? .sfia/ .tmp-sfia-review/ campus360 docs sfia-review-handoff/ (OOS)
```

Campus360 / `.sfia` / `.tmp` / handoff worktree = **hors périmètre**.

---

## 23. Risques

1. Promouvoir UX-H sans GO.
2. Traiter MCP Figma comme validation visuelle.
3. Confondre lancement UX avec clôture architecture.
4. Staging OOS (Campus360).
5. Créer branche UX sans GO.

## 24. Réserves

- Validation visuelle pending.
- Branche UX non créée.
- Sync post-#214 encore locale non versionnée.
- Option UX non sélectionnée.

## 25. Décisions Morris attendues

1. Option UX A / B / H.
2. Frames 1440×1024 / 1280×832.
3. Branche `project/sfia-studio-ux-ui`.
4. Fichier Figma + frames P0.
5. Inventaire P0 S01–S10.
6. Clôture formelle architecture (distincte).
7. Versionnement docs UX (+ sync #214).

---

## 26. Contenu complet — `14-ux-ui-contract.md`

```markdown
# SFIA Studio — Contrat UX/UI

| Métadonnée | Valeur |
|------------|--------|
| **Projet** | SFIA Studio — projet officiel (G1) |
| **Document** | `14-ux-ui-contract.md` |
| **Cycle** | 4 — UX/UI |
| **Profil** | Critical |
| **Typologie** | DOC / UX — conception UX/UI fonctionnelle et visuelle |
| **Baseline méthode** | SFIA v2.6 (**Option C méthode** — D-VAL-6) |
| **Base Git** | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
| **Branche UX proposée** | `project/sfia-studio-ux-ui` — **non créée** (GO Morris distinct requis) |
| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée** @ `4f4e7cf…`) |
| **Statut** | `ux-ui-contract-in-progress` — contrat documentaire **préparé** ; validation visuelle Figma **pending** |
| **Autorité** | Morris (L0) |
| **AF-CAND-11A** | **VALIDÉE** — trajectoire recommandée UX/UI → tech → POC → MVP |
| **AF-CAND-11B** | **VALIDÉE** — Morris — prochain cycle = **UX/UI** |
| **AF-Option C** | **VALIDÉE** — Studio ≠ orchestrateur candidat |
| **Figma** | MCP **disponible** ; fichier cible **absent** ; **aucune** modification distante |
| **D-VAL-12 / D-VAL-13** | **Aucune** |

> **Question UX centrale :** Comment permettre à Morris de piloter simplement un cycle SFIA, comprendre l’état réel du repository, examiner les preuves, prendre une décision explicite et déléguer une exécution bornée, **sans** créer une seconde vérité ni un GO implicite ?

> Ce document est un **contrat UX/UI documentaire**. Il ne constitue **pas** une validation visuelle forte. Aucun verdict READY visuel sans preuve Figma validée ou capture runtime ultérieure.

---

## 1. Périmètre et hors périmètre

| Couvre | Ne couvre pas |
|--------|---------------|
| Rôles, besoins, IA, parcours, écrans candidats | Code, composants techniques, stack |
| Contrat visuel documentaire (grille, états, sémantique) | Fichier Figma distant (sans GO) |
| Accessibilité WCAG 2.2 AA **cible** | Implémentation runtime |
| Gates, confirmations, anti-GO-implicite | Architecture technique / API / BDD |
| Options UX-A / UX-B / hybride **candidates** | Sélection définitive d’option (GO Morris) |
| Plan Figma proposé | Création / édition Figma distante |
| Séparation Studio / orchestrateur / Cursor | POC, MVP, DevOps, L5 |

---

## 2. Décisions consommées (non modifiées dans le fond)

| Décision | État |
|----------|------|
| AF-Option C | VALIDÉE — Studio = surface humaine ; orchestrateur déterministe **candidat** séparé |
| Cursor | Exécuteur contrôlé |
| Git | Seule vérité durable |
| Registre des décisions | Ancré dans Git |
| États transitoires | Uniquement s’ils sont reconstructibles |
| GO | Explicite, borné, révocable, traçable |
| Journal ≠ preuve Git ≠ verdict ≠ décision | Invariant UX |
| Automatisation | L0 arbitrage humain ; L3–L4 exécution bornée ; **aucun L5 global** |
| AF-CAND-11A | VALIDÉE — recommandation trajectoire |
| AF-CAND-11B | **VALIDÉE** — cycle UX/UI sélectionné |
| Clôture formelle architecture | **NON PRONONCÉE** (décision distincte) |
| D-VAL-12 | Aucune |

---

## 3. Phase 1 — Découverte UX

### 3.1 Utilisateurs et rôles

| Rôle | Nature | Responsabilité UX | Interdit UX |
|------|--------|-------------------|-------------|
| **Morris / décideur** | Humain L0 | Voir vérité Git ; gates ; GO/STOP/READY/clôture ; sélection cycle | Être contourné ; recevoir un GO implicite |
| **ChatGPT** | Système | Qualification, préparation, verdict **proposé** | Décider ; exécuter Git ; afficher candidat comme validé |
| **Cursor** | Système | Exécution locale bornée sous contrat | Élargir scope ; arbitrer ; push sans GO |
| **Lecteur / reviewer** | Humain éventuel | Lire états, preuves, packs (read-only) | Prononcer GO / merge / clôture |
| **Orchestrateur candidat** | Système séparé | Appliquer permissions / stop (futur) | Apparaître comme décideur ; fusionner avec Studio |

### 3.2 Tâches critiques

1. Sélectionner un projet.
2. Consulter l’état Git **réel** (local vs distant distingués).
3. Identifier le cycle actif et son profil.
4. Comprendre décisions **validées** / **candidates** / **ouvertes**.
5. Lancer un cycle **autorisé**.
6. Consulter / préparer un prompt Cursor.
7. Suivre l’exécution (événements, stop).
8. Examiner diff, tests, review pack, handoff.
9. Prononcer GO, STOP, READY, clôture ou sélection du prochain cycle.
10. Reprendre un cycle interrompu depuis Git.

### 3.3 Risques UX

| ID | Risque | Mitigation contrat |
|----|--------|--------------------|
| UX-R01 | GO implicite | Boutons d’action distante toujours derrière modal GO borné |
| UX-R02 | Recommandation = décision | Badges distincts `recommandé` / `candidat` / `validé` / `ouvert` |
| UX-R03 | Local = distant | Bandes `Working tree` vs `origin/*` toujours visibles |
| UX-R04 | Draft / ready / merged / closed / clôturé confondus | États mutuellement exclusifs + légende |
| UX-R05 | Surcharge | Densité réglable ; progressive disclosure |
| UX-R06 | Actions destructrices accessibles | Séparation push / PR / merge / delete ; confirmations renforcées |
| UX-R07 | État non reconstructible | Toute donnée critique affiche source + SHA / path |
| UX-R08 | Mélange Studio / orchestrateur / Cursor | Zones et labels système distincts ; jamais un seul « agent » |

---

## 4. Phase 2 — Architecture de l’information

Navigation minimale (espaces) :

| Espace | Objectif | Données | Source canonique | Actions possibles | Actions interdites | Rôle | Vide | Erreur | Divergence Git | Stop |
|--------|----------|---------|------------------|-------------------|--------------------|------|-------|--------|----------------|------|
| Accueil / portefeuille | Choisir un projet | Liste projets, statut macro | Git `projects/*` + registre | Ouvrir projet | Décider pour un projet sans ouverture | Morris / lecteur | Aucun projet | Repo inaccessible | Afficher bandeau | Stop si repo non vérifié |
| Espace projet | Comprendre état projet | Docs, cycle, trajectoire | README + `07` + Git | Naviguer IA | GO distant | Morris | Docs manquants | Lecture échouée | Bandeau local≠main | Stop si base divergente |
| État Git | Vérité repository | branche, HEAD, status, ahead/behind, staged | `git` live | Refresh, copier SHA | Commit/push sans GO | Morris | Clean | Commande Git fail | Highlight local/remote | Stop actions distantes |
| Cycle actif | Pilotage cycle | type, profil, périmètre, statut | Contrat + docs + Git | Préparer prompt, suivre | Auto-lancer Cursor | Morris | Pas de cycle | Qualification invalide | Re-check requis | Stop si contrat incomplet |
| Trajectoire | Voir chemin produit | étapes, validés, ouverts | `07` + AF/FD/D-VAL | Sélection **candidate** prochain | Sélection silencieuse | Morris | — | — | — | — |
| Décisions / gates | Arbitrer | validées / candidates / ouvertes ; autorité/portée/durée/révocabilité | Packs + Git | Ouvrir modal décision | Afficher candidat comme validé | Morris | Aucune ouverte | Pack illisible | — | Stop si autorité absente |
| Exécutions Cursor | Suivre run | état, logs structurants, stop | Journal + artefacts locaux | Stop, ouvrir rapport | Push depuis suivi | Morris | Aucune run | Cursor offline | — | Stop run |
| Review / preuves | Examiner | diff, pack, handoff SHA | Fichiers + Git refs | Ouvrir handoff, comparer | READY sans preuve | Morris / GPT | Pack absent | Pack incomplet | — | Pas de READY |
| Historique / audit | Reconstruire | commits, merges, décisions | Git | Filtrer, ouvrir commit | Réécrire histoire | Morris / lecteur | — | — | — | — |
| Paramètres / intégrations | Configurer surface | préférences UI, liens candidats | Local reconstructible + Git | Éditer préférences UI | Contourner gates ; stocker vérité hors Git | Morris | — | Intégration fail | — | — |

---

## 5. Contrat visuel (documentaire)

### 5.1 Frames et dimensions **retenues** (à challenger en Figma)

| Frame | Dimensions | Usage |
|-------|------------|-------|
| **Primary desktop** | **1440 × 1024** | Écrans métier principaux (P0) |
| **Validation desktop** | **1280 × 832** | Viewport complémentaire / régression densité |

**Confirmation explicite :** ces deux frames sont **retenues pour le contrat documentaire** et proposées comme frames Figma P0. Mobile / tablette = **hors POC UX initial** (responsive desktop prioritaire).

### 5.2 Grille et hiérarchie

- Grille 12 colonnes ; gouttière 16 px ; marges 24 px (1440) / 16 px (1280).
- Zones fixes : **Top bar** (projet + Git truth strip) ; **Nav latérale** (espaces) ; **Main** ; **Inspector droit** (source, SHA, gates).
- Hiérarchie : 1) vérité Git et statut cycle ; 2) contenu métier ; 3) actions secondaires ; 4) décoratif **interdit** s’il masque un statut.

### 5.3 Densité et navigation

- Densité par défaut **comfortable** ; mode **compact** pour experts (Option A).
- Navigation : latérale persistante + fil d’Ariane `Projet / Cycle / Écran`.
- Progressive disclosure pour diffs et packs longs.

### 5.4 Typographie fonctionnelle

| Rôle | Usage |
|------|-------|
| Display / H1 | Nom projet / écran — jamais plus fort que le statut Git critique |
| H2 / H3 | Sections parcours, gates, preuves |
| Body | Contenu métier |
| Mono | SHA, chemins, commandes, diffs |
| Label | Badges d’état (`draft`, `ready`, `merged`, `closed`, `clôturé`, `candidat`, `validé`, `ouvert`) |

### 5.5 Composants structurants (candidats UI, non techniques)

- Git Truth Strip (branche, HEAD court, ahead/behind, staged count, refresh).
- Status Badge (palette sémantique — §5.6).
- Gate Card (autorité, portée, durée, révocabilité, action).
- Decision Modal (GO / NO-GO / amendement / STOP).
- Evidence Panel (fichiers, SHA handoff, complétude pack).
- Run Timeline (événements structurants uniquement).
- Source Chip (toujours visible sur donnée critique).
- Confirm Destructive (double confirmation pour merge / delete branch).

### 5.6 Couleur sémantique (contrat, pas esthétique marketing)

| Sémantique | Usage | Règle |
|------------|-------|-------|
| Neutre information | Observation Git / docs | Pas d’action |
| Accent primaire | Navigation, focus | Ne signifie pas « validé » |
| Succès | `merged` / `validé` / check OK | Uniquement après fait vérifié |
| Attention | Divergence, draft, candidat | Exige lecture |
| Danger | STOP, merge, delete, push | Toujours confirmation |
| Info | Recommandation GPT | Jamais confondu avec décision |

**Règle dure :** aucune couleur ou esthétique ne masque le statut Git réel ni la nécessité d’un GO humain.

### 5.7 Représentation des gates et divergences

- Gate = carte avec 4 champs obligatoires : **autorité**, **portée**, **durée**, **révocabilité**.
- Divergence = bandeau non dismissible tant que non levée ; actions distantes **désactivées**.
- Local ≠ remote = double colonne ou double chip toujours visibles.

### 5.8 Confirmations et erreurs

- Actions distantes : modal GO avec portée textuelle + SHA + fichiers.
- Irreversibles (merge, delete branch) : confirmation renforcée (saisie du nom / SHA court).
- Erreurs : message, cause, action de reprise, lien vers Git truth.

### 5.9 Accessibilité (cible WCAG 2.2 AA)

| Exigence | Contrat |
|----------|---------|
| Clavier | Toutes actions P0 accessibles ; ordre de focus logique |
| Focus | Anneau visible 3:1 minimum ; jamais `outline: none` sans remplacement |
| Contraste | Texte/UI ≥ AA ; badges sémantiques non seuls porteurs de sens (icône + texte) |
| Screen reader | Labels sur SHA, badges, gates ; live regions pour STOP / divergence |
| Motion | Pas d’animation obligatoire pour comprendre un statut |
| Dark patterns | Interdits (pas de double-négation, pas d’auto-GO, pas de pré-cochage push) |

### 5.10 Responsive

- Desktop prioritaire (1440 / 1280).
- < 1280 : nav collapsible ; inspector en tiroir.
- Mobile : **non P0** pour le POC UX.

---

## 6. Plan Figma (proposition — aucune action distante)

| Étape | Action proposée | Statut actuel |
|-------|-----------------|---------------|
| F0 | Constater MCP Figma disponible (compte authentifié) | **Fait** |
| F1 | Identifier / créer fichier cible SFIA Studio UX | **Absent** — GO Morris requis |
| F2 | Créer page « P0 Screens » + frames 1440×1024 et 1280×832 | Non réalisé |
| F3 | Composants : Git Truth Strip, Gate Card, Decision Modal, Status Badge | Non réalisé |
| F4 | Maquettes UX-A / UX-B (ou hybride retenu) pour écrans P0 | Non réalisé |
| F5 | Validation Morris des frames | Pending |
| F6 | Comparaison Figma ↔ runtime (delivery ultérieure) | Hors cycle |

**Distinction obligatoire :**

| Niveau | Signification |
|--------|---------------|
| Proposition documentaire | Ce document (`14`–`16`) |
| Modification Figma | Écriture distante — **interdit** sans GO |
| Validation visuelle | GO Morris sur frames Figma |
| Comparaison Figma/runtime | Delivery / gap review — hors cycle |

**Cas template §6.6 :** *Figma à produire* — cycle design d’abord ; pas d’implémentation pixel-perfect ; **pas** de verdict visuel fort.

---

## 7. Garde-fous UX obligatoires (checklist)

- [ ] Aucune action distante sans confirmation explicite
- [ ] Aucune décision candidate affichée comme validée
- [ ] Aucun statut local présenté comme vérité Git distante
- [ ] Chaque donnée critique affiche sa source
- [ ] Chaque gate affiche autorité / portée / durée / révocabilité
- [ ] Push, PR, merge, suppression séparés
- [ ] Aucune action destructive groupée
- [ ] Confirmation renforcée pour irréversibles
- [ ] États draft / ready / merged / closed / clôturé distincts
- [ ] Historique visible et reconstructible
- [ ] WCAG 2.2 AA cible
- [ ] Aucun dark pattern
- [ ] Aucun automatisme d’arbitrage

---

## 8. Accessibilité, sécurité, RGPD, performance (contrat)

| Domaine | Exigence UX |
|---------|-------------|
| Accessibilité | WCAG 2.2 AA cible ; clavier ; focus ; contraste ; labels |
| Sécurité | Pas d’affichage de secrets ; actions distantes gated ; audit des GO |
| RGPD | Minimisation données personnelles UI ; pas de PII hors besoin ; consentements hors scope technique |
| Performance perçue | Refresh Git explicite ; skeletons ; pas de faux « temps réel » masquant un état périmé |
| Observabilité | Journal des interactions structurantes (GO, STOP, divergence) reconstructible |

---

## 9. Liens

- Parcours et écrans : [`15-ux-ui-flows-and-screens.md`](./15-ux-ui-flows-and-screens.md)
- Decision pack UX : [`16-ux-ui-decision-pack.md`](./16-ux-ui-decision-pack.md)
- Architecture : [`11`](./11-functional-architecture.md)–[`13`](./13-functional-architecture-decision-pack.md)
- Conception : [`08`](./08-functional-design.md)–[`10`](./10-functional-decision-pack.md)

---

*SFIA Studio — cycle 4 UX/UI — contrat documentaire — Figma pending — AF-CAND-11B VALIDÉE — clôture architecture NON PRONONCÉE — Option C méthode préservée — Morris décide.*

```

---

## 27. Contenu complet — `15-ux-ui-flows-and-screens.md`

```markdown
# SFIA Studio — Parcours UX/UI, écrans et matrices

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `15-ux-ui-flows-and-screens.md` |
| **Cycle** | 4 — UX/UI |
| **Profil** | Critical |
| **Base Git** | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
| **Statut** | `ux-ui-contract-in-progress` |
| **Companion** | [`14-ux-ui-contract.md`](./14-ux-ui-contract.md) · [`16-ux-ui-decision-pack.md`](./16-ux-ui-decision-pack.md) |
| **Figma** | Aucune frame distante — inventaire documentaire |

> Inventaire **borné** et parcours **vérifiables**. Aucune option UX n’est sélectionnée ici. Priorités P0/P1/P2 = candidats à challenger, pas baseline figée.

---

## 1. Matrice de navigation (espaces → écrans)

| Espace | Écrans associés | Priorité |
|--------|-----------------|----------|
| Accueil / portefeuille | UX-S01 | P0 |
| Espace projet | UX-S02 | P0 |
| État Git | UX-S04 | P0 |
| Cycle actif | UX-S03 | P0 |
| Trajectoire | UX-S02 (section) / UX-S05 | P1 |
| Décisions / gates | UX-S05 · UX-S09 | P0 |
| Exécutions Cursor | UX-S06 · UX-S07 | P0 |
| Review / preuves | UX-S08 | P0 |
| Historique / audit | UX-S10 | P0 |
| Paramètres | UX-S11 | P2 |

---

## 2. Phase 3 — Parcours prioritaires (10)

### P-01 — Ouvrir un projet et comprendre son état

| Champ | Contenu |
|-------|---------|
| Préconditions | Repo accessible ; projet listé sous `projects/` |
| Déclencheur | Clic projet dans UX-S01 |
| Étapes | Ouvrir → charger README/`07` → afficher Git Truth Strip → montrer cycle / trajectoire / décisions ouvertes |
| Décisions humaines | Aucune obligatoire |
| Données lues | README, `07`, `git status`, `origin/main` |
| Données écrites | Aucune (ou préférence UI locale reconstructible) |
| Confirmation | Non |
| Erreurs | Projet absent ; Git fail |
| Stop | Base divergente non affichable |
| Résultat Git | Aucun changement ; observation vérifiable |

### P-02 — Sélectionner le prochain cycle

| Champ | Contenu |
|-------|---------|
| Préconditions | AF-CAND-11B ouverte **ou** cycle suivant à choisir ; Morris connecté |
| Déclencheur | Action « Sélectionner prochain cycle » |
| Étapes | Afficher candidats / recommandation 11A → distinguer recommandation vs décision → modal GO → enregistrer intention → ancrage Git ultérieur sous GO versionnement |
| Décisions humaines | Sélection cycle (GO) |
| Données lues | `07`, `13`, trajectoire |
| Données écrites | Décision candidate locale puis Git sous GO |
| Confirmation | Oui — modal GO borné |
| Erreurs | Cycle incompatible ; sources manquantes |
| Stop | Tentative de lancer tech/POC sans GO |
| Résultat Git | Décision tracée après GO commit/docs |

> **État actuel Studio :** AF-CAND-11B **déjà VALIDÉE** (UX/UI). Ce parcours reste générique pour les prochaines sélections.

### P-03 — Préparer un prompt Cursor

| Champ | Contenu |
|-------|---------|
| Préconditions | Cycle actif ; sources canoniques |
| Déclencheur | « Préparer contrat Cursor » |
| Étapes | Repo-informed pre-check → charger template → assembler périmètre → preview contrat → copier / exporter |
| Décisions humaines | Valider périmètre avant envoi à Cursor |
| Données lues | Template main, routing, docs projet, HEAD |
| Données écrites | Artefact local contrat (non vérité) |
| Confirmation | Oui si périmètre sensible |
| Erreurs | Template inaccessible ; HEAD divergente |
| Stop | Pre-check échoué |
| Résultat Git | Aucun sauf versionnement ultérieur autorisé |

### P-04 — Examiner un rapport Cursor

| Champ | Contenu |
|-------|---------|
| Préconditions | Run terminée ou stoppée ; rapport présent |
| Déclencheur | Ouvrir run / rapport |
| Étapes | Timeline → résumé → écarts → liens preuves |
| Décisions humaines | Continuer / STOP / demander amendement |
| Données lues | Rapport local, journal |
| Données écrites | Aucune |
| Confirmation | Non |
| Erreurs | Rapport incomplet |
| Stop | Rapport manquant pour READY |
| Résultat Git | Observation |

### P-05 — Examiner un diff et un review pack

| Champ | Contenu |
|-------|---------|
| Préconditions | Diff / pack disponibles |
| Déclencheur | « Ouvrir review pack » |
| Étapes | Liste fichiers → diff → checklist complétude → verdict GPT **proposé** |
| Décisions humaines | Accepter analyse / demander complément |
| Données lues | `git diff`, `.tmp-sfia-review/*`, handoff ref |
| Données écrites | Aucune |
| Confirmation | Non |
| Erreurs | Pack INCOMPLETE |
| Stop | READY bloqué si preuve absente |
| Résultat Git | Observation ; handoff sur branche dédiée si publié |

### P-06 — Donner un GO commit / push / PR

| Champ | Contenu |
|-------|---------|
| Préconditions | Diff borné ; pack exploitable ; pas de divergence bloquante |
| Déclencheur | Bouton séparé Commit **ou** Push **ou** Create PR |
| Étapes | Modal GO → portée + SHA + fichiers → confirmation → exécution Cursor/orchestrateur candidat → refresh Git Truth |
| Décisions humaines | GO / NO-GO / amendement |
| Données lues | status, diff, pack |
| Données écrites | Commit / remote / PR selon GO |
| Confirmation | Oui — GO distinct par action |
| Erreurs | Hook fail ; auth fail |
| Stop | Scope breach ; secrets détectés |
| Résultat Git | SHA / PR URL vérifiables |

### P-07 — Prononcer un STOP

| Champ | Contenu |
|-------|---------|
| Préconditions | Run active ou gate ouvert |
| Déclencheur | STOP (toujours accessible) |
| Étapes | Confirmer STOP → interrompre run → journaliser → état `stoppée` |
| Décisions humaines | STOP |
| Données lues | Run id |
| Données écrites | Événement journal (+ Git si ancrage) |
| Confirmation | Oui (légère si run déjà dangereuse : immédiate) |
| Erreurs | Cursor injoignable |
| Stop | — (STOP est le stop) |
| Résultat Git | Trace événementuelle |

### P-08 — Prononcer une clôture formelle

| Champ | Contenu |
|-------|---------|
| Préconditions | Critères de clôture visibles ; preuves suffisantes |
| Déclencheur | « Clôturer cycle » |
| Étapes | Checklist clôture → distinguer clôture documentaire vs merge vs suppression branche → modal GO → ancrage |
| Décisions humaines | Clôture **explicite** |
| Données lues | Packs, gates ouverts, Git |
| Données écrites | Décision Git |
| Confirmation | Renforcée |
| Erreurs | Critères non remplis |
| Stop | Clôture implicite tentée via merge seul |
| Résultat Git | Décision de clôture versionnée |

> **Note architecture :** clôture formelle du cycle architecture **reste NON PRONONCÉE** ; ce parcours ne l’auto-déclenche pas.

### P-09 — Reprendre après interruption

| Champ | Contenu |
|-------|---------|
| Préconditions | Cycle interrompu ; artefacts Git/local |
| Déclencheur | « Reprendre » |
| Étapes | Lire Git + artefacts → reconstruire état → afficher écarts → reprendre au dernier état sûr |
| Décisions humaines | Confirmer point de reprise |
| Données lues | Git history, journal, docs |
| Données écrites | Éventuel marqueur local |
| Confirmation | Oui |
| Erreurs | État non reconstructible |
| Stop | Seconde vérité détectée |
| Résultat Git | Reprise alignée sur refs |

### P-10 — Traiter une divergence UI / mémoire / Git

| Champ | Contenu |
|-------|---------|
| Préconditions | Bandeau divergence affiché |
| Déclencheur | Automatique ou « Résoudre divergence » |
| Étapes | Montrer triple comparaison (UI affichée / mémoire session / Git) → actions : refresh UI depuis Git / invalider cache / STOP distant |
| Décisions humaines | Quelle source prime (**Git**) |
| Données lues | git fetch/status, session |
| Données écrites | Aucune vérité hors Git |
| Confirmation | Oui avant toute action distante |
| Erreurs | Fetch fail |
| Stop | Tant que divergence non levée : actions distantes bloquées |
| Résultat Git | Alignement observé |

---

## 3. Phase 4 — Inventaire des écrans

### Légende priorités

| P | Signification | POC UX |
|---|---------------|--------|
| P0 | Indispensable au pilotage gouverné | Candidat POC |
| P1 | Fortement utile | POC étendu / MVP |
| P2 | Utile mais différable | Hors POC |

### UX-S01 — Portefeuille projets

| Champ | Contenu |
|-------|---------|
| Objectif | Sélectionner un projet SFIA |
| Utilisateur | Morris / lecteur |
| Visible | Nom, chemin, statut macro, dernière activité Git |
| Actions | Ouvrir |
| Dangereuses | Aucune |
| Gates | Aucun |
| États | vide / liste / erreur repo |
| Dépendances | C1, FB-01 |
| Priorité | **P0** — POC oui |

### UX-S02 — Tableau de bord projet

| Champ | Contenu |
|-------|---------|
| Objectif | Comprendre l’état global |
| Utilisateur | Morris |
| Visible | Trajectoire, cycle, AF/FD/D-VAL résumé, liens docs |
| Actions | Aller cycle / Git / décisions |
| Dangereuses | Aucune directe |
| Gates | Affichage seulement |
| États | chargé / docs manquants / divergence |
| Dépendances | README, `07`, FB-01 |
| Priorité | **P0** — POC oui |

### UX-S03 — Vue cycle actif

| Champ | Contenu |
|-------|---------|
| Objectif | Piloter le cycle courant |
| Utilisateur | Morris |
| Visible | Type, profil, typologie, blocs on/off, statut, périmètre |
| Actions | Préparer prompt ; suivre run ; ouvrir gates |
| Dangereuses | Lancer exécution sans contrat |
| Gates | Avant lancement run |
| États | aucun / actif / stoppé / clôturé |
| Dépendances | FB-02, FB-04 |
| Priorité | **P0** — POC oui |

### UX-S04 — Vue Git Truth

| Champ | Contenu |
|-------|---------|
| Objectif | Afficher l’état Git réel |
| Utilisateur | Morris |
| Visible | branche, HEAD, origin/main, status, staged, ahead/behind, diff names |
| Actions | Refresh ; copier SHA ; ouvrir fichier |
| Dangereuses | Commit/push (renvoi modal GO séparé) |
| Gates | Avant toute écriture |
| États | clean / dirty / diverged / offline |
| Dépendances | FB-03, FR-015 |
| Priorité | **P0** — POC oui |

### UX-S05 — Registre décisions / gates

| Champ | Contenu |
|-------|---------|
| Objectif | Distinguer validé / candidat / ouvert |
| Utilisateur | Morris |
| Visible | Tables D-VAL / FD / AF / UX-CAND ; Gate Cards |
| Actions | Ouvrir décision ; filtrer |
| Dangereuses | Valider sans modal |
| Gates | UX-S09 |
| États | ouvert / décidé / révoqué |
| Dépendances | FB-05, FB-09 |
| Priorité | **P0** — POC oui |

### UX-S06 — Préparation prompt Cursor

| Champ | Contenu |
|-------|---------|
| Objectif | Produire un contrat borné |
| Utilisateur | Morris (+ GPT assist) |
| Visible | Pre-check, sources, fichiers autorisés/interdits, profil |
| Actions | Générer preview ; copier ; exporter |
| Dangereuses | Envoi Cursor hors périmètre |
| Gates | Validation périmètre |
| États | draft contrat / prêt / invalide |
| Dépendances | C5, FB-04 |
| Priorité | **P0** — POC oui |

### UX-S07 — Suivi exécution

| Champ | Contenu |
|-------|---------|
| Objectif | Suivre / stopper une run |
| Utilisateur | Morris |
| Visible | Timeline, état, stop conditions déclenchées |
| Actions | STOP ; ouvrir artefacts |
| Dangereuses | Continuer après breach |
| Gates | STOP toujours disponible |
| États | idle / running / stopped / failed / done |
| Dépendances | FB-06 |
| Priorité | **P0** — POC oui |

### UX-S08 — Revue rapport / diff / review pack

| Champ | Contenu |
|-------|---------|
| Objectif | Examiner preuves avant décision |
| Utilisateur | Morris / GPT |
| Visible | Diff, pack, handoff SHA, checklist complétude, verdict **proposé** |
| Actions | Ouvrir fichiers ; demander analyse GPT |
| Dangereuses | READY sans preuve |
| Gates | Preuve minimale avant READY |
| États | absent / incomplet / exploitable |
| Dépendances | FB-07, FB-08 |
| Priorité | **P0** — POC oui |

### UX-S09 — Modal / écran de décision Morris

| Champ | Contenu |
|-------|---------|
| Objectif | Prononcer GO / NO-GO / amendement / STOP / clôture / sélection |
| Utilisateur | Morris uniquement |
| Visible | Portée, durée, révocabilité, SHA, fichiers, texte décision |
| Actions | Confirmer ; annuler |
| Dangereuses | Toutes — d’où modal |
| Gates | Lui-même est le gate |
| États | ouvert / confirmé / annulé |
| Dépendances | FB-05, FR-007 |
| Priorité | **P0** — POC oui |

### UX-S10 — Historique / audit

| Champ | Contenu |
|-------|---------|
| Objectif | Reconstruire la chaîne de faits |
| Utilisateur | Morris / lecteur |
| Visible | Commits, PR, merges, décisions, handoffs |
| Actions | Filtrer ; ouvrir |
| Dangereuses | Aucune |
| Gates | Aucun |
| États | vide / chargé |
| Dépendances | FB-10 |
| Priorité | **P0** — POC oui (vue minimale) |

### UX-S11 — Paramètres et intégrations

| Champ | Contenu |
|-------|---------|
| Objectif | Préférences surface (densité, liens candidats) |
| Utilisateur | Morris |
| Visible | Densité, thème contraste, chemins locaux candidats |
| Actions | Sauver préférences UI |
| Dangereuses | Stocker une « vérité » hors Git |
| Gates | Interdit de contourner GO |
| États | défaut / modifié |
| Dépendances | FB-11 |
| Priorité | **P2** — hors POC |

### Écrans P1 (bornés)

| ID | Nom | Justification |
|----|-----|---------------|
| UX-S12 | Comparateur divergence UI/mémoire/Git | P-10 dédié |
| UX-S13 | Checklist clôture formelle | P-08 |
| UX-S14 | Vue handoff ChatGPT | Lien review-handoff |
| UX-S15 | Vue trajectoire détaillée | Extension S02 |

### Hors inventaire volontaire

Wireframes marketing, design system complet, mobile native, multi-tenant admin, billing — **hors cycle**.

---

## 4. Matrice écrans × gates Morris

| Écran | Affiche gates | Peut ouvrir GO | Actions distantes |
|-------|---------------|----------------|-------------------|
| S01–S02 | Non / résumé | Non | Non |
| S03 | Oui | Oui (lancement) | Non direct |
| S04 | Oui | Oui (commit/push/PR séparés) | Via S09 |
| S05 | Oui | Oui | Via S09 |
| S06 | Pre-check | Validation périmètre | Non |
| S07 | Stop conditions | STOP | Non |
| S08 | Preuve minimale | READY proposé | Non |
| S09 | — | **Oui** | Selon portée GO |
| S10 | Lecture | Non | Non |
| S11 | Avertissements | Non | Non |

---

## 5. Matrice écrans × sources de vérité

| Donnée | Source | Écrans |
|--------|--------|--------|
| HEAD / branche | Git live | S02–S04, S09 |
| origin/main | `git rev-parse` | S04, strip global |
| Décisions validées | Docs Git + packs | S05, S02 |
| Verdict GPT | Artefact analyse | S08 — label **proposé** |
| Review pack | Fichier local / handoff ref | S08 |
| Préférences densité | Local reconstructible | S11 |

---

## 6. États UI globaux (contrat)

| État UI | Signification | Couleur sémantique |
|---------|---------------|--------------------|
| `draft` | Travail local non prêt | Attention |
| `ready` | Prêt à revue — pas mergé | Info |
| `merged` | Intégré sur base | Succès |
| `closed` | PR fermée sans merge | Neutre |
| `clôturé` | Clôture formelle cycle | Succès + trace décision |
| `candidat` | Proposition non décidée | Attention |
| `validé` | Décision Morris | Succès |
| `ouvert` | En attente Morris | Attention |
| `diverged` | UI/local/remote incohérents | Danger |
| `stopped` | STOP prononcé | Danger |

---

*Parcours et écrans UX/UI — candidats — aucune option visuelle sélectionnée — Morris décide.*

```

---

## 28. Contenu complet — `16-ux-ui-decision-pack.md`

```markdown
# SFIA Studio — Decision pack UX/UI

| Métadonnée | Valeur |
|------------|--------|
| **Document** | `16-ux-ui-decision-pack.md` |
| **Cycle** | 4 — UX/UI |
| **Profil** | Critical |
| **Base Git** | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
| **Statut** | `ux-ui-contract-in-progress` |
| **AF-CAND-11B** | **VALIDÉE** — prochain cycle = UX/UI |
| **AF-CAND-11A** | **VALIDÉE** — trajectoire recommandée appliquée |
| **Sélection option UX** | **NON DÉCIDÉE** — candidates ci-dessous |
| **Figma distant** | **Aucune modification** |
| **D-VAL-12 / D-VAL-13** | **Aucune** |
| **Clôture architecture** | **NON PRONONCÉE** |

> Ce pack propose des **options et arbitrages candidats**. Aucune option UX n’est promue au rang de décision sans GO Morris explicite.

---

## 1. Décisions déjà actées (consommées)

| ID | Décision | État |
|----|----------|------|
| AF-Option C | Studio / orchestrateur séparés | VALIDÉE |
| AF-CAND-11A | Recommandation UX/UI puis tech puis POC puis MVP | VALIDÉE |
| AF-CAND-11B | Sélection prochain cycle = **UX/UI** | **VALIDÉE** (Morris — ce cycle) |
| Git vérité | Seule vérité durable | VALIDÉE |
| GO explicite | Borné, révocable, traçable | VALIDÉE |

---

## 2. Options UX (distinctes)

### Option UX-A — Cockpit dense orienté gouvernance

| Champ | Contenu |
|-------|---------|
| Structure | Dashboard dense : tables Git, gates, preuves en vue principale |
| Navigation | Latérale + strip Git permanent ; peu de wizards |
| Forces | Efficacité expert ; tout l’état critique visible ; aligné AF-Option C |
| Limites | Surcharge cognitive ; courbe d’apprentissage |
| Dette | Design system dense ; nombreux états à maintenir |
| Risques | UX-R05 surcharge ; erreurs de clic si densité mal gérée |
| Compatibilité AF-Option C | Forte — surface de pilotage explicite |
| Compatibilité Git vérité | Forte — Git Truth Strip central |
| Accessibilité | Possible AA si densité maîtrisée ; focus order critique |
| Impact POC | POC plus riche mais plus coûteux à prototyper |
| Recommandation | **Candidate** pour utilisateurs experts (Morris solo) |

### Option UX-B — Parcours guidé orienté cycle

| Champ | Contenu |
|-------|---------|
| Structure | Steps : Qualifier → Preuves → Décider → Exécuter → Clôturer |
| Navigation | Wizard / stepper dominant ; détails en inspecteur |
| Forces | Lisibilité ; prévention d’erreur ; GO mieux contextualisé |
| Limites | Plus lent pour experts ; risque de masquer l’état Git global |
| Dette | Parcours multiples à maintenir |
| Risques | UX-R03 si step cache le strip Git ; fausse linéarité |
| Compatibilité AF-Option C | Bonne si Git Truth reste visible hors stepper |
| Compatibilité Git vérité | Conditionnelle — strip Git **obligatoire** hors wizard |
| Accessibilité | Souvent meilleure (focus linéaire) |
| Impact POC | POC plus simple à démontrer bout-en-bout |
| Recommandation | **Candidate** pour onboarding et réduction d’erreur |

### Option UX-H — Hybride gouverné (proposition non sélectionnée)

| Champ | Contenu |
|-------|---------|
| Structure | **Shell UX-A** (Git Truth + gates + preuves) + **mode guidé UX-B** activable par cycle |
| Navigation | Latérale permanente ; stepper optionnel dans l’espace cycle |
| Forces | Expert et guidé ; Git jamais masqué |
| Limites | Complexité produit ; deux modes à tester |
| Dette | Double parcours |
| Risques | Divergence de modes ; sur-ingénierie avant POC |
| Compatibilité AF-Option C / Git | Très forte si règles de shell imposées |
| Accessibilité | AA atteignable |
| Impact POC | POC = shell A + 1 parcours B (ex. P-06 GO) |
| Recommandation | **Candidate recommandée documentairement** — **NON SÉLECTIONNÉE** |

---

## 3. Identifiants candidats UX (UX-CAND)

| ID | Proposition | Statut |
|----|-------------|--------|
| UX-CAND-01 | Frames desktop 1440×1024 (primary) + 1280×832 (validation) | **Candidat** |
| UX-CAND-02 | Git Truth Strip permanent sur tous les écrans P0 | **Candidat** |
| UX-CAND-03 | Gate Card à 4 champs (autorité/portée/durée/révocabilité) | **Candidat** |
| UX-CAND-04 | Actions commit / push / PR / merge / delete **séparées** | **Candidat** |
| UX-CAND-05 | Badges d’état draft/ready/merged/closed/clôturé/candidat/validé/ouvert | **Candidat** |
| UX-CAND-06 | Inventaire P0 = S01–S10 | **Candidat** |
| UX-CAND-07 | Option UX-H (hybride) comme direction produit | **Candidat — non sélectionné** |
| UX-CAND-08 | Option UX-A pure | **Candidat — non sélectionné** |
| UX-CAND-09 | Option UX-B pure | **Candidat — non sélectionné** |
| UX-CAND-10 | Créer branche `project/sfia-studio-ux-ui` | **Candidat — GO distinct** |
| UX-CAND-11 | Créer fichier Figma SFIA Studio + frames P0 | **Candidat — GO distinct** |
| UX-CAND-12 | WCAG 2.2 AA comme cible contractuelle | **Candidat** |
| UX-CAND-13 | Hors POC : S11 paramètres, mobile, design system complet | **Candidat** |

---

## 4. Branche Git proposée

| Champ | Valeur |
|-------|--------|
| Nom recommandé | `project/sfia-studio-ux-ui` |
| Convention | Alignée `project/sfia-studio-*` |
| Création | **Non réalisée** — attendre GO Morris distinct |
| Base suggérée | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` (après éventuel versionnement sync post-#214) |
| Ne pas | Créer depuis un working tree sale sans stratégie ; supprimer branches architecture |

---

## 5. Figma — décisions et non-décisions

| Élément | État |
|---------|------|
| MCP Figma | **Disponible** (authentifié) |
| Fichier cible | **Absent** / non identifié |
| Modifications distantes ce cycle | **Aucune** |
| Cas template §6.6 | **Figma à produire** |
| Verdict visuel fort | **Interdit** tant que frames absentes / non validées |
| Prochaine action proposée | GO Morris → créer fichier + frames P0 |

---

## 6. Recommandation (non contraignante)

**Recommandation documentaire :** retenir **UX-H (hybride)** comme direction à prototyper en Figma, avec POC initial = shell Git Truth + gates + un parcours guidé GO (P-06).

**Statut :** recommandation **≠** décision. **UX-CAND-07 NON SÉLECTIONNÉ.**

---

## 7. Risques et réserves

| Type | Contenu |
|------|---------|
| Risque | Promouvoir UX-H sans GO |
| Risque | Créer Figma sans GO puis le traiter comme validé |
| Risque | Masquer Git Truth dans un wizard B |
| Risque | Confondre lancement UX avec clôture architecture |
| Risque | Lancer tech/POC depuis l’UI sans nouveau GO |
| Réserve | Validation visuelle pending |
| Réserve | Working tree contient sync post-#214 + Campus360 OOS |
| Réserve | Branche UX non créée |

---

## 8. Questions Morris

1. Sélectionnez-vous **UX-A**, **UX-B** ou **UX-H** (ou autre) ?
2. Validez-vous les frames **1440×1024** et **1280×832** (UX-CAND-01) ?
3. Autorisez-vous la création de la branche `project/sfia-studio-ux-ui` ?
4. Autorisez-vous la création d’un fichier Figma SFIA Studio + frames P0 ?
5. Validez-vous l’inventaire P0 (S01–S10) ou retirez-vous des écrans ?
6. Prononcez-vous la **clôture formelle** du cycle architecture (décision **distincte**) ?
7. Autorisez-vous le versionnement (commit/push/PR) du contrat UX + sync post-#214 ?

---

## 9. Gates

| Gate | État |
|------|------|
| AF-CAND-11B | **VALIDÉE** — UX/UI lancé |
| Sélection option UX | **OUVERT** |
| Frames / dimensions | **OUVERT** (proposées) |
| Branche UX | **OUVERT** — non créée |
| Fichier Figma | **OUVERT** — non créé |
| Clôture architecture | **OUVERT** — non prononcée |
| Versionnement docs UX | **OUVERT** |
| Architecture technique | **NON LANCÉE** |
| POC / MVP | **NON LANCÉS** |

---

## 10. Verdict de cycle (documentaire)

**SFIA STUDIO UX/UI DOCUMENTARY CONTRACT READY — VISUAL VALIDATION PENDING**

Conditions du verdict :
- contrat `14`–`16` complet ;
- AF-CAND-11B consommé correctement ;
- aucune option UX promue ;
- aucune modification Figma distante ;
- aucune preuve visuelle forte ;
- Git reste vérité ;
- Studio ≠ orchestrateur.

---

*Decision pack UX/UI — candidates only — Morris décide.*

```

---

## 29. Diff complet — fichiers modifiés Studio

```diff
diff --git a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
index 6d25f39..f790a6a 100644
--- a/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
+++ b/projects/sfia-studio/07-product-trajectory-and-decision-pack.md
@@ -7,12 +7,12 @@
 | **Cycle** | 1 — Cadrage (historique) ; cycle 2 conception tracé ci-dessous |
 | **Profil** | Critical (conception) / Standard (sync historique) / Critical (cadrage historique) |
 | **Baseline** | SFIA v2.6 (**Option C méthode**) |
-| **Statut** | `functional-architecture-post-merge-integrated` ; conception `functional-design-integrated` sur `main` ; cycle 2 **clôturé** |
-| **Décisions** | D-VAL-1…11 inchangées ; FD-CAND-01…08 **VALIDÉES** ; **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** ; acceptation #211 **VALIDÉE** |
+| **Statut** | `ux-ui-contract-in-progress` ; architecture `functional-architecture-post-merge-integrated` ; conception `functional-design-integrated` ; cycle 2 **clôturé** |
+| **Décisions** | D-VAL-1…11 inchangées ; FD-CAND-01…08 **VALIDÉES** ; **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; **AF-CAND-11B VALIDÉE** (UX/UI) ; acceptation #211 **VALIDÉE** ; option UX **non sélectionnée** |
 | **Destinataire** | Morris |
-| **Source de vérité** | Git `main` @ `19302836b45d49f19698c624e99f2d68afa7b290` — cadrage + conception + architecture + sync + finalisation **intégrés** |
+| **Source de vérité** | Git `main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` — cadrage + conception + architecture + sync + finalisation + trace **intégrés** |
 
-> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception **VALIDÉE** et **INTÉGRÉE**. Architecture **VALIDÉE** et **INTÉGRÉE** (PR #211 / `84e4863…`). Sync post-merge **INTÉGRÉE** (PR #212 / `cb870544…`). Finalisation documentaire **INTÉGRÉE** (PR #213 / `19302836…`). Acceptation/régularisation #211 **VALIDÉE** (Morris — 2026-07-18). Clôture formelle **non prononcée**. **Pas de D-VAL-12.** AF-Option C ≠ Option C méthode.
+> Trajectoire et décisions. D-VAL-1…11 **non modifiées**. Conception + architecture **VALIDÉES** et **INTÉGRÉES**. Trace #214 **INTÉGRÉE** (`5f1eb908…`). **AF-CAND-11B VALIDÉE** — cycle 4 UX/UI **lancé** (contrat `14`–`16`). Clôture formelle architecture **non prononcée**. Option UX **non sélectionnée**. **Pas de D-VAL-12.** AF-Option C ≠ Option C méthode.
 
 ---
 
@@ -36,18 +36,20 @@
 | Cycle architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `functional-architecture-post-merge-integrated` |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
-| AF-CAND-11B | **NON DÉCIDÉE** — sélection prochain cycle |
+| AF-CAND-11B | **VALIDÉE** — cycle UX/UI **lancé** |
 | D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
 | Versionnement architecture | Commit initial `2153258…` / head `72cab80…` / sync `33d61e3…` |
 | Intégration architecture sur `main` | **Réalisée** — PR #211 **MERGED** ; merge `84e4863…` |
 | Acceptation/régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
 | Sync post-merge (#212) | **INTÉGRÉE** — merge `cb870544…` |
 | Finalisation post-merge (#213) | **INTÉGRÉE** — merge `19302836…` ; commit `0b61d728…` |
+| Trace post-merge (#214) | **INTÉGRÉE** — merge `5f1eb908…` ; commit `4f4e7cf…` |
 | Clôture formelle cycle architecture | **NON PRONONCÉE** |
-| Prochain cycle après architecture | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (11A) |
-| Branches | `functional-design` / `pre-framing` / `functional-architecture` **conservées** |
+| Cycle UX/UI après architecture | **LANCÉ** (AF-CAND-11B VALIDÉE ; AF-CAND-11A appliquée) — contrat `14`–`16` |
+| Option UX / Figma / branche UX | **OUVERTS** — non sélectionnés / non créés |
+| Branches | `functional-design` / `pre-framing` / `functional-architecture` **conservées** ; `project/sfia-studio-ux-ui` **non créée** |
 
-> Merges #207 / #209/#210 : historiques. Merge #211 (`84e4863…`) : architecture **intégrée** + acceptée/régularisée Morris 2026-07-18 (sans D-VAL-12 ; sans réécriture rétroactive). Merge #212 (`cb870544…`) : sync **intégrée**. Merge #213 (`19302836…`) : finalisation documentaire **intégrée** — ne prononce ni clôture formelle, ni AF-CAND-11B, ni suppression de branches.
+> Merges #211–#214 : architecture + sync + finalisation + trace **intégrées**. AF-CAND-11B **VALIDÉE** (UX/UI). Ne prononce ni clôture formelle architecture, ni option UX, ni Figma distant, ni suppression de branches.
 
 ### Trace factuelle — cycle 2 (conception fonctionnelle)
 
@@ -124,8 +126,8 @@ Pré-cadrage                         ← terminé historiquement
   → merge PR #207                   ← fait Git vérifié (ec21074) — régularisé D-VAL-11
   → synchronisation post-merge      ← **VALIDÉE** — cadrage documentaire clôturé
   → conception fonctionnelle        ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — **CLÔTURÉE**
-  → architecture fonctionnelle      ← **VALIDÉE** + **INTÉGRÉE** (PR #211 / `84e4863…`) — sync #212 **intégrée** (`cb870544…`) — finalisation #213 **intégrée** (`19302836…`) — clôture formelle **ouverte** — AF-CAND-11B **ouverte**
-  → UX/UI (recommandé AF-CAND-11A)  ← **non sélectionnée** (AF-CAND-11B)
+  → architecture fonctionnelle      ← **VALIDÉE** + **INTÉGRÉE** (#211–#214 / `5f1eb908…`) — clôture formelle **ouverte**
+  → UX/UI                          ← **LANCÉ** (AF-CAND-11B VALIDÉE ; AF-CAND-11A) — contrat `14`–`16`
   → architecture technique candidate
   → définition du POC
   → POC de faisabilité (lot multi-cycle)
@@ -149,8 +151,9 @@ Pré-cadrage                         ← terminé historiquement
 - Architecture **fonctionnelle VALIDÉE** et **INTÉGRÉE** sur `main` (PR #211 / `84e4863…`) — **acceptée/régularisée** Morris 2026-07-18.
 - Sync post-merge **INTÉGRÉE** (PR #212 / `cb870544…`).
 - Finalisation documentaire **INTÉGRÉE** (PR #213 / `19302836…`).
+- Trace post-merge **INTÉGRÉE** (PR #214 / `5f1eb908…`).
 - **AF-CAND-11A** oriente UX/UI puis tech puis POC puis MVP — **sans lancer**.
-- **AF-CAND-11B** : sélection cycle suivant **NON DÉCIDÉE**.
+- **AF-CAND-11B** : **VALIDÉE** — cycle UX/UI lancé ; option UX / Figma **ouverts**.
 - Conception fonctionnelle **VALIDÉE** et **INTÉGRÉE** sur `main`.
 - Clôture formelle architecture **non prononcée**.
 
@@ -188,21 +191,21 @@ Pré-cadrage                         ← terminé historiquement
 | Profil | Critical |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
-| AF-CAND-11B | **NON DÉCIDÉE** |
+| AF-CAND-11B | **VALIDÉE** — UX/UI |
 | D10 | FB-11 → AF-01 / AF-15 → FR-024 / FR-025 |
 | Branche | `project/sfia-studio-functional-architecture` — **conservée** |
-| Commits / merges | head #211 `72cab80…` ; merge #211 `84e4863…` ; sync `33d61e3…` ; merge #212 `cb870544…` ; finalisation `0b61d728…` ; merge #213 `19302836…` |
-| Intégration | Architecture **Oui** (#211) ; sync **Oui** (#212) ; finalisation **Oui** (#213) |
+| Commits / merges | … finalisation `0b61d728…` ; merge #213 `19302836…` ; trace `4f4e7cf…` ; merge #214 `5f1eb908…` |
+| Intégration | Architecture **Oui** (#211) ; sync **Oui** (#212) ; finalisation **Oui** (#213) ; trace **Oui** (#214) |
 | Acceptation #211 | **VALIDÉE** Morris 2026-07-18 (sans D-VAL-12) |
-| Ne lance pas | Architecture technique ; UX/UI ; stack ; POC ; MVP ; code ; clôture auto ; AF-CAND-11B |
+| Ne lance pas | Architecture technique ; stack ; POC ; MVP ; code ; clôture auto architecture |
 
 ### 4.3 UX/UI
 
 | Champ | Contenu |
 |-------|---------|
-| Statut | **Recommandé** (AF-CAND-11A) — **non sélectionné** (AF-CAND-11B) |
-| Déclencheur | GO Morris sur AF-CAND-11B |
-| Pourquoi pas maintenant | Sélection cycle non décidée ; Figma non lancé |
+| Statut | **Lancé** (AF-CAND-11B VALIDÉE ; AF-CAND-11A) — option UX **ouverte** ; contrat `14`–`16` |
+| Déclencheur | GO Morris AF-CAND-11B reçu ; GO distincts pour option / Figma / branche |
+| Pourquoi Figma pending | Fichier cible absent ; aucun GO modification distante |
 
 ### 4.4 Architecture technique
 
@@ -235,8 +238,11 @@ Pré-cadrage                         ← terminé historiquement
 | D-NEXT-2i2 | Acceptation/régularisation documentaire #211 | Morris | **VALIDÉE** — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
 | D-NEXT-2i3 | Sync post-merge PR #212 | Observation Git | **MERGED** (`cb870544…`) — sync **intégrée** |
 | D-NEXT-2i4 | Finalisation post-merge PR #213 | Observation Git | **MERGED** (`19302836…`) — finalisation **intégrée** |
+| D-NEXT-2i5 | Trace post-merge PR #214 | Observation Git | **MERGED** (`5f1eb908…`) — trace **intégrée** |
 | D-NEXT-2j | Clôture formelle cycle architecture | Morris | **Non** — **non prononcée** |
-| D-NEXT-2g | Sélection cycle suivant après architecture (AF-CAND-11B) | Morris | **Non sélectionné** |
+| D-NEXT-2g | Sélection cycle suivant après architecture (AF-CAND-11B) | Morris | **VALIDÉE** — UX/UI lancé |
+| D-NEXT-2g1 | Sélection option UX (A/B/H) | Morris | **Non sélectionné** |
+| D-NEXT-2g2 | Branche UX / fichier Figma | Morris | **Non créés** — GO distinct |
 | D-NEXT-2h | Trajectoire recommandée (AF-CAND-11A) | Morris | **VALIDÉE** (recommandation uniquement) |
 | D-NEXT-3 | Autorisation versionnement **G7** (commit/push/draft PR) | Morris | **FAIT** (D-VAL-10) — historique |
 | D-NEXT-4 | Ordre conception / architecture / UX | Morris | Conception clôturée ; architecture fonctionnelle validée sur le fond ; suite **non sélectionnée** |
@@ -279,11 +285,11 @@ Pré-cadrage                         ← terminé historiquement
 
 **Conception fonctionnelle bornée** (Option 1 de séquencement post-cadrage) a été **sélectionnée, produite, VALIDÉE et INTÉGRÉE** (PR #209 / #210).
 
-**Architecture fonctionnelle Critical** : **VALIDÉE** et **INTÉGRÉE** — **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; PR #211 **MERGED** (`84e4863…`) et **acceptée/régularisée** (Morris — 2026-07-18). Sync #212 **INTÉGRÉE** (`cb870544…`). Finalisation #213 **INTÉGRÉE** (`19302836…`).
+**Architecture fonctionnelle Critical** : **VALIDÉE** et **INTÉGRÉE** — **AF-Option C VALIDÉE** ; AF-CAND-01…10, 11A, 12 **VALIDÉES** ; PR #211 **MERGED** et **acceptée/régularisée**. Sync #212 **INTÉGRÉE**. Finalisation #213 **INTÉGRÉE** (`19302836…`). Trace #214 **INTÉGRÉE** (`5f1eb908…`).
 
 **AF-CAND-11A (VALIDÉE — recommandation) :** UX/UI → architecture technique → POC borné → MVP après retour POC.
 
-**AF-CAND-11B :** **NON DÉCIDÉE** — aucun cycle suivant lancé. Nouveau GO Morris requis.
+**AF-CAND-11B :** **VALIDÉE** — cycle 4 UX/UI **lancé**. Option UX / Figma / branche UX = **nouveaux GO**. Clôture architecture = **GO distinct**.
 
 Morris reste libre. **Aucun** cycle UX/UI / architecture technique / POC / MVP n’est lancé ici. Clôture formelle architecture **non prononcée**.
 
@@ -301,18 +307,18 @@ Morris reste libre. **Aucun** cycle UX/UI / architecture technique / POC / MVP n
 | **DF-G6** | Décision de poursuite post-POC | **PROPOSÉ** |
 | **DF-G7** | Autoriser cadrage / sélection MVP | **PROPOSÉ** |
 
-Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **VALIDÉE** et **INTÉGRÉE** (`84e4863…`). Sync #212 + finalisation #213 : **INTÉGRÉES** (`19302836…`). Acceptation #211 : **VALIDÉE**. AF-CAND-11B : **non décidée**.
+Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**. Architecture : **VALIDÉE** et **INTÉGRÉE**. Sync #212 + finalisation #213 + trace #214 : **INTÉGRÉES** (`5f1eb908…`). Acceptation #211 : **VALIDÉE**. AF-CAND-11B : **VALIDÉE** (UX/UI).
 
 ---
 
 ## 8. Questions Morris
 
-1. Clôturez-vous formellement le cycle architecture ?
-2. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via AF-CAND-11A, ou autre ?
-3. Quel sort pour les branches (`pre-framing` / `functional-design` / `functional-architecture`) ?
-4. Quel niveau d’architecture minimale avant POC ?
-5. Quelles priorités NFR avant le POC ?
-6. Autorisez-vous une trace documentaire post-#213 éventuelle (commit/push/PR) ?
+1. Sélectionnez-vous l’option UX **A**, **B** ou **H** ?
+2. Validez-vous les frames 1440×1024 et 1280×832 ?
+3. Autorisez-vous branche `project/sfia-studio-ux-ui` et/ou fichier Figma ?
+4. Clôturez-vous formellement le cycle architecture (décision **distincte**) ?
+5. Quel sort pour les branches architecture / conception / pré-cadrage ?
+6. Autorisez-vous le versionnement du contrat UX (+ sync post-#214) ?
 
 ---
 
@@ -332,10 +338,11 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | Architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `84e4863…` |
 | Sync post-merge | **INTÉGRÉE** — `cb870544…` / PR #212 |
 | Finalisation post-merge | **INTÉGRÉE** — `19302836…` / PR #213 |
+| Trace post-merge | **INTÉGRÉE** — `5f1eb908…` / PR #214 |
 | Acceptation #211 | **VALIDÉE** — 2026-07-18 |
 | AF-Option C | **VALIDÉE** |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
-| AF-CAND-11B | **NON DÉCIDÉE** |
+| AF-CAND-11B | **VALIDÉE** — UX/UI |
 | Prochain cycle après architecture | **Non sélectionné** |
 
 ---
@@ -354,13 +361,14 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | Architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — `84e4863…` |
 | Sync post-merge | **INTÉGRÉE** — `cb870544…` |
 | Finalisation #213 | **INTÉGRÉE** — `19302836…` |
+| Trace #214 | **INTÉGRÉE** — `5f1eb908…` |
 | Acceptation #211 | **VALIDÉE** |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
-| AF-CAND-11B | **NON DÉCIDÉE** |
+| AF-CAND-11B | **VALIDÉE** — UX/UI |
 | Ready for POC / MVP / tech | **Non** |
-| Ready for Morris #213 post-merge review | **Oui** (trace locale) |
+| Ready for Morris UX/UI contract review | **Oui** (documentaire ; Figma pending) |
 
-**Verdict :** `SFIA STUDIO PR #213 POST-MERGE SYNC PREPARED — READY FOR MORRIS REVIEW`
+**Verdict :** `SFIA STUDIO UX/UI DOCUMENTARY CONTRACT READY — VISUAL VALIDATION PENDING`
 
 ---
 
@@ -377,5 +385,8 @@ Les gates DF-G4+ **ne sont pas** validés. Validation conception : **VALIDÉE**.
 | [11-functional-architecture.md](./11-functional-architecture.md) | Architecture — **VALIDÉE** et **INTÉGRÉE** |
 | [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux / frontières — D10 → AF-01 / AF-15 |
 | [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option / AF-CAND |
+| [14-ux-ui-contract.md](./14-ux-ui-contract.md) | UX/UI — contrat |
+| [15-ux-ui-flows-and-screens.md](./15-ux-ui-flows-and-screens.md) | UX/UI — parcours / écrans |
+| [16-ux-ui-decision-pack.md](./16-ux-ui-decision-pack.md) | UX/UI — decision pack |
 
-*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211) — sync #212 + finalisation #213 INTÉGRÉES (`19302836…`) — clôture NON PRONONCÉE — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211–#214) — cycle 4 UX/UI LANCÉ (AF-CAND-11B) — option UX / Figma OUVERTS — clôture architecture NON PRONONCÉE — Morris décide.*
diff --git a/projects/sfia-studio/11-functional-architecture.md b/projects/sfia-studio/11-functional-architecture.md
index adea160..75046c1 100644
--- a/projects/sfia-studio/11-functional-architecture.md
+++ b/projects/sfia-studio/11-functional-architecture.md
@@ -8,17 +8,17 @@
 | **Profil** | Critical |
 | **Typologie** | DOC — EVOL produit |
 | **Baseline** | SFIA v2.6 (**Option C méthode** validée — D-VAL-6) |
-| **Base Git** | `origin/main` @ `19302836b45d49f19698c624e99f2d68afa7b290` |
-| **Branche travail** | `project/sfia-studio-functional-architecture` (**conservée** @ `0b61d728…`) |
-| **Commit / merge** | head #211 `72cab80…` ; merge #211 `84e4863…` ; sync #212 `cb870544…` ; finalisation `0b61d728…` ; merge #213 `19302836b45d49f19698c624e99f2d68afa7b290` |
+| **Base Git** | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
+| **Branche travail** | `project/sfia-studio-functional-architecture` (**conservée** @ `4f4e7cf…`) |
+| **Commit / merge** | … finalisation `0b61d728…` ; merge #213 `19302836…` ; trace `4f4e7cf…` ; merge #214 `5f1eb9089652885fa19b6ce7592540b0626f29df` |
 | **Statut** | `functional-architecture-post-merge-integrated` |
 | **Autorité** | Morris (L0) |
 | **Entrée** | Conception validée `08`–`10` (inchangée) |
 | **Architecture** | **VALIDÉE** et **INTÉGRÉE** sur `main` — **AF-Option C** VALIDÉE |
-| **Décisions** | AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **NON DÉCIDÉE** ; aucune D-VAL-12 ; acceptation #211 **VALIDÉE** |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** |
+| **Décisions** | AF-CAND-01…10, 11A, 12 **VALIDÉES** ; AF-CAND-11B **VALIDÉE** (UX/UI) ; aucune D-VAL-12 ; acceptation #211 **VALIDÉE** |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** ; [#214](https://github.com/mcleland147/sfia-workspace/pull/214) trace **MERGED** |
 
-> Architecture fonctionnelle **VALIDÉE** et **INTÉGRÉE** (PR #211 / `84e4863…`) — **acceptée/régularisée** Morris 2026-07-18. Sync #212 + finalisation #213 **INTÉGRÉES** (`19302836…`). **Pas** d’architecture technique, stack, API, BDD, service, package, Figma, backlog, POC ou MVP. Runtime / orchestrateur = **candidat non contractuel**. **AF-Option C** ≠ Option C méthode. Clôture formelle **non prononcée**.
+> Architecture fonctionnelle **VALIDÉE** et **INTÉGRÉE** (PR #211) — **acceptée/régularisée** Morris 2026-07-18. Sync #212 + finalisation #213 + trace #214 **INTÉGRÉES** (`5f1eb908…`). **Pas** d’architecture technique. Runtime / orchestrateur = **candidat non contractuel**. **AF-Option C** ≠ Option C méthode. Clôture formelle **non prononcée**.
 
 ---
 
@@ -370,4 +370,4 @@ Ces vues préparent un futur UX/UI **sans** maquette ni Figma.
 
 ---
 
-*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211) — sync #212 + finalisation #213 INTÉGRÉES (`19302836…`) — clôture NON PRONONCÉE — AF-Option C VALIDÉE — AF-CAND-11B NON DÉCIDÉE — Critical — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211–#214) — AF-CAND-11B VALIDÉE (UX/UI) — clôture architecture NON PRONONCÉE — AF-Option C VALIDÉE — Critical — Morris décide.*
diff --git a/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md b/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
index 7e2ed7c..b1c86cb 100644
--- a/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
+++ b/projects/sfia-studio/12-functional-architecture-flows-and-boundaries.md
@@ -5,8 +5,8 @@
 | **Document** | `12-functional-architecture-flows-and-boundaries.md` |
 | **Statut** | `functional-architecture-post-merge-integrated` |
 | **Cycle** | Architecture fonctionnelle — Critical |
-| **Base** | `19302836b45d49f19698c624e99f2d68afa7b290` |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** (`19302836…`) |
+| **Base** | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** ; [#214](https://github.com/mcleland147/sfia-workspace/pull/214) trace **MERGED** (`5f1eb908…`) |
 | **Complète** | [11-functional-architecture.md](./11-functional-architecture.md) |
 
 > Flux **AF-*** candidats. Ne remplacent pas F1–F12 validés ; ils les **structurent** architecturalement.
@@ -389,4 +389,4 @@ Voir document 11 §§9–10 et BR-001…025. Gates séparés : commit, push, PR,
 
 ---
 
-*Flux architecture VALIDÉS et INTÉGRÉS (#211) — sync #212 + finalisation #213 INTÉGRÉES (`19302836…`) — Morris décide AF-CAND-11B / clôture.*
+*Flux architecture VALIDÉS et INTÉGRÉS (#211) — sync #212 + finalisation #213 + trace #214 INTÉGRÉES (`5f1eb908…`) — Morris décide AF-CAND-11B / clôture.*
diff --git a/projects/sfia-studio/13-functional-architecture-decision-pack.md b/projects/sfia-studio/13-functional-architecture-decision-pack.md
index 5d14684..3fc1d23 100644
--- a/projects/sfia-studio/13-functional-architecture-decision-pack.md
+++ b/projects/sfia-studio/13-functional-architecture-decision-pack.md
@@ -6,7 +6,7 @@
 | **Statut** | `functional-architecture-post-merge-integrated` |
 | **Cycle** | 3 — Architecture fonctionnelle — sous-cycle amendements Morris |
 | **Profil** | Critical |
-| **Base / main** | `19302836b45d49f19698c624e99f2d68afa7b290` |
+| **Base / main** | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
 | **Commit head PR #211** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
 | **Merge #211** | `84e48636bb78808774b51f67329167f8e9749a6b` |
 | **Acceptation #211** | **VALIDÉE** — Morris — 2026-07-18 (sans D-VAL-12) |
@@ -14,7 +14,9 @@
 | **Merge #212** | `cb87054423ed80905f633e86d907eee1709611b2` |
 | **Commit finalisation #213** | `0b61d72874a7075bdb174490dc9aa739e79e7024` |
 | **Merge #213** | `19302836b45d49f19698c624e99f2d68afa7b290` |
-| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** |
+| **Commit trace #214** | `4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3` |
+| **Merge #214** | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
+| **PR** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) **MERGED** + acceptée ; [#212](https://github.com/mcleland147/sfia-workspace/pull/212) sync **MERGED** ; [#213](https://github.com/mcleland147/sfia-workspace/pull/213) finalisation **MERGED** ; [#214](https://github.com/mcleland147/sfia-workspace/pull/214) trace **MERGED** |
 | **Complète** | [11](./11-functional-architecture.md) · [12](./12-functional-architecture-flows-and-boundaries.md) |
 
 > **AF-CAND-*** = décisions locales au cycle d’architecture. **≠ D-VAL**. Aucune D-VAL-12.
@@ -142,7 +144,7 @@ Justification : préserve INV-12 / BR-019 / BR-025 ; évite fusion Studio/décid
 | AF-CAND-09 | Preuve / audit : journal ≠ preuve Git ≠ verdict ≠ décision | **VALIDÉE** | Observabilité | ≠ outil APM |
 | AF-CAND-10 | Option d’architecture = **AF-Option C** | **VALIDÉE** | Orientation | ≠ validation tech |
 | AF-CAND-11A | Trajectoire recommandée après architecture fonctionnelle (voir §6.1) | **VALIDÉE** (recommandation uniquement) | Oriente la séquence | Ne lance aucun cycle |
-| AF-CAND-11B | Sélection effective du prochain cycle | **NON DÉCIDÉE / À SÉLECTIONNER** | — | Nouveau GO Morris requis |
+| AF-CAND-11B | Sélection effective du prochain cycle | **VALIDÉE** — UX/UI | Morris — cycle 4 | Option UX / Figma / clôture arch. = GO distincts |
 | AF-CAND-12 | Aucune D-VAL-12 ; AF-CAND ≠ D-VAL | **VALIDÉE** | Gouvernance | — |
 
 ### 6.1 AF-CAND-11A — Trajectoire recommandée (VALIDÉE)
@@ -158,7 +160,7 @@ Après validation et intégration documentaire de l’architecture fonctionnelle
 
 **Effets :** oriente la séquence ; prépare le futur cycle UX/UI ; **ne lance** aucun cycle ; **ne valide** aucune architecture technique ; **ne définit** ni POC ni MVP.
 
-### 6.2 AF-CAND-11B — Sélection du prochain cycle (NON DÉCIDÉE)
+### 6.2 AF-CAND-11B — Sélection du prochain cycle (**VALIDÉE** — UX/UI)
 
 La sélection effective du prochain cycle reste une décision Morris **distincte**.
 
@@ -240,7 +242,7 @@ Voir document 12 §9 — couverture complète via AF-01…AF-15.
 | 11 | AF-12 |
 | 12 | FB-12, **AF-Option C** |
 | 13 | AF-06/10 |
-| 14 | AF-CAND-* ; AF-CAND-11B non décidée |
+| 14 | AF-CAND-* ; AF-CAND-11B VALIDÉE (UX/UI) ; option UX ouverte |
 
 ### AC-01…08 / RF-01…07
 
@@ -258,10 +260,10 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 **Réserves :** Pas de tech ; pas de D-VAL-12 ; Runtime candidat ; cycle suivant non sélectionné.
 **Questions Morris restantes :**
 1. Clôturez-vous formellement le cycle architecture ?
-2. Sélectionnez-vous le prochain cycle (**AF-CAND-11B**) — UX/UI recommandé via 11A, ou autre ?
+2. Sélectionnez-vous l’option UX (A/B/H) et autorisez-vous Figma / branche UX (GO distincts) ?
 3. Quel sort pour les branches (`pre-framing` / `functional-design` / `functional-architecture`) ?
 4. Quel niveau d’architecture minimale avant POC ?
-5. Autorisez-vous une trace documentaire post-#213 éventuelle ?
+5. Autorisez-vous une trace documentaire post-#214 éventuelle ?
 
 ---
 
@@ -271,12 +273,13 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 |------|--------|
 | Validation AF-Option C | **FAIT** |
 | Validation AF-CAND-01…10, 11A, 12 | **FAIT** |
-| AF-CAND-11B sélection cycle | **OUVERT** |
+| AF-CAND-11B sélection cycle | **VALIDÉE** — UX/UI |
 | Versionnement architecture | **FAIT** |
 | Intégration PR #211 sur `main` | **FAIT Git** (`84e4863…`) |
 | Acceptation/régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 — sans D-VAL-12 |
 | Sync post-merge PR #212 | **INTÉGRÉE** — `cb870544…` |
 | Finalisation post-merge PR #213 | **INTÉGRÉE** — `19302836…` |
+| Trace post-merge PR #214 | **INTÉGRÉE** — `5f1eb908…` |
 | Clôture formelle cycle architecture | **Non** — **non prononcée** |
 | Lancement UX/UI / tech / POC / MVP | **Non** |
 
@@ -290,7 +293,7 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 | FB-01…12 | Services créés |
 | AF-CAND-01…10, 11A, 12 | D-VAL-12 |
 | AF-CAND-11A (trajectoire) | Cycle suivant lancé |
-| AF-CAND-11B | Toujours **non décidée** |
+| AF-CAND-11B | **VALIDÉE** — UX/UI |
 
 ---
 
@@ -298,18 +301,18 @@ AC couverts par blocs+FR+flux ; RF traités comme risques architecture (seconde
 
 **Recommandation (AF-CAND-11A VALIDÉE) :** UX/UI fonctionnelle et visuelle en premier, puis architecture technique, POC borné, MVP après retour POC.
 
-**Sélection (AF-CAND-11B) :** **NON DÉCIDÉE**. Aucun cycle lancé. Nouveau GO Morris requis.
+**Sélection (AF-CAND-11B) :** **VALIDÉE** — cycle UX/UI lancé. Option UX / Figma / clôture architecture = GO distincts.
 
 ---
 
 ## 12. Verdict
 
-**Architecture fonctionnelle VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-post-merge-integrated` — PR #211 **MERGED** (`84e4863…`) et **acceptée/régularisée** (Morris — 2026-07-18). Sync #212 **INTÉGRÉE** (`cb870544…`). Finalisation #213 **INTÉGRÉE** (`19302836…`).
+**Architecture fonctionnelle VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-post-merge-integrated` — PR #211 **MERGED** et **acceptée/régularisée**. Sync #212 **INTÉGRÉE**. Finalisation #213 **INTÉGRÉE** (`19302836…`). Trace #214 **INTÉGRÉE** (`5f1eb908…`).
 
 Validé : AF-Option C ; AF-CAND-01…10 ; AF-CAND-11A ; AF-CAND-12 ; acceptation #211.
-Non décidé : AF-CAND-11B ; clôture formelle.
+Non décidé : option UX ; Figma ; branche UX ; clôture formelle architecture.
 Aucune D-VAL-12. Baseline `08`–`10` intacte. Aucun cycle suivant lancé. Clôture formelle **non prononcée**.
 
 ---
 
-*Pack AF validé et intégré — Critical — sync #212 + finalisation #213 intégrées — Morris décide AF-CAND-11B / clôture.*
+*Pack AF validé et intégré — Critical — AF-CAND-11B VALIDÉE (UX/UI) — Morris décide option UX / Figma / clôture architecture.*
diff --git a/projects/sfia-studio/README.md b/projects/sfia-studio/README.md
index 1264b2f..0313a61 100644
--- a/projects/sfia-studio/README.md
+++ b/projects/sfia-studio/README.md
@@ -4,14 +4,15 @@
 |------------|--------|
 | **Identité** | SFIA Studio — **projet officiel** : plateforme métier opérationnelle et durable pour piloter les cycles SFIA et orchestrer Git, GPT, Cursor et un mécanisme d’orchestration déterministe (Runtime candidat) sous contrôle Morris |
 | **Nom** | **SFIA Studio** — projet officiel (**G1 validé**) |
-| **Statut** | `functional-architecture-post-merge-integrated` — Architecture **VALIDÉE** et **INTÉGRÉE** ; sync post-merge **intégrée** (#212) ; finalisation documentaire **intégrée** (#213) ; clôture formelle **non prononcée** |
+| **Statut** | `ux-ui-contract-in-progress` — Cycle 4 UX/UI **lancé** (AF-CAND-11B) ; architecture **VALIDÉE** + **INTÉGRÉE** ; clôture formelle architecture **non prononcée** |
 | **Baseline méthode** | **SFIA v2.6** (consommée — **Option C méthode** validée ; baseline inchangée) |
 | **Autorité** | Morris (L0) |
-| **Exécuteur** | Cursor — post-merge #213 (DOC, Critical) — trace locale |
-| **Typologie cycle** | DOC — post-merge / intégration finale |
-| **Cycle projet** | 3 — Architecture (**VALIDÉE** + **INTÉGRÉE**) ; sync + finalisation **intégrées** ; clôture formelle **ouverte** |
+| **Exécuteur** | Cursor — cycle 4 UX/UI (DOC/UX, Critical) — contrat documentaire local |
+| **Typologie cycle** | DOC / UX — conception UX/UI fonctionnelle et visuelle |
+| **Cycle projet** | 4 — UX/UI (**en cours**) ; cycle 3 architecture **intégrée** ; clôture formelle architecture **ouverte** |
 | **Profil SFIA** | Critical |
-| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée** @ `0b61d728…`) |
+| **Branche architecture** | `project/sfia-studio-functional-architecture` (**conservée** @ `4f4e7cf…`) |
+| **Branche UX proposée** | `project/sfia-studio-ux-ui` — **non créée** (GO Morris distinct) |
 | **Commit architecture initial** | `215325858ed493564f6083ec5adc1618008593f6` |
 | **Head final PR #211** | `72cab8016387f827f4dcf04f7459208cd85ff327` |
 | **PR architecture** | [#211](https://github.com/mcleland147/sfia-workspace/pull/211) — **MERGED** |
@@ -23,18 +24,22 @@
 | **PR finalisation post-merge** | [#213](https://github.com/mcleland147/sfia-workspace/pull/213) — **MERGED** |
 | **Commit finalisation** | `0b61d72874a7075bdb174490dc9aa739e79e7024` |
 | **Merge finalisation** | `19302836b45d49f19698c624e99f2d68afa7b290` |
+| **PR trace post-merge** | [#214](https://github.com/mcleland147/sfia-workspace/pull/214) — **MERGED** |
+| **Commit trace** | `4f4e7cf497a1fdc5b9304d09b918dd3bb987d5d3` |
+| **Merge trace** | `5f1eb9089652885fa19b6ce7592540b0626f29df` |
 | **Branche conception** | `project/sfia-studio-functional-design` (**conservée** ; poussée ; intégrée à `main`) |
 | **Branche historique** | `project/sfia-studio-pre-framing` (**conservée** ; intégrée à `main`) |
 | **Chemin** | `projects/sfia-studio/` |
-| **Base canonique** | `origin/main` @ `19302836b45d49f19698c624e99f2d68afa7b290` |
+| **Base canonique** | `origin/main` @ `5f1eb9089652885fa19b6ce7592540b0626f29df` |
 | **PR conception** | [#209](https://github.com/mcleland147/sfia-workspace/pull/209) — **MERGED** |
 | **FD-CAND-01…08** | **VALIDÉES** — Morris — 2026-07-18 |
 | **AF-Option C** | **VALIDÉE** — Studio / orchestrateur candidat séparés — **≠** Option C méthode |
 | **AF-CAND-01…10, 11A, 12** | **VALIDÉES** — ≠ D-VAL |
-| **AF-CAND-11B** | **NON DÉCIDÉE** — sélection du prochain cycle |
+| **AF-CAND-11B** | **VALIDÉE** — Morris — prochain cycle = **UX/UI** |
 | **D-VAL-11** | **VALIDÉE** — cadrage documentaire clôturé |
 | **Architecture fonctionnelle** | **VALIDÉE** et **INTÉGRÉE** sur `main` (PR #211 / `84e4863…`) |
-| **Prochain cycle** | **Non sélectionné** (AF-CAND-11B) ; UX/UI **recommandé** (AF-CAND-11A) |
+| **Cycle UX/UI** | **Lancé** — contrat `14`–`16` ; option UX **non sélectionnée** ; Figma **pending** |
+| **Prochain après UX** | Non sélectionné (tech / POC / MVP — nouveaux GO) |
 
 ---
 
@@ -54,21 +59,22 @@
 | Cycle architecture fonctionnelle | **VALIDÉE** et **INTÉGRÉE** — statut `functional-architecture-post-merge-integrated` |
 | AF-Option C | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10, 11A, 12 | **VALIDÉES** |
-| AF-CAND-11B | **NON DÉCIDÉE** — sélection prochain cycle |
+| AF-CAND-11B | **VALIDÉE** — cycle UX/UI **lancé** |
 | D10 | FB-11 → **AF-01 / AF-15** → FR-024 / FR-025 |
 | Versionnement architecture | Commit initial `2153258…` / head `72cab80…` / sync `33d61e3…` |
 | Intégration architecture sur `main` | **Réalisée** — PR #211 **MERGED** ; merge `84e4863…` |
 | Acceptation/régularisation #211 | **VALIDÉE** — Morris — 2026-07-18 — sans D-VAL-12 ; sans réécriture rétroactive |
 | Sync post-merge (#212) | **INTÉGRÉE** — merge `cb870544…` ; commit `33d61e3…` |
 | Finalisation post-merge (#213) | **INTÉGRÉE** — merge `19302836…` ; commit `0b61d728…` |
+| Trace post-merge (#214) | **INTÉGRÉE** — merge `5f1eb908…` ; commit `4f4e7cf…` |
 | Intégration conception sur `main` | **Réalisée** via PR #209 / sync #210 → `e9d8193…` |
 | Acceptation Morris intégration #209 | **VALIDÉE** — 2026-07-18 (sync post-merge) |
 | Écart d’autorisation merge #209 | **Clôturé** (traçabilité) — sans D-VAL-12 |
 | Clôture formelle cycle architecture | **NON PRONONCÉE** |
-| Prochain cycle | **Non sélectionné** (AF-CAND-11B) |
-| Branches | `functional-design`, `pre-framing`, `functional-architecture` **conservées** |
+| Cycle UX/UI (AF-CAND-11B) | **LANCÉ** — contrat documentaire `14`–`16` ; option UX / Figma **ouverts** |
+| Branches | `functional-design`, `pre-framing`, `functional-architecture` **conservées** ; UX `project/sfia-studio-ux-ui` **non créée** |
 
-> PR #207 / #209 : historiques. PR #211 : architecture **intégrée** (`84e4863…`) — **fait Git** + acceptée/régularisée Morris 2026-07-18 (sans D-VAL-12 ; sans réécriture rétroactive). PR #212 : sync post-merge **intégrée** (`cb870544…`). PR #213 : finalisation documentaire **intégrée** (`19302836…`). Cette intégration ne prononce ni la clôture formelle du cycle d’architecture fonctionnelle, ni la sélection d’AF-CAND-11B, ni la suppression des branches conservées.
+> PR #207 / #209 : historiques. PR #211–#214 : architecture + sync + finalisation + trace **intégrées** (`5f1eb908…`). AF-CAND-11B **VALIDÉE** (UX/UI). Cette sélection ne prononce ni la clôture formelle du cycle d’architecture, ni une option UX, ni la création Figma/branche, ni la suppression des branches conservées.
 
 ---
 
@@ -140,12 +146,13 @@ Pré-cadrage                    ← terminé historiquement
   → merge PR #207              ← fait Git vérifié (ec21074) — régularisé par D-VAL-11
   → synchronisation post-merge ← **VALIDÉE** (D-VAL-11) — cadrage documentaire clôturé
   → conception fonctionnelle   ← **VALIDÉE** + **INTÉGRÉE** (PR #209 / sync #210 → `e9d8193…`) — cycle **CLÔTURÉ**
-  → architecture fonctionnelle ← **VALIDÉE** + **INTÉGRÉE** (PR #211 / `84e4863…`) — sync #212 **intégrée** (`cb870544…`) — finalisation #213 **intégrée** (`19302836…`) — clôture formelle **ouverte** — AF-CAND-11B **ouverte**
-  → UX/UI (recommandé AF-CAND-11A) / architecture technique / POC ← **non sélectionnés** (AF-CAND-11B)
-  → MVP → delivery → industrialisation plateforme
+  → architecture fonctionnelle ← **VALIDÉE** + **INTÉGRÉE** (#211–#214 / `5f1eb908…`) — clôture formelle **ouverte**
+  → UX/UI ← **LANCÉ** (AF-CAND-11B VALIDÉE ; trajectoire AF-CAND-11A) — contrat `14`–`16` ; option / Figma **ouverts**
+  → architecture technique / POC / MVP ← **non lancés**
+  → delivery → industrialisation plateforme
 ```
 
-Aucune stack / architecture **technique** validée. Architecture **fonctionnelle VALIDÉE** et **INTÉGRÉE** sur `main` (AF-Option C ; AF-CAND-01…10, 11A, 12). Cycle suivant **non sélectionné**. POC / MVP non lancés. Clôture formelle architecture **non automatique**.
+Aucune stack / architecture **technique** validée. Architecture **fonctionnelle VALIDÉE** et **INTÉGRÉE**. Cycle 4 UX/UI **en cours** (documentaire). POC / MVP non lancés. Clôture formelle architecture **non automatique**.
 
 ---
 
@@ -189,7 +196,17 @@ Aucune stack / architecture **technique** validée. Architecture **fonctionnelle
 | [12-functional-architecture-flows-and-boundaries.md](./12-functional-architecture-flows-and-boundaries.md) | Flux AF-01…15 et frontières (D10 → AF-01 / AF-15) |
 | [13-functional-architecture-decision-pack.md](./13-functional-architecture-decision-pack.md) | AF-Option A/B/C ; AF-CAND |
 
-> Statut `functional-architecture-post-merge-integrated`. **AF-Option C VALIDÉE** (≠ Option C méthode). AF-CAND-01…10, 11A, 12 **VALIDÉES**. AF-CAND-11B **NON DÉCIDÉE**. Aucune D-VAL-12. PR #211 **MERGED** + acceptée. PR #212 **MERGED**. PR #213 **MERGED** — finalisation sur `main` (`19302836…`). Clôture formelle **non prononcée**.
+> Statut architecture `functional-architecture-post-merge-integrated` (historique d’intégration). **AF-Option C VALIDÉE**. AF-CAND-01…10, 11A, 12 **VALIDÉES**. AF-CAND-11B **VALIDÉE** (UX/UI). Aucune D-VAL-12. PR #211–#214 **MERGED**. Clôture formelle architecture **non prononcée**.
+
+### UX/UI — en cours (cycle 4)
+
+| Document | Rôle |
+|----------|------|
+| [14-ux-ui-contract.md](./14-ux-ui-contract.md) | Principes, IA, contrat visuel, accessibilité, plan Figma |
+| [15-ux-ui-flows-and-screens.md](./15-ux-ui-flows-and-screens.md) | Parcours, écrans, matrices |
+| [16-ux-ui-decision-pack.md](./16-ux-ui-decision-pack.md) | Options UX-A/B/H, UX-CAND, questions Morris |
+
+> Statut `ux-ui-contract-in-progress`. Option UX **non sélectionnée**. Figma distant **non modifié**. Branche UX **non créée**. Aucun verdict visuel fort.
 
 ---
 
@@ -201,6 +218,8 @@ Le cycle 2 (conception fonctionnelle / finalisation) est en profil **Critical**
 
 Le cycle d’architecture fonctionnelle est en profil **Critical** : responsabilités Morris/GPT/Cursor/Git/orchestrateur candidat ; gates et preuves ; frontières empêchant une seconde vérité ou une architecture technique implicite.
 
+Le cycle 4 UX/UI est en profil **Critical** : plateforme métier ; visibilité des gates/preuves ; Git comme vérité ; séparation Studio/orchestrateur ; anti-GO-implicite ; accessibilité/sécurité/RGPD dès le contrat ; aucun verdict visuel fort sans Figma/runtime.
+
 ---
 
 ## 5. Principes de gouvernance
@@ -274,7 +293,7 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | AF-Option C (Studio / orchestrateur séparés) | **VALIDÉE** — ≠ Option C méthode |
 | AF-CAND-01…10 | **VALIDÉES** |
 | AF-CAND-11A (trajectoire recommandée) | **VALIDÉE** (recommandation uniquement) |
-| AF-CAND-11B (sélection prochain cycle) | **NON DÉCIDÉE** |
+| AF-CAND-11B (sélection prochain cycle) | **VALIDÉE** — UX/UI |
 | AF-CAND-12 (pas de D-VAL-12) | **VALIDÉE** |
 | D10 → AF-01 / AF-15 | **VALIDÉE** (amendement traçabilité) |
 
@@ -282,24 +301,28 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 
 | Décision | Statut |
 |----------|--------|
-| AF-CAND-11B — sélection / lancement prochain cycle | **NON DÉCIDÉE** — UX/UI recommandé via 11A |
+| AF-CAND-11B — sélection / lancement prochain cycle | **VALIDÉE** — UX/UI lancé |
+| Option UX (A/B/H) | **NON SÉLECTIONNÉE** |
+| Figma / branche UX | **OUVERTS** — non créés |
 | Acceptation / régularisation documentaire du merge #211 | **Ouverte** — fait Git tracé ; pas de D-VAL auto |
-| Commit / push / PR sync (#212) + finalisation (#213) | **Réalisés et intégrés** — trace post-#213 locale éventuelle **non versionnée** ici |
+| Commit / push / PR sync (#212) + finalisation (#213) + trace (#214) | **Réalisés et intégrés** — trace post-#214 éventuelle **non versionnée** ici |
 | Clôture formelle cycle architecture | **Non** — non automatique |
 | Sort des branches | Conservées ; décisions distinctes |
 | Contenu POC / définition MVP | Non pris |
 | Stack / architecture technique | Non pris |
 
-> Conception : intégrée (PR #209 / #210). Architecture : **intégrée** (PR #211 / `84e4863…`) — acceptée/régularisée Morris 2026-07-18. Sync #212 + finalisation #213 : **intégrées** (`cb870544…` / `19302836…`). Aucune réinterprétation rétroactive ; aucune D-VAL-12.
+> Conception : intégrée (PR #209 / #210). Architecture : **intégrée** (PR #211) — acceptée/régularisée. Sync #212 + finalisation #213 + trace #214 : **intégrées** (`5f1eb908…`). Aucune réinterprétation rétroactive ; aucune D-VAL-12.
 
 ---
 
 ## 8. Prochaine décision
 
-1. Revue ChatGPT du handoff **post-merge #213**.
-2. Clôture formelle du cycle architecture (**non prononcée**).
-3. **AF-CAND-11B** — sélection du prochain cycle (**non décidée** ; UX/UI recommandé).
-4. Sort des branches (`pre-framing` / `functional-design` / `functional-architecture`).
+1. Revue ChatGPT du handoff **cycle 4 UX/UI**.
+2. Sélection option UX (A / B / H) et frames 1440×1024 / 1280×832.
+3. GO branche `project/sfia-studio-ux-ui` et/ou fichier Figma (distincts).
+4. Clôture formelle du cycle architecture (**non prononcée** — distincte).
+5. Sort des branches (`pre-framing` / `functional-design` / `functional-architecture`).
+6. Versionnement docs UX (+ sync post-#214 éventuelle).
 5. Sort des branches (décisions distinctes — suppression interdite ici).
 
 **Verdict documentaire :** `SFIA STUDIO FUNCTIONAL ARCHITECTURE POST-MERGE SYNC PREPARED — READY FOR MORRIS REVIEW`
@@ -316,12 +339,13 @@ Décision Morris de validation de la conception fonctionnelle et des FD-CAND-01
 | Conception fonctionnelle validée | **`08`–`10`** sur **`main`** — baseline **inchangée** |
 | Architecture fonctionnelle validée + intégrée | **`11`–`13`** sur **`main`** (`84e4863…` / PR #211) |
 | Sync post-merge intégrée | PR #212 / `cb870544…` |
-| Finalisation post-merge intégrée | PR #213 / `19302836…` — statut `functional-architecture-post-merge-integrated` |
+| Finalisation post-merge intégrée | PR #213 / `19302836…` |
+| Trace post-merge intégrée | PR #214 / `5f1eb908…` — statut `functional-architecture-post-merge-integrated` |
 | Review pack | `.tmp-sfia-review/chatgpt-review.md` — non versionné dans le projet |
 | Handoff | `sfia-review-handoff/latest-chatgpt-review.md` sur `sfia/review-handoff` |
 
-> `main` @ `19302836…` est la source de vérité du **cadrage**, de la **conception**, de l’**architecture**, de la **sync post-merge** et de la **finalisation documentaire** intégrées. Toute trace post-#213 éventuelle = **locale** jusqu’à GO versionnement.
+> `main` @ `5f1eb908…` est la source de vérité du **cadrage**, de la **conception**, de l’**architecture**, de la **sync**, de la **finalisation** et de la **trace post-merge** intégrées. Toute trace post-#214 éventuelle = **locale** jusqu’à GO versionnement.
 
 ---
 
-*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211) — sync #212 + finalisation #213 INTÉGRÉES (`19302836…`) — clôture NON PRONONCÉE — AF-CAND-11B NON DÉCIDÉE — Option C méthode préservée — Morris décide.*
+*SFIA Studio — architecture VALIDÉE et INTÉGRÉE (#211–#214) — cycle 4 UX/UI LANCÉ (AF-CAND-11B) — option UX / Figma OUVERTS — clôture architecture NON PRONONCÉE — Option C méthode préservée — Morris décide.*

```

---

## 30. Verdict

**SFIA STUDIO UX/UI DOCUMENTARY CONTRACT READY — VISUAL VALIDATION PENDING**

Aucun commit projet. Aucun push projet. Aucune PR projet. Aucune modification Figma distante. Aucune architecture technique. Aucun POC. Aucun MVP. Aucune option UX promue. Aucune clôture formelle architecture.
