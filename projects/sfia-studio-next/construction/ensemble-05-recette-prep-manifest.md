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
| BUILD_ID | `3LzvYPTQc-Km7St6nF97r` |
| Lane | RECETTE |
| Mode | `next start` (pas hot-reload DEV) |
| HTTP probe | 307 |
| **BUILD CURRENT VERIFIED** | OUI |

**Aucune modification du runtime servi dans ce cycle.**

## 2. Candidat produit (commits locaux — non poussés)

| Item | Valeur |
|---|---|
| Branche | `feat/next-ml4d-project-space-20261116` |
| Feature freeze | `342f0bbb3fea1d52c7a40228347923b30b6db90e` |
| Manifeste SHA | `2b0d7a78a34fb9b8858a8ce81a31bedadcc842b8` |
| Correctif brouillon tip |  / tree  |
| Push produit | **AUCUN** |

## 3. Rollback — qualification

| Gate | Statut |
|---|---|
| BUILD CURRENT VERIFIED | OUI — BUILD_ID + process :3200 |
| ROLLBACK SOURCE VERIFIED | OUI — commit `984d77a3` présent localement ; SOURCE_SHA.txt |
| RESTORABLE ARTIFACT VERIFIED | OUI — snapshot passif `.sfia-restore-artifacts/3LzvYPTQc-Km7St6nF97r/` (281M, 358 fichiers, SHA256SUMS, BUILD_ID match) |
| RESTORE PROCEDURE DOCUMENTED | OUI — `RESTORE.md` dans l’artefact |
| RESTORE LIVE TEST NOT EXECUTED | OUI — aucun stop/restart/replace sur :3200 |

### Emplacement artefact (hors Git, hors `.next` actif)

`/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3/.sfia-restore-artifacts/3LzvYPTQc-Km7St6nF97r/`

Contenu : `BUILD_ID`, `SOURCE_SHA.txt`, `next-snapshot/`, `SHA256SUMS.txt`, `RESTORE.md`.

Copie passive en lecture du `.next` courant ; le process continue de servir l’original.

## 4. Procédure de mise à disposition future (non exécutée)

1. GO Morris explicite.
2. Arrêt contrôlé de `next start` :3200.
3. Remplacer/rebuild `.next` dans **le même worktree RECETTE** depuis le SHA candidat.
4. Vérifier BUILD_ID / SOURCE_SHA / :3200.
5. Smoke Morris.
6. Rollback : suivre `RESTORE.md` de l’artefact ci-dessus.

## 5. Compatibilité

| Contrôle | Statut |
|---|---|
| Migration DB | aucune |
| Nouvelle base / lane / port | interdite |
| Reset données | interdit |
| Secrets | non exposés / non remplacés |

## 6. Réserves

- Revue visuelle : Morris en RECETTE.
- Cookies same-host ports : profils navigateur séparés recommandés.
- Git D9 REAL / OAuth LIVE / streaming M2 : hors preuves de ce cycle.
- **RESTORE LIVE TEST NOT EXECUTED**

## 7. Actions nécessitant GO Morris

- Déploiement / redémarrage RECETTE.
- Push produit / PR / merge.
- Exécution réelle du rollback.
