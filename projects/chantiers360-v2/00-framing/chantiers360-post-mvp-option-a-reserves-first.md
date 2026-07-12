# Chantiers360 v2 — Option A — Réserves d'abord

**Projet :** Chantiers360 v2  
**Chemin :** `projects/chantiers360-v2/00-framing/chantiers360-post-mvp-option-a-reserves-first.md`  
**Date de création :** 2026-07-09  
**Cycle :** Option A — Réserves d'abord (Cycle 1 roadmap post-MVP)  
**Type de cycle projet :** UX/UI + QA/validation ciblée  
**Profil SFIA :** Standard  
**Méthode appliquée :** SFIA v2.5 **candidate** — SFIA v2.4 baseline opérationnelle

**Document parent :** [`2026-07-10-chantiers360-post-mvp-framing.md`](2026-07-10-chantiers360-post-mvp-framing.md)

---

## 1. Statut du document

| Élément | Valeur |
|---------|--------|
| **Nature** | Proposition de cadrage — documentaire uniquement |
| **Statut** | **Proposition** — non validée par Morris |
| **Périmètre** | R-UX-01 et R-QA-04 uniquement |
| **R-QA-04** | **CLOSED** — PR #151 @ `2aa68f4` (2026-07-09) |
| **R-UX-01 — revue UX/UI** | [`06-ux-ui/r-ux-01-prochaines-actions-ux-review.md`](../06-ux-ui/r-ux-01-prochaines-actions-ux-review.md) — **R-UX-01 — CLOSED** (2026-07-10) |
| **R-UX-01 — brief Figma P2** | [`06-ux-ui/r-ux-01-prochaines-actions-figma-brief.md`](../06-ux-ui/r-ux-01-prochaines-actions-figma-brief.md) — GO Morris UX-1 complet |
| **Correction applicative** | **Aucune** — ce cycle qualifie, ne corrige pas |
| **Baseline méthode** | SFIA v2.4 opérationnelle |
| **Méthode testée** | SFIA v2.5 **candidate** — ne valide pas v2.5 comme baseline |
| **Décision Morris** | **Requise** — traitement, ordre, maintien ou cycles suivants |

---

## 2. Rappel roadmap post-MVP

Roadmap post-MVP souhaitée par Morris :

| Cycle | Option | Statut |
|-------|--------|--------|
| **1** | **Option A — Réserves d'abord** | **Actif** — ce document |
| 2 | Option B — Produit priorisé | Non lancée — rappel séquencement uniquement |
| 3 | Option C — Cadrage renforcé | Non lancée — rappel séquencement uniquement |

> **Observation :** seul le Cycle 1 (Option A) est actif. Les Options B et C ne sont ni détaillées ni exécutées dans ce document.

---

## 3. Objectif du cycle Option A

Qualifier **R-UX-01** et **R-QA-04** avant toute nouvelle évolution produit (Option B) ou formalisation architecture (Option C).

**Ce cycle répond aux questions :**

1. Ces deux réserves doivent-elles être traitées avant la suite post-MVP ?
2. Peuvent-elles être maintenues comme réserves acceptées ?
3. Quel cycle SFIA ouvrir ensuite : UX/UI, QA, delivery ou backlog ?

**Hors périmètre de ce cycle :** R-QA-03, R-QA-05, extensions métier, auth, déploiement, correction code.

---

## 4. Réserve R-UX-01

### 4.1 Contexte observé

| Élément | Détail |
|---------|--------|
| **ID** | R-UX-01 |
| **Écran concerné** | `/prochaines-actions` |
| **Statut** | **CLOSED** — clôture documentaire 2026-07-10 |
| **Origine** | INC-05 (nouvelle réserve) |
| **Sévérité** | UX / méthode — non bloquante |

L'écran **Prochaines actions** (US-12, US-13) a été livré par **extrapolation des patterns UI existants**, sans maquette Figma dédiée. L'agrégation fonctionnelle est réelle (tâches, réserves, jalons, retards) — aucune table dédiée.

### 4.2 Origine documentaire

| Document | Section / contenu |
|----------|-------------------|
| `07-delivery-inc-05/delivery-inc-05-decisions.md` | D9 — accepté sans maquette dédiée |
| `08-qa-test/inc-05/qa-reserves.md` | Constat, décision, garde-fous |
| `07-delivery-inc-05/inc-05-closure-report.md` | R-UX-01 ouverte — non bloquante |
| `04-design/figma-brief.md` | Frame P2 « Vue prochaines actions » — **⏳ Non produit** |
| `09-capitalization/mvp-capitalization-report.md` | F4 — couverture design non systématique |
| Design coverage SFIA v2.0 | PR #129–#130 — R-UX-01 **levée** (clôture 2026-07-10) |

> **Clôture R-UX-01 (2026-07-10) :** production Figma P2, alignement UI ciblé et validation Morris acceptable ; enseignements Figma-to-code à capitaliser dans le REX post-MVP Chantiers360.

### 4.3 Impact utilisateur

| Impact | Détail |
|--------|--------|
| **Fonctionnel** | Aucun blocage — écran utilisable, navigation vers fiche + onglet source |
| **Visuel / cohérence** | Écran P2 sans référence design validée Morris — risque d'incohérence avec les 4 frames P1 |
| **Accessibilité** | Non évaluée au MVP — à traiter si reprise UI publique |

### 4.4 Impact produit

- L'écran répond aux US-12/US-13 et complète la chaîne MVP « prochaines actions dérivées ».
- La dette est **méthodologique et design** — pas fonctionnelle.
- Toute évolution UI de cet écran sans frame Figma répète le pattern d'extrapolation.

### 4.5 Dépendance Figma

| Élément | Statut |
|---------|--------|
| Frame Figma dédiée `/prochaines-actions` | **Absente** — P2 non produit (`figma-brief.md` §4) |
| Patterns réutilisés | Cartes, listes, badges — hérités INC-01 à INC-05 |
| Standard design coverage | PR #129 mergé — règle documentée, réserve non levée |

**Point d'attention :** toute reprise UX nécessite soit une **nouvelle frame Figma** validée Morris, soit une **décision explicite** de maintenir l'extrapolation.

### 4.6 Risque si non traitée

| Risque | Gravité |
|--------|---------|
| Dette design accumulée sur écran transverse visible | Moyenne |
| Nouvelles features UI construites sans source design | Moyenne |
| Écart méthode design coverage SFIA v2.0 | Faible — documenté |
| Blocage fonctionnel | **Aucun** |

### 4.7 Options de traitement

| Option | Description | Cycle suivant |
|--------|-------------|---------------|
| **T1** | Produire frame Figma P2 `/prochaines-actions` puis aligner UI | **UX/UI** Standard |
| **T2** | Maintenir acceptée — extrapolation assumée | Aucun — passage Option B possible |
| **T3** | Polish UI code sans Figma (non recommandé méthode) | **Delivery** — nécessite GO Morris explicite hors standard |

### 4.8 Cycle SFIA recommandé (si traitement)

**UX/UI Standard** — production frame Figma + alignement design-to-backlog, sans delivery code dans le même cycle.

### 4.9 Décision Morris requise

- **GO traitement R-UX-01** (frame Figma + cycle UX/UI) **ou**
- **GO maintien en réserve acceptée** pour la phase post-MVP

---

## 5. Réserve R-QA-04

### 5.1 Contexte observé

| Élément | Détail |
|---------|--------|
| **ID** | R-QA-04 |
| **Zone concernée** | Panneaux droite du dashboard (`/`) |
| **Statut** | **CLOSED** — PR #151 @ `2aa68f4` (2026-07-09) — Option A2 livrée |
| **Origine** | INC-01 — spike Figma fidelity |
| **Sévérité** | Mineure — non bloquante |

Les panneaux **« À faire aujourd'hui »** et **« Répartition »** affichent des **données mock statiques** (`mockChantiers.ts`), héritées du spike Figma. La liste centrale des chantiers utilise des **données réelles** (PostgreSQL).

### 5.2 Origine documentaire

| Document | Section / contenu |
|----------|-------------------|
| `07-delivery-inc-01/delivery-inc-01-decisions.md` | D-INC01-6 — mock conservés, report INC-05+ |
| `08-qa-test/inc-01/qa-reserves.md` | R-QA-04 ouverte — hors périmètre US INC-01 |
| `09-capitalization/inc-01-capitalization-report.md` | F4 — panneaux mock spike — reporté INC-05+ |
| `07-delivery-inc-01/pr-readiness-inc-01.md` | Prochaines actions réelles ❌ — mock panneaux droite |
| `08-qa-test/inc-01/test-scenarios.md` | Hors scope E2E — panneaux droite mockés |
| `06-figma-fidelity-spike/visual-comparison-report.md` | Panneau droit — statut OK visuel spike |
| INC-02 à INC-05 | R-QA-04 **inchangée** — hors périmètre chaque cycle |

### 5.3 Impact utilisateur

| Impact | Détail |
|--------|--------|
| **Confiance produit** | Dashboard d'entrée partiellement **fictif** — utilisateur voit des tâches et répartitions non reliées aux chantiers réels |
| **Cohérence navigation** | Lien hero « Prochaines actions » mène vers `/prochaines-actions` (données réelles) — **contraste** avec panneau droit mock |
| **Fonctionnel liste** | Cartes chantier centrales — données réelles, E2E couverts |

### 5.4 Impact qualité

| Dimension | Détail |
|-----------|--------|
| **QA** | Panneaux hors assertions E2E — jamais validés fonctionnellement |
| **Fidélité Figma** | Visuellement aligné spike (frame `38:502`) — mais contenu non branché DB |
| **Dette technique** | Composant `RightPanels` isolé du domaine `lib/prochaines-actions/` livré INC-05 |

### 5.5 Distinction données réelles vs mock

| Zone dashboard `/` | Source données | Statut |
|--------------------|----------------|--------|
| Liste chantiers (centre) | PostgreSQL — `lib/chantiers/` | **Réel** |
| Hero, sidebar, filtres | UI + DB | **Réel** (filtres sur liste réelle) |
| Panneau « À faire aujourd'hui » | `mockChantiers.todoItems` | **Mock** |
| Panneau « Répartition » | `mockChantiers.distribution` | **Mock** |
| Route `/prochaines-actions` | Agrégation `lib/prochaines-actions/` | **Réel** — hors dashboard |

**Observation :** la logique d'agrégation des prochaines actions **existe** (INC-05) mais n'est **pas branchée** sur les panneaux droite du dashboard.

### 5.6 Risque si non traitée

| Risque | Gravité |
|--------|---------|
| Dashboard trompeur — données fictives à l'entrée produit | **Élevée** (qualité perçue) |
| Dette reportée depuis INC-01 (5 incréments) | Moyenne |
| Extension produit sur dashboard instable | Moyenne |
| Blocage fonctionnel chantiers | **Aucun** |

### 5.7 Options de traitement

| Option | Description | Cycle suivant |
|--------|-------------|---------------|
| **T1** | Brancher panneaux sur agrégation réelle (`lib/prochaines-actions/`) | **Delivery** ciblé + **QA** Light |
| **T2** | Redesign panneaux + données réelles (si écart Figma) | **UX/UI** puis **Delivery** |
| **T3** | Retirer panneaux mock (simplification) | **Delivery** + décision UX Morris |
| **T4** | Maintenir acceptée — mock assumé | Aucun — dette documentée |

### 5.8 Cycle SFIA recommandé (si traitement)

1. **QA / validation Standard** (cadrage données attendues, scénarios E2E cibles) — optionnel si périmètre clair  
2. **Delivery ciblé** — branchement données réelles — après GO Morris  
3. **UX/UI** — seulement si redesign panneaux requis

### 5.9 Décision Morris requise

- **GO traitement R-QA-04** (brancher, redesigner ou retirer) **ou**
- **GO maintien en réserve acceptée** — dette dashboard assumée

### 5.10 Clôture (2026-07-09)

| Élément | Valeur |
|---------|--------|
| **Statut** | **CLOSED** |
| **Traitement** | T1 — branchement données réelles (`lib/prochaines-actions/` + statuts chantiers) |
| **PR** | #151 |
| **Merge commit** | `2aa68f4` |
| **E2E** | `r-qa-04-dashboard-panels.spec.ts` — PASS |
| **Rapport** | `08-qa-test/r-qa-04-dashboard-real-data-report.md` |
| **Décision** | Clôture documentaire Morris |

---

## 6. Analyse croisée R-UX-01 / R-QA-04

### 6.1 Liens identifiés

| Lien | Analyse |
|------|---------|
| **Cohérence UI** | Dashboard (P1 Figma validé) vs `/prochaines-actions` (P2 sans Figma) — **deux registres design différents** sur le parcours « actions à traiter » |
| **Qualité perçue** | Les deux réserves affectent la **crédibilité** du produit : mock à l'entrée, design non validé sur la vue transverse |
| **Dette MVP** | Toutes deux **reportées depuis INC-01 ou INC-05** — jamais bloquantes, jamais traitées |
| **Données prochaines actions** | INC-05 a livré l'agrégation réelle — **R-QA-04 pourrait s'appuyer sur ce socle** sans nouveau modèle métier |
| **Risque Option B** | Construire devis/facturation/auth sur un dashboard partiellement fictif et un écran transverse sans design source = **base UX/QA ambiguë** |

### 6.2 Les réserves sont-elles indépendantes ?

| Dimension | R-UX-01 | R-QA-04 | Indépendance |
|-----------|---------|---------|--------------|
| Écran | `/prochaines-actions` | Dashboard `/` | **Écrans distincts** |
| Nature dette | Design / méthode | Données / QA | **Types distincts** |
| Socle technique | UI patterns | `lib/prochaines-actions/` | **Lien fonctionnel possible** |
| Priorité utilisateur | Secondaire (navigation hero) | **Primaire** (page d'accueil) | **R-QA-04 plus visible** |

**Observation :** les réserves sont **distinctes** mais **complémentaires** sur la promesse « prochaines actions ». Traiter R-QA-04 en branchant l'agrégation INC-05 renforce la cohérence vers `/prochaines-actions` sans résoudre R-UX-01.

### 6.3 Besoin de reprise UX avant delivery

| Scénario | Reprise UX requise ? |
|----------|---------------------|
| R-QA-04 — branchement données seul | **Non** — delivery technique possible sous frame Figma existante |
| R-QA-04 — redesign panneaux | **Oui** — cycle UX/UI |
| R-UX-01 — frame Figma | **Oui** — cycle UX/UI avant ou en parallèle de delivery alignement |
| Les deux maintenues | **Non** — mais dette assumée pour Option B |

---

## 7. Options de traitement Option A

> **Observation :** trois options maximum — non actées.

### Option A1 — Traiter R-UX-01 puis R-QA-04

| Dimension | Contenu |
|-----------|---------|
| **Séquence** | 1) UX/UI frame Figma `/prochaines-actions` → 2) Delivery/QA branchement panneaux dashboard |
| **Bénéfice** | Gouvernance design d'abord — conformité standard design coverage ; puis cohérence données |
| **Risque** | Dashboard reste mock pendant le cycle UX — **entrée produit trompeuse** plus longtemps |
| **Dette évitée** | Dette design P2 ; puis dette données dashboard |
| **Cycles suivants** | UX/UI Standard → Delivery ciblé + QA Light |

### Option A2 — Traiter R-QA-04 puis R-UX-01

| Dimension | Contenu |
|-----------|---------|
| **Séquence** | 1) Delivery/QA branchement panneaux sur `lib/prochaines-actions/` → 2) UX/UI frame Figma `/prochaines-actions` |
| **Bénéfice** | **Vérité données à l'entrée produit** rapidement ; s'appuie sur socle INC-05 existant |
| **Risque** | Panneaux branchés sans redesign — écart visuel Figma possible ; `/prochaines-actions` reste sans frame |
| **Dette évitée** | Dette mock dashboard en priorité |
| **Cycles suivants** | Delivery ciblé + QA Light → UX/UI Standard |

### Option A3 — Maintenir temporairement les deux réserves

| Dimension | Contenu |
|-----------|---------|
| **Séquence** | Aucun traitement — passage direct Option B ou C |
| **Bénéfice** | Rapidité vers valeur produit (devis, auth, etc.) |
| **Risque** | Dashboard fictif + écran sans design source ; dette UX/QA s'aggrave si nouvelles features UI |
| **Dette assumée** | R-UX-01 + R-QA-04 ouvertes — documentées |
| **Condition de sortie** | Avant tout cycle delivery UI post-MVP — ou acceptation explicite Morris par écrit |

---

## 8. Recommandation

### Recommandation proposée (non décisionnelle)

**Observation :** R-QA-04 affecte la **page d'accueil** — point d'entrée principal — avec des données fictives alors que l'agrégation réelle existe (INC-05). R-UX-01 affecte un écran **secondaire** (accessible via hero) mais sans dette fonctionnelle.

**Recommandation proposée :** traiter **R-UX-01 et R-QA-04 avant l'ouverture de l'Option B**, afin d'éviter de construire les prochaines évolutions produit sur une base UX/QA encore ambiguë.

**Ordre suggéré (non acté) :** **Option A2** — R-QA-04 d'abord (vérité données dashboard), puis R-UX-01 (frame Figma P2). Alternative : **cycle UX/UI unique** couvrant les deux si Morris souhaite un seul gate design.

**Si Morris privilégie la rapidité produit :** Option A3 acceptable **uniquement** avec décision explicite d'accepter la dette dashboard + design P2.

> **Capitalization :** cette recommandation est une **proposition** — pas une décision validée.

---

## 9. Décisions Morris requises

| # | Décision | Type |
|---|----------|------|
| 1 | **GO traitement R-UX-01** maintenant **ou** maintien en réserve acceptée | Arbitrage |
| 2 | **GO traitement R-QA-04** maintenant **ou** maintien en réserve acceptée | Arbitrage |
| 3 | **GO ordre de traitement** — A1, A2, A3 ou séquence custom | Arbitrage |
| 4 | **GO ouverture cycle UX/UI** — frame Figma `/prochaines-actions` | GO cycle |
| 5 | **GO ouverture cycle QA** — scénarios E2E panneaux dashboard | GO cycle |
| 6 | **GO cycle delivery ciblé** — branchement panneaux (après cadrage) | GO cycle — pas dans ce document |
| 7 | **GO intégration Git** — commit / PR de ce cadrage Option A | GO Git |

**Décisions non requises dans ce cycle :** clôture réserves, merge, push, promotion SFIA v2.5 baseline.

---

## 10. Cycles suivants possibles

| # | Cycle | Déclencheur | Profil | Statut |
|---|-------|-------------|--------|--------|
| 1 | **UX/UI Standard** — frame Figma R-UX-01 | GO traitement R-UX-01 | Standard | Non lancé |
| 2 | **QA Light ou Standard** — cadrage E2E panneaux R-QA-04 | GO traitement R-QA-04 | Light / Standard | Non lancé |
| 3 | **Delivery ciblé** — branchement `RightPanels` | Après cadrage QA/UX | Standard | Non lancé |
| 4 | **Backlog Option B** — extension métier | Après décision Morris sur réserves | Standard | Non lancé |
| 5 | **Option C — Cadrage renforcé** | Si Morris choisit séquence 3 avant produit | Standard | Non lancé |

**Aucun de ces cycles n'est lancé par ce document.**

---

## 11. Garde-fous

| Garde-fou | Application |
|-----------|-------------|
| **Git = source de vérité** | Toute évolution versionnée |
| **Cursor ne décide pas** | Ce document = qualification, pas arbitrage |
| **Morris arbitre** | Traitement, ordre, maintien réserves |
| **SFIA v2.5 = candidate** | Testé sur ce cycle — v2.4 baseline |
| **Pas de code** | Aucune modification applicative |
| **Pas de PR / push** | Dans ce cycle |
| **Pas de clôture réserve** | Sans GO Morris explicite |
| **Options B et C** | Non lancées — rappel séquencement uniquement |
| **Observation ≠ décision** | Recommandations distinctes des décisions validées |

---

## 12. Verdict

### **READY FOR MORRIS REVIEW**

| Élément | Valeur |
|---------|--------|
| **Livrable** | Ce document de cadrage Option A |
| **Réserves qualifiées** | R-UX-01, R-QA-04 |
| **Correction** | Aucune — cadrage uniquement |
| **Décision Morris** | En attente — traitement, ordre, cycles suivants |
| **Prochaine étape** | Morris choisit A1, A2, A3 ou affine — puis GO cycle unique |

---

*Chantiers360 v2 — Option A Réserves d'abord — SFIA v2.5 candidate testé — v2.4 baseline — Morris décide.*
