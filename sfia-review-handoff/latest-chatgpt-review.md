# SFIA Studio Next — Review Pack LIGHT
## ML3 / RCT-02 — Déploiement RECETTE candidat 61fe295b

| Champ | Valeur |
|---|---|
| Date UTC | 2026-11-07T02:06Z |
| GO Morris | APPROUVÉ — PRÉPARATION ET DÉPLOIEMENT RECETTE BORNÉS |
| Candidat | `61fe295b6704e820694d2379e7f6ab1814143172` |
| Build ID | `ZCkIWQ341KK1KOHTD1a5L` |
| URL | http://127.0.0.1:3200 |
| Schéma | `007_ml3_pilotage_decisions` |
| Verdict technique | **RECETTE ML3 RCT-02 CANDIDATE 61fe295b DEPLOYED — READY FOR MORRIS TARGETED LIVE RETEST** |
| Verdict LIVE utilisateur | PENDING |

## 1. GO et portée

Mise à disposition RECETTE du correctif publié. Aucune correction applicative, aucun push projet, aucune migration, aucun tour LIVE automatisé au nom de Morris.

## 2. Git Truth Check

```
## sfia/next-ml3-rct02-live-remediation...origin/sfia/next-ml3-rct02-live-remediation
 M .tmp-sfia-review/chatgpt-review.md
```

- Branche projet `sfia/next-ml3-rct02-live-remediation` @ `61fe295b6704e820694d2379e7f6ab1814143172` (= candidat)
- Worktree projet : seul `.tmp-sfia-review` modifié (exclu)
- Ascendance `d646d42a` → `61fe295b` (1 commit)
- Worktree RECETTE immuable détaché : `/Users/morris/Projects/sfia-workspace-ml3-recette-build-61fe295b` @ `61fe295b`
- Ancien worktree préservé : `/Users/morris/Projects/sfia-workspace-ml3-recette-build-d646d42a` @ `d646d42a` / BUILD_ID `R7JhVsbMaJdiUuuljApyn`

## 3. Isolation ENV-01

- Lane `STUDIO_LANE=RECETTE`, port `3200`, DB `127.0.0.1:5434/sfia_next_recette_ml3`
- DEV `:5433` / code projet non servi
- LaunchAgent `com.sfia.studio.next.recette.ml3` → run script + WorkingDirectory du worktree **61fe295b**
- PID runtime observé : `58778`
- Migrations `001`–`007` **identiques** à d646 (aucune migration appliquée)

## 4. Sauvegarde et rollback

- Dump FC : `artifacts/db-backups/sfia_next_recette_ml3_20261107T020425Z_pre_61fe295b.dump` (créé+taillé)
- Preuve de restauration : **NON exécutée** ce cycle (non destructive only)
- Procédure code rollback : `artifacts/rollback-to-d646d42a.txt` (plist bak d646 → bootstrap)
- Ancien build/worktree : **non supprimé**

## 5. Build et smoke

- `npm ci` + lint PASS + tsc PASS + `next build` → BUILD_ID `ZCkIWQ341KK1KOHTD1a5L` (≠ `R7JhVsbMaJdiUuuljApyn`)
- HTTP `/login` **200** + BUILD_ID présent dans HTML
- HTTP `/api/portfolio` **401** (non authentifié)
- HTTP `/` **307**
- Tables D5/D6 présentes ; counts avant bascule : human_decisions=20 / project_cycles=5 / governance_restrictions=3

## 6. Manifeste RECETTE (non secret)

Voir `/Users/morris/Projects/sfia-workspace-ml3-recette-build-61fe295b/artifacts/recette-served-manifest.json`.

Faits clés :
- package `0.0.0-dev` / `NO RELEASE` / STABLE NOT AVAILABLE / candidate version NOT AVAILABLE
- OpenAI key SET / GitHub OAuth CONFIGURED / LIVE non auto-exécuté
- CI publish SHA : **NOT RUN**

## 7. Protocole retest Morris

Fiche : `artifacts/retest-protocol-rct02-targeted.md`
Messages C04/C05/C06 : transcripts exacts de `recette-ml3-rct02-live-corrective-gaps.md` §3.1/4.1/5.2 — **sans reformulation**.
Profil navigateur isolé requis (Reserve A cookies).

## 8. Réserves

- LIVE targeted retest **PENDING**
- CI NOT RUN
- ENV-01 cookie host Reserve A
- C03 intercycles NOT PROVEN
- Dump restore non prouvée ce cycle

## 9. Gates NON acquis

PR, merge, main, STABLE, release, ML3 CLOSED, ADOPTED, tours LIVE Cursor-automatisés.

## 10. Verdict

**RECETTE ML3 RCT-02 CANDIDATE 61fe295b DEPLOYED — READY FOR MORRIS TARGETED LIVE RETEST**
