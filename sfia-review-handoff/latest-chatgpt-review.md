# SFIA STUDIO NEXT — ML4
# REVIEW PACK FULL — CORRECTION RECETTE D1 OAUTH CREDENTIALS

## 1. En-tête

| Champ | Valeur |
|---|---|
| Date/heure | 2026-11-09 11:49 CET |
| Processus | SFIA v2.6 |
| Type | INC / correction configuration RECETTE |
| Profil | CRITICAL |
| GO | Morris — reprise credentials RECETTE sans ressaisie |
| Version | 0.0.0-dev / NO RELEASE |

## 2. Git Truth

| Item | Valeur |
|---|---|
| Candidat servi | 974b0030a94469bef05496151792e8c35a9a83e9 |
| Tree | 6ca5d0ad37114dc88cfe5fd821b4762fc7bcd357 |
| BUILD_ID | RzpCuGMK6SnwfucphK7Qa |
| Remote Product | 51b0c3b6f70188b64ca43bcf1dc6e13bb605ab5b (non poussé) |
| main | 6667a43858a5421e391b7441246536daad148bd6 |
| L3 parent entrée | 22cb78164345edb6f90c7e4303d6b498e26bebcc |
| Worktree | …/sfia-workspace-next-ml4-recette-build-974b0030 |
| PID | 29507 |
| Code modifié | **AUCUN** |

## 3. Cause racine démontrée

`/login` affichait « GitHub OAuth BLOCKED — secrets clients absents » car Better Auth D1 exige `GITHUB_CLIENT_ID` + `GITHUB_CLIENT_SECRET`, **distincts** des `GITHUB_APP_*` (D9).

Inventaire : ces deux variables étaient **ABSENTES** de `~/.config/sfia-studio-next/recette/.env.local` alors que App/OpenAI/DB ML4 étaient déjà présents. Le basculement précédent n'avait repris que `OPENAI_API_KEY`.

## 4. Matrice non secrète (extrait)

| Variable | Hist. ML3 RECETTE | ML4 avant | ML4 après | Action |
|---|---|---|---|---|
| GITHUB_CLIENT_ID | PRESENT | ABSENT | PRESENT | reprise ML3 61fe295b |
| GITHUB_CLIENT_SECRET | PRESENT | ABSENT | PRESENT | reprise ML3 61fe295b |
| BETTER_AUTH_SECRET | PRESENT | PRESENT | PRESENT | conservé ML4 |
| BETTER_AUTH_URL | :3200 | :3200 | :3200 | inchangé |
| OPENAI_API_KEY | PRESENT | PRESENT | PRESENT | inchangé |
| GITHUB_APP_* | N/A hist. | PRESENT RECETTE | PRESENT | inchangé |
| DATABASE_URL | autre DB | sfia_next_recette_ml4 | inchangé | non recopié |
| STUDIO_DEV_TEST_LOGIN | 1 en ML3 | ABSENT | ABSENT | **non repris** |
| STUDIO_E2E | 1 en ML3 | ABSENT | ABSENT | **non repris** |
| STUDIO_GITHUB_ALLOW_MUTATIONS | ABSENT | ABSENT | ABSENT | OK |

DEV **non consulté** comme source de secrets.

## 5. Preuves runtime (sans secrets)

| Check | Résultat |
|---|---|
| GET /api/auth/status | `configured=true` |
| POST /api/auth/sign-in/social | 200 + URL github.com/login/oauth/authorize |
| redirect_uri D1 | `http://127.0.0.1:3200/api/auth/callback/github` |
| Callback D9 | `http://127.0.0.1:3200/api/integrations/github/callback` (distinct) |
| App READ-ONLY | PASS App 5677465 / install 180092114 |
| mutationsAllowed | false |
| POST /api/dev/login | **403** (RECETTE) |
| SHA/BUILD | inchangés |
| Consentement navigateur / session | **NOT RUN** |

Note : `ps eww` ne liste pas les vars chargées via `.env.local` sous `env -i`+Next — preuve d'injection = status API + démarrage OAuth.

## 6. UX « Pilote A/B (DEV) »

Boutons toujours visibles sur `/login` (écart UX historique). Clic serveur → 403. Pas de changement de code ce cycle.

## 7. Fake/Real §6.16

| Item | Statut |
|---|---|
| Config D1 disque+runtime | RESTORED / CONFIGURED |
| OAuth start URL | REAL générée |
| Login LIVE callback | NOT PROVEN |
| USER E2E | NOT RUN |

## 8. Verdict

**ML4 RECETTE CONFIGURATION — RESTORED AND VERIFIED — STUDIO OAUTH READY FOR MORRIS USER LOGIN — PRODUCT SHA/BUILD UNCHANGED — USER E2E NOT RUN.**
