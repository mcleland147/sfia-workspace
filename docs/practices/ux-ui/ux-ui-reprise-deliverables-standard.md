# Standard des livrables — Reprise UX/UI documentaire

**Type** : Standard documentaire SFIA  
**Domaine** : UX/UI — reprise documentaire  
**Statut** : Draft  
**Usage** : Réutilisable

---

## 1. Objectif du standard

Ce document **normalise les livrables** attendus lors d'un cycle de reprise UX/UI documentaire post-architecture fonctionnelle.

Il précise pour chaque livrable :

- son **objectif** ;
- son **contenu minimal** ;
- ses **entrées nécessaires** ;
- ses **sorties attendues** ;
- ses **exclusions** ;
- ses **critères qualité**.

Ce standard est **générique** : il s'applique à tout projet SFIA. Le cycle Interv360 `06-ux-ui/` en est une **référence d'application** possible.

---

## 2. Vue d'ensemble des livrables

| Ordre | Livrable | Rôle | Sortie attendue | Ne doit pas produire |
|:-----:|----------|------|-----------------|----------------------|
| 1 | `ux-ui-reprise-analysis.md` | État des lieux | Inventaire existant, écarts, proposition de cycle | Parcours détaillés, specs écran, maquette |
| 2 | `ux-ui-reprise-scope.md` | Cadrer le cycle | Périmètre, sources, livrables, exclusions | Parcours finalisés, inventaire complet |
| 3 | `user-journeys.md` | Parcours utilisateurs | Parcours alignés statuts / objets / écrans | User stories, wireframes |
| 4 | `screen-inventory.md` | Inventaire écrans | Liste écrans, matrices, écarts visuels | Specs détaillées, composants |
| 5 | `screen-functional-specs.md` | Specs fonctionnelles écran | Comportements, états, actions par écran | Code, maquette, API |
| 6 | `dashboard-ux-view.md` | Vues dashboard | KPI, alertes, vues par profil | Maquette UI, composants front |
| 7 | `ux-ui-summary.md` | Synthèse | Vision consolidée alignée fonctionnel | Nouvelles décisions structurantes |
| 8 | `2026-06-28-ux-ui-cycle-closure.md` | Clôture | Livrables, garde-fous, suites | Backlog, delivery, tests |

**Emplacement recommandé projet :** `projects/<projet>/06-ux-ui/` (ou équivalent).

---

## 3. État des lieux UX/UI

**Fichier :** `ux-ui-reprise-analysis.md`

| Aspect | Attendu |
|--------|---------|
| **Objectif** | Inventorier l'existant UX/UI et préparer la reprise sans repartir de zéro |
| **Contenu minimal** | Fichiers UX existants (brief, Figma, atelier) ; synthèse brief ; décisions acquises ; alignement architecture fonctionnelle ; écarts pressentis ; points ouverts ; proposition de cycle |
| **Entrées nécessaires** | Brief, validation, captures Figma, CR atelier, architecture fonctionnelle, ADR |
| **Sorties attendues** | Cartographie complète de l'existant ; liste des écarts à traiter dans le cycle |
| **Exclusions** | Maquette, backlog, specs écran détaillées, code |
| **Critères qualité** | Inventaire exhaustif des sources ; décisions acquises identifiées ; lien explicite avec fonctionnel ; points ouverts non bloquants listés |

---

## 4. Cadrage reprise UX/UI

**Fichier :** `ux-ui-reprise-scope.md`

| Aspect | Attendu |
|--------|---------|
| **Objectif** | Ouvrir le cycle ; fixer périmètre, sources, livrables et garde-fous |
| **Contenu minimal** | Objectif cycle ; tableau sources ; périmètre inclus / hors périmètre ; décisions UX acquises ; livrables prévus ; acteurs ; dépendances ; critères de sortie ; garde-fous |
| **Entrées nécessaires** | `ux-ui-reprise-analysis.md`, brief, atelier, architecture fonctionnelle |
| **Sorties attendues** | Cadre du cycle lisible ; exclusions explicites ; liste des 8 livrables |
| **Exclusions** | Parcours détaillés, inventaire écran final, maquette V2 |
| **Critères qualité** | Périmètre non ambigu ; Figma V1 positionnée comme référence non définitive ; décisions atelier rappelées comme non redébattables |

---

## 5. Parcours utilisateurs

**Fichier :** `user-journeys.md`

| Aspect | Attendu |
|--------|---------|
| **Objectif** | Consolider les parcours utilisateurs alignés sur statuts, objets et écrans |
| **Contenu minimal** | Vue d'ensemble parcours ; fiche par parcours (acteur, déclencheur, étapes, écrans, statuts, objets, règles) ; matrices parcours × écrans × statuts |
| **Entrées nécessaires** | Scope, brief, atelier, architecture fonctionnelle (objets, statuts, domaines) |
| **Sorties attendues** | Parcours traçables de bout en bout ; lien explicite écrans / statuts |
| **Exclusions** | User stories, wireframes, maquettes, tests |
| **Critères qualité** | Parcours couvrent le MVP ; décisions UX transposées ; indicateurs vs statuts métier distingués |

---

## 6. Inventaire écrans

**Fichier :** `screen-inventory.md`

| Aspect | Attendu |
|--------|---------|
| **Objectif** | Lister et structurer les écrans / vues du périmètre reprise |
| **Contenu minimal** | Catalogue écrans ; fiche par écran (rôle, parcours, acteurs, statuts, objets, référence visuelle) ; matrices écrans × parcours × statuts ; écarts Figma V1 / architecture |
| **Entrées nécessaires** | Parcours, brief écrans MVP, captures Figma, architecture fonctionnelle |
| **Sorties attendues** | Inventaire complet ; écarts documentés sans refonte maquette |
| **Exclusions** | Specs comportementales détaillées, composants, code |
| **Critères qualité** | Chaque écran relié à au moins un parcours ; écarts visuels / fonctionnels nommés |

---

## 7. Spécifications fonctionnelles écran

**Fichier :** `screen-functional-specs.md`

| Aspect | Attendu |
|--------|---------|
| **Objectif** | Décrire le comportement fonctionnel attendu de chaque écran |
| **Contenu minimal** | Fiche par écran : objectif, acteurs, données affichées, états, actions, transitions statuts, garde-fous, lien parcours ; principes transverses |
| **Entrées nécessaires** | Inventaire écrans, parcours, objets, statuts, ADR, décisions atelier |
| **Sorties attendues** | Specs exploitables pour maquette V2 ou delivery futur |
| **Exclusions** | Code, API, SQL, composants, maquette, backlog |
| **Critères qualité** | Libellés statuts alignés ; dashboard non source de vérité ; message métier avant détail technique (anomalies) |

---

## 8. Vues dashboard

**Fichier :** `dashboard-ux-view.md`

| Aspect | Attendu |
|--------|---------|
| **Objectif** | Consolider les vues dashboard par profil (Manager, Technicien, Pilotage, etc.) |
| **Contenu minimal** | Principes (non source de vérité) ; fiche par vue (objectif, acteur, KPI, alertes, priorisation) ; matrices dashboard / statuts / objets |
| **Entrées nécessaires** | Architecture fonctionnelle dashboard, brief KPI, décisions atelier alertes, specs écran dashboard |
| **Sorties attendues** | Vues dashboard clarifiées sans wireframe final |
| **Exclusions** | Maquette UI, composants, design system, BI technique |
| **Critères qualité** | Top KPI / alertes hiérarchisés ; retard ≠ anomalie ; vues distinctes par profil si décidé |

---

## 9. Synthèse reprise UX/UI

**Fichier :** `ux-ui-summary.md`

| Aspect | Attendu |
|--------|---------|
| **Objectif** | Consolider le cycle sans enrichir le périmètre décisionnel |
| **Contenu minimal** | Contexte reprise ; livrables produits ; décisions transposées ; parcours / écrans / dashboard consolidés ; écarts ; alignement fonctionnel et ADR ; suites possibles ; vigilance |
| **Entrées nécessaires** | Tous les livrables intermédiaires du cycle |
| **Sorties attendues** | Lecture synthétique en 15–20 min ; base pour clôture |
| **Exclusions** | Nouvelles décisions, backlog, maquette, delivery |
| **Critères qualité** | Cohérence terminologique ; pas de nouvelle règle structurante ; reprise « non depuis zéro » explicite |

---

## 10. Clôture cycle UX/UI

**Fichier :** `2026-06-28-ux-ui-cycle-closure.md`

| Aspect | Attendu |
|--------|---------|
| **Objectif** | Acter la fin du cycle documentaire |
| **Contenu minimal** | Livrables produits ; résultats obtenus ; décisions transposées ; exclusions confirmées ; points ouverts ; risques ; suites ; préparation PR |
| **Entrées nécessaires** | Synthèse, état Git, historique commits |
| **Sorties attendues** | Cycle clôturable ; phase suivante nommée |
| **Exclusions** | Nouveau contenu métier, merge automatique, Notion |
| **Critères qualité** | Liste complète des 8 livrables ; garde-fous confirmés ; aucun livrable Interv360 modifié hors cycle si capitalisation |

---

## 11. Ordre recommandé de production

```
1. État des lieux (analysis)
2. Cadrage (scope)
3. Parcours utilisateurs
4. Inventaire écrans
5. Spécifications fonctionnelles écran
6. Vues dashboard
7. Synthèse
8. Clôture
```

**Allers-retours normaux :** un écart Figma peut faire réviser l'inventaire ; un statut peut faire réviser un parcours.

**Garde-fou :** la **synthèse** et la **clôture** ne doivent **pas** créer de nouvelles décisions structurantes — seulement consolider et acter.

---

## 12. Règles de cohérence documentaire

| Règle | Application |
|-------|-------------|
| Terme UX stable | Même libellé écran / parcours dans tous les livrables |
| Statut à sens unique | Alignement avec architecture fonctionnelle et ADR |
| Figma V1 = référence | Jamais présentée comme cible finale figée |
| Dashboard non source de vérité | Rappelé en specs et vues dashboard |
| Décisions acquises | Transposées, non redébattues |
| Exclusions répétées | Rappelées en scope, synthèse et clôture |
| Matrices alignées | Parcours, écrans, statuts, objets cohérents |

---

## 13. Critères de validation globale

Le cycle documentaire complet est validable lorsque :

- les **8 livrables** existent et sont reliés entre eux ;
- le **périmètre** et les **exclusions** sont identiques entre scope, synthèse et clôture ;
- chaque **parcours** relie acteurs, écrans et statuts ;
- chaque **écran** est inventorié et spécifié ;
- les **écarts** maquette / architecture sont documentés ;
- les **ADR** et garde-fous fonctionnels sont respectés ;
- **aucun** livrable ne contient backlog, tests, code, API, SQL ou maquette finale ;
- les **captures** existantes n'ont pas été modifiées ;
- la **clôture** liste les livrables et la suite recommandée ;
- l'**historique Git** du cycle est propre et traçable.

---

*Standard documentaire SFIA — Reprise UX/UI documentaire — Draft — Réutilisable.*
