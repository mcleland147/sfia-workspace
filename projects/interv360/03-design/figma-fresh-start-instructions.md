# Interv360 — Instructions Figma — Fresh start Design V2

**Type** : Instructions design  
**Projet** : Interv360 (PRJ-INTERV360)  
**Phase** : 03-design  
**Cycle** : Reprise Figma Design V2  
**Contexte** : Nouveau compte Figma / fichier vierge  
**Outil cible** : Figma  
**Statut** : Draft  
**Branche** : `design/interv360-figma-reprise-path`  
**Documents associés** : [`figma-reprise-path.md`](figma-reprise-path.md), [`figma-first-screen-reprise-instructions.md`](figma-first-screen-reprise-instructions.md)

---

## 1. Objectif

Documenter comment **reprendre Interv360 dans Figma Design V2** lorsque le **fichier Figma historique n'est pas accessible**.

Le nouveau compte Figma (avec licence) ne dispose pas forcément des anciennes frames, composants, styles, variables ou pages produites lors du jalon Figma V1.

La reprise Design V2 doit donc être possible **sans dépendre de l'historique Figma** — en partant d'un **fichier Figma neuf**, reconstruit à partir des références versionnées dans Git.

**Principe :** Git pilote le fonctionnel ; les captures PNG Figma V1 guident le niveau visuel ; Figma produit la nouvelle maquette présentable.

---

## 2. Hypothèse de travail

| Hypothèse | Détail |
|-----------|--------|
| **Nouveau compte Figma** | Compte avec licence, dédié à la suite Interv360 |
| **Pas d'accès garanti à l'ancien fichier** | Fichier V1 hors périmètre ou inaccessible |
| **Pas de composants historiques** | Aucune bibliothèque, style ou variable Figma V1 importable |
| **Références disponibles** | Captures PNG versionnées Git + specs `06-ux-ui/` + décisions cycle Penpot |
| **Objectif** | **Reconstruire proprement** — pas récupérer, dupliquer ou « patcher » l'historique |

**Conséquence :** les instructions de [`figma-first-screen-reprise-instructions.md`](figma-first-screen-reprise-instructions.md) qui supposent une duplication de frame restent valides sur le fond, mais la **méthode de départ** change (voir §12).

---

## 3. Sources disponibles

| Source | Usage |
|--------|-------|
| [`06-liste-demandes.png`](../02-architecture/figma-first-draft-screens/06-liste-demandes.png) | **Référence visuelle principale** — écran pilote |
| [`05-dashboard-sav.png`](../02-architecture/figma-first-draft-screens/05-dashboard-sav.png) | Référence niveau global — navigation, densité |
| [`07-fiche-demande-sav.png`](../02-architecture/figma-first-draft-screens/07-fiche-demande-sav.png) | Référence parcours qualification |
| [`08-planning-semaine.png`](../02-architecture/figma-first-draft-screens/08-planning-semaine.png) | Référence planning (écart jour vs semaine documenté) |
| [`09-fiche-intervention-mobile.png`](../02-architecture/figma-first-draft-screens/09-fiche-intervention-mobile.png) | Référence mobile technicien |
| [`10-compte-rendu-mobile.png`](../02-architecture/figma-first-draft-screens/10-compte-rendu-mobile.png) | Référence CR mobile |
| [`11-suivi-erreurs-integration.png`](../02-architecture/figma-first-draft-screens/11-suivi-erreurs-integration.png) | Référence erreurs intégration |
| [`12-vue-dirigeant.png`](../02-architecture/figma-first-draft-screens/12-vue-dirigeant.png) | Référence vue dirigeant |
| [`2026-06-28-figma-v1-closure-summary.md`](../02-architecture/2026-06-28-figma-v1-closure-summary.md) | Synthèse jalon V1 — qualité indicative, périmètre |
| [`screen-functional-specs.md`](../06-ux-ui/screen-functional-specs.md) | **Source fonctionnelle** — §6 Liste demandes |
| [`screen-inventory.md`](../06-ux-ui/screen-inventory.md) | Inventaire écrans, parcours, écarts |
| [`ux-ui-summary.md`](../06-ux-ui/ux-ui-summary.md) | Décisions UX transposées |
| [`figma-reprise-path.md`](figma-reprise-path.md) | Trajectoire outillage Design V2 |
| [`figma-first-screen-reprise-instructions.md`](figma-first-screen-reprise-instructions.md) | Instructions détaillées écran pilote |
| [`penpot-first-screen-cycle-summary.md`](penpot-first-screen-cycle-summary.md) | Enseignements cycle Penpot, garde-fous validés |

**Règle :** en cas d'écart entre capture Figma V1 et specs Git, **la spec Git prime** pour le contenu fonctionnel.

---

## 4. Création du fichier Figma Design V2

Actions manuelles dans Figma :

| # | Action |
|---|--------|
| 1 | **Créer un nouveau fichier** Figma dans le compte licencié |
| 2 | **Nommer le fichier** : `Interv360 — Design V2` |
| 3 | **Créer les pages** suivantes |

### Structure des pages

| Page | Rôle |
|------|------|
| `00 — Cover` | Couverture projet, contexte, version |
| `01 — Design principles` | Principes visuels, direction enterprise clean |
| `02 — User journeys` | Parcours utilisateur (référence Git) |
| `03 — Screens` | Écrans desktop MVP — **première frame ici** |
| `04 — Dashboards` | Dashboard SAV et vue dirigeant (futur) |
| `05 — Mobile` | Écrans mobile technicien (futur) |
| `06 — Components` | Composants locaux stabilisés (progressif) |
| `99 — Archive` | Explorations, brouillons, références temporaires |

| # | Action (suite) |
|---|----------------|
| 4 | Sur la page **`03 — Screens`**, créer la première frame desktop |

### Première frame

| Propriété | Valeur |
|-----------|--------|
| **Nom** | `Liste demandes — Design V2` |
| **Dimensions** | 1440 × 900 |
| **Type** | Desktop — layout applicatif |

---

## 5. Utilisation des captures PNG

Les captures Figma V1 versionnées dans Git sont des **références visuelles** — pas des sources fonctionnelles définitives.

| Instruction | Détail |
|-------------|--------|
| **Importer ou placer** | `06-liste-demandes.png` dans Figma, à côté de la nouvelle frame (page `03 — Screens` ou `99 — Archive`) |
| **Usage** | Guide de structure, densité, palette, finition — **pas** calque à modifier |
| **Ne pas modifier Git** | Les PNG versionnés restent intacts dans le dépôt |
| **Pas de recopie pixel-perfect** | Reconstruire une version propre, alignée specs Git |
| **Retirer ou archiver** | La référence PNG peut rester sur `99 — Archive` une fois la frame validée |

**Autres captures :** conserver les PNG 05–12 comme références de niveau global pour les écrans suivants — pas nécessaires pour le premier écran pilote.

---

## 6. Recréation du premier écran Liste demandes

Méthode de reconstruction depuis zéro (page `03 — Screens`) :

| # | Étape |
|---|-------|
| 1 | **Créer le layout applicatif** — frame 1440 × 900, zones sidebar + contenu principal |
| 2 | **Recréer la navigation / sidebar** — menu principal, état actif sur Demandes |
| 3 | **Recréer le header** — contexte utilisateur, breadcrumb optionnel |
| 4 | **Créer le titre** — `Demandes SAV` |
| 5 | **Créer le CTA** — bouton primaire `Nouvelle demande` |
| 6 | **Créer la recherche** — champ `Rechercher une demande` |
| 7 | **Créer les filtres** — Statut, Canal, Période |
| 8 | **Créer la table** — en-tête + 6+ lignes fictives représentatives |
| 9 | **Créer les badges statuts** — pills STAT-01, STAT-02, STAT-03 |
| 10 | **Créer les badges indicateurs** — pills Retard (STAT-07), Anomalie d'intégration (STAT-08) |
| 11 | **Ajouter le message métier** — rappel : liste = point d'accès |
| 12 | **Vérifier les garde-fous** — §8 ci-dessous |

**Référence croisée :** détail fonctionnel et critères de validation dans [`figma-first-screen-reprise-instructions.md`](figma-first-screen-reprise-instructions.md).

---

## 7. Contenu fonctionnel à respecter

| Zone | Contenu |
|------|---------|
| Titre | `Demandes SAV` |
| CTA | `Nouvelle demande` |
| Recherche | `Rechercher une demande` |
| Filtres | Statut, Canal, Période |
| Colonnes | Référence, Client, Canal, Priorité, Statut, Date, Affectation, Indicateurs, Action |
| Statuts métier | À qualifier (STAT-01), Qualifiée (STAT-02), Planifiée (STAT-03) |
| Indicateurs | Retard (STAT-07), Anomalie d'intégration (STAT-08) |
| Action ligne | `Ouvrir` |
| Message métier | La liste est un **point d'accès** — pas la source de vérité détaillée ; consulter la fiche demande |

**Canaux visibles par ligne :** CRM, Email, Manuel (`screen-functional-specs.md` §6.5).

---

## 8. Garde-fous fonctionnels

| Garde-fou | Application |
|-----------|-------------|
| Pas de nouveaux statuts | STAT-01 à STAT-08 uniquement |
| STAT-07 = Retard | Indicateur distinct — **pas** statut métier en colonne Statut |
| STAT-08 = Anomalie d'intégration | Indicateur distinct — **pas** statut métier |
| Interv360 = source de vérité locale | Données opérationnelles dans l'application |
| CRM simulé ≠ source de vérité | Sync CRM non bloquante |
| Dashboard ≠ source de vérité | Visibilité / priorisation — ne pas confondre avec la liste |
| Liste ≠ source de vérité détaillée | Fiche demande fait foi |
| Clôture locale non bloquée | Ne pas suggérer blocage sur synchronisation CRM |
| STAT-08 ne rouvre pas l'intervention | Anomalie ≠ retour cycle SAV |

---

## 9. Composants locaux à créer

Composants minimum à créer dans le fichier (page `06 — Components` ou inline dans la frame, puis déplacés) :

| Composant | Rôle |
|-----------|------|
| Sidebar item | Entrée menu avec état normal / actif |
| Bouton primaire | CTA `Nouvelle demande` |
| Filtre dropdown | Statut, Canal, Période |
| Champ recherche | Placeholder, bordure, icône |
| Badge statut | Pills STAT-01 / STAT-02 / STAT-03 |
| Badge indicateur | Pills STAT-07 Retard, STAT-08 Anomalie |
| Table header | Ligne d'en-tête colonnes |
| Table row | Ligne données avec alignements |
| Message métier | Zone discrète sous le tableau |

**Ne pas** viser un design system complet au départ — composants **locaux simples**, propres et réutilisables-ready pour les écrans suivants.

---

## 10. Standard visuel attendu

| Critère | Attendu |
|---------|---------|
| Fidélité | High fidelity raisonnable |
| Niveau | **Au moins équivalent** à `06-liste-demandes.png` (indicatif 8,3/10 — `2026-06-28-figma-v1-closure-summary.md`) |
| Style | Enterprise clean — palette teal/gris, professionnel |
| Densité | Professionnelle — tableau lisible sans surcharge |
| Badges | Pills colorées sémantiques |
| Filtres | Soignés — bordures, placeholders |
| Tableau | Card ou surface délimitée, séparateurs clairs |
| Typographie | Hiérarchie forte — titre, labels, sous-titre discret |
| Export | PNG propre possible pour revue |

**Direction V1 documentée :** enterprise clean, dashboards SAV / dirigeant séparés, mobile terrain — à retrouver progressivement sur les pages dédiées.

---

## 11. Export de revue

Après création de la frame `Liste demandes — Design V2`, exporter une capture PNG si nécessaire pour revue locale :

```
projects/interv360/03-design/exports/figma-liste-demandes-design-v2.png
```

| Règle | Détail |
|-------|--------|
| **Ne pas commiter** l'export sans validation explicite | Trace locale uniquement par défaut |
| **Ne pas confondre** avec les captures V1 versionnées | Chemin et nom distincts |

---

## 12. Ce qui change par rapport au scénario initial

| Ancien scénario | Nouveau scénario |
|-----------------|------------------|
| Accès au fichier Figma V1 | **Nouveau compte** sans historique |
| Duplication de frame / fichier possible | **Reconstruction** depuis PNG + specs Git |
| Styles et composants potentiellement existants | **Composants locaux à recréer** |
| Reprise rapide par copie | Reprise **plus longue** mais maîtrisée et traçable |
| Dépendance à l'outil Figma historique | Dépendance à **Git** comme source de vérité |
| Variables / tokens Figma V1 réutilisables | Tokens à recréer progressivement si besoin |

**Document complémentaire :** [`figma-first-screen-reprise-instructions.md`](figma-first-screen-reprise-instructions.md) reste la référence détaillée pour l'écran pilote ; ce document précise le **point de départ** sans fichier historique.

---

## 13. Prochaine action

Après validation de ce document :

1. **Créer** le fichier Figma `Interv360 — Design V2` avec la structure de pages §4.
2. **Recréer** la frame `Liste demandes — Design V2` sur `03 — Screens` (méthode §6).
3. **Exporter** une capture PNG si nécessaire (§11).
4. **Documenter** la revue dans un futur [`figma-first-screen-review.md`](figma-first-screen-review.md) — qualité vs V1, écarts spec, composants stabilisés.

---

*Instructions Figma Interv360 — Fresh start Design V2 — Draft.*
