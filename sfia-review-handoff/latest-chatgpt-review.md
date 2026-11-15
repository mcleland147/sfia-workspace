# SFIA Review Pack FULL — ML4C RECETTE differential reuse qualification

## A. Date / GO / périmètre
- Date : 2026-11-15 07:03:58 CET
- GO Morris : 15 novembre 2026 — qualification différentielle RECETTE existante
- Cycle projet 9 — QA / validation
- Profil CRITICAL — RUN / QUALIFICATION
- Principe : **RÉUTILISER L'EXISTANT** — aucun déploiement, aucune mutation
- Produit HEAD : inchangé
- PRODUCT FILES CREATED/MODIFIED : NONE

## B. Git Truth initial / final
| Champ | Valeur |
| --- | --- |
| toplevel | `/Users/morris/Projects/sfia-workspace-next-semantic-intent-20261112` |
| branche | `fix/next-semantic-intent-convergence-20261112` |
| HEAD candidat | `11f7077edd08f1a0c680b6b920f20dbaf76c7bed` |
| tree | `71e052cf53232c70153a6056d948b97fb401b175` |
| parent | `c777358eacefa94c33b04a4d590ce9da7a8c525c` |
| dirty | `.tmp-sfia-review/chatgpt-review.md` seul |
| merge-base main | `6d237452680640324eeadbb18f4601fd7de99850` |
| d936da81 object | **disponible** (commit + worktree RECETTE) |
| d936da81 tree | `276679be1ea139525b2267cde9245b8fb88e9a76` |
| HEAD final produit | **UNCHANGED** `11f7077e` |

## C. Sources / refs
- ENV-01 main blob `14b61f0d…` ; versioning `8bc93e0f…`
- Handoff pré-RECETTE `3fd10216` blob `770b434f`
- Manifeste live : `…-ml4c-recette-build-d936da81/ops/recette-manifest-q2.yaml`
- Backups : `/Users/morris/Projects/sfia-recette-backups/` (ml4c-q2-20261114, pre-67bf6b0b, etc.)
- LaunchAgent : `com.sfia.studio.next.recette.ml4` (KeepAlive=true)

## D. Baseline RECETTE d936da81 (observée)
| Champ | Observation |
| --- | --- |
| URL | `http://127.0.0.1:3200` |
| PID serveur | 41282 `next-server (v15.5.29)` |
| LaunchAgent | `gui/501/com.sfia.studio.next.recette.ml4` **running** |
| Program | `…/ml4c-recette-build-d936da81/start-recette.sh` |
| KeepAlive / RunAtLoad | true / true |
| Worktree SHA | `d936da81ebf7d17eb78cc11da0538df000281a4a` |
| BUILD_ID servi | `n-7E8DgbcVu4g_RJWZoiK` |
| Node | 24.16.0 |
| Next | 15.5.29 |
| Config | `~/.config/sfia-studio-next/recette/.env.local` |
| Lane flags | `STUDIO_LANE=RECETTE` ; `STUDIO_DEV_TEST_LOGIN` **ABSENT** ; fixture ABSENT |
| BETTER_AUTH_URL | `127.0.0.1:3200` |
| DB | `sfia_next_recette_ml4` @ `127.0.0.1:5434` user `sfia_next_recette_ml4` |
| Tables public | 33 |
| Migrations tree | 001→012 identiques aux deux SHA |
| Document root | présent (dir) ; 0 entrées listées (métadonnée seule) |
| GitHub/OpenAI | CONFIGURED / PRESENT (valeurs non divulguées) |
| HTTP RO | `/login` 200 ; `/api/auth/status` CONFIGURED |

## E. Procédure de déploiement déjà utilisée
Pattern historique confirmé (ML4/ML4C Q2) :
1. Worktree immuable par SHA (`sfia-workspace-next-*-recette-build-<sha>`)
2. `npm run build` dans le worktree
3. `start-recette.sh` source `~/.config/.../recette/.env.local` + `SFIA_SOURCE_SHA` + `next start -H 127.0.0.1 -p 3200`
4. LaunchAgent `com.sfia.studio.next.recette.ml4` pointe le start script
5. Ancien artefact conservé ; backups sous `sfia-recette-backups/`
6. Rollback applicatif existant : `rollback-to-67bf6b0b.sh` (bootout/bootstrap plist — **non exécuté**)
7. **DB non restaurée** par le rollback binaire (commentaire explicite du script)

## F. Launcher / processus actuels
- Service actif : **ml4** (pas g4/ml3) sur worktree **d936da81**
- Plists historiques présents : `.recette.plist`, `.g4`, `.ml3`, `.ml4` — seul `.ml4` running
- Aucun kill / bootout / kickstart dans ce cycle

## G. Diff source d936da81 → 11f7077e
### Commits (7)
```
11f7077e fix(next): preserve explicit fence title in document admission
c777358e fix(next): reconcile D4 revise proposal and source contract
a30d47d2 test(next): align S05 browser fixtures with effect-risk policy
6c50a144 test(next): align D4 pre-effect assertions with governed outcomes
a2d37d1f fix(next): complete S05 knowledge owner evidence
67cfacea fix(next): require owner evidence for safe S05 reconciliation
3d0eab6f fix(next): preserve D4 integrity and reconcile safe S05 pending
```
### Diffstat Next
18 files, +3739 / −205 — conversation (D4/S05/nora), tests, as-built, delivery-history.
### UNCHANGED (vérifié name-status / diff vide)
- `package.json` / `package-lock.json`
- `src/db/schema.ts`
- migrations 001–012 (listes **identiques**)
- `lib/auth.ts`
- `domains/identity/**` (dont `session.ts` **0 octets de diff**)
- `domains/integrations/**`
- `domains/document/**`
- `app/login/**` / `api/dev/login/**`

### Classification des deltas
| Zone | Classe |
| --- | --- |
| Dépendances npm | UNCHANGED |
| Schéma / migrations | UNCHANGED → **NO DATABASE MIGRATION REQUIRED** |
| Auth Better Auth / cookies | UNCHANGED |
| Adaptateur DEV (code) | UNCHANGED (autorise toujours RECETTE si flag=1) |
| Flags runtime requis | UNCHANGED — config RECETTE actuelle **COMPATIBLE** |
| D4 document-command/act/service | COMPATIBLE (logique app ; pas de schéma) |
| S05 pending policy | COMPATIBLE |
| Nora system instructions | COMPATIBLE (guidance ; pas de nouveau secret) |
| E2E fixture route DEV | COMPATIBLE (lane DEV/E2E only) |
| Config/secrets lane | UNCHANGED / COMPATIBLE |
| GitHub App / OAuth | UNCHANGED / COMPATIBLE |
| OpenAI | UNCHANGED / COMPATIBLE |
| Runtime Next/Node | UNCHANGED (15.5.29 / 24.x) |

**REQUIRES_DATA_ACTION : aucun**
**REQUIRES_RUNTIME_CHANGE : bascule worktree/build/LaunchAgent uniquement (procédure existante)**
**BLOCKING technique schéma/config : aucun démontré**

## H. Dépendances et migrations
- package.json : **identique**
- package-lock : **identique** (diffstat vide)
- migrations : mêmes 12 fichiers aux deux SHA
- Conclusion : **NO DATABASE MIGRATION REQUIRED** pour bascule 11f7077e sur DB `sfia_next_recette_ml4`

## I. Compatibilité PostgreSQL
- Conteneur / rôle / DB inchangés
- 33 tables public présentes
- Schéma attendu candidat = 012 (inchangé vs d936da81)
- Continuité données : **conservation** ; aucune action data requise par le delta
- Rollback binaire ≠ rollback DB (explicite)

## J. Compatibilité configuration / secrets
- Fichier RECETTE réutilisable tel quel
- Clés additionnelles DEV (`STUDIO_DEV_TEST_LOGIN`, `STUDIO_FORCE_NORA_FIXTURE`, `OPENAI_AGENTS_DISABLE_TRACING`) **non requises** en RECETTE
- Clés RECETTE-only (`SFIA_SOURCE_SHA`, `SFIA_DOCUMENT_ROOT`, `SFIA_COG_PROFILE_TYPE`) déjà présentes — à **mettre à jour** `SFIA_SOURCE_SHA` / start script vers `11f7077e` **au moment du GO de bascule seulement**
- Aucun nouveau secret démontré nécessaire

## K. Cookies / sessions / adaptateur DEV
| Sujet | État vs d936da81 | Qualification |
| --- | --- | --- |
| Better Auth cookie jar 127.0.0.1 | UNCHANGED | **CARRIED RESERVE** — mitigation historique : profil navigateur dédié |
| Adapter cookie lane-scoped | UNCHANGED | inchangé |
| `STUDIO_DEV_TEST_LOGIN` | ABSENT RECETTE | API off ; UI boutons toujours visibles — **CARRIED** (G4 FAKE volontaire historique ≠ activation actuelle) |
| session.ts | identique | pas de nouvelle régression |

Aucune anomalie **nouvelle** démontrée entre d936da81 et 11f7077e sur ce volet.

## L. GitHub App / OAuth / Nora
- Code integrations/auth : UNCHANGED
- Config RECETTE : CONFIGURED / PRESENT
- Nora : instructions système enrichies ; modèle/provider inchangés côté config
- LIVE/REAL : **NOT RUN** ce cycle ; LIVE REVISE historique @ `c777358e` seulement

## M. Données et continuité documentaire
- DB à conserver
- Document root path existant
- Pas de changement `domains/document`
- Continuité préparations/documents/sessions : compatible schéma

## N. Sauvegarde et rollback préparables (non exécutés)
| Élément | Statut |
| --- | --- |
| Ancien worktree d936da81 | à conserver |
| BUILD_ID `n-7E8DgbcVu4g…` | identité rollback |
| Backups `sfia-recette-backups/ml4c-q2-20261114` | présents |
| Script rollback 67bf6b0b | modèle applicatif (bootout/bootstrap) |
| Future bascule 11f7077e | nouveau worktree immuable + build + retarget plist/start — **DRAFT** |
| Backup DB pré-bascule | recommandée opérationnelle ; **non faite** ici |

## O. Matrice G01–G17
| Gate | Verdict |
| --- | --- |
| G01 Git candidat | PASS |
| G02 RECETTE actuelle identifiée | PASS |
| G03 Procédure lancement retrouvée | PASS |
| G04 Diff source exact | PASS |
| G05 Dépendances | PASS |
| G06 Schéma DB | PASS — NO MIGRATION |
| G07 Config RECETTE réutilisable | PASS |
| G08 Secrets lane | PASS |
| G09 Auth/session | **PASS WITH CARRIED RESERVE** (cookies BA ; A-004 UI/code) |
| G10 GitHub OAuth/App | PASS |
| G11 Nora/OpenAI | PASS (config) |
| G12 Worktree/build isolables | PASS (pattern existant) |
| G13 Sauvegarde/reprise préparable | PASS (procédure ; non exécutée) |
| G14 Preuves techniques | PASS @11f7077e déterministe ; CI remote NOT RUN (risque séparé) |
| G15 Réserves historiques | PASS WITH CARRIED RESERVE |
| G16 Blocages nouveaux | **PASS — aucun BLOCKING nouveau démontré** |
| G17 GO Morris bascule | **REQUIRED** |

## P. Anomalies réellement nouvelles
**Aucune** entre d936da81 et 11f7077e sur schéma, deps, auth, secrets, GitHub, OpenAI, launcher.

## Q. Réserves historiques transportées
1. Cookies Better Auth sur `127.0.0.1` — profil navigateur dédié
2. ML4C-A-004 — UI DEV login visible ; code autorise RECETTE si flag ; flag actuellement ABSENT
3. CI remote absente sur `11f7077e` (LOCAL ONLY) — gate intégration distinct, non bloquant technique de bascule locale historique
4. LIVE non rejoué sur `11f7077e`
5. UAT ML4C NOT RUN sur candidat

## R. Fake / Real Qualification
| Frontière | Niveau |
| --- | --- |
| Diff Git / runtime inventory | DETERMINISTIC / BROWSER+HTTP RO |
| UNIT/PG/E2E @11f7077e | COVERAGE VERIFIED (cycle antérieur) |
| Build local @11f7077e | DETERMINISTIC PROVEN (préflight) |
| OAuth/GitHub/OpenAI RECETTE | CONFIGURED — LIVE/REAL NOT RUN ce cycle |
| Sessions | CARRIED RESERVE — NOT VERIFIED collision navigateur |
| CI remote 11f7077e | NOT RUN |

## S. Manifeste candidat DRAFT — NOT DEPLOYED

```yaml
lane: RECETTE
manifest_status: DRAFT_NOT_DEPLOYED
source_repository: mcleland147/sfia-workspace
source_branch: fix/next-semantic-intent-convergence-20261112
candidate_sha: 11f7077edd08f1a0c680b6b920f20dbaf76c7bed
candidate_tree: 71e052cf53232c70153a6056d948b97fb401b175
baseline_sha_served: d936da81ebf7d17eb78cc11da0538df000281a4a
baseline_build_id: n-7E8DgbcVu4g_RJWZoiK
baseline_worktree: /Users/morris/Projects/sfia-workspace-next-ml4c-recette-build-d936da81
target_address: http://127.0.0.1:3200
launcher: com.sfia.studio.next.recette.ml4
config_file: ~/.config/sfia-studio-next/recette/.env.local
database: sfia_next_recette_ml4@127.0.0.1:5434
schema_revision: 012_auth_concurrency_safety
database_migration_required: false
config_reuse: true
new_secrets_required: false
build_identifier: NOT ASSIGNED
deployment_status: NOT AUTHORIZED
switch_mechanism: immutable_worktree_plus_build_plus_retarget_launchagent
rollback: preserve_d936da81_artifact_application_only
carried_reserves:
  - better_auth_cookie_host_collision_mitigated_by_dedicated_browser_profile
  - DEV_login_UI_visible_API_off_when_flag_absent
  - remote_CI_not_run_on_candidate
  - LIVE_not_reproven_on_11f7077e
```

## T. Git Review Index
| Item | Valeur |
| --- | --- |
| Produit HEAD | `11f7077e` UNCHANGED |
| Push produit | NON |
| Handoff | (post-publish) |

## U. Conditions d'une bascule future (non exécutée)
Sous **GO Morris distinct** :
1. Créer worktree immuable @ `11f7077e`
2. Build production isolé → noter BUILD_ID
3. Préparer `start-recette.sh` + `SFIA_SOURCE_SHA=11f7077e…`
4. Backup opérationnelle (plist/env fingerprint ; DB selon politique Morris)
5. Retarget LaunchAgent vers nouveau start script
6. Smoke : `/login`, auth status, identité SHA/BUILD_ID
7. Conserver d936da81 pour rollback applicatif
8. Campagne UAT — hors ce cycle
9. Profil navigateur dédié RECETTE maintenu
10. Ne pas activer `STUDIO_DEV_TEST_LOGIN` sans mandat

## V. Verdict
**ML4C RECETTE REUSE COMPATIBLE — CARRIED RESERVES TO ARBITRATE**

- Environnement RECETTE **préservé** (d936da81 toujours servi)
- Compatibilité bascule : **oui** (pas de migration, deps/config/auth inchangés ; delta applicatif conversation/S05/D4)
- Réserves historiques **transportées**, non aggravées par le delta
- Nouveaux risques bloquants : **aucun démontré**
- GO Morris de bascule : **REQUIS** (distinct)
- RECETTE DEPLOYED / PASS / ML4C ACCEPTED / Gate C : **non déclarés**
