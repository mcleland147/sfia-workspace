# Checklist — Reprise UX/UI documentaire

**Type** : Checklist SFIA  
**Domaine** : UX/UI — reprise documentaire  
**Statut** : Draft  
**Usage** : Réutilisable

---

## 1. Objectif

Cette checklist permet de **vérifier la qualité et la complétude** d'un cycle de reprise UX/UI documentaire post-architecture fonctionnelle.

Elle s'utilise :

- avant d'ouvrir le cycle ;
- pendant la production des livrables ;
- avant la synthèse ;
- avant la clôture ;
- avant la préparation de PR.

Elle **ne remplace pas** la relecture métier ni la validation humaine.

---

## 2. Préconditions

- [ ] Brief UX/UI existant disponible
- [ ] Décisions UX identifiées (validation, atelier ou arbitrages)
- [ ] Maquette ou référence visuelle disponible (Figma V1, captures)
- [ ] Architecture fonctionnelle disponible ou équivalent (domaines, objets, statuts)
- [ ] ADR structurantes relues si applicables
- [ ] Périmètre de reprise défini ou hypothèses explicites
- [ ] Branche Git dédiée créée
- [ ] Working tree clean
- [ ] Aucun secret exposé
- [ ] Méthode et standard relus (`ux-ui-reprise-method.md`, `ux-ui-reprise-deliverables-standard.md`)

---

## 3. Contrôle état des lieux

- [ ] `ux-ui-reprise-analysis.md` produit
- [ ] Fichiers UX/UI existants inventoriés (brief, Figma, atelier)
- [ ] Architecture fonctionnelle et ADR référencées
- [ ] Décisions UX déjà acquises listées
- [ ] Écarts maquette / architecture pressentis
- [ ] Points ouverts non bloquants identifiés
- [ ] Proposition de cycle cohérente avec la méthode SFIA
- [ ] Aucune maquette, backlog ou code produit

---

## 4. Contrôle cadrage

- [ ] `ux-ui-reprise-scope.md` produit
- [ ] Objectif du cycle explicite (reprise, pas depuis zéro)
- [ ] Sources documentaires listées avec statut
- [ ] Périmètre inclus et hors périmètre documentés
- [ ] Figma V1 positionnée comme référence non définitive
- [ ] Décisions UX acquises rappelées comme non redébattables
- [ ] Liste des 8 livrables prévus
- [ ] Garde-fous et exclusions rappelés
- [ ] Critères de sortie du cycle définis

---

## 5. Contrôle parcours

- [ ] `user-journeys.md` produit
- [ ] Parcours couvrent le périmètre MVP ou cible du scope
- [ ] Chaque parcours relie acteurs, écrans, statuts et objets
- [ ] Décisions atelier transposées dans les parcours concernés
- [ ] Indicateurs distingués des statuts métier principaux
- [ ] Matrices parcours × écrans × statuts présentes
- [ ] Aucune user story ni wireframe produit

---

## 6. Contrôle écrans

- [ ] `screen-inventory.md` produit
- [ ] `screen-functional-specs.md` produit
- [ ] Tous les écrans du périmètre inventoriés
- [ ] Chaque écran relié à au moins un parcours
- [ ] Écarts Figma V1 / architecture documentés
- [ ] Specs décrivent comportements, états, actions, garde-fous
- [ ] Libellés statuts alignés avec architecture fonctionnelle
- [ ] Captures existantes non modifiées
- [ ] Aucun composant front, code ou maquette produit

---

## 7. Contrôle dashboard

- [ ] `dashboard-ux-view.md` produit
- [ ] Vues par profil distinctes si applicable (Manager, Technicien, Pilotage)
- [ ] KPI et alertes hiérarchisés (top N si décidé)
- [ ] Dashboard explicitement non source de vérité
- [ ] Retard et anomalie distingués si applicable
- [ ] Alignement avec `dashboard-and-alerts.md` fonctionnel
- [ ] Aucune maquette UI finale ni composant produit

---

## 8. Contrôle synthèse

- [ ] `ux-ui-summary.md` produit
- [ ] Contexte « reprise non depuis zéro » rappelé
- [ ] Livrables du cycle listés
- [ ] Décisions UX transposées récapitulées
- [ ] Écarts maquette / architecture consolidés
- [ ] Alignement fonctionnel et ADR confirmé
- [ ] Synthèse ne crée pas de nouvelle décision structurante
- [ ] Suites possibles nommées sans les déclencher

---

## 9. Contrôle clôture

- [ ] `2026-06-28-ux-ui-cycle-closure.md` produit
- [ ] Les 8 livrables listés avec statut
- [ ] Résultats obtenus récapitulés
- [ ] Exclusions confirmées (cases cochées)
- [ ] Points ouverts listés comme non bloquants
- [ ] Phase suivante identifiée
- [ ] Préparation revue / PR documentée (sans merge automatique)
- [ ] Working tree clean après commit de clôture

---

## 10. Contrôle exclusions

- [ ] Aucun fichier `.env` modifié
- [ ] Aucun secret affiché ou commité
- [ ] Aucun code applicatif créé
- [ ] Aucune API créée
- [ ] Aucun SQL créé
- [ ] Aucun modèle technique créé
- [ ] Aucun BPMN créé ou modifié
- [ ] Aucun SVG modifié
- [ ] Aucune user story créée
- [ ] Aucun backlog créé
- [ ] Aucun cas ou scénario de test créé
- [ ] Aucune maquette UI finale créée
- [ ] Aucun composant front créé
- [ ] Aucune publication Notion réalisée
- [ ] Aucun appel API Notion réalisé
- [ ] Aucun planning de delivery ouvert
- [ ] Captures Figma / visuelles existantes non modifiées

---

## 11. Contrôle PR

- [ ] Tous les livrables attendus présents dans le dossier projet
- [ ] `git diff` limité au périmètre du cycle (pas de fichiers hors scope)
- [ ] Aucun fichier Interv360 modifié si cycle sur autre projet (ou inversement en capitalisation méthode)
- [ ] Commits atomiques et messages clairs
- [ ] Branche poussée sur `origin`
- [ ] PR préparée manuellement ou via `gh` si demandé — **pas de merge automatique**
- [ ] Corps PR inclut confirmations exclusions

---

## 12. Critères de validation globale

| Critère | Validé |
|---------|:------:|
| 8 livrables présents selon le standard | ☐ |
| Périmètre et exclusions cohérents sur scope, synthèse, clôture | ☐ |
| Reprise « non depuis zéro » explicite | ☐ |
| Parcours alignés objets / statuts / écrans | ☐ |
| Écrans inventoriés et spécifiés | ☐ |
| Dashboard clarifié (non source de vérité) | ☐ |
| Écarts maquette / architecture documentés | ☐ |
| ADR et garde-fous fonctionnels respectés | ☐ |
| Interdits vérifiés (section 10) | ☐ |
| Branche prête pour revue / PR | ☐ |

---

## 13. Prochaine phase possible

Après clôture validée, phases **possibles** — non déclenchées automatiquement :

| Phase | Objectif |
|-------|----------|
| Maquette Figma V2 | Refonte visuelle à partir des specs |
| Backlog | Découpage delivery |
| Tests | Stratégie et cas de test |
| Architecture technique | Hypothèses stack et intégration |
| Delivery | Implémentation |
| Capitalisation méthode SFIA | Référencement README méthodes (PR séparée) |

---

*Checklist SFIA — Reprise UX/UI documentaire — Draft — Réutilisable.*
