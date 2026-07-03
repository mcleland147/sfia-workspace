# [Nom du projet] — Cadrage du cycle de reprise UX/UI

**Projet** : [Code ou nom du projet]  
**Phase** : [Phase documentaire — ex. 06-ux-ui]  
**Type** : Cadrage reprise UX/UI  
**Statut** : Draft  
**Branche** : [Nom de la branche Git]  
**Méthode associée** : `docs/practices/ux-ui/ux-ui-reprise-method.md`  
**Standard associé** : `docs/practices/ux-ui/ux-ui-reprise-deliverables-standard.md`

> **Note :** Le cycle Interv360 `projects/interv360/06-ux-ui/` est une référence d'application possible de ce template.

---

## 1. Objectif du cycle

[Décrire brièvement pourquoi le cycle de reprise UX/UI est ouvert.]

Ce cycle vise à **reprendre l'UX/UI de [nom du projet]** à partir de :

- le **brief UX/UI** ([chemin brief]) ;
- les **décisions UX acquises** ([atelier, validation, arbitrages]) ;
- la **référence visuelle** ([Figma V1, captures — lien ou chemin]) ;
- l'**architecture fonctionnelle** ([chemin phase fonctionnelle]) ;
- les **ADR structurantes** ([chemin ADR si applicable]).

Le cycle **ne repart pas de zéro** : il transpose en documentation UX fonctionnelle ce qui est déjà cadré, validé ou stabilisé fonctionnellement.

**Ce qu'il doit clarifier :**

- [Élément à clarifier 1 — ex. parcours alignés statuts]
- [Élément à clarifier 2 — ex. écarts Figma / architecture]
- [Élément à clarifier 3 — ex. vues dashboard par profil]

**Phase qu'il prépare :**

- [Phase suivante — ex. maquette Figma V2, design détaillé]

**Ce qu'il ne doit pas produire :**

Ce cycle **ne produit pas** de backlog, user stories, tests, code, API, modèle technique, BPMN, maquette UI finale, composant front, planning delivery ou publication Notion.

---

## 2. Sources documentaires

| Source | Rôle | Usage dans le cycle |
|--------|------|---------------------|
| `[chemin]/ux-ui-reprise-analysis.md` | État des lieux | Inventaire existant, écarts, proposition |
| `[chemin brief UX]` | Brief initial | Personas, parcours, écrans MVP, principes |
| `[chemin validation / atelier]` | Décisions UX | Points tranchés — non redébattre |
| `[chemin Figma / captures]` | Référence visuelle V1 | Jalon présentable, non définitif |
| `[chemin architecture fonctionnelle]` | Cadre fonctionnel | Domaines, objets, statuts, dashboard |
| `[chemin ADR]` | Garde-fous structurants | Statuts, sync, anomalies, clôture |

---

## 3. Périmètre inclus

- [Parcours ou écrans couverts]
- [Décisions UX à transposer]
- [Alignement objets métier / statuts]
- [Vues dashboard à clarifier]
- [Réconciliation référence visuelle / architecture fonctionnelle]

---

## 4. Hors périmètre

**Exclusions génériques (toujours applicables) :**

- backlog ;
- user stories ;
- tests ;
- code ;
- API ;
- SQL ;
- modèle technique ;
- BPMN ;
- SVG ;
- maquette UI finale ;
- design system ;
- composant front ;
- planning delivery ;
- publication Notion ;
- modification des captures existantes.

**Exclusions spécifiques au projet :**

- [Exclusion spécifique 1]
- [Exclusion spécifique 2]

**Référence visuelle :** [Figma V1 / maquettes] reste une **référence utile** — **non** une cible finale figée. Les écarts seront documentés sans produire de nouvelle maquette.

---

## 5. Décisions UX déjà acquises

> Ne pas redébattre — transposer dans les livrables du cycle.

| Décision | Source | Impact sur la reprise |
|----------|--------|----------------------|
| [Décision 1] | [Source] | [Impact] |
| [Décision 2] | [Source] | [Impact] |

---

## 6. Livrables prévus

| Ordre | Livrable | Rôle |
|:-----:|----------|------|
| 1 | `ux-ui-reprise-analysis.md` | État des lieux |
| 2 | `ux-ui-reprise-scope.md` | Cadrage (ce document) |
| 3 | `user-journeys.md` | Parcours utilisateurs |
| 4 | `screen-inventory.md` | Inventaire écrans |
| 5 | `screen-functional-specs.md` | Specs fonctionnelles écran |
| 6 | `dashboard-ux-view.md` | Vues dashboard |
| 7 | `ux-ui-summary.md` | Synthèse |
| 8 | `ux-ui-cycle-closure.md` | Clôture |

---

## 7. Acteurs concernés

| Acteur / rôle | Responsabilité dans le cycle | Contribution attendue |
|---------------|------------------------------|------------------------|
| [Rôle métier] | [Responsabilité] | [Contribution] |
| [Rôle projet] | [Responsabilité] | [Contribution] |

---

## 8. Dépendances

| Dépendance | Impact sur le cycle | Statut |
|------------|---------------------|--------|
| Architecture fonctionnelle mergée | Cadre objets / statuts / dashboard | [Statut] |
| Brief UX validé | Parcours et écrans de référence | [Statut] |
| Figma V1 clôturée | Référence visuelle | [Statut] |

---

## 9. Points ouverts au démarrage

- [Point ouvert 1 — non bloquant]
- [Point ouvert 2 — non bloquant]

---

## 10. Critères de sortie du cycle

- [ ] Parcours utilisateurs consolidés
- [ ] Écrans inventoriés et spécifiés
- [ ] Vues dashboard clarifiées
- [ ] Écarts maquette / architecture documentés
- [ ] Synthèse consolidée
- [ ] Clôture du cycle réalisée
- [ ] Hors périmètre confirmé
- [ ] Phase suivante identifiable

---

## 11. Garde-fous

- Ne pas repartir de zéro sans inventorier l'existant
- Ne pas modifier les captures Figma / visuelles existantes
- Ne pas créer de backlog, user stories, tests, code, API, SQL
- Ne pas produire de maquette UI finale
- Ne pas publier dans Notion
- Ne pas redébattre les décisions UX acquises

---

*Template SFIA — Cadrage reprise UX/UI — Réutilisable.*
