# Interv360 — Instructions Figma — Reprise Liste demandes

**Type** : Instructions design  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 03-design  
**Cycle** : Reprise Figma Design V2  
**Écran** : Liste demandes (E2)  
**Outil cible** : Figma  
**Statut** : Draft  
**Branche** : `design/interv360-figma-reprise-path`  
**Documents associés** : [`figma-reprise-path.md`](figma-reprise-path.md), [`penpot-first-screen-cycle-summary.md`](penpot-first-screen-cycle-summary.md)

---

## 1. Objectif

Préparer la **reprise de l'écran Liste demandes** dans Figma Design V2.

Figma est l'outil cible pour produire une **maquette présentable** — high fidelity raisonnable — alignée sur :

- les **specs Git** (`06-ux-ui/`) comme source fonctionnelle ;
- le **niveau visuel Figma V1** (`06-liste-demandes.png`) comme référence de finition.

Cette reprise fait suite au cycle Penpot, qui a validé le périmètre fonctionnel et les garde-fous, mais n'a pas atteint le standard visuel attendu.

---

## 2. Pourquoi reprendre cet écran en premier

| Raison | Détail |
|--------|--------|
| **Écran pilote prioritaire** | Recommandé dans [`penpot-screen-prioritization.md`](penpot-screen-prioritization.md) et [`figma-reprise-path.md`](figma-reprise-path.md) §6 |
| **Déjà testé dans Penpot** | V1, V1.1, V2 — périmètre et garde-fous validés documentairement |
| **Central au parcours SAV** | Point d'accès principal P1 Qualification et P9 Création multi-canal |
| **Valide le standard Design V2** | Premier test Figma post-décision outillage |
| **Base composants réutilisables** | Tableau, badges statuts, badges indicateurs, filtres, recherche, CTA, navigation |

**Utilisateurs principaux :** Responsable SAV, Assistant administratif (`screen-functional-specs.md` §6.2).

---

## 3. Références à utiliser

| Source | Usage |
|--------|-------|
| [`06-liste-demandes.png`](../02-architecture/figma-first-draft-screens/06-liste-demandes.png) | **Référence visuelle principale** — structure, finition, densité |
| [`screen-functional-specs.md`](../06-ux-ui/screen-functional-specs.md) | **Source fonctionnelle** — §6 Liste demandes |
| [`screen-inventory.md`](../06-ux-ui/screen-inventory.md) | Inventaire écran, parcours, écarts Figma V1 |
| [`ux-ui-summary.md`](../06-ux-ui/ux-ui-summary.md) | Décisions UX transposées |
| [`figma-reprise-path.md`](figma-reprise-path.md) | Trajectoire outillage, priorités, garde-fous |
| [`penpot-first-screen-cycle-summary.md`](penpot-first-screen-cycle-summary.md) | Enseignements cycle Penpot, décision outillage |
| [`penpot-visual-quality-benchmark.md`](penpot-visual-quality-benchmark.md) | Critères qualité, écarts Penpot vs Figma |

**Règle :** en cas d'écart entre la capture Figma V1 et les specs Git, **la spec Git prime** pour le contenu fonctionnel.

---

## 4. Périmètre fonctionnel de l'écran

L'écran Liste demandes doit permettre de :

| Fonction | Description |
|----------|-------------|
| **Lister** | Afficher les demandes SAV en tableau |
| **Accéder à une fiche** | Navigation vers fiche demande SAV via action Ouvrir |
| **Rechercher** | Recherche texte sur demandes / clients |
| **Filtrer** | Par statut, canal, période (et priorité selon spec §6.6) |
| **Visualiser statuts métier** | STAT-01, STAT-02, STAT-03 en colonne Statut |
| **Visualiser indicateurs** | STAT-07 Retard, STAT-08 Anomalie d'intégration — **distincts** du statut |
| **Créer** | CTA Nouvelle demande (création manuelle STAT-01 si prévu MVP) |
| **Rappeler le rôle de la liste** | Message métier — liste = point d'accès, pas source de vérité détaillée |

**Parcours associés :** P1 Qualification (principal), P9 Création multi-canal (principal), P7 Pilotage retards (secondaire).

---

## 5. Contenu à conserver

| Zone | Contenu |
|------|---------|
| Titre | `Demandes SAV` |
| CTA primaire | `Nouvelle demande` |
| Recherche | `Rechercher une demande` (placeholder soigné) |
| Filtres | Statut, Canal, Période |
| Tableau | Demandes SAV — lignes fictives représentatives (6+ lignes recommandées en maquette) |
| Colonnes | Référence, Client, Canal, Priorité, Statut, Date, Affectation, Indicateurs, Action |
| Statuts métier (colonne Statut) | À qualifier (STAT-01), Qualifiée (STAT-02), Planifiée (STAT-03) |
| Indicateurs (colonne Indicateurs) | `Retard` (STAT-07), `Anomalie d'intégration` (STAT-08) |
| Action ligne | `Ouvrir` |
| Message métier | Rappel : la liste est un point d'accès — consulter la fiche demande pour le détail |

**Canaux visibles :** CRM, Email, Manuel (`screen-functional-specs.md` §6.5, §6.8).

**États d'écran à prévoir (spec §6.7) :** liste nominale (prioritaire en V2), liste vide, filtres actifs — états secondaires documentables ultérieurement.

---

## 6. Garde-fous fonctionnels

| Garde-fou | Application |
|-----------|-------------|
| Pas de nouveaux statuts | STAT-01 à STAT-08 uniquement |
| STAT-07 = indicateur Retard | Badge parallèle — **pas** statut métier en colonne Statut |
| STAT-08 = indicateur Anomalie d'intégration | Badge distinct — **pas** statut métier |
| Interv360 = source de vérité locale | Données opérationnelles dans l'application |
| CRM simulé ≠ source de vérité | Sync CRM non bloquante |
| Liste = point d'accès | **Pas** source de vérité détaillée — fiche demande fait foi |
| Dashboard = visibilité / priorisation | **Pas** source de vérité — ne pas transformer la liste en dashboard |
| Clôture locale non bloquée | Ne pas suggérer blocage sur synchronisation CRM |
| STAT-08 ne rouvre pas l'intervention | Anomalie ≠ retour cycle SAV |
| Wording statuts unifié | Référence `status-mapping.md` — libellés FR cohérents |
| Canal d'origine visible | Toujours affiché par ligne (`screen-functional-specs.md` §6.8) |

---

## 7. Standard visuel attendu

| Critère | Attendu |
|---------|---------|
| Fidélité | **High fidelity raisonnable** — maquette présentable |
| Revue métier | Niveau suffisant pour démonstration et validation |
| Continuité V1 | Au moins équivalent à `06-liste-demandes.png` (indicatif 8,3/10) |
| Style | Enterprise clean — palette teal/gris, densité professionnelle |
| Tableau | Lisible, dense, dans une surface card si pertinent |
| Badges | Pills colorées sémantiques (statuts + indicateurs) |
| Filtres / recherche | Soignés — bordures, placeholders, icônes si possible |
| CTA | `Nouvelle demande` visible et premium |
| Navigation | Sidebar ou navigation horizontale avec **état actif** |
| Typographie | Hiérarchie forte — titre 24 px, labels colonnes, sous-titre discret |
| Export | PNG propre possible pour trace de revue Git |

**Inspiration Penpot :** le cycle Penpot a identifié les éléments à soigner (card tableau, pills, navigation active) — Figma doit les atteindre avec fiabilité d'export supérieure.

---

## 8. Composants à stabiliser dans Figma

Composants à créer ou consolider localement dans le fichier Design V2 — **réutilisables-ready**, sans design system complet dès cette première reprise :

| Composant | Rôle |
|-----------|------|
| Layout applicatif | Frame 1440 × 900, structure sidebar + contenu |
| Navigation / sidebar | Menu principal avec état actif |
| Header | Contexte utilisateur, breadcrumb optionnel |
| Tableau demandes | En-tête + lignes, séparateurs |
| Ligne tableau | Hauteur, alignements, alternance optionnelle |
| Badge statut | Pills STAT-01 / STAT-02 / STAT-03 |
| Badge indicateur | Pills STAT-07 Retard, STAT-08 Anomalie |
| Champ recherche | Placeholder, bordure, icône |
| Filtre | Bouton / dropdown Statut, Canal, Période |
| Bouton primaire | CTA `Nouvelle demande` |
| Message métier | Zone discrète sous le tableau |

**Ne pas** viser une bibliothèque `Components` complète dès cette session — stabiliser les composants **dans la frame pilote** d'abord.

---

## 9. Écarts connus Figma V1 / specs Git

| Sujet | Figma V1 | Spec Git / décision | Action Design V2 |
|-------|----------|---------------------|------------------|
| Qualité globale | Présentable mais **non définitive** (8,3/10) | Design V2 = corriger écarts documentés | Reprendre V1 comme base, corriger selon specs |
| Filtres canal | Présents partiellement | Renforcer filtres CRM / email / manuel (`screen-functional-specs.md` §6.9) | Filtres canal explicites et visibles |
| Lien dashboard → liste | Implicite | À expliciter (`screen-functional-specs.md` §6.9) | Documenter le lien ; pas obligatoire sur cette frame |
| Statuts affichés | Wording proche specs | STAT-01 à STAT-08 — wording unifié FR | Vérifier libellés `status-mapping.md` |
| STAT-07 / STAT-08 | Parfois proches visuellement des statuts | Indicateurs **distincts** de la colonne Statut | Colonne Indicateurs dédiée, pills séparées |
| Liste vs source de vérité | Peut sembler exhaustive | Liste = **point d'accès** uniquement | Message métier visible |
| Dashboard vs liste | Capture V1 dense | Liste ≠ dashboard — pas de KPI | Ne pas ajouter cartes KPI ou tendances |
| Colonnes Figma V1 | ID, Client, Statut, Priorité, Source, SLA… | Spec : Référence, Client, Canal, Priorité, Statut, Date, Affectation, Indicateurs, Action | Aligner colonnes sur spec Git (Penpot V1.1 comme référence structurelle) |
| Penpot V2 | Inférieur à Figma V1 | Figma = cible high fidelity | Ne pas reproduire les limites export Penpot |

---

## 10. Instructions de reprise dans Figma

### Préconditions

| # | Prérequis |
|---|-----------|
| 1 | Fichier Figma Interv360 accessible (fichier V1 existant ou nouveau fichier Design V2) |
| 2 | Sources Git relues — §6 `screen-functional-specs.md`, §6 `screen-inventory.md` |
| 3 | Capture `06-liste-demandes.png` consultée — **ne pas modifier** la version Git |
| 4 | [`figma-reprise-path.md`](figma-reprise-path.md) et synthèse Penpot relues |

### Étapes de travail

| # | Action |
|---|--------|
| 1 | **Dupliquer ou recréer** l'écran à partir de `06-liste-demandes.png` dans le fichier Design V2 (page Screens ou équivalent) |
| 2 | **Renommer** la frame : `Liste demandes — Design V2` |
| 3 | **Conserver** le niveau visuel Figma V1 — ne pas dégrader la finition |
| 4 | **Corriger** le contenu selon specs Git — colonnes, filtres canal, indicateurs, message métier |
| 5 | **Stabiliser** les composants locaux (badges, filtres, tableau, CTA) |
| 6 | **Vérifier** tous les garde-fous fonctionnels (§6) |
| 7 | **Exporter** une capture PNG de revue si nécessaire — chemin local recommandé : `projects/interv360/03-design/exports/figma-liste-demandes-design-v2.png` (ne pas commiter sans décision explicite) |
| 8 | **Documenter** les écarts résiduels dans Git — futur `figma-first-screen-review.md` |

### Dimensions recommandées

| Élément | Valeur |
|---------|--------|
| Frame | 1440 × 900 (desktop) |
| Style | Enterprise clean, cohérent Figma V1 |

---

## 11. Critères de validation

| # | Critère | Validé |
|---|---------|:------:|
| 1 | Frame `Liste demandes — Design V2` créée dans Figma | ☐ |
| 2 | Niveau visuel **au moins équivalent** à Figma V1 | ☐ |
| 3 | Specs Git respectées (colonnes, actions, statuts, message) | ☐ |
| 4 | Aucun nouveau statut créé | ☐ |
| 5 | STAT-07 / STAT-08 représentés comme **indicateurs** distincts | ☐ |
| 6 | Tableau lisible et esthétique | ☐ |
| 7 | Recherche et filtres présents (statut, canal, période) | ☐ |
| 8 | CTA `Nouvelle demande` présent | ☐ |
| 9 | Action `Ouvrir` présente sur chaque ligne | ☐ |
| 10 | Message métier présent (liste ≠ source de vérité) | ☐ |
| 11 | Export PNG possible si demandé | ☐ |
| 12 | Écarts documentés dans Git | ☐ |

---

## 12. Hors périmètre

Cette reprise **ne couvre pas** :

- production des 8 autres écrans MVP ;
- design system complet (bibliothèque globale, tokens exhaustifs) ;
- backlog, user stories, tests, code, API, SQL, BPMN ;
- delivery ;
- modification de `06-ux-ui/` sans décision explicite ;
- modification des captures Figma V1 versionnées Git ;
- production Penpot high fidelity (décision outillage rendue).

---

## 13. Prochaine action

Après validation de ce document :

1. **Reprendre** l'écran dans Figma — créer ou mettre à jour `Liste demandes — Design V2`.
2. **Exporter** une capture PNG si nécessaire pour revue locale.
3. **Documenter** la revue dans un futur [`figma-first-screen-review.md`](figma-first-screen-review.md) — écarts spec, qualité vs V1, composants stabilisés.

---

*Instructions Figma Interv360 — Reprise Liste demandes — Draft.*
