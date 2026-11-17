# Ensemble 05 — Manifeste de préparation RECETTE (non secret)

| Métadonnée | Valeur |
|---|---|
| Date | 2026-11-17 |
| Nature | Préparation — **aucun déploiement exécuté** |
| Macro-lot | ML4D Ensemble 05 — Travail avec Nora |
| Instruction Morris | Réutiliser la RECETTE existante — ne pas en créer une nouvelle |

## 1. Environnement RECETTE existant (inventaire lecture seule)

| Item | Observation |
|---|---|
| URL | `http://127.0.0.1:3200` |
| Port | `3200` (LISTEN confirmé) |
| Processus | `next start -H 127.0.0.1 -p 3200` (Next 15.5.29) |
| Worktree runtime | `/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3` |
| SOURCE_SHA servi | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
| Tree | `b92cc822ac67399c6d8753c17dbcce5f4b5b734f` |
| BUILD_ID | `3LzvYPTQc-Km7St6nF97r` (fichier `.next/BUILD_ID`) |
| Lane | RECETTE (observée dans logs `lane":"RECETTE"`) |
| Mode | `next start` (pas hot-reload DEV) |
| HTTP probe | 307 (réponse active) |

**Aucune modification de ce runtime dans le présent cycle.**

## 2. Candidat figé à préparer (après commit local)

Renseigner après le commit produit :

| Item | Valeur |
|---|---|
| Branche | `feat/next-ml4d-project-space-20261116` |
| SHA candidat | _(à compléter après commit)_ |
| Tree candidat | _(à compléter après commit)_ |
| Workspace DEV | `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116` |

## 3. Compatibilité / conservation

| Contrôle | Statut |
|---|---|
| Migration DB | **aucune** (M5) |
| Nouvelle base RECETTE | **interdite** |
| Reset données / comptes / documents | **interdit** |
| Remplacement secrets DEV→RECETTE | **interdit** |
| Nouveau port / worktree / conteneur | **interdit** sauf GO Morris |
| Schéma | inchangé — compatible avec build actuel |

## 4. Procédure de mise à disposition future (non exécutée)

1. GO Morris explicite de déploiement RECETTE.
2. Arrêt contrôlé du `next start` sur `:3200` via le mécanisme d’exploitation déjà utilisé pour ce worktree.
3. Remplacer le contenu servi dans **le même worktree RECETTE** (ou rebuild `.next` dans ce worktree) à partir du SHA candidat figé — sans créer une seconde lane.
4. Vérifier `BUILD_ID` / `SOURCE_SHA` / port 3200.
5. Smoke : login DEV/test ou parcours Morris ; Travail avec Nora ; navigation E04.
6. Si échec : restaurer le build précédent `3LzvYPTQc-Km7St6nF97r` / SHA `984d77a3` déjà présent dans ce worktree (artefact `.next` antérieur ou rebuild du SHA précédent).

## 5. Smoke tests post-déploiement (futurs)

- HTTP `:3200` joignable.
- Session / portfolio.
- Ouverture projet → surface Travail.
- Envoi message / choix / brouillon.
- Visionneuse document.
- Aucune écriture sur DEV depuis RECETTE.

## 6. Rollback

Retour au build `3LzvYPTQc-Km7St6nF97r` / source `984d77a3` dans le worktree RECETTE existant, redémarrage `next start -H 127.0.0.1 -p 3200`.

## 7. Réserves

- Revue visuelle Figma : **réservée à Morris en RECETTE**.
- Git D9 REAL : non exécuté en DEV.
- OAuth LIVE : distinct de l’adaptateur DEV.
- Streaming M2 : hors V1.

## 8. Actions nécessitant GO Morris

- Déploiement / redémarrage RECETTE.
- Push produit / PR / merge.
- Toute création de second environnement.
- Gate C / STABLE / ML5.
