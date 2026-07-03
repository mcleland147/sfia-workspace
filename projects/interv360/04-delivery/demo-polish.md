# Interv360 — Demo Polish

**Projet** : Interv360  
**Cycle** : Demo Polish  
**Mode** : SFIA Fast Delivery contrôlé  
**Statut** : Polish UX ciblé  
**Branche** : `delivery/interv360-demo-polish`  
**Base** : `main` @ `a58e7d2`

Référence feedback : [`demo-presentation-feedback.md`](./demo-presentation-feedback.md)

---

## 1. Objectif

Ce cycle traite uniquement l'irritant confirmé par feedback humain :

> page longue / scroll gênant en présentation.

L'objectif est de réduire le scroll via une vue par page ou une navigation par écran.

---

## 2. Point de départ

Le cycle `demo-presentation-feedback` a confirmé :

- compréhension globale claire ;
- readiness utile ;
- scénario guidé utile ;
- workflow nominal lisible ;
- labels Batch / INC non gênants ;
- mode API à mentionner seulement pour l'instant ;
- irritant prioritaire : page longue / scroll.

---

## 3. Décision de cadrage

Le polish doit rester strictement limité à la lisibilité de présentation.

Décision :

- introduire une navigation par écran ;
- conserver les contenus existants ;
- ne pas modifier le workflow ;
- ne pas modifier le backend ;
- ne pas élargir au mode API ;
- ne pas corriger les irritants non confirmés.

---

## 4. Périmètre autorisé

Le cycle peut modifier :

- `App.tsx` ;
- `App.css` ;
- composants frontend existants uniquement si nécessaire ;
- tests frontend associés ;
- README app si nécessaire.

Le cycle peut introduire :

- une notion d'écran courant ;
- une navigation précédent / suivant ;
- un sélecteur d'écrans ;
- une meilleure séparation visuelle des zones ;
- un mode de présentation plus lisible.

---

## 5. Hors périmètre

Le cycle ne doit pas introduire :

- modification backend ;
- nouveau scope métier ;
- nouvelle fonctionnalité métier ;
- nouveau statut ;
- routing React lourd ;
- nouvelle dépendance non justifiée ;
- polish large du mode API ;
- démonstration API live ;
- correction des labels Batch / INC ;
- synchronisation automatique scénario ↔ workflow ;
- refonte globale UI ;
- suppression readiness ;
- suppression scénario guidé ;
- suppression workflow nominal ;
- suppression `localStorage` ;
- backend obligatoire ;
- fallback silencieux ;
- DB SQL ;
- CRM ;
- authentification ;
- données réelles ;
- publication Notion ;
- modification Controlled Delivery ;
- modification `sfia-notion-sync`.

---

## 6. Solution attendue

Solution retenue :

- conserver l'application mono-page techniquement ;
- ajouter une navigation interne par écran (sans React Router) ;
- afficher un écran principal à la fois ;
- permettre de passer d'un écran à l'autre via onglets et boutons précédent/suivant.

Écrans :

1. Vue d'ensemble (overview + readiness)
2. Scénario guidé
3. Demandes (liste)
4. Détail & workflow (fiche, actions, parcours readonly)
5. Journal & reset

---

## 7. Critères d'acceptation

| Critère | Résultat |
|---------|----------|
| Scroll réduit | OK |
| Navigation par écran disponible | OK |
| Readiness conservée | OK |
| Scénario guidé conservé | OK |
| Liste demandes conservée | OK |
| Détail demande conservé | OK |
| Workflow nominal conservé | OK |
| Journal conservé | OK |
| Reset conservé | OK |
| Mode local par défaut conservé | OK |
| Mode API opt-in conservé | OK |
| Backend non obligatoire en local | OK |
| Aucun scope non confirmé ajouté | OK |

---

## 8. Changements réalisés

| Fichier | Changement |
|---------|------------|
| `app/src/ui/demo/demoScreens.ts` | Définition des 5 écrans de démonstration |
| `app/src/app/App.tsx` | État `currentDemoScreen`, navigation par écran, rendu conditionnel |
| `app/src/app/App.css` | Styles navigation écran et zone de contenu unique |
| `app/src/tests/App.smoke.test.tsx` | Helpers navigation + adaptation des tests existants |
| `app/src/tests/App.demoScreens.test.tsx` | Tests dédiés navigation par écran |
| `app/src/tests/App.apiMode.test.tsx` | Navigation vers écran Demandes en mode API |
| `app/README.md` | Mention navigation par écran |

Aucune modification backend.

---

## 9. Validation

| Contrôle | Résultat |
|----------|----------|
| Frontend build | OK |
| Frontend tests | OK — 81 tests |
| Backend build | OK |
| Backend tests | OK — 18 tests |
| Code frontend modifié | Oui — polish ciblé |
| Backend modifié | Non |
| Nouveau scope métier | Non |
| Polish limité au scroll | OK |
| Données réelles introduites | Non |
| DB SQL introduite | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

---

## 10. Limites

- La navigation par écran masque les zones hors écran courant ; l'utilisateur doit changer d'écran pour y accéder (comportement voulu pour réduire le scroll).
- Le reset conserve l'écran courant (ex. Journal) pour que le message de confirmation reste visible.
- Aucun changement de workflow, transitions, labels Batch/INC, ni mode API live.

---

## 11. Mini-clôture

| Contrôle | Résultat |
|----------|----------|
| Frontend build | OK |
| Frontend tests | OK — 81 tests |
| Backend build | OK |
| Backend tests | OK — 18 tests |
| Scroll réduit | OK |
| Navigation par écran disponible | OK |
| Readiness conservée | OK |
| Scénario guidé conservé | OK |
| Workflow nominal conservé | OK |
| Journal conservé | OK |
| Reset conservé | OK |
| Mode local par défaut conservé | OK |
| Mode API opt-in conservé | OK |
| Backend modifié | Non |
| Nouveau scope métier | Non |
| Polish limité au feedback confirmé | OK |

## 12. Décision

Le polish UX ciblé est terminé.

Il traite uniquement l'irritant confirmé :

> page longue / scroll.

Aucun autre irritant non confirmé n'a été traité.

## 13. Prochaine étape recommandée

**Cycle recommandé :** `delivery/interv360-demo-polish-pr-preparation`

Objectif :

- préparer la PR ;
- vérifier que le polish reste strictement limité au scroll / navigation par écran ;
- ne pas ajouter de scope complémentaire.

---

## 14. Préparation PR intégrée

### Titre proposé

`Polish Interv360 demo navigation`

### Description proposée

```markdown
## Summary
This PR adds a targeted UX polish for the Interv360 demo.
It addresses the confirmed human feedback irritant:
- the page was too long and required too much scrolling during presentation.
The implementation keeps the app as a single-page React application while introducing screen-based demo navigation:
- Overview / Readiness
- Guided scenario
- Requests
- Detail & workflow
- Journal & reset
## Validation
- Frontend build: OK
- Frontend tests: 81 passed
- Backend build: OK
- Backend tests: 18 passed
- Backend unchanged
- Local mode remains the default
- API mode remains opt-in
- No new dependency introduced
- No React Router introduced
- No business workflow changed
## Guardrails
No backend change, new business scope, SQL database, CRM integration, authentication, real data, Notion publication, Controlled Delivery change, or sfia-notion-sync update was introduced.
The polish is strictly limited to the confirmed feedback: reducing scroll through screen-based navigation.
```

### Vérifications pré-PR

| Contrôle | Résultat |
|----------|----------|
| Diff limité aux 8 fichiers attendus | OK |
| Backend non modifié | OK |
| `package.json` inchangé | OK |
| Pas de React Router | OK |
| Pas de SQL / CRM / auth / données réelles | OK |
| Frontend build | OK |
| Frontend tests | OK — 81 tests |
| Backend build | OK |
| Backend tests | OK — 18 tests |

### Revue visuelle pré-PR

Revue visuelle locale effectuée avant PR (`http://localhost:5173/`, mode local).

| Écran | Résultat |
|-------|----------|
| Vue d'ensemble / Readiness | OK |
| Scénario guidé | OK |
| Demandes | OK |
| Détail & workflow | OK |
| Journal & reset | OK |

Contrôles complémentaires :

| Contrôle | Résultat |
|----------|----------|
| Onglets visibles | OK |
| Précédent / suivant fonctionnels | OK |
| Écran courant identifiable (N sur 5) | OK |
| Scroll réduit par écran | OK |
| Reset conserve l'écran courant | OK |
| Message « Démo réinitialisée » visible | OK |
| Mode local par défaut | OK |

Conclusion :

- navigation par écran fluide ;
- scroll réduit ;
- contenu existant conservé ;
- aucune dérive de scope identifiée.

## 15. Statut push / PR

| Élément | Valeur |
|---------|--------|
| Push | OK |
| PR créée automatiquement | Non (`gh` indisponible) |
| URL PR ou comparaison | https://github.com/mcleland147/sfia-workspace/compare/main...delivery/interv360-demo-polish?expand=1 |
| Cible | `main` |
| Source | `delivery/interv360-demo-polish` |
| Merge automatique | Non |

---

## 16. Statut merge

| Élément | Valeur |
|---------|--------|
| PR | [#47](https://github.com/mcleland147/sfia-workspace/pull/47) |
| Source | `delivery/interv360-demo-polish` |
| Cible | `main` |
| Méthode | Merge commit (GitHub PR merge) |
| Commit merge | `d07c764` |
| Main synchronisée | OK |
| Revue visuelle pré-merge | OK — vue par page validée |
| Frontend build post-merge | OK |
| Frontend tests post-merge | OK — 81 tests |
| Backend build post-merge | OK |
| Backend tests post-merge | OK — 18 tests |
| Backend modifié | Non |
| Nouveau scope métier | Non |
| Polish limité au scroll/navigation | OK |
| Nouvelle dépendance introduite | Non |
| React Router introduit | Non |
| Readiness conservée | OK |
| Scénario guidé conservé | OK |
| Workflow nominal conservé | OK |
| Journal conservé | OK |
| Reset conservé | OK |
| Mode local par défaut | OK |
| Mode API opt-in | OK |
| DB SQL introduite | Non |
| Données réelles introduites | Non |
| CRM introduit | Non |
| Authentification introduite | Non |
| Publication Notion | Non |
| Controlled Delivery modifié | Non |
| sfia-notion-sync modifié | Non |
| Exports Figma ajoutés | Non |

### Décision post-merge

Le cycle **Demo Polish** est mergé dans `main`.

La branche principale contient désormais une navigation par écran permettant de réduire le scroll pendant la présentation.

Le polish traite uniquement l'irritant confirmé par feedback humain :

> page longue / scroll.

La revue visuelle pré-merge a confirmé que la vue par page est satisfaisante.

Aucun backend n'a été modifié.
Aucune nouvelle dépendance ni React Router n'ont été introduits.
Aucun autre irritant non confirmé n'a été traité.

Aucun document de merge séparé n'a été créé afin de respecter le mode SFIA Fast Delivery contrôlé.

### Prochaine étape recommandée

**Cycle recommandé :** `delivery/interv360-demo-mvp-closure`

Objectif :

- clôturer la version démonstrateur Interv360 ;
- formaliser l'état atteint ;
- lister ce qui est démontrable ;
- lister les hors-scope assumés ;
- identifier la trajectoire suivante éventuelle :
  - API renforcée ;
  - persistance ;
  - authentification ;
  - CRM ;
  - industrialisation ;
  - design/Figma si une vraie refonte UX est décidée.

Ne pas ouvrir de nouveau polish sans nouveau feedback.
