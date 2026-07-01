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
