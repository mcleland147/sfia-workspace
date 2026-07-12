# [Nom du projet] — Clôture du cycle de reprise UX/UI

**Projet** : [Code ou nom du projet]
**Phase** : [Phase documentaire — ex. 06-ux-ui]
**Type** : Clôture cycle UX/UI
**Statut** : Draft
**Branche** : [Nom de la branche Git]
**Méthode associée** : `docs/practices/ux-ui/ux-ui-reprise-method.md`
**Checklist associée** : `docs/practices/ux-ui/ux-ui-reprise-checklist.md`

> **Note :** Le cycle Interv360 `projects/interv360/06-ux-ui/2026-06-28-ux-ui-cycle-closure.md` est une référence d'application possible de ce template.

---

## 1. Objectif

Ce document **clôture formellement** le cycle documentaire de **reprise UX/UI** de **[nom du projet]**.

Il confirme :

- les livrables produits ;
- les décisions transposées ;
- les exclusions respectées ;
- les points ouverts ;
- la suite recommandée.

Il **ne crée pas** de nouveau périmètre UX ni de contenu métier structurant.

Il **ne produit pas** de backlog, user stories, tests, code, API, modèle technique, maquette finale ou delivery.

---

## 2. Rappel du périmètre du cycle

| Élément | Résultat |
|---------|----------|
| Projet | [Nom du projet] |
| Branche | [Nom de branche] |
| Phase | [Phase] |
| Objectif du cycle | Reprise UX/UI documentaire post-architecture fonctionnelle |
| Statut | [Draft / Validé / À relire] |

---

## 3. Livrables produits

| Ordre | Livrable | Rôle | Statut |
|-------|----------|------|--------|
| 1 | `ux-ui-reprise-analysis.md` | État des lieux | [Statut] |
| 2 | `ux-ui-reprise-scope.md` | Cadrage | [Statut] |
| 3 | `user-journeys.md` | Parcours utilisateurs | [Statut] |
| 4 | `screen-inventory.md` | Inventaire écrans | [Statut] |
| 5 | `screen-functional-specs.md` | Specs écran | [Statut] |
| 6 | `dashboard-ux-view.md` | Vues dashboard | [Statut] |
| 7 | `ux-ui-summary.md` | Synthèse | [Statut] |
| 8 | `2026-06-28-ux-ui-cycle-closure.md` | Clôture (ce document) | [Statut] |

**Dossier :** `[PROJECT_PHASE_PATH]/` — 8 livrables documentaires du cycle reprise UX/UI.

---

## 4. Résultats obtenus

- Reprise UX/UI **non réalisée depuis zéro** — [synthèse des acquis].
- **[N] décisions UX** transposées (non redébattues).
- **[N] parcours** consolidés avec matrices parcours × écrans × statuts.
- **[N] écrans** inventoriés et spécifiés fonctionnellement.
- **[N] vues dashboard** consolidées.
- **Écarts** référence visuelle / architecture **documentés**.
- **Garde-fous** architecture fonctionnelle et ADR **intégrés**.
- **Exclusions** du cycle **respectées**.

---

## 5. Décisions UX transposées

| Décision UX | Statut dans le cycle | Livrable(s) concerné(s) |
|-------------|----------------------|-------------------------|
| [Décision] | Transposée | [Livrable(s)] |

---

## 6. Exclusions confirmées

- [ ] Aucun backlog produit
- [ ] Aucune user story produite
- [ ] Aucun cas de test produit
- [ ] Aucun scénario de test produit
- [ ] Aucun code applicatif produit
- [ ] Aucune API produite
- [ ] Aucun SQL produit
- [ ] Aucun modèle technique produit
- [ ] Aucun BPMN produit ou modifié
- [ ] Aucun SVG modifié
- [ ] Aucune maquette UI finale produite
- [ ] Aucun composant front produit
- [ ] Aucun planning de delivery produit
- [ ] Aucune publication Notion réalisée
- [ ] Aucun appel API Notion réalisé
- [ ] Aucune capture Figma / visuelle existante modifiée
- [ ] Aucun fichier `.env` modifié
- [ ] Aucun secret affiché ou commité

---

## 7. Points ouverts

| Point ouvert | Nature | Recommandation |
|--------------|--------|----------------|
| [Point] | [Métier / UX / technique futur] | [Recommandation — non bloquant] |

---

## 8. Risques résiduels

| Risque | Impact potentiel | Traitement recommandé |
|--------|------------------|----------------------|
| [Risque] | [Impact] | [Traitement] |

---

## 9. Passage à la phase suivante

| Phase possible | Conditions de passage | Commentaire |
|----------------|----------------------|-------------|
| Maquette Figma V2 | [Conditions] | [Commentaire] |
| Backlog futur | [Conditions] | [Commentaire] |
| Architecture technique | [Conditions] | [Commentaire] |
| Capitalisation méthode SFIA | [Conditions] | [Commentaire] |

La clôture **ne déclenche pas automatiquement** ces phases.

---

## 10. Préparation revue / PR

- [ ] Tous les livrables attendus sont présents
- [ ] La synthèse ne crée pas de nouvelle décision structurante
- [ ] La clôture ne crée pas de nouveau contenu métier
- [ ] Les exclusions sont confirmées
- [ ] Les fichiers hors périmètre n'ont pas été modifiés
- [ ] Le working tree est clean après commit
- [ ] La branche est poussée sur `origin`
- [ ] La PR peut être ouverte manuellement ou via `gh` si disponible

**Éléments PR (à compléter si applicable) :**

| Élément | Valeur |
|---------|--------|
| Branche source | [Nom de branche] |
| Branche cible | `main` |
| Titre PR recommandé | [Titre] |

---

## 11. Conclusion

Le cycle de reprise UX/UI de **[nom du projet]** est **clôturable**.

Les livrables produits permettent de disposer d'une base UX fonctionnelle consolidée, traçable et exploitable pour la suite.

La prochaine étape recommandée est : **[prochaine étape — ex. PR vers main, maquette V2, capitalisation méthode]**.

---

*Template SFIA — Clôture cycle reprise UX/UI — Réutilisable.*
