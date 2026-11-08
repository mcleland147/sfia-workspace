# Review Pack FULL — G4 merge PR #669 + post-merge + ML4 prep — 2026-11-08T12:57:00+01:00

**Verdict :** `PR #669 MERGED — POST-MERGE NOT GREEN / INCIDENT À ARBITRER — NO STABLE/RELEASE`
**Merge GitHub :** REAL effectué · **ML4 NOT STARTED** · **NO ADOPTED / F2/G5 NOT PROVEN**

## 1. Date / fuseau / cycle

- Date: 2026-11-08 · fuseau Europe/Paris (CET)
- Cycle: 14 Post-merge (+13 prérequis, +9 QA intégrée) · EVOL · Critical
- Knowledge Contract cycle 14: guidance routing §5.9 / post-merge + `templates/post-merge-template.md` ; CKC dédié cycle-14 **ABSENT — FALLBACK SFIA v2.6 ROUTING/TEMPLATE**

## 2. Git Truth Check (worktree construction)

| | |
|---|---|
| pwd | `/Users/morris/Projects/sfia-workspace-next-g4-construction` |
| branch | `feat/next-convergence-ux-g4-construction` |
| HEAD local | `ee6d11e9ed9d7e09fc3bf26f5021120fb0eab67f` |
| origin/main (post-merge) | `ebf3d1503f6dd3c0180e1dec5ffeca82eb136d45` |
| Untracked/exclu | `.tmp-sfia-review/` modifié localement ; `g2-source/scripts/tmp/` untracked **jamais ajouté** |

```
 M .tmp-sfia-review/chatgpt-review.md
?? projects/sfia-studio-next/construction/convergence-ux-parcours-pilote-nora/g2-source/scripts/tmp/

```

### Pre-merge gate (observé avant commande)

- PR #669 OPEN non-draft · head `ee6d11e9ed9d7e09fc3bf26f5021120fb0eab67f` · base `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` · MERGEABLE · CLEAN
- Checks head: Build/validate Next SUCCESS · Next Required Gate SUCCESS · Studio Required Gate SUCCESS · Studio build SKIPPED
- 9 commits préservés ; mode merge commit (comme #661) · pas de squash/rebase · pas `--delete-branch`

## 3. Merge GitHub — preuve

Commande unique exécutée:

```bash
gh pr merge 669 --repo mcleland147/sfia-workspace --merge
```

| | |
|---|---|
| PR | https://github.com/mcleland147/sfia-workspace/pull/669 |
| state | **MERGED** (mergedAt 2026-11-08T11:50:01Z) |
| merge_commit_sha | `ebf3d1503f6dd3c0180e1dec5ffeca82eb136d45` |
| parents | `f0d59bc8f72ed8544ac4c82dfa9ac0f23889c03e` + `ee6d11e9ed9d7e09fc3bf26f5021120fb0eab67f` |
| second parent == head | OUI |
| tree | `6f1448518f34e3418c731fa16e896b796386843b` |
| diffstat merge | 159 files, +82932 / −708 |
| tmp exclus | `g2-source/scripts/tmp/` absent du tree ; `.tmp-sfia-review/chatgpt-review.md` déjà historique sur main (hors G4 nouveau) |

Fichiers projet créés/modifiés **par ce cycle hors merge** : **aucun**. Aucun commit projet additionnel.

## 4. Post-merge CI sur `main@ebf3d1503f6dd3c0180e1dec5ffeca82eb136d45`

| | |
|---|---|
| Workflow | SFIA Studio Next CI |
| Run | https://github.com/mcleland147/sfia-workspace/actions/runs/42477468119 |
| headSha | `ebf3d1503f6dd3c0180e1dec5ffeca82eb136d45` |
| Detect Next | SUCCESS |
| Build and validate SFIA Studio Next | **FAILURE** |
| SFIA Studio Next Required Gate | **FAILURE** |

### Échec observable

Playwright BROWSER FAKE: **2 failed / 10 passed** (~2.0m)

1. `ml3-pilotage.spec.ts` — `pilotage-panel` not visible (5s)
2. `ml3-pilotage.spec.ts` B13 C02 — `b13-authority-legend` not visible (5s)

Note: la **même** head `ee6d11e9ed9d7e09fc3bf26f5021120fb0eab67f` était CI GREEN sur la PR (run 42475102674). Échec post-merge = **incident à arbitrer** ; **aucune correction sur main**, pas de hotfix/PR/rollback sans GO Morris.

## 5. QA locale isolée (post-merge worktree)

Worktree détaché: `/Users/morris/Projects/sfia-workspace-next-g4-postmerge-ebf3d150` @ `ebf3d1503f6dd3c0180e1dec5ffeca82eb136d45`
DB isolée: `sfia_next_postmerge_g4` sur `sfia-next-recette-pg:5434` (migrations 001→007) — **sans toucher** `sfia_next_recette_g4`
Port: `127.0.0.1:3300` `next start` build id `7fnqMbiKd_LTUep9blGAp` — **processus arrêté en fin de cycle**

| Check | Result |
|---|---|
| `tsc --noEmit` | PASS (dans séquence build) |
| unit avec `STUDIO_LANE=DEV` | **123 passed** |
| unit avec `.env` RECETTE chargé | 1 fail cognitif attendu (lane protégée) — non régression produit |
| `next build` | PASS → `7fnqMbiKd_LTUep9blGAp` |
| HTTP `/login` :3300 | 200 · Connexion Studio · sans module `inter_1ec0685a` (fallback police tip) |
| FAKE login `POST /api/dev/login` | 200 · cookie `sfia_studio_session__RECETTE` · authMode `dev-test-login` |
| `GET /api/portfolio` | 200 · session Pilot A · portfolio kind empty + preparations |
| PG integration suite | NON RELANCÉE locale (CI PR les avait PASS ; CI post-merge a passé unit+PG avant Playwright) |

## 6. Environnements inchangés par le merge distant

| Lane | Observation |
|---|---|
| DEV `:3100` | Processus local toujours up ; **HTTP `/login` → 500** observé pendant la fenêtre post-merge (**non modifié par Cursor** ; incident local distinct à diagnostiquer ; pas de fix ici) |
| RECETTE G4 `:3200` | PID 74165 · build **`U2HrgAwriuzf6f1YI0rRK`** · SHA runtime **`29535d07`** · HTTP 200 — **non attribué à tip/merge** |
| STABLE | NOT AVAILABLE · **NO RELEASE** |
| Postmerge `:3300` | démarré puis **fermé** |

## 7. Fake / Real

| Preuve | Classe |
|---|---|
| `gh pr merge` | **REAL** GitHub |
| CI Actions post-merge | **REAL** automation · résultat FAILURE |
| Login / portfolio postmerge | **FAKE** login · DB isolée REAL |
| Nora LIVE / OAuth | **NOT PROVEN** |
| F2/G5 visual | **NOT PROVEN** · WITH RESERVES |

## 8. Réserves reportées

1. F2/G5 / conformité Figma : NOT PROVEN
2. OAuth LIVE / Nora LIVE : NOT PROVEN
3. Police: RECETTE `29535d07` encore avec wiring font Google build ; `main` tip sans `next/font/google` (fallback système) — écart conscient
4. Preuve RECETTE ≠ SHA merge `ebf3d1503f6dd3c0180e1dec5ffeca82eb136d45`
5. Post-merge CI Playwright 2 fails → **NOT GREEN**
6. DEV local `:3100` 500 pendant contrôles — hors mutation merge ; à traiter hors ce pack

## 9. Patch gouvernance proposé (NON COMMITÉ)

Roadmap/SEF devraient ultérieurement noter: PR #669 MERGED, post-merge CI incident Playwright, convergence G4 intégrée WITH RESERVES, ML4 toujours NOT STARTED. **Aucun commit normatif dans ce cycle.**

## 10. Handoff de reprise ML4 (préparation seulement)

**Capacité visée (Roadmap Git main):** ML4 — Collaborer et publier avec Git (D9) ; GitHub seul connecteur réel ; Paramètres → Intégrations ; publication documentaire gouvernée. Réf. `decisions/2026-11-07-ml4-git-publication-ml5-cursor-trajectoire.md`, `construction/integration-git/*`, Figma 218–235 / INDEX 388:425 VALIDATED SPEC UX.

**Dépendances au socle fusionné (#669):** shell F1, portfolio A1, documents A2/D4, sas chat-first, Nora/Docs/Journal/Pilotage surfaces, pack G2 preuves, CI Next path.

**IN (candidat):** intégration GitHub gouvernée, lecture/publication documentaire liée Git, contrats acceptation/matrice déjà en construction/, faisabilité fournisseur.

**OUT:** démarrage construction Cursor ML4 ; STABLE/release ; refonte UX convergence ; correction incident post-merge sans GO.

**Blocages / preuves à acquérir avant GO construction ML4:**
- Arbitrage Morris sur incident CI post-merge #669 (re-run vs hotfix)
- Qualif OAuth/Git secrets sans exposer
- Contrats ML4 + validation visuelle Figma Git si exigée
- Isolation ENV-01 pour RECETTE ML4 distincte

**Gate Morris pour démarrer ML4:** GO construction distinct obligatoire. **ML4 NOT STARTED** dans ce cycle.

## 11. Décision Morris encore requise

1. Arbitrer l'incident **post-merge CI FAIL** (re-run Actions / hotfix borné / acceptation temporaire WITH RESERVES)
2. GO distinct pour démarrer ML4 (après ou en parallèle de l'arbitrage CI, selon Morris)
