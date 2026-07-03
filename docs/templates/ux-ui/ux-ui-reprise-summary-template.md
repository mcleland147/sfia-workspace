# [Nom du projet] — Synthèse reprise UX/UI

**Projet** : [Code ou nom du projet]  
**Phase** : [Phase documentaire — ex. 06-ux-ui]  
**Type** : Synthèse reprise UX/UI  
**Statut** : Draft  
**Branche** : [Nom de la branche Git]  
**Méthode associée** : `docs/practices/ux-ui/ux-ui-reprise-method.md`  
**Standard associé** : `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md`

> **Note :** Le cycle Interv360 `projects/interv360/06-ux-ui/ux-ui-summary.md` est une référence d'application possible de ce template.

---

## 1. Objectif

Ce document **consolide le cycle de reprise UX/UI** de **[nom du projet]**.

Il synthétise, **sans créer de nouvelles règles ni décisions structurantes** :

- l'état des lieux (`ux-ui-reprise-analysis.md`) ;
- le cadrage (`ux-ui-reprise-scope.md`) ;
- les parcours (`user-journeys.md`) ;
- l'inventaire écrans (`screen-inventory.md`) ;
- les specs écran (`screen-functional-specs.md`) ;
- les vues dashboard (`dashboard-ux-view.md`).

Ce document **ne produit pas** de backlog, user stories, tests, code, API, modèle technique, maquette finale ou delivery.

---

## 2. Rappel du contexte de reprise

- L'UX/UI de **[nom du projet]** **n'a pas été reprise depuis zéro** — [lister artefacts existants : brief, Figma V1, atelier].
- Les **décisions UX** avaient été **tranchées** dans [source atelier / validation].
- La **référence visuelle** était **clôturée** comme **présentable mais non définitive** ([source Figma]).
- L'**architecture fonctionnelle** ([chemin]) et les **ADR** ([chemin]) ont fourni le cadre final.
- La reprise a consisté à **aligner** parcours, écrans, dashboard et garde-fous — en **documentation UX fonctionnelle**.

---

## 3. Livrables produits dans le cycle

| Ordre | Livrable | Rôle | Statut |
|-------|----------|------|--------|
| 1 | `ux-ui-reprise-analysis.md` | État des lieux | [Statut] |
| 2 | `ux-ui-reprise-scope.md` | Cadrage | [Statut] |
| 3 | `user-journeys.md` | Parcours utilisateurs | [Statut] |
| 4 | `screen-inventory.md` | Inventaire écrans | [Statut] |
| 5 | `screen-functional-specs.md` | Specs écran | [Statut] |
| 6 | `dashboard-ux-view.md` | Vues dashboard | [Statut] |
| 7 | `ux-ui-summary.md` | Synthèse (ce document) | [Statut] |
| 8 | `ux-ui-cycle-closure.md` | Clôture | [Statut] |

---

## 4. Décisions UX transposées

| Décision UX | Source | Transposition |
|-------------|--------|---------------|
| [Décision] | [Source] | [Livrable(s) concerné(s)] |

---

## 5. Parcours consolidés

| Parcours | Acteur principal | Écrans clés | Statuts clés |
|----------|------------------|-------------|--------------|
| [Parcours] | [Acteur] | [Écrans] | [Statuts] |

**Nombre de parcours :** [N]

---

## 6. Écrans consolidés

| Écran | Rôle | Parcours | Référence visuelle |
|-------|------|----------|-------------------|
| [Écran] | [Rôle] | [Parcours] | [Figma V1 / complément doc] |

**Nombre d'écrans :** [N]

---

## 7. Écarts maquette / architecture

| Écart | Référence visuelle | Architecture fonctionnelle | Traitement documentaire |
|-------|-------------------|---------------------------|-------------------------|
| [Écart] | [Constat visuel] | [Exigence fonctionnelle] | [Documenté dans…] |

---

## 8. Vues dashboard consolidées

| Vue | Acteur | Objectif | KPI / alertes clés |
|-----|--------|----------|-------------------|
| [Vue] | [Acteur] | [Objectif] | [KPI / alertes] |

**Principes :**

- Le dashboard **rend visible** — il **n'est pas** source de vérité.
- [Autres principes projet]

---

## 9. Alignement architecture fonctionnelle et ADR

| Élément | Alignement | Source |
|---------|------------|--------|
| Objets métier | [Synthèse] | `business-objects.md` |
| Statuts | [Synthèse] | `status-and-transitions.md` |
| ADR [N] | [Garde-fou intégré] | [Chemin ADR] |

---

## 10. Ce que la reprise UX/UI permet maintenant

| Suite possible | Apport |
|----------------|--------|
| Maquette Figma V2 | [Apport] |
| Backlog futur | [Apport] |
| Tests futurs | [Apport] |
| Architecture technique | [Apport] |

Ces suites sont **préparées** mais **non produites** dans ce cycle.

---

## 11. Points de vigilance consolidés

- [Point de vigilance 1]
- [Point de vigilance 2]

**Garde-fous génériques :**

- Ne pas transformer les specs en backlog
- Ne pas produire de maquette dans ce cycle
- Ne pas faire du dashboard une source de vérité
- Ne pas modifier les captures existantes

---

## 12. Conclusion

La reprise UX/UI de **[nom du projet]** est consolidée autour de :

- **[nombre]** parcours ;
- **[nombre]** écrans ;
- **[nombre]** vues dashboard ;
- [principes structurants principaux].

Cette synthèse peut servir de base à la **clôture du cycle**, puis à la phase suivante : **[phase suivante]**.

---

*Template SFIA — Synthèse reprise UX/UI — Réutilisable.*
