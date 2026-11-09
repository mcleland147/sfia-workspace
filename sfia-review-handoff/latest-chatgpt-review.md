# SFIA STUDIO NEXT — ML4
# REVIEW PACK LIGHT — PRÉPARATION .env.local RECETTE UNIQUEMENT

## 1. En-tête

| Champ | Valeur |
|---|---|
| Date/heure | 2026-11-09 08:58 CET |
| GO Morris | Préparer les champs GitHub App RECETTE (fichier hors dépôt) |
| Processus | SFIA v2.6 |
| Profil | intervention locale bornée |
| Candidat Product | `51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b` |
| Code Product | **NON MODIFIÉ** |

## 2. Git Truth

| Item | Valeur |
|---|---|
| Worktree | `/Users/morris/Projects/sfia-workspace-next-ml4-git-collaboration` |
| Branche | `feat/next-git-collaboration-20261108` |
| HEAD / tip distant | `51b0c3b6…` |
| Tree | `cdbd7e37…` |
| Worktree ML4 RECETTE | **ABSENT** |
| Emplacement futur attendu (si worktree) | `<worktree-ml4-recette>/projects/sfia-studio-next/web/.env.local` |
| Emplacement utilisé (préparation hors dépôt) | `~/.config/sfia-studio-next/recette/.env.local` |

## 3. Action réalisée

1. Confirmé absence de worktree ML4 RECETTE.
2. Créé dossier `~/.config/sfia-studio-next/recette` mode **0700**.
3. Créé fichier `.env.local` mode **0600** avec identifiants RECETTE non secrets + placeholders Morris.
4. DEV `.env.local` et G4 RECETTE `.env.local` **non lus / non modifiés**.
5. Aucun secret recherché, copié ou affiché.
6. Fichier **hors dépôt** — non suivi Git (`fatal: outside repository`).

## 4. Chemin exact

`/Users/morris/.config/sfia-studio-next/recette/.env.local`

## 5. Champs à compléter par Morris (placeholders)

| Variable | Placeholder |
|---|---|
| `GITHUB_APP_CLIENT_ID` | `__A_COMPLETER_PAR_MORRIS__` |
| `GITHUB_APP_CLIENT_SECRET` | `__A_COMPLETER_PAR_MORRIS__` |
| `GITHUB_APP_PRIVATE_KEY_PATH` | `__CHEMIN_ABSOLU_DU_PEM_A_COMPLETER__` |

Commentaires explicatifs présents dans le fichier (sources App settings / PEM path / interdiction reprise DEV).

## 6. Champs préparés (non secrets) — noms seulement

`GITHUB_APP_ID` · `GITHUB_APP_INSTALLATION_ID` · `GITHUB_APP_EXPECTED_OWNER` · `GITHUB_APP_ALLOWED_REPO` · `GITHUB_APP_CALLBACK_URL`
Callback attendu : `http://127.0.0.1:3200/api/integrations/github/callback`

**Aucun contenu secret dans ce pack.**

## 7. Permissions

| Path | Mode |
|---|---|
| `~/.config/sfia-studio-next` | 0700 |
| `~/.config/sfia-studio-next/recette` | 0700 |
| `…/recette/.env.local` | **0600** |

## 8. Limites explicites

- Fichier = **préparation**, pas preuve de configuration RECETTE opérationnelle.
- Code tip conserve encore les IDs App DEV en dur — adaptation par lane = mandat technique ultérieur.
- Pas de worktree / démarrage RECETTE / OAuth / REAL / commit Product.

## 9. Fake/Real Qualification §6.16

| Item | Statut |
|---|---|
| Env prep file created | DONE (local off-repo) |
| RECETTE operational | NOT PROVEN / NOT SERVED |
| Secrets completed | NOT DONE (Morris) |
| Product tip | INCHANGÉ `51b0c3b6` |

## 10. Verdict

**ML4 RECETTE ENV PREP — GITHUB APP FIELDS PREPARED OFF-REPO — AWAITING MORRIS SECRET COMPLETION — PRODUCT UNCHANGED.**
