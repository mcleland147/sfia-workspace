# SFIA Review Pack Full — E05 Deploy to Existing RECETTE

## 1. Date, cycle, profil et GO

| Champ | Valeur |
|---|---|
| Date | 2026-11-17 |
| Cycle | 11 — Déploiement / release |
| Profil | **Critical** |
| Typologie | EVOL — mise à disposition d'une évolution existante |
| Macro-lot | Ensemble 05 — Travail avec Nora |
| GO Morris | Déploiement RECETTE 17/11/2026 — candidat `cb638613…` |
| Exécutant | Cursor |
| Verdict | **E05 DEPLOYED TO EXISTING RECETTE — TECHNICAL SMOKE VERIFIED — MORRIS UAT READY** |

Ce verdict signifie seulement que Morris peut commencer sa RECETTE. Il ne signifie pas qu'elle est acceptée.

---

## 2. Git Truth Check initial

Workspace DEV : `/Users/morris/Projects/sfia-workspace-next-ml4d-ux003-entry-20261116`

| Contrôle | Résultat |
|---|---|
| Branche | `feat/next-ml4d-project-space-20261116` |
| HEAD | `cb638613890bff769b3cbbcc99449b430c89faa6` |
| TREE | `3aa6a2d6cc826c4299d9f8c1b19b5e3dd4b3ca20` |
| `cat-file -t` candidat | commit |
| Concordance SHA/tree | **MATCH** |
| Dirty (non bloquant) | `.tmp-sfia-review/chatgpt-review.md` + 2 PNG evidence |
| Untracked | aucun |
| Push produit | **AUCUN** (pas d'upstream) |

Références distantes : `main@997d4c4e…` ; handoff précédent `73ae298c` / blob `6f39e614…`.

---

## 3. Sources Git et SHAs

| Source | Blob / SHA |
|---|---|
| ENV-01 `environnements-recette-et-promotions.md` | `14b61f0d1265cf85fcca09b028dd09bd8c71597f` |
| `product-versioning.md` | `8bc93e0fafac0f981c446e978a37f5f93d183875` |
| Handoff précédent | `73ae298c6422270b04ae90beb01bad2e8fa9af18` / blob `6f39e61411b771bb7ec87593c3f49bc08c10e75c` |
| Verdict précédent | `E05 FINAL CANDIDATE — TECHNICALLY READY FOR MORRIS RECETTE DEPLOYMENT GO` |

Aucune source normative modifiée.

---

## 4. Préflight ENV-01

| Contrôle | Résultat |
|---|---|
| Worktree cible | `…/ensemble04-recette-build-984d77a3` |
| Processus | PID 48351 `next-server` CWD web RECETTE |
| Port | `127.0.0.1:3200` seul |
| BUILD avant | `3LzvYPTQc-Km7St6nF97r` |
| SOURCE avant | `984d77a36695c2f59ebbc18619e54eeeb43ad94e` |
| HTTP | 307 → /login |
| DB RECETTE | `127.0.0.1:5434` / `sfia_next_recette_ml4` |
| DB DEV | `127.0.0.1:5433` / `sfia_next_dev` — **isolée** |
| Cookie lane | `sfia_studio_session__RECETTE` |
| Config | `~/.config/sfia-studio-next/recette/.env.local` (`STUDIO_LANE=RECETTE`, `STUDIO_PORT=3200`) |
| package/lock/migration diff OLD→CAND | **NONE** |
| Secrets affichés | non |

**ENV-01 PASS** — réserve cookies same-host multi-ports maintenue.

---

## 5. Identification RECETTE initiale

| Item | Avant |
|---|---|
| URL | http://127.0.0.1:3200 |
| HEAD | `984d77a3…` (detached) |
| BUILD_ID | `3LzvYPTQc-Km7St6nF97r` |
| Runtime | `next start -H 127.0.0.1 -p 3200` via script local |
| Untracked préservés | `.sfia-restore-artifacts/`, `SOURCE_SHA.txt`, start script |

---

## 6. Contrôle artefact rollback

Chemin : `.sfia-restore-artifacts/3LzvYPTQc-Km7St6nF97r/`

| Contrôle | Résultat |
|---|---|
| BUILD_ID | `3LzvYPTQc-Km7St6nF97r` |
| SOURCE_SHA.txt | `984d77a3…` |
| Fichiers snapshot | 358 / 281M |
| `shasum -c` depuis `next-snapshot/` | **299 OK** (avant et après déploiement) |
| `diff -rq` live↔snapshot (préflight) | vide |
| Préservé après checkout/build | **OUI** |

Stratégie rollback cohérente source+build documentée (pas de restore LIVE exécuté — déploiement réussi).

### RESTORE.md (intégral)

```markdown
# Restore procedure (NOT executed in pre-RECETTE cycle)

## BUILD CURRENT VERIFIED
- Served from: projects/sfia-studio-next/web/.next
- BUILD_ID: 3LzvYPTQc-Km7St6nF97r
- SOURCE_SHA: 984d77a36695c2f59ebbc18619e54eeeb43ad94e
- Port: 127.0.0.1:3200 · `next start`

## RESTORABLE ARTIFACT VERIFIED
- This directory: `.sfia-restore-artifacts/3LzvYPTQc-Km7St6nF97r/`
- Contains: BUILD_ID, SOURCE_SHA.txt, next-snapshot/, SHA256SUMS.txt, RESTORE.md
- Passive copy only — never replaces the live `.next` until Morris GO.
- Integrity: `cd next-snapshot && shasum -a 256 -c ../SHA256SUMS.txt` → 299 OK (paths relative to next-snapshot; BUILD_ID also mirrored at artifact root).
- Live vs snapshot: `diff -rq` empty (358 files each) at preparation time.

## RESTORE PROCEDURE (future GO only)
1. Stop `next start` on :3200 using the same exploitation path used to start it.
2. Move aside live `.next` (e.g. `.next.failed-<ts>`).
3. From this artifact directory: `rsync -a next-snapshot/ <RECETTE_WT>/projects/sfia-studio-next/web/.next/`
4. Confirm BUILD_ID file equals `3LzvYPTQc-Km7St6nF97r`.
5. Optionally re-verify: `cd <RECETTE_WT>/projects/sfia-studio-next/web/.next && shasum -a 256 -c <ARTIFACT>/SHA256SUMS.txt`
6. Restart `next start -H 127.0.0.1 -p 3200` from the RECETTE web directory.
7. Smoke HTTP :3200.

## RESTORE LIVE TEST NOT EXECUTED
No stop/restart/replace was performed during preparation.

```

---

## 7. Procédure de déploiement réellement exécutée

1. Préflight OK — aucune mutation avant.
2. SIGTERM PID 48351 (CWD vérifié) — port libre ~1s.
3. `git checkout --detach cb638613890bff769b3cbbcc99449b430c89faa6` dans worktree RECETTE.
4. Vérif HEAD/TREE exacts ; artefact intact.
5. Update opérationnel `SOURCE_SHA.txt` + start script `SFIA_SOURCE_SHA`.
6. `mv .next .next.pre-e05-20261117-135853` (aside ; artefact vérifié inchangé).
7. `npx next build` avec env RECETTE — PASS ; BUILD_ID observé `slh3bItXudDCIEaR2WYho`.
8. `nohup bash start-recette-ensemble04-984d77a3.sh` — écoute :3200.
9. Smoke techniques bornés.
10. Review Pack + Handoff L3.

Aucune migration. Aucune nouvelle lane. Aucun push produit. Aucune correction de code.

---

## 8. Commandes significatives et résultats

| Étape | Résultat |
|---|---|
| Stop :3200 | PASS |
| Checkout détaché candidat | HEAD/TREE match |
| `next build` | PASS (warnings ESLint préexistants) |
| Start | PID 52221 `next-server` CWD web RECETTE |
| HTTP / | 307 Location `/login` |
| HTTP /login | 200 |

Log : `.sfia-deploy-logs/deploy-e05-20261117-135853.log`

---

## 9. SHA/tree candidat

| | |
|---|---|
| source_sha servi | `cb638613890bff769b3cbbcc99449b430c89faa6` |
| tree_sha | `3aa6a2d6cc826c4299d9f8c1b19b5e3dd4b3ca20` |
| Concordance | **OUI** (git rev-parse worktree RECETTE) |

---

## 10. Ancien et nouveau BUILD_ID

| | |
|---|---|
| Avant | `3LzvYPTQc-Km7St6nF97r` |
| Après (observé) | `slh3bItXudDCIEaR2WYho` |
| Inventé ? | **NON** |

---

## 11. Base et configurations non secrètes

| Item | Observation |
|---|---|
| DATABASE | `127.0.0.1:5434/sfia_next_recette_ml4` |
| Isolation DEV | ports 5433 vs 5434 ; DB names distincts |
| Migration | aucune dans le diff candidat ; non exécutée |
| Accès API post-deploy | portfolio/projects 200 — données existantes présentes |
| psql/node-pg local | non disponible pour inventaire SQL — preuve via API applicative |
| Document root | `~/.config/sfia-studio-next/recette/documents` |
| `STUDIO_GITHUB_ALLOW_MUTATIONS` | vide |
| Nora fixture forcée | non (`STUDIO_FORCE_NORA_FIXTURE` unset) |

---

## 12. Statut des smoke tests

| Test | Statut | Preuve |
|---|---|---|
| Démarrage / identité SHA-BUILD | PASS | HEAD/TREE/BUILD_ID |
| Login page + boutons | PASS | browser :3200/login |
| Auth DEV test login | PASS (FAKE) | API + UI Pilote A ; cookie `__RECETTE` |
| Portfolio | PASS | 2 projets, 11 préparations existants |
| Shell rail + Espace projet | PASS | browser |
| Surface Travail | PASS | composer « Message à Nora », panneau En bref |
| Conservation brouillon (nav) | PASS | texte conservé après navigation |
| Documents / visionneuse | PARTIEL | 0 documents sur projet smoke ; surface documents non discriminée |
| Choix Nora / message LIVE | NOT EXECUTED | éviter mutation durable hors mandat smoke |
| Git D9 REAL | NOT EXECUTED | |
| OAuth LIVE | NOT EXECUTED | |

---

## 13. Erreurs et incidents

- Warnings ESLint build (unused vars / `<img>`) — non bloquants, préexistants.
- Premier `browser_click` « Ouvrir le projet » sans navigation — contournement par URL directe ; non bloquant.
- `psql` absent sur PATH — inventaire SQL non fait ; DB prouvée via API.

Aucun rollback déclenché.

---

## 14. Rollback

| | |
|---|---|
| Déclenché ? | **NON** (déploiement réussi) |
| Artefact précédent | préservé, intégrité 299 OK post-deploy |
| Procédure | documentée (source `984d77a3` + build `3LzvYPTQc…` + deps + config + :3200) |
| RESTORE LIVE | **NOT EXECUTED** |

---

## 15. État final réel de `:3200`

| Item | Valeur |
|---|---|
| LISTEN | `127.0.0.1:3200` PID 52221 |
| CWD | `…/ensemble04-recette-build-984d77a3/projects/sfia-studio-next/web` |
| HEAD | `cb638613890bff769b3cbbcc99449b430c89faa6` |
| TREE | `3aa6a2d6cc826c4299d9f8c1b19b5e3dd4b3ca20` |
| BUILD_ID | `slh3bItXudDCIEaR2WYho` |
| HTTP | 307/200 opérationnels |
| Application utilisable | **OUI** pour UAT Morris |

---

## 16. Fake / Real Qualification

| Capacité | Qualification |
|---|---|
| Runtime RECETTE servi | **REAL** (observé) |
| Auth smoke | **FAKE** DEV test login — ≠ OAuth LIVE |
| Nora conversation LIVE | **NON DÉMONTRÉE** ce cycle (non exécutée) |
| D3/PG RECETTE | accès lecture via API — données présentes |
| Git D9 | route présente ; REAL NOT EXECUTED |
| Rollback LIVE | NOT EXECUTED |

---

## 17. Versioning

| | |
|---|---|
| Politique | product-versioning.md blob `8bc93e0f…` |
| E05 | MINOR prévisionnelle |
| Release STABLE | **NON** |
| Tag / numéro inventé | **aucun** |
| Commit produit | **aucun** (candidat non modifié) |

---

## 18. Réserves

- Revue visuelle / fonctionnelle : Morris.
- Cookies same-host multi-ports.
- OAuth LIVE non démontré.
- Nora LIVE message/choix non smoke-exécutés.
- Git D9 REAL non exécuté.
- Streaming M2 hors V1.
- Inventaire SQL direct non disponible (psql absent) — DB prouvée via app.
- Documents vides sur projet smoke → visionneuse non exercée.

---

## 19. Manifeste final non secret (intégral)

```markdown
# Ensemble 05 — Manifeste de déploiement RECETTE (non secret)

| Champ | Valeur |
|---|---|
| Delivery ID | DELIV-2026-11-17-ML4D-E05-RECETTE-DEPLOY |
| Date/heure | 2026-11-17 ~14:00 CET |
| GO Morris | Déploiement RECETTE 17/11/2026 |
| Lane | RECETTE existante |
| URL | http://127.0.0.1:3200 |
| Worktree | /Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3 |
| source_sha | cb638613890bff769b3cbbcc99449b430c89faa6 |
| tree_sha | 3aa6a2d6cc826c4299d9f8c1b19b5e3dd4b3ca20 |
| build_id | slh3bItXudDCIEaR2WYho |
| Previous SOURCE_SHA | 984d77a36695c2f59ebbc18619e54eeeb43ad94e |
| Previous BUILD_ID | 3LzvYPTQc-Km7St6nF97r |
| DB | 127.0.0.1:5434 / sfia_next_recette_ml4 (conservée) |
| Migration | aucune |
| Nouvelle lane | non |
| Rollback artifact | .sfia-restore-artifacts/3LzvYPTQc-Km7St6nF97r/ (préservé, 299 OK) |
| Old .next aside | .next.pre-e05-20261117-135853 |
| Auth smoke | DEV test login (FAKE) — cookie sfia_studio_session__RECETTE |
| Jeu de test | projets existants RecetteSmoke / Smoke CTA — aucune création |
| Statut | DEPLOYED — technical smoke verified |

## Smoke

| Contrôle | Résultat |
|---|---|
| HTTP / → /login | 307 |
| /login | 200 |
| Login Pilote A (DEV) | PASS (FAKE) |
| Portfolio | PASS — 2 projets / 11 préparations |
| Projet Travail | PASS — composer + En bref |
| Draft navigation | PASS — brouillon conservé après nav |
| Documents surface | partiel — URL documents rebascule UI Travail; 0 docs |
| Nora LIVE message/choix | NOT EXECUTED (éviter mutation) |
| Git D9 REAL | NOT EXECUTED |
| OAuth LIVE | NOT EXECUTED |

## Rollback disponible

1. Stop :3200
2. checkout --detach 984d77a36695c2f59ebbc18619e54eeeb43ad94e
3. rsync artifact next-snapshot → web/.next
4. Restore start script SOURCE_SHA
5. Restart start-recette script
6. Verify BUILD_ID=3LzvYPTQc-Km7St6nF97r

RESTORE LIVE TEST NOT EXECUTED this cycle (deployment succeeded).

```

### Start script opérationnel post-deploy (intégral, non secret)

```bash
#!/bin/bash
set -euo pipefail
export PATH="/opt/homebrew/bin:/usr/local/bin:/usr/bin:/bin"
cd "/Users/morris/Projects/sfia-workspace-next-ml4d-ensemble04-recette-build-984d77a3/projects/sfia-studio-next/web"
set -a
source "$HOME/.config/sfia-studio-next/recette/.env.local"
set +a
export SFIA_SOURCE_SHA=cb638613890bff769b3cbbcc99449b430c89faa6
unset STUDIO_GITHUB_ALLOW_MUTATIONS || true
export STUDIO_GITHUB_ALLOW_MUTATIONS=
export NODE_ENV=production
# Do not force Nora fixture — LIVE path for Morris séances
unset STUDIO_FORCE_NORA_FIXTURE || true
export STUDIO_FORCE_NORA_FIXTURE=
exec npx next start -H 127.0.0.1 -p 3200

```

---

## 20. Verdict unique et conditions de recette Morris

**E05 DEPLOYED TO EXISTING RECETTE — TECHNICAL SMOKE VERIFIED — MORRIS UAT READY**

Morris peut ouvrir `http://127.0.0.1:3200`, se connecter (profil navigateur RECETTE recommandé), accéder aux projets existants et tester Travail avec Nora.

Conditions respectées : SHA/tree exacts, nouveau BUILD_ID observé, base conservée, pas de migration, pas de nouvelle lane, artefact rollback préservé, aucun push produit.

Gates non autorisés : push produit, PR, merge, Gate C, ML5, STABLE, ADOPTED, Figma F2, acceptation UX.

Instruction ChatGPT : relire depuis `sfia/review-handoff` → `sfia-review-handoff/latest-chatgpt-review.md`.
