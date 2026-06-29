# Interv360 — Reprise Figma Design V2

**Type** : Cadrage design  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 03-design  
**Cycle** : Reprise Figma Design V2  
**Statut** : Draft  
**Branche** : `design/interv360-figma-reprise-path`  
**Documents associés** : [`penpot-first-screen-cycle-summary.md`](penpot-first-screen-cycle-summary.md), [`penpot-visual-quality-benchmark.md`](penpot-visual-quality-benchmark.md), [`penpot-screen-prioritization.md`](penpot-screen-prioritization.md)

---

## 1. Objectif

Acter **Figma** comme outil cible pour la production des maquettes **Interv360 Design V2** — high fidelity raisonnable, présentables en revue métier et en démonstration.

Cette décision fait suite au **cycle Penpot premier écran** (PR #23, merge `d7ed13d`), qui a testé Penpot self-host + Cursor MCP sur l'écran pilote **Liste demandes** et conclu que Penpot ne remplace pas Figma pour le high fidelity.

**Principe directeur :** Git pilote le fonctionnel ; Figma produit la représentation visuelle ; Penpot reste une trace secondaire utile (wireframe, preuve Git → design).

---

## 2. Décision issue du cycle Penpot

Le cycle Penpot a permis de valider :

- la **connexion MCP** et la capacité **Git → design** (lecture specs, création de frames) ;
- la production de **V1** (preuve MCP), **V1.1** (wireframe avancé) et **V2 visual standard** (montée en qualité visuelle) ;
- le respect des **garde-fous fonctionnels** (statuts, indicateurs, message métier) ;
- les **limites** de Penpot pour atteindre un niveau visuel comparable aux références Figma V1.

**Constat V2 :** correcte mais **inférieure** à `06-liste-demandes.png` — export PNG fragile, rendu incomplet, finition insuffisante pour démonstration.

**Penpot n'est pas retenu** comme remplaçant Figma pour le high fidelity Interv360 / SFIA.

| Outil | Rôle retenu |
|-------|-------------|
| **Figma** | Final UI — maquettes présentables, démonstrations, design high fidelity |
| **Penpot** | Wireframe avancé — documentation visuelle, preuve MCP, exploration Git → design |
| **Git** | Source fonctionnelle — architecture, méthode SFIA, décisions de conception |

Voir : [`penpot-first-screen-cycle-summary.md`](penpot-first-screen-cycle-summary.md) §4, [`penpot-visual-quality-benchmark.md`](penpot-visual-quality-benchmark.md) §12.

---

## 3. Pourquoi reprendre Figma

| Motivation | Détail |
|------------|--------|
| **Qualité visuelle** | Figma V1 déjà à un niveau présentable (indicatif 8,3/10 — `figma-v1-closure-summary.md`) ; Penpot V2 n'atteint pas ce standard |
| **Écosystème design** | Composants, styles, variants, bibliothèques — capitalisation plus mature |
| **Productivité** | Maquettes présentables plus rapidement qu'avec MCP Penpot cadré en détail |
| **Rendu export** | Exports PNG/PDF fiables pour revue et démonstration |
| **Crédibilité démo** | Maquettes valorisables commercialement et en revue métier |
| **Continuité V1** | Premières maquettes Figma V1 déjà produites — reprise sans repartir de zéro visuel |
| **Enseignements Penpot conservés** | Layout, garde-fous, priorisation et gabarit frame réutilisables comme input documentaire |

**Ce que le cycle Penpot apporte à la reprise Figma :**

- validation du périmètre fonctionnel Liste demandes ;
- gabarit layout ([`penpot-application-frame-template.md`](penpot-application-frame-template.md)) ;
- liste de garde-fous testés en conditions réelles ;
- benchmark qualité documenté — évite de re-tester Penpot pour le high fidelity.

---

## 4. Sources Git de référence

**Git reste la source fonctionnelle.** Figma sert à produire la représentation visuelle alignée sur ces sources.

| Source | Usage |
|--------|-------|
| [`screen-inventory.md`](../06-ux-ui/screen-inventory.md) | Inventaire écrans, parcours, écarts Figma V1 |
| [`screen-functional-specs.md`](../06-ux-ui/screen-functional-specs.md) | Specs fonctionnelles par écran — colonnes, actions, états |
| [`ux-ui-summary.md`](../06-ux-ui/ux-ui-summary.md) | Décisions UX transposées, synthèse phase 06-ux-ui |
| [`penpot-screen-prioritization.md`](penpot-screen-prioritization.md) | Ordre de production, écran pilote, vagues |
| [`penpot-first-screen-cycle-summary.md`](penpot-first-screen-cycle-summary.md) | Synthèse cycle Penpot, décision outillage |
| [`penpot-visual-quality-benchmark.md`](penpot-visual-quality-benchmark.md) | Benchmark qualité, critères V2, décision §12 |
| [`figma-v1-closure-summary.md`](../02-architecture/figma-v1-closure-summary.md) | Clôture jalon Figma V1, qualité indicative, exclusions |

**Règle :** en cas d'écart entre capture Figma V1 et spec Git, **la spec Git prime** pour le contenu fonctionnel.

---

## 5. Références Figma V1

Captures versionnées : `projects/interv360/02-architecture/figma-first-draft-screens/` — **lecture seule, ne pas modifier**.

| Capture | Usage reprise Design V2 |
|---------|-------------------------|
| `05-dashboard-sav.png` | Niveau finition dashboard opérationnel, KPI, alertes |
| **`06-liste-demandes.png`** | **Référence pilote** — écran Liste demandes (structure, tableau, badges) |
| `07-fiche-demande-sav.png` | Fiche demande — sections, checklist, actions qualification |
| `08-planning-semaine.png` | Référence visuelle planning — **attention** : spec Git = vue **jour** par défaut |
| `09-fiche-intervention-mobile.png` | Layout mobile terrain, fiche intervention |
| `10-compte-rendu-mobile.png` | Formulaire clôture mobile, signature optionnelle |
| `11-suivi-erreurs-integration.png` | Anomalies STAT-08, messages métier |
| `12-vue-dirigeant.png` | Pilotage consolidé, distinct du dashboard SAV |

Les captures Figma V1 sont des **références de niveau visuel et de structure**, pas des spécifications fonctionnelles définitives. Elles ne doivent pas être recopiées mécaniquement si les specs Git ont évolué (ex. planning jour vs semaine).

---

## 6. Priorité de reprise des écrans

Reprise de la logique documentée dans [`penpot-screen-prioritization.md`](penpot-screen-prioritization.md), adaptée à Figma comme outil cible.

| Ordre | Écran | Référence Figma V1 | Vague |
|-------|-------|-------------------|-------|
| **1** | **Liste demandes** | `06-liste-demandes.png` | Pilote — **commencer ici** |
| 2 | Fiche demande SAV | `07-fiche-demande-sav.png` | Vague 1 |
| 3 | Planning | `08-planning-semaine.png` (écarts spec à traiter) | Vague 2 |
| 4 | Fiche intervention mobile | `09-fiche-intervention-mobile.png` | Vague 2 |
| 5 | Compte rendu mobile | `10-compte-rendu-mobile.png` | Vague 2 |
| 6 | Suivi erreurs intégration | `11-suivi-erreurs-integration.png` | Vague 3 |
| 7 | Dashboard SAV | `05-dashboard-sav.png` | Vague 4 |
| 8 | Vue dirigeant | `12-vue-dirigeant.png` | Vague 4 |

**Écran pilote : Liste demandes** — déjà testé dans Penpot (V1, V1.1, V2). La reprise Figma capitalise sur ce travail documentaire sans repartir du fonctionnel.

**Hors liste immédiate :** Détail reprise manuelle (E8) — absent Figma V1, à traiter en vague 3 après suivi erreurs.

---

## 7. Garde-fous fonctionnels

Reprise des garde-fous validés pendant le cycle Penpot et documentés dans `06-ux-ui/` :

| Garde-fou | Application |
|-----------|-------------|
| Pas de nouveaux statuts | STAT-01 à STAT-08 uniquement |
| STAT-07 = indicateur retard | Badge parallèle — **pas** statut métier |
| STAT-08 = anomalie d'intégration | Badge distinct — **pas** statut métier |
| Interv360 = source de vérité locale | Données opérationnelles dans l'application |
| CRM simulé ≠ source de vérité | Sync CRM non bloquante pour clôture locale |
| Dashboard = visibilité / priorisation | **Pas** source de vérité autonome |
| Liste = point d'accès | Consulter la fiche demande pour le détail |
| Clôture locale non bloquée | STAT-06 valide même si sync CRM échoue |
| STAT-08 ne rouvre pas l'intervention | Anomalie ≠ retour cycle SAV |
| Message métier d'abord | Libellés compréhensibles avant détail technique |
| Planning vue jour | Spec Git prime sur capture Figma semaine |

---

## 8. Standard attendu Figma Design V2

| Critère | Attendu |
|---------|---------|
| Fidélité | **High fidelity raisonnable** — maquette présentable, pas wireframe |
| Démonstration | Niveau suffisant pour revue métier et démo commerciale |
| Composants | Réutilisables ou réutilisables-ready (badges, header, tableau, filtres) |
| Cohérence V1 | Continuité visuelle avec Figma V1 (enterprise clean, palette, densité) |
| Alignement specs | **Strict** avec `06-ux-ui/` — pas de dérive fonctionnelle |
| Export | Propre si nécessaire (PNG pour revue Git) |
| Lisibilité métier | Hiérarchie claire, wording FR unifié (`status-mapping.md`) |
| Écarts documentés | Tout écart Figma V1 / spec Git tracé dans Git |

**Niveau cible :** au moins équivalent à Figma V1 présentable (8,3/10 indicatif), avec corrections des écarts identifiés en revue V1 et alignement specs UX/UI reprise.

---

## 9. Ce que le cycle Figma ne doit pas faire immédiatement

| Hors périmètre immédiat | Raison |
|-------------------------|--------|
| Produire les 8 écrans d'un coup | Reprise progressive par vagues |
| Design system complet dès le départ | Composants émergent du pilote |
| Backlog / user stories | Phase delivery ultérieure |
| Tests applicatifs | Hors phase design |
| Code / API / SQL / BPMN | Hors phase design |
| Modifier `06-ux-ui/` sans décision explicite | Specs = source fonctionnelle |
| Modifier captures Figma V1 versionnées | Références lecture seule |
| Reprendre Penpot pour high fidelity | Décision outillage rendue |

---

## 10. Prochaine action

Créer le document d'instructions pour la reprise de l'écran pilote :

**[`figma-first-screen-reprise-instructions.md`](figma-first-screen-reprise-instructions.md)**

Objectif : préparer la reprise de **Liste demandes** dans Figma en s'appuyant sur :

- `06-liste-demandes.png` — référence visuelle principale ;
- `06-ux-ui/` — specs fonctionnelles (§ Liste demandes) ;
- enseignements du cycle Penpot (gabarit layout, garde-fous, benchmark) ;
- standard Design V2 attendu (§8).

---

*Cadrage Interv360 — Reprise Figma Design V2 — Draft.*
